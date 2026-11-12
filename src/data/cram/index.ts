import type { CramModule } from './types'
import { foundationModules } from './foundations'
import { classicModules } from './classic'
import { deepModules } from './deep'

export { calcGuide } from './calculator'
export { cheatSheet } from './cheatsheet'
export type * from './types'

export const cramModules: readonly CramModule[] = [...foundationModules, ...classicModules, ...deepModules]
  .slice()
  .sort((a, b) => a.order - b.order)

export const examStart = new Date('2026-11-13T19:30:00+08:00')

export const schedule: readonly { when: string; what: string }[] = [
  { when: 'Tonight, first 15 min', what: 'Read "How the exam works" below. Open the Sample Exam page and just read the 7 questions so you know what you are training for. Do not try to answer yet. Print the cheat sheet now (Cheat sheet tab, A4, double-sided, 100% scale) and keep it next to you while you study.' },
  { when: 'Tonight, block 1 (about 2 h)', what: 'Steps 1 to 5 in order (big picture, validation, metrics, Bayes, naive Bayes). After each step, find that step\'s blocks on the cheat sheet so you know where everything is.' },
  { when: 'Tonight, block 2 (about 2 h)', what: 'Steps 7 to 10 (regression, logistic, trees, ensembles). Do every worked example yourself with the calculator before reading the steps.' },
  { when: 'Tomorrow morning (about 3 h)', what: 'Steps 11, 12 and 15 (neural nets, CNN sizes, k-means). These three are pure calculation marks. Then steps 13 and 14 at "plain English" level only.' },
  { when: 'Tomorrow early afternoon (2 h)', what: 'Sit the Sample Exam on paper, timed, with only your cheat sheet and calculator. Then reveal the model answers and note on your printed sheet where it failed you.' },
  { when: 'Tomorrow late afternoon (1 h)', what: 'Calculator tab: do one drill from every skill. Highlight the cheat-sheet blocks you needed during the sample exam. Step 6 (entropy) if not done.' },
  { when: 'Before you leave', what: 'Non-programmable calculator (plus a spare), printed cheat sheet, pens, student card, charged laptop for Examena. Eat. Arrive early.' },
]

export const technique: readonly string[] = [
  '70 marks in 120 minutes is about 1.7 minutes per mark. Write the marks next to each question and move on when you hit the time.',
  'Do the calculation questions first (naive Bayes, bootstrap, CNN sizes, ROC, k-means). They are the most reliable marks for a beginner.',
  'For every calculation: write the formula, substitute the numbers, then the result. Most marks are for the method, so a slip in arithmetic still scores.',
  'For every explain/compare question: state the point, give the reason, then a small example or formula. Three crisp sentences beat a long paragraph.',
  'Never leave a blank. Write the definition of every term in the question, the relevant formula from your sheet, and what you would do. Partial credit is how you pass.',
  'Keep 4 decimal places in working, round only the final answer. Store intermediate values in the calculator memory instead of retyping. (The worked examples here use full precision, so if you retype rounded values your last digit may differ by 1. That is fine.)',
  'If a question says "justify" or "derive", show the algebra step by step; if it says "increase or decrease", write both formulas and subtract.',
]
