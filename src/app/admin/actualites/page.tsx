import NewsForm from "@/components/admin/NewsForm";
import NewsList from "@/components/admin/NewsList";

export default function AdminActualitesPage() {
  return (
    <div className="space-y-10">
      <NewsForm />
      <NewsList />
    </div>
  );
}