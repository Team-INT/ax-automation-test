---
description: 역할 분리 워크플로우 Gate 1 — copy.md 카피 품질 검증
allowed-tools:
  - Read
  - Glob
  - Grep
skills:
  - role-separation-workflow
---

# /copy-review Command

역할 분리 디자인 방법론의 품질 게이트 1. `copy.md`의 카피 품질을 검증한다.

## Usage

```
/enf:copy-review
/enf:copy-review copy.md
/enf:copy-review specs/landing/copy.md
```

인자 없이 실행하면 프로젝트 루트의 `copy.md`를 검증한다.

## Validation Process

### 1. 파일 확인

- `copy.md` 파일 존재 여부 확인
- 파일 구조가 템플릿 형식을 따르는지 확인

### 2. 5가지 검증 항목 실행

#### 항목 1: 구체성 (Specificity)

각 섹션에서 구체적 숫자(`\d+`)가 최소 1개 이상 존재하는지 확인.

| 섹션 | PASS 예시 | FAIL 예시 |
|------|----------|----------|
| Hero | "73% 절감" | "획기적으로 절감" |
| Problem | "매주 8시간 소요" | "많은 시간 소요" |
| Service | "87% 시간 절감" | "빠르게 처리" |
| Testimonials | "8시간 → 30분" | "많이 줄었습니다" |
| CTA | "30분이면 알 수 있습니다" | "시작하세요" |

#### 항목 2: 완전성 (Completeness)

- [ ] 고객 리서치 섹션 존재 (페르소나 JSON + 경쟁 분석)
- [ ] 5개 섹션 모두 존재 (Hero, Problem, Service, Testimonials, CTA)
- [ ] Hero에 공감 질문 + 헤드라인 + 서브카피 + CTA 4개 항목
- [ ] Testimonials에 최소 2개 후기
- [ ] CTA에 신뢰 뱃지 포함

#### 항목 3: 페르소나 정합성 (Persona Alignment)

- [ ] 페르소나의 pain_points가 Problem 섹션에 반영
- [ ] 페르소나의 role/context가 Hero에 반영
- [ ] search_keywords가 카피에 자연스럽게 포함

#### 항목 4: CTA 명확성 (CTA Clarity)

- [ ] 구체적 행동 동사 사용 ("데모 보기", "체험 시작")
- [ ] 허들 낮추기 정보 포함 ("카드 등록 없이", "5분")
- [ ] Service 섹션에 보조 CTA 존재

#### 항목 5: 톤 일관성 (Tone Consistency)

- [ ] 문체 통일 (해요체/합니다체)
- [ ] 감정 온도 일관
- [ ] 추상적 수식어 미사용 ("혁신적인", "최고의", "다양한" 등)

### 3. 판정

| 결과 | 조건 | 액션 |
|------|------|------|
| **PASS** | 5개 항목 모두 통과 | Step 2 진행 가능 |
| **PARTIAL** | 1-2개 미흡 | 해당 항목 수정 후 재검증 |
| **FAIL** | 3개 이상 미흡 | Step 1 재실행 권장 |

## Output Format

```markdown
# Copy Review: {프로젝트명}

## 검증 결과: {PASS / PARTIAL / FAIL}

### 1. 구체성: {PASS/FAIL}
- Hero: {결과 + 근거}
- Problem: {결과 + 근거}
- Service: {결과 + 근거}
- Testimonials: {결과 + 근거}
- CTA: {결과 + 근거}

### 2. 완전성: {PASS/FAIL}
- {체크리스트 결과}

### 3. 페르소나 정합성: {PASS/FAIL}
- {매핑 분석 결과}

### 4. CTA 명확성: {PASS/FAIL}
- {분석 결과}

### 5. 톤 일관성: {PASS/FAIL}
- {분석 결과}

## 개선 제안
- {FAIL 항목에 대한 구체적 수정 방안}

## Next Step
{PASS → `/enf:design-guide`, PARTIAL → 수정 후 재검증, FAIL → `/enf:copy-write` 재실행}
```

## Related Commands

- `/enf:copy-write` — 카피 작성 (Step 1)
- `/enf:design-guide` — 디자인 가이드 (Step 2)
