"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Нужен ли онбординг?",
    a: "Нет, не обязательно. Могу начать сразу, если есть доступы и базовое описание задач. Если хотите ввести в процессы — пройду онбординг или дополнительное обучение.",
  },
  {
    q: "Вы работаете без видеосвязи?",
    a: "Да, работаю полностью удалённо, без камеры и видео. Всё общение — голос в эфире, текст, рабочие чаты, письма. Звонки, если поддерживаются. Это не мешает качеству и скорости работы.",
  },
  {
    q: "Можете совмещать несколько проектов?",
    a: "Да, работаю с несколькими проектами одновременно. При этом соблюдаю дедлайны каждого: приоритеты расставляю заранее и предупреждаю о загрузке.",
  },
  {
    q: "Какой часовой пояс?",
    a: "Основной рабочий режим — МСК. Возможны корректировки по договорённости. Живу на две страны: летом я в Москве, все остальное время — в Алжире.",
  },
  {
    q: "Как обсудить условия и цену?",
    a: "Напишите мне в Telegram — опишите задачу или проект, обсудим объём, формат и оплату.",
  },
  {
    q: "Есть ли рекомендации?",
    a: "Да: рекомендательное письмо от тимлида Нетологии и официальная благодарность от организаторов конференции «Питерский промпт».",
  },
  {
    q: "Вы работаете с детьми?",
    a: "Да, эмпатична в работе как со взрослыми, так и с детьми и их родителями. Владею знаниями андрагогики для работы со взрослыми учащимися.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
            Частые вопросы
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
            Отвечаю честно
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-muted/30 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-medium text-foreground">{faq.q}</span>
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {open === i ? (
                    <Minus className="h-3 w-3" />
                  ) : (
                    <Plus className="h-3 w-3" />
                  )}
                </span>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  open === i ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
