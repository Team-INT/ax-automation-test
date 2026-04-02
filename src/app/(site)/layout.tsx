import { SiteHeader } from "./_components/site-header"
import { SiteFooter } from "./_components/site-footer"
import { ScrollProgress } from "./_components/scroll-progress"
import { MobileStickyCta } from "./_components/mobile-sticky-cta"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
      {/* Mobile Sticky Bottom CTA — spec: M+R 2024 기준 전환율 17~23% 향상 */}
      <MobileStickyCta />
    </>
  )
}
