import { CareersSubnav } from "./_components/careers-subnav"

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CareersSubnav />
      {children}
    </>
  )
}
