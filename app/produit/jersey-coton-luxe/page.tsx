export default function ProduitPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="mx-auto max-w-7xl px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex h-[600px] items-center justify-center rounded-3xl bg-[#f5eee8]">
            <span className="text-center text-sm uppercase tracking-[0.2em] text-[#b89f88]">
              Photo produit bientôt disponible
            </span>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
              Collection Luxe
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              Jersey Coton Luxe
            </h1>

            <p className="mb-6 text-3xl font-semibold text-[#6f5643]">
              34,99 €
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Le hijab le plus premium de la collection Zaynelora. Sa forte
              teneur en coton offre une douceur naturelle, une belle tenue et
              un confort exceptionnel tout au long de la journée.
            </p>

            <div className="mb-10 space-y-4">
              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ 95% coton
              </div>

              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ Toucher doux et respirant
              </div>

              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ Qualité premium
              </div>
            </div>

            <button className="w-full rounded-full bg-[#6f5643] py-4 text-lg text-white">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}