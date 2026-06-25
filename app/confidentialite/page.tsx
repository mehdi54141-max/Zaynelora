export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Politique de confidentialité
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            Protection de vos données
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Cette page explique comment Zaynelora pourra collecter, utiliser et protéger
            les données personnelles de ses clientes.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {[
            ["1. Données collectées", "Lors d’une commande ou d’un contact, Zaynelora pourra collecter le nom, l’adresse email, l’adresse de livraison et les informations nécessaires au traitement de la commande."],
            ["2. Utilisation des données", "Les données seront utilisées pour gérer les commandes, répondre aux messages, améliorer l’expérience client et assurer le suivi du service."],
            ["3. Paiement", "Les paiements seront traités par un prestataire sécurisé comme Stripe. Zaynelora ne stockera pas les données bancaires complètes."],
            ["4. Conservation", "Les données seront conservées uniquement pendant la durée nécessaire à la gestion commerciale, légale et administrative."],
            ["5. Droits des clientes", "Chaque cliente pourra demander l’accès, la modification ou la suppression de ses données personnelles."],
            ["6. Contact", "Pour toute demande liée aux données personnelles, les clientes pourront contacter Zaynelora via la page Contact."],
          ].map(([titre, texte]) => (
            <div key={titre} className="rounded-3xl border border-[#ead7c6] bg-[#faf8f5] p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#6f5643]">{titre}</h2>
              <p className="leading-8 text-gray-600">{texte}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}