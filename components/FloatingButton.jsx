"use client";
// import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  // const [click, setClick] = useState(false);
  return (
    <div
      className="fixed flex items-center justify-center gap-3 bottom-8 right-4"
      style={{ zIndex: "1000" }}
    >
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
