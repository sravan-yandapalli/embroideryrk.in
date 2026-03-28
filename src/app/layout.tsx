import "./globals.css";
import { AnimatePresence } from "framer-motion";
export const metadata = {
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
      <body className="antialiased">
        <AnimatePresence mode="wait">
  {children}
</AnimatePresence>
      </body>
    </html>
  );
}