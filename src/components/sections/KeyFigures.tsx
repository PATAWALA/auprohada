const figures = [
  { value: "12", label: "Sections universitaires" },
  { value: "+2000", label: "Étudiants formés" },
  { value: "5", label: "Événements majeurs par an" },
];

export default function KeyFigures() {
  return (
    <section className="bg-premium-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {figures.map((fig) => (
            <div
              key={fig.label}
              className="p-10 border-r-0 md:border-r border-gray-200 last:border-0"
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-royal">
                {fig.value}
              </span>
              <p className="mt-3 text-lg text-gray-600">{fig.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}