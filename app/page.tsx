"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import localFont from 'next/font/local';
import Image from 'next/image';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

const FEATURE_CARDS = [
  {
    step: "💭",
    title: "share your vision",
    description: "drop your side project idea, no matter how rough"
  },
  {
    step: "🤔",
    title: "get unstuck",
    description: "ai helps you break through creative blocks"
  },
  {
    step: "✨",
    title: "level up",
    description: "transform your ideas into something amazing"
  }
] as const;

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="inline-block bg-gray-50 rounded-lg px-4 py-2 text-gray-600 text-sm">
                ✨ for the side project hustlers
              </div>
            </div>

            <h1 className="text-4xl font-medium mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-clip-text text-transparent font-bold">
                venn
              </span>
              <span className="text-gray-800"> | your creative companion</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              where your side projects come to life
            </p>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image 
              src="/logos/logo-1.png" 
              alt="spark illustration" 
              width={600} 
              height={600} 
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Experiments Section */}
      <div className="bg-gray-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-medium mb-3">current experiments</h2>
          </motion.div>

          {/* Ship Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">01</div>
                  <h3 className="text-xl font-medium mb-2">ship</h3>
                  <p className="text-gray-600 mb-4">
                    gamify your side project journey with daily streaks, public commitments, and a supportive community cheering you on
                  </p>
                </div>
                <motion.button
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push("/ship")}
                >
                  start shipping
                </motion.button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">🔥</span>
                  <span className="text-sm text-gray-600">daily streaks</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">🎯</span>
                  <span className="text-sm text-gray-600">public goals</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">👥</span>
                  <span className="text-sm text-gray-600">community</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spark Card - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">02</div>
                  <h3 className="text-xl font-medium mb-2">spark</h3>
                  <p className="text-gray-600 mb-4">
                    an AI-powered dialogue system that helps you evolve your ideas through thoughtful conversation with multiple personas
                  </p>
                </div>
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium">
                  coming soon
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 opacity-50">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">💭</span>
                  <span className="text-sm text-gray-600">share your idea</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">🤔</span>
                  <span className="text-sm text-gray-600">get challenged</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="block text-2xl mb-1">✨</span>
                  <span className="text-sm text-gray-600">make it better</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center"
          >
            <p className="text-gray-500">more coming soon...</p>
          </motion.div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-base text-gray-600 mb-6">
            built for thinkers, makers, and curious minds
            </p>

            {!user && (
              <motion.button
                className="bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push("https://discord.gg/P4s48QJ5xK")}
              >
                join the community
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
