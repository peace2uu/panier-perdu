import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["700", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Panier Perdu : récupère tes paniers abandonnés",
  description:
    "Relance automatiquement les paniers abandonnés de ta boutique Shopify. 29 €/mois, relances illimitées.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[#faf6ee] font-[family-name:var(--font-inter)] text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}
