import AddToCartButton from "./AddToCartButton";

type Produit = {
  nom: string;
  prix: string;
  description: string;
  collection: string;
};

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const produits: Record<string, Produit> = {
    "jersey-fluide-signature-vanille-douce": {
      nom: "Jersey Fluide Signature — Vanille Douce",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Délicat et lumineux, Vanille Douce apporte une touche de douceur à vos tenues.",
    },
    "jersey-fluide-signature-bleu-lagon": {
      nom: "Jersey Fluide Signature — Bleu Lagon",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Bleu Lagon apporte fraîcheur, modernité et élégance à votre garde-robe.",
    },
    "jersey-fluide-signature-sauge-pastel": {
      nom: "Jersey Fluide Signature — Sauge Pastel",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Une teinte douce et naturelle, idéale pour un style raffiné au quotidien.",
    },
    "jersey-fluide-signature-beige-sable": {
      nom: "Jersey Fluide Signature — Beige Sable",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Un beige intemporel, chaleureux et facile à associer avec toutes vos tenues.",
    },
    "jersey-fluide-signature-noir-elegance": {
      nom: "Jersey Fluide Signature — Noir Élégance",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Le noir chic et essentiel, parfait pour chaque occasion.",
    },
    "jersey-fluide-signature-rose-voile": {
      nom: "Jersey Fluide Signature — Rose Voile",
      prix: "24,99 €",
      collection: "Jersey Fluide Signature",
      description: "Un rose pâle féminin, délicat et élégant.",
    },

    "jersey-premium-essentiel-sauge-naturelle": {
      nom: "Jersey Premium Essentiel — Sauge Naturelle",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Une nuance naturelle et discrète pour une élégance simple au quotidien.",
    },
    "jersey-premium-essentiel-noir-intemporel": {
      nom: "Jersey Premium Essentiel — Noir Intemporel",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Le noir essentiel, sobre, chic et facile à porter.",
    },
    "jersey-premium-essentiel-sable-dore": {
      nom: "Jersey Premium Essentiel — Sable Doré",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Un beige chaud et lumineux qui sublime naturellement les tenues neutres.",
    },
    "jersey-premium-essentiel-soleil-pastel": {
      nom: "Jersey Premium Essentiel — Soleil Pastel",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Une touche lumineuse et douce pour un style délicat.",
    },
    "jersey-premium-essentiel-brume-sauge": {
      nom: "Jersey Premium Essentiel — Brume Sauge",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Un vert très clair, moderne et apaisant.",
    },
    "jersey-premium-essentiel-bleu-celeste": {
      nom: "Jersey Premium Essentiel — Bleu Céleste",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Un bleu ciel lumineux, doux et raffiné.",
    },
    "jersey-premium-essentiel-bleu-nuit": {
      nom: "Jersey Premium Essentiel — Bleu Nuit",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Un bleu profond et sophistiqué, alternative élégante au noir.",
    },
    "jersey-premium-essentiel-orchidee-brume": {
      nom: "Jersey Premium Essentiel — Orchidée Brume",
      prix: "20,99 €",
      collection: "Jersey Premium Essentiel",
      description: "Une nuance rose-violet subtile, féminine et raffinée.",
    },

    "jersey-coton-luxe-lagon-clair": {
      nom: "Jersey Coton Luxe — Lagon Clair",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un bleu turquoise clair, frais et lumineux.",
    },
    "jersey-coton-luxe-sauge-lumiere": {
      nom: "Jersey Coton Luxe — Sauge Lumière",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Une teinte végétale douce, naturelle et sophistiquée.",
    },
    "jersey-coton-luxe-mauve-brume": {
      nom: "Jersey Coton Luxe — Mauve Brume",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un violet grisé élégant, discret et unique.",
    },
    "jersey-coton-luxe-blanc-pur": {
      nom: "Jersey Coton Luxe — Blanc Pur",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un blanc lumineux et intemporel pour une élégance pure.",
    },
    "jersey-coton-luxe-ivoire-royal": {
      nom: "Jersey Coton Luxe — Ivoire Royal",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un ivoire chaud, raffiné et facile à associer.",
    },
    "jersey-coton-luxe-gris-perle": {
      nom: "Jersey Coton Luxe — Gris Perle",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un gris doux, chic et moderne.",
    },
    "jersey-coton-luxe-rose-aurore": {
      nom: "Jersey Coton Luxe — Rose Aurore",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un rose pastel tendre, lumineux et féminin.",
    },
    "jersey-coton-luxe-noir-prestige": {
      nom: "Jersey Coton Luxe — Noir Prestige",
      prix: "34,99 €",
      collection: "Jersey Coton Luxe",
      description: "Un noir premium, profond et intemporel.",
    },
  };

  const produit = produits[slug];

  if (!produit) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f5]">
        <h1 className="text-3xl font-bold text-[#6f5643]">
          Produit introuvable
        </h1>
      </main>
    );
  }

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
              {produit.collection}
            </p>

            <h1 className="mb-4 text-5xl font-bold text-[#6f5643]">
              {produit.nom}
            </h1>

            <p className="mb-6 text-3xl font-semibold text-[#6f5643]">
              {produit.prix}
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              {produit.description}
            </p>

            <div className="mb-10 space-y-4">
              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ Matière confortable
              </div>
              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ Élégant au quotidien
              </div>
              <div className="rounded-2xl border border-[#ead7c6] p-4">
                ✓ Dimensions : 180 x 70 cm
              </div>
            </div>

            <AddToCartButton
              nom={produit.nom}
              prix={produit.prix}
              collection={produit.collection}
            />
          </div>
        </div>
      </section>
    </main>
  );
}