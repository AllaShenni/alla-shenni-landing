import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Алла Шенни — Куратор и технический администратор онлайн-школ",
  description:
    "Куратор студентов, модератор вебинаров, технический администратор онлайн-школ. 2,5+ года в Нетологии, 240+ вебинаров. Со мной ваш продукт работает без сбоев и без потерь.",
  keywords: [
    "куратор онлайн-школы",
    "технический администратор",
    "модератор вебинаров",
    "удалённая работа",
    "EdTech",
    "GetCourse",
    "Нетология",
  ],
  openGraph: {
    title: "Алла Шенни — Куратор и технический администратор",
    description:
      "Со мной ваш продукт работает. Без сбоев. Без потерь. 2,5+ года Нетология · 240+ вебинаров · 20+ инструментов",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Алла Шенни — Куратор и технический администратор",
    description: "Со мной ваш продукт работает. Без сбоев. Без потерь.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="font-sans">
      <body>
        {children}
      </body>
    </html>
  )
}
