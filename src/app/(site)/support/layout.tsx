import { SupportSubnav } from "./_components/support-subnav"

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SupportSubnav />
      {children}
    </>
  )
}
