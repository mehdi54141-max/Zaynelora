import Link from "next/link";

export default function JerseyPremiumEssentielPage() {
  const produits = [
    ["Sauge Naturelle", "20,99 €", "Teinte naturelle et discrète.", "/produit/jersey-premium-essentiel-sauge-naturelle"],
    ["Noir Intemporel", "20,99 €", "Le noir essentiel du quotidien.", "/produit/jersey-premium-essentiel-noir-intemporel"],
    ["Sable Doré", "20,99 €", "Beige chaud et lumineux.", "/produit/jersey-premium-essentiel-sable-dore"],
    ["Soleil Pastel", "20,99 €", "Jaune pastel doux et élégant.", "/produit/jersey-premium-essentiel-soleil-pastel"],
    ["Brume Sauge", "20,99 €", "Vert très clair, doux et moderne.", "/produit/jersey-premium-essentiel-brume-sauge"],
    ["Bleu Céleste", "20,99 €", "Bleu ciel lumineux et délicat.", "/produit/jersey-premium-essentiel-bleu-celeste"],
    ["Bleu Nuit", "20,99 €", "Bleu marine profond et sophistiqué.", "/produit/jersey-premium-essentiel-bleu-nuit"],
    ["Orchidée Brume", "20,99 €", "Rose-violet doux et raffiné.", "/produit/jersey-premium-essentiel-orchidee-brume"],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Collection Essentielle
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Jersey Premium Essentiel
            </h1>

            <p className="mx-auto max-w-2xl text-gray-600">
              Une collection confortable, polyvalente et facile à porter au quotidien.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {produits.map(([nom, prix, description, lien]) => (
              <div key={nom} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="flex h-72 items-center justify-center bg-[#f5eee8]">
                  <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
                    Photo produit bientôt disponible
                  </span>
                </div>

                <div className="p-8">
                  <p className="mb-2 text-sm text-[#b89f88]">{prix}</p>
                  <h2 className="mb-3 text-2xl font-bold text-[#6f5643]">{nom}</h2>
                  <p className="mb-6 text-gray-600">{description}</p>

                  <Link href={lien}>
                    <button className="w-full rounded-full bg-[#6f5643] py-3 text-white">
                      Voir le produit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}