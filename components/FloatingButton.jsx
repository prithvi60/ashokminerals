"use client";
// import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { SpringModal } from "./ModalComponent";

export default function FloatingButton() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-4" style={{ zIndex: "1000" }}>
      {(path?.startsWith("/products") || path?.startsWith("/markets")) && (
        <>
          <motion.button
            onClick={() => setIsOpen(true)}
            title="phone number"
            className="hover:animate-pulse"
            whileHover={{ scale: 1.1 }}
          >
            <span className="inline-block bg-warning p-2.5 sm:p-3.5 rounded-full shadow-lg shadow-warning/20 cursor-pointer group mb-3 lg:hidden">
              <IoCall className="text-2xl text-primary transition-all duration-500" />
            </span>
          </motion.button>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}
      <motion.a
        href="https://wa.me/9840899343?text=Thank%20You%20For%20Connecting%20With%20Ashok%20Minerals%20Marketing%20Team,%20We%20Will%20Get%20In%20Touch%20With%20You%20As%20Soon%20As%20Possible."
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp"
        className="hover:animate-pulse"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          loading="lazy"
          src="/whatsapp_logo.png"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="w-12 h-12 md:h-14 md:w-14"
        />
      </motion.a>
    </div>
  );
}
