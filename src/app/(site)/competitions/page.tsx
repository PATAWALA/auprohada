import Button from "@/components/ui/Button";

const etapes = [
  {
    numero: "01",
    titre: "Mobilisation continentale",
    description:
      "Toutes les sections universitaires de l’AUPROHADA à travers l’Afrique sont mobilisées pour les compétitions panafricaines.",
  },
  {
    numero: "02",
    titre: "Sélection interne",
    description:
      "Chaque université sélectionne rigoureusement ses 3 meilleurs candidats en droit pour représenter son établissement.",
  },
  {
    numero: "03",
    titre: "Phase finale",
    description:
      "Les candidats s’affrontent lors de la Semaine Panafricaine de l’OHADA, combinant épreuves juridiques, conférences et remise des prix.",
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
            Les Compétitions Panafricaines&nbsp;: Rigueur & Excellence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            L’AUPROHADA orchestre chaque année des compétitions juridiques de
            haut niveau, mobilisant les meilleurs étudiants en droit de toutes
            les universités partenaires à travers l’Afrique.
          </p>
        </div>
      </section>

      {/* Processus en 3 étapes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-12">
          {etapes.map((etape, idx) => (
            <div
              key={idx}
              className="relative pl-10 border-l-2 border-gray-200 hover:border-gold transition-colors"
            >
              <span className="absolute left-0 top-0 -translate-x-[1.125rem] w-8 h-8 bg-white border-2 border-gray-200 flex items-center justify-center font-bold text-sm text-royal">
                {etape.numero}
              </span>
              <h3 className="font-display text-xl font-bold text-premium-dark mb-3">
                {etape.titre}
              </h3>
              <p className="text-gray-600">{etape.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portail de connexion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-premium-light border border-gray-200 p-10 md:p-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-premium-dark mb-4">
            Portail des Compétitions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Connectez-vous pour inscrire vos candidats, gérer votre section ou
            suivre les résultats. Sélectionnez votre profil pour accéder à
            l’espace dédié.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="royal" size="lg" href="/admin/login">
              Étudiant Compétiteur
            </Button>
            <Button variant="outline" size="lg" href="/admin/login">
              Administrateur de Section
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}