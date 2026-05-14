import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Primary font for headings - bold, modern, loud
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Secondary font for body text - clean and readable
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dioni Krisna Saputra Lodrigus - Full-Stack Web Developer",
  description:
    "Portfolio of Dioni Krisna, Informatics Engineering graduate specializing in web development, inventory systems, and integrated monitoring solutions.",
};

// Root layout — shared across all pages. Navbar and Footer live here
// so they appear automatically on every route without duplication.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased scroll-smooth`} // Tambahkan scroll-smooth
    >
      <body className="min-h-full flex flex-col bg-[#faf8f3]">
        <Navbar />
        {/* pt-[72px] untuk mengakomodasi tinggi nav 68px + border 4px */}
        <main className="flex-1 pt-[72px] overflow-x-hidden"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
