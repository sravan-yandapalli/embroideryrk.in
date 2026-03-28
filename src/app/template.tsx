"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    // REMOVED mode="wait"
    <AnimatePresence>
      <motion.div 
        key={pathname} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        // Absolute positioning prevents the pages from stacking on top of each other during the transition
        className="absolute inset-0 w-full bg-white" 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}