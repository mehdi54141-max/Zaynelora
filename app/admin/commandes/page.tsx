"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AdminNav from "../AdminNav";

type Order = {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email: string;
  total: number;
  status: string;
};

export default function CommandesPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const charger = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setErreur(error.message);
        return;
      }

      setOrders(data || []);
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
                  <th className="p-4 text-left">Cliente</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Total</th>
                  <th className="p-4 text-left">Statut</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      Aucune commande pour le moment.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="border-t">
                      <td className="p-4">{order.customer_name}</td>
                      <td className="p-4">{order.customer_email}</td>
                      <td className="p-4">{Number(order.total).toFixed(2)} €</td>
                      <td className="p-4">{order.status}</td>
                      <td className="p-4">
                        {new Date(order.created_at).toLocaleDateString("fr-FR")}
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