"use client";
import { HeroSection } from "./HeroSection";
import { GridSection } from "./GridSection";
import { NarrativeSection } from "./NarrativeSection";
import { GallerySection } from "./GallerySection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ContactSection } from "./ContactSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";

interface Props { sections: any[]; content: any; business: any; images: string[]; }

export function SectionRenderer({ sections, content, business, images }: Props) {
  return (
    <>
      {sections.map((section: any, i: number) => {
        const key = section.id || `section-${i}`;
        switch (section.type) {
          case "hero": return <HeroSection key={key} content={content} business={business} variant={section.variant} />;
          case "grid": return <GridSection key={key} section={section} content={content} />;
          case "narrative": return <NarrativeSection key={key} content={content} business={business} />;
          case "gallery": return <GallerySection key={key} images={images} content={content} />;
          case "testimonials": return <TestimonialsSection key={key} content={content} />;
          case "contact": return <ContactSection key={key} content={content} business={business} />;
          case "faq": return <FAQSection key={key} content={content} />;
          case "cta": return <CTASection key={key} content={content} />;
          default: return null;
        }
      })}
    </>
  );
}
