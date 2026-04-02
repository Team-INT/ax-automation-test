"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const subnavItems = [
  { label: "소개·개요", href: "/programs" },
  { label: "협동조합", href: "/programs/cooperatives" },
  { label: "소액금융", href: "/programs/microfinance" },
  { label: "사회적기업", href: "/programs/social-enterprise" },
  { label: "소셜비즈니스", href: "/programs/social-business" },
] as const

export function ProgramsSubnav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-16 z-40 border-b border-border/60 bg-white/90 backdrop-blur-md"
      aria-label="사업소개 서브 네비게이션"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 lg:px-8">
        {subnavItems.map(({ label, href }) => {
          const isActive =
            href === "/programs" ? pathname === "/programs" : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={[
                "relative shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-200",
                isActive ? "text-forest" : "text-muted-foreground hover:text-forest",
              ].join(" ")}
            >
              {label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gold" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
