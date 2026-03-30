# Design Spec: 굿네이버스 글로벌 임팩트 — 메인 페이지

> 생성일: 2026-03-30
> 기반 카피: copy.md
> 디자인 도구: Claude Code 직접 구현
> 컨셉: Data Storytelling (A) + Scroll Narrative (C) 하이브리드
> 컨셉 키워드: "신뢰감", "데이터 드리븐", "임팩트", "글로벌", "자립"

---

## 1. 디자인 톤 (Hero 기준)

### 컬러 팔레트

| 용도 | 이름 | Hex | CSS Variable |
|------|------|-----|-------------|
| Primary | Deep Forest | #1B4332 | `--color-primary` |
| Secondary | Emerald | #2D6A4F | `--color-secondary` |
| Accent | Gold | #D4A847 | `--color-accent` |
| Surface | Cream | #FEFCF3 | `--color-surface` |
| Surface Alt | Warm Gray | #F5F1EB | `--color-surface-alt` |
| Text Primary | Dark | #1A1A2E | `--color-text` |
| Text Secondary | Muted | #6B7280 | `--color-text-secondary` |
| Text On Dark | White | #FEFCF3 | `--color-text-light` |

### 타이포그래피

| 용도 | 폰트 | Weight | Desktop | Mobile | CSS Variable |
|------|------|--------|---------|--------|-------------|
| Headline | Plus Jakarta Sans | 700 | 56px | 32px | `--font-heading` |
| Subheading | Plus Jakarta Sans | 600 | 24px | 18px | `--font-heading` |
| Body | Noto Sans KR | 400 | 16px | 15px | `--font-body` |
| Caption | Noto Sans KR | 400 | 14px | 13px | `--font-body` |
| Counter Number | Plus Jakarta Sans | 800 | 72px | 40px | `--font-heading` |

### 여백 & 레이아웃

| 항목 | 값 | 비고 |
|------|-----|------|
| 섹션 간격 | 120px / 80px mobile | |
| 콘텐츠 최대 너비 | 1280px | |
| 그리드 컬럼 | 12 / 4 mobile | |
| 그리드 갭 | 24px / 16px mobile | |
| 카드 패딩 | 32px / 20px mobile | |
| 카드 라운드 | 16px | |
| 카드 그림자 | 0 4px 16px rgba(27,67,50,0.08) | |

### 인터랙션 기본값

| 항목 | 값 |
|------|-----|
| Transition Duration | 0.3s |
| Easing | cubic-bezier(0.4, 0, 0.2, 1) |
| Hover Scale | 1.02 |
| Hover Shadow | 0 8px 32px rgba(27,67,50,0.12) |
| Focus Ring | 2px solid var(--color-accent) |
| Scroll Fade-in | translateY(30px) + opacity 0→1, 0.6s |
| Counter Duration | 2s |
| Counter Easing | easeOutExpo |

---

## 2. 섹션별 디자인 스펙

### 섹션 1: Hero

- **레이아웃**: 풀블리드 다크 배경, 중앙 정렬 텍스트, 하단에 4개 임팩트 카운터
- **배경**: `var(--color-primary)` 단색 + 반투명 그래디언트 오버레이 위에 현장 사진 (opacity 0.15)
- **구성**:
  ```
  ┌──────────────────────────────────────────────────┐
  │                 (배경: 다크 포레스트)                │
  │                                                    │
  │      "26개국에서 621개 마을이 스스로 일어서고        │
  │       있습니다 — 그 시작이 궁금하신가요?"            │
  │                                                    │
  │    ★ 26개국, 621개 협동조합, 13개 사회적기업        │
  │    사람이 스스로 서는 경제를 만듭니다               │
  │                                                    │
  │    [임팩트 데이터 보기]   [파트너십 문의 →]          │
  │                                                    │
  │   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
  │   │ 26   │ │ 621  │ │ 13   │ │ 5    │            │
  │   │ 개국  │ │협동조합│ │사회적│ │소액금융│            │
  │   │      │ │      │ │ 기업  │ │ 기관  │            │
  │   └──────┘ └──────┘ └──────┘ └──────┘            │
  └──────────────────────────────────────────────────┘
  ```
- **공감 질문**: 상단, `var(--color-accent)` 텍스트, 18px, 이탤릭
- **헤드라인**: 중앙, `var(--color-text-light)`, 56px/32px, font-weight 700
- **서브카피**: 중앙, `var(--color-text-light)` opacity 0.85, 18px/16px, max-width 680px
- **CTA 버튼**:
  - Primary: `var(--color-accent)` 배경, `var(--color-primary)` 텍스트, 패딩 16px 32px, radius 8px
  - Secondary: 투명 배경, `var(--color-text-light)` 보더 + 텍스트
- **카운터**: 4열 그리드 (2x2 mobile), 숫자는 72px/40px `var(--color-accent)`, IntersectionObserver로 0에서 틱업
- **인터랙션**:
  - 공감 질문 fade-in 0.6s
  - 헤드라인 fade-in 0.8s (0.2s delay)
  - CTA fade-in 1.0s (0.4s delay)
  - 카운터 스크롤 시 2s 틱업 애니메이션
- **Copy 매핑**: `copy.md` > 섹션 1: Hero

### 섹션 2: Problem

- **레이아웃**: `var(--color-surface)` 배경, 상단 헤드라인 + 3컬럼 카드 그리드
- **구성**:
  ```
  ┌──────────────────────────────────────────────────┐
  │                 (배경: 크림)                        │
  │                                                    │
  │    "전 세계 7억 명이 하루 $2.15 미만으로            │
  │     살아갑니다 — 일회성 기부로는 바뀌지 않습니다"    │
  │                                                    │
  │   ┌────────────┐ ┌────────────┐ ┌────────────┐    │
  │   │  📊 85%     │ │  👤 22.3%  │ │  🏦 14억    │    │
  │   │ 기부 의존의  │ │ 일자리 없는 │ │ 금융        │    │
  │   │ 한계        │ │ 성장       │ │ 사각지대     │    │
  │   │             │ │            │ │             │    │
  │   │ (설명 텍스트)│ │ (설명 텍스트)│ │ (설명 텍스트)│    │
  │   └────────────┘ └────────────┘ └────────────┘    │
  │                                                    │
  │    "만약 기부 대신 '일할 수 있는 구조'를             │
  │     만들어준다면?"                                  │
  └──────────────────────────────────────────────────┘
  ```
- **카드**: `var(--color-surface-alt)` 배경, radius 16px, 패딩 32px
- **카드 숫자**: `var(--color-accent)` 컬러, 40px, font-weight 800
- **카드 제목**: `var(--color-text)`, 20px, font-weight 600
- **카드 본문**: `var(--color-text-secondary)`, 15px
- **출처**: 각 카드 하단에 작은 텍스트로 출처 표시 (OECD, ILO, World Bank)
- **전환 문구**: 하단 중앙, `var(--color-secondary)`, 20px, font-weight 600
- **인터랙션**: 카드 stagger fade-in (0.2s 간격), 호버 시 translateY(-4px) + shadow 강화
- **Copy 매핑**: `copy.md` > 섹션 2: Problem

### 섹션 3: Service (4대 사업)

- **레이아웃**: `var(--color-primary)` 다크 배경, 좌우 교차 배치 (지그재그)
- **구성**:
  ```
  ┌──────────────────────────────────────────────────┐
  │                (배경: 다크 포레스트)                 │
  │                                                    │
  │  "기부가 아닌 구조를 만듭니다"                       │
  │                                                    │
  │  ┌──────────────────────────────────────────┐     │
  │  │ [이미지]          │ 01 협동조합 육성      │     │
  │  │  현장 사진         │ 621개 · 2.3배 소득↑  │     │
  │  │                   │ (설명 텍스트)         │     │
  │  └──────────────────────────────────────────┘     │
  │  ┌──────────────────────────────────────────┐     │
  │  │ 02 소액금융        │ [이미지]              │     │
  │  │ 5개국 · 상환율     │  현장 사진            │     │
  │  │ 96.2%             │                      │     │
  │  └──────────────────────────────────────────┘     │
  │  (이하 03, 04 동일 패턴)                            │
  │                                                    │
  │            [사업 상세 보기]                          │
  └──────────────────────────────────────────────────┘
  ```
- **사업 카드**: 50:50 스플릿 (이미지 | 텍스트), 홀수는 좌이미지, 짝수는 우이미지
- **번호 뱃지**: `var(--color-accent)` 배경, `var(--color-primary)` 텍스트, 40px 원형
- **핵심 수치**: `var(--color-accent)`, 32px, font-weight 700
- **이미지**: aspect-ratio 4:3, object-fit cover, radius 16px
- **모바일**: 1컬럼, 이미지 상단 텍스트 하단 (교차 없음)
- **인터랙션**: 스크롤 시 좌/우에서 slide-in (translateX ±60px → 0)
- **Copy 매핑**: `copy.md` > 섹션 3: Service

### 섹션 4: Testimonials (수혜자 스토리)

- **레이아웃**: `var(--color-surface)` 배경, 캐러셀 (한 번에 1개)
- **구성**:
  ```
  ┌──────────────────────────────────────────────────┐
  │                  (배경: 크림)                       │
  │                                                    │
  │       ┌──────────────────────────────┐             │
  │       │  ❝                            │             │
  │       │  "3년 전에는 커피 1kg에         │             │
  │       │   200프랑도 못 받았습니다..."   │             │
  │       │                                │             │
  │       │  엠마뉘엘                      │             │
  │       │  르완다 무산제 커피 협동조합 조합장│             │
  │       │                                │             │
  │       │  ┌────────────────────┐       │             │
  │       │  │ 200 → 1,200프랑   │       │             │
  │       │  │ 커피 농가 소득 6배  │       │             │
  │       │  └────────────────────┘       │             │
  │       └──────────────────────────────┘             │
  │                                                    │
  │              ← ● ○ ○ →                             │
  └──────────────────────────────────────────────────┘
  ```
- **카드**: max-width 800px, 중앙, `var(--color-surface-alt)` 배경, radius 24px, 패딩 48px
- **인용부호**: `var(--color-accent)`, 48px
- **인용문**: `var(--color-text)`, 20px, line-height 1.8, font-style italic
- **이름/직함**: `var(--color-secondary)`, 16px, font-weight 600
- **수치 뱃지**: `var(--color-primary)` 배경, `var(--color-accent)` 텍스트, radius 12px, 패딩 16px 24px
- **네비게이션**: 하단 도트 + 좌우 화살표, 자동 슬라이드 6초, 호버 시 정지
- **인터랙션**: 슬라이드 전환 fade + translateX, 0.4s
- **Copy 매핑**: `copy.md` > 섹션 4: Testimonials

### 섹션 5: CTA (함께하기)

- **레이아웃**: `var(--color-secondary)` → `var(--color-primary)` 그래디언트 배경, 중앙 정렬
- **구성**:
  ```
  ┌──────────────────────────────────────────────────┐
  │           (그래디언트: 에메랄드 → 포레스트)           │
  │                                                    │
  │    "26개국의 변화에 함께할 수 있습니다"               │
  │                                                    │
  │   ┌────────────┐ ┌────────────┐ ┌────────────┐    │
  │   │ 🏢 기업/기관│ │ 💛 개인 후원│ │ 📊 임팩트   │    │
  │   │            │ │            │ │   확인      │    │
  │   │ 파트너십   │ │ 월 3만원   │ │ 연간 리포트  │    │
  │   │ 문의       │ │ 후원하기   │ │ 보기        │    │
  │   └────────────┘ └────────────┘ └────────────┘    │
  │                                                    │
  │    2024년 기준 26개국 · 621개 협동조합 ·             │
  │    13개 사회적기업 · 5개 소액금융기관                  │
  │                                                    │
  │    굿네이버스 재단법인 · 외교부 등록 ·                │
  │    기획재정부 지정 기부금단체 · 26개국 현지 사무소     │
  └──────────────────────────────────────────────────┘
  ```
- **헤드라인**: `var(--color-text-light)`, 40px/28px, font-weight 700
- **CTA 카드 3분화**:
  - 배경: `rgba(255,255,255,0.1)`, 보더: 1px `rgba(255,255,255,0.2)`, radius 16px
  - 호버: `rgba(255,255,255,0.2)` + translateY(-4px)
  - 아이콘: 32px, `var(--color-accent)`
  - 제목: `var(--color-text-light)`, 18px, font-weight 600
  - 설명: `var(--color-text-light)` opacity 0.8, 14px
- **보조 텍스트**: `var(--color-text-light)` opacity 0.7, 14px
- **신뢰 뱃지**: `var(--color-text-light)` opacity 0.6, 13px, 구분자 `·`
- **인터랙션**: 카드 stagger fade-in, 호버 glow 효과
- **Copy 매핑**: `copy.md` > 섹션 5: CTA

---

## 3. 디자인 시스템 토큰

```css
@theme {
  /* Colors */
  --color-primary: #1B4332;
  --color-secondary: #2D6A4F;
  --color-accent: #D4A847;
  --color-surface: #FEFCF3;
  --color-surface-alt: #F5F1EB;
  --color-text: #1A1A2E;
  --color-text-secondary: #6B7280;
  --color-text-light: #FEFCF3;

  /* Typography */
  --font-heading: "Plus Jakarta Sans", sans-serif;
  --font-body: "Noto Sans KR", sans-serif;

  /* Spacing */
  --section-gap: 120px;
  --section-gap-mobile: 80px;
  --content-max-width: 1280px;
  --card-padding: 32px;
  --card-padding-mobile: 20px;
  --card-radius: 16px;
}
```

---

## 4. 반응형 브레이크포인트

| 구간 | 범위 | 그리드 | 비고 |
|------|------|--------|------|
| Mobile | 0 - 767px | 1컬럼 (4col) | 터치 최적화, 카운터 2x2, 사업 카드 세로 |
| Tablet | 768 - 1023px | 2컬럼 (8col) | Problem 카드 2+1, 사업 카드 세로 |
| Desktop | 1024 - 1439px | 3-4컬럼 (12col) | 풀 레이아웃 |
| Wide | 1440px+ | 12col, max-width 1280px | 중앙 정렬 |

### 타이포 스케일

| 요소 | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| H1 (Hero) | 32px | 44px | 56px |
| H2 (섹션 제목) | 24px | 32px | 40px |
| H3 (카드 제목) | 18px | 20px | 20px |
| Body | 15px | 16px | 16px |
| Counter | 40px | 56px | 72px |
