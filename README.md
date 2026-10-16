# CS610 MLDeck

Study guide portal for SMU CS610 Applied Machine Learning.

**Live:** https://chuatzeyee.github.io/CS610/

- **Topics & Glossary** — lecture content by segment + searchable term glossary
- **Practice Quiz** — MCQ bank with worked explanations (incl. Bayes calculation drills)
- **Math Trainer** — progressive calculation drills (16 skill levels × 3 tiers, guided → exam-style) with fresh random numbers, worked solutions, and a cheat-sheet formula bank with self-test mode
- **Lab Walkthroughs** — the weekly notebooks (naive Bayes through CNNs and image filters) explained step by step
- **Kahoot Practice** — timed, speed-scored quick-fire rounds: the instructor's in-class Kahoot (ensembles & NN) plus Week 6 CNN lecture and lab questions
- **Course Map** — assessment weights, schedule, policies

Currently covers **Weeks 1–4 and 6–7**: introduction and naive Bayes, probability/linear algebra/information theory, regression, logistic regression, decision trees and ensembles, CNNs, and sequence models/attention/Transformers. Week 5 (neural networks) not yet ingested.

## Dev

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run deploy   # publish dist/ to gh-pages branch
```

React 19 · Vite · Tailwind 4 · HashRouter (GitHub Pages friendly). Content lives in `src/data/*.ts`.
