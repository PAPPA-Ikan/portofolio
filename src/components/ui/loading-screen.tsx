"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-999 overflow-hidden">
          {/* Background container */}
          <div className="absolute inset-0 flex">
            <motion.div
            className="absolute left-1/2 top-1/2 w-0.5 h-full bg-white -translate-x-1/2 -translate-y-1/2"
            initial={{ scaleY: 0, opacity: 1 }}
            animate={{ scaleY: 1, opacity: 0 }}
            transition={{
                scaleY: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
                },
                opacity: {
                delay: 0.9,
                duration: 0.4,
                },
            }}
            style={{ transformOrigin: "center" }}
            />

            {/* Left Panel */}
            <motion.div
              className="w-1/2 h-full bg-zinc-950"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                delay: 1,
                duration: 0.9,
                ease: [0.83, 0, 0.17, 1],
              }}
            />

            {/* Right Panel */}
            <motion.div
              className="w-1/2 h-full bg-zinc-950"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                delay: 1,
                duration: 0.9,
                ease: [0.83, 0, 0.17, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}