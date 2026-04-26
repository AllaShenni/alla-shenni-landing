"use client"

import { useState, useEffect } from "react"

// Covers header, all sections, footer — h-tags, paragraphs, list items, FAQ questions
const TEXT_SEL = "h1, h2, h3, h4, p, li, #faq button > span:first-child"

const BLOCK_NAMES: Record<string, string> = {
  HEADER: "Шапка",
  FOOTER: "Подвал",
  about: "О мне / Проблема",
  services: "Услуги",
  experience: "Опыт",
  faq: "FAQ — Отвечаю честно",
  contact: "Контакты",
}

function blockLabel(el: Element): string {
  if (el.tagName === "HEADER") return "Шапка"
  if (el.tagName === "FOOTER") return "Подвал"
  const id = (el as HTMLElement).id
  return BLOCK_NAMES[id] ?? (id ? `Секция #${id}` : `Блок (${el.tagName.toLowerCase()})`)
}

export function DevEditMode() {
  const [editMode, setEditMode] = useState(false)
  const [reorderMode, setReorderMode] = useState(false)
  const [editedCount, setEditedCount] = useState(0)
  const [copied, setCopied] = useState<"text" | "order" | null>(null)

  // ── TEXT EDIT MODE ──────────────────────────────────────
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(TEXT_SEL)).filter(
      el => !el.closest("[data-dev]")
    )

    if (editMode) {
      // Prevent FAQ accordion from toggling when clicking a question span
      const faqButtons = document.querySelectorAll<HTMLElement>("#faq button")
      faqButtons.forEach(btn => { btn.dataset.origPE = btn.style.pointerEvents; btn.style.pointerEvents = "none" })

      els.forEach(el => {
        el.contentEditable = "true"
        if (!el.dataset.orig) el.dataset.orig = el.textContent ?? ""
        el.style.outline = "1.5px dashed rgba(80,160,110,0.6)"
        el.style.borderRadius = "3px"
        el.style.cursor = "text"
        el.style.minWidth = "4px"
      })

      const track = () => setEditedCount(
        els.filter(el => el.textContent !== el.dataset.orig).length
      )
      document.addEventListener("input", track)
      document.addEventListener("keyup", track)
      return () => {
        document.removeEventListener("input", track)
        document.removeEventListener("keyup", track)
        faqButtons.forEach(btn => { btn.style.pointerEvents = btn.dataset.origPE ?? "" })
      }
    } else {
      els.forEach(el => {
        el.contentEditable = "false"
        el.style.outline = ""
        el.style.borderRadius = ""
        el.style.cursor = ""
      })
      setEditedCount(0)
    }
  }, [editMode])

  // ── REORDER MODE ────────────────────────────────────────
  useEffect(() => {
    const mainEl = document.querySelector("main")
    if (!mainEl) return

    const applyLabels = () => {
      Array.from(mainEl.children).forEach((block, i) => {
        const h = block as HTMLElement
        const existing = h.querySelector<HTMLElement>("[data-dev='reorder-panel']")
        if (!existing) return
        const nameSpan = existing.querySelector<HTMLElement>("[data-dev='block-name']")
        if (nameSpan) nameSpan.textContent = `${i + 1}. ${blockLabel(h)}`
      })
    }

    if (reorderMode) {
      Array.from(mainEl.children).forEach((block, i) => {
        const h = block as HTMLElement
        h.style.outline = "2px solid rgba(80,160,110,0.2)"
        h.style.position = "relative"

        const panel = document.createElement("div")
        panel.setAttribute("data-dev", "reorder-panel")
        panel.style.cssText = [
          "position:absolute", "top:10px", "right:10px", "z-index:9990",
          "display:flex", "align-items:center", "gap:6px",
          "background:rgba(255,255,255,0.96)", "border:1px solid rgba(80,160,110,0.45)",
          "border-radius:20px", "padding:3px 10px 3px 6px",
          "font-family:sans-serif", "font-size:11px", "font-weight:600",
          "color:#3a7a58", "box-shadow:0 2px 8px rgba(0,0,0,0.08)",
          "user-select:none", "pointer-events:all",
        ].join(";")

        const btnUp = document.createElement("button")
        btnUp.textContent = "▲"
        btnUp.title = "Переместить выше"
        btnUp.style.cssText = "background:none;border:none;cursor:pointer;font-size:13px;color:#3a7a58;padding:0 2px;line-height:1;"
        btnUp.onclick = (e) => {
          e.stopPropagation()
          const prev = h.previousElementSibling
          if (prev) mainEl.insertBefore(h, prev)
          applyLabels()
        }

        const btnDown = document.createElement("button")
        btnDown.textContent = "▼"
        btnDown.title = "Переместить ниже"
        btnDown.style.cssText = "background:none;border:none;cursor:pointer;font-size:13px;color:#3a7a58;padding:0 2px;line-height:1;"
        btnDown.onclick = (e) => {
          e.stopPropagation()
          const next = h.nextElementSibling
          if (next) mainEl.insertBefore(next, h)
          applyLabels()
        }

        const nameSpan = document.createElement("span")
        nameSpan.setAttribute("data-dev", "block-name")
        nameSpan.textContent = `${i + 1}. ${blockLabel(h)}`

        panel.appendChild(btnUp)
        panel.appendChild(nameSpan)
        panel.appendChild(btnDown)
        h.appendChild(panel)
      })
    } else {
      Array.from(mainEl.children).forEach(block => {
        const h = block as HTMLElement
        h.style.outline = ""
        h.querySelectorAll("[data-dev='reorder-panel']").forEach(p => p.remove())
      })
    }

    return () => {
      if (reorderMode) {
        Array.from(mainEl.children).forEach(block => {
          const h = block as HTMLElement
          h.style.outline = ""
          h.querySelectorAll("[data-dev='reorder-panel']").forEach(p => p.remove())
        })
      }
    }
  }, [reorderMode])

  // ── COPY HELPERS ────────────────────────────────────────
  const copyTextEdits = async () => {
    const lines = Array.from(document.querySelectorAll<HTMLElement>(TEXT_SEL))
      .filter(el => !el.closest("[data-dev]") && el.dataset.orig !== undefined && el.textContent !== el.dataset.orig)
      .map(el => `[${el.tagName}]\nБыло:  ${el.dataset.orig}\nСтало: ${el.textContent}`)

    if (!lines.length) { alert("Изменений нет — отредактируйте текст и попробуйте снова."); return }
    await navigator.clipboard.writeText(lines.join("\n\n"))
    setCopied("text"); setTimeout(() => setCopied(null), 2500)
  }

  const copyOrder = async () => {
    const mainEl = document.querySelector("main")
    if (!mainEl) return
    const order = Array.from(mainEl.children)
      .map((el, i) => `${i + 1}. ${blockLabel(el)}`)
      .join("\n")
    await navigator.clipboard.writeText("Новый порядок блоков:\n" + order)
    setCopied("order"); setTimeout(() => setCopied(null), 2500)
  }

  return (
    <div data-dev="root" className="fixed bottom-5 left-5 z-[9999] flex flex-col gap-2 select-none">
      {/* Toggle buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => setEditMode(v => !v)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg border transition-all ${
            editMode
              ? "bg-green-600 text-white border-green-700"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
          }`}
        >
          {editMode ? "✓" : "✏️"} {editMode ? "Режим правки" : "Редактировать текст"}
          {editMode && editedCount > 0 && (
            <span className="bg-white/30 text-white rounded-full px-1.5 text-[10px]">{editedCount}</span>
          )}
        </button>

        <button
          onClick={() => setReorderMode(v => !v)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg border transition-all ${
            reorderMode
              ? "bg-blue-600 text-white border-blue-700"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
          }`}
        >
          {reorderMode ? "✓" : "⠿"} {reorderMode ? "Перестановка" : "Переставить блоки"}
        </button>
      </div>

      {/* Action buttons — visible whenever a mode is active */}
      {(editMode || reorderMode) && (
        <div className="flex gap-2 flex-wrap">
          {editMode && (
            <button
              onClick={copyTextEdits}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg bg-green-600 text-white border border-green-700 hover:bg-green-700 transition-all"
            >
              {copied === "text" ? "✓ Скопировано!" : `📋 Скопировать правки${editedCount > 0 ? ` (${editedCount})` : ""}`}
            </button>
          )}
          {reorderMode && (
            <button
              onClick={copyOrder}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg bg-blue-600 text-white border border-blue-700 hover:bg-blue-700 transition-all"
            >
              {copied === "order" ? "✓ Скопировано!" : "📋 Скопировать порядок"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
