import Image from "next/image";
import Button from "../ui/Button";

export default function Histoire() {
  return (
    <section id="histoire" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo du président fondateur */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/images/team/president-kuame-romeo.jpg"
              alt="M. Kouamé Koffi Roméo, Président Fondateur"
              fill
              className="object-cover"
              style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.98)" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Texte */}
          <div>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark mb-6">
              Notre Histoire
            </h2>
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 border-l-4 border-gold pl-6">
              « Sortir de l’Université avec des insuffisances en la matière, ce qui ne favorise pas la recherche de stages ou d’emplois. C’est cette difficulté qui inspira le Président Fondateur, M. Kouamé Koffi Roméo, alors étudiant victime de la situation, à mettre sur pied cette plateforme d’échanges le 31 janvier 2017. »
            </blockquote>
            <p className="text-sm text-gray-500 italic mb-8">
              * L’OHADA, un vaste champ d’opportunités. Une rivière d’or...
            </p>
            <Button href="/association" variant="outline" size="md">
              En savoir plus sur l’Association
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}