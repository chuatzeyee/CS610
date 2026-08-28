export type Tier = 1 | 2 | 3

export interface Problem {
  prompt: string
  answerLabel: string
  answer: number
  steps: readonly string[]
}

export interface DrillLevel {
  id: string
  title: string
  concept: string
  formula: string
  generate: (tier: Tier) => Problem
}

export const TIER_NAMES = ['Guided', 'Standard', 'Exam'] as const
export const CORRECT_TO_COMPLETE = 3

const ri = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1))
const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)]
const shuffle = <T,>(arr: readonly T[]): T[] => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1))

export function fmt(x: number): string {
  if (x === 0) return '0'
  const ax = Math.abs(x)
  if (ax >= 0.001 && ax < 1e6) return String(Number(x.toPrecision(4)))
  return x.toExponential(3)
}

export function parseAnswer(s: string): number | null {
  const t = s.trim()
  const frac = t.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/)
  if (frac && Number(frac[2]) !== 0) return Number(frac[1]) / Number(frac[2])
  if (t === '') return null
  const n = Number(t)
  return Number.isFinite(n) ? n : null
}

export function isCorrect(user: number, answer: number): boolean {
  return Math.abs(user - answer) <= Math.max(Math.abs(answer) * 0.02, 1e-12)
}

// pairs of ±d around mu, so the sample mean is exactly mu
function balancedData(n: number, mu: number): { xs: number[]; variance: number } {
  const ds: number[] = []
  for (let k = 0; k < n / 2; k++) ds.push(ri(1, 4))
  const xs = shuffle(ds.flatMap(d => [mu + d, mu - d]))
  const variance = (2 * ds.reduce((s, d) => s + d * d, 0)) / n
  return { xs, variance }
}

const setStr = (xs: readonly number[]) => `{${xs.join(', ')}}`

function genGaussianFit(tier: Tier): Problem {
  if (tier === 1) {
    const xs = Array.from({ length: 4 }, () => ri(1, 12))
    const sum = xs.reduce((a, b) => a + b, 0)
    const mu = sum / 4
    return {
      prompt: `You observe the samples ${setStr(xs)} and fit a Gaussian by maximum likelihood. What is the MLE estimate of the mean μ?`,
      answerLabel: 'μ',
      answer: mu,
      steps: [
        `The MLE mean is the sample average: μ = (1/n) Σxᵢ.`,
        `Sum: ${xs.join(' + ')} = ${sum}.`,
        `μ = ${sum}/4 = ${fmt(mu)}.`,
      ],
    }
  }
  const n = tier === 2 ? 4 : 6
  const mu = ri(5, 9)
  const { xs, variance } = balancedData(n, mu)
  const sum = xs.reduce((a, b) => a + b, 0)
  const sqDevs = xs.map(x => (x - mu) ** 2)
  return {
    prompt:
      tier === 2
        ? `Fit a Gaussian by MLE to ${setStr(xs)}. The mean works out to μ = ${mu}. What is the MLE variance σ²? (Slides use the population form: divide by n, not n−1.)`
        : `Exam-style: fit a Gaussian by MLE to the ${n} samples ${setStr(xs)}. Compute μ first, then report the variance σ² (population form, divide by n).`,
    answerLabel: 'σ²',
    answer: variance,
    steps: [
      `μ = (${xs.join(' + ')})/${n} = ${sum}/${n} = ${mu}.`,
      `Squared deviations (xᵢ − μ)²: ${sqDevs.join(', ')}.`,
      `Sum of squared deviations = ${sqDevs.reduce((a, b) => a + b, 0)}.`,
      `σ² = ${sqDevs.reduce((a, b) => a + b, 0)}/${n} = ${fmt(variance)} (divide by n = ${n}, the MLE/population variance).`,
    ],
  }
}

function genBayes(tier: Tier): Problem {
  const s = pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8])
  if (tier === 1) {
    const N = pick([2000, 5000, 10000, 50000])
    const answer = s / N
    return {
      prompt: `A patient has a stiff neck (S). P(S | meningitis) = ${s}, and meningitis strikes 1 in ${N.toLocaleString()} people. Compute the Bayes-rule numerator P(S|M)·P(M).`,
      answerLabel: 'P(S|M)·P(M)',
      answer,
      steps: [
        `P(M) = 1/${N.toLocaleString()} = ${fmt(1 / N)}.`,
        `Numerator = P(S|M) × P(M) = ${s} × ${fmt(1 / N)} = ${fmt(answer)}.`,
        `This is the joint P(S, M) — divide by P(S) to finish Bayes rule (next tier).`,
      ],
    }
  }
  if (tier === 2) {
    const N = pick([2000, 5000, 10000, 50000])
    const K = pick([10, 20, 25, 50])
    const answer = (s * K) / N
    return {
      prompt: `P(S|M) = ${s}, P(M) = 1/${N.toLocaleString()}, and P(S) = 1/${K} (stiff necks are common). Compute the posterior P(M|S) with Bayes rule.`,
      answerLabel: 'P(M|S)',
      answer,
      steps: [
        `Bayes rule: P(M|S) = P(S|M)·P(M) / P(S).`,
        `Numerator = ${s} × 1/${N.toLocaleString()} = ${fmt(s / N)}.`,
        `Divide by P(S) = 1/${K}, i.e. multiply by ${K}: P(M|S) = ${fmt(s / N)} × ${K} = ${fmt(answer)}.`,
        `Tiny posterior despite a strong likelihood — the prior dominates when the disease is rare.`,
      ],
    }
  }
  const prior = pick([0.001, 0.002, 0.005, 0.01, 0.02])
  const f = pick([0.02, 0.04, 0.05, 0.08, 0.1])
  const evidence = s * prior + f * (1 - prior)
  const answer = (s * prior) / evidence
  return {
    prompt: `Exam-style: P(S|M) = ${s}, P(M) = ${prior}, and among people WITHOUT meningitis, P(S|¬M) = ${f}. P(S) is not given — compute it with the law of total probability, then find P(M|S).`,
    answerLabel: 'P(M|S)',
    answer,
    steps: [
      `Total probability: P(S) = P(S|M)P(M) + P(S|¬M)P(¬M).`,
      `P(S) = ${s} × ${prior} + ${f} × ${fmt(1 - prior)} = ${fmt(s * prior)} + ${fmt(f * (1 - prior))} = ${fmt(evidence)}.`,
      `P(M|S) = P(S|M)P(M) / P(S) = ${fmt(s * prior)} / ${fmt(evidence)} = ${fmt(answer)}.`,
    ],
  }
}

function genPosteriors(tier: Tier): Problem {
  if (tier === 1) {
    const p1 = pick([0.3, 0.4, 0.5, 0.6, 0.7])
    const p2 = Number((1 - p1).toFixed(1))
    const l1 = ri(5, 95) / 100
    const l2 = ri(5, 95) / 100
    const s1 = l1 * p1
    const s2 = l2 * p2
    const answer = s1 / (s1 + s2)
    return {
      prompt: `Two classes. Priors: P(C₁) = ${p1}, P(C₂) = ${p2}. For an input x, the likelihoods are p(x|C₁) = ${l1}, p(x|C₂) = ${l2}. Compute the posterior P(C₁|x).`,
      answerLabel: 'P(C₁|x)',
      answer,
      steps: [
        `Unnormalized scores: s₁ = ${l1} × ${p1} = ${fmt(s1)}; s₂ = ${l2} × ${p2} = ${fmt(s2)}.`,
        `Normalize: P(C₁|x) = s₁ / (s₁ + s₂) = ${fmt(s1)} / ${fmt(s1 + s2)} = ${fmt(answer)}.`,
      ],
    }
  }
  const priors = shuffle([0.5, 0.3, 0.2])
  const ls = Array.from({ length: 3 }, () => ri(2, 900) / 1000)
  const scores = ls.map((l, k) => l * priors[k])
  const total = scores.reduce((a, b) => a + b, 0)
  const j = tier === 2 ? ri(0, 2) : scores.indexOf(Math.max(...scores))
  const answer = scores[j] / total
  const given = ls.map((l, k) => `p(x|C${k + 1}) = ${l}, P(C${k + 1}) = ${priors[k]}`).join('; ')
  return {
    prompt:
      tier === 2
        ? `Three classes, one input x. ${given}. Compute the posterior P(C${j + 1}|x).`
        : `Exam-style: three classes, one input x. ${given}. Which class does the MAP rule pick, and what is that class's posterior? Enter the winning posterior.`,
    answerLabel: tier === 2 ? `P(C${j + 1}|x)` : 'winning posterior',
    answer,
    steps: [
      `Scores sₖ = p(x|Cₖ)·P(Cₖ): ${scores.map((sc, k) => `s${k + 1} = ${fmt(sc)}`).join(', ')}.`,
      ...(tier === 3 ? [`MAP picks the largest score: class C${j + 1} (s = ${fmt(scores[j])}).`] : []),
      `Evidence = ${scores.map(fmt).join(' + ')} = ${fmt(total)}.`,
      `Posterior = ${fmt(scores[j])} / ${fmt(total)} = ${fmt(answer)}.`,
    ],
  }
}

function gauss1d(x: number, mu: number, sigma: number) {
  const exponent = -((x - mu) ** 2) / (2 * sigma ** 2)
  const coeff = 1 / (sigma * Math.sqrt(2 * Math.PI))
  return { exponent, coeff, density: coeff * Math.exp(exponent) }
}

function gaussParams() {
  const mu = ri(10, 30)
  const sigma = pick([2, 3, 4, 5])
  const x = mu + pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6])
  return { mu, sigma, x }
}

function genDensity(tier: Tier): Problem {
  if (tier === 3) {
    // slide 5: which Gaussian better explains the data? P(D|h) = Π p(xᵢ|h)
    let xs: number[], g1: { mu: number; sigma: number }, g2: { mu: number; sigma: number }, L1: number, L2: number
    do {
      xs = Array.from({ length: 3 }, () => ri(2, 12))
      g1 = { mu: ri(3, 11), sigma: pick([2, 3, 4]) }
      g2 = { mu: ri(3, 11), sigma: pick([2, 3, 4]) }
      const like = (g: { mu: number; sigma: number }) => xs.reduce((p, x) => p * gauss1d(x, g.mu, g.sigma).density, 1)
      L1 = like(g1)
      L2 = like(g2)
    } while ((g1.mu === g2.mu && g1.sigma === g2.sigma) || Math.abs(L1 - L2) < 1e-15)
    const win = L1 > L2 ? 1 : 2
    const answer = Math.max(L1, L2)
    const densStr = (g: { mu: number; sigma: number }, L: number) =>
      xs.map(x => fmt(gauss1d(x, g.mu, g.sigma).density)).join(' × ') + ` = ${fmt(L)}`
    return {
      prompt: `Exam-style (which hypothesis explains the data?): two candidate Gaussians for the i.i.d. dataset ${setStr(xs)}. G₁ has μ = ${g1.mu}, σ = ${g1.sigma}; G₂ has μ = ${g2.mu}, σ = ${g2.sigma}. Compute both dataset likelihoods P(D|G) = Πᵢ p(xᵢ|G) and enter the larger one.`,
      answerLabel: 'winning P(D|G)',
      answer,
      steps: [
        `Evaluate each Gaussian's density at every sample, then multiply (i.i.d.).`,
        `P(D|G₁) = ${densStr(g1, L1)}.`,
        `P(D|G₂) = ${densStr(g2, L2)}.`,
        `G${win} explains the data better — its likelihood ${fmt(answer)} is larger.`,
      ],
    }
  }
  const { mu, sigma, x } = gaussParams()
  const { exponent, coeff, density } = gauss1d(x, mu, sigma)
  if (tier === 1) {
    return {
      prompt: `A Gaussian has μ = ${mu} and σ = ${sigma}. For x = ${x}, compute just the exponent of the density, −(x−μ)²/(2σ²). (It will be negative.)`,
      answerLabel: 'exponent',
      answer: exponent,
      steps: [
        `(x − μ)² = (${x} − ${mu})² = ${(x - mu) ** 2}.`,
        `2σ² = 2 × ${sigma ** 2} = ${2 * sigma ** 2}.`,
        `Exponent = −${(x - mu) ** 2}/${2 * sigma ** 2} = ${fmt(exponent)}.`,
      ],
    }
  }
  return {
    prompt: `A Gaussian has μ = ${mu} and σ = ${sigma}. Evaluate the full density p(x) = (1/√(2πσ²))·exp(−(x−μ)²/(2σ²)) at x = ${x}.`,
    answerLabel: 'p(x)',
    answer: density,
    steps: [
      `Exponent = −(${x}−${mu})²/(2·${sigma}²) = −${(x - mu) ** 2}/${2 * sigma ** 2} = ${fmt(exponent)}.`,
      `Coefficient = 1/(σ√(2π)) = 1/(${sigma} × 2.5066) = ${fmt(coeff)}.`,
      `p(${x}) = ${fmt(coeff)} × e^${fmt(exponent)} = ${fmt(density)}.`,
    ],
  }
}

function genNaiveBayes(tier: Tier): Problem {
  if (tier === 1) {
    const prior = pick([0.3, 0.4, 0.5, 0.6, 0.7])
    const c1 = ri(1, 9) / 10
    const c2 = ri(1, 9) / 10
    const answer = prior * c1 * c2
    return {
      prompt: `Naive Bayes with two attributes. P(C) = ${prior}, P(a₁|C) = ${c1}, P(a₂|C) = ${c2}. Compute the class's unnormalized score P(C)·P(a₁|C)·P(a₂|C).`,
      answerLabel: 'score',
      answer,
      steps: [
        `Naive Bayes assumes attributes are conditionally independent given the class, so the likelihood is a product.`,
        `Score = ${prior} × ${c1} × ${c2} = ${fmt(answer)}.`,
      ],
    }
  }
  if (tier === 2) {
    let pA: number, a1: number, a2: number, b1: number, b2: number, sA: number, sB: number
    do {
      pA = pick([0.3, 0.4, 0.5, 0.6, 0.7])
      ;[a1, a2, b1, b2] = Array.from({ length: 4 }, () => ri(1, 9) / 10)
      sA = pA * a1 * a2
      sB = (1 - pA) * b1 * b2
    } while (Math.abs(sA - sB) < 1e-9)
    const win = sA > sB ? 'A' : 'B'
    const answer = Math.max(sA, sB)
    return {
      prompt: `Two classes. P(A) = ${pA}, P(B) = ${fmt(1 - pA)}. Conditionals for the observed attributes: P(a₁|A) = ${a1}, P(a₂|A) = ${a2}; P(a₁|B) = ${b1}, P(a₂|B) = ${b2}. Compute both scores — which class does NB predict? Enter the winning score.`,
      answerLabel: 'winning score',
      answer,
      steps: [
        `Score(A) = ${pA} × ${a1} × ${a2} = ${fmt(sA)}.`,
        `Score(B) = ${fmt(1 - pA)} × ${b1} × ${b2} = ${fmt(sB)}.`,
        `NB predicts class ${win} (larger score, ${fmt(answer)}). Scores are unnormalized — normalize only if asked for a posterior.`,
      ],
    }
  }
  const nY = pick([8, 9, 10])
  const nN = 14 - nY
  const attrs = ['Outlook = sunny', 'Humidity = high', 'Wind = strong']
  let cY: number[], cN: number[], sY: number, sN: number
  do {
    cY = attrs.map(() => ri(1, nY - 1))
    cN = attrs.map(() => ri(1, nN - 1))
    sY = (nY / 14) * cY.reduce((p, c) => (p * c) / nY, 1)
    sN = (nN / 14) * cN.reduce((p, c) => (p * c) / nN, 1)
  } while (Math.abs(sY - sN) < 1e-9)
  const win = sY > sN ? 'Yes' : 'No'
  const answer = Math.max(sY, sN)
  const condStr = (cs: number[], n: number) => attrs.map((a, k) => `P(${a}|·) = ${cs[k]}/${n}`).join(', ')
  return {
    prompt: `Exam-style (Play Tennis). Of 14 days, ${nY} are Play=Yes and ${nN} are Play=No. From the counts: for Yes, ${condStr(cY, nY)}; for No, ${condStr(cN, nN)}. A new day is sunny, high humidity, strong wind. Compute both NB scores and enter the score of the predicted class.`,
    answerLabel: 'winning score',
    answer,
    steps: [
      `Priors: P(Yes) = ${nY}/14, P(No) = ${nN}/14.`,
      `Score(Yes) = ${nY}/14 × ${cY.map(c => `${c}/${nY}`).join(' × ')} = ${fmt(sY)}.`,
      `Score(No) = ${nN}/14 × ${cN.map(c => `${c}/${nN}`).join(' × ')} = ${fmt(sN)}.`,
      `Predict ${win} — its score ${fmt(answer)} is larger.`,
    ],
  }
}

// slides 38-39: classify a document with multinomial NB; the coefficient cancels across classes
function genDocClassify(): Problem {
  const rowSets = [[0.5, 0.3, 0.2], [0.6, 0.3, 0.1], [0.4, 0.4, 0.2], [0.7, 0.2, 0.1]] as const
  let pA: number, probsA: number[], probsB: number[], counts: number[], sA: number, sB: number
  do {
    pA = pick([0.3, 0.4, 0.5, 0.6, 0.7])
    probsA = shuffle(pick(rowSets))
    probsB = shuffle(pick(rowSets))
    counts = shuffle(pick([[2, 1, 0], [1, 1, 1], [2, 1, 1], [3, 1, 0]] as const))
    sA = probsA.reduce((p, q, k) => p * q ** counts[k], pA)
    sB = probsB.reduce((p, q, k) => p * q ** counts[k], 1 - pA)
  } while (Math.abs(sA - sB) < 1e-12)
  const win = sA > sB ? 1 : 2
  const answer = Math.max(sA, sB)
  const rowStr = (ps: number[]) => ps.map((q, k) => `P(w${k + 1}) = ${q}`).join(', ')
  const docStr = counts.map((c, k) => (c > 0 ? `${c}× w${k + 1}` : null)).filter(Boolean).join(', ')
  const termStr = (ps: number[]) => counts.map((c, k) => (c > 0 ? `${ps[k]}^${c}` : null)).filter(Boolean).join(' × ')
  return {
    prompt: `Exam-style (multinomial NB): two document classes with priors P(C₁) = ${pA}, P(C₂) = ${fmt(1 - pA)}. Word probabilities — C₁: ${rowStr(probsA)}; C₂: ${rowStr(probsB)}. A new document contains {${docStr}}. The multinomial coefficient is identical for both classes, so drop it: compute score(Cₖ) = P(Cₖ)·Πⱼ P(wⱼ|Cₖ)^xⱼ for both and enter the winning score.`,
    answerLabel: 'winning score',
    answer,
    steps: [
      `Score(C₁) = ${pA} × ${termStr(probsA)} = ${fmt(sA)}.`,
      `Score(C₂) = ${fmt(1 - pA)} × ${termStr(probsB)} = ${fmt(sB)}.`,
      `Predict C${win} (score ${fmt(answer)}). The dropped coefficient n!/(x₁!…xᵥ!) multiplies both scores equally, so it never changes the winner.`,
    ],
  }
}

function genMultinomial(tier: Tier): Problem {
  const pL = pick([0.4, 0.5, 0.6])
  const pO = (1 - pL) / 5
  if (tier === 1) {
    const k = ri(1, 2)
    const rolls = shuffle([...Array(k).fill(6), ...Array.from({ length: 4 - k }, () => ri(1, 5))])
    const answer = pL ** k * pO ** (4 - k)
    return {
      prompt: `A loaded die has P(6) = ${pL} and the other five faces equally likely. You roll it 4 times and see the exact sequence (${rolls.join(', ')}). What is the probability of this ordered sequence?`,
      answerLabel: 'P(sequence)',
      answer,
      steps: [
        `Each non-6 face has probability (1 − ${pL})/5 = ${fmt(pO)}.`,
        `Rolls are independent — multiply: ${rolls.map(r => (r === 6 ? String(pL) : fmt(pO))).join(' × ')}.`,
        `P = ${pL}^${k} × ${fmt(pO)}^${4 - k} = ${fmt(answer)}.`,
      ],
    }
  }
  if (tier === 2) {
    const counts = pick([[2, 1, 1], [3, 1], [2, 2]] as const)
    const faces = shuffle([1, 2, 3, 4, 5]).slice(0, counts.length)
    if (Math.random() < 0.6) faces[0] = 6
    const coeff = 24 / counts.reduce((p: number, c) => p * fact(c), 1)
    const prob = counts.reduce((p: number, c, k) => p * (faces[k] === 6 ? pL : pO) ** c, 1)
    const answer = coeff * prob
    const bag = counts.map((c, k) => `${c}× face ${faces[k]}`).join(', ')
    return {
      prompt: `Same loaded die (P(6) = ${pL}, others equal). In 4 rolls you get the BAG of outcomes {${bag}} — order does not matter. Use the multinomial formula: what is the probability of this bag?`,
      answerLabel: 'P(bag)',
      answer,
      steps: [
        `Orderings: 4!/(${counts.map(c => `${c}!`).join('·')}) = 24/${counts.reduce((p: number, c) => p * fact(c), 1)} = ${coeff}.`,
        `One ordering has probability ${counts.map((c, k) => `${faces[k] === 6 ? pL : fmt(pO)}^${c}`).join(' × ')} = ${fmt(prob)}.`,
        `P(bag) = ${coeff} × ${fmt(prob)} = ${fmt(answer)}.`,
      ],
    }
  }
  if (Math.random() < 0.5) return genDocClassify()
  const c = pick([0, 0, ri(1, 20), ri(1, 20)])
  const T = pick([100, 250, 500, 1000])
  const V = pick([1000, 5000, 10000, 50000])
  const answer = (c + 1) / (T + V)
  return {
    prompt: `Exam-style (Laplace smoothing): in class C's training text there are ${T.toLocaleString()} word tokens in total, the word w appears ${c} time(s), and the vocabulary has |V| = ${V.toLocaleString()} words. Compute the smoothed estimate P(w|C) = (count(w,C)+1)/(total+|V|).`,
    answerLabel: 'P(w|C)',
    answer,
    steps: [
      `Numerator: count + 1 = ${c} + 1 = ${c + 1}${c === 0 ? ' (an unseen word still gets nonzero probability — that is the point of smoothing)' : ''}.`,
      `Denominator: total tokens + |V| = ${T.toLocaleString()} + ${V.toLocaleString()} = ${(T + V).toLocaleString()}.`,
      `P(w|C) = ${c + 1}/${(T + V).toLocaleString()} = ${fmt(answer)}.`,
    ],
  }
}

export const levels: readonly DrillLevel[] = [
  {
    id: 'fit',
    title: 'Fit a Gaussian (MLE)',
    concept: 'Estimate μ and σ² from data — the building block of every generative model this week.',
    formula: 'μ = (1/n) Σxᵢ    σ² = (1/n) Σ(xᵢ − μ)²   (divide by n, not n−1)',
    generate: genGaussianFit,
  },
  {
    id: 'bayes',
    title: 'Bayes theorem',
    concept: 'Invert a conditional probability: from P(symptom|disease) to P(disease|symptom).',
    formula: 'P(h|D) = P(D|h)·P(h) / P(D)',
    generate: genBayes,
  },
  {
    id: 'posterior',
    title: 'Posteriors over classes',
    concept: 'Score each class with likelihood × prior, then normalize so the posteriors sum to 1.',
    formula: 'P(Cₖ|x) = p(x|Cₖ)P(Cₖ) / Σⱼ p(x|Cⱼ)P(Cⱼ)',
    generate: genPosteriors,
  },
  {
    id: 'density',
    title: 'Gaussian densities',
    concept: 'Evaluate the 1D Gaussian pdf, then multiply across i.i.d. samples to compare hypotheses.',
    formula: 'p(x) = 1/√(2πσ²) · exp(−(x−μ)²/(2σ²))    P(D|h) = Πᵢ p(xᵢ|h)',
    generate: genDensity,
  },
  {
    id: 'nb',
    title: 'Naive Bayes decisions',
    concept: 'Combine a prior with a product of per-attribute conditionals and pick the larger score.',
    formula: 'C = argmaxₖ P(Cₖ) · Πᵢ P(xᵢ|Cₖ)',
    generate: genNaiveBayes,
  },
  {
    id: 'text',
    title: 'Text & multinomial',
    concept: 'Sequence vs bag probabilities, classifying documents with multinomial NB, and Laplace smoothing for unseen words.',
    formula: 'P(bag) = n!/(x₁!…xᵥ!) · Πpⱼ^xⱼ  (n = total tokens)    P(w|C) = (count+1)/(total+|V|)',
    generate: genMultinomial,
  },
]
