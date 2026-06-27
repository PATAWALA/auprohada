const sponsors = [
  "Cour d’Appel d’Abidjan",
  "Ministère de la Justice",
  "Cabinet Côte d’Ivoire Conseil",
  "Université Félix Houphouët-Boigny",
  "Ordre des Avocats",
  "Barreau de Côte d’Ivoire",
  "Chambre de Commerce",
  "Agence OHADA",
];

export default function SponsorsCarousel() {
  // Dupliquer pour l'effet infini
  const items = [...sponsors, ...sponsors];

  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filet doré + titre */}
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-sm text-gray-400 uppercase tracking-[0.3em] font-medium">
            Ils nous font confiance
          </p>
        </div>

        {/* Carrousel infini */}
        <div className="relative overflow-hidden">
          <div className="carousel-track space-x-8">
            {items.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 border-2 border-gray-100 bg-white px-10 py-6 text-center transition-all duration-500 hover:border-gold hover:shadow-sharp group"
              >
                <span className="font-display text-lg text-gray-600 group-hover:text-royal transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}