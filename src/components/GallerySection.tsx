"use client";
import { motion } from "framer-motion";

export function GallerySection({ images, content }: any) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">{content?.gallery?.title || "Gallery"}</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.slice(0, 9).map((img: string, i: number) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="break-inside-avoid rounded-card overflow-hidden">
              <img src={img} alt={"Gallery " + (i+1)} className="w-full h-auto object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
