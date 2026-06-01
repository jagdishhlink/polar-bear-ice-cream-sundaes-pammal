"use client";
import { motion } from "framer-motion";

export function NarrativeSection({ content, business }: any) {
  const about = content?.about;
  if (!about) return null;

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{about.title}</h2>
          <p className="text-lg text-muted leading-relaxed mb-8">{about.story}</p>
          {about.highlights && about.highlights.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {about.highlights.map((h: any, i: number) => (
                <div key={i} className="flex gap-3 p-4 rounded-card bg-background border border-border">
                  <span className="text-xl">{h.icon}</span>
                  <div><h4 className="font-semibold text-sm">{h.title}</h4><p className="text-xs text-muted mt-1">{h.description}</p></div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
