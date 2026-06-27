"use client";

import { useState } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const allNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt:
      "La cérémonie d’ouverture a réuni plus de 500 étudiants et professionnels du droit à l’Université Félix Houphouët-Boigny. Les allocutions ont souligné l’importance de la formation des élites juridiques.",
    year: 2026,
    image: "/images/news/semaine-ohada-2026.jpg",
    category: "Événement",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt:
      "Un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé. Les discussions ont porté sur la compétitivité des entreprises et la sécurité juridique.",
    year: 2026,
    image: "/images/news/conference-inaugurale.jpg",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Atelier pratique de rédaction d’actes uniformes OHADA",
    excerpt:
      "Plus de 200 étudiants ont participé à cet atelier de mise en situation professionnelle, encadré par des magistrats et avocats spécialisés.",
    year: 2026,
    image: "/images/news/atelier-redaction.jpg",
    category: "Formation",
  },
  {
    id: 4,
    title: "Soirée de clôture et remise des certificats",
    excerpt:
      "La Semaine OHADA 2026 s’est achevée par une cérémonie solennelle en présence des autorités universitaires et des partenaires institutionnels.",
    year: 2026,
    image: "/images/news/soiree-cloture.jpg",
    category: "Cérémonie",
  },
  {
    id: 5,
    title: "L’AUPROHADA signe un partenariat avec le ministère de la Justice",
    excerpt:
      "Ce protocole d’accord renforce la coopération entre l’association et les pouvoirs publics pour la diffusion du droit OHADA en milieu universitaire.",
    year: 2025,
    image: "/images/news/partenariat-ministere.jpg",
    category: "Institutionnel",
  },
  {
    id: 6,
    title: "Tournée de sensibilisation dans les universités de l’intérieur",
    excerpt:
      "Les équipes de l’AUPROHADA ont sillonné les universités de Bouaké, Daloa et Korhogo pour présenter les activités et recruter de nouveaux membres.",
    year: 2025,
    image: "/images/news/tournee-sensibilisation.jpg",
    category: "Vie associative",
  },
];

export default function NewsGrid() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const years = Array.from(new Set(allNews.map((n) => n.year))).sort((a, b) => b - a);

  const filtered = allNews.filter((item) => item.year === selectedYear);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-10">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-5 py-2 font-semibold text-sm uppercase tracking-wider border-2 transition-colors ${
              selectedYear === year
                ? "bg-royal text-white border-royal"
                : "bg-white text-royal border-royal hover:bg-royal hover:text-white"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <Card key={item.id} className="group">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="outline">{item.category}</Badge>
                <span className="text-sm text-gray-400">{item.year}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-premium-dark group-hover:text-royal transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 line-clamp-3">{item.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}