"use client";
import { motion } from "framer-motion";

export function GridSection({ section, content }: any) {
  const data = section.id?.includes("services") ? content?.services : null;
  const items = data?.items || [];
  const title = data?.title || section.title || "";

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">{title}</h2>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-card bg-card border border-border hover:border-primary/20 transition">
              {item.icon && <span className="text-2xl mb-3 block">{item.icon}</span>}
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
