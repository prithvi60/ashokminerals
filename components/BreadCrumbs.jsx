"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { IoHome } from "react-icons/io5";

export const BreadCrumbs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  const handleClick = (ref) => {
    // console.log(ref);

    if (ref === "/our-company") {
      router.push("");
    } else {
      router.push(ref);
    }
  };
  return (
    (<Breadcrumbs
      underline="hover"
      classNames={{
        list: "shadow-small",
      }}
      itemClasses={{
        item: "text-primary/60 data-[current=true]:text-primary text-base sm:text-xl capitalize",
        separator: "text-primary/40",
      }}
    >
      <BreadcrumbItem onClick={() => handleClick("/")}>
        <IoHome className="text-xl text-primary sm:text-2xl" />
      </BreadcrumbItem>
      {pathNames.map((path, id) => (
        <BreadcrumbItem
          key={id}
          onClick={
            id !== pathNames.length - 1 &&
            (() => handleClick(`/${path.replace(/\s/g, "_")}`))
          }
        >
          {path.replace(/_/g, " ")}
        </BreadcrumbItem>
      ))}
      {/* <BreadcrumbItem>Artist</BreadcrumbItem> */}
    </Breadcrumbs>)
  );
};
