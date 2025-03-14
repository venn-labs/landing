"use client";
import { motion } from "framer-motion";

export function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"
          initial={{ scale: 0.8, opacity: 0.4 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: dot * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
} 