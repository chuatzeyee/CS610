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
  week: string
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

// ---------- Week 1a: probability, information theory, linear algebra ----------

function genJoint(tier: Tier): Problem {
  if (tier === 3) {
    // axioms: P(A∪B) = P(A) + P(B) − P(A∩B), on a 20-grid so numbers stay clean
    let a: number, b: number, ab: number
    do {
      a = ri(5, 15)
      b = ri(5, 15)
      ab = ri(1, Math.min(a, b))
    } while (a + b - ab > 19)
    const answer = (a + b - ab) / 20
    return {
      prompt: `Exam-style (probability axioms): events A and B have P(A) = ${a}/20, P(B) = ${b}/20, and P(A ∩ B) = ${ab}/20. Compute P(A ∪ B).`,
      answerLabel: 'P(A ∪ B)',
      answer,
      steps: [
        `Union rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) — subtract the overlap so it is not counted twice.`,
        `P(A ∪ B) = ${a}/20 + ${b}/20 − ${ab}/20 = ${a + b - ab}/20 = ${fmt(answer)}.`,
        `Sanity checks from the axioms: P(Ā) = 1 − ${a}/20 = ${fmt(1 - a / 20)}, and P(A ∪ B) ≤ 1.`,
      ],
    }
  }
  // joint table in 32nds, 3 columns (x) × 2 rows (y), like the slide's 32nds table
  let cells: number[][]
  do {
    cells = [0, 1].map(() => [ri(1, 8), ri(1, 8), ri(1, 8)])
  } while (cells.flat().reduce((s, c) => s + c, 0) > 30)
  const rest = 32 - cells.flat().reduce((s, c) => s + c, 0)
  cells[1][2] += rest
  const colSums = [0, 1, 2].map(j => cells[0][j] + cells[1][j])
  const tableStr = cells.map((row, i) => `y${i + 1}: [${row.map(c => `${c}/32`).join(', ')}]`).join('; ')
  if (tier === 1) {
    const j = ri(0, 2)
    const answer = colSums[j] / 32
    return {
      prompt: `A joint distribution P(X, Y) is given as a table (rows = Y, columns = x1, x2, x3, entries in 32nds): ${tableStr}. Compute the marginal P(X = x${j + 1}) using the sum rule.`,
      answerLabel: `P(X = x${j + 1})`,
      answer,
      steps: [
        `Sum rule: marginalize Y out by summing the x${j + 1} column.`,
        `P(X = x${j + 1}) = ${cells[0][j]}/32 + ${cells[1][j]}/32 = ${colSums[j]}/32 = ${fmt(answer)}.`,
      ],
    }
  }
  const j = ri(0, 2)
  const i = ri(0, 1)
  const answer = cells[i][j] / colSums[j]
  return {
    prompt: `Joint table P(X, Y) (rows = Y, columns = x1, x2, x3, entries in 32nds): ${tableStr}. Compute the conditional P(Y = y${i + 1} | X = x${j + 1}).`,
    answerLabel: `P(Y = y${i + 1} | X = x${j + 1})`,
    answer,
    steps: [
      `Conditional = joint ÷ marginal: P(Y|X) = P(X, Y) / P(X).`,
      `Joint: P(Y = y${i + 1}, X = x${j + 1}) = ${cells[i][j]}/32. Marginal (column sum): P(X = x${j + 1}) = ${colSums[j]}/32.`,
      `P(Y = y${i + 1} | X = x${j + 1}) = (${cells[i][j]}/32) / (${colSums[j]}/32) = ${cells[i][j]}/${colSums[j]} = ${fmt(answer)}.`,
    ],
  }
}

// dyadic distributions so every log₂ is an integer
const DYADIC = [
  [1 / 2, 1 / 4, 1 / 4],
  [1 / 2, 1 / 4, 1 / 8, 1 / 8],
  [1 / 4, 1 / 4, 1 / 4, 1 / 4],
  [1 / 2, 1 / 8, 1 / 8, 1 / 8, 1 / 8],
  [1 / 4, 1 / 4, 1 / 4, 1 / 8, 1 / 8],
] as const
const lg2 = (p: number) => Math.log2(p)
const entropy = (ps: readonly number[]) => ps.reduce((s, p) => s - p * lg2(p), 0)
const probStr = (ps: readonly number[]) => `(${ps.map(p => `1/${1 / p}`).join(', ')})`

function genEntropy(tier: Tier): Problem {
  if (tier === 1) {
    const k = ri(2, 12)
    return {
      prompt: `An outcome has probability p = 1/${2 ** k}. Compute its uncertainty −log₂ p, i.e. how many bits (gestures) are needed to communicate it.`,
      answerLabel: '−log₂ p (bits)',
      answer: k,
      steps: [
        `p = 1/2^${k}, so log₂ p = −${k}.`,
        `Uncertainty = −log₂ p = ${k} bits — rarer outcomes carry more information.`,
      ],
    }
  }
  if (tier === 2) {
    const ps = pick(DYADIC)
    const answer = entropy(ps)
    return {
      prompt: `A random variable has distribution p = ${probStr(ps)}. Compute the entropy H(X) = −Σ pᵢ log₂ pᵢ in bits.`,
      answerLabel: 'H(X)',
      answer,
      steps: [
        `Per-outcome uncertainties −log₂ pᵢ: ${ps.map(p => `${-lg2(p)}`).join(', ')} bits.`,
        `Weight each by its probability: ${ps.map(p => `${fmt(p)}×${-lg2(p)}`).join(' + ')}.`,
        `H(X) = ${fmt(answer)} bits.`,
      ],
    }
  }
  // cross entropy of a coding scheme optimized for q, used on actual p; answer = KL divergence
  let p: readonly number[], q: readonly number[]
  do {
    const len = pick([3, 4] as const)
    p = pick(DYADIC.filter(d => d.length === len))
    q = pick(DYADIC.filter(d => d.length === len))
  } while (p === q)
  const Hpq = p.reduce((s, pi, k) => s + pi * -lg2(q[k]), 0)
  const Hp = entropy(p)
  const answer = Hpq - Hp
  return {
    prompt: `Exam-style: a code is optimized for q = ${probStr(q)} (so symbol i gets a code of length −log₂ qᵢ), but the true distribution is p = ${probStr(p)}. Compute the KL divergence D(p‖q) = H(p,q) − H(p) in bits.`,
    answerLabel: 'D(p‖q)',
    answer,
    steps: [
      `Code lengths from q: ${q.map(qi => `${-lg2(qi)}`).join(', ')} bits.`,
      `Cross entropy H(p,q) = Σ pᵢ·lengthᵢ = ${p.map((pi, k) => `${fmt(pi)}×${-lg2(q[k])}`).join(' + ')} = ${fmt(Hpq)} bits.`,
      `Entropy H(p) = ${fmt(Hp)} bits (the best possible average length).`,
      `D(p‖q) = ${fmt(Hpq)} − ${fmt(Hp)} = ${fmt(answer)} bits — the price of coding with the wrong distribution.`,
    ],
  }
}

const vecStr = (v: readonly number[]) => `(${v.join(', ')})`

function genVectors(tier: Tier): Problem {
  const w = [ri(1, 4), ri(-3, 3) || 2]
  const norm = Math.hypot(w[0], w[1])
  if (tier === 1) {
    const x = [ri(-4, 5), ri(-4, 5)]
    const answer = w[0] * x[0] + w[1] * x[1]
    return {
      prompt: `Compute the dot product w·x for w = ${vecStr(w)} and x = ${vecStr(x)}. (Points with the same w·x project onto the same point along w.)`,
      answerLabel: 'w·x',
      answer,
      steps: [
        `w·x = ${w[0]}×${x[0]} + ${w[1]}×${x[1]} = ${w[0] * x[0]} + ${w[1] * x[1]} = ${answer}.`,
        `Every x with w·x = ${answer} lies on the same hyperplane perpendicular to w.`,
      ],
    }
  }
  if (tier === 2) {
    const x = [ri(-3, 4), ri(-3, 4)]
    const dot = w[0] * x[0] + w[1] * x[1]
    const answer = dot / norm
    return {
      prompt: `w = ${vecStr(w)} and x = ${vecStr(x)}. Compute the TRUE projected distance of x along w, i.e. ŵ·x where ŵ = w/|w| is the unit vector.`,
      answerLabel: 'ŵ·x',
      answer,
      steps: [
        `|w| = √(${w[0]}² + ${w[1]}²) = √${w[0] ** 2 + w[1] ** 2} = ${fmt(norm)}.`,
        `Raw projection: w·x = ${w[0]}×${x[0]} + ${w[1]}×${x[1]} = ${dot}.`,
        `Divide by |w| to make it a distance: ŵ·x = ${dot}/${fmt(norm)} = ${fmt(answer)}.`,
      ],
    }
  }
  const a = ri(-2, 2)
  let b = ri(-2, 4)
  if (b === a) b = a + ri(1, 3)
  const answer = Math.abs(b - a) / norm
  return {
    prompt: `Exam-style: w = ${vecStr(w)}. What is the true (perpendicular) distance between the parallel hyperplanes w·x = ${a} and w·x = ${b}? (Careful: it is NOT |${b} − ${a}| unless |w| = 1.)`,
    answerLabel: 'distance',
    answer,
    steps: [
      `Projection values differ by |${b} − ${a}| = ${Math.abs(b - a)}, but that is measured in units of |w|.`,
      `|w| = √(${w[0]}² + ${w[1]}²) = ${fmt(norm)}.`,
      `True separation = |b − a|/|w| = ${Math.abs(b - a)}/${fmt(norm)} = ${fmt(answer)}.`,
    ],
  }
}

// ---------- Week 2: linear regression, errors, regularization ----------

function genRegression(tier: Tier): Problem {
  if (tier === 1) {
    const w1 = ri(50, 90)
    const w0 = ri(5, 20) * 1000
    const x = ri(8, 30) * 100
    const answer = w1 * x + w0
    return {
      prompt: `A fitted house-price model is h(x) = ${w1}·x + ${w0.toLocaleString()} (x = size in ft², price in $). Predict the price of a ${x.toLocaleString()} ft² house.`,
      answerLabel: 'ŷ ($)',
      answer,
      steps: [
        `Plug in: h(${x.toLocaleString()}) = ${w1} × ${x.toLocaleString()} + ${w0.toLocaleString()}.`,
        `= ${(w1 * x).toLocaleString()} + ${w0.toLocaleString()} = ${answer.toLocaleString()}.`,
      ],
    }
  }
  if (tier === 2) {
    const w1 = pick([0.2, 0.3, 0.5])
    const w0 = ri(10, 40)
    const pts = Array.from({ length: 3 }, () => {
      const x = ri(10, 90) * 10
      const y = Math.round(w1 * x + w0 + pick([-30, -20, -10, 10, 20, 30]))
      return { x, y }
    })
    const residuals = pts.map(p => w1 * p.x + w0 - p.y)
    const answer = residuals.reduce((s, r) => s + r * r, 0) / pts.length
    return {
      prompt: `Hypothesis h(x) = ${w1}·x + ${w0} on the points ${pts.map(p => `(${p.x}, ${p.y})`).join(', ')}. Compute the MSE cost J = (1/n) Σ(h(xᵢ) − yᵢ)². (Slides use 1/n — no 1/2, not n−1.)`,
      answerLabel: 'J',
      answer,
      steps: [
        `Predictions h(xᵢ): ${pts.map(p => fmt(w1 * p.x + w0)).join(', ')}.`,
        `Residuals h(xᵢ) − yᵢ: ${residuals.map(fmt).join(', ')}.`,
        `Squared: ${residuals.map(r => fmt(r * r)).join(', ')}; sum = ${fmt(residuals.reduce((s, r) => s + r * r, 0))}.`,
        `J = ${fmt(residuals.reduce((s, r) => s + r * r, 0))}/3 = ${fmt(answer)}.`,
      ],
    }
  }
  // one gradient-descent update on two points from (w0, w1) = (0, 0)
  const pts = [
    { x: ri(1, 3), y: ri(2, 5) },
    { x: ri(4, 6), y: ri(5, 9) },
  ]
  const alpha = pick([0.05, 0.1])
  const g0 = (2 / 2) * pts.reduce((s, p) => s + (0 - p.y), 0)
  const g1 = (2 / 2) * pts.reduce((s, p) => s + (0 - p.y) * p.x, 0)
  const answer = 0 - alpha * g1
  return {
    prompt: `Exam-style (one gradient-descent step): data ${pts.map(p => `(${p.x}, ${p.y})`).join(', ')}, model h(x) = w₀ + w₁x starting at w₀ = 0, w₁ = 0, learning rate α = ${alpha}, cost J = (1/n)Σ(h(xᵢ)−yᵢ)². Do ONE simultaneous update and enter the new w₁.`,
    answerLabel: 'new w₁',
    answer,
    steps: [
      `Residuals h(xᵢ) − yᵢ at w = (0,0): ${pts.map(p => `−${p.y}`).join(', ')}.`,
      `∂J/∂w₀ = (2/n)Σ(h(xᵢ)−yᵢ) = (2/2)(${pts.map(p => `−${p.y}`).join(' + ')}) = ${fmt(g0)}.`,
      `∂J/∂w₁ = (2/n)Σ(h(xᵢ)−yᵢ)·xᵢ = (2/2)(${pts.map(p => `−${p.y}×${p.x}`).join(' + ')}) = ${fmt(g1)}.`,
      `Simultaneous update: w₁ = 0 − ${alpha}×(${fmt(g1)}) = ${fmt(answer)} (and w₀ = 0 − ${alpha}×(${fmt(g0)}) = ${fmt(0 - alpha * g0)}).`,
    ],
  }
}

function genR2Reg(tier: Tier): Problem {
  if (tier === 1) {
    const sst = ri(2, 9) * 100
    const sse = ri(10, Math.round(sst * 0.8) / 10) * 10
    const answer = 1 - sse / sst
    return {
      prompt: `A regression on some data gives SST (total sum of squares) = ${sst} and SSE (sum of squared errors) = ${sse}. Compute R² = 1 − SSE/SST.`,
      answerLabel: 'R²',
      answer,
      steps: [
        `SST = SSR + SSE, so SSR = ${sst} − ${sse} = ${sst - sse}.`,
        `R² = 1 − ${sse}/${sst} = SSR/SST = ${sst - sse}/${sst} = ${fmt(answer)} — the fraction of variance the model explains.`,
      ],
    }
  }
  if (tier === 2) {
    const errs = Array.from({ length: 4 }, () => pick([-9, -6, -4, -3, -2, -1, 1, 2, 3, 4, 6, 9]))
    const mae = errs.reduce((s, e) => s + Math.abs(e), 0) / 4
    const answer = errs.reduce((s, e) => s + e * e, 0) / 4
    return {
      prompt: `Four test predictions have errors (ŷᵢ − yᵢ): ${errs.join(', ')}. Compute the MSE = (1/n)Σ(ŷᵢ−yᵢ)². (For contrast, also work out the MAE — note how MSE punishes the big miss.)`,
      answerLabel: 'MSE',
      answer,
      steps: [
        `Squared errors: ${errs.map(e => e * e).join(', ')}; sum = ${errs.reduce((s, e) => s + e * e, 0)}.`,
        `MSE = ${errs.reduce((s, e) => s + e * e, 0)}/4 = ${fmt(answer)}.`,
        `MAE = (${errs.map(e => Math.abs(e)).join(' + ')})/4 = ${fmt(mae)} — smaller because it does not square the large errors.`,
      ],
    }
  }
  const w = [ri(1, 5), -ri(1, 5), pick([0, 0, ri(1, 3)])]
  const alpha = pick([0.1, 0.2, 0.5, 1])
  const l1 = w.reduce((s, wi) => s + Math.abs(wi), 0)
  const l2sq = w.reduce((s, wi) => s + wi * wi, 0)
  const wantRidge = Math.random() < 0.5
  const answer = wantRidge ? alpha * l2sq : alpha * l1
  return {
    prompt: `Exam-style: a model has weights w = ${vecStr(w)} and regularization strength α = ${alpha}. Compute the ${wantRidge ? 'RIDGE penalty α‖w‖₂² (squared L2)' : 'LASSO penalty α‖w‖₁ (L1)'}.`,
    answerLabel: wantRidge ? 'α‖w‖₂²' : 'α‖w‖₁',
    answer,
    steps: [
      `‖w‖₁ = ${w.map(wi => `|${wi}|`).join(' + ')} = ${l1}.`,
      `‖w‖₂² = ${w.map(wi => `${wi}²`).join(' + ')} = ${l2sq} (so ‖w‖₂ = ${fmt(Math.sqrt(l2sq))}).`,
      wantRidge
        ? `Ridge penalty = α‖w‖₂² = ${alpha} × ${l2sq} = ${fmt(answer)}. (Lasso would give ${alpha} × ${l1} = ${fmt(alpha * l1)} — L1 drives weights to exactly 0, L2 just shrinks them.)`
        : `Lasso penalty = α‖w‖₁ = ${alpha} × ${l1} = ${fmt(answer)}. (Ridge would give ${alpha} × ${l2sq} = ${fmt(alpha * l2sq)} — L1 drives weights to exactly 0, L2 just shrinks them.)`,
    ],
  }
}

// ---------- Week 3: logistic regression ----------

const sigmoid = (z: number) => 1 / (1 + Math.exp(-z))

function genLogistic(tier: Tier): Problem {
  if (tier === 1) {
    const z = pick([-3, -2, -1, -0.5, 0.5, 1, 2, 3])
    const answer = sigmoid(z)
    return {
      prompt: `Compute the sigmoid σ(z) = 1/(1 + e^(−z)) at z = ${z}.`,
      answerLabel: 'σ(z)',
      answer,
      steps: [
        `e^(−(${z})) = e^${fmt(-z)} = ${fmt(Math.exp(-z))}.`,
        `σ(${z}) = 1/(1 + ${fmt(Math.exp(-z))}) = ${fmt(answer)}.`,
        `Check: σ(0) = 0.5; z ${z > 0 ? '> 0 so σ > 0.5' : '< 0 so σ < 0.5'}. Also σ(−z) = 1 − σ(z).`,
      ],
    }
  }
  if (tier === 2) {
    const w = [ri(-3, 3) / 10 || 0.2, ri(-3, 3) / 10 || -0.1]
    const b = ri(-20, 20) / 10
    const x = [ri(2, 9), ri(2, 9)]
    const z = w[0] * x[0] + w[1] * x[1] + b
    const answer = sigmoid(z)
    return {
      prompt: `Logistic regression with w = ${vecStr(w)}, b = ${b}. For input x = ${vecStr(x)}, compute P(y = 1|x) = σ(w·x + b). (The model predicts class 1 iff this exceeds 0.5.)`,
      answerLabel: 'P(y=1|x)',
      answer,
      steps: [
        `z = w·x + b = ${w[0]}×${x[0]} + ${w[1]}×${x[1]} + ${b} = ${fmt(z)}.`,
        `σ(${fmt(z)}) = 1/(1 + e^${fmt(-z)}) = ${fmt(answer)}.`,
        `Since ${fmt(answer)} ${answer > 0.5 ? '> 0.5 → predict class 1' : '< 0.5 → predict class 0'} (z ${z > 0 ? '> 0' : '< 0'} says the same thing).`,
      ],
    }
  }
  const w0 = pick([0.5, 1, 1.5, 2, 2.5])
  const w1 = pick([0.5, 1, 1.5, 2])
  const b = ri(-60, -20)
  const x1 = ri(10, 60)
  const answer = (-w1 * x1 - b) / w0
  return {
    prompt: `Exam-style (decision boundary): a logistic model has weights w₀ = ${w0}, w₁ = ${w1} and bias b = ${b}, so the boundary is w₀x₀ + w₁x₁ + b = 0 (where σ = 0.5). For x₁ = ${x1}, find the x₀ on the boundary.`,
    answerLabel: 'x₀',
    answer,
    steps: [
      `On the boundary z = 0: w₀x₀ + w₁x₁ + b = 0.`,
      `Solve for x₀: x₀ = (−w₁·x₁ − b)/w₀ = (−${w1}×${x1} − (${b}))/${w0}.`,
      `= (${fmt(-w1 * x1)} + ${-b})/${w0} = ${fmt(-w1 * x1 - b)}/${w0} = ${fmt(answer)}.`,
      `Points with z > 0 (σ > 0.5) fall on class 1's side of this line.`,
    ],
  }
}

// ---------- Week 4: decision trees, ensembles ----------

function entropy2(a: number, b: number): number {
  const total = a + b
  if (total === 0) return 0
  let h = 0
  if (a > 0) h -= (a / total) * Math.log2(a / total)
  if (b > 0) h -= (b / total) * Math.log2(b / total)
  return h
}

function splitCounts(p: number, n: number): [number, number, number, number] {
  let p1: number, n1: number
  do {
    p1 = ri(0, p)
    n1 = ri(0, n)
  } while (p1 + n1 === 0 || p1 + n1 === p + n)
  return [p1, n1, p - p1, n - n1]
}

function genTrees(tier: Tier): Problem {
  if (tier === 1) {
    const p = ri(2, 10)
    const n = ri(2, 10)
    const answer = entropy2(p, n)
    return {
      prompt: `A node has ${p} positive and ${n} negative examples. Compute its entropy H(S) = −Σ pᵢ log₂ pᵢ.`,
      answerLabel: 'H(S)',
      answer,
      steps: [
        `p+ = ${p}/${p + n} = ${fmt(p / (p + n))}, p− = ${n}/${p + n} = ${fmt(n / (p + n))}.`,
        `H(S) = −${fmt(p / (p + n))}·log₂${fmt(p / (p + n))} − ${fmt(n / (p + n))}·log₂${fmt(n / (p + n))} = ${fmt(answer)}.`,
      ],
    }
  }
  const p = ri(4, 10)
  const n = ri(3, 9)
  const [p1, n1, p2, n2] = splitCounts(p, n)
  const t1 = p1 + n1
  const t2 = p2 + n2
  const total = p + n
  if (tier === 2) {
    const HS = entropy2(p, n)
    const branchH = (t1 / total) * entropy2(p1, n1) + (t2 / total) * entropy2(p2, n2)
    const answer = HS - branchH
    return {
      prompt: `Node S has ${p}+ and ${n}− examples. Splitting on attribute A gives branch 1 with ${p1}+/${n1}− (${t1} examples) and branch 2 with ${p2}+/${n2}− (${t2} examples). Compute the information gain IG(S,A) = H(S) − H(Y|A).`,
      answerLabel: 'IG(S,A)',
      answer,
      steps: [
        `H(S) = ${fmt(HS)}.`,
        `H(branch 1) = ${fmt(entropy2(p1, n1))}, H(branch 2) = ${fmt(entropy2(p2, n2))}.`,
        `H(Y|A) = (${t1}/${total})×${fmt(entropy2(p1, n1))} + (${t2}/${total})×${fmt(entropy2(p2, n2))} = ${fmt(branchH)}.`,
        `IG(S,A) = ${fmt(HS)} − ${fmt(branchH)} = ${fmt(answer)}.`,
      ],
    }
  }
  const gini = (a: number, b: number) => {
    const t = a + b
    return t === 0 ? 0 : 1 - (a / t) ** 2 - (b / t) ** 2
  }
  const GS = gini(p, n)
  const branchG = (t1 / total) * gini(p1, n1) + (t2 / total) * gini(p2, n2)
  const answer = GS - branchG
  return {
    prompt: `Exam-style (CART): node S has ${p}+ and ${n}− examples. A candidate split gives a left child with ${p1}+/${n1}− (${t1} examples) and a right child with ${p2}+/${n2}− (${t2} examples). Compute the Gini gain = Gini(S) − Σᵢ(|Sᵢ|/|S|)Gini(Sᵢ).`,
    answerLabel: 'Gini gain',
    answer,
    steps: [
      `Gini(S) = 1 − (${p}/${total})² − (${n}/${total})² = ${fmt(GS)}.`,
      `Gini(left) = ${fmt(gini(p1, n1))}, Gini(right) = ${fmt(gini(p2, n2))}.`,
      `Weighted child Gini = (${t1}/${total})×${fmt(gini(p1, n1))} + (${t2}/${total})×${fmt(gini(p2, n2))} = ${fmt(branchG)}.`,
      `Gini gain = ${fmt(GS)} − ${fmt(branchG)} = ${fmt(answer)}.`,
    ],
  }
}

function genEnsemble(tier: Tier): Problem {
  if (tier === 1) {
    const v = ri(4, 50)
    const n = ri(2, 10)
    const answer = v / n
    return {
      prompt: `${n} independent models each have variance σ² = ${v}. Compute the variance of their simple average M* = (1/n)Σ Mᵢ.`,
      answerLabel: 'Var(M*)',
      answer,
      steps: [
        `Averaging independent models divides variance by n: Var(M*) = σ²/n.`,
        `Var(M*) = ${v}/${n} = ${fmt(answer)}.`,
      ],
    }
  }
  const n = ri(3, 10)
  const k = ri(1, n - 1)
  const err = k / n
  if (tier === 2) {
    const answer = 0.5 * Math.log((n - k) / k)
    return {
      prompt: `An AdaBoost round has ${n} equally-weighted instances; the weak classifier misclassifies ${k} of them. Compute its voting weight αₜ = (1/2)ln((1 − errₜ)/errₜ), where errₜ = ${k}/${n}.`,
      answerLabel: 'αₜ',
      answer,
      steps: [
        `errₜ = ${k}/${n} = ${fmt(err)}, so 1 − errₜ = ${fmt(1 - err)}.`,
        `αₜ = (1/2)·ln(${fmt(1 - err)}/${fmt(err)}) = (1/2)·ln(${fmt((1 - err) / err)}) = ${fmt(answer)}.`,
      ],
    }
  }
  const askMisclassified = Math.random() < 0.5
  const answer = askMisclassified ? 1 / (2 * k) : 1 / (2 * (n - k))
  return {
    prompt: `Exam-style: ${n} equally-weighted instances (w = 1/${n} each) go through one AdaBoost round; ${k} are misclassified. After computing αₜ and applying wᵢ ← wᵢ·exp(∓αₜ) then renormalizing so weights sum to 1, what is the new weight of ONE ${askMisclassified ? 'misclassified' : 'correctly classified'} instance?`,
    answerLabel: 'new wᵢ',
    answer,
    steps: [
      `errₜ = ${k}/${n}, so exp(αₜ) = √((${n}−${k})/${k}) and exp(−αₜ) = √(${k}/(${n}−${k})).`,
      `Misclassified instances get unnormalized weight (1/${n})·exp(αₜ); correct ones get (1/${n})·exp(−αₜ). Both group totals reduce to the same value, so they split the renormalization evenly.`,
      `This simplifies to a clean closed form: a misclassified instance's new weight is 1/(2k) = 1/(2×${k}) = ${fmt(1 / (2 * k))}; a correctly-classified one's is 1/(2(n−k)) = 1/(2×${n - k}) = ${fmt(1 / (2 * (n - k)))}.`,
      `Answer (${askMisclassified ? 'misclassified' : 'correctly classified'} instance): ${fmt(answer)}.`,
    ],
  }
}

export const levels: readonly DrillLevel[] = [
  {
    id: 'fit',
    week: 'W1',
    title: 'Fit a Gaussian (MLE)',
    concept: 'Estimate μ and σ² from data — the building block of every generative model this week.',
    formula: 'μ = (1/n) Σxᵢ    σ² = (1/n) Σ(xᵢ − μ)²   (divide by n, not n−1)',
    generate: genGaussianFit,
  },
  {
    id: 'bayes',
    week: 'W1',
    title: 'Bayes theorem',
    concept: 'Invert a conditional probability: from P(symptom|disease) to P(disease|symptom).',
    formula: 'P(h|D) = P(D|h)·P(h) / P(D)',
    generate: genBayes,
  },
  {
    id: 'posterior',
    week: 'W1',
    title: 'Posteriors over classes',
    concept: 'Score each class with likelihood × prior, then normalize so the posteriors sum to 1.',
    formula: 'P(Cₖ|x) = p(x|Cₖ)P(Cₖ) / Σⱼ p(x|Cⱼ)P(Cⱼ)',
    generate: genPosteriors,
  },
  {
    id: 'density',
    week: 'W1',
    title: 'Gaussian densities',
    concept: 'Evaluate the 1D Gaussian pdf, then multiply across i.i.d. samples to compare hypotheses.',
    formula: 'p(x) = 1/√(2πσ²) · exp(−(x−μ)²/(2σ²))    P(D|h) = Πᵢ p(xᵢ|h)',
    generate: genDensity,
  },
  {
    id: 'nb',
    week: 'W1',
    title: 'Naive Bayes decisions',
    concept: 'Combine a prior with a product of per-attribute conditionals and pick the larger score.',
    formula: 'C = argmaxₖ P(Cₖ) · Πᵢ P(xᵢ|Cₖ)',
    generate: genNaiveBayes,
  },
  {
    id: 'text',
    week: 'W1',
    title: 'Text & multinomial',
    concept: 'Sequence vs bag probabilities, classifying documents with multinomial NB, and Laplace smoothing for unseen words.',
    formula: 'P(bag) = n!/(x₁!…xᵥ!) · Πpⱼ^xⱼ  (n = total tokens)    P(w|C) = (count+1)/(total+|V|)',
    generate: genMultinomial,
  },
  {
    id: 'joint',
    week: 'W1a',
    title: 'Joint & conditional probability',
    concept: 'Read marginals and conditionals off a joint table with the sum and product rules, plus the probability axioms.',
    formula: 'P(X) = Σᵧ P(X,Y)    P(Y|X) = P(X,Y)/P(X)    P(A∪B) = P(A)+P(B)−P(A∩B)',
    generate: genJoint,
  },
  {
    id: 'entropy',
    week: 'W1a',
    title: 'Entropy & information',
    concept: 'Uncertainty as bits, entropy of a distribution, and the KL price of coding with the wrong distribution.',
    formula: 'H(X) = −Σ pᵢ log₂ pᵢ    H(p,q) = −Σ pᵢ log₂ qᵢ    D(p‖q) = H(p,q) − H(p)',
    generate: genEntropy,
  },
  {
    id: 'vectors',
    week: 'W1a',
    title: 'Vectors & projections',
    concept: 'Dot products as projections, unit vectors, and true distances between hyperplanes — the geometry behind linear classifiers.',
    formula: 'w·x = Σ wᵢxᵢ    ŵ = w/|w|    distance between w·x = a, b planes = |b−a|/|w|',
    generate: genVectors,
  },
  {
    id: 'regression',
    week: 'W2',
    title: 'Linear regression & MSE',
    concept: 'Predict with h(x) = w₁x + w₀, score with the MSE cost, and take one gradient-descent step by hand.',
    formula: 'J = (1/n)Σ(h(xᵢ)−yᵢ)²    ∂J/∂w₀ = (2/n)Σ(h−y)    ∂J/∂w₁ = (2/n)Σ(h−y)xᵢ',
    generate: genRegression,
  },
  {
    id: 'r2reg',
    week: 'W2',
    title: 'R², errors & regularization',
    concept: 'Judge a fit with R², compare MSE vs MAE, and compute Lasso/Ridge penalties.',
    formula: 'R² = 1 − SSE/SST    Lasso: α‖w‖₁    Ridge: α‖w‖₂²',
    generate: genR2Reg,
  },
  {
    id: 'logistic',
    week: 'W3',
    title: 'Logistic regression',
    concept: 'Squash scores with the sigmoid, turn w·x + b into P(y=1|x), and solve for the decision boundary.',
    formula: 'σ(z) = 1/(1+e⁻ᶻ)    P(y=1|x) = σ(w·x+b)    boundary: w·x + b = 0',
    generate: genLogistic,
  },
  {
    id: 'trees',
    week: 'W4',
    title: 'Decision trees: entropy & splitting',
    concept: 'Score a node with entropy or Gini impurity, then pick the split that reduces it the most.',
    formula: 'H(S) = −Σ pᵢ log₂ pᵢ    IG(S,A) = H(S) − H(Y|A)    Gini(S) = 1 − Σ pᵢ²',
    generate: genTrees,
  },
  {
    id: 'ensemble',
    week: 'W4',
    title: 'Ensemble methods: bagging & boosting',
    concept: 'Averaging shrinks variance by 1/n; AdaBoost reweights misclassified points each round using a per-classifier vote weight.',
    formula: 'Var(M*) = σ²/n    αₜ = ½ln((1−errₜ)/errₜ)    wᵢ ← wᵢ·exp(∓αₜ), renormalize',
    generate: genEnsemble,
  },
]
