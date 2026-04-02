import { AboutSubnav } from "./_components/about-subnav"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AboutSubnav />
      {children}
    </>
  )
}
