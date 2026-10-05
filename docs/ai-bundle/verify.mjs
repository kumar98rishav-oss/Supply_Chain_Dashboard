#!/usr/bin/env node
// Independently re-checks this bundle. No dependencies, no network.
//
//   node verify.mjs
//
// Exits 0 if every check passes, 1 otherwise. This does not trust the stored
// ledger: each input is re-read from report-facts.json at its recorded path,
// each expression is re-evaluated, and the facts digest is recomputed.

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
// Strip a UTF-8 BOM: editors on Windows add one, and JSON.parse rejects it.
const facts = JSON.parse(readFileSync(join(here, 'report-facts.json'), 'utf8').replace(/^\uFEFF/, ''))
const ledger = facts.verification
if (!ledger) { console.error('No verification block in report-facts.json.'); process.exit(1) }

// --- digest (same algorithm the bundle used) --------------------------------
const fnv = (s, seed) => {
  let h = seed >>> 0
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0 }
  return h >>> 0
}
const digestOf = (json) =>
  fnv(json, 0x811c9dc5).toString(16).padStart(8, '0') + fnv(json, 0x01000193).toString(16).padStart(8, '0')

const bare = { ...facts }
delete bare.verification
const digest = digestOf(JSON.stringify(bare))
const digestOk = digest === ledger.factsDigest

// --- resolve a "/" path inside the facts ------------------------------------
// A ref may end in "#sum(N)", meaning "the sum of column N of the table at that
// path". That is recomputed here from the rows, never read from a stored total.
const walk = (path) => {
  let node = bare
  for (const part of path.split('/')) {
    if (node == null) return undefined
    node = node[/^\d+$/.test(part) ? Number(part) : part]
  }
  return node
}
const resolve = (ref) => {
  const hash = ref.indexOf('#sum(')
  if (hash < 0) return walk(ref)
  const col = Number(ref.slice(hash + 5, ref.indexOf(')', hash)))
  const table = walk(ref.slice(0, hash))
  if (!table || !Array.isArray(table.rows)) return undefined
  let sum = 0
  let sawNumber = false
  for (const row of table.rows) {
    const cell = row?.[col]
    if (typeof cell === 'number' && Number.isFinite(cell)) { sum += cell; sawNumber = true }
    else if (cell !== null && cell !== undefined && cell !== '') return undefined
  }
  return sawNumber ? sum : undefined
}

// --- the same tiny evaluator ------------------------------------------------
function evalExpression(expr, inputs) {
  let i = 0
  const ws = () => { while (i < expr.length && expr[i] === ' ') i++ }
  const primary = () => {
    ws()
    if (expr[i] === '(') { i++; const v = parseExpr(); ws(); if (expr[i] !== ')') throw new Error('expected )'); i++; return v }
    if (expr[i] === '{') {
      const end = expr.indexOf('}', i)
      if (end < 0) throw new Error('unterminated {')
      const name = expr.slice(i + 1, end); i = end + 1
      if (!(name in inputs)) throw new Error('unknown input ' + name)
      return inputs[name]
    }
    const m = /^-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(expr.slice(i))
    if (!m) throw new Error('unexpected ' + expr.slice(i, i + 12))
    i += m[0].length
    return Number(m[0])
  }
  const factor = () => { ws(); if (expr[i] === '-') { i++; return -factor() } return primary() }
  const term = () => {
    let v = factor()
    for (;;) { ws(); const op = expr[i]; if (op !== '*' && op !== '/') return v; i++; const r = factor(); v = op === '*' ? v * r : (r === 0 ? 0 : v / r) }
  }
  const parseExpr = () => {
    let v = term()
    for (;;) { ws(); const op = expr[i]; if (op !== '+' && op !== '-') return v; i++; const r = term(); v = op === '+' ? v + r : v - r }
  }
  const out = parseExpr(); ws()
  if (i !== expr.length) throw new Error('trailing ' + expr.slice(i))
  return out
}

const relDiff = (a, b) => Math.abs(a - b) / Math.max(Math.abs(a), Math.abs(b), 1e-12)
const tol = ledger.tolerance ?? 1e-6

let pass = 0, fail = 0, skip = 0
const problems = []

for (const c of ledger.checks) {
  if (c.status === 'skipped') { skip++; continue }

  // Inputs must still be where the ledger says they are, with the same values.
  let inputsOk = true
  const env = {}
  for (const inp of c.inputs ?? []) {
    const live = resolve(inp.ref)
    if (typeof live !== 'number' || relDiff(live, inp.value) > tol) {
      inputsOk = false
      problems.push(c.title + ' — input ' + inp.name + ' at ' + inp.ref + ' is ' + live + ', ledger says ' + inp.value)
    }
    env[inp.name] = live
  }

  if (!c.expression) {
    // A consistency check: every recorded reading must still agree.
    const vals = (c.inputs ?? []).map((x) => resolve(x.ref))
    const ok = inputsOk && vals.every((v) => typeof v === 'number' && relDiff(v, vals[0]) <= tol)
    ok ? pass++ : fail++
    if (!ok) problems.push(c.title + ' — readings disagree')
    continue
  }

  let got
  try { got = evalExpression(c.expression, env) } catch (e) { fail++; problems.push(c.title + ' — ' + e.message); continue }
  const live = resolve(c.actualRef)
  const ok = inputsOk && typeof live === 'number' && relDiff(got, live) <= tol
  ok ? pass++ : fail++
  if (!ok) problems.push(c.title + ' — recomputed ' + got + ', facts report ' + live)
}

console.log('Bundle:      ' + (facts.meta?.reportName ?? '(unnamed)'))
console.log('Facts digest ' + (digestOk ? 'OK  ' + digest : 'MISMATCH — expected ' + ledger.factsDigest + ', got ' + digest))
console.log('')
console.log(pass + ' checks passed, ' + fail + ' failed, ' + skip + ' not checkable')
for (const p of problems) console.log('  x ' + p)
if (!fail && digestOk) console.log('\nEvery figure that can be re-derived from this bundle re-derives correctly.')
process.exit(fail === 0 && digestOk ? 0 : 1)
