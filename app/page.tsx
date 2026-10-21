export default function Home() {
  return (
    <main className="mx-auto max-w-md px-5 pb-16 pt-10">
      <p className="text-sm font-medium uppercase tracking-wide text-green-900">
        Panier Perdu
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight text-green-950">
        Récupère les paniers abandonnés de ta boutique.
      </h1>

      <p className="mt-4 text-lg text-stone-700">
        Sept paniers sur dix sont abandonnés. Les outils de relance coûtent
        trop cher pour une petite boutique, alors personne ne les relance.
      </p>

      <a
        href="#"
        className="mt-6 block rounded-lg bg-orange-700 px-6 py-4 text-center text-lg font-bold text-white"
      >
        Commencer, c'est gratuit
      </a>

      <ul className="mt-10 space-y-5 border-t border-stone-300 pt-8">
        <li>
          <p className="font-bold text-green-950">Relances automatiques</p>
          <p className="text-stone-700">
            Deux e-mails espacés, envoyés sans que tu y penses.
          </p>
        </li>
        <li>
          <p className="font-bold text-green-950">Personnalisées</p>
          <p className="text-stone-700">
            Le client retrouve ses produits, ton nom et ton ton.
          </p>
        </li>
        <li>
          <p className="font-bold text-green-950">Code promo facultatif</p>
          <p className="text-stone-700">
            Offre une réduction sur la seconde relance, ou pas.
          </p>
        </li>
      </ul>

      <div className="mt-10 rounded-lg border border-stone-300 bg-white p-5">
        <p className="text-3xl font-bold text-green-950">
          29 €<span className="text-base font-medium text-stone-600"> / mois</span>
        </p>
        <p className="mt-1 text-stone-700">
          Soit moins d'un euro par jour. Relances illimitées.
        </p>
        <p className="mt-4 text-sm font-medium text-stone-800">
          Satisfait ou remboursé pendant 30 jours. Écris-moi par e-mail et je
          te rembourse sous 7 jours. Sans engagement, résiliable à tout moment.
        </p>
      </div>
    </main>
  );
}
