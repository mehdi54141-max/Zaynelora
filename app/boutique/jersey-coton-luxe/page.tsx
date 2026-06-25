"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Produit = {
  id: string;
  nom: string;
  slug: string;
  collection: string;
  description: string;
  prix: number;
  couleur: string | null;
  image_url: string | null;
  stock: number;
  actif: boolean;
};

export default function JerseyCotonLuxePage() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const chargerProduits = async () => {
      const { data } = await supabase
        .from("produits")
        .select("*")
        .eq("collection", "Jersey Coton Luxe")
        .eq("actif", true)
        .order("created_at", { ascending: false });

      setProduits(data || []);
      setChargement(false);
    };

    chargerProduits();
  }, []);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Collection Luxe
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Jersey Coton Luxe
            </h1>

            <p className="mx-auto max-w-2xl text-gray-600">
              Une collection premium à forte teneur en coton, pensée pour la
              douceur, la tenue et le confort.
            </p>
          </div>

          {chargement ? (
            <p className="text-center text-gray-500">
              Chargement des produits...
            </p>
          ) : produits.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
              <p className="text-gray-600">
                Aucun produit disponible dans cette collection pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {produits.map((produit) => (
                <div
                  key={produit.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-sm"
                >
                  <div className="flex h-72 items-center justify-center bg-[#f5eee8]">
                    {produit.image_url ? (
                      <img
                        src={produit.image_url}
                        alt={produit.nom}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
                        Photo produit bientôt disponible
                      </span>
                    )}
                  </div>

                  <div className="p-8">
                    <p className="mb-2 text-sm text-[#b89f88]">
                      {Number(produit.prix).toFixed(2).replace(".", ",")} €
                    </p>

                    <h2 className="mb-3 text-2xl font-bold text-[#6f5643]">
                      {produit.nom}
                    </h2>

                    <p className="mb-6 text-gray-600">
                      {produit.description}
                    </p>

                    <Link href={`/produit/${produit.slug}`}>
                      <button className="w-full rounded-full bg-[#6f5643] py-3 text-white">
                        Voir le produit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
