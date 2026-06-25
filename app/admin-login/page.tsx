"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);

  const connexion = async (e: React.FormEvent) => {
    e.preventDefault();

    setErreur("");
    setChargement(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: motDePasse,
    });

    if (error) {
      setErreur(error.message);
      setChargement(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-sm">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.3em] text-[#b89f88]">
          Administration
        </p>

        <h1 className="mb-8 text-center text-4xl font-bold text-[#6f5643]">
          Connexion
        </h1>

        <form onSubmit={connexion} className="space-y-5">
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-[#ead7c6] p-4"
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            className="w-full rounded-2xl border border-[#ead7c6] p-4"
            required
          />

          {erreur && (
            <p className="rounded-2xl bg-red-50 p-4 text-center text-sm text-red-600">
              {erreur}
            </p>
          )}

          <button
            type="submit"
            disabled={chargement}
            className="w-full rounded-full bg-[#6f5643] py-4 text-white disabled:opacity-60"
          >
            {chargement ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}