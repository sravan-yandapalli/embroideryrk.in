import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navabar"; // Kept your spelling here
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: {
    default: "RK Embroidery | Computerized Embroidery Machines & Materials",
    template: "%s | RK Embroidery",
  },

  description:
    "RK Embroidery provides high-quality computerized embroidery machines, threads, and accessories in India. Trusted supplier for industrial and commercial embroidery solutions.",

  keywords: [
    "computerized embroidery machines",
    "embroidery machine suppliers India",
    "embroidery materials India",
    "embroidery threads wholesale",
    "industrial embroidery machines",
    "embroidery accessories online",
    "embroidery spare parts",
    "embroidery tools suppliers",
    "embroidery machines Andhra Pradesh",
    "embroidery machines Vijayawada",
    "RK Embroidery"
  ],

  authors: [{ name: "RK Embroidery" }],
  creator: "RK Embroidery",
  publisher: "RK Embroidery",

  metadataBase: new URL("https://embroideryrk.in"), // 🔴 Replace with your actual domain

  openGraph: {
    title: "RK Embroidery | Embroidery Machines & Materials",
    description:
      "Buy computerized embroidery machines, threads, and accessories from RK Embroidery. Reliable supplier in India.",
    url: "https://embroideryrk.in", // 🔴 Replace
    siteName: "RK Embroidery",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RK Embroidery",
    description:
      "Computerized embroidery machines, threads, and embroidery accessories in India.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen relative">
        <Navbar />

        {/* Back button (auto hides on home page) */}
        <BackButton />

        <PageTransition>
          <main className="flex-1 w-full overflow-x-clip">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}