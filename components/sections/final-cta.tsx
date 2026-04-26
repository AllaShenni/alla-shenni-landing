import { Send, Mail } from "lucide-react"
import { TELEGRAM_URL, EMAIL_HREF } from "@/lib/constants"

export function FinalCta() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative bg-card/50 border border-border rounded-3xl px-8 py-16 md:px-16 md:py-20 overflow-hidden text-center">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium">
              Готовы начать?
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Ваша онлайн-школа заслуживает{" "}
              <em
                className="italic text-primary whitespace-nowrap"
                style={{ textShadow: "8px 9px 8px rgba(0,0,0,0.32)", fontSize: "106%" }}
              >
                надёжного сотрудника
              </em>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Напишите мне и мы всё обсудим.
            </p>

            <div className="flex flex-row gap-4 justify-center items-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-primary-foreground font-medium px-8 py-4 rounded-full transition-colors text-base"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-primary-foreground font-medium px-8 py-4 rounded-full transition-colors text-base"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
