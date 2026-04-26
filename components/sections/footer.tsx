import { Send, Mail } from "lucide-react"
import { TELEGRAM_URL, WHATSAPP_URL, EMAIL_HREF } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#experience", label: "Опыт" },
  { href: "#faq", label: "FAQ" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-cormorant text-2xl font-semibold text-foreground">
              Алла Шенни
            </p>
            <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
              Куратор · Модератор · Техадмин
            </p>
            <p className="text-sm text-muted-foreground">
              Удалённо · Worldwide
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Навигация
            </p>
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Контакты
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Send className="h-3.5 w-3.5" />
                Telegram
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 AbidaDesign@ClaudeCode. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Русский С1 · English B1 · العربية B2
          </p>
        </div>
      </div>
    </footer>
  )
}
