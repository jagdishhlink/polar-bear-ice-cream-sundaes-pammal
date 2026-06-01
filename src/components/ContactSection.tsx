"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection({ content, business }: any) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">{content?.contact?.title || "Contact"}</h2>
        {content?.contact?.subtitle && <p className="text-center text-muted mb-12">{content.contact.subtitle}</p>}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {business.address && <div className="flex gap-3 p-4 rounded-card border border-border"><MapPin size={18} className="text-primary shrink-0 mt-0.5" /><span className="text-sm">{business.address}</span></div>}
            {business.phone && <a href={"tel:"+business.phone.replace(/[^+\d]/g,"")} className="flex gap-3 p-4 rounded-card border border-border hover:border-primary/20 transition"><Phone size={18} className="text-primary shrink-0" /><span className="text-sm">{business.phone}</span></a>}
            {business.email && <a href={"mailto:"+business.email} className="flex gap-3 p-4 rounded-card border border-border hover:border-primary/20 transition"><Mail size={18} className="text-primary shrink-0" /><span className="text-sm">{business.email}</span></a>}
            {business.openingHours && <div className="flex gap-3 p-4 rounded-card border border-border"><Clock size={18} className="text-primary shrink-0 mt-0.5" /><span className="text-sm">{business.openingHours}</span></div>}
            {business.latitude && business.longitude && (
              <div className="rounded-card overflow-hidden border border-border h-48">
                <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${business.longitude}!3d${business.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin`} width="100%" height="100%" style={{border:0}} loading="lazy" title="Map" />
              </div>
            )}
          </div>
          <form className="p-6 rounded-card bg-card border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-btn bg-background border border-border text-sm focus:border-primary outline-none" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-btn bg-background border border-border text-sm focus:border-primary outline-none" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-btn bg-background border border-border text-sm focus:border-primary outline-none" />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-btn bg-background border border-border text-sm focus:border-primary outline-none resize-none" />
            <button type="submit" className="w-full py-3 bg-primary text-white rounded-btn font-medium hover:opacity-90 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
