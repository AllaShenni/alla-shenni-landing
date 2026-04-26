import { Send, ChevronDown, FileText } from "lucide-react"
import { HeroPhoto } from "@/components/sections/hero-photo"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ToolTicker } from "@/components/ui/tool-ticker"
import { TELEGRAM_URL } from "@/lib/constants"

const stats = [
  { value: "240+", label: "вебинаров проведено" },
  { value: "2,5+ года", label: "Нетология / EdMarket" },
  { value: "20+", label: "инструментов EdTech" },
  { value: "3", label: "языка: русский · английский · арабский" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Soft malachite glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-100px] bottom-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: text */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
              Удалённая работа · WORLDWIDE
            </p>

            <h1 className="font-cormorant text-5xl md:text-6xl xl:text-[4.5rem] font-light leading-[1.08] text-foreground">
              Со мной ваш продукт{" "}
              <em
                className="italic text-primary"
                style={{
                  textShadow: "8px 9px 8px rgba(0,0,0,0.32)",
                  fontSize: "106%",
                }}
              >
                работает.
              </em>
              <br />
              Без сбоев.{" "}
              <span className="relative inline-block">
                Без потерь.
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-primary/40" />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Куратор студентов, модератор вебинаров, специалист службы заботы, технический администратор.
              Работаю по чек-листу или автономно — ответственна и готова к диалогу.
            </p>

            {/* Tool ticker */}
            <ToolTicker />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 text-primary-foreground font-medium px-8 py-3.5 rounded-full transition-colors text-base"
              >
                <Send className="h-4 w-4" />
                Написать в Telegram
              </a>
              <a
                href="https://docs.google.com/document/d/1OMWVOghw5wOBmWhn9c6ZTLEToi5NJRdSpAtVF8od84c/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground hover:text-primary font-medium px-8 py-3.5 rounded-full transition-colors text-base"
              >
                <FileText className="h-4 w-4" />
                Резюме
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base"
              >
                Подробнее
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPhoto />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="space-y-1">
              <p className="font-cormorant text-4xl font-light text-foreground">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
