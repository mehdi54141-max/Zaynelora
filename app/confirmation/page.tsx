import Link from "next/link";

export default function ConfirmationPage() {
  const numeroCommande = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-sm">
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f5eee8] text-5xl text-[#6f5643]">
              ✓
            </div>
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Commande confirmée
          </p>

          <h1 className="mb-6 text-5xl font-bold text-[#6f5643]">
            Merci pour votre commande.
          </h1>

          <p className="mb-10 text-lg leading-8 text-gray-600">
            Votre commande a bien été prise en compte.
            <br />
            Un email de confirmation vous sera envoyé avec le récapitulatif de
            votre achat.
          </p>

          <div className="mb-10 rounded-2xl bg-[#faf8f5] p-6">
            <p className="text-sm uppercase tracking-widest text-[#b89f88]">
              Référence commande
            </p>

            <p className="mt-2 text-2xl font-bold text-[#6f5643]">
              ZAY-{numeroCommande}
            </p>
          </div>

          <div className="mb-10 grid gap-4 text-left">
            <div className="rounded-2xl border border-[#ead7c6] p-5">
              ✓ Paiement confirmé
            </div>

            <div className="rounded-2xl border border-[#ead7c6] p-5">
              ✓ Préparation de votre commande
            </div>

            <div className="rounded-2xl border border-[#ead7c6] p-5">
              ✓ Expédition dans les meilleurs délais
            </div>

            <div className="rounded-2xl border border-[#ead7c6] p-5">
              ✓ Réception de votre colis
            </div>
          </div>

          <p className="mb-10 text-gray-600">
            Merci pour votre confiance. Nous avons hâte de vous faire découvrir
            l’univers Zaynelora.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/">
              <button className="rounded-full bg-[#6f5643] px-8 py-4 text-white">
                Retour à l'accueil
              </button>
            </Link>

            <Link href="/boutique">
              <button className="rounded-full border border-[#6f5643] px-8 py-4 text-[#6f5643]">
                Continuer mes achats
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}