// src/app/(site)/reseaux/page.tsx
import SectionTitle from "@/components/ui/SectionTitle";
import ClubList from "@/components/sections/ClubList";

export default function ReseauxPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="Les Sections Universitaires"
          title="Un maillage universitaire au service du droit OHADA"
          description="Les sections universitaires de l’AUPROHADA sont présentes dans les principales universités publiques de Côte d’Ivoire et s’étendent désormais à d’autres pays d’Afrique. Chaque section est animée par des étudiants passionnés, relais de l’information juridique et organisateurs d’événements académiques."
        />
        <ClubList />
      </div>
    </main>
  );
}