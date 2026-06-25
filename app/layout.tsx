import type { Metadata } from "next";
import Link from "next/link";
import CartLink from "./CartLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaynelora",
  description: "Hijabs élégants, confortables et raffinés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header className="bg-[#faf8f5] px-6 py-5 md:px-10">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex justify-center md:justify-start">
              <img
                src="/logo.png"
                alt="Zaynelora"
                className="h-20 w-auto"
              />
            </Link>

            <div className="flex flex-wrap justify-center gap-5 text-sm font-medium text-gray-700 md:gap-8">
              <Link href="/">Accueil</Link>
              <Link href="/boutique">Boutique</Link>
              <Link href="/notre-histoire">Notre Histoire</Link>
              <Link href="/avis">Avis clients</Link>
              <Link href="/contact">Contact</Link>
              <CartLink />
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-[#2d2d2d] px-6 py-12 text-white md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            <div>
              <img
                src="/logo.png"
                alt="Zaynelora"
                className="mb-4 h-16 w-auto"
              />

              <p className="max-w-sm text-sm leading-6 text-gray-300">
                Élégance, confort et pudeur dans chaque détail.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Boutique</h3>

              <div className="grid gap-3 text-sm text-gray-300">
                <Link href="/boutique">Toutes les collections</Link>
                <Link href="/boutique/jersey-fluide-signature">
                  Jersey Fluide Signature
                </Link>
                <Link href="/boutique/jersey-premium-essentiel">
                  Jersey Premium Essentiel
                </Link>
                <Link href="/boutique/jersey-coton-luxe">
                  Jersey Coton Luxe
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Aide</h3>

              <div className="grid gap-3 text-sm text-gray-300">
                <Link href="/livraison-retours">Livraison & Retours</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/paiement">Moyens de paiement</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Zaynelora</h3>

              <div className="grid gap-3 text-sm text-gray-300">
                <Link href="/notre-histoire">Notre Histoire</Link>
                <Link href="/avis">Avis clients</Link>
                <Link href="/cgv">CGV</Link>
                <Link href="/confidentialite">Confidentialité</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}