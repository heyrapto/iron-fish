"use client"

import Image from "next/image"
import { BiChevronDown } from "react-icons/bi"
import { Button } from "../ui/button"
import { useState } from "react"
import LayeredCard from "../reusable/layered-card"

interface DropdownItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
}

interface NavItem {
    title: string;
    hasDropdown?: boolean;
    color?: string;
    dropdownItems?: DropdownItem[];
    grid?: boolean;
}

const DocumentationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#FFD700" stroke="#000" strokeWidth="2"/>
        <circle cx="20" cy="20" r="8" fill="#000"/>
        <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="#FFD700" stroke="#000" strokeWidth="1.5"/>
    </svg>
);

const GithubIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="20" rx="2" fill="#FFD700" stroke="#000" strokeWidth="2"/>
        <rect x="8" y="10" width="24" height="14" fill="#000"/>
        <path d="M12 18 Q20 14 28 18" stroke="#FFD700" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="22" r="1.5" fill="#FFD700"/>
        <circle cx="24" cy="22" r="1.5" fill="#FFD700"/>
    </svg>
);

const FoundationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#90EE90" stroke="#000" strokeWidth="2"/>
        <circle cx="20" cy="20" r="10" fill="#006400"/>
        <path d="M20 10 L24 18 L16 18 Z" fill="#90EE90"/>
        <path d="M20 30 L16 22 L24 22 Z" fill="#90EE90"/>
    </svg>
);

const GovernanceIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#90EE90" stroke="#000" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="12" ry="8" fill="#006400"/>
        <circle cx="20" cy="20" r="6" fill="#90EE90"/>
        <path d="M14 16 Q20 12 26 16" stroke="#90EE90" strokeWidth="2" fill="none"/>
    </svg>
);

const GrantsIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#90EE90" stroke="#000" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="10" ry="12" fill="#006400"/>
        <circle cx="20" cy="18" r="4" fill="#90EE90"/>
        <path d="M18 22 Q20 24 22 22" stroke="#90EE90" strokeWidth="2" fill="none"/>
    </svg>
);

const CommunityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#90EE90" stroke="#000" strokeWidth="2"/>
        <circle cx="20" cy="20" r="14" fill="#006400"/>
        <path d="M12 16 Q20 12 28 16" stroke="#90EE90" strokeWidth="2" fill="none"/>
        <path d="M12 24 Q20 28 28 24" stroke="#90EE90" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="20" r="2" fill="#90EE90"/>
        <circle cx="24" cy="20" r="2" fill="#90EE90"/>
    </svg>
);

export const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navItems: NavItem[] = [
        {
            title: "Use",
            hasDropdown: true,
            color: "bg-orange-500"
        },
        {
            title: "Learn",
            hasDropdown: true,
            color: "bg-blue-500"
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
                    icon: <FoundationIcon />
                },
                {
                    title: "Governance",
                    description: "How the Iron Fish protocol is governed.",
                    icon: <GovernanceIcon />
                },
                {
                    title: "Grants",
                    description: "Apply for funding with projects that improve our ecosystem.",
                    icon: <GrantsIcon />
                },
                {
                    title: "Our Community",
                    description: "Keep up with the latest from the Iron Fish community.",
                    icon: <CommunityIcon />
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
                    icon: <DocumentationIcon />
                },
                {
                    title: "Github",
                    description: "The open-source Iron Fish repository.",
                    icon: <GithubIcon />
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

                        {hoveredItem === n.title && n.hasDropdown && n.dropdownItems && (
                            <div className="absolute">
                                <div className="bg-transparent pt-10 w-full"></div>
                                <LayeredCard 
                                    className="w-[800px]" 
                                    backgroundColor="bg-white" 
                                    backBgColor={n.color ? `${n.color}` : ""}
                                >
                                    <div className={`p-4 ${n.grid ? 'grid grid-cols-2 gap-4' : 'flex flex-row gap-3 w-full'}`}>
                                        {n.dropdownItems.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.href || "#"}
                                                className={`flex items-start gap-3 p-3 hover:bg-${n.color} rounded transition-colors group`}
                                            >
                                                <div className="shrink-0 mt-1">
                                                    {item.icon}
                                                </div>
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
                        )}
                    </li>
                ))}
            </ul>

            <Button type={"button"} icon="arrow">
                Get Started
            </Button>
        </nav>
    )
}