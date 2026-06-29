const fiertees = [
  { titre: "Champions d’Afrique", description: "Génies en Herbe", valeur: "2024" },
  { titre: "Élite Internationale", description: "Droits de l’Homme Maurice / Ghana", valeur: "2023" },
  { titre: "Intégration Magistrature", description: "Lauréats concours", valeur: "12" },
];

export default function Fiertes() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
            Nos Fiertés
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {fiertees.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center py-10 md:py-0 md:px-8 text-center">
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <span className="font-display text-5xl md:text-6xl font-bold text-royal">
                {item.valeur}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-premium-dark">{item.titre}</h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}