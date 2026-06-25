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

export default function CommandesPage() {
  const [commandes, setCommandes] = useState<Commande[]>([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const charger = async () => {
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

    charger();
  }, []);

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
                      <td className="p-4">{commande.statut}</td>
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
