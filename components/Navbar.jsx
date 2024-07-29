"use client";
import { navbarMenu } from "@/libs/data";
import { Button } from "@nextui-org/button";
import { IoCall } from "react-icons/io5";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveState, setIsActiveState] = useState(null);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const router = useRouter();

  return (
    <Navbar
      position="sticky"
      isBordered="false"
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          "!z-[990] py-2.5 px-6 sm:px-10 lg:px-16 h-auto top-8 sm:top-8 shadow-md",
        ],
        wrapper: ["!px-0"],
        item: ["data-[active=true]:text-warning"],
      }}
    >
      <NavbarContent className="pr-3" justify="start">
        <NavbarBrand>
          <div
            className="relative w-20 h-20 overflow-hidden cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              alt="ashok minerals logo"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              src={"/Ashok-Minerals-Final-Logo.jpg"}
            />
          </div>
        </NavbarBrand>
      </NavbarContent>
      {/* Desktop menubar */}
      <NavbarContent
        className="hidden md:gap-5 md:flex me-8"
        justify="end"
      >
        {navbarMenu.map((item, id) => (
          <NavbarItem key={id} className="relative group">
            <div
              className={`flex items-center gap-2 py-10 text-base font-normal capitalize transition-colors duration-500 ease-linear lg:text-lg hover:text-warning font-RobotoSlab ${
                item.ref !== "" && "cursor-pointer"
              }`}
            >
              {item.menu}
              {item.ref === "" && (
                <TiArrowSortedDown
                  className={` ${
                    item.menu === "blog" ? "hidden" : "block"
                  } text-base group-hover:rotate-180 transition-all duration-200 ease-linear text-black`}
                />
              )}
            </div>
            {item.subMenu && (
              <div
                className={`absolute hidden top-20 -left-0 bg-primary p-4 shadow-md rounded-xl font-RobotoSlab group-hover:block border-2 border-warning ${
                  item.menu === "our company" && ""
                }`}
              >
                {item?.subMenu?.map((l, index) => (
                  <Link
                    title={l.menuTitle}
                    className={`text-sm cursor-pointer lg:text-lg hover:text-warning active:text-warning transition-colors duration-500 ease-linear block font-normal z-10 capitalize ${
                      l.menuTitle === isActiveState
                        ? "text-warning"
                        : "text-black"
                    }`}
                    key={index}
                    href={l.menuRef}
                    onClick={() => setIsActiveState(l.menuTitle)}
                  >
                    <h4 className="mb-2.5 ">{l.menuTitle}</h4>
                  </Link>
                ))}
              </div>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Contact button */}
      <NavbarContent justify="end" className="!basis-0 !grow-0">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#"
            radius="sm"
            variant="solid"
            className="text-base font-semibold text-white font-RobotoSlab ms-3 lg:text-lg"
          >
            <span>
              <IoCall className="text-base text-primary"/>
            </span>
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Hamburger Toggle button */}
      <NavbarContent className="md:hidden !grow-0 !basis-0" justify="end">
        {/* <NavbarMenuToggle
          className="!z-[1000]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        /> */}
        <NavbarItem>
          <GiHamburgerMenu
            onClick={() => setIsMenuOpen(true)}
            className="text-4xl font-semibold cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            +
          </GiHamburgerMenu>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile menu */}
      <NavbarMenu
        className="!z-[995] top-0 bg-secondary/95"
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
            exit: {
              x: -1000,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <NavbarMenuItem className="flex items-center justify-end w-full mt-11 ms-0">
          {/* mt-3 ms-2.5 */}
          <IoClose
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl text-red-500 rounded-full shadow-lg cursor-pointer bg-primary"
          />
        </NavbarMenuItem>
        <div className="mt-10 space-y-4 text-center">
          {navbarMenu.map((item, index) => (
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
                    base: "text-black font-RobotoSlab font-normal",
                    trigger: "justify-center py-0 ps-8",
                    titleWrapper: "!flex-none",
                    title: "!text-black !capitalize",
                    indicator:
                      "transition-all duration-300 ease-linear text-warning text-xl",
                  }}
                >
                  {item?.subMenu?.map((l, index) => (
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      title={l.menuTitle}
                      className={`text-base font-normal capitalize font-RobotoSlab `}
                      key={index}
                      href={l.menuRef}
                    >
                      <h4 className="mb-2">{l.menuTitle}</h4>
                    </Link>
                  ))}
                </AccordionItem>
              </Accordion>
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarMenuItem className="w-full text-center">
          <Link
            className="font-normal text-black capitalize text-large hover:text-secondary font-RobotoSlab"
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
          >
            blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full mt-5 text-center">
          <Button
            as={Link}
            color="warning"
            href="#"
            variant="solid"
            className="mx-auto text-base font-semibold text-white font-RobotoSlab"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
