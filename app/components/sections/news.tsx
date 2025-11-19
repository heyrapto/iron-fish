import { NewsCard } from "../ui/news-card"

export const NewsSection = () => {
    const newsReports = [
        {
            date: "April 20, 2023",
            headline: "A16z-backed Iron Fish launches privacy-focused blockchain on mainnet",
            image: "/images/the-block.webp"
        },
        {
            date: "November 30, 2021",
            headline: "Iron Fish Raises $27 Million To Build A Cryptocurrency Beyond The Reach Of Surveillance States",
            image: "/images/forbes.webp"
        },
        {
            date: "November 30, 2021",
            headline: "A16z Leads $28M Round for Privacy Coin Iron Fish",
            image: "/images/coindesk.webp"
        },
    ]
    return (
        <section className="max-section flex flex-col mt-20">
            <div className="flex flex-col items-center justify-center">
            <h1 className="uppercase text-[1.2rem]">Iron Fish in the news</h1>
            <span className="w-full bg-black h-[0.5px] my-10" />

            <div className="flex flex-row gap-10">
                {newsReports.map((n, i) => (
                    <NewsCard key={i} date={n.date} headline={n.headline} image={n.image} />
                ))}
            </div>
            </div>
        </section>
    )
}