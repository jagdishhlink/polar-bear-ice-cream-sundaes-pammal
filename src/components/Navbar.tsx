"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import siteData from "@/data/site-data.json";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = siteData.navigation || [];
  const biz = siteData.business;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-heading font-bold text-lg">{biz.logo ? <img src={biz.logo} alt={biz.name} className="h-8" /> : biz.name}</Link>
        <div className="hidden md:flex items-center gap-6">
          {nav.map((item: any) => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}>{item.label}</Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {nav.map((item: any) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-lg font-medium py-2">{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
