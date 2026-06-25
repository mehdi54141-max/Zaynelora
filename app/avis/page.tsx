export default function AvisPage() {
  const avis = [
    {
      nom: "Cliente Zaynelora",
      note: "★★★★★",
      texte:
        "Un univers très élégant, doux et rassurant. Les collections donnent vraiment envie de commander.",
    },
    {
      nom: "Avis cliente",
      note: "★★★★★",
      texte:
        "Les couleurs sont raffinées et le site inspire confiance. L’expérience est simple et agréable.",
    },
    {
      nom: "Future cliente",
      note: "★★★★★",
      texte:
        "J’aime beaucoup l’idée d’une conseillère IA pour aider à choisir son hijab selon sa tenue.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Avis clients
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Elles partagent leur expérience.
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Les avis clients seront bientôt affichés ici après les premières
            commandes Zaynelora.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {avis.map((item) => (
            <div
              key={item.nom}
              className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8"
            >
              <p className="mb-4 text-xl text-[#b89f88]">{item.note}</p>

              <p className="mb-6 leading-8 text-gray-600">“{item.texte}”</p>

              <p className="font-bold text-[#6f5643]">{item.nom}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="mb-6 text-3xl font-bold text-[#6f5643]">
            Laisser un avis
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-2xl border border-[#ead7c6] p-4"
            />

            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded-2xl border border-[#ead7c6] p-4"
            />

            <select className="w-full rounded-2xl border border-[#ead7c6] p-4">
              <option>Note</option>
              <option>★★★★★</option>
              <option>★★★★☆</option>
              <option>★★★☆☆</option>
            </select>

            <textarea
              placeholder="Votre avis"
              rows={6}
              className="w-full rounded-2xl border border-[#ead7c6] p-4"
            />

            <button
              type="submit"
              className="rounded-full bg-[#6f5643] px-8 py-4 text-white"
            >
              Envoyer mon avis
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Les avis seront vérifiés avant publication.
          </p>
        </div>
      </section>
    </main>
  );
}