import AdminNav from "../AdminNav";

export default function AdminAvisPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto flex max-w-7xl gap-8">
        <AdminNav />

        <section className="flex-1 rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-4xl font-bold text-[#6f5643]">
            Avis clients
          </h1>

          <p className="text-gray-600">
            Vous pourrez approuver, modifier ou supprimer les avis laissés par
            vos clientes.
          </p>
        </section>
      </div>
    </main>
  );
}