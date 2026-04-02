# GNGIF 웹사이트 리뉴얼 - 작업 Phase

> 기준일: 2026-04-02 | 브랜치: `feat/static-pages`

---

## Phase 1. 기획 · 분석 ✅ 완료

- [x] AS-IS 사이트 분석 (`specs/01-site-analysis.md`)
- [x] IA 기획 제안 (`specs/02-ia-proposal.md`)
- [x] 벤치마크 분석 10개 사이트 (`specs/03-benchmark.md`)
- [x] 사용자 페르소나 & 여정 맵 (`specs/04-personas.md`)
- [x] 고객사 요구사항 정리 (`specs/05-client-requirements.md`)
- [x] 리뉴얼 제안서 작성 (`specs/06-renewal-proposal.md`)

---

## Phase 2. 디자인 컨셉 ✅ 완료

- [x] 디자인 컨셉 3종 정의 (A. Data Storytelling / B. Magazine Editorial / C. Scroll Narrative)
- [x] 디자인 레퍼런스 정리 (`specs/design-references.md`)
- [ ] 컨셉 최종 확정 (고객사 리뷰 대기) → **현재: Concept A 기준으로 구현 중**

---

## Phase 3. 기술 스택 & 프로젝트 셋업 ✅ 완료

- [x] Next.js 16 프로젝트 초기화 (enf 명세 기반)
- [x] shadcn/ui 초기화 및 기본 컴포넌트 추가
- [x] Tailwind CSS v4, Better Auth, Drizzle ORM 설정
- [x] DB 스키마 초안 (`src/db/schema.ts`)

---

## Phase 4. 퍼블리싱 (정적 페이지 구현) ✅ 완료

### 메인 페이지 (`/`) ✅ 완료
- [x] Hero 섹션 (`hero-section.tsx`)
- [x] Impact Numbers 섹션 (카운터 애니메이션) (`impact-numbers-section.tsx`)
- [x] 사업영역 카드 섹션 (`programs-section.tsx`)
- [x] SVG 차트 섹션 (`charts-section.tsx`)
- [x] 글로벌 맵 섹션 (`global-map-section.tsx`)
- [x] 수혜자 스토리 캐러셀 (`stories-section.tsx`)
- [x] 함께하기 3분화 CTA (`cta-section.tsx`)
- [x] 파트너사 로고 섹션 (`partners-section.tsx`)
- [x] 뉴스레터 CTA (`newsletter-section.tsx`)
- [x] Header / Footer / Scroll Progress / Mobile Sticky CTA

### 재단소개 (`/about`) ✅ 완료
- [x] 소개 메인 페이지 (`about/page.tsx`)
- [x] 미션·비전 (`about/mission/page.tsx`)
- [x] 조직·거버넌스 (`about/organization/page.tsx`)
- [x] 투명경영 (`about/transparency/page.tsx`)
- [x] About 레이아웃 + 서브내비 (`about/layout.tsx`, `about-subnav.tsx`)

### 사업소개 (`/programs`) ✅ 완료
- [x] 사업 개요 (`programs/page.tsx`)
- [x] 협동조합 (`programs/cooperatives/page.tsx`)
- [x] 소액금융 MFI (`programs/microfinance/page.tsx`)
- [x] 사회적기업 (`programs/social-enterprise/page.tsx`)
- [x] 소셜비즈니스 (`programs/social-business/page.tsx`)
- [x] 레이아웃 + 서브내비 + 히어로

### 임팩트 (`/impact`) ✅ 완료
- [x] 임팩트 개요 + SDG 연계 (`impact/page.tsx`)
- [x] 수혜자 스토리 5건 (`impact/stories/page.tsx`)
- [x] 발간물 아카이브 (`impact/publications/page.tsx`)
- [x] 레이아웃 + 서브내비 + 히어로

### 후원·파트너십 (`/support`) ✅ 완료
- [x] 후원·파트너십 개요 (`support/page.tsx`)
- [x] 기업 파트너십 (`support/corporate/page.tsx`)
- [x] 개인 후원 (금액 선택 인터랙션) (`support/donate/page.tsx`)
- [x] 해외 파트너 (`support/global/page.tsx`)
- [x] 레이아웃 + 서브내비 + 히어로

### 소식 (`/news`) ✅ 완료
- [x] 뉴스룸 (카테고리 필터) (`news/page.tsx`)
- [x] 미디어킷 (`news/media-kit/page.tsx`)
- [x] 레이아웃 + 서브내비 + 히어로

### 채용 (`/careers`) ✅ 완료
- [x] 채용 공고 리스트 + 필터 (`careers/page.tsx`)
- [x] 조직 문화 (`careers/culture/page.tsx`)
- [x] 레이아웃 + 서브내비 + 히어로

---

## Phase 5. 개발 (기능 구현) ⬜ 미착수

- [ ] CMS 연동 (콘텐츠 관리 방식 확정 필요)
- [ ] 다국어 (`/ko`, `/en`) — next-intl 적용
- [ ] 개인후원 결제 시스템 연동 (방식 미결정)
- [ ] 인터랙티브 글로벌 맵 (Mapbox or Leaflet)
- [ ] 임팩트 대시보드 (데이터 소스 미결정)
- [ ] 문의/후원 폼 백엔드
- [ ] 관리자 페이지 기능 구현 (현재 shell만 존재)

---

## Phase 6. 콘텐츠 입력 ⬜ 미착수 (고객사 협업)

- [ ] 수혜자 스토리 3~5건
- [ ] 기업 파트너십 사례 3~5건
- [ ] 현장 사진/영상
- [ ] 파트너사 로고
- [ ] 임팩트 데이터 확정 수치

---

## Phase 7. QA + 런칭 ⬜ 미착수

- [ ] 크로스 브라우저 테스트
- [ ] Core Web Vitals / 성능 최적화
- [ ] 접근성 (WCAG 2.1 AA)
- [ ] SEO (구조화 데이터, 다국어 hreflang)
- [ ] 배포 환경 설정

---

## 미결 사항

| # | 항목 | 현황 |
|---|------|------|
| 1 | 기술 스택 최종 결정 (WordPress vs Next.js 정적 vs Headless) | Next.js로 진행 중 |
| 2 | 임팩트 데이터 소스 (수동 vs DB vs API) | 미결 |
| 3 | 후원 결제 시스템 (자체 vs 카카오/네이버페이 vs PG사) | 미결 |
| 4 | 디자인 컨셉 고객사 최종 확정 | 미결 |
