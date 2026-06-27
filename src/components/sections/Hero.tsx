import Button from "../ui/Button";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay sombre uniforme – meilleure lisibilité */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenu */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Filet doré */}
        <div className="w-16 h-1 bg-gold mx-auto mb-8" />

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
          L’excellence du droit des affaires
          <br />
          <span className="text-royal-300">au service de l’Afrique</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
          L’AUPROHADA forme la nouvelle génération de juristes africains,
          ambassadeurs du Traité OHADA dans toutes les universités de Côte
          d’Ivoire.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <Button variant="gold" size="lg" href="/reseaux">
            Rejoindre un club
          </Button>
          <Button variant="whiteOutline" size="lg" href="/evenements">
            Prochain webinaire
          </Button>
        </div>
      </div>

      {/* Séparateur angulaire minimaliste */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,60 0,30 1440,0 1440,60" fill="white" />
          <line x1="0" y1="30" x2="1440" y2="0" stroke="#EAB308" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}