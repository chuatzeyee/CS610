import { FlaskConical, Lightbulb } from 'lucide-react'
import { lab } from '../data/lab'

export default function Lab() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-2.5 mb-2">
          <FlaskConical size={24} className="text-glow" />
          <h1 className="text-3xl font-bold text-ink">{lab.title}</h1>
        </div>
        <p className="text-ink-secondary leading-relaxed">{lab.overview}</p>
      </div>

      <div className="space-y-4 mb-10">
        {lab.steps.map((s, i) => (
          <div key={i} className="bg-surface border border-edge rounded-lg p-5 animate-fade-in" style={{ animationDelay: `${Math.min(i, 6) * 60}ms`, animationFillMode: 'both' }}>
            <h3 className="font-semibold text-ink mb-2">
              <span className="font-mono text-glow mr-2">{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-3">{s.explanation}</p>
            {s.code && (
              <pre className="text-xs font-mono text-ink bg-raised border border-edge rounded-md px-4 py-3 overflow-x-auto whitespace-pre">
                {s.code}
              </pre>
            )}
          </div>
        ))}
      </div>

      <div className="bg-glow-dim/40 border border-glow/15 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb size={18} className="text-glow" />
          <h2 className="font-semibold text-ink">Key takeaways</h2>
        </div>
        <ul className="space-y-2">
          {lab.takeaways.map((t, i) => (
            <li key={i} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
              <span className="text-glow mt-0.5">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
