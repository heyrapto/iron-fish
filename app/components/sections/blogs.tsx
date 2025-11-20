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
            <div className="flex flex-col items-center justify-center md:py-40 py-24 max-section md:px-0 px-6">
                <h1 className="md:text-7xl text-4xl">From the Blog</h1>
                <p className="md:text-4xl text-[1.2rem] text-center md:w-[900px] w-full md:leading-[50px] leading-[30px] md:pt-14 pt-10">Your go-to hub for all things Iron Fish. Check out our product deep dives, ecosystem highlights, recent news, and so much more.</p>

                <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-10 py-16">
                    {blogData.map((b, i) => (
                        <LayeredCard key={i} backgroundColor="bg-white" backBgColor="bg-white" cardSize="md:w-[430px] w-full h-[570px]" backBgHover="group-hover:bg-[#DF77F3]" rounded="rounded-[10px]">
                            <div className="flex flex-col gap-6">
                                <div className="border-b-2 w-full">
                                    <Image
                                        src={b.image}
                                        width={600}
                                        height={600}
                                        alt="Image"
                                    />
                                </div>
                                <div className="px-10">
                                    <div className="flex flex-col gap-5 md:w-[350px] w-full">
                                        <span className="text-[1rem]">
                                            {b.date}
                                        </span>

                                        <p className="text-3xl font-normal">
                                            {b.headline}
                                        </p>
                                    </div>
                                    <Button size="sm" variant="secondary" className="mt-5">
                                        {b.btnText}
                                    </Button>
                                </div>
                            </div>
                        </LayeredCard>
                    ))}
                </div>

                <Button icon="arrow" variant="secondary" size="sm">
                    View All
                </Button>
            </div>
        </section>
    )
}