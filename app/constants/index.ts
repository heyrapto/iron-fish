export interface DropdownItem {
    title: string;
    description: string;
    icon: string;
    href?: string;
}

export interface NavItem {
    title: string;
    hasDropdown?: boolean;
    color?: string;
    dropdownItems?: DropdownItem[];
    grid?: boolean;
}


export const navItems: NavItem[] = [
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