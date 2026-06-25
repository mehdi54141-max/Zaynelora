import Link from "next/link";

export default function JerseyCotonLuxePage() {
  const produits = [
    ["Lagon Clair", "34,99 €", "Bleu turquoise clair et frais.", "/produit/jersey-coton-luxe-lagon-clair"],
    ["Sauge Lumière", "34,99 €", "Vert clair doux et naturel.", "/produit/jersey-coton-luxe-sauge-lumiere"],
    ["Mauve Brume", "34,99 €", "Violet grisé élégant et subtil.", "/produit/jersey-coton-luxe-mauve-brume"],
    ["Blanc Pur", "34,99 €", "Blanc lumineux et intemporel.", "/produit/jersey-coton-luxe-blanc-pur"],
    ["Ivoire Royal", "34,99 €", "Ivoire chaud et raffiné.", "/produit/jersey-coton-luxe-ivoire-royal"],
    ["Gris Perle", "34,99 €", "Gris doux, chic et moderne.", "/produit/jersey-coton-luxe-gris-perle"],
    ["Rose Aurore", "34,99 €", "Rose pastel tendre et lumineux.", "/produit/jersey-coton-luxe-rose-aurore"],
    ["Noir Prestige", "34,99 €", "Noir premium, profond et élégant.", "/produit/jersey-coton-luxe-noir-prestige"],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Collection Luxe
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Jersey Coton Luxe
            </h1>

            <p className="mx-auto max-w-2xl text-gray-600">
              Une collection premium à forte teneur en coton, pensée pour la douceur,
              la tenue et le confort.
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