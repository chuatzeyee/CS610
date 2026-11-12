import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NavPill from './components/NavPill'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Quiz from './pages/Quiz'
import MathTrainer from './pages/MathTrainer'
import Lab from './pages/Lab'
import Course from './pages/Course'
import Kahoot from './pages/Kahoot'
import Exam from './pages/Exam'
import Search from './pages/Search'
import Cram from './pages/Cram'
import CheatSheetPrint from './pages/CheatSheetPrint'

export default function App() {
  const printView = useLocation().pathname === '/cheatsheet'
  return (
    <div className="min-h-screen bg-void">
      <main id="main-content" className={printView ? '' : 'pb-24 scroll-smooth'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/math" element={<MathTrainer />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/kahoot" element={<Kahoot />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cram" element={<Cram />} />
          <Route path="/cheatsheet" element={<CheatSheetPrint />} />
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!printView && <NavPill />}
      {!printView && <ScrollToTop />}
    </div>
  )
}
