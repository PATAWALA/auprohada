import SectionTitle from "@/components/ui/SectionTitle";
import Organigramme from "@/components/sections/Organigramme";

export default function AssociationPage() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          overline="L’Association"
          title="Notre mission : promouvoir le droit OHADA dans les universités"
          description="L’Association Universitaire pour la Promotion de l’OHADA (AUPROHADA) est une organisation estudiantine d’envergure nationale qui œuvre pour la vulgarisation du Traité relatif à l’harmonisation du droit des affaires en Afrique. Nous fédérons les clubs OHADA des universités ivoiriennes afin de créer un vivier d’excellence juridique, ouvert sur le monde professionnel."
        />
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-premium-dark mb-10 relative inline-block">
            Le Bureau National
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-royal" />
          </h3>
          <Organigramme />
        </div>
      </div>
    </main>
  );
}