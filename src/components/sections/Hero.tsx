import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={BACKGROUND_IMAGE}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Contenu avec padding supplémentaire en bas pour éviter le SVG */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24 sm:pb-28 md:pb-32">
        <div className="w-16 h-1 bg-gold mx-auto mb-8" />

        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
          L’excellence du droit des affaires
          <br />
          <span className="text-royal-300">au service de l’Afrique</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
          L’AUPROHADA forme la nouvelle génération de juristes africains,
          ambassadeurs du Traité OHADA à l’échelle du continent.
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col items-start sm:flex-row sm:items-center sm:justify-center gap-5">
          <Button variant="royal" size="lg" href="/competitions">
            Découvrir la Compétition
          </Button>
          <Button variant="whiteOutline" size="lg" href="/reseau-professionnel">
            Le Réseau Professionnel
          </Button>
        </div>

        {/* Lien webinaire bien au-dessus du séparateur */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/evenements"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors group"
          >
            <span>Prochain Webinaire – Inscrivez-vous gratuitement</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-current">
                <polygon points="0,0 9,6 0,12" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Séparateur angulaire (toujours en bas) */}
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