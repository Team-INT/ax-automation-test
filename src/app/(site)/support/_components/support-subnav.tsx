"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const subnavItems = [
  { label: "후원·파트너십", href: "/support" },
  { label: "기업 파트너십", href: "/support/corporate" },
  { label: "개인 후원", href: "/support/donate" },
  { label: "해외 파트너", href: "/support/global" },
] as const

export function SupportSubnav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-16 z-40 border-b border-border/60 bg-white/90 backdrop-blur-md"
      aria-label="후원·파트너십 서브 네비게이션"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 lg:px-8">
        {subnavItems.map(({ label, href }) => {
          const isActive =
            href === "/support" ? pathname === "/support" : pathname.startsWith(href)
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
