import Button from "@/components/ui/Button";

const etapes = [
  {
    numero: "01",
    titre: "Mobilisation des sections",
    description:
      "Les 15 sections universitaires de l’AUPROHADA, réparties sur toute la Côte d’Ivoire, sont mobilisées pour les compétitions nationales. Chaque club relaie l’information et prépare ses étudiants.",
  },
  {
    numero: "02",
    titre: "Sélection rigoureuse",
    description:
      "Chaque université organise en interne la sélection de ses 3 meilleurs candidats en Droit. Un processus transparent et exigeant pour ne retenir que l’excellence.",
  },
  {
    numero: "03",
    titre: "Phase finale nationale",
    description:
      "Les candidats sélectionnés se retrouvent lors de la Semaine Spéciale, un événement national combinant épreuves juridiques, conférences et remise des prix.",
  },
];

export default function CompetitionsPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl">
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-premium-dark leading-tight mb-6">
            Les Compétitions Nationales&nbsp;: Rigueur & Excellence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            L’AUPROHADA orchestre chaque année des compétitions juridiques de haut niveau, mobilisant les meilleurs étudiants en droit de toutes les universités ivoiriennes.
          </p>
        </div>
      </section>

      {/* Processus en 3 étapes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {etapes.map((etape, idx) => (
            <div
              key={idx}
              className="relative pl-10 border-l-2 border-gray-200 hover:border-gold transition-colors duration-300"
            >
              <span className="absolute left-0 top-0 -translate-x-[1.125rem] w-8 h-8 bg-white border-2 border-gray-200 flex items-center justify-center font-bold text-sm text-royal">
                {etape.numero}
              </span>
              <h3 className="font-display text-xl font-bold text-premium-dark mb-3">
                {etape.titre}
              </h3>
              <p className="text-gray-600 leading-relaxed">{etape.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA institutionnel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-premium-light border border-gray-200 p-10 md:p-16 text-center">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-premium-dark mb-4">
            Espace d’inscription des sections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Accédez au portail sécurisé pour inscrire vos 3 candidats et valider la participation de votre université.
          </p>
          <Button variant="gold" size="lg" href="/admin/login">
            Accéder au portail sécurisé
          </Button>
        </div>
      </section>
    </main>
  );
}