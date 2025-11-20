import Image from "next/image"
import LayeredCard from "../reusable/layered-card"
import { Button } from "./button"

interface FeatureCardProps {
    title: string
    desc: string
    btnText: string
    image: string
}

export const FeaturesCard = ({ title, desc, btnText, image }: FeatureCardProps) => {
    return (
        <LayeredCard className="flex flex-col items-center justify-between relative" backgroundColor="bg-[#242424]" borderColor="border-gray-700"
        hoverBorderColor="group-hover:border-white" cardSize="h-[700px] md:w-[500px] w-full py-16" rounded="rounded-[15px]" backBgColor="bg-[#242424]">
            <div className="flex flex-col gap-10 text-white items-center">
                <h1 className="text-2xl">{title}</h1>
                <p className="w-[350px] text-[1rem]">{desc}</p>
                <Button type="linkButton">
                    {btnText}
                </Button>
            </div>

            <Image src={image} alt="Card image" width={350} height={350} className="absolute mx-auto bottom-0 left-0 right-0" />
        </LayeredCard>
    )
}