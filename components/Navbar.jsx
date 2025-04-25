"use client";

import { Button } from "@heroui/button";
import { IoCall } from "react-icons/io5";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { navbarMenu } from "@/libs/data";
import { IoInformationCircle } from "react-icons/io5";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveState, setIsActiveState] = useState(null);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["3"]));
  const [percent, setPercent] = useState(false);
  const path = usePathname();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const innerHeight = window.innerHeight;
    const threshold = innerHeight * 0.2;

    if (scrollPosition > threshold) {
      setPercent(true); // white color
    } else {
      setPercent(false);
    }
  };

  // Scroll based color change side effect

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Navbar
      isBordered="false"
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      // onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          `${!percent && path === "/"
            ? "!bg-transparent shadow-none"
            : "bg-primary/80"
          } fixed top-0 left-0 !z-[990] py-2.5 px-6 sm:px-10 lg:px-16 h-auto top-0 sm:top-0 transition-all duration-300 ease-linear`,
        ],
        wrapper: ["!px-0"],
        item: ["data-[active=true]:text-warning"],
      }}
    >
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand
          className={`${!percent && path === "/" ? "opacity-0" : "opacity-100"} ${path === "/" ? "flex" : "hidden"}`}
        >
          <Link
            href={"/"}
            className="relative overflow-hidden cursor-pointer size-16 md:size-20"
          >
            <Image
              alt="ashok minerals logo"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              src={"/ashok-minerals-logo3.svg"}
            />
          </Link>
        </NavbarBrand>
        {path !== "/" && (
          <NavbarBrand>
            <Link
              href={"/"}
              className="relative overflow-hidden cursor-pointer size-16 md:size-20"
            >
              <Image
                alt="ashok minerals logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                src={"/ashok-minerals-logo3.svg"}
              />
            </Link>
          </NavbarBrand>
        )}
      </NavbarContent>
      {/* Desktop menubar */}
      <NavbarContent className="hidden lg:gap-5 lg:flex ml-28" justify="center">
        {navbarMenu?.map((item, id) => (
          <NavbarItem key={id} className="relative group">
            <div
              className={`flex items-center gap-2 py-10 text-base font-normal capitalize transition-colors duration-500 ease-linear tracking-widest ${!percent && path === "/" ? "text-primary" : "text-black"
                } lg:text-lg hover:underline hover:underline-offset-4 font-bold font-RobotoSlab  ${item.ref !== "" && "cursor-pointer"
                }`}
            >
              <Link href={item.ref}>{item.menu}</Link>
              {item.menu !== "blog" && (
                <TiArrowSortedDown
                  className={` ${item.menu === "blog" ? "hidden" : "block"
                    } text-base group-hover:rotate-180  ${!percent && path === "/" ? "text-primary/80" : "text-black"
                    } transition-all duration-200 ease-linear text-black`}
                />
              )}
            </div>
            {item.subMenu && (
              <div
                className={`absolute hidden top-[85px] left-0 p-4 shadow-md rounded-xl font-RobotoSlab bg-primary/90 group-hover:block`}
              >
                {item?.subMenu?.map((l, index) => (
                  <Link
                    title={l.menuTitle}
                    className={`text-sm cursor-pointer lg:text-lg hover:text-warning active:text-warning tracking-widest transition-colors duration-500 ease-linear block font-normal z-10 capitalize ${(l.menuTitle === "more products" || l.menuTitle === "more markets") && "text-warning"} ${l.menuTitle === isActiveState
                      ? "text-warning"
                      : "text-black"
                      }`}
                    key={index}
                    href={`${l.menuRef}`}
                    onClick={() => setIsActiveState(l.menuTitle)}
                  >
                    <h4 className="mb-2.5">{l.menuTitle}</h4>
                  </Link>
                ))}
                {/* {item.menu !== "our company" && (<Link
                  href={`${item.menu === "products" ? "/products" : "/markets"}`}
                  className="absolute flex items-center gap-1 text-warning bottom-2 right-2.5"
                >
                  <IoInformationCircle className="text-warning" />
                  <h5>{`more...`}</h5>
                </Link>)} */}
              </div>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Contact button */}
      <NavbarContent justify="end" className="!basis-0 !grow-0 hidden lg:block">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#contact"
            radius="none"
            variant="solid"
            className="mt-4 text-base font-semibold text-white uppercase duration-500 font-RobotoSlab ms-3 lg:text-lg hover:animate-pulse group tracking-widest"
          >
            Contact Us
            <span className="inline-block group-hover:animate-shake">
              <IoCall className="text-base transition-all duration-500 text-primary group-hover:scale-125" />
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Hamburger Toggle button */}
      <NavbarContent className="lg:hidden !grow-0 !basis-0" justify="end">
        <NavbarItem>
          <GiHamburgerMenu
            onClick={toggleMenu}
            className={`text-4xl font-semibold cursor-pointer transition-all duration-400 ease-out ${!percent && path === "/" ? "text-primary" : "text-black"
              }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarItem>
      </NavbarContent>
      {/* Mobile menu */}
      <NavbarMenu
        className="!z-[995] top-[0px] bg-secondary bg-opacity-95 h-full"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
            exit: {
              y: -600,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <div className="flex justify-end px-1 py-4 sm:px-3.5">
          <IoClose
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl text-red-500 rounded-full shadow-lg cursor-pointer bg-primary/80 transform transition-all duration-400 ease-out`}
          />
        </div>
        <div className="my-10 space-y-4">
          <div className="flex flex-col items-end justify-center gap-4">
            {navbarMenu?.slice(0, navbarMenu.length).map((item, id) => (
              <Link
                href={item.ref}
                className="text-lg font-medium tracking-widest capitalize me-12 font-RobotoSlab"
                key={id}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.menu}
              </Link>
            ))}
          </div>
          {/* {navbarMenu?.slice(3, 4).map((item, index) => (
            <NavbarMenuItem key={index}>
              <Accordion
                variant="light"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <AccordionItem
                  key={index}
                  aria-label={item.menu}
                  title={item.menu}
                  indicator={({ isOpen }) =>
                    isOpen ? <FaCaretUp /> : <FaCaretDown />
                  }
                  classNames={{
                    base: "text-black font-RobotoSlab",
                    trigger: "justify-end py-0 ps-8",
                    heading: "transition-all duration-300 ease-linear",
                    titleWrapper: "!flex-none",
                    title: "!text-black !capitalize text-lg font-medium",
                    indicator:
                      "transition-all duration-300 ease-linear text-warning text-xl !rotate-0",
                  }}
                >
                  {item?.subMenu?.map((l, index) => (
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      title={l.menuTitle}
                      className={`text-lg font-medium tracking-widest capitalize font-RobotoSlab text-end`}
                      key={index}
                      href={`/our-company/${l.menuRef}`}
                    >
                      <h4 className="mb-2">{l.menuTitle}</h4>
                    </Link>
                  ))}
                </AccordionItem>
              </Accordion>
            </NavbarMenuItem>
          ))} */}
        </div>
        <NavbarMenuItem className="w-full mb-8 text-end">
          <Button
            as={Link}
            color="warning"
            href="#contact"
            variant="solid"
            radius="none"
            className="mx-auto text-base font-semibold tracking-widest text-white uppercase font-RobotoSlab"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
