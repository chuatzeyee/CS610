export type QA = { q: string; a: string }

export type Recipe = { title: string; steps: readonly string[] }

export type Worked = { problem: string; steps: readonly string[]; answer: string }

export type Term = { term: string; meaning: string }

export type CramModule = {
  id: string
  order: number
  week: string
  title: string
  priority: 'must' | 'should' | 'nice'
  minutes: number
  examOdds: string
  plain: readonly string[]
  terms: readonly Term[]
  recipes: readonly Recipe[]
  worked: readonly Worked[]
  explain: readonly QA[]
  traps: readonly string[]
  selfCheck: readonly QA[]
}

export type CalcSkill = {
  id: string
  title: string
  usedFor: string
  keys: readonly string[]
  example: { task: string; keys: readonly string[]; display: string }
  drills: readonly QA[]
}

export type CalcGuide = {
  setup: readonly string[]
  skills: readonly CalcSkill[]
  pitfalls: readonly string[]
}

export type SheetBlock = { title: string; lines: readonly string[] }

export type CheatSheet = { side1: readonly SheetBlock[]; side2: readonly SheetBlock[] }
