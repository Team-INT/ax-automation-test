"use client"

import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"
import "swiper/css"
import "swiper/css/pagination"

/* -------------------------------------------------------
   Data
   ------------------------------------------------------- */
const cycleWords = ["협동조합", "소액금융", "사회적기업", "소셜비즈니스"] as const

const programs = [
  {
    title: "협동조합",
    count: "621",
    unit: "개",
    description:
      "지역 주민이 직접 소유하고 운영하는 협동조합을 육성하여 경제적 자립 기반을 구축합니다. 농업, 수산업, 수공예 등 지역 산업과 연계합니다.",
    href: "/programs/cooperative",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    imageAlt: "협동조합 농업 현장 — 지역 주민들이 함께 수확하는 모습",
    accentClass: "bg-emerald",
    tags: ["농업", "수산업", "수공예", "유통"],
  },
  {
    title: "소액금융",
    count: "5",
    unit: "곳",
    description:
      "소규모 대출과 저축, 보험 등 포괄적 금융 서비스로 금융 소외 계층의 경제 활동 참여와 자산 형성을 돕습니다.",
    href: "/programs/microfinance",
    image: "https://images.unsplash.com/photo-1604156425963-9be03f86a428?auto=format&fit=crop&w=800&q=80",
    imageAlt: "소액금융 서비스를 통해 사업을 운영하는 현지 여성 상인",
    accentClass: "bg-gold",
    tags: ["소액대출", "저축", "보험", "금융교육"],
  },
  {
    title: "사회적기업",
    count: "13",
    unit: "개",
    description:
      "사회적 가치와 경제적 지속가능성을 동시에 추구하는 기업을 설립하고 성장을 지원합니다. 현지 고용 창출의 핵심입니다.",
    href: "/programs/social-enterprise",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    imageAlt: "사회적기업 생산 현장에서 일하는 직원들",
    accentClass: "bg-forest",
    tags: ["고용 창출", "현지 생산", "공정무역"],
  },
  {
    title: "소셜비즈니스",
    count: "2",
    unit: "개 브랜드",
    description:
      "더네이버스커피, 메리쿱 등 사회적 미션을 실현하는 비즈니스를 직접 운영하며, 생산자와 소비자를 잇습니다.",
    href: "/programs/social-business",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "공정무역 커피 원두 — 더네이버스커피 생산지",
    accentClass: "bg-emerald-light",
    tags: ["더네이버스커피", "메리쿱"],
  },
] as const

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */
export function ProgramsSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const advanceWord = useCallback(() => {
    setWordIndex((prev) => (prev + 1) % cycleWords.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advanceWord, 3000)
    return () => clearInterval(id)
  }, [advanceWord])

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), [])
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), [])

  return (
    <section className="overflow-hidden py-24 lg:py-36">
      {/* ---- Header ---- */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] text-emerald uppercase">
            Our Programs
          </p>

          {/* Heading — cycling word sits in fixed-height clip container */}
          <h2 className="mt-5 font-extrabold leading-tight tracking-tight text-forest">
            <span className="block text-[20px] font-semibold text-muted-foreground/50 md:text-[24px]">
              우리는
            </span>
            {/* clip: prevents layout shift from word-width change */}
            <span className="block h-[1.15em] overflow-hidden text-[36px] md:text-[44px] lg:text-[52px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cycleWords[wordIndex]}
                  className="block text-emerald"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {cycleWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block text-[36px] text-forest md:text-[44px] lg:text-[52px]">
              을 통해 변화를 만듭니다
            </span>
          </h2>

          {/* Gold accent bar — fixed, never changes */}
          <div className="mt-6 h-[2px] w-12 bg-gold" />

          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            4대 핵심사업으로 아시아, 아프리카, 중남미 전역에서
            사회적경제 생태계를 구축합니다.
          </p>
        </motion.div>
      </div>

      {/* ---- Swiper ---- */}
      <div className="mt-12 px-4 lg:px-8">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.12}
          pagination={{ clickable: true }}
          className="programs-swiper"
          breakpoints={{
            540: { slidesPerView: 1.7, spaceBetween: 24 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 2.8, spaceBetween: 28 },
            1280: { slidesPerView: 3.2, spaceBetween: 28 },
          }}
          a11y={{
            prevSlideMessage: "이전 사업",
            nextSlideMessage: "다음 사업",
          }}
        >
          {programs.map((program, i) => (
            <SwiperSlide key={program.title}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="h-full"
              >
                <Link
                  href={program.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/5 hover:ring-border"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 540px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Count */}
                    <div className="absolute bottom-4 left-5">
                      <span className="text-[40px] font-black leading-none tabular-nums text-white drop-shadow-md">
                        {program.count}
                      </span>
                      <span className="ml-1.5 text-[13px] font-semibold text-white/75">
                        {program.unit}
                      </span>
                    </div>

                    {/* Accent dot */}
                    <div className={`absolute top-4 right-4 h-2.5 w-2.5 rounded-full ring-2 ring-white/30 ${program.accentClass}`} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-6">
                    <h3 className="text-[18px] font-bold text-forest">{program.title}</h3>

                    <div className="mt-3 h-px bg-border/50" />

                    <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-[13px] font-bold text-forest transition-colors group-hover:text-emerald">
                      자세히 보기
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav buttons row — aligned with pagination */}
        <div className="mt-0 flex items-center justify-between" style={{ marginTop: "-40px" }}>
          {/* Spacer where pagination sits (left-aligned via CSS) */}
          <div />
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="이전 슬라이드"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-all hover:border-forest hover:bg-forest hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <RiArrowLeftLine className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="다음 슬라이드"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-all hover:border-forest hover:bg-forest hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <RiArrowRightLine className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
