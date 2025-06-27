import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { footerMenuLinks } from "@/libs/data";

const Footer = () => {
  return (
    <footer className="w-full h-full px-6 py-10 mt-10 space-y-10 sm:px-12 sm:py-12 lg:px-16 xl:px-64 font-RobotoSlab bg-black/90">
      <div className="flex flex-col items-center justify-between gap-8 md:items-start md:flex-row">
        <div className="block w-full space-y-6 md:w-1/5">
          <div className="flex md:flex-col lg:flex-row gap-5 md:gap-2.5 lg:gap-5 justify-center md:justify-start items-center">
            <div className="relative w-20 h-20 overflow-hidden md:-mt-2.5">
              <Image
                alt="ashok minerals logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={"/ashok-minerals-logo.svg"}
              />
            </div>
            {/* <h4 className="hidden text-lg font-semibold xl:text-2xl text-primary md:block">
              Ashok Minerals
            </h4> */}
          </div>
          {/* social media links */}
          <div className="flex items-center justify-center w-full gap-5 md:justify-start">
            <Link
              href="https://wa.me/9840899343?text=Thank%20You%20For%20Connecting%20With%20Ashok%20Minerals%20Marketing%20Team,%20We%20Will%20Get%20In%20Touch%20With%20You%20As%20Soon%20As%20Possible."
              title="whatsapp logo"
              target="_blank"
            >
              <FaWhatsapp className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
            </Link>
            <Link
              href={"https://www.instagram.com/ashokminerals/"}
              title="instagram logo"
              target="_blank"
            >
              <FaInstagram className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/ashokmineralenterprises/"}
              title="linkedin logo"
              target="_blank"
            >
              <FaLinkedinIn className="text-xl cursor-pointer md:text-2xl text-primary hover:animate-pulse" />
            </Link>
          </div>
        </div>
        {/* footer menubar links */}
        <div className="flex flex-col items-center sm:items-start justify-center md:justify-end gap-2.5 sm:flex-row sm:gap-14 xl:gap-20 md:gap-8 md:w-4/5">
          {footerMenuLinks.map((item, id) => (
            <div
              className="flex flex-col items-center justify-center gap-3 sm:max-w-[200px] sm:items-start sm:justify-start"
              key={id}
            >
              <div
                className={`flex items-center sm:items-start gap-7 text-base font-normal capitalize transition-colors duration-300 ease-linear hover:text-warning font-RobotoSlab text-primary group`}
              >
                <h4
                  className={`text-lg font-semibold underline decoration-dashed underline-offset-8 decoration-red-600 tracking-widest text-primary font-RobotoSlab `}
                >
                  {item.menu}
                </h4>
              </div>
              <div className={`font-RobotoSlab`}>
                {item?.subMenu?.map((l, index) => (
                  <Link
                    title={l.menuTitle}
                    className={`text-sm text-primary font-Formular cursor-pointer lg:text-lg tracking-widest !leading-snug hover:text-warning transition-colors duration-500 ease-linear w-full h-full font-light z-10 capitalize space-y-5 text-center sm:text-left`}
                    key={index}
                    href={item.menu != "Quick Links" ? `/our-company/${l.menuRef}` : `${l.menuRef}`}
                  >
                    <h4 className="w-full h-full mb-2">{l.menuTitle}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full text-center">
        <h4 className="text-base font-medium font-RobotoSlab text-primary/50 tracking-widest">
          © {new Date().getFullYear()}
          <span className="font-semibold font-Formular ms-1">
            Ashok Minerals Enterprises.
          </span>{" "}
          All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
