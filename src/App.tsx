import { Routes, Route, Navigate } from 'react-router-dom'
import NavPill from './components/NavPill'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Quiz from './pages/Quiz'
import MathTrainer from './pages/MathTrainer'
import Lab from './pages/Lab'
import Course from './pages/Course'

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <main id="main-content" className="pb-24 scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/math" element={<MathTrainer />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <NavPill />
      <ScrollToTop />
    </div>
  )
}
