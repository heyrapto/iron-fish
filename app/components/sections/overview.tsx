import Image from "next/image"
import { Icons } from "../ui/icons"

export const OverviewSection = () => {
    return (
        <>
            <section className="max-section my-28">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-10 max-w-[500px]">
                        <h1 className="text-5xl">First to support multi-asset transactions</h1>
                        <p className="text-2xl">Multi-asset support means that, with bridge provider support, any crypto asset can be imported to the Iron Fish network for private transactions.</p>
                        <button className="text-[25px] pb-2 inline-flex gap-2 items-center cursor-pointer font-bold w-fit relative group">
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
                <div className="max-section my-28">
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <Image width={500} height={600} alt="Image" src="/images/fish-coins.svg" />
                    </div>
                    <div className="flex flex-col gap-10 max-w-[500px]">
                        <h1 className="text-5xl">First to support multi-asset transactions</h1>
                        <p className="text-2xl">Multi-asset support means that, with bridge provider support, any crypto asset can be imported to the Iron Fish network for private transactions.</p>
                        <button className="text-[25px] pb-2 inline-flex gap-2 items-center cursor-pointer font-bold w-fit relative group">
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