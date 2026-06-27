import Image from "next/image";

const bureau = [
  {
    name: "KOUAME Roméo",
    role: "Président National",
    image: "/images/team/president-kuame-romeo.jpg", // photo locale conservée
    description:
      "Porte la vision stratégique de l’association et assure la représentation institutionnelle.",
  },
  {
    name: "YEO Kader",
    role: "Vice‑Président Scientifique",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    description:
      "Supervise les conférences, colloques et publications académiques.",
  },
  {
    name: "TRAORE Aminata",
    role: "Secrétaire Générale",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    description:
      "Coordonne l’administration, les procès‑verbaux et la communication interne.",
  },
  {
    name: "BAMBA Souleymane",
    role: "Trésorier Général",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    description: "Gère les finances, les levées de fonds et les partenariats.",
  },
  {
    name: "KONE Fatoumata",
    role: "Chargée de l’Organisation",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    description:
      "Pilote la logistique des manifestations et la coordination des clubs.",
  },
  {
    name: "SORO Drissa",
    role: "Chargé de la Communication",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    description:
      "Anime les réseaux sociaux, les relations presse et la stratégie numérique.",
  },
];

export default function Organigramme() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {bureau.map((member, idx) => (
        <div key={idx} className="group flex flex-col items-start">
          <div className="relative w-full aspect-square overflow-hidden border-2 border-gray-200 group-hover:border-gold transition-colors duration-500 mb-5">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
          {/* Filet doré */}
          <div className="w-8 h-0.5 bg-gold mb-3" />
          {/* Nom */}
          <h3 className="font-display text-xl font-bold text-royal group-hover:text-gold transition-colors leading-tight">
            {member.name}
          </h3>
          {/* Rôle */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mt-1">
            {member.role}
          </p>
          {/* Description */}
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  );
}