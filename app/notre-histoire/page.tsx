export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Notre histoire
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Une marque née d’une vision simple.
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Zaynelora est née avec une ambition claire : proposer des hijabs
            élégants, confortables et raffinés, pensés pour accompagner les
            femmes dans chaque moment de leur quotidien.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#6f5643]">
                Notre mission
              </h2>

              <p className="leading-8 text-gray-600">
                Nous croyons que le hijab est bien plus qu’un accessoire.
                Il accompagne le quotidien, reflète la personnalité et participe
                à la confiance que chaque femme porte en elle.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#6f5643]">
                Notre engagement
              </h2>

              <p className="leading-8 text-gray-600">
                Sélectionner des matières agréables, des couleurs intemporelles
                et proposer une expérience moderne grâce à notre future
                conseillère IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-[#6f5643]">
            L’élégance dans chaque détail.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Chaque collection Zaynelora est imaginée pour allier douceur,
            confort et raffinement. Notre objectif est de créer un univers
            apaisant où chaque femme trouve le hijab qui lui correspond.
          </p>
        </div>
      </section>
    </main>
  );
}