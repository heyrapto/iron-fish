import Image from "next/image";
import LayeredCard from "../reusable/layered-card";

export const WhychooseUsSection = () => {
    const whyChooseData = [
        {
            icon: "/images/eye.svg",
            title: "Privacy without compromise",
            desc: "Every crypto asset deserves access to a privacy layer. With Iron Fish you can transfer any asset in a safe and private way."
        },
        {
            icon: "/images/fish.svg",
            title: "Privacy without compromise",
            desc: "Every crypto asset deserves access to a privacy layer. With Iron Fish you can transfer any asset in a safe and private way."
        },
        {
            icon: "/images/shake.svg",
            title: "Privacy without compromise",
            desc: "Every crypto asset deserves access to a privacy layer. With Iron Fish you can transfer any asset in a safe and private way."
        },
    ]
    return (
        <section className="max-section min-h-screen">
            <div className="grid grid-cols-1 gap-px md:grid-cols-[1fr_1fr] md:my-28 my-8 md:px-0 px-6">
            <div className="flex items-start md:p-10 p-6 md:row-span-7">
                <h2 className="sticky md:top-20 top-10 md:pt-20 pt-10 md:text-6xl text-4xl">
                Why Use Iron Fish?
                </h2>
              </div>
              <div className="flex flex-col gap-16">
              {whyChooseData.map((w, i) => (
                <LayeredCard key={i} backgroundColor="bg-white" backBgColor="bg-pink-300" backBgHover="group-hover:bg-white" cardSize="md:w-[450px] w-full h-[600px]">
                    <div className="flex flex-col p-10 justify-between h-full">
                        <span className="bg-pink-300 w-[40px] inline-flex text-center justify-center rounded-full">{i}/3</span>

                        <div className="flex flex-col gap-10">
                        <Image
                        src={w.icon}
                        width={80}
                        height={80}
                        alt="Icon"
                        />
                        <div>
                        <h1 className="text-[2rem] font-light leading-[35px]">{w.title}</h1>
                        <p className="pt-6">{w.desc}</p>
                        </div>
                        </div>
                    </div>
                </LayeredCard>
              ))}
              </div>
            </div>
        </section>
    )
}