import Link from "next/link";

export default function JerseyFluideSignaturePage() {
  const produits = [
    ["Vanille Douce", "24,99 €", "Jaune pastel doux et lumineux.", "/produit/jersey-fluide-signature-vanille-douce"],
    ["Bleu Lagon", "24,99 €", "Bleu clair frais et raffiné.", "/produit/jersey-fluide-signature-bleu-lagon"],
    ["Sauge Pastel", "24,99 €", "Vert doux naturel et élégant.", "/produit/jersey-fluide-signature-sauge-pastel"],
    ["Beige Sable", "24,99 €", "Beige intemporel et facile à associer.", "/produit/jersey-fluide-signature-beige-sable"],
    ["Noir Élégance", "24,99 €", "Noir chic, sobre et essentiel.", "/produit/jersey-fluide-signature-noir-elegance"],
    ["Rose Voile", "24,99 €", "Rose pâle doux et féminin.", "/produit/jersey-fluide-signature-rose-voile"],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Collection Signature
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Jersey Fluide Signature
            </h1>

            <p className="mx-auto max-w-2xl text-gray-600">
              Une collection légère, élégante et fluide conçue pour le confort quotidien.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {produits.map(([nom, prix, description, lien]) => (
              <div
                key={nom}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="flex h-72 items-center justify-center bg-[#f5eee8]">
                  <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
                    Photo produit bientôt disponible
                  </span>
                </div>

                <div className="p-8">
                  <p className="mb-2 text-sm text-[#b89f88]">{prix}</p>

                  <h2 className="mb-3 text-2xl font-bold text-[#6f5643]">
                    {nom}
                  </h2>

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