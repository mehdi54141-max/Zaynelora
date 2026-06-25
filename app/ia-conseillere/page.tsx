import Link from "next/link";

export default function IaConseillerePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            IA Conseillère
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Trouvez le hijab qui vous correspond.
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Cette page accueillera bientôt votre conseillère IA Zaynelora.
            Elle aidera chaque cliente à choisir une couleur selon sa tenue,
            son style, son teint et l’occasion.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#6f5643] p-12 text-center text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ead7c6]">
            Diagnostic personnalisé
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            L’assistant IA arrive bientôt.
          </h2>

          <p className="mb-8 text-[#f5eee8]">
            En attendant, vous pouvez découvrir nos trois collections et choisir
            la couleur qui vous inspire le plus.
          </p>

          <Link href="/boutique">
            <button className="rounded-full bg-white px-8 py-4 text-[#6f5643]">
              Voir les collections
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}