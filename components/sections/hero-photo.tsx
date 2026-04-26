"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export function HeroPhoto() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <div className="relative w-[min(300px,calc(100vw-3rem))] h-[min(300px,calc(100vw-3rem))] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px]">
      <audio
        ref={audioRef}
        src="/greeting.mp3"
        preload="auto"
        onEnded={() => setPlaying(false)}
      />


      {/* Photo container */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
        {/* Signature overlay */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-center"
          style={{ paddingBottom: "35%" }}
        >
          <span style={{
            fontFamily: "'Shlapak Script', cursive",
            fontSize: "50px",
            color: "hsl(230, 25%, 18%)",
            opacity: 0.95,
            lineHeight: 1,
            letterSpacing: "7px",
            transform: "rotate(-13deg) scaleX(1.05)",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}>
            Алла Шенни
          </span>
        </div>

        <Image
          src="/Elegant woman.png"
          alt="Алла Шенни"
          fill
          sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, 460px"
          style={{
            objectFit: "cover",
            objectPosition: "center 10%",
            transform: "scale(1.57)",
            transformOrigin: "center top",
          }}
          priority
        />
      </div>

      {/* Audio play button */}
      <button
        onClick={togglePlay}
        title={playing ? "Пауза" : "Слушать приветствие"}
        className="absolute -bottom-5 -right-4 z-20 group flex items-center gap-3 bg-background border border-border rounded-full pl-2 pr-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300 pointer-events-none">
          {playing ? (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="pointer-events-none">
              <rect x="0.5" y="0.5" width="3.5" height="13" rx="1" fill="white" />
              <rect x="8" y="0.5" width="3.5" height="13" rx="1" fill="white" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="ml-0.5 pointer-events-none">
              <path d="M2 1.5L12.5 8L2 14.5V1.5Z" fill="white" />
            </svg>
          )}
        </span>
        <span className="text-[11px] font-semibold text-foreground tracking-wide pointer-events-none">
          Приветствие
        </span>
      </button>
    </div>
  )
}
