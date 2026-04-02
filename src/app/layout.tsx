import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
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
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}
