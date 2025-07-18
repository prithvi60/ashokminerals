"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const AccordionComponent = ({ list, idx, data }) => {
  // const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));
  const [selectedKeys, setSelectedKeys] = useState(
    new Set(data.map((_, idx) => idx.toString()))
  );

  return (
    <Accordion
      variant="light"
      //   defaultExpandedKeys={["0"]}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <AccordionItem
        key={idx}
        aria-label={list.title}
        title={list.title}
        indicator={({ isOpen }) =>
          isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />
        }
        classNames={{
          base: "text-black font-RobotoSlab font-medium",
          heading: "transition-all duration-300 ease-linear",
          title: "!text-black !capitalize text-xl",
          indicator:
            "!transition-transform !duration-300 !ease-linear text-xl !rotate-0 data-[open=true]:!rotate-0 text-black",
        }}
      >
        <p className="para text-zinc-600">
          {list.desc}
        </p>
      </AccordionItem>
    </Accordion>
  );
};
