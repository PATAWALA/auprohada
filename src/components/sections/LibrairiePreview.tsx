// src/components/sections/LibrairiePreview.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import PartnerLogo from "../ui/PartnerLogo";

const ouvrages = [
  {
    id: 1,
    titre: "Code OHADA commenté",
    couverture:
      "https://images.unsplash.com/photo-1589998059171-988d31f1f0d1?auto=format&fit=crop&w=300&h=400&q=80",
    partenaire: "Cabinet CIC",
  },
  {
    id: 2,
    titre: "Droit des sociétés commerciales",
    couverture:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&h=400&q=80",
    partenaire: "SCPA Koné & Associés",
  },
  {
    id: 3,
    titre: "Recouvrement et voies d’exécution",
    couverture:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&h=400&q=80",
    partenaire: "Lex Africa",
  },
];

export default function LibrairiePreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
              Librairie Juridique
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Des ouvrages de référence avec des avantages exclusifs réservés aux membres.
            </p>
          </div>
          <Link
            href="/librairie"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-royal hover:text-gold transition-colors group"
          >
            Voir toute la librairie
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <polygon points="0,0 9,6 0,12" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ouvrages.map((livre) => (
            <div
              key={livre.id}
              className="bg-white border border-gray-200 hover:border-gold transition-colors duration-300 flex flex-col"
            >
              <div className="relative w-full h-72 overflow-hidden border-b border-gray-100">
                <Image
                  src={livre.couverture}
                  alt={livre.titre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-premium-dark mb-3">{livre.titre}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <PartnerLogo name={livre.partenaire} />
                  <span className="text-sm text-gray-500">{livre.partenaire}</span>
                </div>
                <div className="inline-block bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-5">
                  Partenariat CNDJ : -50% pour les membres
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Button href="/librairie" variant="primary" size="sm" className="w-full">
                    Commander via l’association
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}