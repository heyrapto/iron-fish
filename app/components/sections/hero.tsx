"use client"

import { useRef, useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

    const logos = [
    "/logos/backer-a16z.webp",
    "/logos/backer-dragonfly.webp",
    "/logos/backer-elad.webp",
    "/logos/backer-electric.webp",
    "/logos/backer-linda.webp",
    "/logos/backer-sequoia.webp",
    ]

    const infiniteSlide = [...logos, ...logos, ...logos]

  return (
    <section className="max-section flex flex-col">
      <div className="flex justify-between w-full mt-44 items-center gap-10">
        <div className="flex flex-col max-w-[600px] gap-10">
          <h1 className="text-7xl">Safe Optional Privacy for Any Asset</h1>
          <p className="text-2xl">
            Zero-Knowledge Layer-1 blockchain giving optional privacy to assets on transparent chains
          </p>
          <div className="flex gap-3 items-center">
            <Button type="button" icon="arrow">
              Get Started
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-[700px]">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg"
            muted
            loop
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg text-white text-4xl hover:bg-black/50 transition"
            >
              ▶
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="uppercase text-[1.2rem]">Founded by veterans and top investors</h1>

        <div className="flex w-screen gap-24 scroll-logos overflow-x-auto overflow-hidden">
            {infiniteSlide.map((logo, i) => (
                <Image
                src={logo}
                key={i}
                alt={`Brand logo ${i}`}
                width={250}
                height={0}
                />
            ))}
        </div>
      </div>
    </section>
  )
}
