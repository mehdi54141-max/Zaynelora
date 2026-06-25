"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartLink() {
  const [nombreProduits, setNombreProduits] = useState(0);

  useEffect(() => {
    const panier = localStorage.getItem("panier-zaynelora");

    if (panier) {
      const produits = JSON.parse(panier);

      const total = produits.reduce(
        (acc: number, produit: { quantite: number }) =>
          acc + produit.quantite,
        0
      );

      setNombreProduits(total);
    }
  }, []);

  return (
    <Link href="/panier">
      Panier {nombreProduits > 0 ? `(${nombreProduits})` : ""}
    </Link>
  );
}