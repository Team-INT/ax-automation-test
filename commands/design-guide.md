---
description: 역할 분리 워크플로우 Step 2 — 카피 기반 디자인 스펙 직접 생성
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - mcp__claude_ai_Figma__get_design_context
  - mcp__claude_ai_Figma__get_screenshot
  - mcp__claude_ai_Figma__get_metadata
  - mcp__claude_ai_Figma__get_variable_defs
skills:
  - role-separation-workflow
  - tailwind-v4-shadcn
---

# /design-guide Command

역할 분리 디자인 방법론의 두 번째 단계. `copy.md`를 기반으로 디자인 스펙을 **직접 생성**하고 `design-spec.md`로 문서화한다.

## Usage

```
/enf:design-guide
/enf:design-guide --tone "강렬한, 다크, 프로페셔널"
/enf:design-guide --concept "Data Storytelling"
/enf:design-guide --figma "https://figma.com/design/..."
```

## Prerequisites

- `copy.md` 파일이 존재해야 한다
- `/enf:copy-review` Gate 1을 통과한 상태여야 한다

## Workflow

### Mode 1: 직접 생성 (기본)

Claude가 `copy.md` + 프로젝트 컨텍스트를 분석하여 `design-spec.md`를 직접 작성한다.

#### Step 1. copy.md 분석

`copy.md`를 읽고 각 섹션의 콘텐츠 구조를 파악:

- 텍스트 양 (짧은/중간/긴)
- 항목 수 (카드 3개, 후기 2개 등)
- 이미지 필요 여부
- 타겟 페르소나의 시각적 기대치

#### Step 2. 디자인 톤 결정

타겟 페르소나와 서비스 성격에 맞는 시각적 톤을 결정:

| 서비스 성격 | 톤 방향 | 컬러 계열 |
|-----------|---------|----------|
| B2B SaaS / 기관 | 신뢰/전문 | 다크 + 블루/그린 |
| D2C 커머스 | 따뜻/친근 | 크림 + 웜톤 |
| 캠페인/마케팅 | 강렬/액션 | 다크 + 골드/레드 accent |
| 프로덕트/포트폴리오 | 깔끔/미니멀 | 화이트 + 블랙 + 단일 accent |
| 비영리/NGO | 신뢰 + 데이터 | 어스톤 + 골드 accent |

기존 디자인 레퍼런스(`specs/{project}/design-references.md`)가 있으면 해당 컨셉을 우선 적용한다.

#### Step 3. 섹션별 디자인 스펙 작성

각 섹션에 대해 다음을 정의:

- **레이아웃**: 그리드, 정렬, 스플릿 비율
- **배경**: 컬러, 그래디언트, 이미지 오버레이
- **컴포넌트**: 카드, 버튼, 뱃지, 캐러셀 스타일
- **인터랙션**: 스크롤 애니메이션, 호버, 전환
- **Copy 매핑**: `copy.md`의 어느 섹션/항목인지 명시
- **ASCII 와이어프레임**: 레이아웃 시각화

#### Step 4. 디자인 시스템 토큰 정의

Tailwind `@theme`에 바로 적용 가능한 CSS 변수로 추출:

```css
@theme {
  --color-primary: #xxx;
  --color-secondary: #xxx;
  --color-accent: #xxx;
  --font-heading: "...", sans-serif;
  --font-body: "...", sans-serif;
  /* ... */
}
```

#### Step 5. design-spec.md 파일 생성

프로젝트 루트에 `design-spec.md`를 생성한다.

### Mode 2: Figma 연동 (--figma 옵션)

Figma URL이 제공된 경우 MCP 도구로 디자인 정보를 추출하여 `design-spec.md`를 생성:

```
get_design_context(fileKey, nodeId)  → 코드 + 스크린샷
get_variable_defs(fileKey)           → 디자인 토큰
```

### Mode 3: 외부 도구 가이드 (사용자 요청 시)

사용자가 Variant 등 외부 도구를 사용하겠다고 명시한 경우에만, 섹션별 외부 도구 작업 프롬프트를 생성한다. 상세: `role-separation-workflow` 스킬의 `references/variant-workflow.md` 참조.

## Output: design-spec.md

1. **디자인 톤** — 컬러 팔레트, 타이포, 여백, 인터랙션 기본값 (전부 CSS 변수)
2. **섹션별 스펙** — 레이아웃, 배경, 컴포넌트, 인터랙션, Copy 매핑, ASCII 와이어프레임
3. **디자인 시스템 토큰** — Tailwind `@theme` 블록
4. **반응형 브레이크포인트** — Mobile / Tablet / Desktop / Wide + 타이포 스케일

상세 템플릿: `role-separation-workflow` 스킬의 `references/design-spec-template.md` 참조.

## Design Review Checklist

생성 완료 후 사용자에게 다음 체크리스트 제공:

- [ ] 톤 일관성: 히어로와 CTA가 "같은 사이트"로 보이는가?
- [ ] 카피 무결성: copy.md 원문이 그대로 사용되었는가?
- [ ] 섹션 완전성: 5개 섹션 모두 디자인되었는가?
- [ ] 컬러/폰트 통일: 전 섹션에서 동일한 팔레트/폰트 사용?
- [ ] 토큰 추출: 모든 값이 CSS 변수로 정의되었는가?

## Next Step

디자인 검수 통과 후:

> `/enf:design-implement`로 코드 구현을 시작하세요.

## Related Commands

- `/enf:copy-write` — 카피 작성 (Step 1)
- `/enf:copy-review` — 카피 품질 검증 (Gate 1)
- `/enf:design-implement` — 코드 구현 (Step 3)

## Related Agents

이 커맨드는 `design-director` 에이전트의 가이드라인을 따릅니다.
