import { NewsSubnav } from "./_components/news-subnav"

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NewsSubnav />
      {children}
    </>
  )
}
