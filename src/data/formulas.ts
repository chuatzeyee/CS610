export interface Formula {
  name: string
  formula: string
  note: string
  week: string
}

export const formulas: readonly Formula[] = [
  {
    name: "Bayes' theorem",
    formula: 'P(h|D) = P(D|h) · P(h) / P(D)',
    note: 'Posterior = likelihood × prior ÷ evidence. The evidence P(D) is the same for every hypothesis.',
    week: 'W1',
  },
  {
    name: 'MAP hypothesis',
    formula: 'h_MAP = argmax_h P(D|h) · P(h)',
    note: 'Drop P(D) — it does not change the argmax.',
    week: 'W1',
  },
  {
    name: 'MLE hypothesis',
    formula: 'h_MLE = argmax_h P(D|h)',
    note: 'MAP with a uniform prior: if all hypotheses are equally likely a priori, MAP = MLE.',
    week: 'W1',
  },
  {
    name: 'Likelihood of a dataset (i.i.d.)',
    formula: 'P(D|h) = Πᵢ p(xᵢ|h)',
    note: 'Multiply each sample\'s density under the hypothesis; compare hypotheses by this product (or the sum of logs).',
    week: 'W1',
  },
  {
    name: 'Law of total probability',
    formula: 'P(S) = P(S|M)P(M) + P(S|¬M)(1−P(M))',
    note: 'Expands the Bayes denominator when the evidence is not given directly; in general P(D) = Σₕ P(D|h)P(h).',
    week: 'W1',
  },
  {
    name: 'Posterior over classes',
    formula: 'P(Cₖ|x) = p(x|Cₖ)P(Cₖ) / Σⱼ p(x|Cⱼ)P(Cⱼ)',
    note: 'Normalize the likelihood × prior scores so they sum to 1.',
    week: 'W1',
  },
  {
    name: '1D Gaussian density',
    formula: 'p(x) = 1/√(2πσ²) · exp(−(x−μ)²/(2σ²))',
    note: 'A density, not a probability — it can exceed 1 for small σ.',
    week: 'W1',
  },
  {
    name: 'MLE Gaussian fit',
    formula: 'μ = (1/n) Σxᵢ    σ² = (1/n) Σ(xᵢ−μ)²',
    note: 'Population variance — divide by n, not n−1 (the slides use the MLE form).',
    week: 'W1',
  },
  {
    name: 'Multivariate Gaussian',
    formula: 'p(x) = (2π)^(−d/2) |Σ|^(−1/2) · exp(−½(x−μ)ᵀΣ⁻¹(x−μ))',
    note: 'The d-dimensional form; estimating a full Σ needs a lot of data.',
    week: 'W1',
  },
  {
    name: 'Gaussian parameter count',
    formula: 'full Σ: K·(d + d(d+1)/2) + (K−1)    naive (diagonal): K·2d + (K−1)',
    note: 'Why naive Bayes survives high dimensions — parameters grow linearly in d instead of quadratically.',
    week: 'W1',
  },
  {
    name: 'Naive Bayes classifier',
    formula: 'C = argmaxₖ P(Cₖ) · Πᵢ P(xᵢ|Cₖ)',
    note: 'Assumes attributes are conditionally independent given the class.',
    week: 'W1',
  },
  {
    name: 'Discrete conditional estimate',
    formula: 'P(xᵢ = v | Cₖ) = count(v, Cₖ) / count(Cₖ)',
    note: 'Just counting — e.g. P(sunny|Yes) = 2/9 in Play Tennis.',
    week: 'W1',
  },
  {
    name: 'Laplace smoothing',
    formula: "P(w|C) = (count(w,C) + 1) / (Σw' count(w',C) + |V|)",
    note: 'Add 1 to every count so unseen words get probability 1/(total+|V|) instead of 0. The slides write this ≈ 1/|V|, valid when |V| ≫ total tokens — quote the exact form, mention the approximation.',
    week: 'W1',
  },
  {
    name: 'Multinomial probability',
    formula: 'P(x₁…xᵥ) = n!/(x₁!…xᵥ!) · Πⱼ pⱼ^xⱼ,   n = x₁+…+xᵥ (total rolls / tokens)',
    note: 'Bag probability = number of orderings × probability of one ordering. When classifying, the coefficient is identical for every class — drop it: P(Cₖ|doc) ∝ Πⱼ P(wⱼ|Cₖ)^xⱼ · P(Cₖ).',
    week: 'W1',
  },
  {
    name: 'Empirical rule',
    formula: '68% within μ±σ, 95% within μ±2σ, 99.7% within μ±3σ',
    note: 'Quick sanity checks for Gaussian data.',
    week: 'W1',
  },
  {
    name: 'Curse of dimensionality',
    formula: 'samples needed ≈ sᵈ for s bins per dimension',
    note: 'With 5 bins and 10 features: 5¹⁰ ≈ 9.77 million cells to cover.',
    week: 'W1',
  },
]
