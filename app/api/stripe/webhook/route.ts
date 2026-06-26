import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Signature Stripe manquante" },
      { status: 400 }
    );
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const panier = session.metadata?.panier
        ? JSON.parse(session.metadata.panier)
        : [];

      const clientNom = session.customer_details?.name || "Cliente Zaynelora";
      const clientEmail =
        session.customer_details?.email || "email-inconnu@zaynelora.fr";
      const clientTelephone = session.customer_details?.phone || "";

      const adresseLivraison = session.customer_details?.address
        ? `${session.customer_details.address.line1 || ""} ${
            session.customer_details.address.line2 || ""
          }, ${session.customer_details.address.postal_code || ""} ${
            session.customer_details.address.city || ""
          }, ${session.customer_details.address.country || ""}`
        : "";

      const total = session.amount_total ? session.amount_total / 100 : 0;

      const reference = `ZAY-${new Date()
        .toISOString()
        .slice(0, 10)
        .replaceAll("-", "")}-${session.id.slice(-6).toUpperCase()}`;

      const { error } = await supabaseAdmin.from("commandes").insert({
        reference,
        client_nom: clientNom,
        client_email: clientEmail,
        client_telephone: clientTelephone,
        adresse_livraison: adresseLivraison,
        produits: panier,
        total,
        statut: "Préparation",
        stripe_session_id: session.id,
      });

      if (error) {
        return NextResponse.json(
          { error: "Erreur enregistrement commande" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur webhook" },
      { status: 400 }
    );
  }
}