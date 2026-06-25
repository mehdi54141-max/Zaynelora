export default function CgvPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d2d2d]">
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b89f88]">
            Conditions générales de vente
          </p>

          <h1 className="mb-8 text-5xl font-bold text-[#6f5643]">
            CGV Zaynelora
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Cette page est un modèle provisoire à faire valider avant lancement.
            En e-commerce B2C, les informations contractuelles, livraison,
            paiement et rétractation doivent être clairement présentées.
          </p>
        </div>
      </section>

      <section className="bg-white px-10 py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {[
            ["1. Objet", "Les présentes conditions définissent les modalités de vente des produits proposés sur le site Zaynelora."],
            ["2. Produits", "Les hijabs proposés sont décrits avec leurs caractéristiques principales : nom, collection, prix, dimensions, matière et couleur."],
            ["3. Prix", "Les prix sont indiqués en euros. Les frais de livraison seront précisés avant validation de la commande."],
            ["4. Commande", "Toute commande validée implique l’acceptation des présentes conditions générales de vente."],
            ["5. Paiement", "Le paiement sécurisé sera mis en place via Stripe lors de la mise en ligne finale."],
            ["6. Livraison", "Les délais et tarifs de livraison seront précisés lors du lancement officiel de la boutique."],
            ["7. Droit de rétractation", "Pour les achats à distance, le consommateur bénéficie en principe d’un délai légal de rétractation de 14 jours."],
            ["8. Retours", "Les modalités de retour seront précisées dans la politique de livraison et retours."],
            ["9. Service client", "Pour toute question, le client pourra contacter Zaynelora via la page Contact."],
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