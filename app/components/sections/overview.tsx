import Image from "next/image"
import { Icons } from "../ui/icons"

export const OverviewSection = () => {
    return (
        <>
            <section className="max-section md:my-28 my-16 md:px-0 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center w-full md:gap-0 gap-24">
                    <div className="flex flex-col md:gap-10 gap-6 md:max-w-[500px] w-full">
                        <h1 className="md:text-5xl text-4xl">First to support multi-asset transactions</h1>
                        <p className="md:text-2xl text-[1.2rem]">Multi-asset support means that, with bridge provider support, any crypto asset can be imported to the Iron Fish network for private transactions.</p>
                        <button className="md:text-[25px] text-[1.2rem] pb-2 inline-flex gap-2 items-center cursor-pointer font-bold w-fit relative group">
                            <span className="relative">
                                Read our Whitepaper
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <Icons.Arrow />
                        </button>

                    </div>

                    <div className="">
                        <Image width={500} height={600} alt="Image" src="/images/balloon-fish.svg" />
                    </div>
                </div>
            </section>

            <section className="w-screen bg-[#C7F182] border">
                <div className="max-section md:my-28 my-16 md:px-0 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center w-full md:gap-0 gap-24">
                    <div className="">
                        <Image width={500} height={600} alt="Image" src="/images/fish-coins.svg" />
                    </div>
                    <div className="flex flex-col md:gap-10 gap-6 md:max-w-[500px] w-full">
                        <h1 className="md:text-5xl text-4xl">First to support multi-asset transactions</h1>
                        <p className="md:text-2xl text-[1.2rem]">Multi-asset support means that, with bridge provider support, any crypto asset can be imported to the Iron Fish network for private transactions.</p>
                        <button className="md:text-[25px] text-[1.2rem] pb-2 inline-flex gap-2 items-center cursor-pointer font-bold w-fit relative group">
                            <span className="relative">
                                Read our Whitepaper
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <Icons.Arrow />
                        </button>

                    </div>
                </div>
                </div>
            </section>
        </>
    )
}