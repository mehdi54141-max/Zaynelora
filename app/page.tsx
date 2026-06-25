import Link from "next/link";

export default function Home() {
  const collections = [
    [
      "Jersey Fluide Signature",
      "Léger, fluide et élégant au quotidien.",
      "24,99 €",
      "/boutique/jersey-fluide-signature",
    ],
    [
      "Jersey Premium Essentiel",
      "Maintien, confort et simplicité.",
      "20,99 €",
      "/boutique/jersey-premium-essentiel",
    ],
    [
      "Jersey Coton Luxe",
      "Douceur naturelle et confort premium.",
      "34,99 €",
      "/boutique/jersey-coton-luxe",
    ],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
          Collection Premium
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold text-[#6f5643] md:text-7xl">
          L'élégance dans chaque détail.
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-gray-600">
          Des hijabs pensés pour allier confort, douceur et raffinement au quotidien.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/boutique">
            <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
              Découvrir la collection
            </button>
          </Link>

          <Link href="/ia-conseillere">
            <button className="rounded-full border border-[#6f5643] px-8 py-4 text-[#6f5643]">
              Trouver mon hijab avec l’IA
            </button>
          </Link>
        </div>
      </section>

      <section className="px-10 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Collections
          </p>

          <h2 className="mb-4 text-4xl font-bold text-[#6f5643]">
            Nos collections signature
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-gray-600">
            Trois collections pensées pour chaque style, chaque moment et chaque besoin.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {collections.map(([title, text, price, lien]) => (
              <div key={title} className="overflow-hidden rounded-3xl bg-white text-left shadow-sm">
                <div className="flex h-56 items-center justify-center bg-[#f5eee8]">
                  <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
                    Photo produit bientôt disponible
                  </span>
                </div>

                <div className="p-8">
                  <p className="mb-2 text-sm text-[#b89f88]">À partir de {price}</p>
                  <h3 className="mb-3 text-2xl font-bold text-[#6f5643]">{title}</h3>
                  <p className="mb-6 text-gray-600">{text}</p>

                  <Link href={lien}>
                    <button className="text-[#6f5643] underline">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Nos engagements
          </p>

          <h2 className="mb-14 text-4xl font-bold text-[#6f5643]">
            Pourquoi choisir Zaynelora ?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-[#ead7c6] p-8">
              <h3 className="mb-3 text-xl font-bold text-[#6f5643]">Confort</h3>
              <p className="text-gray-600">Des matières agréables à porter toute la journée.</p>
            </div>

            <div className="rounded-3xl border border-[#ead7c6] p-8">
              <h3 className="mb-3 text-xl font-bold text-[#6f5643]">Élégance</h3>
              <p className="text-gray-600">Des couleurs raffinées, faciles à associer.</p>
            </div>

            <div className="rounded-3xl border border-[#ead7c6] p-8">
              <h3 className="mb-3 text-xl font-bold text-[#6f5643]">Conseil IA</h3>
              <p className="text-gray-600">Une aide personnalisée pour choisir le hijab idéal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#6f5643] p-12 text-center text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ead7c6]">
            IA Conseillère
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Trouvez votre hijab parfait.
          </h2>

          <p className="mb-8 text-[#f5eee8]">
            Décrivez votre tenue, votre occasion ou votre couleur préférée.
            L’IA Zaynelora vous guidera vers le meilleur choix.
          </p>

          <Link href="/ia-conseillere">
            <button className="rounded-full bg-white px-8 py-4 text-[#6f5643]">
              Commencer mon diagnostic
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Elles aiment déjà l’univers Zaynelora
          </p>

          <h2 className="mb-14 text-4xl font-bold text-[#6f5643]">
            Une expérience pensée pour inspirer confiance.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#faf8f5] p-8 text-left">
              <p className="mb-6 text-gray-600">
                “Un univers doux, élégant et très rassurant. On sent que chaque détail est pensé.”
              </p>
              <p className="font-bold text-[#6f5643]">Cliente Zaynelora</p>
            </div>

            <div className="rounded-3xl bg-[#faf8f5] p-8 text-left">
              <p className="mb-6 text-gray-600">
                “Les couleurs sont raffinées et l’expérience donne envie de découvrir toute la collection.”
              </p>
              <p className="font-bold text-[#6f5643]">Avis cliente</p>
            </div>

            <div className="rounded-3xl bg-[#faf8f5] p-8 text-left">
              <p className="mb-6 text-gray-600">
                “L’idée d’une IA qui conseille le choix du hijab est vraiment moderne et utile.”
              </p>
              <p className="font-bold text-[#6f5643]">Future cliente</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Notre histoire
          </p>

          <h2 className="mb-6 text-4xl font-bold text-[#6f5643]">
            Une marque pensée pour sublimer chaque femme.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Zaynelora est née d'une volonté simple : proposer des hijabs élégants,
            confortables et raffinés, pensés pour accompagner chaque femme au quotidien
            avec douceur, pudeur et confiance.
          </p>
        </div>
      </section>
    </main>
  );
}