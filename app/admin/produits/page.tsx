"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AdminNav from "../AdminNav";

type Produit = {
  id: string;
  nom: string;
  slug: string;
  collection: string;
  description: string;
  prix: number;
  couleur: string;
  image_url: string;
  stock: number;
  actif: boolean;
};

const produitVide = {
  nom: "",
  slug: "",
  collection: "",
  description: "",
  prix: "",
  couleur: "",
  image_url: "",
  stock: "",
};

export default function AdminProduitsPage() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [formulaire, setFormulaire] = useState(produitVide);
  const [image, setImage] = useState<File | null>(null);
  const [envoiImage, setEnvoiImage] = useState(false);
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");

  const chargerProduits = async () => {
    const { data, error } = await supabase
      .from("produits")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setErreur(error.message);
      return;
    }

    setProduits(data || []);
  };

  useEffect(() => {
    chargerProduits();
  }, []);

  const creerSlug = (texte: string) =>
    texte
      .toLowerCase()
      .trim()
      .replaceAll(" ", "-")
      .replaceAll("é", "e")
      .replaceAll("è", "e")
      .replaceAll("ê", "e")
      .replaceAll("à", "a")
      .replaceAll("'", "-");

  const envoyerImage = async () => {
    if (!image) {
      return formulaire.image_url;
    }

    setEnvoiImage(true);

    const extension = image.name.split(".").pop();
    const nomFichier = `${Date.now()}-${creerSlug(image.name)}.${extension}`;

    const { error } = await supabase.storage
      .from("produits")
      .upload(nomFichier, image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      setEnvoiImage(false);
      throw new Error(error.message);
    }

    const { data } = supabase.storage
      .from("produits")
      .getPublicUrl(nomFichier);

    setEnvoiImage(false);

    return data.publicUrl;
  };

  const ajouterProduit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErreur("");
    setMessage("");

    try {
      const slug = formulaire.slug || creerSlug(formulaire.nom);
      const imageUrl = await envoyerImage();

      const { error } = await supabase.from("produits").insert({
        nom: formulaire.nom,
        slug,
        collection: formulaire.collection,
        description: formulaire.description,
        prix: Number(formulaire.prix),
        couleur: formulaire.couleur,
        image_url: imageUrl,
        stock: Number(formulaire.stock),
        actif: true,
      });

      if (error) {
        setErreur(error.message);
        return;
      }

      setFormulaire(produitVide);
      setImage(null);
      setMessage("Produit ajouté avec succès.");
      chargerProduits();
    } catch (error) {
      setErreur(
        error instanceof Error
          ? error.message
          : "Erreur lors de l'ajout du produit."
      );
    }
  };

  const supprimerProduit = async (id: string) => {
    const { error } = await supabase.from("produits").delete().eq("id", id);

    if (error) {
      setErreur(error.message);
      return;
    }

    chargerProduits();
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto flex max-w-7xl gap-8">
        <AdminNav />

        <section className="flex-1">
          <h1 className="mb-8 text-4xl font-bold text-[#6f5643]">
            Produits
          </h1>

          {erreur && (
            <div className="mb-6 rounded-2xl bg-red-50 p-4 text-red-600">
              {erreur}
            </div>
          )}

          {message && (
            <div className="mb-6 rounded-2xl bg-green-50 p-4 text-green-700">
              {message}
            </div>
          )}

          <form
            onSubmit={ajouterProduit}
            className="mb-10 grid gap-4 rounded-3xl bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#6f5643]">
              Ajouter un produit
            </h2>

            <input
              placeholder="Nom du produit"
              value={formulaire.nom}
              onChange={(e) =>
                setFormulaire({ ...formulaire, nom: e.target.value })
              }
              className="rounded-2xl border p-4"
              required
            />

            <input
              placeholder="Slug URL, exemple jersey-premium-noir"
              value={formulaire.slug}
              onChange={(e) =>
                setFormulaire({ ...formulaire, slug: e.target.value })
              }
              className="rounded-2xl border p-4"
            />

            <input
              placeholder="Collection"
              value={formulaire.collection}
              onChange={(e) =>
                setFormulaire({ ...formulaire, collection: e.target.value })
              }
              className="rounded-2xl border p-4"
              required
            />

            <textarea
              placeholder="Description"
              value={formulaire.description}
              onChange={(e) =>
                setFormulaire({ ...formulaire, description: e.target.value })
              }
              className="rounded-2xl border p-4"
              required
            />

            <div className="grid gap-4 md:grid-cols-3">
              <input
                placeholder="Prix"
                type="number"
                step="0.01"
                value={formulaire.prix}
                onChange={(e) =>
                  setFormulaire({ ...formulaire, prix: e.target.value })
                }
                className="rounded-2xl border p-4"
                required
              />

              <input
                placeholder="Couleur"
                value={formulaire.couleur}
                onChange={(e) =>
                  setFormulaire({ ...formulaire, couleur: e.target.value })
                }
                className="rounded-2xl border p-4"
              />

              <input
                placeholder="Stock"
                type="number"
                value={formulaire.stock}
                onChange={(e) =>
                  setFormulaire({ ...formulaire, stock: e.target.value })
                }
                className="rounded-2xl border p-4"
                required
              />
            </div>

            <input
              placeholder="URL image ou upload ci-dessous"
              value={formulaire.image_url}
              onChange={(e) =>
                setFormulaire({ ...formulaire, image_url: e.target.value })
              }
              className="rounded-2xl border p-4"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="rounded-2xl border p-4"
            />

            {image && (
              <p className="text-sm text-gray-600">
                Image sélectionnée : {image.name}
              </p>
            )}

            <button
              disabled={envoiImage}
              className="rounded-full bg-[#6f5643] px-8 py-4 text-white disabled:opacity-50"
            >
              {envoiImage ? "Envoi de l'image..." : "Ajouter le produit"}
            </button>
          </form>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full">
              <thead className="bg-[#f5eee8]">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Nom</th>
                  <th className="p-4 text-left">Collection</th>
                  <th className="p-4 text-left">Prix</th>
                  <th className="p-4 text-left">Stock</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {produits.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      Aucun produit pour le moment.
                    </td>
                  </tr>
                ) : (
                  produits.map((produit) => (
                    <tr key={produit.id} className="border-t">
                      <td className="p-4">
                        {produit.image_url ? (
                          <img
                            src={produit.image_url}
                            alt={produit.nom}
                            className="h-16 w-16 rounded-xl object-cover"
                          />
                        ) : (
                          <span className="text-sm text-gray-400">
                            Aucune image
                          </span>
                        )}
                      </td>
                      <td className="p-4">{produit.nom}</td>
                      <td className="p-4">{produit.collection}</td>
                      <td className="p-4">
                        {Number(produit.prix).toFixed(2)} €
                      </td>
                      <td className="p-4">{produit.stock}</td>
                      <td className="p-4">
                        <button
                          onClick={() => supprimerProduit(produit.id)}
                          className="rounded-full border border-red-300 px-4 py-2 text-red-600"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
  );
}
