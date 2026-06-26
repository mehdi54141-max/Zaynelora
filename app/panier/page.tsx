"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ProduitPanier = {
  nom: string;
  prix: string;
  collection: string;
  quantite: number;
};

export default function PanierPage() {
  const [panier, setPanier] = useState<ProduitPanier[]>([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const panierSauvegarde = localStorage.getItem("panier-zaynelora");

      if (panierSauvegarde) {
        setPanier(JSON.parse(panierSauvegarde));
      }

      setChargement(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const sauvegarderPanier = (nouveauPanier: ProduitPanier[]) => {
    localStorage.setItem("panier-zaynelora", JSON.stringify(nouveauPanier));
    setPanier(nouveauPanier);
  };

  const augmenterQuantite = (indexProduit: number) => {
    const nouveauPanier = [...panier];
    nouveauPanier[indexProduit].quantite += 1;
    sauvegarderPanier(nouveauPanier);
  };

  const diminuerQuantite = (indexProduit: number) => {
    const nouveauPanier = [...panier];

    if (nouveauPanier[indexProduit].quantite <= 1) {
      nouveauPanier.splice(indexProduit, 1);
    } else {
      nouveauPanier[indexProduit].quantite -= 1;
    }

    sauvegarderPanier(nouveauPanier);
  };

  const supprimerProduit = (indexProduit: number) => {
    const nouveauPanier = panier.filter((_, index) => index !== indexProduit);
    sauvegarderPanier(nouveauPanier);
  };

  const viderPanier = () => {
    localStorage.removeItem("panier-zaynelora");
    setPanier([]);
  };

  const total = panier.reduce((acc, produit) => {
    const prixNombre = Number(
      produit.prix.replace("€", "").replace(",", ".").trim()
    );

    return acc + prixNombre * produit.quantite;
  }, 0);

  if (chargement) {
    return (
      <main className="min-h-screen bg-[#faf8f5] px-6 py-20 text-center text-[#6f5643]">
        Chargement du panier...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Panier
            </p>

            <h1 className="text-5xl font-bold text-[#6f5643]">
              Votre panier
            </h1>
          </div>

          {panier.length === 0 ? (
            <div className="text-center">
              <p className="mb-8 text-lg text-gray-600">
                Votre panier est vide.
              </p>

              <Link href="/boutique">
                <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
                  Découvrir la boutique
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {panier.map((produit, index) => (
                <div
                  key={`${produit.nom}-${index}`}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >
                  <p className="mb-2 text-sm text-[#b89f88]">
                    {produit.collection}
                  </p>

                  <h2 className="mb-2 text-2xl font-bold text-[#6f5643]">
                    {produit.nom}
                  </h2>

                  <p className="mb-6 text-gray-600">
                    Prix : {produit.prix}
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => diminuerQuantite(index)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6f5643] text-[#6f5643]"
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">
                        {produit.quantite}
                      </span>

                      <button
                        onClick={() => augmenterQuantite(index)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6f5643] text-white"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => supprimerProduit(index)}
                      className="rounded-full border border-[#6f5643] px-6 py-3 text-[#6f5643]"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl bg-white p-8 text-right shadow-sm">
                <p className="mb-6 text-3xl font-bold text-[#6f5643]">
                  Total : {total.toFixed(2).replace(".", ",")} €
                </p>

                <div className="flex flex-col justify-end gap-4 sm:flex-row">
                  <button
                    onClick={viderPanier}
                    className="rounded-full border border-[#6f5643] px-8 py-4 text-[#6f5643]"
                  >
                    Vider le panier
                  </button>

                  <Link href="/checkout">
                    <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
                      Passer au paiement
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}