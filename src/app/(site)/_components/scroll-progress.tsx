"use client"

import { motion } from "framer-motion"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-emerald"
    />
  )
}
