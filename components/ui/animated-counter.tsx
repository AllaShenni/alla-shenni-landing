"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, duration = 2200, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState(() => getInitial(value))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasAnimated(true)

        const { num, suffix, isDecimal } = parse(value)
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = num * eased

          setDisplayed(format(current, isDecimal) + suffix)

          if (progress < 1) requestAnimationFrame(tick)
          else setDisplayed(format(num, isDecimal) + suffix)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  )
}

function parse(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/)
  if (!match) return { num: 0, suffix: value, isDecimal: false }
  const raw = match[1]
  const isDecimal = raw.includes(",") || raw.includes(".")
  const num = parseFloat(raw.replace(",", "."))
  return { num, suffix: match[2], isDecimal }
}

function format(n: number, isDecimal: boolean): string {
  if (isDecimal) return n.toFixed(1).replace(".", ",")
  return Math.round(n).toString()
}

function getInitial(value: string): string {
  const { suffix, isDecimal } = parse(value)
  return (isDecimal ? "0,0" : "0") + suffix
}
