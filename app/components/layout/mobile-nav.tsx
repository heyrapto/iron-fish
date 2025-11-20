"use client"

import { NavItem } from "@/app/constants";
import Image from "next/image";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type MobileAccordionProps = {
  item: NavItem;
};

export const MobileAccordionItem = ({ item }: MobileAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col p-6">
      <button
        className="flex justify-between items-center w-full text-xl py-4"
        onClick={() => setOpen(!open)}
      >
        {item.title}
        <BiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && item.dropdownItems && (
        <div className="flex flex-col gap-6 pb-4 mt-4">
          {item.dropdownItems.map((d, i) => (
            <a key={i} href={d.href} className="flex gap-4">
              <Image
                src={d.icon}
                width={60}
                height={60}
                alt={d.title}
              />
              <div>
                <p className="font-semibold text-lg">{d.title}</p>
                <p className="text-sm text-gray-600">{d.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
