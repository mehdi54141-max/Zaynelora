"use client";

type ProduitPanier = {
  nom: string;
  prix: string;
  collection: string;
  quantite?: number;
};

export default function AddToCartButton({
  nom,
  prix,
  collection,
}: ProduitPanier) {
  const ajouterAuPanier = () => {
    const panierActuel = localStorage.getItem("panier-zaynelora");
    const panier: ProduitPanier[] = panierActuel ? JSON.parse(panierActuel) : [];

    const produitExistant = panier.find((produit) => produit.nom === nom);

    if (produitExistant) {
      produitExistant.quantite = (produitExistant.quantite || 1) + 1;
    } else {
      panier.push({
        nom,
        prix,
        collection,
        quantite: 1,
      });
    }

    localStorage.setItem("panier-zaynelora", JSON.stringify(panier));

    alert("Produit ajouté au panier !");
  };

  return (
    <button
      onClick={ajouterAuPanier}
      className="mt-8 w-full rounded-full bg-[#6f5643] px-8 py-5 text-lg text-white transition hover:opacity-90"
    >
      Ajouter au panier
    </button>
  );
}