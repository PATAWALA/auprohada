import Card from "../ui/Card";

export default function PresidentWord() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/team/president-kuame-romeo.jpg"
              alt="Président KOUAME Roméo"
              className="w-full h-auto border-2 border-gray-100 shadow-sharp"
            />
          </div>
          <Card className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-royal" />
            <div className="pl-8">
              <p className="text-gold font-semibold tracking-[0.2em] uppercase mb-4">
                Mot du Président
              </p>
              <blockquote className="text-lg text-gray-800 italic leading-relaxed">
                « L’AUPROHADA est née d’une conviction : celle que la jeunesse
                universitaire est le fer de lance de l’intégration juridique
                africaine. Chaque étudiant sensibilisé au Traité OHADA devient
                un ambassadeur de l’État de droit et du climat des affaires
                sur notre continent. Nous bâtissons ensemble une génération de
                juristes capables de porter haut les couleurs de l’Afrique. »
              </blockquote>
              <p className="mt-6 font-bold text-premium-dark">
                KOUAME Roméo
              </p>
              <p className="text-sm text-gray-500">
                Président National de l’AUPROHADA
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}