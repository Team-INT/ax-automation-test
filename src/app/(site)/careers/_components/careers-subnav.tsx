"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const subnavItems = [
  { label: "채용 공고", href: "/careers" },
  { label: "조직 문화", href: "/careers/culture" },
] as const

export function CareersSubnav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-16 z-40 border-b border-border/60 bg-white/90 backdrop-blur-md"
      aria-label="채용 서브 네비게이션"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 lg:px-8">
        {subnavItems.map(({ label, href }) => {
          const isActive =
            href === "/careers" ? pathname === "/careers" : pathname.startsWith(href)

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
