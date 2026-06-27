import Link from "next/link";
import Button from "../ui/Button";

// Mêmes données que NewsGrid (à terme, elles viendront de Supabase)
const allNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt:
      "La cérémonie d’ouverture a réuni plus de 500 étudiants et professionnels du droit à l’Université Félix Houphouët-Boigny.",
    year: 2026,
    image: "https://picsum.photos/seed/ohada1/400/400",
    category: "Événement",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt:
      "Un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé.",
    year: 2026,
    image: "https://picsum.photos/seed/ohada2/400/400",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Atelier pratique de rédaction d’actes uniformes OHADA",
    excerpt:
      "Plus de 200 étudiants ont participé à cet atelier de mise en situation professionnelle.",
    year: 2026,
    image: "https://picsum.photos/seed/ohada3/400/400",
    category: "Formation",
  },
  {
    id: 4,
    title: "Soirée de clôture et remise des certificats",
    excerpt:
      "La Semaine OHADA 2026 s’est achevée par une cérémonie solennelle.",
    year: 2026,
    image: "https://picsum.photos/seed/ohada4/400/400",
    category: "Cérémonie",
  },
  {
    id: 5,
    title: "L’AUPROHADA signe un partenariat avec le ministère de la Justice",
    excerpt:
      "Ce protocole d’accord renforce la coopération entre l’association et les pouvoirs publics.",
    year: 2025,
    image: "https://picsum.photos/seed/ohada5/400/400",
    category: "Institutionnel",
  },
  {
    id: 6,
    title: "Tournée de sensibilisation dans les universités de l’intérieur",
    excerpt:
      "Les équipes de l’AUPROHADA ont sillonné les universités de Bouaké, Daloa et Korhogo.",
    year: 2025,
    image: "https://picsum.photos/seed/ohada6/400/400",
    category: "Vie associative",
  },
];

// Trier par année décroissante puis par id décroissant pour avoir les plus récents
const sortedNews = [...allNews].sort((a, b) => b.year - a.year || b.id - a.id);
const latestNews = sortedNews.slice(0, 3);

export default function NewsPreview() {
  return (
    <section className="bg-premium-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
              Actualités récentes
            </h2>
          </div>
          <Link
            href="/actualites"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-royal hover:text-gold transition-colors group"
          >
            Voir toutes les actualités
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <polygon points="0,0 9,6 0,12" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Grille des 3 derniers articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/actualites/${item.id}`}
              className="group flex flex-col bg-white border-2 border-gray-100 hover:border-royal transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">—</span>
                  <span className="text-xs text-gray-400">{item.year}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-premium-dark group-hover:text-royal transition-colors leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.excerpt}
                </p>

                {/* Lien "Lire la suite" */}
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal group-hover:text-gold transition-colors">
                  Lire la suite
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <polygon points="0,0 9,6 0,12" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}