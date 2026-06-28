import Image from "next/image";
import Button from "@/components/ui/Button";

const allNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt: "La cérémonie d’ouverture a réuni plus de 500 étudiants…",
    content: `
      <p>La Semaine OHADA 2026 a été officiellement lancée le 12 mars 2026 à l’Université Félix Houphouët-Boigny d’Abidjan. Plus de 500 participants – étudiants, enseignants, magistrats et avocats – ont assisté à cette cérémonie d’ouverture placée sous le haut patronage du Ministère de la Justice.</p>
      <p>Le Président National de l’AUPROHADA, M. KOUAME Roméo, a prononcé un discours inaugural dans lequel il a rappelé l’importance de la formation des élites juridiques africaines au droit harmonisé.</p>
      <p>La cérémonie a été suivie d’une conférence inaugurale sur le thème : « L’OHADA, moteur de l’intégration économique africaine ».</p>
    `,
    year: 2026,
    image: "https://picsum.photos/seed/ohada1/800/400",
    category: "Événement",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt: "Un panel de haut niveau a exploré les défis…",
    content: `
      <p>Le 13 mars 2026, un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé en Afrique. Les discussions ont porté sur la compétitivité des entreprises, la sécurité juridique et la facilitation des échanges intra-africains.</p>
      <p>Parmi les intervenants figuraient des magistrats de la Cour d’Appel d’Abidjan, des avocats spécialisés en droit OHADA et des universitaires de renom.</p>
    `,
    year: 2026,
    image: "https://picsum.photos/seed/ohada2/800/400",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Atelier pratique de rédaction d’actes uniformes OHADA",
    excerpt: "Plus de 200 étudiants ont participé…",
    content: `
      <p>Le 14 mars 2026, plus de 200 étudiants ont participé à un atelier pratique de rédaction d’actes uniformes OHADA. Encadrés par des magistrats et avocats spécialisés, ils ont pu se familiariser avec les techniques de rédaction des actes de procédure et des contrats commerciaux.</p>
    `,
    year: 2026,
    image: "https://picsum.photos/seed/ohada3/800/400",
    category: "Formation",
  },
  {
    id: 4,
    title: "Soirée de clôture et remise des certificats",
    excerpt: "La Semaine OHADA 2026 s’est achevée par une cérémonie solennelle…",
    content: `
      <p>Le 15 mars 2026, la Semaine OHADA s’est achevée par une cérémonie solennelle de remise des certificats aux participants. Les autorités universitaires et les partenaires institutionnels ont salué l’engagement de l’AUPROHADA pour la promotion du droit des affaires.</p>
    `,
    year: 2026,
    image: "https://picsum.photos/seed/ohada4/800/400",
    category: "Cérémonie",
  },
  {
    id: 5,
    title: "L’AUPROHADA signe un partenariat avec le ministère de la Justice",
    excerpt: "Ce protocole d’accord renforce la coopération…",
    content: `
      <p>En novembre 2025, l’AUPROHADA a signé un protocole d’accord historique avec le Ministère de la Justice et des Droits de l’Homme de Côte d’Ivoire. Ce partenariat renforce la coopération entre l’association et les pouvoirs publics pour la diffusion du droit OHADA en milieu universitaire.</p>
    `,
    year: 2025,
    image: "https://picsum.photos/seed/ohada5/800/400",
    category: "Institutionnel",
  },
  {
    id: 6,
    title: "Tournée de sensibilisation dans les universités de l’intérieur",
    excerpt: "Les équipes de l’AUPROHADA ont sillonné…",
    content: `
      <p>En octobre 2025, les équipes de l’AUPROHADA ont sillonné les universités de Bouaké, Daloa et Korhogo pour présenter les activités et recruter de nouveaux membres. Cette tournée a permis de renforcer le maillage territorial de l’association.</p>
    `,
    year: 2025,
    image: "https://picsum.photos/seed/ohada6/800/400",
    category: "Vie associative",
  },
];

export default function ActualiteDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article = allNews.find((a) => a.id === Number(params.id));

  if (!article) {
    return (
      <main className="pt-12 md:pt-16 pb-24 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-premium-dark mb-4">
            Article introuvable
          </h1>
          <p className="text-gray-600 mb-8">
            L’actualité demandée n’existe pas.
          </p>
          <Button href="/actualites" variant="outline" size="md">
            ← Retour aux actualités
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d’Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <a href="/actualites" className="hover:text-royal transition-colors">
            Actualités
          </a>
          <span>/</span>
          <span className="text-gray-600">{article.category}</span>
        </div>

        {/* En-tête */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {article.category}
            </span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">{article.year}</span>
          </div>
          <div className="w-12 h-0.5 bg-gold mb-6" />
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-premium-dark leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Image de couverture */}
        <div className="relative w-full h-64 md:h-96 mb-12 overflow-hidden border-2 border-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* Contenu */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-premium-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-royal prose-a:no-underline hover:prose-a:text-gold prose-strong:text-premium-dark"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Bouton retour */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <Button href="/actualites" variant="outline" size="md">
            ← Retour aux actualités
          </Button>
        </div>
      </div>
    </main>
  );
}