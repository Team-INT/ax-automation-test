import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AX Automation Test",
  description: "Next.js 16 + Drizzle ORM + Better Auth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
