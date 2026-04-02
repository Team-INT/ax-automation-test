"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, listContainer, listItem } from "@/lib/animations"
import { RiArrowRightLine } from "react-icons/ri"
import { NewsHero } from "./_components/news-hero"

const categories = ["전체", "사업 소식", "현장 리포트", "파트너십", "미디어"] as const
type Category = typeof categories[number]

const newsItems = [
  {
    id: "n1",
    date: "2026.03.28",
    category: "사업 소식" as Category,
    title: "캄보디아 협동조합 100호 달성 — 동남아 최대 사회적경제 네트워크",
    summary: "GNGIF가 지원한 캄보디아 내 농업·수산 협동조합이 100개를 돌파했습니다. 2007년 시범 사업 시작 이후 19년 만의 성과입니다.",
    readTime: "3분",
  },
  {
    id: "n2",
    date: "2026.03.15",
    category: "현장 리포트" as Category,
    title: "에티오피아 커피 농가, 협동조합 통해 수출 직거래 첫 성공",
    summary: "오로미아 주 협동조합 연합이 유럽 스페셜티 커피 바이어와 직접 수출 계약을 체결했습니다. 중간 마진 제거로 농가 수익 42% 증가.",
    readTime: "5분",
  },
  {
    id: "n3",
    date: "2026.02.28",
    category: "파트너십" as Category,
    title: "더네이버스커피, 국내 주요 카페 체인 3사와 공정무역 공급 협약 체결",
    summary: "더네이버스커피가 국내 카페 체인 브랜드 3곳과 공정무역 원두 공급 계약을 체결했습니다. 연간 공급량 50톤 규모입니다.",
    readTime: "2분",
  },
  {
    id: "n4",
    date: "2026.02.14",
    category: "사업 소식" as Category,
    title: "2025 연간 임팩트 리포트 발간 — 수혜자 50만 명 달성",
    summary: "GNGIF의 2025년 연간 임팩트 리포트가 발간됐습니다. 누적 수혜자 50만 명, 협동조합 621개 등 역대 최대 성과를 기록했습니다.",
    readTime: "4분",
  },
  {
    id: "n5",
    date: "2026.01.30",
    category: "미디어" as Category,
    title: "KBS 다큐 '지구촌 리포트' — GNGIF 볼리비아 현장 방영",
    summary: "KBS 1TV 다큐멘터리 프로그램이 볼리비아 메리쿱 여성 장인 협동조합을 취재해 방영했습니다.",
    readTime: "1분",
  },
  {
    id: "n6",
    date: "2026.01.15",
    category: "현장 리포트" as Category,
    title: "르완다 GNG 에코빌드, 여성 건축팀 10개 운영 — 청년 고용 모델로 주목",
    summary: "르완다 사회적기업 GNG 에코빌드가 운영하는 여성 청년 건축팀이 10개로 늘어나며 지역 내 주택 인프라 개선을 이끌고 있습니다.",
    readTime: "4분",
  },
] as const

const categoryColors: Record<Category, string> = {
  "전체": "bg-forest/10 text-forest",
  "사업 소식": "bg-emerald/10 text-emerald",
  "현장 리포트": "bg-gold/10 text-gold",
  "파트너십": "bg-blue-50 text-blue-600",
  "미디어": "bg-purple-50 text-purple-600",
}

// Stagger container variant

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체")

  const filtered = activeCategory === "전체"
    ? newsItems
    : newsItems.filter((n) => n.category === activeCategory)

  return (
    <>
      <NewsHero
        title="뉴스룸"
        description="GNGIF의 최신 소식, 현장 리포트, 파트너십 소식을 전합니다."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <motion.p {...fadeUp(0)} className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Latest News</motion.p>
          <motion.div {...fadeUp(0.06)} className="mt-5 h-[2px] w-12 bg-gold" />
          <motion.h2 {...fadeUp(0.1)} className="mt-6 text-[36px] font-extrabold leading-tight tracking-tight text-forest sm:text-[44px]">최신 소식</motion.h2>

          {/* Category filters */}
          <motion.div {...fadeUp(0.16)} className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${activeCategory === cat ? "bg-forest text-cream shadow-sm" : "border border-border/50 bg-white text-muted-foreground hover:border-forest/30 hover:text-forest"}`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* News list with AnimatePresence */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            animate="show"
            className="mt-10 space-y-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(({ id, date, category, title, summary, readTime }) => (
                <motion.article
                  key={id}
                  variants={listItem}
                  layout
                  className="group cursor-pointer rounded-2xl border border-border/50 bg-white p-7 transition-shadow duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lg hover:shadow-forest/5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColors[category]}`}>{category}</span>
                        <span className="text-xs text-muted-foreground">{date}</span>
                        <span className="text-xs text-muted-foreground">읽기 {readTime}</span>
                      </div>
                      <h3 className="mt-3 text-[18px] font-bold leading-snug text-forest transition-colors duration-200 group-hover:text-emerald">{title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{summary}</p>
                    </div>
                    <RiArrowRightLine className="mt-1 h-5 w-5 flex-shrink-0 text-emerald transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
