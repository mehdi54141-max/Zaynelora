"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

const liens = [
  {
    nom: "📊 Tableau de bord",
    href: "/admin",
  },
  {
    nom: "📦 Commandes",
    href: "/admin/commandes",
  },
  {
    nom: "👗 Produits",
    href: "/admin/produits",
  },
  {
    nom: "👥 Clientes",
    href: "/admin/clientes",
  },
  {
    nom: "⭐ Avis",
    href: "/admin/avis",
  },
  {
    nom: "⚙️ Paramètres",
    href: "/admin/parametres",
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  const deconnexion = async () => {
    await supabase.auth.signOut();

    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "/admin-login";
  };

  return (
    <aside className="w-72 rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-[#6f5643]">
        Administration
      </h2>

      <nav className="space-y-2">
        {liens.map((lien) => (
          <Link
            key={lien.href}
            href={lien.href}
            className={`block rounded-2xl px-4 py-3 transition ${
              pathname === lien.href
                ? "bg-[#6f5643] text-white"
                : "text-[#6f5643] hover:bg-[#f5eee8]"
            }`}
          >
            {lien.nom}
          </Link>
        ))}
      </nav>

      <button
        onClick={deconnexion}
        className="mt-8 w-full rounded-2xl border border-[#6f5643] px-4 py-3 text-[#6f5643]"
      >
        Déconnexion
      </button>
    </aside>
  );
}
