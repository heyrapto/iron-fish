"use client"

import Image from "next/image"
import { useState } from "react"
import { FaXTwitter, FaDiscord, FaGithub, FaTelegram } from "react-icons/fa6"

export const Footer = () => {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle subscription logic here
        console.log("Subscribing:", email)
        setEmail("")
    }

    const footerLinks = {
        use: [
            "Node App",
            "Node CLI",
            "Mine",
            "Block Explorer",
            "Ecosystem",
            "Ledger App"
        ],
        learn: [
            "Get Started",
            "FAQ",
            "Whitepaper",
            "Tokenomics"
        ],
        community: [
            "Foundation",
            "Governance",
            "Grants",
            "Our Community"
        ],
        developers: [
            "Documentation",
            "Github"
        ]
    }

    const socialLinks = [
        { icon: FaXTwitter, href: "#", label: "Twitter" },
        { icon: FaDiscord, href: "#", label: "Discord" },
        { icon: FaGithub, href: "#", label: "GitHub" },
        { icon: FaTelegram, href: "#", label: "Telegram" }
    ]

    return (
        <footer className="bg-black text-white">
            <div className=" px-6 py-16">
                {/* Top Section - Logo and Newsletter */}
                <div className="flex flex-col gap-8 pb-16 border-b border-gray-800">
                    <div className="flex items-start flex-col gap-12">
                            <Image 
                                src="/light-logo.svg" 
                                alt="Iron Fish Logo" 
                                width={140} 
                                height={22}
                                className="h-auto"
                            />

                        {/* Newsletter Section */}
                        <div className="flex flex-col gap-4 max-w-[600px] w-full">
                            <p className="text-xl">
                                Join our newsletter and stay up to date with privacy and crypto.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email Address"
                                    className="flex-1 px-4 py-3 bg-white text-black placeholder:text-gray-500 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FFB9E5]"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[#FFB9E5] text-black font-medium hover:bg-pink-300 transition-colors whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xl">
                                Discover our impactful presence —{" "}
                                <a href="#" className="text-[#FFB9E5] hover:underline">
                                    read our blog.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mid-Section - Navigation Columns */}
                <div className="grid grid-cols-4 gap-8 py-16 border-b border-gray-800">
                    {/* Use Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-[#FF9500]">Use</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.use.map((link, i) => (
                                <li key={i}>
                                    <a 
                                        href="#" 
                                        className="text-white hover:text-[#FFB9E5] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learn Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-[#007AFF]">Learn</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.learn.map((link, i) => (
                                <li key={i}>
                                    <a 
                                        href="#" 
                                        className="text-white hover:text-[#FFB9E5] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-[#34C759]">Community</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.community.map((link, i) => (
                                <li key={i}>
                                    <a 
                                        href="#" 
                                        className="text-white hover:text-[#FFB9E5] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developers Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-[#FFCC00]">Developers</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.developers.map((link, i) => (
                                <li key={i}>
                                    <a 
                                        href="#" 
                                        className="text-white hover:text-[#FFB9E5] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Legal and Social */}
                <div className="flex items-center justify-between pt-8 pb-6 flex-wrap gap-4">
                    {/* Left - IO Icon and Legal Text */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="text-white text-base font-bold">
                            IO
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white flex-wrap">
                            <a href="#" className="hover:text-[#FFB9E5] transition-colors whitespace-nowrap">
                                Terms and Conditions
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#FFB9E5] transition-colors whitespace-nowrap">
                                Terms and Conditions for Ledger Campaign
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#FFB9E5] transition-colors whitespace-nowrap">
                                Privacy Policy
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#FFB9E5] transition-colors whitespace-nowrap">
                                Media Kit
                            </a>
                            <span>|</span>
                            <span className="whitespace-nowrap">Copyright 2025 Iron Fish</span>
                        </div>
                    </div>

                    {/* Right - Social Media Icons */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon
                            return (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-white hover:text-[#FFB9E5] transition-colors"
                                >
                                    <Icon size={24} />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
