"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection({ content, business, variant }: any) {
  const hero = content?.hero;
  if (!hero) return null;

  return (
    <section className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">{business.category}</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">{hero.headline}</h1>
          <p className="text-lg text-muted max-w-xl mb-8">{hero.subheadline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-btn font-medium hover:opacity-90 transition">{hero.cta}</Link>
            {hero.ctaSecondary && <Link href="/services" className="px-6 py-3 border border-border rounded-btn font-medium hover:bg-card transition">{hero.ctaSecondary}</Link>}
          </div>
          {business.rating && (
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <span className="text-yellow-500">{"★".repeat(Math.round(parseFloat(business.rating)))}</span>
              <span className="font-medium">{business.rating}</span>
              {business.reviewsCount && <span>({business.reviewsCount} reviews)</span>}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
