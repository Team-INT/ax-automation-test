---
description: 역할 분리 워크플로우 Step 2 — 카피 기반 디자인 가이드 생성 및 디자인 스펙 작성
allowed-tools:
  - Read
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

역할 분리 디자인 방법론의 두 번째 단계. `copy.md`를 기반으로 외부 디자인 도구(Variant/Figma) 작업 가이드를 생성하고, 결과를 `design-spec.md`로 문서화한다.

## Usage

```
/enf:design-guide
/enf:design-guide --figma "https://figma.com/design/..."
/enf:design-guide --tone "강렬한, 다크, 프로페셔널"
```

## Prerequisites

- `copy.md` 파일이 존재해야 한다
- `/enf:copy-review` Gate 1을 통과한 상태여야 한다

## Workflow

### 1. copy.md 분석

`copy.md`를 읽고 각 섹션의 콘텐츠 구조를 파악:

- 텍스트 양 (짧은/중간/긴)
- 항목 수 (카드 3개, 후기 2개 등)
- 이미지 필요 여부
- 타겟 페르소나의 시각적 기대치

### 2. 디자인 톤 방향 수립

타겟 페르소나와 서비스 성격에 맞는 시각적 톤을 제안:

| 서비스 성격 | 톤 방향 | 컬러 계열 |
|-----------|---------|----------|
| B2B SaaS | 신뢰/전문 | 다크 + 블루/그린 |
| D2C 커머스 | 따뜻/친근 | 크림 + 웜톤 |
| 캠페인/마케팅 | 강렬/액션 | 다크 + 골드/레드 accent |
| 프로덕트/포트폴리오 | 깔끔/미니멀 | 화이트 + 블랙 + 단일 accent |

### 3. 외부 도구 작업 가이드 생성

#### Variant 모드 (기본)

5개 섹션별로 Variant에 입력할 프롬프트를 생성:

**히어로 (톤 설정):**
```
다음 히어로 섹션을 {톤 키워드}한 톤으로 디자인해줘.

{copy.md Hero 섹션 원문 붙여넣기}

조건:
- {배경 방향}
- 헤드라인을 가장 크게
- CTA 버튼은 accent 컬러로 눈에 띄게
```

**후속 섹션 (체이닝):**
```
위 디자인과 같은 톤으로 다음 {섹션명} 섹션을 디자인해줘.

{copy.md 해당 섹션 원문 붙여넣기}

조건:
- 위 히어로와 동일한 컬러/폰트/여백
- {레이아웃 지시}
```

**사용자 지시:**
1. 히어로 디자인에서 톤 선택 (컬러, 밀도, 레이아웃)
2. "New Chat from Design"으로 체이닝
3. **반드시** copy.md 원문 붙여넣기 (AI가 카피 변경 방지)
4. 5개 섹션 모두 완료 후 "Open in → Claude Code"로 내보내기

#### Figma 모드

Figma URL이 제공된 경우 MCP 도구로 디자인 정보를 직접 추출:

```
get_design_context(fileKey, nodeId)  → 코드 + 스크린샷
get_variable_defs(fileKey)           → 디자인 토큰
```

### 4. design-spec.md 생성

외부 도구 작업 결과를 취합하여 `design-spec.md`를 생성:

1. **디자인 톤** — 컬러, 타이포, 여백, 인터랙션 (CSS 변수로)
2. **섹션별 스펙** — 레이아웃, 배경, 인터랙션, Copy 매핑
3. **외부 도구 산출물** — Variant 코드 / Figma 참조
4. **디자인 시스템 토큰** — Tailwind `@theme` 블록
5. **반응형 브레이크포인트** — Mobile / Tablet / Desktop / Wide

## Output Format

1. **Variant 작업 가이드** (사용자에게 전달) — 각 섹션별 프롬프트
2. **design-spec.md** (파일 생성) — 디자인 스펙 문서

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

> `/enf:design-implement`로 코드 구현을 시작하세요. Variant에서 내보낸 코드와 함께 전달해주세요.

## Related Commands

- `/enf:copy-write` — 카피 작성 (Step 1)
- `/enf:copy-review` — 카피 품질 검증 (Gate 1)
- `/enf:design-implement` — 코드 구현 (Step 3)

## Related Agents

이 커맨드는 `design-director` 에이전트의 가이드라인을 따릅니다.
