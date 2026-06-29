// src/app/(site)/page.tsx
import Hero from "@/components/sections/Hero";
import SponsorsCarousel from "@/components/sections/SponsorsCarousel";
import Histoire from "@/components/sections/Histoire";            // ← Notre Histoire (avec photo à gauche)
import KeyFigures from "@/components/sections/KeyFigures";
import NewsPreview from "@/components/sections/NewsPreview";
import LibrairiePreview from "@/components/sections/LibrairiePreview";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SponsorsCarousel />
      <Histoire />          {/* Section Histoire avec photo fondateur + citation */}
      <KeyFigures />
      <NewsPreview />
      <LibrairiePreview />
      <CTABanner />
    </>
  );
}