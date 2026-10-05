# Verification ledger — Supply Chain

**FAILED** · 23 passed · 1 failed · 77 not checkable · engine `bivd-verify/1.0` · facts digest `273a64298ad6006f`

Every check below was computed by code when this bundle was written — not by a language model. Each one re-derives a reported number from other reported numbers and compares the two, within a relative tolerance of 0.000001. Re-run them yourself with `node verify.mjs`.

## Measures re-derived from their own DAX

_Each measure recomputed from the measures it references._

- **SKIP** — Active SKU-Months is the model's own direct reading — it reads the column Fact_Inventory[DaysOfSupply], so there is nothing to re-derive it from.
- **SKIP** — Avg Inventory Value is the model's own direct reading — it reads the column Fact_Inventory[SnapshotDate], so there is nothing to re-derive it from.
- **SKIP** — Avg Lead Time (Actual) is the model's own direct reading — it reads the column Fact_Purchases[ReceivedDate], so there is nothing to re-derive it from.
- **SKIP** — Avg Lead Time Variance is the model's own direct reading — it reads the column Fact_Purchases[ActualLeadTimeDays], so there is nothing to re-derive it from.
- **SKIP** — Avg Planned Lead Time is the model's own direct reading — it reads the column Fact_Purchases[PlannedLeadTimeDays], so there is nothing to re-derive it from.
- **SKIP** — Avg Transit Days is the model's own direct reading — it reads the column Fact_Shipments[TransitDays], so there is nothing to re-derive it from.
- **SKIP** — CY_line is the model's own direct reading — it uses syntax this checker does not evaluate (":"), so there is nothing to re-derive it from.
- **SKIP** — Excess Inventory % could not be checked — no default-state value was read for Excess Inventory % itself.
- **SKIP** — Excess Inventory Value is the model's own direct reading — it reads the column Fact_Inventory[SnapshotDate], so there is nothing to re-derive it from.
- **PASS** — Freight % of Sales = ( Freight Cost ) / ( Revenue ) → 584,884.29 , 11,687,137.85 gives 0.050045; the model reports 0.050045.
- **SKIP** — Freight Cost is the model's own direct reading — it reads the column Fact_Shipments[FreightCost], so there is nothing to re-derive it from.
- **SKIP** — Freight per Order is the model's own direct reading — it uses COUNTROWS(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Freight Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **PASS** — Gross Margin % = ( Gross_Profit ) / ( Revenue ) → 3,668,131.89 , 11,687,137.85 gives 0.313861; the model reports 0.313861.
- **SKIP** — Gross Margin Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Gross Sales (List Price) is the model's own direct reading — it reads the column Fact_Sales[OrderQty], so there is nothing to re-derive it from.
- **SKIP** — Gross_Profit is the model's own direct reading — it reads the column Fact_Sales[ProfitAmount], so there is nothing to re-derive it from.
- **SKIP** — High-Risk Spend % is the model's own direct reading — it uses CALCULATE(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — High-Risk Supplier Spend is the model's own direct reading — it reads the column Dim_Supplier[RiskTier], so there is nothing to re-derive it from.
- **SKIP** — In_full % is the model's own direct reading — it reads the column Fact_Shipments[InFullFlag], so there is nothing to re-derive it from.
- **SKIP** — Inventory Turn Over (Annul) is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Inventory Turns Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — On_Time % is the model's own direct reading — it reads the column Fact_Shipments[OnTimeFlag], so there is nothing to re-derive it from.
- **SKIP** — OTD% is the model's own direct reading — it reads the column Fact_Purchases[OnTimeFlag], so there is nothing to re-derive it from.
- **SKIP** — OTIF is the model's own direct reading — it reads the column Fact_Shipments[InFullFlag], so there is nothing to re-derive it from.
- **SKIP** — OTIF At Risk is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — OTIF On Track is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — OTIF Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — OTIF Watch is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — OTIF% is the model's own direct reading — it uses COUNTROWS(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL % of Net Revenue is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL % of Net Revenue PY is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Amount is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Anchor Year is the model's own direct reading — it reads the column Fact_Sales[OrderDate], so there is nothing to re-derive it from.
- **SKIP** — PL Contribution is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **PASS** — PL Contribution Margin % = ( PL Contribution ) / ( PL Net Revenue ) → 1,548,815.98 , 6,132,777.99 gives 0.252547; the model reports 0.252547.
- **SKIP** — PL Contribution Margin % PY is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Contribution Margin Var pp is the model's own direct reading — it uses IF(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Contribution Var % is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL CY is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Discount % of Gross Sales is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Discount % of Gross Sales PY is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Discount % of Gross Sales Var pp is the model's own direct reading — it uses IF(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Freight % of Net Revenue is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Freight % of Net Revenue PY is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Freight % of Net Revenue Var pp is the model's own direct reading — it uses IF(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Gross Profit is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Gross Profit Var % is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Net Revenue is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Net Revenue Var % is the model's own direct reading — it reads the column 'PL Lines'[LineID], so there is nothing to re-derive it from.
- **SKIP** — PL Period Label is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL PY is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Var could not be checked — no default-state value was read for PL Var itself.
- **SKIP** — PL Var % is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — PL Var pp could not be checked — no default-state value was read for PL Var pp itself.
- **SKIP** — PO Count is the model's own direct reading — it reads the column Fact_Purchases[POID], so there is nothing to re-derive it from.
- **SKIP** — PO Spend is the model's own direct reading — it reads the column Fact_Purchases[POAmount], so there is nothing to re-derive it from.
- **SKIP** — PO Spend High Risk is the model's own direct reading — it reads the column Dim_Supplier[RiskTier], so there is nothing to re-derive it from.
- **SKIP** — PO Spend Low Risk is the model's own direct reading — it reads the column Dim_Supplier[RiskTier], so there is nothing to re-derive it from.
- **SKIP** — PO Spend Medium Risk is the model's own direct reading — it reads the column Dim_Supplier[RiskTier], so there is nothing to re-derive it from.
- **SKIP** — PPV (Purchase Price Variance) is the model's own direct reading — it reads the column Fact_Purchases[ActualUnitCost], so there is nothing to re-derive it from.
- **SKIP** — PPV % is the model's own direct reading — it reads the column Fact_Purchases[StandardUnitCost], so there is nothing to re-derive it from.
- **SKIP** — PY_line is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Revenue is the model's own direct reading — it reads the column Fact_Sales[SalesAmount], so there is nothing to re-derive it from.
- **SKIP** — Revenue YoY % (vs PY) is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Selected Supplier is the model's own direct reading — it reads the column Dim_Supplier[SupplierName], so there is nothing to re-derive it from.
- **SKIP** — Selected WareHouse is the model's own direct reading — it reads the column Dim_Warehouse[WarehouseName], so there is nothing to re-derive it from.
- **SKIP** — Shipments Count is the model's own direct reading — it uses COUNTROWS(), which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Stock-out SKU-Months is the model's own direct reading — it reads the column Fact_Inventory[StockoutFlag], so there is nothing to re-derive it from.
- **PASS** — Stockout Rate % = ( Stock-out SKU-Months ) / ( Active SKU-Months ) → 853 , 6,495 gives 0.131332; the model reports 0.131332.
- **SKIP** — Stockout Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier Concentration Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier Defect Rate % is the model's own direct reading — it reads the column Fact_Purchases[DefectQty], so there is nothing to re-derive it from.
- **SKIP** — Supplier Defect Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier OTD At Risk is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier OTD On Track is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier OTD Status is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Supplier OTD Watch is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Top Supplier Spend % (Concentration) is the model's own direct reading — it filters rows on a condition, which reads table data, so there is nothing to re-derive it from.
- **SKIP** — Total COGS is the model's own direct reading — it reads the column Fact_Sales[COGSAmount], so there is nothing to re-derive it from.
- **SKIP** — Total Discount Value is the model's own direct reading — it reads the column Fact_Sales[OrderQty], so there is nothing to re-derive it from.

## The same measure read on several visuals

_A measure must report the same value everywhere it appears._

- **PASS** — Avg Lead Time (Actual) is read 2 times across the report; every reading is 28.995155.
- **PASS** — OTD% is read 3 times across the report; every reading is 0.877907.
- **FAIL** — OTIF is read 3 times across the report; every reading is 8,042 (largest relative difference 1.0e+0).
    - expected `8042`, reported `8042`, relative difference `0.9998938766847076`
- **PASS** — PO spend is read 4 times across the report; every reading is 16,196,894.73 (largest relative difference 3.5e-16).
- **PASS** — PO Spend is read 6 times across the report; every reading is 16,196,894.73 (largest relative difference 3.5e-16).
- **PASS** — PPV (Purchase Price Variance) is read 2 times across the report; every reading is 63,464.88.
- **PASS** — Revenue is read 6 times across the report; every reading is 11,687,137.85 (largest relative difference 1.6e-16).
- **PASS** — Supplier Defect Rate % is read 2 times across the report; every reading is 0.02899.

## Percentage shares

_A reported share must equal its own value divided by its own total._

- **PASS** — On "Revenue by WarehouseName" ("Executive Control Tower"), Los Angeles DC is 2,408,247.12 of 11,687,137.85 — 20.61%, matching the reported share.
- **PASS** — On "Revenue by Category" ("Executive Control Tower"), Electronics is 3,915,690 of 11,687,137.85 — 33.50%, matching the reported share.
- **PASS** — On "PO spend by Supplier" ("Operations & Supplier Risk"), Pacific Rim Traders is 3,105,050.28 of 16,196,894.73 — 19.17%, matching the reported share.
- **PASS** — On "Planned lead time by Supplier risk tier" ("Operations & Supplier Risk"), High is 37.94955 of 78.658855 — 48.25%, matching the reported share.
- **PASS** — On "Low risk by Supplier" ("Operations & Supplier Risk"), Quanta Supply is 1,507,181.77 of 3,339,700.41 — 45.13%, matching the reported share.
- **PASS** — On "PO spend by Product" ("Supplier Scorecard"), Electronics Accessories Flex is 1,763,859.56 of 16,196,894.73 — 10.89%, matching the reported share.
- **PASS** — On "PO spend by Month" ("Supplier Scorecard"), 2024-12-01T00:00:00.0000000 is 1,019,836.12 of 16,196,894.73 — 6.30%, matching the reported share.
- **PASS** — On "PO spend by Category" ("Supplier Scorecard"), Electronics is 5,760,878.01 of 16,196,894.73 — 35.57%, matching the reported share.
- **PASS** — On "This year by Line item" ("Supply Chain P&L"), Gross sales (list price) is 6,454,901 of 11,152,019.207 — 57.88%, matching the reported share.
- **PASS** — On "Net revenue by Warehouse" ("Supply Chain P&L"), Los Angeles DC is 1,297,179.96 of 6,132,777.99 — 21.15%, matching the reported share.
- **PASS** — On "This year by Line item" ("Supply Chain P&L"), Gross sales (list price) is 6,454,901 of 11,152,019.207 — 57.88%, matching the reported share.
- **PASS** — On "Change vs prior year by Line item" ("Supply Chain P&L"), Gross sales (list price) is 611,457.75 of 895,838.008 — 68.26%, matching the reported share.

## Not checkable from this bundle

_These are reported openly rather than silently omitted. A base measure reads table data the bundle does not carry, so it cannot be rebuilt from other numbers — it is the model's own direct reading._

- **Active SKU-Months** — reads the column Fact_Inventory[DaysOfSupply]
- **Avg Inventory Value** — reads the column Fact_Inventory[SnapshotDate]
- **Avg Lead Time (Actual)** — reads the column Fact_Purchases[ReceivedDate]
- **Avg Lead Time Variance** — reads the column Fact_Purchases[ActualLeadTimeDays]
- **Avg Planned Lead Time** — reads the column Fact_Purchases[PlannedLeadTimeDays]
- **Avg Transit Days** — reads the column Fact_Shipments[TransitDays]
- **CY_line** — uses syntax this checker does not evaluate (":")
- **Excess Inventory %** — no default-state value was read for Excess Inventory % itself
- **Excess Inventory Value** — reads the column Fact_Inventory[SnapshotDate]
- **Freight Cost** — reads the column Fact_Shipments[FreightCost]
- **Freight per Order** — uses COUNTROWS(), which reads table data
- **Freight Status** — filters rows on a condition, which reads table data
- **Gross Margin Status** — filters rows on a condition, which reads table data
- **Gross Sales (List Price)** — reads the column Fact_Sales[OrderQty]
- **Gross_Profit** — reads the column Fact_Sales[ProfitAmount]
- **High-Risk Spend %** — uses CALCULATE(), which reads table data
- **High-Risk Supplier Spend** — reads the column Dim_Supplier[RiskTier]
- **In_full %** — reads the column Fact_Shipments[InFullFlag]
- **Inventory Turn Over (Annul)** — filters rows on a condition, which reads table data
- **Inventory Turns Status** — filters rows on a condition, which reads table data
- **On_Time %** — reads the column Fact_Shipments[OnTimeFlag]
- **OTD%** — reads the column Fact_Purchases[OnTimeFlag]
- **OTIF** — reads the column Fact_Shipments[InFullFlag]
- **OTIF At Risk** — filters rows on a condition, which reads table data
- **OTIF On Track** — filters rows on a condition, which reads table data
- **OTIF Status** — filters rows on a condition, which reads table data
- **OTIF Watch** — filters rows on a condition, which reads table data
- **OTIF%** — uses COUNTROWS(), which reads table data
- **PL % of Net Revenue** — reads the column 'PL Lines'[LineID]
- **PL % of Net Revenue PY** — reads the column 'PL Lines'[LineID]
- **PL Amount** — filters rows on a condition, which reads table data
- **PL Anchor Year** — reads the column Fact_Sales[OrderDate]
- **PL Contribution** — reads the column 'PL Lines'[LineID]
- **PL Contribution Margin % PY** — reads the column 'PL Lines'[LineID]
- **PL Contribution Margin Var pp** — uses IF(), which reads table data
- **PL Contribution Var %** — reads the column 'PL Lines'[LineID]
- **PL CY** — filters rows on a condition, which reads table data
- **PL Discount % of Gross Sales** — reads the column 'PL Lines'[LineID]
- **PL Discount % of Gross Sales PY** — reads the column 'PL Lines'[LineID]
- **PL Discount % of Gross Sales Var pp** — uses IF(), which reads table data
- **PL Freight % of Net Revenue** — reads the column 'PL Lines'[LineID]
- **PL Freight % of Net Revenue PY** — reads the column 'PL Lines'[LineID]
- **PL Freight % of Net Revenue Var pp** — uses IF(), which reads table data
- **PL Gross Profit** — reads the column 'PL Lines'[LineID]
- **PL Gross Profit Var %** — reads the column 'PL Lines'[LineID]
- **PL Net Revenue** — reads the column 'PL Lines'[LineID]
- **PL Net Revenue Var %** — reads the column 'PL Lines'[LineID]
- **PL Period Label** — filters rows on a condition, which reads table data
- **PL PY** — filters rows on a condition, which reads table data
- **PL Var** — no default-state value was read for PL Var itself
- **PL Var %** — filters rows on a condition, which reads table data
- **PL Var pp** — no default-state value was read for PL Var pp itself
- **PO Count** — reads the column Fact_Purchases[POID]
- **PO Spend** — reads the column Fact_Purchases[POAmount]
- **PO Spend High Risk** — reads the column Dim_Supplier[RiskTier]
- **PO Spend Low Risk** — reads the column Dim_Supplier[RiskTier]
- **PO Spend Medium Risk** — reads the column Dim_Supplier[RiskTier]
- **PPV (Purchase Price Variance)** — reads the column Fact_Purchases[ActualUnitCost]
- **PPV %** — reads the column Fact_Purchases[StandardUnitCost]
- **PY_line** — filters rows on a condition, which reads table data
- **Revenue** — reads the column Fact_Sales[SalesAmount]
- **Revenue YoY % (vs PY)** — filters rows on a condition, which reads table data
- **Selected Supplier** — reads the column Dim_Supplier[SupplierName]
- **Selected WareHouse** — reads the column Dim_Warehouse[WarehouseName]
- **Shipments Count** — uses COUNTROWS(), which reads table data
- **Stock-out SKU-Months** — reads the column Fact_Inventory[StockoutFlag]
- **Stockout Status** — filters rows on a condition, which reads table data
- **Supplier Concentration Status** — filters rows on a condition, which reads table data
- **Supplier Defect Rate %** — reads the column Fact_Purchases[DefectQty]
- **Supplier Defect Status** — filters rows on a condition, which reads table data
- **Supplier OTD At Risk** — filters rows on a condition, which reads table data
- **Supplier OTD On Track** — filters rows on a condition, which reads table data
- **Supplier OTD Status** — filters rows on a condition, which reads table data
- **Supplier OTD Watch** — filters rows on a condition, which reads table data
- **Top Supplier Spend % (Concentration)** — filters rows on a condition, which reads table data
- **Total COGS** — reads the column Fact_Sales[COGSAmount]
- **Total Discount Value** — reads the column Fact_Sales[OrderQty]
