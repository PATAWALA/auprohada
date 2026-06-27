import SectionTitle from "@/components/ui/SectionTitle";
import ClubList from "@/components/sections/ClubList";

export default function ReseauxPage() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="Le Réseau des Clubs"
          title="Un maillage universitaire au service du droit OHADA"
          description="Les clubs AUPROHADA sont présents dans les principales universités publiques de Côte d’Ivoire. Chaque section est animée par des étudiants passionnés, relais de l’information juridique et organisateurs d’événements académiques."
        />
        <ClubList />
      </div>
    </main>
  );
}