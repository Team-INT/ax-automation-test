import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-kr",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "굿네이버스 글로벌 임팩트",
    template: "%s | 굿네이버스 글로벌 임팩트",
  },
  description:
    "26개국에서 621개 협동조합, 13개 사회적기업을 통해 지속 가능한 변화를 만듭니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${jakarta.variable} ${notoKr.variable}`}>
      <body>{children}</body>
    </html>
  )
}
