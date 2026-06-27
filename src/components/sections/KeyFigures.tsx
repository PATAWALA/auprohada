const figures = [
  {
    value: "12",
    label: "Sections universitaires",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M3 21V9L12 3l9 6v12" />
        <path d="M9 21V13h6v8" />
      </svg>
    ),
  },
  {
    value: "+2000",
    label: "Étudiants formés",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    value: "5",
    label: "Événements majeurs par an",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="4" width="18" height="18" rx="0" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
];

export default function KeyFigures() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 70%, rgba(37, 99, 235, 0.02) 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accroche */}
        <div className="text-center mb-20">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
            L’AUPROHADA en chiffres
          </h2>
        </div>

        {/* Grille de compteurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {figures.map((fig, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-start border-l-2 border-gold/30 pl-8 md:pl-10 py-6 md:py-0 md:first:border-l-0"
            >
              <div className="text-royal mb-4">{fig.icon}</div>
              <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-royal leading-none">
                {fig.value}
              </span>
              <p className="mt-4 text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] font-medium">
                {fig.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}