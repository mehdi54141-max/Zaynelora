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

    const totalPanier = panier.reduce((total, produit) => {
      const prixNombre = Number(
        produit.prix.replace("€", "").replace(",", ".").trim()
      );

      return total + prixNombre * produit.quantite;
    }, 0);

    const livraisonOfferte = totalPanier >= 80;

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

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: livraisonOfferte ? 0 : 490,
              currency: "eur",
            },
            display_name: livraisonOfferte
              ? "Livraison offerte"
              : "Livraison standard",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 2,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
      ],

      phone_number_collection: {
        enabled: true,
      },

      customer_creation: "always",

      metadata: {
        source: "zaynelora",
        panier: JSON.stringify(panier),
        livraison: livraisonOfferte ? "offerte" : "4.90",
      },

      success_url: "https://www.zaynelora.com/confirmation",
      cancel_url: "https://www.zaynelora.com/panier",
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
