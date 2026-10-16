import { useCallback, useEffect, useMemo, useState } from 'react'
import { Gamepad2, Play, RotateCcw, Trophy, Flame, Check, X, Timer } from 'lucide-react'
import { kahootQuestions, kahootSets, type KahootQuestion } from '../data/kahoot'

const TILES = [
  { color: '#e21b3c', shape: '▲' },
  { color: '#1368ce', shape: '◆' },
  { color: '#d89e00', shape: '●' },
  { color: '#26890c', shape: '■' },
] as const

// ponytail: long (calculation-style) questions get 30s, the rest Kahoot's default 20s
const timeLimit = (q: KahootQuestion): number => (q.question.length > 90 ? 30 : 20)

// Kahoot's own formula: full 1000 for an instant answer, decaying to 500 at the buzzer
const pointsFor = (elapsed: number, limit: number): number => Math.round(1000 * (1 - elapsed / limit / 2))

interface Result {
  q: KahootQuestion
  picked: number | null
  points: number
}

type Phase = 'lobby' | 'play' | 'done'

function shuffled<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const bestKey = (setId: string) => `cs610-kahoot-best-${setId}`
const readBest = (setId: string): number => Number(localStorage.getItem(bestKey(setId)) ?? 0)

const setsWithAll = [
  { id: 'all', title: 'Everything (Week 6 mix)', blurb: 'Every question from all sets, shuffled.' },
  ...kahootSets,
].map(s => ({
  ...s,
  count: kahootQuestions.filter(q => s.id === 'all' || q.set === s.id).length,
})).filter(s => s.count > 0)

export default function Kahoot() {
  const [phase, setPhase] = useState<Phase>('lobby')
  const [setId, setSetId] = useState(setsWithAll[0].id)
  const [order, setOrder] = useState<KahootQuestion[]>([])
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null | undefined>(undefined) // undefined = still answering, null = timed out
  const [startedAt, setStartedAt] = useState(0)
  const [now, setNow] = useState(0)
  const [results, setResults] = useState<Result[]>([])
  const [best, setBest] = useState(() => readBest(setsWithAll[0].id))

  const q = order[idx]
  const limit = q ? timeLimit(q) : 20
  const elapsed = Math.min((now - startedAt) / 1000, limit)
  const answered = picked !== undefined
  const score = results.reduce((s, r) => s + r.points, 0)
  const streak = useMemo(() => {
    let n = 0
    for (let i = results.length - 1; i >= 0 && results[i].points > 0; i--) n++
    return n
  }, [results])

  const begin = () => {
    const pool = kahootQuestions.filter(k => setId === 'all' || k.set === setId)
    setOrder(shuffled(pool))
    setIdx(0)
    setResults([])
    setPicked(undefined)
    setStartedAt(Date.now())
    setNow(Date.now())
    setPhase('play')
  }

  const answer = useCallback((choice: number | null) => {
    if (!q || picked !== undefined) return
    const t = (Date.now() - startedAt) / 1000
    const correct = choice === q.answerIndex
    setPicked(choice)
    setResults(rs => [...rs, { q, picked: choice, points: correct ? pointsFor(Math.min(t, limit), limit) : 0 }])
  }, [q, picked, startedAt, limit])

  const next = () => {
    if (idx + 1 >= order.length) {
      const final = score
      if (final > best) {
        localStorage.setItem(bestKey(setId), String(final))
        setBest(final)
      }
      setPhase('done')
      return
    }
    setIdx(i => i + 1)
    setPicked(undefined)
    setStartedAt(Date.now())
    setNow(Date.now())
  }

  useEffect(() => {
    if (phase !== 'play' || answered) return
    const id = setInterval(() => setNow(Date.now()), 100)
    return () => clearInterval(id)
  }, [phase, answered])

  useEffect(() => {
    if (phase === 'play' && !answered && elapsed >= limit) answer(null)
  }, [phase, answered, elapsed, limit, answer])

  useEffect(() => {
    if (phase !== 'play') return
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key)
      if (!answered && n >= 1 && n <= (q?.options.length ?? 0)) answer(n - 1)
      else if (answered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); next() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (phase === 'lobby') {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-ink mb-2 flex items-center gap-3">
            <Gamepad2 className="text-glow" /> Kahoot Practice
          </h1>
          <p className="text-ink-secondary">
            Week 6 Kahoot-style warm-up: timed questions, faster correct answers score more (up to 1000
            points each). Use the mouse or keys 1–4 to answer, Enter for the next question.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {setsWithAll.map(s => (
            <button
              key={s.id}
              onClick={() => { setSetId(s.id); setBest(readBest(s.id)) }}
              className={`w-full text-left p-5 rounded-lg border transition-colors ${setId === s.id ? 'bg-glow-dim/40 border-glow/40' : 'bg-surface border-edge hover:border-glow/30'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-ink">{s.title}</span>
                <span className="text-xs font-mono text-ink-muted">{s.count} questions</span>
              </div>
              <p className="text-sm text-ink-secondary">{s.blurb}</p>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-ink-muted font-mono flex items-center gap-2">
            <Trophy size={14} className="text-s4" /> Best: {best.toLocaleString()}
          </span>
          <button
            onClick={begin}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-glow text-void hover:bg-glow-hover transition-colors"
          >
            <Play size={18} /> Start
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    const right = results.filter(r => r.points > 0).length
    const missed = results.filter(r => r.points === 0)
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        <div className="bg-surface border border-edge rounded-lg p-8 text-center mb-8">
          <Trophy size={40} className="mx-auto text-s4 mb-3" />
          <p className="text-5xl font-bold text-ink font-mono mb-2">{score.toLocaleString()}</p>
          <p className="text-ink-secondary">
            {right} / {results.length} correct · best {Math.max(best, score).toLocaleString()}
          </p>
        </div>

        {missed.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-ink mb-3">Review what you missed</h2>
            <div className="space-y-3">
              {missed.map(({ q: m, picked: p }) => (
                <div key={m.id} className="bg-surface border border-edge rounded-lg p-5">
                  <p className="text-ink mb-2">{m.question}</p>
                  <p className="text-sm mb-1">
                    <span className="text-wrong">{p === null ? 'Time ran out' : `You: ${m.options[p]}`}</span>
                    <span className="text-ink-faint"> · </span>
                    <span className="text-correct">Answer: {m.options[m.answerIndex]}</span>
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{m.explanation}</p>
                  {m.ref && <p className="text-xs text-ink-faint font-mono mt-2">{m.ref}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <button onClick={begin} className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-glow text-void hover:bg-glow-hover transition-colors">
            <RotateCcw size={16} /> Play again
          </button>
          <button onClick={() => setPhase('lobby')} className="px-5 py-2.5 rounded-lg font-medium bg-surface border border-edge text-ink-secondary hover:text-ink transition-colors">
            Choose another set
          </button>
        </div>
      </div>
    )
  }

  if (!q) return null
  const remaining = Math.max(0, Math.ceil(limit - elapsed))
  const last = results[results.length - 1]

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-4 text-sm font-mono text-ink-muted">
        <span>Q{idx + 1} / {order.length}</span>
        <span className="flex items-center gap-4">
          {streak > 1 && <span className="flex items-center gap-1 text-s5"><Flame size={14} /> {streak}</span>}
          <span className="text-ink">{score.toLocaleString()} pts</span>
        </span>
      </div>

      <div className="h-2 bg-raised rounded-full overflow-hidden mb-6">
        <div
          className="h-full rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${100 * (1 - elapsed / limit)}%`, backgroundColor: remaining <= 5 ? '#e21b3c' : '#4ade80' }}
        />
      </div>

      <div className="bg-surface border border-edge rounded-lg p-8 mb-6 text-center relative animate-fade-in" key={q.id}>
        <span className="absolute top-3 right-4 flex items-center gap-1 text-xs font-mono text-ink-muted">
          <Timer size={12} /> {remaining}s
        </span>
        <p className="text-xl sm:text-2xl font-semibold text-ink leading-snug">{q.question}</p>
      </div>

      <div className={`grid gap-3 ${q.options.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {q.options.map((opt, i) => {
          const tile = TILES[i]
          const isAnswer = i === q.answerIndex
          const dim = answered && !isAnswer
          return (
            <button
              key={i}
              onClick={() => answer(i)}
              disabled={answered}
              className="flex items-center gap-4 min-h-20 px-5 py-4 rounded-lg text-left text-white font-semibold text-base sm:text-lg transition-all duration-200 shadow-[inset_0_-4px_0_rgba(0,0,0,0.25)] hover:brightness-110 disabled:cursor-default"
              style={{ backgroundColor: tile.color, opacity: dim ? 0.3 : 1 }}
            >
              <span className="text-2xl w-7 text-center flex-shrink-0" aria-hidden>{tile.shape}</span>
              <span className="flex-1">{opt}</span>
              {answered && isAnswer && <Check size={26} className="flex-shrink-0" />}
              {answered && picked === i && !isAnswer && <X size={26} className="flex-shrink-0" />}
              {!answered && <span className="text-xs font-mono opacity-60 flex-shrink-0">{i + 1}</span>}
            </button>
          )
        })}
      </div>

      {answered && last && (
        <div className="mt-6 animate-fade-in">
          <div className={`rounded-lg px-5 py-3 mb-3 font-semibold text-center ${last.points > 0 ? 'bg-correct-dim/60 text-correct' : 'bg-wrong-dim/60 text-wrong'}`}>
            {last.points > 0 ? `Correct! +${last.points}` : picked === null ? "Time's up!" : 'Incorrect'}
          </div>
          <div className="text-sm text-ink-secondary leading-relaxed bg-surface border border-edge rounded-lg px-5 py-4 mb-4">
            {q.explanation}
            {q.ref && <span className="block text-xs text-ink-faint font-mono mt-2">{q.ref}</span>}
          </div>
          <div className="text-right">
            <button onClick={next} className="px-6 py-2.5 rounded-lg font-semibold bg-glow text-void hover:bg-glow-hover transition-colors">
              {idx + 1 >= order.length ? 'See results' : 'Next →'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
