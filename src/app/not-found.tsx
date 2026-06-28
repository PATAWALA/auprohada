import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        {/* Filet doré */}
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />

        {/* Code erreur */}
        <p className="text-gold font-semibold tracking-[0.3em] uppercase mb-4">
          Erreur 404
        </p>

        {/* Titre */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-premium-dark leading-tight mb-6">
          Page introuvable
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
          La page que vous recherchez n’existe pas ou a été déplacée. 
          Veuillez vérifier l’URL ou revenir à l’accueil.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="gold" size="lg">
            Retour à l’accueil
          </Button>
          <Button href="/actualites" variant="outline" size="lg">
            Voir les actualités
          </Button>
        </div>
      </div>
    </main>
  );
}
