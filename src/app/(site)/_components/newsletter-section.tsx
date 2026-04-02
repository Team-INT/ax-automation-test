"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"

import type { FormEvent } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      // TODO: Stibee 연동
      setSubmitted(true)
      setEmail("")
    },
    [],
  )

  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-forest px-8 py-14 text-center sm:px-14 sm:py-16"
        >
          {/* Background decorative circles */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #D4A847, transparent)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, #FEFCF3, transparent)" }}
            aria-hidden="true"
          />

          {/* Gold accent line */}
          <div className="relative z-10 mx-auto mb-7 h-[2px] w-12 bg-gold" />

          <h2 className="relative z-10 text-2xl font-bold text-cream md:text-3xl">
            뉴스레터 구독
          </h2>
          <p className="relative z-10 mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/60">
            매월 현장 이야기와 임팩트 데이터를 전해드립니다
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 mx-auto mt-8 inline-flex items-center gap-2.5 rounded-full bg-white/[0.1] px-6 py-3 text-sm font-medium text-cream"
            >
              <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              구독 신청이 완료되었습니다!
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative z-10 mx-auto mt-8 flex w-full max-w-md gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                required
                className="flex-1 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-forest transition-all hover:brightness-110 active:scale-95"
              >
                구독
              </button>
            </form>
          )}

          <p className="relative z-10 mt-5 text-[11px] text-cream/30">
            언제든지 수신을 거부할 수 있습니다
          </p>
        </motion.div>
      </div>
    </section>
  )
}
