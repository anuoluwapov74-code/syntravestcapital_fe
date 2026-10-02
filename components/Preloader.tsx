"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#effbf0] dark:bg-linear-to-br dark:from-[#021510] dark:via-[#0a2416] dark:to-[#021510]">
      {/* Logo */}
      <div className="mb-12">
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="text-green-600 dark:text-green-400">SyntraVest</span>Capitals
        </span>
      </div>

      {/* Circular Loading Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-[rgba(23,166,135,0.2)]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-600 dark:border-t-green-500 animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
