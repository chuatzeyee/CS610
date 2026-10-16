import { chromium } from 'playwright-core'
import assert from 'node:assert'

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] })
const page = await browser.newPage()
const errors = []
page.on('pageerror', e => errors.push(String(e)))
await page.clock.install()

await page.goto('http://localhost:4173/CS610/#/', { waitUntil: 'networkidle' })
assert(await page.getByRole('link', { name: /Kahoot Practice/ }).isVisible(), 'home card missing')

await page.getByRole('navigation').getByRole('link', { name: 'Kahoot' }).click()
await page.waitForSelector('text=Kahoot Practice')
for (const set of ['Everything (all sets)', 'Instructor Kahoot: Decision Trees', 'Instructor Kahoot: Ensembles & NN', 'CNN Lecture', 'CNN & Filter Labs'])
  assert(await page.getByRole('button', { name: new RegExp(set.replace(/[()&]/g, '.')) }).isVisible(), `set missing: ${set}`)

await page.getByRole('button', { name: /Instructor Kahoot: Ensembles/ }).click()
await page.getByRole('button', { name: 'Start' }).click()

// Q1: let the timer expire -> "Time's up!" with 0 points
await page.waitForSelector('text=/Q1 \\/ 9/')
await page.clock.runFor(21_000)
await page.waitForSelector("text=Time's up!")

// Q2..Q9: answer with key 1, each must show feedback + explanation
for (let n = 2; n <= 9; n++) {
  await page.keyboard.press('Enter')
  await page.waitForSelector(`text=/Q${n} \\/ 9/`)
  await page.keyboard.press('1')
  await page.waitForSelector('text=/Correct! \\+\\d+|Incorrect/')
}
await page.getByRole('button', { name: 'See results' }).click()

await page.waitForSelector('text=/\\d \\/ 9 correct/')
assert(await page.locator('text=Time ran out').isVisible(), 'timed-out question not in review')
const best = await page.evaluate(() => localStorage.getItem('cs610-kahoot-best-instructor'))
const scoreText = await page.locator('p.text-5xl').textContent()
console.log(`results: ${scoreText} pts, stored best=${best}`)

assert.deepEqual(errors, [], 'page errors: ' + errors.join('\n'))
await browser.close()
console.log('kahoot smoke: PASS')
