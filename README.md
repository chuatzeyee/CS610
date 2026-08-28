# CS610 MLDeck

Study guide portal for SMU CS610 Applied Machine Learning.

**Live:** https://chuatzeyee.github.io/CS610/

- **Topics & Glossary** — lecture content by segment + searchable term glossary
- **Practice Quiz** — MCQ bank with worked explanations (incl. Bayes calculation drills)
- **Math Trainer** — progressive calculation drills (6 skill levels × 3 tiers, guided → exam-style) with fresh random numbers, worked solutions, and a cheat-sheet formula bank with self-test mode
- **Lab Walkthrough** — naive Bayes notebook explained step by step
- **Course Map** — assessment weights, schedule, policies

Currently covers **Week 1** (Introduction, Bayesian Learning & Naive Bayes). More weeks added as the term progresses.

## Dev

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run deploy   # publish dist/ to gh-pages branch
```

React 19 · Vite · Tailwind 4 · HashRouter (GitHub Pages friendly). Content lives in `src/data/*.ts`.
