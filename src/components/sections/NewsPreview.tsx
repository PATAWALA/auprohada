import Card from "../ui/Card";
import Badge from "../ui/Badge";

const previewNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt:
      "La cérémonie d’ouverture a réuni plus de 500 étudiants et professionnels du droit à l’Université Félix Houphouët-Boigny.",
    year: 2026,
    image: "/images/news/semaine-ohada-2026.jpg",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt:
      "Un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé.",
    year: 2026,
    image: "/images/news/conference-inaugurale.jpg",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-20 bg-premium-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold font-semibold tracking-[0.2em] uppercase mb-2">
              Actualités
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
              Les temps forts de l’association
            </h2>
          </div>
          <a
            href="/actualites"
            className="hidden md:inline-block text-royal font-semibold hover:text-royal-700 transition-colors"
          >
            Voir toutes les actualités →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {previewNews.map((item) => (
            <Card key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="royal">{item.year}</Badge>
                <h3 className="mt-4 font-display text-xl font-bold text-premium-dark group-hover:text-royal transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a href="/actualites" className="text-royal font-semibold">
            Toutes les actualités →
          </a>
        </div>
      </div>
    </section>
  );
}