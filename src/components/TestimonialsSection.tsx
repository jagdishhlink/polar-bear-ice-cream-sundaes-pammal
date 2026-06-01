"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection({ content }: any) {
  const data = content?.testimonials;
  if (!data?.items?.length) return null;

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">{data.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((t: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-card bg-background border border-border">
              <div className="flex gap-0.5 mb-3">{[...Array(t.rating || 5)].map((_:any, j:number) => <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />)}</div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{t.name?.[0]}</div>
                <div><p className="text-sm font-medium">{t.name}</p><p className="text-xs text-muted">{t.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
