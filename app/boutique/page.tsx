import Link from "next/link";

export default function BoutiquePage() {
  const categories = [
    {
      titre: "Jersey Fluide Signature",
      description: "Léger, fluide et élégant au quotidien.",
      lien: "/boutique/jersey-fluide-signature",
      nombre: "6 couleurs",
    },
    {
      titre: "Jersey Premium Essentiel",
      description: "Maintien, confort et simplicité.",
      lien: "/boutique/jersey-premium-essentiel",
      nombre: "8 couleurs",
    },
    {
      titre: "Jersey Coton Luxe",
      description: "Douceur naturelle et confort premium.",
      lien: "/boutique/jersey-coton-luxe",
      nombre: "8 couleurs",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Boutique
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Choisir une collection
            </h1>

            <p className="mx-auto max-w-2xl text-gray-600">
              Sélectionnez une catégorie pour découvrir toutes les couleurs disponibles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((categorie) => (
              <Link key={categorie.titre} href={categorie.lien}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-72 items-center justify-center bg-[#f5eee8]">
                    <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
                      {categorie.nombre}
                    </span>
                  </div>

                  <div className="p-8">
                    <p className="mb-2 text-sm text-[#b89f88]">
                      Collection
                    </p>

                    <h2 className="mb-3 text-2xl font-bold text-[#6f5643]">
                      {categorie.titre}
                    </h2>

                    <p className="mb-6 text-gray-600">
                      {categorie.description}
                    </p>

                    <button className="w-full rounded-full bg-[#6f5643] py-3 text-white">
                      Voir la collection
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}