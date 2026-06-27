import SectionTitle from "@/components/ui/SectionTitle";
import NewsGrid from "@/components/sections/NewsGrid";

export default function ActualitesPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="Actualités & Médiathèque"
          title="Restez informé des activités de l’AUPROHADA"
          description="Retrouvez les comptes-rendus, conférences, ateliers et moments clés de la vie de l’association, année par année."
        />
        <NewsGrid />
      </div>
    </main>
  );
}