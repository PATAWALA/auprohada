// src/app/(site)/notre-histoire/page.tsx
import Button from "@/components/ui/Button";

export default function NotreHistoirePage() {
  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white">
      {/* Hero Section avec Hymne */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            Depuis 2017
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-premium-dark leading-tight mb-8">
            Notre Histoire
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />
          {/* Hymne complet */}
          <div className="bg-premium-light border border-gray-100 p-10 md:p-16 mb-12">
            <p className="font-display text-xl md:text-2xl text-gray-600 italic leading-relaxed">
              « L’OHADA, un vaste champ d’opportunités. Une rivière d’or, au cœur de l’Afrique, abreuvant les générations de juristes assoiffés de justice et de prospérité. »
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fondée le 31 janvier 2017 par M. Kouamé Koffi Roméo, l’AUPROHADA est la réponse
            à un constat amer : les étudiants quittent l’université sans maîtrise suffisante du
            droit OHADA, freinant ainsi leur insertion professionnelle.
          </p>
        </div>
      </section>

      {/* Parcours et vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-royal mb-6">La genèse</h2>
            <p className="text-gray-600 leading-relaxed">
              Dès ses débuts, l’association a organisé des ateliers de formation, des
              conférences et des compétitions juridiques. Très vite, elle est devenue un
              réseau national regroupant des milliers d’étudiants et de jeunes professionnels
              du droit.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-royal mb-6">Notre vision</h2>
            <p className="text-gray-600 leading-relaxed">
              À l’horizon 2030, l’AUPROHADA ambitionne de devenir la référence
              panafricaine en matière de formation au droit des affaires. Nous œuvrons pour
              une Afrique où chaque juriste maîtrise les instruments de l’intégration
              économique.
            </p>
          </div>
        </div>
      </section>

      {/* Zone honorifique – Membres fondateurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-display text-3xl font-bold text-premium-dark text-center mb-12">
          Membres fondateurs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["KOUAMÉ Koffi Roméo", "YEO Kader", "TRAORE Aminata", "BAMBA Souleymane"].map(
            (name) => (
              <div key={name} className="text-center border border-gray-200 p-6 hover:border-gold transition-colors">
                <div className="w-20 h-20 bg-premium-light rounded-none mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-royal">{name.charAt(0)}</span>
                </div>
                <p className="font-display font-bold text-premium-dark">{name}</p>
                <p className="text-sm text-gray-500">Membre fondateur</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center pt-10 border-t border-gray-100">
        <Button href="/association" variant="gold" size="lg">
          Découvrir le Bureau National
        </Button>
      </div>
    </main>
  );
}