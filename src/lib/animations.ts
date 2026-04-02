/**
 * 공통 Framer Motion 애니메이션 유틸
 * 모든 페이지/컴포넌트에서 import해서 사용
 */

// ─── 공통 이징 ────────────────────────────────────────────────────────────────
export const EASE = [0.25, 0.1, 0.25, 1] as const

// ─── fadeUp (whileInView) ──────────────────────────────────────────────────────
/** 스크롤 시 아래→위 페이드인. delay(초) 인자 지원 */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: EASE },
})

// ─── 좌우 슬라이드 (whileInView) ──────────────────────────────────────────────
export const slideLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: EASE },
}

export const slideRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: EASE },
}

// ─── 카드 그리드 (staggerChildren) ────────────────────────────────────────────
/** 카드 그리드 컨테이너 variant */
export const cardGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

/** 카드 아이템 variant — scale 포함 */
export const cardItem = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
}

// ─── 통계 그리드 (staggerChildren) ────────────────────────────────────────────
export const statGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// ─── 리스트 컨테이너 (AnimatePresence 포함) ───────────────────────────────────
export const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

/** exit 포함 — AnimatePresence mode="popLayout" 와 함께 사용 */
export const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: EASE },
  },
}

// ─── 발간물 그리드 ────────────────────────────────────────────────────────────
export const reportGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const reportItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// ─── 연구 목록 (x 슬라이드) ───────────────────────────────────────────────────
export const researchList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export const researchItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}
