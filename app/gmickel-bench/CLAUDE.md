# gmickel-bench SEO & Data Rules

## Scoring Rules

**CRITICAL**: Benchmark scores must be exact. People rely on this data.

### Score Calculation by Eval Type

| Eval | Formula | Max |
|------|---------|-----|
| MCP, Permissions | `llm_subtotal` only | 90 |
| SmartTrim | `llm_subtotal + human_functionality_bonus` | 100 |
| Zig | `llm_subtotal + human_runtime_bonus` | 100 |
| XLSX | `llm_subtotal + human_review` | 100 |
| Design | `(llm_subtotal/90)*70 + (design_review/10)*30` | 100 |

### Verification Checklist

When updating scores:
1. Cross-reference EVERY score against source eval document
2. Use correct formula for each eval type
3. Recalculate totals: sum all 6 evals per model
4. Recalculate averages: total / 6
5. Update ALL takeaways with correct numbers
6. Double-check Model Strengths section

---

## Adding New Evals

### 1. Add to BENCH_EVALS (`lib/bench-evals.ts`)

```typescript
{
  id: 'new-eval',           // URL slug
  shortName: 'NewEval',     // Chart label
  title: 'Full Eval Title',
  hook: 'One-line description',
  methodology: 'How it was scored',
  spec: 'Stack/language',
  takeaways: ['Key insight 1', 'Key insight 2'],
  note: { type: 'outlier', title: '...', content: '...' },  // optional
}
```

### 2. Add Scores (`lib/bench-data.ts`)

```typescript
// In llmScores array
{
  evalId: 'new-eval',
  name: 'Full Eval Name',
  shortName: 'NewEval',
  scores: {
    claude: 70,
    codex: 65,
    // ... all models
  },
}
```

### 3. Update Totals

Recalculate `totals` array with new eval included.

### 4. Verify SEO

- `generateStaticParams()` auto-includes new eval
- Detail page at `/gmickel-bench/new-eval` auto-created
- OG image auto-generated
- Sitemap auto-updated
- Chart X-axis labels link to detail page

---

## Adding New Models

### 1. Add to MODELS (`lib/bench-models.ts`)

```typescript
newmodel: {
  model: 'Model Name',
  harness: 'Provider/Tool',
  color: '#hexcolor',
  order: 7,  // Display order
}
```

### 2. Add to MODEL_IDS

```typescript
export const MODEL_IDS: ModelId[] = [
  'claude', 'codex', ..., 'newmodel'
];
```

### 3. Add Scores

Add `newmodel: XX` to every eval in `llmScores` and `totals`.

---

## Eval Detail Pages (`/gmickel-bench/[evalId]`)

Auto-generated from `BENCH_EVALS`. Each page has:

- Full methodology explanation
- Score breakdown by model
- Key takeaways
- Optional outlier notes
- JSON-LD breadcrumbs
- OG image

### Linking to Detail Pages

**Chart X-axis**: Eval names are clickable (via `CustomXAxisTick`)
**Insight cards**: Title + "View Details →" link

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/bench-data.ts` | Scores, totals, `toChartData()` |
| `lib/bench-evals.ts` | `BENCH_EVALS` definitions, `getEvalById()` |
| `lib/bench-models.ts` | Model configs, colors, ordering |
| `app/gmickel-bench/page.tsx` | Main dashboard |
| `app/gmickel-bench/[evalId]/page.tsx` | Eval detail page |
| `components/gmickel/bench-score-chart.tsx` | Chart with clickable labels |

---

## Common Issues

**Scores don't add up**: Use exact formulas above. Some evals have human bonuses.

**New eval not showing**: Add to both `BENCH_EVALS` and `llmScores`.

**Chart labels not linking**: Ensure `evalId` in `llmScores` matches `id` in `BENCH_EVALS`.
