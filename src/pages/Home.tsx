import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Sigma, FlaskConical, CalendarDays, ArrowRight } from 'lucide-react'
import { sessions } from '../data/topics'
import { definitions } from '../data/definitions'
import { questions } from '../data/quiz'
import { levels } from '../data/mathdrills'
import { lab } from '../data/lab'
import { course } from '../data/course'

const cards = [
  {
    to: '/topics',
    icon: BookOpen,
    title: 'Topics & Glossary',
    description: 'Every Week 1 lecture segment distilled into revision notes, plus a searchable glossary of key terms',
    count: sessions.reduce((sum, s) => sum + s.topics.length, 0) + definitions.length,
    unit: 'entries',
  },
  {
    to: '/quiz',
    icon: ClipboardCheck,
    title: 'Practice Quiz',
    description: 'MCQ bank with worked explanations — recall, concepts, and Bayes-theorem calculation drills',
    count: questions.length,
    unit: 'questions',
  },
  {
    to: '/math',
    icon: Sigma,
    title: 'Math Trainer',
    description: 'Progressive calculation drills for the exam — level up from guided practice to exam-style problems, plus a cheat-sheet formula bank',
    count: levels.length,
    unit: 'skill levels',
  },
  {
    to: '/lab',
    icon: FlaskConical,
    title: 'Lab Walkthrough',
    description: 'The naive Bayes occupancy-detection notebook, explained cell by cell with the key code and outputs',
    count: lab.steps.length,
    unit: 'steps',
  },
  {
    to: '/course',
    icon: CalendarDays,
    title: 'Course Map',
    description: 'Assessment weights, week-by-week schedule, and the ground rules from the course outline',
    count: course.schedule.length,
    unit: 'weeks mapped',
  },
] as const

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="text-xs font-mono text-glow bg-glow-dim px-3 py-1 rounded-full border border-glow/20">
            SMU MITB
          </span>
        </div>
        <h1 className="text-4xl font-bold text-ink mb-2 tracking-tight">
          🧠 CS610 MLDeck
        </h1>
        <p className="text-lg text-glow font-medium mb-6 font-mono tracking-wide">
          {course.courseTitle}
        </p>
        <p className="text-ink-secondary max-w-2xl mx-auto leading-relaxed">
          Study companion for SMU CS610 — Week 1: course introduction, the machine
          learning landscape, Bayesian learning and naive Bayes, plus the
          room-occupancy lab notebook.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map(({ to, icon: Icon, title, description, count, unit }, i) => (
          <Link
            key={to}
            to={to}
            className="group bg-surface border border-edge rounded-lg p-6 hover:border-glow/30 hover:bg-raised transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-glow-dim rounded-lg text-glow group-hover:bg-glow/15 transition-colors duration-200">
                <Icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-semibold text-ink">{title}</h2>
                  <ArrowRight
                    size={16}
                    className="text-ink-faint group-hover:text-glow group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
                <p className="text-sm text-ink-secondary mb-3">{description}</p>
                <span className="text-xs font-medium text-glow bg-glow-dim px-2.5 py-1 rounded-full font-mono border border-glow/10">
                  {count} {unit}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
