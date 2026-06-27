import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

// Données partagées (à terme depuis Supabase, mais identiques à NewsGrid pour l’instant)
const allNews = [
  {
    id: 1,
    title: "Lancement officiel de la Semaine OHADA 2026",
    excerpt:
      "La cérémonie d’ouverture a réuni plus de 500 étudiants et professionnels du droit à l’Université Félix Houphouët-Boigny.",
    content: `La Semaine OHADA 2026 a officiellement débuté le 20 juin à l’Université Félix Houphouët-Boigny. 
    Plus de 500 participants, dont des magistrats, des avocats et des étudiants, se sont réunis pour cette édition placée sous le signe de l’excellence.
    
    Les allocutions d’ouverture ont souligné l’importance de la formation des élites juridiques africaines au droit des affaires harmonisé. 
    Le président de l’AUPROHADA, KOUAME Roméo, a rappelé l’engagement de l’association à faire rayonner le Traité OHADA dans toutes les universités ivoiriennes.`,
    year: 2026,
    image: "https://picsum.photos/seed/ohada1/800/400",
    category: "Événement",
    date: "20 juin 2026",
  },
  {
    id: 2,
    title: "Conférence inaugurale : « L’OHADA, moteur de l’intégration économique »",
    excerpt:
      "Un panel de haut niveau a exploré les défis et opportunités du droit des affaires harmonisé.",
    content: `Le panel, composé de professeurs de droit, d’avocats spécialisés et de représentants du ministère de la Justice, 
    a exploré les défis et les opportunités du droit des affaires harmonisé en Afrique.
    
    Les échanges ont mis en lumière l’impact de l’OHADA sur la compétitivité des entreprises et la sécurité juridique des investissements.
    Les étudiants ont pu poser des questions directement aux experts, créant un dialogue riche et constructif.`,
    year: 2026,
    image: "https://picsum.photos/seed/ohada2/800/400",
    category: "Conférence",
    date: "21 juin 2026",
  },
  // ... ajoutez toutes les autres actualités avec leur contenu complet
];

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = allNews.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <main className="pt-24 pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-premium-dark mb-4">
            Article introuvable
          </h1>
          <Link href="/actualites" className="text-royal hover:text-gold font-medium">
            Retour aux actualités
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d’ariane */}
        <div className="mb-8">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-royal transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <polygon points="12,0 3,6 12,12" fill="currentColor" />
            </svg>
            Toutes les actualités
          </Link>
        </div>

        {/* En-tête */}
        <div className="mb-10">
          <div className="w-12 h-0.5 bg-gold mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {article.category}
            </span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-premium-dark leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Image de couverture */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden border-2 border-gray-200 mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

        {/* Bouton retour */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Button variant="outline" size="md" href="/actualites">
            Retour aux actualités
          </Button>
        </div>
      </article>
    </main>
  );
}