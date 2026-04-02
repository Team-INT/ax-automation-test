import { ImpactSubnav } from "./_components/impact-subnav"

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ImpactSubnav />
      {children}
    </>
  )
}
