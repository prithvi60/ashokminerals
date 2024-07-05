import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full px-5 py-10 mx-auto mt-10 sm:py-14 font-RobotoSlab bg-black/90 sm:mt-14">
      <div className="flex flex-col items-center justify-center gap-8 max-w-7xl">
        <div className="relative w-1/2 h-24 mx-auto overflow-hidden">
          <Image
            alt="footer logo"
            fill
            src={"/footer-logo.png"}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
