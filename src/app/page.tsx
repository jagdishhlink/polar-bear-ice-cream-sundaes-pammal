"use client";
import siteData from "@/data/site-data.json";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionRenderer } from "@/components/SectionRenderer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  const homePage = siteData.pages.find((p: any) => p.slug === "") || siteData.pages[0];
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionRenderer sections={homePage.sections} content={siteData.content} business={siteData.business} images={siteData.business.images} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
