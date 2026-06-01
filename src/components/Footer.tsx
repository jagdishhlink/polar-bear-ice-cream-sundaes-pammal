import Link from "next/link";
import siteData from "@/data/site-data.json";

export function Footer() {
  const biz = siteData.business;
  const nav = siteData.navigation || [];
  return (
    <footer className="border-t border-border bg-card/40 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-2">{biz.name}</h3>
          <p className="text-sm text-muted">{biz.description}</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Pages</h4>
          <nav className="space-y-2">{nav.map((item: any) => <Link key={item.href} href={item.href} className="block text-sm text-muted hover:text-primary">{item.label}</Link>)}</nav>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          {biz.address && <p className="text-sm text-muted mb-1">{biz.address}</p>}
          {biz.phone && <a href={"tel:" + biz.phone.replace(/[^+\d]/g,"")} className="block text-sm text-muted hover:text-primary">{biz.phone}</a>}
          {biz.email && <a href={"mailto:" + biz.email} className="block text-sm text-muted hover:text-primary">{biz.email}</a>}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {biz.name}. All rights reserved.
      </div>
    </footer>
  );
}
