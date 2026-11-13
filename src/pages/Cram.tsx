import { useEffect, useState, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, ChevronDown, ChevronRight, Circle, Eye, EyeOff, GraduationCap, Printer } from 'lucide-react'
import { cramModules, calcGuide, cheatSheet, examStart, schedule, technique, type CramModule, type QA, type SheetBlock } from '../data/cram'

const DONE_KEY = 'cs610-cram-done'
const TABS = [
  { id: 'plan', label: 'Pass plan' },
  { id: 'calc', label: 'Calculator' },
  { id: 'sheet', label: 'Cheat sheet' },
] as const
type TabId = (typeof TABS)[number]['id']

const priorityStyle: Record<CramModule['priority'], string> = {
  must: 'text-glow border-glow/40',
  should: 'text-s4 border-s4/40',
  nice: 'text-ink-muted border-edge-bright',
}

function loadDone(): readonly string[] {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(DONE_KEY) ?? '[]')
    return Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function Reveal({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} className="flex items-center gap-1.5 text-xs font-medium text-glow hover:text-glow-hover">
        {open ? <EyeOff size={13} /> : <Eye size={13} />} {open ? 'Hide' : label}
      </button>
      {open && <div className="mt-2 animate-fade-in">{children}</div>}
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{title}</h3>
      {children}
    </section>
  )
}

function QAList({ items, label }: { items: readonly QA[]; label: string }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div key={item.q} className="border border-edge rounded-md bg-raised/40 p-3 space-y-2">
          <p className="text-sm text-ink">{item.q}</p>
          <Reveal label={label}><p className="text-sm text-ink-secondary leading-relaxed whitespace-pre-line pl-3 border-l-2 border-glow/30">{item.a}</p></Reveal>
        </div>
      ))}
    </div>
  )
}

function ModuleBody({ m }: { m: CramModule }) {
  return (
    <div className="px-5 pb-6 space-y-6 animate-fade-in">
      <p className="text-xs text-s4 bg-raised border border-edge rounded px-3 py-2"><span className="font-semibold">In the exam: </span>{m.examOdds}</p>
      <Section title="1. In plain English">
        {m.plain.map(p => <p key={p} className="text-sm text-ink-secondary leading-relaxed">{p}</p>)}
      </Section>
      <Section title="2. Jargon decoder">
        <dl className="grid sm:grid-cols-2 gap-2">
          {m.terms.map(t => (
            <div key={t.term} className="bg-raised/40 border border-edge rounded px-3 py-2">
              <dt className="text-sm font-medium text-glow">{t.term}</dt>
              <dd className="text-xs text-ink-secondary leading-relaxed mt-0.5">{t.meaning}</dd>
            </div>
          ))}
        </dl>
      </Section>
      {m.recipes.length > 0 && (
        <Section title="3. Step-by-step recipes">
          {m.recipes.map(r => (
            <div key={r.title} className="border border-edge rounded-md p-3">
              <p className="text-sm font-medium text-ink mb-2">{r.title}</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-ink-secondary">{r.steps.map(s => <li key={s}>{s}</li>)}</ol>
            </div>
          ))}
        </Section>
      )}
      {m.worked.length > 0 && (
        <Section title="4. Worked examples (try first, then reveal)">
          {m.worked.map(w => (
            <div key={w.problem} className="border border-edge rounded-md bg-raised/40 p-3 space-y-2">
              <p className="text-sm text-ink whitespace-pre-line">{w.problem}</p>
              <Reveal label="Show the working">
                <ol className="list-decimal pl-5 space-y-1 text-sm text-ink-secondary font-mono">{w.steps.map(s => <li key={s}>{s}</li>)}</ol>
                <p className="mt-2 text-sm text-glow"><span className="font-semibold">Answer: </span>{w.answer}</p>
              </Reveal>
            </div>
          ))}
        </Section>
      )}
      <Section title="5. Likely explain / compare questions"><QAList items={m.explain} label="Show model answer" /></Section>
      <Section title="6. Traps">
        <ul className="list-disc pl-5 space-y-1 text-sm text-ink-secondary">{m.traps.map(t => <li key={t}>{t}</li>)}</ul>
      </Section>
      <Section title="7. Self-check"><QAList items={m.selfCheck} label="Show answer" /></Section>
    </div>
  )
}

function Plan() {
  const [done, setDone] = useState<readonly string[]>(loadDone)
  const [open, setOpen] = useState<string | null>(null)
  useEffect(() => { localStorage.setItem(DONE_KEY, JSON.stringify(done)) }, [done])
  const toggle = (id: string) => setDone(d => (d.includes(id) ? d.filter(x => x !== id) : [...d, id]))
  const hoursLeft = Math.max(0, Math.round((examStart.getTime() - Date.now()) / 36e5))
  const mustLeft = cramModules.filter(m => m.priority === 'must' && !done.includes(m.id)).reduce((s, m) => s + m.minutes, 0)

  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-3 gap-3 text-center">
        <Stat value={`${hoursLeft} h`} label="until the exam" />
        <Stat value={`${done.length}/${cramModules.length}`} label="steps done" />
        <Stat value={`${Math.round(mustLeft / 6) / 10} h`} label="of must-do left" />
      </div>

      <div className="bg-surface border border-edge rounded-lg p-5">
        <h2 className="text-sm font-semibold text-ink mb-3">Your schedule</h2>
        <ol className="space-y-2">
          {schedule.map(s => (
            <li key={s.when} className="text-sm"><span className="font-mono text-glow">{s.when}: </span><span className="text-ink-secondary">{s.what}</span></li>
          ))}
        </ol>
      </div>

      <div className="bg-surface border border-edge rounded-lg p-5">
        <h2 className="text-sm font-semibold text-ink mb-3">How the exam works and how to collect marks</h2>
        <p className="text-sm text-ink-secondary mb-3">2 hours, 7 written questions, 70 marks, no coding and no MCQ. Questions ask you to calculate, compare, explain and justify. See the <Link to="/exam" className="text-glow underline">Sample Exam</Link> for the exact style.</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-secondary">{technique.map(t => <li key={t}>{t}</li>)}</ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-ink">The steps, in study order</h2>
        {cramModules.map((m, i) => {
          const isOpen = open === m.id
          const isDone = done.includes(m.id)
          return (
            <div key={m.id} className={`bg-surface border rounded-lg ${isDone ? 'border-glow/30' : 'border-edge'}`}>
              <div className="flex items-center gap-3 p-4">
                <button onClick={() => toggle(m.id)} aria-label={isDone ? 'Mark not done' : 'Mark done'} className="flex-shrink-0">
                  {isDone ? <CheckCircle2 size={20} className="text-glow" /> : <Circle size={20} className="text-ink-faint hover:text-ink-muted" />}
                </button>
                <button onClick={() => setOpen(isOpen ? null : m.id)} className="flex-1 flex items-center gap-3 text-left min-w-0">
                  <span className="font-mono text-glow text-sm w-6">{i + 1}</span>
                  <span className={`flex-1 font-medium leading-snug ${isDone ? 'text-ink-muted' : 'text-ink'}`}>{m.title}</span>
                  <span className={`hidden sm:inline text-[10px] uppercase font-mono border rounded px-1.5 py-0.5 ${priorityStyle[m.priority]}`}>{m.priority}</span>
                  <span className="text-xs font-mono text-ink-muted text-right flex-shrink-0">{m.week}<br className="sm:hidden" /><span className="hidden sm:inline"> · </span>{m.minutes}m</span>
                  {isOpen ? <ChevronDown size={18} className="text-glow" /> : <ChevronRight size={18} className="text-ink-muted" />}
                </button>
              </div>
              {isOpen && <ModuleBody m={m} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-surface border border-edge rounded-lg p-4">
      <div className="text-2xl font-mono text-glow">{value}</div>
      <div className="text-xs text-ink-muted mt-1">{label}</div>
    </div>
  )
}

function Calculator() {
  return (
    <div className="space-y-6">
      <div className="bg-surface border border-edge rounded-lg p-5">
        <h2 className="text-sm font-semibold text-ink mb-3">Before the exam</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-secondary">{calcGuide.setup.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
      {calcGuide.skills.map((s, i) => (
        <div key={s.id} className="bg-surface border border-edge rounded-lg p-5 space-y-3">
          <div>
            <h3 className="font-medium text-ink"><span className="font-mono text-glow mr-2">{i + 1}</span>{s.title}</h3>
            <p className="text-xs text-ink-muted mt-1">Used for: {s.usedFor}</p>
          </div>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-ink-secondary">{s.keys.map(k => <li key={k}>{k}</li>)}</ol>
          <div className="bg-raised/50 border border-edge rounded p-3 text-sm">
            <p className="text-ink mb-1"><span className="text-s4 font-medium">Example: </span>{s.example.task}</p>
            <p className="font-mono text-xs text-ink-secondary">{s.example.keys.join('  ')}</p>
            <p className="font-mono text-glow mt-1">Display: {s.example.display}</p>
          </div>
          <QAList items={s.drills} label="Show answer" />
        </div>
      ))}
      <div className="bg-surface border border-edge rounded-lg p-5">
        <h2 className="text-sm font-semibold text-ink mb-3">Classic calculator mistakes</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-secondary">{calcGuide.pitfalls.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
    </div>
  )
}

function Blocks({ blocks }: { blocks: readonly SheetBlock[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {blocks.map(b => (
        <div key={b.title} className="break-inside-avoid mb-3 border border-edge rounded p-2.5">
          <p className="text-xs font-semibold text-glow mb-1">{b.title}</p>
          {b.lines.map(l => <p key={l} className="text-xs text-ink-secondary leading-snug">{l.startsWith('Q: ') ? <><b className="text-ink">{l.slice(3, l.indexOf(' A: ') > 0 ? l.indexOf(' A: ') : undefined)}</b>{l.indexOf(' A: ') > 0 ? ` ${l.slice(l.indexOf(' A: ') + 4)}` : ''}</> : l}</p>)}
        </div>
      ))}
    </div>
  )
}

function Sheet() {
  const lines = (side: readonly SheetBlock[]) => side.reduce((n, b) => n + b.lines.length + 1, 0)
  return (
    <div className="space-y-6">
      <div className="bg-surface border border-s4/40 rounded-lg p-5 text-sm text-ink-secondary space-y-2">
        <p><span className="text-s4 font-semibold">Rule: </span>one A4 sheet, both sides. The instructor confirmed on 11 Nov that it can be <span className="text-ink">printed or handwritten</span>, and it is collected at the end of the exam.</p>
        <p>Print it double-sided at 100% scale (no "fit to page"). Before the exam, highlight the blocks you needed in the sample exam and scribble your own notes in the margins.</p>
        <div className="flex flex-wrap gap-4">
          <a href={`${import.meta.env.BASE_URL}CS610_cheatsheet.pdf`} download className="inline-flex items-center gap-2 text-glow hover:text-glow-hover font-medium"><Printer size={15} /> PDF 6.6pt (everything)</a>
          <a href={`${import.meta.env.BASE_URL}CS610_cheatsheet_7pt.pdf`} download className="inline-flex items-center gap-2 text-glow hover:text-glow-hover font-medium"><Printer size={15} /> PDF 7pt (larger, 8 fewer Q&amp;As)</a>
          <Link to="/cheatsheet" className="inline-flex items-center gap-2 text-ink-secondary hover:text-glow font-medium">Open the A4 layout in the browser</Link>
        </div>
      </div>
      <h2 className="text-sm font-semibold text-ink">Side 1: calculations <span className="font-mono text-ink-muted text-xs">({lines(cheatSheet.side1)} lines)</span></h2>
      <Blocks blocks={cheatSheet.side1} />
      <h2 className="text-sm font-semibold text-ink">Side 2: concepts <span className="font-mono text-ink-muted text-xs">({lines(cheatSheet.side2)} lines)</span></h2>
      <Blocks blocks={cheatSheet.side2} />
    </div>
  )
}

export default function Cram() {
  const [params, setParams] = useSearchParams()
  const tab: TabId = TABS.find(t => t.id === params.get('tab'))?.id ?? 'plan'
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2 flex items-center gap-3"><GraduationCap className="text-glow" /> Exam Cram</h1>
        <p className="text-ink-secondary">From zero to pass. Follow the steps in order: each one explains the idea in plain English, then gives a recipe, worked examples and self-checks.</p>
      </div>
      <div className="flex gap-2 mb-8">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setParams({ tab: t.id })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tab === t.id ? 'bg-glow-dim text-glow' : 'text-ink-muted hover:text-ink hover:bg-raised'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'plan' && <Plan />}
      {tab === 'calc' && <Calculator />}
      {tab === 'sheet' && <Sheet />}
    </div>
  )
}
