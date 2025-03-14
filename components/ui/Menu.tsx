"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "./vennLogo";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const menuItemVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white text-gray-800 px-6 py-3 flex items-center gap-x-8 border-b border-gray-200"
    >
      {/* Logo Section */}
      <Logo className="flex-shrink-0" />

      {/* Main Navigation */}
      <div className="flex items-center gap-x-4">
        <motion.button
          variants={menuItemVariants}
          whileHover="hover"
          className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
        >
          <a href="/spark">spark</a>
        </motion.button>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-x-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="bg-black text-white px-4 py-1.5 rounded-md text-sm font-medium"
          onClick={() => router.push("https://discord.gg/P4s48QJ5xK")}
        >
          join the community
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Menu;