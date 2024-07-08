"use client";
import { navbarMenu } from "@/libs/data";
import { Button } from "@nextui-org/button";
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
        base: ["!z-[990] py-2.5 px-6 sm:px-10 lg:px-16 xl:px-40 h-auto top-8 sm:top-8 "],
        wrapper:["!px-0"],
        item: ["data-[active=true]:text-warning"],
      }}
    >
      <NavbarContent className="pr-3" justify="start">
        <NavbarBrand>
          <div
            className="relative w-20 h-20 overflow-hidden cursor-pointer sm:w-24 sm:h-24"
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
      <NavbarContent className="hidden gap-3.5 md:gap-5 sm:flex" justify="end">
        {navbarMenu.map((item, id) => (
          <NavbarItem
            key={id}
            isActive={item.menu === isActiveState}
            onClick={() => setIsActiveState(item.menu)}
            className="relative group"
          >
            <div className="flex items-center gap-2 py-10 text-base font-normal capitalize transition-colors duration-500 ease-linear lg:text-lg hover:text-warning font-RobotoSlab">
              {item.menu}

              <TiArrowSortedDown
                className={` ${
                  item.menu === "blog" ? "hidden" : "block"
                } text-base group-hover:rotate-180 transition-all duration-200 ease-linear text-black`}
              />
            </div>
            {item.subMenu && (
              <div
                className={`absolute hidden top-[100px] -left-0 bg-primary p-4 shadow-md rounded-xl font-RobotoSlab w-max group-hover:block whitespace-nowrap ${
                  item.menu === "our company" && "columns-2"
                }`}
              >
                {item?.subMenu?.map((l, index) => (
                  <Link
                    // title={l.listMenu}
                    className={`text-sm cursor-pointer lg:text-lg hover:text-warning transition-colors duration-500 ease-linear w-full h-full font-normal z-10 capitalize`}
                    key={index}
                    href={l.menuRef}
                  >
                    <h4 className="w-full h-full mb-2.5">{l.menuTitle}</h4>
                  </Link>
                ))}
              </div>
            )}
          </NavbarItem>
        ))}
        <NavbarItem
          isActive={"blog" === isActiveState}
          onClick={() => setIsActiveState("blog")}
        >
          <Link
            href={"/blog"}
            className="flex items-center gap-2 py-10 text-base font-normal capitalize transition-colors duration-500 ease-linear lg:text-lg hover:text-warning font-RobotoSlab"
          >
            blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Contact button */}
      <NavbarContent justify="end" className="!basis-0 !grow-0">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#"
            variant="solid"
            className="font-semibold text-white font-RobotoSlab ms-3"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Hamburger Toggle button */}
      <NavbarContent className="sm:hidden !grow-0 !basis-0" justify="end">
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
                    indicator: "transition-all duration-300 ease-linear",
                  }}
                >
                  {item?.subMenu?.map((l, index) => (
                    <Link
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
          >
            Contact
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
