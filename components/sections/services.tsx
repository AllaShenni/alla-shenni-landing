import { Send } from "lucide-react"
import { TELEGRAM_URL } from "@/lib/constants"

const services = [
  {
    number: "01",
    title: "Куратор студентов",
    subtitle: "Менеджер отдела заботы",
    description: "Веду студентов от первого урока до финального результата. Они чувствуют поддержку — и доходят до конца. Мотивация и работа с возражениями.",
    items: [
      "Сопровождение от старта до диплома",
      "Документирование и учёт успеваемости",
      "Позитивная атмосфера в чатах",
      "Консультации, работа с возражениями",
      "Допродажи и удержание студентов",
      "Работа с детьми и взрослыми",
    ],
  },
  {
    number: "02",
    title: "Модератор вебинаров",
    subtitle: "240+ мероприятий",
    description: "Слежу за технической стороной, отвечаю на вопросы, держу атмосферу — спикер выступает, не отвлекаясь на операционку.",
    items: [
      "Zoom, Mts-link, Bizon365 и другие",
      "Проверка связи до начала эфира",
      "Ответы на технические вопросы",
      "Фиксация тайм-кодов и отчёт",
      "Скачивание чата, завершение эфира",
      "OBS, YouTube и другие",
    ],
  },
  {
    number: "03",
    title: "Технический администратор",
    subtitle: "Настройка и автоматизация",
    description: "Настраиваю процессы, наполняю курс материалами, а вы думаете о контенте и генерируете идеи.",
    items: [
      "Доступы, рассылки, интеграции",
      "Настройка вебинаров и автовебинаров",
      "Подготовка спикеров к трансляции",
      "Создание чат-ботов в Telegram с ИИ",
      "GetCourse, VK, WhatsApp и другие",
      "CorelDraw, Photoshop, Figma и т.д.",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
              Что беру на себя
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight text-foreground">
              Три направления —
              <br />
              <em className="italic">один <span className="text-primary">крепкий</span> специалист</em>
            </h2>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-primary-foreground font-medium px-6 py-3 rounded-full transition-colors text-sm flex-shrink-0"
          >
            <Send className="h-3.5 w-3.5" />
            Обсудить задачи
          </a>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-cormorant text-5xl font-light text-primary/20 group-hover:text-primary/35 transition-colors leading-none">
                  {s.number}
                </span>
              </div>

              <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-primary tracking-wide uppercase mb-4">{s.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {s.description}
              </p>

              <ul className="space-y-2.5 mt-auto">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
