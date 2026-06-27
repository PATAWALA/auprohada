import Button from "../ui/Button";

export default function PresidentWord() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Photo officielle */}
          <div>
            <img
              src="/images/team/president-kuame-romeo.jpg"
              alt="Président KOUAME Roméo"
              className="w-full h-auto object-cover"
              style={{
                filter: "grayscale(100%) contrast(1.05) brightness(0.98)",
              }}
            />
          </div>

          {/* Texte + CTA */}
          <div>
            {/* Filet doré */}
            <div className="w-12 h-0.5 bg-gold mb-6" />

            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-premium-dark leading-tight">
              «&nbsp;L’AUPROHADA est née d’une conviction&nbsp;: celle que la
              jeunesse universitaire est le fer de lance de l’intégration
              juridique africaine.&nbsp;»
            </blockquote>

            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Chaque étudiant sensibilisé au Traité OHADA devient un ambassadeur
              de l’État de droit et du climat des affaires sur notre continent.
              Nous bâtissons ensemble une génération de juristes capables de
              porter haut les couleurs de l’Afrique.
            </p>

            {/* Signature */}
            <div className="mt-6">
              <p className="font-display text-lg font-bold text-royal">
                KOUAME Roméo
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mt-1">
                Président National de l’AUPROHADA
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="gold" size="lg" href="/evenements">
                Participer au prochain webinaire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}