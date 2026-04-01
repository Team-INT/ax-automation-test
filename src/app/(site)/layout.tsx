import { SiteHeader } from "./_components/site-header"
import { SiteFooter } from "./_components/site-footer"
import { ScrollProgress } from "./_components/scroll-progress"

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
    </>
  )
}
