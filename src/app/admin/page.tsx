import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AdminDashboard() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-premium-dark mb-10">
        Tableau de bord
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="/admin/actualites"
          className="block bg-white border-2 border-gray-200 p-8 hover:border-royal transition-colors"
        >
          <h2 className="font-display text-xl font-bold text-premium-dark">
            Gérer les actualités
          </h2>
          <p className="text-gray-600 mt-2">
            Publier, modifier ou supprimer des articles.
          </p>
        </Link>

        <div className="bg-white border-2 border-gray-200 p-8">
          <h2 className="font-display text-xl font-bold text-premium-dark">
            Inscriptions au webinaire
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            Exporter la liste des participants au prochain webinaire.
          </p>
          <Button
            variant="gold"
            onClick={() => alert("Export CSV simulé (connexion Supabase à activer)")}
          >
            Exporter en CSV
          </Button>
        </div>
      </div>
    </div>
  );
}