import Image from "next/image";

interface NewsCardProps {
    date: string
    headline: string
    image: string
}

export const NewsCard = ({ date, headline, image }: NewsCardProps) => {
  return (
    <div className="group flex flex-col cursor-pointer justify-between gap-8">
      
      <div className="flex flex-col gap-5">
        <span className="text-[1rem] group-hover:underline">
          {date}
        </span>

        <p className="text-2xl group-hover:underline max-w-[500px]">
          {headline}
        </p>
      </div>

      <Image
        src={image}
        alt="Card image"
        width={500}
        height={400}
        className="rounded-lg"
      />

    </div>
  );
};