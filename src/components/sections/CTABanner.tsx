import Button from "../ui/Button";

export default function CTABanner() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #E2E8F0 60%, rgba(234, 179, 8, 0.08) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Filet doré */}
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />

        <h2 className="font-display text-3xl md:text-4xl font-bold text-royal leading-tight">
          Prêt à rejoindre l’élite juridique africaine ?
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Intégrez un club, participez à nos événements et devenez un
          ambassadeur du droit OHADA.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" href="/reseaux">
            Rejoindre un club
          </Button>
          <Button variant="outline" size="lg" href="/evenements">
            Prochain webinaire
          </Button>
        </div>
      </div>
    </section>
  );
}