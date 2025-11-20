"use client"

import { useRef, useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import { FiChevronDown } from "react-icons/fi"
import { BridgeButton } from "../ui/bridge-btn"

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const handlePlay = () => {
    setShowVideoModal(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleCloseModal = () => {
    setShowVideoModal(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

    const logos = [
    // "/logos/backer-a16z.webp",
    "/logos/backer-dragonfly.webp",
    "/logos/backer-elad.webp",
    "/logos/backer-electric.webp",
    "/logos/backer-linda.webp",
    "/logos/backer-sequoia.webp",
    ]

    // Duplicate logos for seamless infinite scroll - we'll use 2 sets
    const infiniteSlide = [...logos, ...logos]

  return (
    <section className="max-section flex flex-col">
      <div className="flex justify-between w-full mt-44 items-center gap-10">
        <div className="flex flex-col max-w-[600px] gap-10">
          <h1 className="text-7xl">Safe Optional Privacy for Any Asset</h1>
          <p className="text-2xl">
            Zero-Knowledge Layer-1 blockchain giving optional privacy to assets on transparent chains
          </p>
          <div className="flex gap-3 items-start">
            <Button type="button" icon="arrow">
              Get Started
            </Button>
            
            {/* Expandable Bridge Button */}
            <BridgeButton />
          </div>
        </div>

        <div className="relative w-full max-w-[700px] flex items-stretch self-stretch">
          {/* Video Preview/Thumbnail */}
          <div className="relative w-full bg-[#FFB9E5] rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
            {!showVideoModal && (
              <>
                {/* Preview image with "Blockchains are" text */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#FFB9E5]">
                  <h2 className="text-5xl font-bold text-black">Blockchains are</h2>
                </div>
                
                {/* Play Button Overlay */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all group z-10"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all shadow-lg">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div 
            className="fixed inset-0 z-999999999 bg-black/80 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div 
              className="relative max-w-5xl w-full bg-[#FFB9E5] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="uppercase text-[1.2rem]">Founded by veterans and top investors</h1>

        <div className="w-screen overflow-hidden relative">
          <div className="flex items-center gap-24 scroll-logos">
            {infiniteSlide.map((logo, i) => (
              <div key={i} className="shrink-0">
                <Image
                  src={logo}
                  alt={`Brand logo ${i}`}
                  width={250}
                  height={0}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
