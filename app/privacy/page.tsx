"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/vennLogo";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-block mb-8">
            <Logo className="h-8" />
          </Link>

          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Venn, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Account information (email, username)</li>
                <li>Content you create and share</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you about updates and features</li>
                <li>Ensure the security of our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:maya.lekhi1@gmail.com" className="text-blue-600 hover:underline">
                  maya.lekhi1@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 