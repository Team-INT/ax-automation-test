---
description: 역할 분리 워크플로우 Step 3 — 디자인 코드 + 카피 기반 웹사이트 구현
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - mcp__context7__query-docs
  - mcp__context7__resolve-library-id
  - mcp__next-devtools__nextjs_index
  - mcp__next-devtools__nextjs_call
skills:
  - role-separation-workflow
  - tailwind-v4-shadcn
  - coding-conventions
---

# /design-implement Command

역할 분리 디자인 방법론의 세 번째 단계. `copy.md` + `design-spec.md` + 디자인 코드를 기반으로 웹사이트를 구현한다.

## Usage

```
/enf:design-implement
/enf:design-implement "Variant에서 내보낸 코드를 아래에 붙여넣습니다: ..."
```

## Prerequisites

- `copy.md` 파일 존재 (Step 1 산출물)
- `design-spec.md` 파일 존재 (Step 2 산출물)
- Variant/Figma에서 내보낸 디자인 코드 (사용자가 붙여넣기)

## Workflow

### 1. 입력 확인

1. `copy.md` 파일 읽기
2. `design-spec.md` 파일 읽기
3. 사용자가 제공한 디자인 코드 수신

### 2. 디자인 시스템 구축

`design-spec.md`의 디자인 토큰을 Tailwind `@theme`에 적용:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  /* design-spec.md에서 추출한 토큰 */
  --color-primary: #xxx;
  --color-secondary: #xxx;
  --color-accent: #xxx;
  --color-surface: #xxx;
  --color-text: #xxx;

  --font-heading: "...", sans-serif;
  --font-body: "...", sans-serif;

  --section-gap: 120px;
  --content-max-width: 1280px;
}
```

### 3. 카피 교체

Variant/Figma 내보내기 코드의 placeholder 텍스트를 `copy.md` 내용으로 교체:

| 교체 대상 | 교체 소스 |
|----------|----------|
| 히어로 헤드라인 | copy.md > 섹션 1 > 헤드라인 |
| 히어로 서브카피 | copy.md > 섹션 1 > 서브카피 |
| 문제점 카드 텍스트 | copy.md > 섹션 2 > 문제점 목록 |
| 서비스 특징 텍스트 | copy.md > 섹션 3 > 특징 목록 |
| 후기 인용문 | copy.md > 섹션 4 > 후기 1~3 |
| CTA 텍스트 | copy.md > 섹션 5 > 전체 |

### 4. 브랜드 자산 적용

- **이미지**: placeholder → `public/images/` 경로의 실제 이미지
- **폰트**: next/font로 브랜드 폰트 적용 (Google Fonts 또는 로컬)
- **파비콘/로고**: 브랜드 에셋으로 교체

### 5. 반응형 구현

`design-spec.md`의 브레이크포인트 스펙에 따라:

| 구간 | 처리 |
|------|------|
| Mobile (0-767px) | 1컬럼, 터치 최적화, 패럴랙스 비활성 |
| Tablet (768-1023px) | 2컬럼, 중간 폰트 크기 |
| Desktop (1024-1439px) | 풀 레이아웃 |
| Wide (1440px+) | max-width 제한 |

### 6. 인터랙션 구현

`design-spec.md`의 인터랙션 스펙에 따라:

- 스크롤 애니메이션 (IntersectionObserver)
- 호버 효과 (transition + transform)
- 캐러셀 (Testimonials)
- CTA 애니메이션

### 7. 구현 원칙

| 원칙 | 설명 |
|------|------|
| **카피 변경 금지** | copy.md 원문 그대로 사용 |
| **디자인 판단 금지** | design-spec.md 스펙 그대로 구현 |
| **Server Component 우선** | 인터랙션 필요한 곳만 Client Component |
| **next/image 필수** | 이미지 최적화 |
| **next/font 필수** | 폰트 최적화 |
| **접근성** | WCAG 2.1 AA, 키보드 네비게이션 |

## Output

### 파일 구조

```
src/app/(site)/(main)/
├── page.tsx                    # 메인 페이지 (Server Component)
├── _components/
│   ├── HeroSection.tsx         # Hero (SC or CC)
│   ├── ProblemSection.tsx      # Problem (SC)
│   ├── ServiceSection.tsx      # Service (SC)
│   ├── TestimonialsSection.tsx # Testimonials (CC - 캐러셀)
│   └── CTASection.tsx          # CTA (SC)
├── _lib/
│   └── animations.ts           # 인터랙션 유틸 (optional)
```

### Verification

구현 완료 후 다음 커맨드로 검증:

```bash
/enf:code-review    # 코드 품질
/enf:type-check     # TypeScript 검증
/enf:perf-audit     # 성능 분석
```

## Related Commands

- `/enf:copy-write` — 카피 작성 (Step 1)
- `/enf:design-guide` — 디자인 가이드 (Step 2)
- `/enf:code-review` — 코드 리뷰 (Gate 3)
- `/enf:commit` — 커밋

## Related Agents

이 커맨드는 `dev-assistant` 에이전트의 구현 가이드라인을 따릅니다.
