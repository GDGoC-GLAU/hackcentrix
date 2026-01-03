"use client";

import { useState, useEffect } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResultPopup from "@/components/ResultPopup";

export function SystemAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [openResult, setOpenResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-[90%] sm:w-80 overflow-hidden rounded-xl border-2 border-primary bg-background p-4 shadow-[0_0_25px_rgba(255,9,9,0.5)]"
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 z-0 opacity-20 rounded-xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, #ff0909 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ff090920_1px,transparent_1px),linear-gradient(to_bottom,#ff090920_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 text-primary items-center">
                  <AlertCircle size={20} className="animate-pulse" />
                  <span className="font-mono text-sm font-bold uppercase">
                    Result Update
                  </span>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 rounded hover:bg-primary/20 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mt-3 font-mono text-xs leading-relaxed text-gray-200">
                PPT round results have been announced.
                <br />
                <span className="text-primary font-bold underline">
                  Check selected teams now!
                </span>
              </p>

              <button
                onClick={() => setOpenResult(true)}
                className="mt-4 w-full border border-primary bg-primary/10 py-2 font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all rounded-md shadow-sm hover:shadow-md"
              >
                Check Result
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ResultPopup open={openResult} onClose={() => setOpenResult(false)} />
    </>
  );
}
