"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion"

const navItems = [
  { label: "재단소개", href: "/about" },
  { label: "사업소개", href: "/programs" },
  { label: "임팩트", href: "/impact" },
  { label: "소식", href: "/news" },
  { label: "후원·파트너십", href: "/support" },
  { label: "채용", href: "/careers" },
] as const

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40)
  })

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={[
        "fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/40"
          : "bg-gradient-to-b from-forest/75 via-forest/20 to-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-0">
          <span
            className={[
              "text-lg font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-forest" : "text-white",
            ].join(" ")}
          >
            GNGIF
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "px-3 py-2 text-[14px] font-medium transition-colors duration-200",
                scrolled
                  ? "text-foreground/55 hover:text-forest"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div
            className={[
              "hidden text-xs font-medium lg:flex items-center gap-1 transition-colors duration-300",
              scrolled ? "text-foreground/40" : "text-white/50",
            ].join(" ")}
          >
            <button className="hover:text-forest transition-colors cursor-pointer">
              KO
            </button>
            <span aria-hidden="true">|</span>
            <button className="hover:text-forest transition-colors cursor-pointer">
              EN
            </button>
          </div>
          <Link
            href="/support"
            className={[
              "hidden rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 lg:block",
              scrolled
                ? "bg-forest text-white hover:bg-emerald"
                : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25",
            ].join(" ")}
          >
            함께하기
          </Link>

          {/* Mobile toggle */}
          <button
            className={[
              "relative z-10 flex h-9 w-9 items-center justify-center rounded-md lg:hidden transition-colors cursor-pointer",
              scrolled ? "hover:bg-muted" : "hover:bg-white/10",
            ].join(" ")}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
          >
            <svg
              className={[
                "h-5 w-5 transition-colors duration-300",
                scrolled || mobileOpen ? "text-foreground" : "text-white",
              ].join(" ")}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav — slide down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/30 bg-white lg:hidden"
          >
            <div className="px-4 py-5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2.5 text-[15px] font-medium text-foreground/65 hover:text-forest transition-colors"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex items-center justify-between border-t border-border/30 pt-4">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/40">
                  <button className="hover:text-forest transition-colors cursor-pointer">
                    KO
                  </button>
                  <span aria-hidden="true">|</span>
                  <button className="hover:text-forest transition-colors cursor-pointer">
                    EN
                  </button>
                </div>
                <Link
                  href="/support"
                  className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white"
                  onClick={closeMobile}
                >
                  함께하기
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
