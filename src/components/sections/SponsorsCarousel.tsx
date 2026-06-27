// Défilement horizontal minimaliste avec logos monochromes gris clair
const sponsors = [
  { name: "Cour d’Appel d’Abidjan", logo: "/images/sponsors/cour-appel.png" },
  { name: "Ministère de la Justice", logo: "/images/sponsors/ministere-justice.png" },
  { name: "Cabinet Côte d’Ivoire Conseil", logo: "/images/sponsors/cic-conseil.png" },
  { name: "Université Félix Houphouët-Boigny", logo: "/images/sponsors/ufhb.png" },
  { name: "Ordre des Avocats", logo: "/images/sponsors/ordre-avocats.png" },
];

export default function SponsorsCarousel() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 uppercase tracking-[0.2em] mb-8">
          Ils nous font confiance
        </p>
        <div className="flex overflow-x-auto gap-8 items-center justify-start md:justify-center pb-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex-shrink-0 h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img src={s.logo} alt={s.name} className="h-full w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}