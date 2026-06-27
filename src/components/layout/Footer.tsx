import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-premium-light border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Colonne 1 : marque */}
          <div>
            <span className="font-display font-bold text-2xl text-premium-dark">
              AUPRO<span className="text-royal">HADA</span>
            </span>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Association Universitaire pour la Promotion de l’OHADA.
              Vulgarisation du droit des affaires africain au sein des universités.
            </p>
          </div>

          {/* Colonne 2 : liens rapides */}
          <div>
            <h4 className="font-display font-bold text-premium-dark mb-4 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-royal" />
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-royal transition-colors">Accueil</Link></li>
              <li><Link href="/actualites" className="hover:text-royal transition-colors">Actualités</Link></li>
              <li><Link href="/association" className="hover:text-royal transition-colors">L’Association</Link></li>
              <li><Link href="/reseaux" className="hover:text-royal transition-colors">Réseau des Clubs</Link></li>
              <li><Link href="/partenariats" className="hover:text-royal transition-colors">Partenariats</Link></li>
              <li><Link href="/evenements" className="hover:text-royal transition-colors">Événements</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : contact */}
          <div>
            <h4 className="font-display font-bold text-premium-dark mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-royal" />
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Abidjan, Côte d’Ivoire</li>
              <li>
                <a href="mailto:contact@auprohada.org" className="hover:text-royal transition-colors">
                  contact@auprohada.org
                </a>
              </li>
              <li>
                <a href="tel:+2250700000000" className="hover:text-royal transition-colors">
                  +225 07 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne du bas */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AUPROHADA – Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0">
            Design premium – L’excellence juridique africaine
          </p>
        </div>
      </div>
    </footer>
  );
}