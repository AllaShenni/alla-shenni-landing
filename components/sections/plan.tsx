import { ContactForm } from "@/components/ui/contact-form"

const steps = [
  {
    number: "1",
    title: "Оставьте заявку",
    body: "Напишите в Telegram — коротко опишите задачу или проект. Отвечу в течение дня.",
  },
  {
    number: "2",
    title: "Обсудим условия",
    body: "Обсудим условия и договоримся без затяжных переговоров.",
  },
  {
    number: "3",
    title: "Приступим к работе",
    body: "Начну сразу или после короткого онбординга. Готова к дообучению.",
  },
]

export function Plan() {
  return (
    <section className="py-12 md:py-16 bg-card/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
            Как начать
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
            Три шага до{" "}
            <em className="italic text-primary">взаимовыгодного сотрудничества</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-[1px] bg-border z-0" />

          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center p-8">
              {/* Circle */}
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center mb-6 relative">
                <span className="font-cormorant text-3xl font-semibold text-primary">{s.number}</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
