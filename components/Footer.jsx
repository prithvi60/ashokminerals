import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { navbarMenu } from "@/libs/data";

const Footer = () => {
  return (
    <footer className="w-full h-full px-5 py-10 mx-auto mt-10 sm:py-14 font-RobotoSlab bg-black/90 sm:mt-14">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="relative w-full h-16 overflow-hidden md:h-24">
          <Image
            alt="footer logo"
            fill
            src={"/footer-logo.png"}
            className="object-contain"
          />
        </div>
        <h4 className="inline-flex text-base font-medium tracking-wide font-RobotoSlab text-zinc-500">
          © {new Date().getFullYear()}
          <span className="font-semibold text-warning ms-1">
            Ashok Minerals Enterprises.
          </span>{" "}
          All Rights Reserved.
        </h4>
        <div className="flex items-start justify-center gap-3 ">
          {navbarMenu.map((item, id) => (
            <div className="flex flex-col gap-3" key={id}>
              <div className="flex items-center gap-2 text-base font-normal capitalize transition-colors duration-300 ease-linear hover:text-warning font-RobotoSlab text-primary group">
                <IoIosArrowForward
                  className={`block text-base group-hover:rotate-90 transition-all duration-200 ease-linear text-primary`}
                />
                {item.menu}
              </div>
              <div
                className={`p-4 ${
                  item.menu === "our company" && "columns-2"
                } font-RobotoSlab space-y-2`}
              >
                {item?.subMenu?.map((l, index) => (
                  <Link
                    // title={l.listMenu}
                    className={`text-sm text-primary cursor-pointer lg:text-lg hover:text-warning transition-colors duration-500 ease-linear w-full h-full font-normal z-10 capitalize`}
                    key={index}
                    href={l.menuRef}
                  >
                    <h4 className="w-full h-full">{l.menuTitle}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href={"/blog"}
            className="ms-2.5 text-base font-normal text-primary hover:text-warning font-RobotoSlab"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center justify-center w-full gap-5">
          <Link
            href="https://wa.me/9840899343?text=Thank%20You%20For%20Connecting%20With%20Ashok%20Minerals%20Marketing%20Team,%20We%20Will%20Get%20In%20Touch%20With%20You%20As%20Soon%20As%20Possible."
            title="whatsapp logo"
          >
            <FaWhatsapp className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
          </Link>
          <Link
            href={"https://www.instagram.com/ashokminerals/"}
            title="instagram logo"
          >
            <FaInstagram className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/ashokmineralenterprises/"}
            title="linkedin logo"
          >
            <FaLinkedinIn className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
