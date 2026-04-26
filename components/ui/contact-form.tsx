"use client"

import { useState } from "react"
import { Send } from "lucide-react"

type Status = "idle" | "sending" | "success" | "error"

const FORMSPREE_ID = "xvzdnpyl"

export function ContactForm() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, contact, message }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-cormorant text-2xl font-light text-foreground">Спасибо, заявка отправлена</p>
        <p className="text-sm text-muted-foreground">Отвечу в течение дня</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
      <input
        type="text"
        required
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
      />
      <input
        type="text"
        required
        placeholder="Как с вами связаться (телефон, email или мессенджер)"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
      />
      <textarea
        required
        rows={3}
        placeholder="Коротко о задаче или проекте"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
      />
      {status === "error" && (
        <p className="text-xs text-red-400 text-center">Что-то пошло не так — попробуйте ещё раз</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 disabled:opacity-60 text-primary-foreground font-medium px-8 py-3.5 rounded-full transition-colors text-base"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Отправляю..." : "Отправить заявку"}
      </button>
    </form>
  )
}
