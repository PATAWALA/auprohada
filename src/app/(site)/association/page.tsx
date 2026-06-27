import Organigramme from "@/components/sections/Organigramme";
import Button from "@/components/ui/Button";

export default function AssociationPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission – bloc épuré avec filet vertical */}
        <div className="mb-24">
          <div className="flex gap-6">
            {/* Filet doré vertical */}
            <div className="hidden sm:block w-0.5 bg-gold flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                L’Association Universitaire pour la Promotion de l’OHADA
                (AUPROHADA) est une organisation estudiantine d’envergure
                nationale qui œuvre pour la vulgarisation du Traité relatif à
                l’harmonisation du droit des affaires en Afrique. Nous fédérons
                les clubs OHADA des universités ivoiriennes afin de créer un
                vivier d’excellence juridique, ouvert sur le monde professionnel.
              </p>
            </div>
          </div>
        </div>

        {/* Bureau National */}
        <div className="mb-16">
          <div className="w-12 h-0.5 bg-gold mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark mb-4">
            Le Bureau National
          </h2>
          <Organigramme />
        </div>

        {/* CTA Rejoindre un club */}
        <div className="text-center pt-10 border-t border-gray-100">
          <Button variant="gold" size="lg" href="/reseaux">
            Rejoindre un club
          </Button>
        </div>
      </div>
    </main>
  );
}