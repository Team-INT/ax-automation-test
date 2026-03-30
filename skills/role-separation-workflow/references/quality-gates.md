# 품질 게이트 (Quick Reference)

> 상세 버전: `specs/role-separation-methodology/quality-gates.md`

## Gate 1: 카피 검증 (`/enf:copy-review`)

| # | 항목 | PASS 기준 | FAIL 기준 |
|---|------|----------|----------|
| 1 | 구체성 | 모든 섹션에 숫자 존재 | "많은", "다양한" 같은 추상적 표현 |
| 2 | 완전성 | 5섹션 + 리서치 + 신뢰뱃지 | 섹션 누락 |
| 3 | 페르소나 | pain_points ↔ Problem 매핑 | 범용적 메시지 |
| 4 | CTA | 행동 동사 + 허들 낮추기 | 모호한 CTA |
| 5 | 톤 | 문체 통일, 수식어 없음 | 섹션별 톤 변화 |

**판정**: 5개 모두 PASS → 진행 / 1-2개 FAIL → 수정 후 재검증 / 3+ FAIL → 재작성

## Gate 2: 디자인 검증 (사용자 검수)

| # | 항목 | PASS 기준 | FAIL 기준 |
|---|------|----------|----------|
| 1 | 톤 잠금 | 전 섹션 히어로와 동일 톤 | 스타일 드리프트 |
| 2 | 카피 무결성 | copy.md 원문 그대로 | AI가 카피 변경 |
| 3 | 반응형 | 4단계 브레이크포인트 명시 | Desktop 전용 |
| 4 | 토큰 | CSS 변수로 정의됨 | 하드코딩만 |

**판정**: 4개 모두 PASS → 진행 / 1개 FAIL → 보완 / 2+ FAIL → 재작업

## Gate 3: 구현 검증

```
/enf:code-review    → 코드 품질
/enf:type-check     → TypeScript
/enf:perf-audit     → Lighthouse 90+
```

## 피드백 루프

| 실패 지점 | 돌아갈 단계 |
|----------|------------|
| Gate 1 구체성 | Step 1 카피 수정 |
| Gate 1 페르소나 | Step 1 리서치부터 |
| Gate 2 카피 무결성 | Step 2 해당 섹션 재작업 |
| Gate 2 톤 잠금 | Step 2 히어로부터 재체이닝 |
| Gate 3 카피 반영 | Step 3 카피 교체만 |
| Gate 3 성능 | Step 3 최적화 |
