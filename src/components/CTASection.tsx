"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection({ content }: any) {
  const cta = content?.cta;
  if (!cta) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 md:p-14 rounded-card bg-primary text-white text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">{cta.title}</h2>
          <p className="text-white/70 mb-6">{cta.subtitle}</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-primary rounded-btn font-medium hover:opacity-90 transition">{cta.button}</Link>
        </motion.div>
      </div>
    </section>
  );
}
