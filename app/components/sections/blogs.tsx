import Image from "next/image"
import LayeredCard from "../reusable/layered-card"
import { Button } from "../ui/button"

export const BlogSection = () => {
    const blogData = [
        {
            image: "/images/suifish.webp",
            date: "October 30, 2025",
            headline: "Bringing Iron Fish Privacy to Sui: Introducing SuiFish",
            btnText: "Read Now"
        },
        {
            image: "/images/mobile_app_banner.webp",
            date: "October 30, 2025",
            headline: "Bringing Iron Fish Privacy to Sui: Introducing SuiFish",
            btnText: "Read Now"
        },
        {
            image: "/images/ironfish_plus_base.webp",
            date: "October 30, 2025",
            headline: "Bringing Iron Fish Privacy to Sui: Introducing SuiFish",
            btnText: "Read Now"
        },
    ]
    return (
        <section className="bg-[#DF77F3]">
            <div className="flex flex-col items-center justify-center py-40 max-section">
                <h1 className="text-7xl">From the Blog</h1>
                <p className="text-4xl text-center w-[900px] leading-[50px] pt-14">Your go-to hub for all things Iron Fish. Check out our product deep dives, ecosystem highlights, recent news, and so much more.</p>

                <div className="flex gap-10 py-16">
                    {blogData.map((b, i) => (
                        <LayeredCard key={i} backgroundColor="bg-white" backBgColor="bg-white" cardSize="w-[500px] h-[700px]" backBgHover="group-hover:bg-[#DF77F3]">
                            <div className="flex flex-col gap-6">
                                <div className="border-b-2 w-full">
                                    <Image
                                        src={b.image}
                                        width={600}
                                        height={600}
                                        alt="Image"
                                    />
                                </div>
                                <div className="p-10">
                                    <div className="flex flex-col gap-5 w-full">
                                        <span className="text-[1rem]">
                                            {b.date}
                                        </span>

                                        <p className="text-4xl">
                                            {b.headline}
                                        </p>
                                    </div>
                                    <Button variant="secondary" className="mt-10">
                                        {b.btnText}
                                    </Button>
                                </div>
                            </div>
                        </LayeredCard>
                    ))}
                </div>

                <Button icon="arrow" variant="secondary">
                    View All
                </Button>
            </div>
        </section>
    )
}