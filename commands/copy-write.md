---
description: 역할 분리 워크플로우 Step 1 — 타겟 고객 분석 + 5섹션 카피 작성
allowed-tools:
  - Read
  - Glob
  - Grep
skills:
  - role-separation-workflow
---

# /copy-write Command

역할 분리 디자인 방법론의 첫 번째 단계. 타겟 고객을 분석하고 5개 섹션의 카피를 작성한다.

## Usage

```
/enf:copy-write "서비스 설명 + 타겟 고객"
/enf:copy-write "AI 광고 자동화 SaaS, 타겟: 중소기업 마케팅 팀장"
/enf:copy-write "르완다 직거래 커피 브랜드, 타겟: 30대 커피 애호가"
```

## Workflow

### 1. 타겟 고객 분석

사용자가 제공한 서비스/제품 정보를 기반으로:

1. **페르소나 정의**: 이름, 나이, 직무, 회사 규모, 목표
2. **페인포인트 파악**: 3-5개의 구체적 고충 (수치 포함)
3. **검색 키워드 도출**: 타겟이 실제로 검색할 키워드 5-10개
4. **경쟁 분석**: 경쟁사 2-3개의 메시지 요약 + 차별화 포인트

구조화된 JSON으로 출력하여 이후 카피 작성의 기반으로 사용.

### 2. 5섹션 카피 작성

리서치 결과를 바탕으로 다음 5개 섹션을 작성:

| 섹션 | 목적 | 필수 요소 |
|------|------|----------|
| Hero | 첫 인상 + 가치 제안 | 공감 질문, 헤드라인(숫자), 서브카피, CTA |
| Problem | 문제의 심각성 인식 | 수치 기반 문제 3개, 전환 문구 |
| Service | 솔루션 제시 | 특징 3개 + 효과 수치, 보조 CTA |
| Testimonials | 사회적 증거 | 후기 2-3개 (실명, 구체적 경험, 전후 수치) |
| CTA | 행동 유도 | 허들 낮추기, 신뢰 뱃지, 보조 텍스트 |

### 3. 자체 검수

작성 완료 후 다음 항목을 자체 검증:

- [ ] 모든 섹션에 구체적 숫자 포함
- [ ] 페르소나 페인포인트 ↔ Problem 섹션 1:1 매핑
- [ ] CTA에 허들 낮추기 조건 존재
- [ ] 전체 톤 일관성 유지
- [ ] 추상적 수식어 ("혁신적인", "다양한") 제거

## Output Format

프로젝트 루트에 `copy.md` 파일을 생성한다.

```markdown
# Copy: {프로젝트명}

> 생성일: {날짜}
> 타겟: {타겟 고객 요약}
> 서비스: {서비스명}

## 고객 리서치
### 타겟 페르소나
(JSON 구조)

### 경쟁 분석 요약
(테이블)

## 섹션 1: Hero
## 섹션 2: Problem
## 섹션 3: Service
## 섹션 4: Testimonials
## 섹션 5: CTA
```

상세 템플릿: `role-separation-workflow` 스킬의 `references/copy-template.md` 참조.

## Next Step

카피 작성 완료 후 사용자에게 안내:

> `/enf:copy-review`로 카피 품질을 검증한 뒤, `/enf:design-guide`로 디자인 단계를 진행하세요.

## Related Commands

- `/enf:copy-review` — 카피 품질 검증 (Gate 1)
- `/enf:design-guide` — 디자인 가이드 (Step 2)
- `/enf:design-implement` — 코드 구현 (Step 3)

## Related Agents

이 커맨드는 `copy-strategist` 에이전트의 가이드라인을 따릅니다.
