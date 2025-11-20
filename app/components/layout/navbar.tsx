"use client"

import Image from "next/image"
import { BiChevronDown } from "react-icons/bi"
import { Button } from "../ui/button"
import { useState } from "react"
import LayeredCard from "../reusable/layered-card"

interface DropdownItem {
    title: string;
    description: string;
    icon: string;
    href?: string;
}

interface NavItem {
    title: string;
    hasDropdown?: boolean;
    color?: string;
    dropdownItems?: DropdownItem[];
    grid?: boolean;
}

export const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const hoverColorMap: Record<string, string> = {
        "bg-orange-500": "hover:bg-orange-500",
        "bg-blue-500": "hover:bg-blue-500",
        "bg-green-500": "hover:bg-green-500",
        "bg-yellow-500": "hover:bg-yellow-500",
    };

    const navItems: NavItem[] = [
        {
            title: "Use",
            hasDropdown: true,
            color: "bg-orange-500",
            grid: true,
            dropdownItems: [
                {
                    title: "Node App",
                    description: "Download our desktop node application.",
                    icon: "/images/use-key-fish.svg"
                },
                {
                    title: "Mine",
                    description: "Learn how to mine $IRON.",
                    icon: "/images/use-strangely-normal-looking-fish.svg"
                },
                {
                    title: "Ecosystem",
                    description: "Our vast ecosystem offers diverse apps and integrations to choose from.",
                    icon: "/images/use-ecosystem.svg"
                },
                {
                    title: "Node CLI",
                    description: "Run Iron Fish in the terminal.",
                    icon: "/images/use-key-fish.svg"
                },
                {
                    title: "Block Explorer",
                    description: "Track network activity on our encrypted Block Explorer.",
                    icon: "/images/use-block.svg"
                },
                {
                    title: "Ledger App",
                    description: "Use Iron Fish on Ledger.",
                    icon: "/images/use-ledger.svg"
                }
            ]
        },
        {
            title: "Learn",
            hasDropdown: true,
            color: "bg-blue-500",
            dropdownItems: [
                {
                    title: "Get Started",
                    description: "Everything you need to start using Iron Fish.",
                    icon: "/images/learn-book-fish.svg"
                },
                {
                    title: "FAQ",
                    description: "You've got questions, we've got answers.",
                    icon: "/images/learn-mag-glass.svg"
                },
                {
                    title: "Whitepaper",
                    description: "A comprehensive review of the technology behind Iron Fish.",
                    icon: "/images/learn-whitepaper.svg"
                },
                {
                    title: "Tokenomics",
                    description: "An overview of token distribution and allocations.",
                    icon: "/images/learn-tokenomics.svg"
                }
            ]
        },
        {
            title: "Community",
            hasDropdown: true,
            color: "bg-green-500",
            grid: true,
            dropdownItems: [
                {
                    title: "Foundation",
                    description: "Guiding Iron Fish towards premier crypto privacy.",
                    icon: "/images/community-foundation.svg"
                },
                {
                    title: "Governance",
                    description: "How the Iron Fish protocol is governed.",
                    icon: "/images/community-governance.svg"
                },
                {
                    title: "Grants",
                    description: "Apply for funding with projects that improve our ecosystem.",
                    icon:"/images/community-grants.svg"
                },
                {
                    title: "Our Community",
                    description: "Keep up with the latest from the Iron Fish community.",
                    icon: "/images/community-earth.svg"
                }
            ]
        },
        {
            title: "Developers",
            hasDropdown: true,
            color: "bg-yellow-500",
            dropdownItems: [
                {
                    title: "Documentation",
                    description: "Reference materials for builders.",
                    icon: "/images/dev-blowfish.svg"
                },
                {
                    title: "Github",
                    description: "The open-source Iron Fish repository.",
                    icon: "images/dev-tv-fish.svg"
                }
            ]
        },
        {
            title: "Blog",
        },
    ]

    return (
        <nav className="flex fixed w-full bg-white z-9999 justify-between border-b-2 items-center px-6 py-3">
            <Image src="/iron-logo.svg" alt="Logo" width={200} height={200} />

            <div className="flex-1 flex justify-center relative">
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

            <Button type={"button"} icon="arrow">
                Get Started
            </Button>
        </nav>
    )
}