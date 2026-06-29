import Hero from "@/components/sections/Hero";
import SponsorsCarousel from "@/components/sections/SponsorsCarousel";
import Histoire from "@/components/sections/Histoire";
import KeyFigures from "@/components/sections/KeyFigures";
import PresidentWord from "@/components/sections/PresidentWord";
import NewsPreview from "@/components/sections/NewsPreview";
import LibrairieJuridique from "@/components/sections/LibrairieJuridique";
import Fiertes from "@/components/sections/Fiertes";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SponsorsCarousel />
      <Histoire />
      <KeyFigures />
      <PresidentWord />
      <NewsPreview />
      <LibrairieJuridique />
      <Fiertes />
      <CTABanner />
    </>
  );
}