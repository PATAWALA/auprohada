import Card from "../ui/Card";

const bureau = [
  {
    name: "KOUAME Roméo",
    role: "Président National",
    image: "/images/team/president-kuame-romeo.jpg",
    description:
      "Porte la vision stratégique de l’association et assure la représentation institutionnelle.",
  },
  {
    name: "YEO Kader",
    role: "Vice-Président chargé des Affaires Scientifiques",
    image: "/images/team/vp-scientifique.jpg",
    description:
      "Supervise les conférences, colloques et publications académiques.",
  },
  {
    name: "TRAORE Aminata",
    role: "Secrétaire Générale",
    image: "/images/team/secretaire-general.jpg",
    description:
      "Coordonne l’administration, les procès-verbaux et la communication interne.",
  },
  {
    name: "BAMBA Souleymane",
    role: "Trésorier Général",
    image: "/images/team/tresorier.jpg",
    description: "Gère les finances, les levées de fonds et les partenariats.",
  },
  {
    name: "KONE Fatoumata",
    role: "Chargée de l’Organisation et des Événements",
    image: "/images/team/chargee-organisation.jpg",
    description:
      "Pilote la logistique des manifestations et la coordination des clubs.",
  },
  {
    name: "SORO Drissa",
    role: "Chargé de la Communication et des Médias",
    image: "/images/team/charge-communication.jpg",
    description:
      "Anime les réseaux sociaux, les relations presse et la stratégie numérique.",
  },
];

export default function Organigramme() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {bureau.map((member, idx) => (
        <Card key={idx} className="text-center hover:border-royal transition-colors duration-300">
          <div className="w-24 h-24 mx-auto overflow-hidden border-2 border-gray-200">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-5 font-display text-lg font-bold text-premium-dark">
            {member.name}
          </h3>
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mt-1">
            {member.role}
          </p>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {member.description}
          </p>
        </Card>
      ))}
    </div>
  );
}