"use client"

import { useState, useEffect } from "react"
import { Send, Mail, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { TELEGRAM_URL, WHATSAPP_URL, EMAIL_HREF } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#experience", label: "Опыт" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
]

const iconBtnClass =
  "flex items-center justify-center w-9 h-9 rounded-full bg-primary hover:bg-primary/85 text-primary-foreground transition-colors flex-shrink-0"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-6xl">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight group">
          <span className="font-cormorant text-xl font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
            Алла Шенни
          </span>
          <span className="text-[9px] font-sans text-muted-foreground tracking-[0.18em] uppercase">
            Куратор · Модератор · Техадмин
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className={iconBtnClass}
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href={EMAIL_HREF}
            aria-label="Написать на Email"
            className={iconBtnClass}
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className={iconBtnClass}
          >
            <WhatsAppIcon />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-cormorant text-2xl text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className={iconBtnClass}
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={EMAIL_HREF}
              aria-label="Написать на Email"
              className={iconBtnClass}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className={iconBtnClass}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
