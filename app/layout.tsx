import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="fr">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
