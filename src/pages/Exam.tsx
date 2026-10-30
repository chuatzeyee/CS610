import { useState } from 'react'
import { ChevronDown, ChevronRight, Eye, EyeOff, FileText, Lightbulb } from 'lucide-react'
import { examFormat, examQuestions, type ExamPart } from '../data/exam'

function Part({ part }: { part: ExamPart }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-edge rounded-md bg-raised/40 p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-ink text-sm leading-relaxed"><span className="font-mono text-glow mr-2">({part.label})</span>{part.prompt}</p>
        <span className="text-xs font-mono text-ink-muted flex-shrink-0">{part.marks} marks</span>
      </div>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs font-medium text-glow hover:text-glow-hover transition-colors"
      >
        {open ? <EyeOff size={14} /> : <Eye size={14} />} {open ? 'Hide model answer' : 'Try it first, then reveal the model answer'}
      </button>
      {open && (
        <ul className="mt-3 space-y-2 animate-fade-in">
          {part.answer.map((line, i) => (
            <li key={i} className="text-sm text-ink-secondary leading-relaxed pl-3 border-l-2 border-glow/30">{line}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Exam() {
  const [expanded, setExpanded] = useState<string | null>(examQuestions[0].id)
  const total = examQuestions.reduce((s, q) => s + q.marks, 0)
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2 flex items-center gap-3"><FileText className="text-glow" /> Sample Exam</h1>
        <p className="text-ink-secondary">
          The official CS610 sample paper with worked model answers. Attempt each part on paper first (with your cheat
          sheet and a calculator), then reveal the answer and compare your working.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-surface border border-edge rounded-lg p-5">
          <h2 className="text-sm font-semibold text-ink mb-3">Format</h2>
          <dl className="space-y-1.5 text-sm">
            {examFormat.facts.map(([k, v]) => (
              <div key={k} className="flex gap-3"><dt className="text-ink-muted w-24 flex-shrink-0">{k}</dt><dd className="text-ink-secondary">{v}</dd></div>
            ))}
          </dl>
        </div>
        <div className="bg-surface border border-edge rounded-lg p-5">
          <h2 className="text-sm font-semibold text-ink mb-3 flex items-center gap-2"><Lightbulb size={15} className="text-s4" /> Strategy</h2>
          <ul className="space-y-2 text-sm text-ink-secondary list-disc pl-4">
            {examFormat.strategy.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        {examQuestions.map(q => {
          const isOpen = expanded === q.id
          return (
            <div key={q.id} className="bg-surface border border-edge rounded-lg">
              <button onClick={() => setExpanded(isOpen ? null : q.id)} className="w-full flex items-center gap-3 p-5 text-left">
                {isOpen ? <ChevronDown size={18} className="text-glow" /> : <ChevronRight size={18} className="text-ink-muted" />}
                <span className="font-mono text-glow text-sm">Q{q.number}</span>
                <span className="flex-1 text-ink font-medium">{q.topic}</span>
                <span className="text-xs font-mono text-ink-muted">{q.weeks} · {q.marks} marks</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4 animate-fade-in">
                  {q.intro && <p className="text-sm text-ink-secondary leading-relaxed">{q.intro}</p>}
                  {q.figure && (
                    <figure className="flex flex-col items-center gap-2">
                      <img src={`${import.meta.env.BASE_URL}${q.figure.src}`} alt={q.figure.caption} className="max-w-sm w-full rounded border border-edge" />
                      <figcaption className="text-xs text-ink-muted text-center max-w-lg">{q.figure.caption}</figcaption>
                    </figure>
                  )}
                  {q.parts.map(p => <Part key={p.label} part={p} />)}
                  {q.examTips && (
                    <div className="text-xs text-ink-muted bg-raised border border-edge rounded px-3 py-2">
                      <span className="text-s4 font-medium">Exam tip: </span>{q.examTips.join(' ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="text-xs text-ink-faint font-mono mt-6 text-center">{examQuestions.length} questions · {total} marks</p>
    </div>
  )
}
