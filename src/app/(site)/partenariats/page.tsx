import SectionTitle from "@/components/ui/SectionTitle";
import SponsorshipPacks from "@/components/sections/SponsorshipPacks";

export default function PartenariatsPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="Partenariats & Sponsors"
          title="L’alliance du monde professionnel et de l’élite juridique de demain"
          description="Ensemble, construisons des ponts entre la pratique du droit des affaires et la formation universitaire. Découvrez nos partenaires et rejoignez-nous."
        />
        <div className="mt-16">
          <SponsorshipPacks />
        </div>
      </div>
    </main>
  );
}