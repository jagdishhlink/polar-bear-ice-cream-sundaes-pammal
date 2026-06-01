import type { Metadata } from "next";
import { Playfair_Display, DM_Sans as BodyFont } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", weight: ["700"] });
const bodyFont = BodyFont({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Polar Bear Ice Cream Sundaes - Pammal's Coolest Dessert Destination",
  description: "Handcrafted sundaes, crazy flavors, and pure joy in every scoop. Discover Pammal's most loved ice cream experience!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable + " " + bodyFont.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
