import { TELEGRAM_URL } from "@/lib/constants"

const qualities = [
  { label: "Соблюдаю сроки", desc: "Работаю по чек-листу или автономно и предупреждаю заранее о возникших проблемах" },
  { label: "Быстро включаюсь", desc: "Онбординг или сразу — как удобно вам и как договоримся" },
  { label: "Знаю стек", desc: "Mts-link, Zoom, Telegram, GetCourse, Bizon365 и 20+ сервисов" },
  { label: "Держу слово", desc: "Без исчезновений, без «забыла», без переноса дедлайнов" },
]

export function Solution() {
  return (
    <section className="py-12 md:py-16 bg-card/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
                Почему я
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight text-foreground">
                Тот самый{" "}
                <em className="italic text-primary">надёжный партнёр,</em>
                <br />
                которого вы ищете
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              2,5 года в команде Нетологии — одной из крупнейших EdTech-платформ России.
              Я понимаю, как устроены онлайн-школы изнутри: что может сломаться,
              и как это починить до того, как заметят студенты.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Умею работать и с людьми, и с техникой. Не нужно нанимать двоих —
              куратора отдельно и техадмина отдельно. Я закрываю и то, и другое.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              Обсудить сотрудничество
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right: qualities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="font-cormorant text-xl font-semibold text-foreground mb-1">
                  {q.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            ))}

            {/* Нетология badge */}
            <a href="#experience" className="sm:col-span-2 bg-primary/8 rounded-2xl px-4 py-2 border border-primary/15 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-primary font-semibold text-sm">Н</span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Рекомендация Нетологии</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Тимлид отдела онлайн-трансляций · сентябрь 2025
                </p>
              </div>
            </a>

            {/* Питерский промпт badge */}
            <a href="#experience" className="sm:col-span-2 bg-primary/8 rounded-2xl px-4 py-2 border border-primary/15 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-primary font-semibold text-sm">П</span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Благодарность · Питерский промпт</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Н. Франкель и Д. Румянцев · декабрь 2024
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
