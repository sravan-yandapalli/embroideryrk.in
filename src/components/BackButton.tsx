"use client"; // This is required for usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Adjust import based on your icon library

export default function BackButton() {
  const pathname = usePathname();

  // If the user is on the home page, render nothing
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="absolute top-20 left-8 z-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#21186B] transition-colors font-medium bg-gray-50 px-4 py-2 rounded-full text-sm"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
}