"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/vennLogo";

export default function Terms() {
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

          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Venn, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              </p>
              <p className="text-gray-600 mb-4">
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              </p>
              <p className="text-gray-600 mb-4">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a user of Venn, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not engage in any harmful or disruptive activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The content, features, and functionality of Venn, including but not limited to all information, software, text, displays, images, video, audio, design, selection, and arrangement thereof, are owned by Venn and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Venn be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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