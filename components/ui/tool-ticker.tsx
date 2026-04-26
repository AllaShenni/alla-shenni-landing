"use client"

const DEFAULT_TOOLS = [
  "Mts-link", "Zoom", "Bizon365", "GetCourse", "Telegram",
  "VK", "Tilda", "Figma", "Notion", "Asana",
  "OBS", "YouTube", "ChatGPT", "Photoshop", "Discord", "и другие",
]

interface ToolTickerProps {
  tools?: string[]
  itemClassName?: string
  fadeFrom?: string
}

export function ToolTicker({
  tools = DEFAULT_TOOLS,
  itemClassName = "text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full border border-border",
  fadeFrom = "from-background",
}: ToolTickerProps) {
  const doubled = [...tools, ...tools]

  return (
    <div className="relative overflow-hidden py-1">
      <div className={`absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r ${fadeFrom} to-transparent z-10 pointer-events-none`} />
      <div className={`absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l ${fadeFrom} to-transparent z-10 pointer-events-none`} />

      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={`whitespace-nowrap mx-1.5 flex-shrink-0 ${itemClassName}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
