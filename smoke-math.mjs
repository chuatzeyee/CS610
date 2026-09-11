import { chromium } from 'playwright-core'
import assert from 'node:assert'

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] })
const page = await browser.newPage()
const errors = []
page.on('pageerror', e => errors.push(String(e)))

await page.goto('http://localhost:4173/CS610/#/', { waitUntil: 'networkidle' })
assert(await page.getByRole('link', { name: /Math Trainer/ }).isVisible(), 'home card missing')

await page.getByRole('navigation').getByRole('link', { name: 'Math' }).click()
await page.waitForSelector('text=Skill Drills')

// progression: solve Level 1 tiers 1..3 by parsing the prompt, expect Level 2 unlock
for (let i = 0; i < 3; i++) {
  const prompt = await page.locator('p.text-base').textContent()
  const xs = prompt.match(/\{([\d,\s]+)\}/)[1].split(',').map(Number)
  const muGiven = prompt.match(/μ = (\d+)\./)
  const mean = xs.reduce((a, b) => a + b, 0) / xs.length
  const mu = muGiven ? Number(muGiven[1]) : mean
  const answer = prompt.includes('σ²') ? xs.reduce((s, x) => s + (x - mu) ** 2, 0) / xs.length : mean
  await page.getByPlaceholder(/0\.0025/).fill(String(answer))
  await page.keyboard.press('Enter')
  await page.waitForSelector('text=Correct:')
  await page.getByRole('button', { name: 'Next problem →' }).click()
}
await page.waitForSelector('text=Level 2 unlocked: Bayes theorem')
console.log('progression + level-up OK')

// wrong answer → reveal path
await page.getByPlaceholder(/0\.0025/).fill('999999')
await page.keyboard.press('Enter')
await page.waitForSelector('text=Not quite')
await page.getByRole('button', { name: /Show solution/ }).click()
await page.waitForSelector('text=revealed — no progress credit')
await page.getByRole('button', { name: 'Next problem →' }).click()
console.log('wrong/reveal path OK')

// free practice: level 1 is completed → clickable; tier chips appear
await page.getByRole('button', { name: /1 Fit a Gaussian/ }).click()
await page.waitForSelector('text=Free practice')
await page.getByRole('button', { name: 'Exam', exact: true }).click()
assert((await page.locator('p.text-base').textContent()).includes('Exam-style'), 'exam tier prompt')
await page.getByRole('button', { name: 'back to progression' }).click()
await page.waitForSelector('text=Bayes theorem', { timeout: 5000 })
console.log('free practice OK')

// locked levels stay locked
assert(await page.getByRole('button', { name: /6 Text & multinomial/ }).isDisabled(), 'level 6 should be locked')
assert(await page.getByRole('button', { name: /12 Logistic regression/ }).isDisabled(), 'level 12 should be locked')

// week chip shows on the active level
await page.waitForSelector('text=Level 2 · Bayes theorem')
assert(await page.locator('span', { hasText: /^W1$/ }).first().isVisible(), 'week chip missing')

// formula bank + self-test
await page.getByRole('button', { name: 'Formula Bank' }).click()
await page.waitForSelector("text=Bayes' theorem")
await page.getByRole('button', { name: /Self-test/ }).click()
await page.waitForSelector('text=click to reveal')
await page.locator('text=Laplace smoothing').click()
await page.waitForSelector('text=(count(w,C) + 1)')
console.log('formula bank OK')

// progress persisted across reload
await page.reload({ waitUntil: 'networkidle' })
await page.getByRole('button', { name: 'Skill Drills' }).click()
await page.waitForSelector('text=Level 2 · Bayes theorem')
console.log('persistence OK')

// new content: quiz topic filter, lab pills, topics sessions
await page.getByRole('navigation').getByRole('link', { name: 'Quiz' }).click()
await page.getByRole('button', { name: 'Logistic', exact: true }).click()
await page.waitForSelector('text=· Logistic')
await page.getByRole('navigation').getByRole('link', { name: 'Lab' }).click()
await page.getByRole('button', { name: /W3 ·/ }).click()
await page.waitForSelector('text=Key takeaways')
await page.getByRole('navigation').getByRole('link', { name: 'Topics' }).click()
await page.waitForSelector('text=Logistic Regression')
console.log('new W1a/W2/W3 content OK')

assert.deepEqual(errors, [], 'JS errors: ' + errors.join('; '))
await browser.close()
console.log('ALL SMOKE TESTS PASSED')
