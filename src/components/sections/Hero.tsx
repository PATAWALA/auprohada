import Button from "../ui/Button";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image de fond ultra discrète */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        {/* Overlay blanc pour une luminosité maximale */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Petit filet doré décoratif */}
          <div className="w-12 h-1 bg-gold mb-8" />

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-premium-dark">
            L’excellence du droit des affaires
            <br />
            <span className="text-royal">au service de l’Afrique</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed">
            L’AUPROHADA forme la nouvelle génération de juristes africains,
            ambassadeurs du Traité OHADA dans toutes les universités de Côte
            d’Ivoire.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" href="/reseaux">
              Rejoindre un club
            </Button>
            <Button variant="outline" size="lg" href="/evenements">
              Prochain webinaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}