import Image from "next/image";
import Button from "../ui/Button";

const ouvrages = [
  {
    titre: "Code OHADA commenté",
    couverture: "/images/livres/code-ohada.jpg",
    partenaire: "Cabinet CIC",
    logoPartenaire: "/images/sponsors/cic-conseil.png",
    prixAvantage: "-50% CNDJ",
  },
  {
    titre: "Droit des sociétés commerciales",
    couverture: "/images/livres/droit-societes.jpg",
    partenaire: "SCPA Koné & Associés",
    logoPartenaire: "/images/sponsors/kone-associes.png",
    prixAvantage: "-50% CNDJ",
  },
  {
    titre: "Recouvrement et voies d’exécution",
    couverture: "/images/livres/recouvrement.jpg",
    partenaire: "Lex Africa",
    logoPartenaire: "/images/sponsors/lex-africa.png",
    prixAvantage: "-50% CNDJ",
  },
];

export default function LibrairieJuridique() {
  return (
    <section id="librairie" className="bg-premium-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
            Librairie Juridique
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des ouvrages de référence proposés par nos cabinets partenaires, avec des avantages exclusifs réservés aux membres.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {ouvrages.map((livre, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 hover:border-gold transition-colors duration-300 flex flex-col"
            >
              {/* Couverture */}
              <div className="relative w-full h-72 overflow-hidden border-b border-gray-100">
                <Image
                  src={livre.couverture}
                  alt={livre.titre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-premium-dark mb-2">{livre.titre}</h3>

                {/* Partenaire */}
                <div className="flex items-center gap-3 mt-2">
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
                <div className="mt-4 inline-block bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold-700 uppercase tracking-wider">
                  Avantage Membre : {livre.prixAvantage}
                </div>

                {/* Bouton */}
                <div className="mt-6 pt-4 border-t border-gray-100 mt-auto">
                  <Button variant="royal" size="sm" className="w-full">
                    Se procurer l’ouvrage
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