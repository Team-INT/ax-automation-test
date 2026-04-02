"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const subnavItems = [
  { label: "소개·연혁", href: "/about" },
  { label: "미션·비전", href: "/about/mission" },
  { label: "조직·거버넌스", href: "/about/organization" },
  { label: "투명경영", href: "/about/transparency" },
] as const

export function AboutSubnav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-16 z-40 border-b border-border/60 bg-white/90 backdrop-blur-md"
      aria-label="재단소개 서브 네비게이션"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 lg:px-8">
        {subnavItems.map(({ label, href }) => {
          const isActive =
            href === "/about" ? pathname === "/about" : pathname.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={[
                "relative shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-forest"
                  : "text-muted-foreground hover:text-forest",
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
