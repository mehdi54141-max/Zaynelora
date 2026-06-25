import AdminNav from "../AdminNav";

export default function AdminParametresPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto flex max-w-7xl gap-8">
        <AdminNav />

        <section className="flex-1 rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-4xl font-bold text-[#6f5643]">
            Paramètres
          </h1>

          <p className="text-gray-600">
            Cette section permettra de gérer les frais de livraison, les moyens
            de paiement, les emails automatiques, les réseaux sociaux et les
            informations de la boutique.
          </p>
        </section>
      </div>
    </main>
  );
}