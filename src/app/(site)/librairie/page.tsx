import Image from "next/image";
import Button from "@/components/ui/Button";

const ouvrages = [
  {
    id: 1,
    titre: "Code OHADA commenté",
    couverture: "/images/livres/code-ohada.jpg",
    partenaire: "Cabinet CIC",
    logoPartenaire: "/images/sponsors/cic-conseil.png",
  },
  {
    id: 2,
    titre: "Droit des sociétés commerciales",
    couverture: "/images/livres/droit-societes.jpg",
    partenaire: "SCPA Koné & Associés",
    logoPartenaire: "/images/sponsors/kone-associes.png",
  },
  {
    id: 3,
    titre: "Recouvrement et voies d’exécution",
    couverture: "/images/livres/recouvrement.jpg",
    partenaire: "Lex Africa",
    logoPartenaire: "/images/sponsors/lex-africa.png",
  },
  {
    id: 4,
    titre: "Droit pénal des affaires",
    couverture: "/images/livres/droit-penal.jpg",
    partenaire: "Cabinet CIC",
    logoPartenaire: "/images/sponsors/cic-conseil.png",
  },
  {
    id: 5,
    titre: "Sûretés et garanties",
    couverture: "/images/livres/suretes.jpg",
    partenaire: "SCPA Koné & Associés",
    logoPartenaire: "/images/sponsors/kone-associes.png",
  },
  {
    id: 6,
    titre: "Contentieux OHADA",
    couverture: "/images/livres/contentieux.jpg",
    partenaire: "Lex Africa",
    logoPartenaire: "/images/sponsors/lex-africa.png",
  },
];

export default function LibrairiePage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      {/* Section Livres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-premium-dark mb-4">
            Librairie Juridique
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des ouvrages de référence proposés par nos cabinets partenaires, avec des avantages exclusifs réservés aux membres de l’AUPROHADA.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ouvrages.map((livre) => (
            <div
              key={livre.id}
              className="bg-white border border-gray-200 hover:border-gold transition-colors duration-300 flex flex-col"
            >
              {/* Couverture */}
              <div className="relative w-full h-72 overflow-hidden border-b border-gray-100">
                <Image
                  src={livre.couverture}
                  alt={livre.titre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Infos */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-premium-dark mb-3">
                  {livre.titre}
                </h3>

                {/* Partenaire */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src={livre.logoPartenaire}
                      alt={livre.partenaire}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-500">{livre.partenaire}</span>
                </div>

                {/* Badge avantage */}
                <div className="inline-block bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-5">
                  Partenariat CNDJ : -50% pour les membres
                </div>

                {/* Bouton */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Button variant="primary" size="sm" className="w-full">
                    Commander via l’association
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bandeau Partenaires Cabinets */}
      <section className="bg-royal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Vous êtes un cabinet d’avocats&nbsp;?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Valorisez votre expertise. Devenez cabinet partenaire de l’AUPROHADA et bénéficiez d’une vitrine exclusive auprès de milliers de futurs praticiens du droit en Afrique.
          </p>
          <Button variant="gold" size="lg" href="/partenariats">
            Demander un partenariat
          </Button>
        </div>
      </section>
    </main>
  );
}