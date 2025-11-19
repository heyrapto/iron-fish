import Image from "next/image"
import { BiChevronDown } from "react-icons/bi"
import { Button } from "../ui/button"

export const Navbar = () => {
    const navItems = [
        {
            title: "Use",
            hasDropdown: true,
        },
        {
            title: "Learn",
            hasDropdown: true,
        },
        {
            title: "Community",
            hasDropdown: true,
        },
        {
            title: "Developers",
            hasDropdown: true,
        },
        {
            title: "Blog",
        },
    ]
    return (
        <nav className="flex fixed w-full bg-white z-999999 justify-between border-b-2 items-center px-6 py-3">
            <Image src="/iron-logo.svg" alt="Logo" width={200} height={200} />

            <ul className="flex items-center gap-6">
                {navItems.map((n, i) => (
                    <li key={i} className={`flex gap-2 items-center ${n.hasDropdown ? "hover:border-b transition-all" : ""} cursor-pointer pb-2`}>
                        <a href="" className="flex items-center gap-2">
                            <p className="text-xl">{n.title}</p>
                            {n.hasDropdown && (
                                <BiChevronDown className="w-5 h-5" />
                            )}
                        </a>
                    </li>
                ))}
            </ul>

            <Button type={"button"} icon="arrow">
                Get Started
            </Button>
        </nav>
    )
}