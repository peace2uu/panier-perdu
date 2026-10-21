const titre = "font-[family-name:var(--font-fraunces)] font-black text-green-950";

export default function Home() {
  return (
    <main className="mx-auto max-w-md px-5 pb-28 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-green-900">
        Panier Perdu
      </p>

      <h1 className={`${titre} mt-4 text-[2.6rem] leading-[1.05]`}>
        Récupère les paniers abandonnés de ta boutique.
      </h1>

      <div className="mt-8 border-y border-green-900/30 py-5">
        <p className={`${titre} text-6xl`}>7 sur 10</p>
        <p className="mt-1 text-stone-700">
          paniers sont abandonnés. Les outils de relance coûtent trop cher
          pour une petite boutique : personne ne les relance.
        </p>
      </div>

      <ol className="mt-8 space-y-6">
        {[
          ["01", "Deux relances automatiques", "Deux e-mails espacés, envoyés sans que tu y penses."],
          ["02", "Personnalisées", "Le client retrouve ses produits, ton nom, ton ton."],
          ["03", "Code promo facultatif", "Une réduction sur la seconde relance, ou pas."],
        ].map(([n, t, d]) => (
          <li key={n} className="flex gap-4">
            <span className={`${titre} text-2xl text-orange-700`}>{n}</span>
            <div>
              <p className="font-bold text-green-950">{t}</p>
              <p className="text-stone-700">{d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-2 border-green-950 bg-white p-5">
        <p className={`${titre} text-5xl`}>
          29 €<span className="text-base font-normal"> / mois</span>
        </p>
        <p className="mt-1 text-stone-700">
          Moins d'un euro par jour. Relances illimitées.
        </p>
        <p className="mt-4 border-t border-stone-300 pt-4 text-sm text-stone-700">
          Satisfait ou remboursé 30 jours : écris-moi par e-mail, remboursement
          sous 7 jours. Sans engagement, résiliable à tout moment.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-stone-300 bg-[#faf6ee] p-4">
        <a
          href="#"
          className="mx-auto block max-w-md bg-orange-700 py-4 text-center text-lg font-bold text-white"
        >
          Commencer, c'est gratuit
        </a>
      </div>
    </main>
  );
}
