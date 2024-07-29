import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { navbarMenu } from "@/libs/data";

const Footer = () => {
  return (
    <footer className="w-full h-full px-6 py-10 mt-10 space-y-5 sm:px-12 sm:py-14 lg:px-16 font-RobotoSlab bg-black/90">
      <div className="flex flex-col items-center justify-between gap-8 md:items-start md:flex-row">
        <div className="block space-y-6">
          <div className="flex gap-5">
            <div className="relative w-20 h-20 overflow-hidden md:-mt-2.5">
              <Image
                alt="ashok minerals logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={"/Ashok-Minerals-Final-Logo.jpg"}
              />
            </div>
            <h4 className="hidden text-lg font-semibold md:text-xl xl:text-2xl text-primary md:block">
              Ashok Minerals
            </h4>
          </div>
          <div className="flex items-center w-full gap-5">
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
        <div className="flex flex-col items-center md:items-start justify-center gap-2.5 sm:flex-row sm:gap-0 md:gap-3 ">
          {navbarMenu.map((item, id) => (
            <div className="flex flex-col gap-3" key={id}>
              <div
                className={`flex items-center gap-2 text-base font-normal capitalize transition-colors duration-300 ease-linear hover:text-warning font-RobotoSlab text-primary group  ${
                  item.menu === "our company" && "items-center md:items-start w-max"
                }`}
              >
                {/* {item.ref === "" && (
                  <IoIosArrowForward
                    className={`block text-base group-hover:rotate-90 transition-all duration-200 ease-linear text-primary`}
                  />
                )} */}
                <Link
                  href={item.ref}
                  className={`text-base font-normal text-primary hover:text-warning font-RobotoSlab`}
                >
                  {item.menu}
                </Link>
              </div>
              <div
                className={`ps-10 ${
                  item.menu === "our company" &&
                  "columns-2"
                } font-RobotoSlab`}
              >
                {item?.subMenu?.map((l, index) => (
                  <Link
                    // title={l.listMenu}
                    className={`text-sm text-primary cursor-pointer lg:text-lg hover:text-warning transition-colors duration-500 ease-linear w-full h-full font-normal z-10 capitalize space-y-5`}
                    key={index}
                    href={l.menuRef}
                  >
                    <h4 className="w-full h-full mb-2">{l.menuTitle}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* <Link
            href={"/blog"}
            className="text-base font-normal ms-0 md:ms-5 text-primary hover:text-warning font-RobotoSlab"
          >
            Blog
          </Link> */}
        </div>
      </div>
      <div className="w-full h-full text-center lg:text-right">
        <h4 className="text-base font-medium tracking-wide font-RobotoSlab text-zinc-500t text-primary/80">
          © {new Date().getFullYear()}
          <span className="font-semibold ms-1">
            Ashok Minerals Enterprises.
          </span>{" "}
          All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
