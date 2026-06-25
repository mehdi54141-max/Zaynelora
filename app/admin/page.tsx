import Link from "next/link";
import AdminNav from "./AdminNav";

export default function AdminPage() {
  const statistiques = [
    ["Commandes", "0"],
    ["Chiffre d'affaires", "0,00 €"],
    ["En préparation", "0"],
    ["Expédiées", "0"],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <AdminNav />

        <section className="flex-1">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Administration
          </p>

          <h1 className="mb-12 text-5xl font-bold text-[#6f5643]">
            Tableau de bord
          </h1>

          <div className="mb-10 grid gap-6 md:grid-cols-4">
            {statistiques.map(([label, valeur]) => (
              <div key={label} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">{label}</p>
                <h2 className="mt-2 text-4xl font-bold text-[#6f5643]">
                  {valeur}
                </h2>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">
              Bienvenue dans votre espace administrateur.
            </h2>

            <p className="mb-8 leading-8 text-gray-600">
              Depuis cet espace, vous pourrez suivre les commandes, gérer les
              statuts, consulter les clientes, contrôler les avis et préparer
              l’évolution de Zaynelora.
            </p>

            <Link href="/admin/commandes">
              <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
                Voir les commandes
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}