import { ProgramsSubnav } from "./_components/programs-subnav"

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramsSubnav />
      {children}
    </>
  )
}
