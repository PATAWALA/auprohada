import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const sections = [
  {
    university: "Université Félix Houphouët-Boigny",
    acronym: "UFHB",
    city: "Abidjan - Cocody",
    president: "DIAKITÉ Moussa",
    members: 320,
  },
  {
    university: "Université Alassane Ouattara",
    acronym: "UAO",
    city: "Bouaké",
    president: "GNAMIEN Konan",
    members: 210,
  },
  {
    university: "Université Nangui Abrogoua",
    acronym: "UNA",
    city: "Abidjan - Abobo",
    president: "AGBÉRO Tano",
    members: 180,
  },
  {
    university: "Université Jean Lorougnon Guédé",
    acronym: "UJLoG",
    city: "Daloa",
    president: "KOUAKOU Affoué",
    members: 150,
  },
  {
    university: "Université Peleforo Gon Coulibaly",
    acronym: "UPGC",
    city: "Korhogo",
    president: "SILUÉ Mamadou",
    members: 130,
  },
];

export default function ReseauxPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="Les Sections Universitaires"
          title="Un maillage ivoirien au service du droit OHADA"
          description="Les sections de l’AUPROHADA sont présentes dans les principales universités publiques de Côte d’Ivoire. Chaque section est animée par des étudiants passionnés, relais de l’information juridique et organisateurs d’événements académiques."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {sections.map((section, idx) => (
            <Card key={idx} className="hover:border-royal transition-colors">
              <p className="text-royal font-bold text-sm uppercase tracking-wider">
                {section.acronym}
              </p>
              <h3 className="font-display text-xl font-bold text-premium-dark mt-2">
                {section.university}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{section.city}</p>
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Président de section :</span>{" "}
                  {section.president}
                </p>
                <p>
                  <span className="font-semibold">Membres :</span>{" "}
                  {section.members}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA pour nouvelle section */}
        <div className="text-center bg-premium-light border-2 border-gray-200 p-10">
          <h3 className="font-display text-2xl font-bold text-premium-dark mb-4">
            Votre université n’est pas listée ?
          </h3>
          <p className="text-gray-600 mb-6">
            Demandez l’ouverture d’une section officielle de l’AUPROHADA dans
            votre établissement.
          </p>
          <Button variant="gold" size="lg" href="/rejoindre">
            Demander une section
          </Button>
        </div>
      </div>
    </main>
  );
}