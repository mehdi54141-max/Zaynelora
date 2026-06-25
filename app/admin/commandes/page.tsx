"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AdminNav from "../AdminNav";

type Commande = {
  id: string;
  reference: string;
  created_at: string;
  client_nom: string;
  client_email: string;
  client_telephone: string;
  adresse_livraison: string;
  produits: unknown[];
  total: number;
  statut: string;
  stripe_session_id: string;
};

const statuts = ["Préparation", "Expédiée", "Livrée", "Annulée"];

export default function CommandesPage() {
  const [commandes, setCommandes] = useState<Commande[]>([]);
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");

  const chargerCommandes = async () => {
    const { data, error } = await supabase
      .from("commandes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setErreur(error.message);
      return;
    }

    setCommandes(data || []);
  };

  useEffect(() => {
    chargerCommandes();
  }, []);

  const modifierStatut = async (id: string, nouveauStatut: string) => {
    setErreur("");
    setMessage("");

    const { error } = await supabase
      .from("commandes")
      .update({ statut: nouveauStatut })
      .eq("id", id);

    if (error) {
      setErreur(error.message);
      return;
    }

    setCommandes((commandesActuelles) =>
      commandesActuelles.map((commande) =>
        commande.id === id
          ? { ...commande, statut: nouveauStatut }
          : commande
      )
    );

    setMessage("Statut mis à jour.");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto flex max-w-7xl gap-8">
        <AdminNav />

        <section className="flex-1">
          <h1 className="mb-8 text-4xl font-bold text-[#6f5643]">
            Commandes
          </h1>

          {erreur && (
            <div className="mb-6 rounded-2xl bg-red-50 p-4 text-red-600">
              Erreur Supabase : {erreur}
            </div>
          )}

          {message && (
            <div className="mb-6 rounded-2xl bg-green-50 p-4 text-green-700">
              {message}
            </div>
          )}

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full">
              <thead className="bg-[#f5eee8]">
                <tr>
                  <th className="p-4 text-left">Référence</th>
                  <th className="p-4 text-left">Cliente</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Total</th>
                  <th className="p-4 text-left">Statut</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {commandes.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      Aucune commande pour le moment.
                    </td>
                  </tr>
                ) : (
                  commandes.map((commande) => (
                    <tr key={commande.id} className="border-t">
                      <td className="p-4">{commande.reference}</td>
                      <td className="p-4">{commande.client_nom}</td>
                      <td className="p-4">{commande.client_email}</td>
                      <td className="p-4">
                        {Number(commande.total).toFixed(2)} €
                      </td>
                      <td className="p-4">
                        <select
                          value={commande.statut}
                          onChange={(e) =>
                            modifierStatut(commande.id, e.target.value)
                          }
                          className="rounded-xl border border-[#ead7c6] bg-white px-3 py-2"
                        >
                          {statuts.map((statut) => (
                            <option key={statut} value={statut}>
                              {statut}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-4">
                        {new Date(commande.created_at).toLocaleDateString(
                          "fr-FR"
                        )}
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
