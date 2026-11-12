import { chromium } from 'playwright-core'
import assert from 'node:assert'

const BASE = 'http://localhost:4173/CS610/#'
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] })
const page = await browser.newPage()
const errors = []
page.on('pageerror', e => errors.push(String(e)))

await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.getByRole('navigation').getByRole('link', { name: 'Cram' }).click()
await page.waitForSelector('text=The steps, in study order')
const steps = await page.locator('button[aria-label="Mark done"]').count()
assert(steps >= 15, `expected >= 15 steps, got ${steps}`)

await page.locator('button[aria-label="Mark done"]').first().click()
assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('cs610-cram-done')).length), 1, 'progress not saved')

await page.getByRole('button', { name: /K-means|k-means/ }).first().click()
await page.waitForSelector('text=1. In plain English')
await page.getByRole('button', { name: 'Show the working' }).first().click()
await page.waitForSelector('text=Answer:')

await page.getByRole('button', { name: 'Calculator', exact: true }).click()
await page.waitForSelector('text=Classic calculator mistakes')
assert(await page.locator('text=Display:').count() >= 15, 'calculator skills missing')

await page.getByRole('button', { name: 'Cheat sheet', exact: true }).click()
await page.waitForSelector('text=Side 2: concepts')
await page.getByRole('link', { name: /A4 layout/ }).click()
await page.waitForSelector('.a4-page')
await page.evaluate(() => document.fonts.ready)
assert(await page.evaluate(() => document.fonts.check("8pt 'Google Sans Flex'")), 'Google Sans Flex not loaded')
assert.equal(await page.locator('.a4-page').count(), 2, 'need exactly 2 A4 pages')
assert.equal(await page.getByRole('navigation').count(), 0, 'nav should be hidden on print view')

const overflow = await page.evaluate(() => [...document.querySelectorAll('.a4-cols')].map(cols => {
  const box = cols.getBoundingClientRect()
  return [...cols.querySelectorAll('.a4-block')].filter(b => b.getBoundingClientRect().right > box.right + 1 || b.getBoundingClientRect().bottom > box.bottom + 1).length
}))
console.log('blocks overflowing per side:', overflow)
assert(overflow.every(n => n === 0), 'cheat sheet overflows A4')

await page.emulateMedia({ media: 'print' })
await page.pdf({ path: '/tmp/cram/cheatsheet.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true })
await (await import("node:fs/promises")).copyFile("/tmp/cram/cheatsheet.pdf", "public/CS610_cheatsheet.pdf").catch(() => {})

await page.goto(`${BASE}/search?q=bootstrap`, { waitUntil: 'networkidle' })
await page.waitForSelector('text=Cram')

assert.deepEqual(errors, [], `page errors: ${errors.join('\n')}`)
console.log(`OK: ${steps} steps, cheat sheet fits 2 A4 pages, pdf at /tmp/cram/cheatsheet.pdf`)
await browser.close()
