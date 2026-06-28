"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images réelles depuis Unsplash, libres de droits
const allNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt:
      "La cérémonie d’ouverture a réuni plus de 500 étudiants et professionnels du droit à l’Université Félix Houphouët-Boigny.",
    year: 2026,
    image:
      "/images/lancement.jpg",
    category: "Événement",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt:
      "Un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé.",
    year: 2026,
    image:
      "/images/logo.jpg",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Atelier pratique de rédaction d’actes uniformes OHADA",
    excerpt:
      "Plus de 200 étudiants ont participé à cet atelier de mise en situation professionnelle.",
    year: 2026,
    image:
      "/images/atelier.jpg",
    category: "Formation",
  },
  {
    id: 4,
    title: "Soirée de clôture et remise des certificats",
    excerpt:
      "La Semaine OHADA 2026 s’est achevée par une cérémonie solennelle.",
    year: 2026,
    image:
      "/images/lancement.jpg",
    category: "Cérémonie",
  },
  {
    id: 5,
    title: "L’AUPROHADA signe un partenariat avec le ministère de la Justice",
    excerpt:
      "Ce protocole d’accord renforce la coopération entre l’association et les pouvoirs publics.",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&h=400&q=80",
    category: "Institutionnel",
  },
  {
    id: 6,
    title: "Tournée de sensibilisation dans les universités de l’intérieur",
    excerpt:
      "Les équipes de l’AUPROHADA ont sillonné les universités de Bouaké, Daloa et Korhogo.",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910b4b5?auto=format&fit=crop&w=400&h=400&q=80",
    category: "Vie associative",
  },
];

export default function NewsGrid() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const years = Array.from(new Set(allNews.map((n) => n.year))).sort((a, b) => b - a);
  const filtered = allNews.filter((item) => item.year === selectedYear);

  return (
    <div>
      {/* Filtres années */}
      <div className="flex items-center gap-8 mb-16">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`relative text-lg font-medium uppercase tracking-wider transition-colors duration-300 ${
              selectedYear === year
                ? "text-royal"
                : "text-gray-400 hover:text-royal"
            }`}
          >
            {year}
            {selectedYear === year && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Grille d’articles */}
      <div className="space-y-0 divide-y divide-gray-100">
        {filtered.map((item) => (
          <Link
            key={item.id}
            href={`/actualites/${item.id}`}
            className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start py-10 cursor-pointer transition-all duration-300 hover:translate-x-1 relative"
          >
            {/* Vignette carrée */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden border-2 border-gray-200 group-hover:border-royal transition-colors duration-500">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
    sizes="(max-width: 768px) 64px, 80px"
  />
</div>

            {/* Contenu texte */}
            <div className="pr-8 md:pr-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">—</span>
                <span className="text-xs text-gray-400">{item.year}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-premium-dark group-hover:text-royal transition-colors duration-300 leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.excerpt}
              </p>

              {/* Lien discret "Lire la suite" */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-royal group-hover:text-gold transition-colors duration-300">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold group-hover:after:w-full after:transition-all after:duration-300">
                  Lire la suite
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-current"
                  >
                    <polygon points="0,0 9,6 0,12" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}