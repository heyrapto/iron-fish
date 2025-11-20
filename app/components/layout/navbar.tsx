"use client"

import Image from "next/image"
import { BiChevronDown, BiMenu } from "react-icons/bi"
import { Button } from "../ui/button"
import { useState } from "react"
import LayeredCard from "../reusable/layered-card"
import { navItems } from "@/app/constants"

export const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const hoverColorMap: Record<string, string> = {
        "bg-orange-500": "hover:bg-orange-500",
        "bg-blue-500": "hover:bg-blue-500",
        "bg-green-500": "hover:bg-green-500",
        "bg-yellow-500": "hover:bg-yellow-500",
    };

    return (
        <nav className="flex fixed w-full bg-white z-9999 justify-between border-b-2 items-center px-6 py-3">
            <Image src="/iron-logo.svg" alt="Logo" width={200} height={200} />

            <div className="flex-1 md:flex hidden justify-center relative">
                <ul className="flex items-center gap-6 relative">
                    {navItems.map((n, i) => (
                        <li 
                            key={i} 
                            className="relative"
                            onMouseEnter={() => n.hasDropdown && setHoveredItem(n.title)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <a 
                                href="" 
                                className={`flex items-center gap-2 pb-2 transition-all ${
                                    hoveredItem === n.title ? "border-b-2 border-black" : ""
                                }`}
                            >
                                <p className="text-xl">{n.title}</p>
                                {n.hasDropdown && (
                                    <BiChevronDown className="w-5 h-5" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Dropdown positioned relative to the ul container - fixed position for all dropdowns */}
                {hoveredItem && (() => {
                    const activeNavItem = navItems.find(n => n.title === hoveredItem);
                    if (!activeNavItem?.hasDropdown || !activeNavItem?.dropdownItems) return null;
                    
                    return (
                        <div 
                            className="absolute top-full left-1/2 transform -translate-x-1/2"
                            onMouseEnter={() => setHoveredItem(hoveredItem)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="bg-transparent pt-10 w-full"></div>
                            <LayeredCard 
                                className="w-[800px] max-h-[500px]" 
                                backgroundColor="bg-white" 
                                backBgColor={activeNavItem.color ? `${activeNavItem.color}` : ""}
                            >
                                <div className={`p-4 ${activeNavItem.grid ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-2 gap-3 w-full'}`}>
                                    {activeNavItem.dropdownItems.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.href || "#"}
                                            className={`flex items-start gap-3 p-3 ${activeNavItem.color ? hoverColorMap[activeNavItem.color] || '' : ''} rounded transition-colors group`}
                                        >
                                            {/* <div className="shrink-0 mt-1">
                                                {item.icon}
                                            </div> */}
                                            <Image
                                            src={item.icon}
                                            height={80}
                                            width={80}
                                            alt="icon"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-lg mb-1 group-hover:underline">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </LayeredCard>
                        </div>
                    );
                })()}
            </div>

            <div className="md:flex hidden">
            <Button className="md:flex hidden" type={"button"} icon="arrow" size="lg">
                Get Started
            </Button>
            </div>

            <div className="md:hidden flex">
            <Button type={"button"} size="lg">
                <BiMenu />
            </Button>
            </div>
        </nav>
    )
}