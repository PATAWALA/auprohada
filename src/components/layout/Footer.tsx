import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Colonne 1 : marque */}
          <div>
            <span className="font-display font-bold text-2xl text-white">
              AUPRO<span className="text-gold">HADA</span>
            </span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Association Universitaire pour la Promotion de l’OHADA.
              Vulgarisation du droit des affaires africain au sein des universités.
            </p>
          </div>

          {/* Colonne 2 : navigation */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link href="/actualites" className="hover:text-gold transition-colors">Actualités</Link></li>
              <li><Link href="/association" className="hover:text-gold transition-colors">L’Association</Link></li>
              <li><Link href="/reseaux" className="hover:text-gold transition-colors">Réseau des Clubs</Link></li>
              <li><Link href="/partenariats" className="hover:text-gold transition-colors">Partenariats</Link></li>
              <li><Link href="/evenements" className="hover:text-gold transition-colors">Événements</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Abidjan, Côte d’Ivoire</li>
              <li>
                <a href="mailto:contact@auprohada.org" className="hover:text-gold transition-colors">
                  contact@auprohada.org
                </a>
              </li>
              <li>
                <a href="tel:+2250700000000" className="hover:text-gold transition-colors">
                  +225 07 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation avec filet doré */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AUPROHADA – Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0">
            Design premium – L’excellence juridique africaine
          </p>
        </div>
      </div>
    </footer>
  );
}