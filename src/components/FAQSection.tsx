"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection({ content }: any) {
  const faq = content?.faq;
  if (!faq?.items?.length) return null;

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">{faq.title}</h2>
        <div className="space-y-3">{faq.items.map((item: any, i: number) => <FAQItem key={i} item={item} />)}</div>
      </div>
    </section>
  );
}

function FAQItem({ item }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"rounded-card border transition " + (open ? "border-primary/20" : "border-border")}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-medium text-sm pr-4">{item.question}</span>
        <span className="shrink-0">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.answer}</div>}
    </div>
  );
}
