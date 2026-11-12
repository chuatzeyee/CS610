import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'
import { sessions } from '../data/topics'
import { definitions } from '../data/definitions'
import { questions } from '../data/quiz'
import { formulas } from '../data/formulas'
import { labs } from '../data/lab'
import { kahootQuestions, kahootSets } from '../data/kahoot'
import { examQuestions } from '../data/exam'
import { cramModules, calcGuide } from '../data/cram'

interface Hit {
  kind: string
  title: string
  context: string
  lines: readonly string[]
}

const KINDS = ['Cram', 'Topics', 'Glossary', 'Quiz', 'Formulas', 'Labs', 'Kahoot', 'Exam'] as const
const PAGE = 25

const setTitle = new Map(kahootSets.map(s => [s.id, s.title]))

const index: readonly Hit[] = [
  ...cramModules.flatMap(m => [
    { kind: 'Cram', title: m.title, context: `Cram step, ${m.week}`, lines: [...m.plain, ...m.terms.map(t => `${t.term}: ${t.meaning}`), ...m.recipes.map(r => `${r.title}: ${r.steps.join(' ')}`), ...m.traps] },
    ...m.worked.map(w => ({ kind: 'Cram', title: w.problem, context: `Worked example, ${m.title}`, lines: [...w.steps, `Answer: ${w.answer}`] })),
    ...[...m.explain, ...m.selfCheck].map(qa => ({ kind: 'Cram', title: qa.q, context: m.title, lines: [qa.a] })),
  ]),
  ...calcGuide.skills.map(sk => ({ kind: 'Cram', title: `Calculator: ${sk.title}`, context: sk.usedFor, lines: [...sk.keys, `${sk.example.task}: ${sk.example.keys.join(' ')} = ${sk.example.display}`] })),
  ...sessions.flatMap(session => session.topics.map(topic => ({
    kind: 'Topics',
    title: topic.title,
    context: session.title,
    lines: topic.sections.flatMap(s => s.points.map(p => `${s.heading}: ${p}`)),
  }))),
  ...definitions.map(d => ({
    kind: 'Glossary', title: d.term, context: d.source,
    lines: [d.definition, ...(d.example ? [`Example: ${d.example}`] : [])],
  })),
  ...questions.map(q => ({
    kind: 'Quiz', title: q.question, context: q.topic,
    lines: [`Answer: ${q.options[q.answerIndex]}`, q.explanation],
  })),
  ...formulas.map(f => ({ kind: 'Formulas', title: f.name, context: f.week, lines: [f.formula, f.note] })),
  ...labs.flatMap(lab => lab.steps.map(step => ({
    kind: 'Labs', title: step.title, context: `${lab.week} lab`,
    lines: [step.explanation, ...(step.code ? [step.code] : [])],
  }))),
  ...kahootQuestions.map(k => ({
    kind: 'Kahoot', title: k.question, context: setTitle.get(k.set) ?? k.set,
    lines: [`Answer: ${k.options[k.answerIndex]}`, k.explanation],
  })),
  ...examQuestions.flatMap(q => q.parts.map(p => ({
    kind: 'Exam', title: `Q${p.label}: ${p.prompt}`, context: `Sample exam, ${q.topic}`, lines: p.answer,
  }))),
]

function terms(query: string): string[] {
  return query.toLowerCase().split(/\s+/).filter(Boolean)
}

function score(hit: Hit, words: string[]): number {
  const title = hit.title.toLowerCase()
  const body = hit.lines.join(' ').toLowerCase()
  const context = hit.context.toLowerCase()
  if (!words.every(w => title.includes(w) || body.includes(w) || context.includes(w))) return 0
  return words.reduce((s, w) => s + (title.includes(w) ? 3 : 0) + (body.includes(w) ? 1 : 0), 0)
}

function Highlight({ text, words }: { text: string; words: string[] }) {
  if (!words.length) return <>{text}</>
  const pattern = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return <>{text.split(pattern).map((part, i) => (i % 2 ? <span key={i} className="highlight-match">{part}</span> : part))}</>
}

function Result({ hit, words }: { hit: Hit; words: string[] }) {
  const [open, setOpen] = useState(false)
  const matching = hit.lines.filter(l => words.some(w => l.toLowerCase().includes(w)))
  const shown = open ? hit.lines : (matching.length ? matching : hit.lines).slice(0, 2)
  return (
    <div className="bg-surface border border-edge rounded-lg p-4">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <p className="text-ink font-medium text-sm leading-snug"><Highlight text={hit.title} words={words} /></p>
        <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-raised px-2 py-0.5 rounded border border-edge flex-shrink-0">{hit.kind}</span>
      </div>
      <p className="text-xs text-ink-faint mb-2">{hit.context}</p>
      <ul className="space-y-1.5">
        {shown.map((line, i) => (
          <li key={i} className="text-sm text-ink-secondary leading-relaxed whitespace-pre-line"><Highlight text={line} words={words} /></li>
        ))}
      </ul>
      {hit.lines.length > shown.length || open ? (
        <button onClick={() => setOpen(o => !o)} className="mt-2 text-xs text-glow hover:text-glow-hover">
          {open ? 'Show less' : `Show all ${hit.lines.length} lines`}
        </button>
      ) : null}
    </div>
  )
}

export default function Search() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const [kind, setKind] = useState<string>('All')
  const [limit, setLimit] = useState(PAGE)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    input.current?.focus()
  }, [])

  const words = useMemo(() => terms(query), [query])
  const ranked = useMemo(() => {
    if (!words.length) return []
    return index.map(hit => ({ hit, s: score(hit, words) })).filter(r => r.s > 0).sort((a, b) => b.s - a.s).map(r => r.hit)
  }, [words])
  const counts = useMemo(() => Object.fromEntries(KINDS.map(k => [k, ranked.filter(h => h.kind === k).length])), [ranked])
  const filtered = kind === 'All' ? ranked : ranked.filter(h => h.kind === kind)

  const update = (value: string) => {
    setQuery(value)
    setLimit(PAGE)
    setParams(value ? { q: value } : {}, { replace: true })
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Search</h1>
        <p className="text-ink-secondary">Search everything on the site: lecture notes, glossary, quiz and Kahoot questions, formulas, lab walkthroughs and the sample exam. Every word you type must match.</p>
      </div>

      <div className="relative mb-4">
        <SearchIcon size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          ref={input}
          value={query}
          onChange={e => update(e.target.value)}
          placeholder="e.g. precision recall, dropout, k-means, softmax"
          className="w-full bg-surface border border-edge rounded-lg pl-11 pr-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-glow/40"
        />
      </div>

      {words.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {['All', ...KINDS].map(k => (
            <button
              key={k}
              onClick={() => { setKind(k); setLimit(PAGE) }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${kind === k ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
            >
              {k} <span className="font-mono opacity-70">{k === 'All' ? ranked.length : counts[k]}</span>
            </button>
          ))}
        </div>
      )}

      {words.length > 0 && filtered.length === 0 && <p className="text-ink-muted text-sm">No matches. Try fewer or shorter words.</p>}
      <div className="space-y-3">
        {filtered.slice(0, limit).map((hit, i) => <Result key={`${hit.kind}-${hit.title}-${i}`} hit={hit} words={words} />)}
      </div>
      {filtered.length > limit && (
        <button onClick={() => setLimit(l => l + PAGE)} className="mt-4 w-full py-2.5 rounded-lg text-sm bg-surface border border-edge text-ink-secondary hover:text-ink">
          Show more ({filtered.length - limit} left)
        </button>
      )}
      {!words.length && <p className="text-xs text-ink-faint font-mono text-center mt-8">{index.length.toLocaleString()} searchable items</p>}
    </div>
  )
}
