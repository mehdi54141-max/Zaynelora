"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ProduitPanier = {
  nom: string;
  prix: string;
  collection: string;
  quantite: number;
};

export default function CheckoutPage() {
  const [panier, setPanier] = useState<ProduitPanier[]>([]);
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    const panierSauvegarde = localStorage.getItem("panier-zaynelora");

    if (panierSauvegarde) {
      setPanier(JSON.parse(panierSauvegarde));
    }
  }, []);

  const total = panier.reduce((acc, produit) => {
    const prixNombre = Number(
      produit.prix.replace("€", "").replace(",", ".").trim()
    );

    return acc + prixNombre * produit.quantite;
  }, 0);

  const payerAvecStripe = async () => {
    setChargement(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(panier),
    });

    const session = await response.json();

    if (session.url) {
      window.location.href = session.url;
      return;
    }

    alert("Une erreur est survenue lors de la création du paiement.");
    setChargement(false);
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Checkout
            </p>

            <h1 className="text-5xl font-bold text-[#6f5643]">
              Finaliser ma commande
            </h1>

            <p className="mt-6 text-gray-600">
              Vous serez redirigée vers une page de paiement sécurisée pour
              renseigner vos informations de livraison et régler votre commande.
            </p>
          </div>

          {panier.length === 0 ? (
            <div className="text-center">
              <p className="mb-8 text-lg text-gray-600">
                Votre panier est vide.
              </p>

              <Link href="/boutique">
                <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
                  Retour à la boutique
                </button>
              </Link>
            </div>
          ) : (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-[#6f5643]">
                Récapitulatif de commande
              </h2>

              <div className="mb-8 space-y-5">
                {panier.map((produit, index) => (
                  <div
                    key={`${produit.nom}-${index}`}
                    className="border-b border-[#ead7c6] pb-4"
                  >
                    <p className="text-sm text-[#b89f88]">
                      {produit.collection}
                    </p>

                    <h3 className="font-bold text-[#6f5643]">
                      {produit.nom}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {produit.prix} × {produit.quantite}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-3 text-[#6f5643]">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2).replace(".", ",")} €</span>
                </div>

                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>Calculée au paiement</span>
                </div>

                <div className="flex justify-between border-t border-[#ead7c6] pt-4 text-xl font-bold">
                  <span>Total produits</span>
                  <span>{total.toFixed(2).replace(".", ",")} €</span>
                </div>
              </div>

              <button
                onClick={payerAvecStripe}
                disabled={chargement}
                className="w-full rounded-full bg-[#6f5643] px-8 py-4 text-white disabled:opacity-60"
              >
                {chargement ? "Redirection..." : "Continuer vers le paiement"}
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                🔒 Paiement sécurisé. Vos informations de livraison seront
                renseignées sur la page de paiement.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}