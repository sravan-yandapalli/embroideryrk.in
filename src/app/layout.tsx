import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navabar"; // Kept your spelling here
import BackButton from "@/components/BackButton"; // 1. Import the new component

export const metadata: Metadata = {
  title: "RK Embroidery",
  description: "Computerized embroidery machines & materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Added 'relative' to body to ensure the absolute positioned BackButton behaves predictably */}
      <body className="antialiased flex flex-col min-h-screen relative">
        <Navbar /> 
        
        {/* 2. Add the BackButton here. It will hide itself on "/" automatically */}
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