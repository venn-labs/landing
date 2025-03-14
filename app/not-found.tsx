"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="inline-block bg-gray-800/5 rounded-lg px-4 py-2 text-gray-600 text-sm">
              ✨ page not found
            </div>
          </div>

          <h1 className="text-4xl font-medium mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              404
            </span>
            <span className="text-gray-800"> | got a bit lost</span>
          </h1>
          
          <p className="text-base text-gray-600 mb-8">
            the page you're looking for doesn't exist
          </p>

          <motion.button
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push("/")}
          >
            go back home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
