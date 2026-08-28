import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, Search, BookOpen, ListFilter } from 'lucide-react'
import { sessions } from '../data/topics'
import { definitions } from '../data/definitions'
import type { Topic } from '../data/types'

const sessionColors = ['text-s1', 'text-s2', 'text-s3', 'text-s4', 'text-s5']

function highlight(text: string, q: string) {
  if (!q) return text
  const i = text.toLowerCase().indexOf(q.toLowerCase())
  if (i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <span className="highlight-match">{text.slice(i, i + q.length)}</span>
      {text.slice(i + q.length)}
    </>
  )
}

function TopicCard({ topic, color }: { topic: Topic; color: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-surface border border-edge rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-raised transition-colors"
      >
        <span className={`font-semibold ${open ? 'text-ink' : 'text-ink-secondary'}`}>{topic.title}</span>
        <ChevronDown size={18} className={`text-ink-muted flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in space-y-4">
          {topic.sections.map(s => (
            <div key={s.heading}>
              <h4 className={`text-sm font-semibold mb-2 ${color}`}>{s.heading}</h4>
              <ul className="space-y-2">
                {s.points.map((p, i) => (
                  <li key={i} className="text-sm text-ink flex gap-2.5 leading-relaxed">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${color} bg-current opacity-70`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const sources = ['All', ...Array.from(new Set(definitions.map(d => d.source)))]

export default function Topics() {
  const [params, setParams] = useSearchParams()
  const view = params.get('view') === 'glossary' ? 'glossary' : 'topics'
  const [query, setQuery] = useState('')
  const [source, setSource] = useState('All')

  const filteredDefs = useMemo(() => {
    const q = query.trim().toLowerCase()
    return definitions.filter(d =>
      (source === 'All' || d.source === source) &&
      (!q || d.term.toLowerCase().includes(q) || d.definition.toLowerCase().includes(q)),
    )
  }, [query, source])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-ink mb-2">Topics & Glossary</h1>
        <p className="text-ink-secondary">Week 1 lecture content by segment, and every term you need.</p>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setParams({})}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${view === 'topics' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <BookOpen size={15} /> Topics
        </button>
        <button
          onClick={() => setParams({ view: 'glossary' })}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${view === 'glossary' ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
        >
          <ListFilter size={15} /> Glossary ({definitions.length})
        </button>
      </div>

      {view === 'topics' ? (
        <div className="space-y-10">
          {sessions.map((s, si) => (
            <section key={s.id}>
              <div className="mb-4">
                <h2 className={`text-xl font-bold ${sessionColors[si % sessionColors.length]}`}>
                  {s.title}
                </h2>
                {s.subtitle && <p className="text-sm text-ink-muted mt-1">{s.subtitle}</p>}
              </div>
              <div className="space-y-3">
                {s.topics.map(t => (
                  <TopicCard key={t.id} topic={t} color={sessionColors[si % sessionColors.length]} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div>
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search terms and definitions…"
              className="w-full bg-surface border border-edge rounded-lg pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:border-glow/40"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {sources.map(c => (
              <button
                key={c}
                onClick={() => setSource(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${source === c ? 'bg-glow-dim text-glow border border-glow/20' : 'bg-surface text-ink-muted border border-edge hover:text-ink'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filteredDefs.map(d => (
              <div key={d.term} className="bg-surface border border-edge rounded-lg px-5 py-4">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <h3 className="font-semibold text-ink">{highlight(d.term, query)}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-raised px-2 py-0.5 rounded border border-edge flex-shrink-0">{d.source}</span>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">{highlight(d.definition, query)}</p>
                {d.example && (
                  <p className="text-xs text-ink-muted leading-relaxed mt-2">
                    <span className="text-glow font-mono">e.g.</span> {d.example}
                  </p>
                )}
              </div>
            ))}
            {filteredDefs.length === 0 && (
              <p className="text-center text-ink-muted py-12">No terms match your search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
