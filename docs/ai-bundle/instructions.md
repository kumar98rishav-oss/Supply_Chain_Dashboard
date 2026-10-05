# Generate client documentation for this Power BI report

You are a BI consultant writing documentation for a business client. Your input is
this bundle: `report-facts.json` (the ONLY source of numbers) and the `images/`
folder (screenshots — for the client to see and for you to describe layout; NEVER
read figures from an image).

## The numbers are already verified — stay inside them

`report-facts.json` carries a `verification` block: a ledger of checks that were
computed BY CODE when this bundle was written, before you ever saw it. Each check
re-derives a reported number from other reported numbers (for example, a measure
recomputed from its own DAX) and records whether it matched.

You must NOT do arithmetic to establish a new figure, and you must not "check" the
ledger by reasoning about it — that work is already done, deterministically. Your
job is to stay inside it:

- Use only figures present in report-facts.json.
- If a check has status **failed**, do not present that figure as fact. Report it in
  the data-quality section as a discrepancy, with both values.
- Items listed as **skipped** are not errors — they are figures that cannot be rebuilt
  from other figures (a base measure reads table data the bundle does not carry).
  Treat them as the model's own direct readings.
- Reproduce the ledger as a **Verification** section at the end of the document
  (status, counts, digest, and the checks). The reader must be able to see the proof.

Produce, in this order:

1. **Executive summary** — the report's story in 3-5 sentences, plus a KPI strip of
   the headline measures. Say what the business should conclude, not just the values.
2. **Key findings & watch-items** — 4-6 items, each tagged **Strength / Watch / Risk**,
   that SYNTHESISE across pages (connect numbers that sit on different pages).
3. **Page by page** — for each page: its purpose (the decision it supports), the
   headline figures, and "what it tells you" (interpretation).
4. **Measure glossary** — each measure defined in plain business language, with the
   DAX kept for the technical reader. A measure marked `"helper": true` never appears
   on a visual but the reported figures depend on it; document it, and say so. Its
   value, where one could be read, is in `modelValues`.
5. **Data model & quality notes** — the relationships, every item in model.notes, and
   any verification check whose status is "failed".
6. **Methodology** — state that figures were read at the report's default state (no
   slicers), and that the findings are analytical (a reading of the figures, not new data).
7. **Verification** — reproduce the verification ledger: status, counts, facts digest,
   and the checks that were run. Say that they were computed by code, not by you, and
   that `node verify.mjs` re-runs them.

Rules:
- Use ONLY figures present in report-facts.json. Never invent or estimate a number.
- A visual may carry `data.table` — the rows behind it, with `headers` and the first
  `categoryCount` columns as row labels. Quote any cell from it directly; that is what
  lets you state a figure the client can see in the screenshot. If `truncated` is true,
  only `rowsShown` of `rowsTotal` rows are present — say so rather than implying the
  table is complete, and never total a truncated column.
- Format numbers per each field's "unit" (currency / percent / number).
- **Currency:** use `meta.currency.symbol` for every monetary figure. If it is null,
  write the number with no currency symbol at all and say the currency is not recorded.
  NEVER default to "$".
- **Never total a measure whose `aggregation` is not `additive`.** `non-additive` (a
  ratio, an average, a distinct count) can never be summed; `semi-additive` (a
  point-in-time balance) can be summed across things but NEVER across time. If a
  `total` finding is absent, that is deliberate — do not compute one yourself, and do
  not describe the rows as adding up to anything.
- **`image` is an internal asset path, not text.** Never print it in the document.
  Embed the image where the format allows it; otherwise write a caption naming the
  visual ("See visual: Revenue by Store") and omit the path entirely.
- **Do not infer Strength / Watch / Risk from the sign or direction of a number.**
  Nothing in this bundle says which direction is good — a falling figure may be an
  improvement and a negative one may be desirable. Tag an item only where the report
  itself supplies the comparison (a target, a variance, a stated threshold), or where
  the business meaning is unambiguous. Otherwise describe the movement factually and
  leave it untagged.
- Where a page or visual has an "image", reference it so the client sees the visual
  beside its meaning.
- Clearly separate FACT (the model's numbers) from ANALYSIS (your interpretation).
- Do not compare figures of different scope (e.g. lifetime Budget vs period Revenue)
  without saying so.
