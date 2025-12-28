"use client";

import { useState, useEffect } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SystemAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date("2025-12-30T23:59:59");
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft("CLOSED");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(
        `${days.toString().padStart(2, "0")}d ${hours
          .toString()
          .padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m`
      );
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 w-auto md:w-80 max-w-md mx-auto md:mx-0 border-2 border-primary bg-background p-4 shadow-[0_0_20px_rgba(255,9,9,0.3)]"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-primary">
              <AlertCircle size={18} className="animate-pulse" />
              <span className="font-mono text-sm font-bold uppercase tracking-tighter">
                System Critical
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-primary"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-3 space-y-2">
            <p className="font-mono text-xs leading-relaxed">
              PORTAL CLOSING SOON: Registration sequence ends in{" "}
              <span className="text-primary font-bold underline">
                {timeLeft}
              </span>
              .
            </p>
            <a
              href="https://vision.hack2skill.com/event/gdgoc-25-hackcentrix"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-primary bg-primary/10 py-2 font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all duration-75 text-center"
            >
              Access Terminal
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
