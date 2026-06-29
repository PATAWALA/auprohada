import Button from "@/components/ui/Button";

const objectifs = [
  {
    titre: "Fédérer",
    description:
      "Instaurer un cadre d’échanges entre les anciens membres de l’association ayant intégré le monde professionnel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    titre: "Vulgariser",
    description:
      "Mettre en œuvre des stratégies efficaces de promotion et de vulgarisation du droit OHADA en milieu universitaire et professionnel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    titre: "Soutenir",
    description:
      "Servir de soutien de base aux activités de l’association, notamment via des plateformes de réflexion, formations et colloques.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const bureau = [
  {
    nom: "Arsène GOULE",
    titre: "Auditeur de Justice",
    role: "Président du Réseau Professionnel",
    initiales: "AG",
  },
  {
    nom: "Samuel ALIMAN",
    titre: "Notaire stagiaire",
    role: "Secrétaire Général",
    initiales: "SA",
  },
  {
    nom: "Hans Thierry DIAOUE DJEKE",
    titre: "Responsable Juridique",
    role: "Secrétaire chargé des relations extérieures",
    initiales: "HD",
  },
  {
    nom: "Moussa TUO",
    titre: "Auditeur de Justice",
    role: "Secrétaire à la formation et à la planification des projets",
    initiales: "MT",
  },
  {
    nom: "Abel KOUAKOU",
    titre: "Responsable au recouvrement des taxes",
    role: "Secrétaire à l’insertion professionnelle",
    initiales: "AK",
  },
  {
    nom: "Reine KOUAO",
    titre: "Administratrice",
    role: "Secrétaire à la communication",
    initiales: "RK",
  },
  {
    nom: "Basmalat Motolani JAYEOLA",
    titre: "Gestionnaire des ressources humaines",
    role: "Trésorière",
    initiales: "BJ",
  },
  {
    nom: "Daniel YAPO",
    titre: "Auditeur de justice",
    role: "Secrétaire à la documentation",
    initiales: "DY",
  },
];

export default function ReseauProfessionnelPage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl">
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-premium-dark leading-tight mb-6">
            Le Réseau Professionnel
          </h1>
          <p className="text-lg text-gray-600">
            Créé en 2020, le Réseau Professionnel de l’AUPROHADA rassemble les anciens membres de l’association désormais insérés dans le monde du travail. Il constitue un pont entre l’université et la pratique juridique.
          </p>
        </div>
      </section>

      {/* Objectifs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-12">
          {objectifs.map((obj, idx) => (
            <div key={idx} className="relative pl-10 border-l-2 border-gray-200 hover:border-gold transition-colors">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-200 flex items-center justify-center text-royal">
                {obj.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-premium-dark mb-3">{obj.titre}</h3>
              <p className="text-gray-600">{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bureau */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-16">
          <div className="w-12 h-0.5 bg-gold mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark">
            Membres du Bureau
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bureau.map((membre, idx) => (
            <div
              key={idx}
              className="border border-gray-200 hover:border-gold transition-colors p-6 flex flex-col items-start bg-white"
            >
              <div className="w-16 h-16 bg-premium-light border border-gray-200 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="font-display font-bold text-2xl text-royal">{membre.initiales}</span>
              </div>
              <p className="font-display font-bold text-premium-dark text-lg">{membre.nom}</p>
              <p className="text-sm text-gold uppercase tracking-wider font-semibold mt-1">{membre.titre}</p>
              <p className="text-sm text-gray-500 mt-1">{membre.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-10 border-t border-gray-100">
        <Button href="/rejoindre" variant="expansion" size="lg">
          Rejoindre le Réseau Professionnel
        </Button>
      </div>
    </main>
  );
}