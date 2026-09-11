import { useEffect, useMemo, useState } from 'react'
import { Check, Lock, Eye, EyeOff, RotateCcw, Lightbulb, Trophy } from 'lucide-react'
import {
  levels,
  parseAnswer,
  isCorrect,
  fmt,
  CORRECT_TO_COMPLETE,
  TIER_NAMES,
  type Tier,
} from '../data/mathdrills'
import { formulas } from '../data/formulas'

interface Progress {
  level: number
  correct: number[]
}

const KEY = 'cs610-math-progress'
const freshProgress = (): Progress => ({ level: 0, correct: levels.map(() => 0) })

function loadProgress(): Progress {
  try {
    const p = JSON.parse(localStorage.getItem(KEY) ?? '')
    if (
      typeof p?.level === 'number' &&
      Array.isArray(p?.correct) &&
      p.correct.length <= levels.length &&
      p.correct.every((c: unknown) => typeof c === 'number')
    )
      // pad with zeros when new levels are added, so old progress survives
      return { level: p.level, correct: [...p.correct, ...levels.slice(p.correct.length).map(() => 0)] }
  } catch {
    /* fall through */
  }
  return freshProgress()
}

const tierFor = (correct: number): Tier => (Math.min(correct, 2) + 1) as Tier

export default function MathTrainer() {
  const [tab, setTab] = useState<'drills' | 'formulas'>('drills')
  const [prog, setProg] = useState<Progress>(loadProgress)
  const [mode, setMode] = useState<'progress' | 'practice'>('progress')
  const [practiceLevel, setPracticeLevel] = useState(0)
  const [practiceTier, setPracticeTier] = useState<Tier>(1)
  const [nonce, setNonce] = useState(0)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [levelUpMsg, setLevelUpMsg] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(prog))
  }, [prog])

  const allDone = prog.correct.every(c => c >= CORRECT_TO_COMPLETE)
  const levelIdx = mode === 'progress' ? prog.level : practiceLevel
  const tier: Tier = mode === 'progress' ? tierFor(prog.correct[levelIdx]) : practiceTier
  const level = levels[levelIdx]

  const problem = useMemo(
    () => level.generate(tier),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [levelIdx, tier, nonce],
  )

  const solved = status === 'correct' || revealed

  const submit = () => {
    if (solved) return
    const val = parseAnswer(input)
    if (val === null) return
    setStatus(isCorrect(val, problem.answer) ? 'correct' : 'wrong')
  }

  const next = () => {
    setLevelUpMsg(null)
    if (status === 'correct' && !revealed && mode === 'progress') {
      const correct = prog.correct.map((c, k) => (k === levelIdx ? c + 1 : c))
      let lvl = prog.level
      if (correct[levelIdx] === CORRECT_TO_COMPLETE && levelIdx < levels.length - 1 && levelIdx === prog.level) {
        lvl = levelIdx + 1
        setLevelUpMsg(`Level ${lvl + 1} unlocked: ${levels[lvl].title}`)
      }
      setProg({ level: lvl, correct })
    }
    setInput('')
    setStatus(null)
    setRevealed(false)
    setShowHint(false)
    setNonce(n => n + 1)
  }

  const goTo = (idx: number, t?: Tier) => {
    setMode('practice')
    setPracticeLevel(idx)
    setPracticeTier(t ?? 1)
    setInput('')
    setStatus(null)
    setRevealed(false)
    setShowHint(false)
    setLevelUpMsg(null)
    setNonce(n => n + 1)
  }

  const backToProgress = () => {
    setMode('progress')
    setInput('')
    setStatus(null)
    setRevealed(false)
    setShowHint(false)
    setNonce(n => n + 1)
  }

  const resetAll = () => {
    setProg(freshProgress())
    backToProgress()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Math Trainer</h1>
        <p className="text-ink-secondary">
          Progressive drills for every calculation in the course so far. Each level builds
          on the last — answer {CORRECT_TO_COMPLETE} correctly to unlock the next, with
          problems stepping up from guided to exam-level as you go. Fresh numbers every
          time; keep a calculator handy.
        </p>
      </div>

      <div className="flex items-center gap-1.5 mb-8">
        {(['drills', 'formulas'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${tab === t ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
          >
            {t === 'drills' ? 'Skill Drills' : 'Formula Bank'}
          </button>
        ))}
      </div>

      {tab === 'formulas' ? (
        <FormulaBank />
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-3">
            {levels.map((lv, idx) => {
              const done = prog.correct[idx] >= CORRECT_TO_COMPLETE
              const unlocked = idx <= prog.level || done
              const active = idx === levelIdx
              return (
                <button
                  key={lv.id}
                  disabled={!unlocked}
                  onClick={() => (mode === 'progress' && idx === prog.level ? undefined : goTo(idx))}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    active
                      ? 'bg-glow-dim text-glow border-glow/30'
                      : done
                        ? 'bg-surface text-correct border-edge hover:border-glow/30'
                        : unlocked
                          ? 'bg-surface text-ink-secondary border-edge hover:text-ink'
                          : 'bg-surface text-ink-faint border-edge cursor-not-allowed'
                  }`}
                >
                  {done ? <Check size={12} /> : unlocked ? null : <Lock size={11} />}
                  <span className="font-mono">{idx + 1}</span> {lv.title}
                </button>
              )
            })}
          </div>

          <div className="flex items-center justify-between mb-4 text-xs">
            <div className="flex items-center gap-3">
              {mode === 'progress' ? (
                <span className="text-ink-muted">
                  Progress:{' '}
                  {[0, 1, 2].map(k => (
                    <span key={k} className={k < Math.min(prog.correct[levelIdx], 3) ? 'text-glow' : 'text-ink-faint'}>
                      ●{' '}
                    </span>
                  ))}
                  <span className="text-ink-faint">· tier: {TIER_NAMES[tier - 1]}</span>
                </span>
              ) : (
                <>
                  <span className="text-ink-muted">Free practice · tier:</span>
                  {([1, 2, 3] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => goTo(practiceLevel, t)}
                      className={`px-2 py-0.5 rounded-full border transition-colors ${practiceTier === t ? 'bg-glow-dim text-glow border-glow/20' : 'text-ink-muted border-edge hover:text-ink'}`}
                    >
                      {TIER_NAMES[t - 1]}
                    </button>
                  ))}
                  <button onClick={backToProgress} className="text-ink-muted hover:text-ink underline underline-offset-2">
                    back to progression
                  </button>
                </>
              )}
            </div>
            <button onClick={resetAll} className="flex items-center gap-1 text-ink-faint hover:text-ink transition-colors">
              <RotateCcw size={11} /> Reset progress
            </button>
          </div>

          {allDone && mode === 'progress' && (
            <div className="flex items-center gap-2 text-sm text-glow bg-glow-dim/50 border border-glow/20 rounded-md px-4 py-2.5 mb-4">
              <Trophy size={15} /> All levels complete — keep drilling exam-tier problems or revisit any level above.
            </div>
          )}
          {levelUpMsg && (
            <div className="flex items-center gap-2 text-sm text-glow bg-glow-dim/50 border border-glow/20 rounded-md px-4 py-2.5 mb-4 animate-fade-in">
              <Trophy size={15} /> {levelUpMsg}
            </div>
          )}

          <div className="bg-surface border border-edge rounded-lg p-6 animate-fade-in" key={`${levelIdx}-${tier}-${nonce}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-ink-muted bg-raised border border-edge rounded-full px-2 py-0.5">{level.week}</span>
              <span className="text-xs font-mono text-glow">Level {levelIdx + 1} · {level.title}</span>
              <span className="text-xs font-mono text-ink-faint">· {TIER_NAMES[tier - 1]}</span>
            </div>
            <p className="text-xs text-ink-muted mb-4">{level.concept}</p>

            {tier === 1 && (
              <div className="text-xs font-mono text-ink-secondary bg-raised border border-edge rounded-md px-3 py-2 mb-4">
                {level.formula}
              </div>
            )}
            {tier === 2 && (
              <div className="mb-4">
                <button
                  onClick={() => setShowHint(h => !h)}
                  className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-glow transition-colors"
                >
                  <Lightbulb size={12} /> {showHint ? 'Hide formula' : 'Show formula hint'}
                </button>
                {showHint && (
                  <div className="text-xs font-mono text-ink-secondary bg-raised border border-edge rounded-md px-3 py-2 mt-2 animate-fade-in">
                    {level.formula}
                  </div>
                )}
              </div>
            )}

            <p className="text-base text-ink leading-relaxed mb-5 whitespace-pre-line">{problem.prompt}</p>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono text-ink-secondary flex-shrink-0">{problem.answerLabel} =</span>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submit()}
                disabled={solved}
                placeholder="e.g. 0.0025, 3/14, 2.19e-5"
                className={`flex-1 bg-raised border rounded-lg px-3 py-2 text-sm font-mono text-ink outline-none transition-colors ${
                  status === 'correct' ? 'border-correct/50' : status === 'wrong' ? 'border-wrong/50' : 'border-edge focus:border-glow/40'
                }`}
              />
              {!solved && (
                <button
                  onClick={submit}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors flex-shrink-0"
                >
                  Check
                </button>
              )}
            </div>
            <p className="text-xs text-ink-faint mb-3">
              Round to at least 4 significant figures (±2% accepted). Fractions and scientific notation OK.
            </p>

            {status === 'wrong' && !revealed && (
              <div className="flex items-center justify-between text-sm text-wrong bg-wrong-dim/40 border border-wrong/30 rounded-md px-4 py-2.5 mb-3 animate-fade-in">
                <span>Not quite — check your setup and try again.</span>
                <button
                  onClick={() => setRevealed(true)}
                  className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
                >
                  <Eye size={13} /> Show solution
                </button>
              </div>
            )}
            {status === 'correct' && !revealed && (
              <div className="flex items-center gap-2 text-sm text-correct bg-correct-dim/40 border border-correct/30 rounded-md px-4 py-2.5 mb-3 animate-fade-in">
                <Check size={15} /> Correct: {problem.answerLabel} = {fmt(problem.answer)}
              </div>
            )}

            {solved && (
              <div className="animate-fade-in">
                <div className="bg-raised border border-edge rounded-md px-4 py-3 mb-4 space-y-1.5">
                  {revealed && (
                    <p className="text-sm text-ink font-medium mb-1">
                      {problem.answerLabel} = {fmt(problem.answer)}
                      <span className="text-xs text-ink-faint font-normal"> (revealed — no progress credit)</span>
                    </p>
                  )}
                  {problem.steps.map((s, k) => (
                    <p key={k} className="text-sm text-ink-secondary leading-relaxed">
                      <span className="font-mono text-glow text-xs mr-2">{k + 1}.</span>
                      {s}
                    </p>
                  ))}
                </div>
                <button
                  onClick={next}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium bg-glow-dim text-glow border border-glow/20 hover:bg-glow/15 transition-colors"
                >
                  Next problem →
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function FormulaBank() {
  const [selfTest, setSelfTest] = useState(false)
  const [shown, setShown] = useState<ReadonlySet<number>>(new Set())

  const toggle = (k: number) => {
    if (!selfTest) return
    setShown(prev => {
      const nextSet = new Set(prev)
      if (nextSet.has(k)) nextSet.delete(k)
      else nextSet.add(k)
      return nextSet
    })
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-secondary">
          Everything worth putting on your A4 cheat sheet. Self-test mode hides the
          formulas — recite each one, then click to check.
        </p>
        <button
          onClick={() => { setSelfTest(s => !s); setShown(new Set()) }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors flex-shrink-0 ml-4 ${selfTest ? 'bg-glow-dim text-glow border-glow/20' : 'bg-surface text-ink-muted border-edge hover:text-ink'}`}
        >
          {selfTest ? <EyeOff size={13} /> : <Eye size={13} />} Self-test
        </button>
      </div>
      <div className="space-y-2.5">
        {formulas.map((f, k) => {
          const hidden = selfTest && !shown.has(k)
          return (
            <div
              key={f.name}
              onClick={() => toggle(k)}
              className={`bg-surface border border-edge rounded-lg px-4 py-3 ${selfTest ? 'cursor-pointer hover:border-glow/30' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-ink">{f.name}</span>
                <span className="text-[10px] font-mono text-glow bg-glow-dim px-1.5 py-0.5 rounded-full border border-glow/10">{f.week}</span>
              </div>
              {hidden ? (
                <p className="text-sm font-mono text-ink-faint">••••••••••••••••• (click to reveal)</p>
              ) : (
                <>
                  <p className="text-sm font-mono text-glow mb-1">{f.formula}</p>
                  <p className="text-xs text-ink-muted">{f.note}</p>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
