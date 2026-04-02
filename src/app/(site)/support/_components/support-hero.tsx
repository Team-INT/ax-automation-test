"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface SupportHeroProps {
  label?: string
  title: string
  description: string
}

export function SupportHero({ label = "후원·파트너십", title, description }: SupportHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest pt-36 pb-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1521731978332-9e9e714af64c?auto=format&fit=crop&w=1600&q=75"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to bottom, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.75) 60%, rgba(27,67,50,0.92) 100%)",
              "radial-gradient(ellipse 70% 60% at 95% 5%, rgba(212,168,71,0.12), transparent)",
            ].join(", "),
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[11px] font-semibold tracking-[0.3em] text-gold/70 uppercase"
        >
          {label}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-5 h-[2px] w-12 origin-left bg-gold"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-[42px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[56px] md:text-[64px]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/50"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
