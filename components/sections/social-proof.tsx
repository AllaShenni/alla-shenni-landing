import { ToolTicker } from "@/components/ui/tool-ticker"

const toolBadges = [
  "Mts-link", "Zoom", "Bizon365", "GetCourse", "Telegram",
  "VK", "Tilda", "Figma", "Notion", "Asana",
  "Mts-link", "Zoom", "Bizon365", "CRM-системы", "GetCourse", "Telegram",
  "VK", "Tilda", "Figma", "Notion", "Asana",
  "OBS", "YouTube", "ChatGPT", "Claude Code", "Photoshop", "и многие другие",
]

export function SocialProof() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
            Говорят обо мне
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
            Рекомендации и{" "}
            <em className="italic text-primary">доказательства</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Нетология */}
          <a href="https://drive.google.com/file/d/1jEgm2Flw-TA9RJzuMxSJ0k4Cq9DkpKMr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-card rounded-2xl p-8 border border-border flex flex-col gap-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-primary font-bold text-xl">Н</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Нетология</p>
                <p className="text-xs text-muted-foreground">ООО «Нетология» · сентябрь 2025</p>
              </div>
            </div>

            <blockquote className="font-cormorant text-xl font-light italic text-foreground leading-relaxed border-l-2 border-primary/30 pl-5">
              «Алла зарекомендовала себя с положительной стороны. Быстро
              освоилась и включилась в работу, проявляла инициативу.
              Рекомендуем как перспективного и продуктивного сотрудника.»
            </blockquote>

            <div className="text-sm text-muted-foreground mt-auto">
              <p>Тимлид отдела онлайн-трансляций</p>
              <p className="font-medium text-foreground">Яхонтова А.О.</p>
              <p className="mt-1">Период: 21 марта 2023 — 11 сентября 2025</p>
            </div>
          </a>

          {/* Питерский промпт */}
          <a href="https://drive.google.com/file/d/1h8w5WvG_YOzs8LWJQ_mI65xkVzK90tvu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-card rounded-2xl p-8 border border-border flex flex-col gap-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-primary font-bold text-xl">П</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Питерский промпт</p>
                <p className="text-xs text-muted-foreground">Конференция · декабрь 2024</p>
              </div>
            </div>

            <blockquote className="font-cormorant text-xl font-light italic text-foreground leading-relaxed border-l-2 border-primary/30 pl-5">
              «За качественную, чёткую и оперативную — а иногда
              сверхскоростную — работу во время подготовки и проведения
              мероприятия.»
            </blockquote>

            <div className="text-sm text-muted-foreground mt-auto">
              <p>Организаторы конференции:</p>
              <p className="font-medium text-foreground">
                Наталия Франкель · Дмитрий Румянцев
              </p>
            </div>
          </a>
        </div>

        {/* Tools */}
        <div className="bg-card/50 rounded-2xl p-8 border border-border">
          <p className="text-sm text-muted-foreground text-center mb-6 tracking-wide uppercase text-xs">
            Инструменты в работе
          </p>
          <ToolTicker
            tools={toolBadges}
            itemClassName="text-sm bg-background text-foreground/80 px-4 py-1.5 rounded-full border border-border hover:border-primary/40 transition-colors"
            fadeFrom="from-card"
          />
        </div>
      </div>
    </section>
  )
}
