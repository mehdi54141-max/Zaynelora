import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type ProduitPanier = {
  nom: string;
  prix: string;
  collection: string;
  quantite: number;
};

export async function POST(request: Request) {
  try {
    const panier: ProduitPanier[] = await request.json();

    const lineItems = panier.map((produit) => {
      const prixNombre = Number(
        produit.prix.replace("€", "").replace(",", ".").trim()
      );

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: produit.nom,
            description: produit.collection,
          },
          unit_amount: Math.round(prixNombre * 100),
        },
        quantity: produit.quantite,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,

      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "CH", "LU"],
      },
      phone_number_collection: {
        enabled: true,
      },
      customer_creation: "always",

      metadata: {
        source: "zaynelora",
        panier: JSON.stringify(panier),
      },

      success_url: "http://localhost:3000/confirmation",
      cancel_url: "http://localhost:3000/panier",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erreur Stripe" },
      { status: 500 }
    );
  }
}