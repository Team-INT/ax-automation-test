"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { RiDownload2Line, RiImageLine, RiBookLine, RiUserLine, RiFileTextLine } from "react-icons/ri"
import { NewsHero } from "../_components/news-hero"

const brandAssetIcons = [RiImageLine, RiBookLine, RiImageLine, RiUserLine]

const brandAssets = [
  { title: "GNGIF 로고 패키지", formats: "SVG, PNG, PDF", description: "흰색 배경, 투명 배경, 다크 배경용 로고 전체 패키지", size: "2.4MB" },
  { title: "GNGIF 브랜드 가이드라인", formats: "PDF", description: "컬러, 타이포그래피, 로고 사용 규정 전체 가이드", size: "8.1MB" },
  { title: "사업 현장 사진 라이브러리", formats: "JPG (고해상도)", description: "26개국 현장 사진 200장 이상, 무료 언론 사용 허가", size: "1.2GB" },
  { title: "임원 프로필 사진", formats: "JPG", description: "GNGIF 이사장 및 주요 임원 공식 프로필 사진", size: "45MB" },
] as const

const pressReleases = [
  { date: "2026.03.28", title: "캄보디아 협동조합 100호 달성 기념 보도자료" },
  { date: "2026.02.14", title: "2025 연간 임팩트 리포트 발간 보도자료" },
  { date: "2026.01.08", title: "더네이버스커피 공정무역 협약 체결 보도자료" },
  { date: "2025.12.01", title: "수혜자 50만 명 달성 기념 보도자료" },
] as const

const mediaContacts = [
  { name: "홍보팀 (국내)", email: "press@gngif.org", phone: "02-XXX-XXXX", note: "국내 언론 문의" },
  { name: "International Media", email: "media@gngif.org", phone: "+82-2-XXX-XXXX", note: "해외 언론 문의 (영어)" },
] as const

export default function MediaKitPage() {
  return (
    <>
      <NewsHero
        title="미디어킷"
        description="언론사·미디어 관계자를 위한 GNGIF 브랜드 에셋, 보도자료, 미디어 문의처입니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Brand Assets</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">브랜드 에셋</motion.h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {brandAssets.map(({ title, formats, description, size }, i) => {
              const AssetIcon = brandAssetIcons[i]
              return (
                <motion.div key={title} {...fadeUp(0.1 + i * 0.08)} className="group flex items-start gap-5 rounded-2xl border border-border/50 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <AssetIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{formats} · {size}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <button className="flex-shrink-0 rounded-xl border border-border/60 p-3 text-forest transition-all duration-200 hover:bg-forest hover:border-forest hover:text-white">
                    <RiDownload2Line className="h-5 w-5" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark grain relative overflow-hidden">
        <div className="pointer-events-none absolute -top-[20%] -right-[10%] h-[55%] w-[40%] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(212,168,71,0.05), transparent)" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Press Releases</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-cream sm:text-[44px]">보도자료</motion.h2>
          <div className="mt-14 space-y-4">
            {pressReleases.map(({ date, title }, i) => (
              <motion.div key={title} {...fadeUp(0.1 + i * 0.07)} className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] cursor-pointer">
                <div>
                  <p className="text-xs text-white/40">{date}</p>
                  <h3 className="mt-1 text-[16px] font-bold text-cream transition-colors duration-200 group-hover:text-gold">{title}</h3>
                </div>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white/40 transition-all duration-200 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
                  <RiDownload2Line className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Media Contact</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">미디어 문의</motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {mediaContacts.map(({ name, email, phone, note }, i) => (
              <motion.div key={name} {...fadeUp(0.1 + i * 0.1)} className="group rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/5 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <RiUserLine className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">{note}</span>
                </div>
                <h3 className="mt-4 text-[18px] font-bold text-forest">{name}</h3>
                <a href={`mailto:${email}`} className="mt-2 block text-sm text-emerald hover:underline">{email}</a>
                <p className="mt-1 text-sm text-muted-foreground">{phone}</p>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
