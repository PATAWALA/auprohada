export default function ActualiteDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="pt-24 text-center">
      <h1 className="text-3xl">Article ID : {params.id}</h1>
    </main>
  );
}