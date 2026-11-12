import { Link } from 'react-router-dom'
import { cheatSheet, type SheetBlock } from '../data/cram'

function Page({ side, blocks }: { side: number; blocks: readonly SheetBlock[] }) {
  return (
    <section className="a4-page">
      <div className="a4-cols">
        {blocks.map(b => (
          <div key={b.title} className="a4-block">
            <p className="a4-title">{b.title}</p>
            {b.lines.map(l => <p key={l}>{l}</p>)}
          </div>
        ))}
      </div>
      <p className="a4-foot">CS610 cheat sheet, side {side}</p>
    </section>
  )
}

export default function CheatSheetPrint() {
  return (
    <div className="a4-root">
      <div className="no-print a4-bar">
        <Link to="/cram?tab=sheet">Back</Link>
        <button onClick={() => window.print()}>Print / save as PDF (A4, margins none, scale 100%)</button>
      </div>
      <Page side={1} blocks={cheatSheet.side1} />
      <Page side={2} blocks={cheatSheet.side2} />
    </div>
  )
}
