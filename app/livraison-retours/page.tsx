export default function LivraisonRetoursPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Livraison & Retours
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Une expérience simple et rassurante.
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Nous préparons une politique claire pour garantir une expérience
            d’achat fluide, transparente et élégante.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8">
            <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">
              Livraison
            </h2>
            <p className="leading-8 text-gray-600">
              Les délais et tarifs de livraison seront précisés lors du lancement
              officiel de la boutique Zaynelora.
            </p>
          </div>

          <div className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8">
            <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">
              Retours
            </h2>
            <p className="leading-8 text-gray-600">
              Une politique de retour claire sera mise en place afin de garantir
              une expérience simple et rassurante.
            </p>
          </div>

          <div className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8">
            <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">
              Assistance
            </h2>
            <p className="leading-8 text-gray-600">
              Notre service client sera disponible pour vous accompagner avant
              et après votre commande.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}