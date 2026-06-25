export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Contact
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Nous sommes à votre écoute.
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Une question sur une collection, une commande ou un produit ?
            Notre équipe vous répondra dans les meilleurs délais.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#6f5643]">
                Écrivez-nous
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

                <textarea
                  placeholder="Votre message"
                  rows={6}
                  className="w-full rounded-2xl border border-[#ead7c6] p-4"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#6f5643] px-8 py-4 text-white"
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#6f5643]">
                Informations
              </h2>

              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="font-semibold text-[#6f5643]">Email</p>
                  <p>contact@zaynelora.com</p>
                </div>

                <div>
                  <p className="font-semibold text-[#6f5643]">
                    Service client
                  </p>
                  <p>Lundi au vendredi</p>
                  <p>9h00 - 18h00</p>
                </div>

                <div>
                  <p className="font-semibold text-[#6f5643]">
                    Réponse moyenne
                  </p>
                  <p>Moins de 24 heures ouvrées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}