import Hero from "@/components/sections/Hero";
import SponsorsCarousel from "@/components/sections/SponsorsCarousel";
import KeyFigures from "@/components/sections/KeyFigures";
import PresidentWord from "@/components/sections/PresidentWord";
import NewsPreview from "@/components/sections/NewsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SponsorsCarousel />
      <KeyFigures />
      <PresidentWord />
      <NewsPreview />
    </>
  );
}