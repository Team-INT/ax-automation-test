"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RiBuilding2Line, RiHeartLine } from "react-icons/ri"

/**
 * Mobile Sticky Bottom CTA
 * Spec: M+R 2024 기준 전환율 17~23% 향상
 * 모바일 전용 (lg:hidden) — 파트너십 문의 / 후원하기
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false)

  // 200px 이상 스크롤 시 표시
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          role="navigation"
          aria-label="빠른 실행"
        >
          {/* Backdrop blur + top border */}
          <div className="border-t border-white/10 bg-forest/95 backdrop-blur-md">
            <div className="flex h-16 items-center gap-3 px-4 pb-[env(safe-area-inset-bottom)]">
              <Link
                href="/support/corporate"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-3 text-[13px] font-semibold text-white transition-colors active:bg-white/20"
              >
                <RiBuilding2Line className="h-4 w-4 shrink-0" />
                파트너십 문의
              </Link>
              <Link
                href="/support/donate"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold py-3 text-[13px] font-bold text-gold-foreground transition-all active:brightness-110"
              >
                <RiHeartLine className="h-4 w-4 shrink-0" />
                후원하기
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
