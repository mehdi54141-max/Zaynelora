export default function FaqPage() {
  const questions = [
    [
      "Quels sont les délais de livraison ?",
      "Les délais de livraison seront précisés lors du lancement officiel de Zaynelora.",
    ],
    [
      "Puis-je retourner un article ?",
      "Oui, une politique de retour claire sera mise en place afin de garantir une expérience simple et rassurante.",
    ],
    [
      "Les hijabs sont-ils opaques ?",
      "Chaque fiche produit indiquera les caractéristiques exactes : matière, opacité, tombé et confort.",
    ],
    [
      "Comment choisir la bonne couleur ?",
      "Notre future conseillère IA vous aidera à choisir la couleur idéale selon votre tenue, votre occasion et vos préférences.",
    ],
    [
      "Quand les photos produits seront-elles disponibles ?",
      "Les photos seront ajoutées dès réception des échantillons et après le shooting officiel Zaynelora.",
    ],
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            FAQ
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Questions fréquentes
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Retrouvez ici les réponses aux questions les plus courantes sur
            Zaynelora, nos collections et l’expérience d’achat.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          {questions.map(([question, reponse]) => (
            <div
              key={question}
              className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">
                {question}
              </h2>

              <p className="leading-8 text-gray-600">{reponse}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}