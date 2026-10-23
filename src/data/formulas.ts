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
  {
    name: 'Probability bounds',
    formula: '0 ≤ P(E) ≤ 1, ∀E ⊆ S',
    note: "Every event's probability lies between 0 and 1. Sanity-check every exam answer against this — an answer like 1.1 means you forgot to subtract an intersection.",
    week: 'W1a',
  },
  {
    name: 'Certain and impossible events',
    formula: 'P(S) = 1,  P(∅) = 0',
    note: 'The sample space is certain; the empty event is impossible.',
    week: 'W1a',
  },
  {
    name: 'Union (inclusion-exclusion) rule',
    formula: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
    note: 'Subtract the overlap once so it is not double-counted. Only when A and B are disjoint does P(A ∪ B) = P(A) + P(B).',
    week: 'W1a',
  },
  {
    name: 'Complement rule',
    formula: 'P(Ā) = 1 − P(A)',
    note: "Often the fastest route: compute the complement (e.g., 'no heads') and subtract from 1.",
    week: 'W1a',
  },
  {
    name: 'Partition of an event',
    formula: 'P(A) = P(A ∩ B) + P(A ∩ B̄)',
    note: 'Split A by whether B happens. This is the two-event version of the law of total probability.',
    week: 'W1a',
  },
  {
    name: 'Conditional probability (definition)',
    formula: 'P(A|B) = P(A,B) / P(B),  P(B) > 0',
    note: 'The deck writes the joint as P(A,B) (same as P(A ∩ B)). Divide by the probability of the GIVEN event — the one after the bar. Undefined if P(B) = 0.',
    week: 'W1a',
  },
  {
    name: 'Independence',
    formula: 'P(A|B) = P(A)',
    note: 'Equivalent to P(A,B) = P(A)P(B). Do not confuse independence with disjointness (P(A ∩ B) = 0).',
    week: 'W1a',
  },
  {
    name: 'Product rule',
    formula: 'P(X, Y) = P(X|Y) P(Y)',
    note: 'Joint = conditional × marginal. Rearranging the conditional-probability definition; also works as P(X,Y) = P(Y|X)P(X).',
    week: 'W1a',
  },
  {
    name: 'Sum rule (marginalisation)',
    formula: 'P(X) = Σ_Y P(X, Y)',
    note: 'Sum the joint over the variable you want to remove. In a joint table: column sums give P(X), row sums give P(Y).',
    week: 'W1a',
  },
  {
    name: 'Dot product (projection value)',
    formula: 'w·x = Σᵢ wᵢxᵢ',
    note: 'w·x is where x projects on w (times |w|). Equal dot products ⇒ same projection point. Slide example: w=(2,1) gives w·x=3 for (0,3), (1,1), (2,−1).',
    week: 'W1a',
  },
  {
    name: 'Vector length (norm)',
    formula: '|w| = √(w·w) = √(Σᵢ wᵢ²)',
    note: 'Needed to convert dot products into true distances. |(2,1)| = √5.',
    week: 'W1a',
  },
  {
    name: 'Unit vector (normalization)',
    formula: 'ŵ = w / |w|',
    note: 'Projected value equals distance iff |w| = 1. Slide: (2,1)/√5 = (2√5/5, √5/5), and ŵ·x = 3√5/5.',
    week: 'W1a',
  },
  {
    name: 'Distance between parallel hyperplanes',
    formula: 'gap between w·x = a and w·x = b is |b − a| / |w|',
    note: 'Trap from slide 5: w·x=0 and w·x=1 are NOT 1 apart unless |w| = 1; for w=(2,1) the gap is 1/√5.',
    week: 'W1a',
  },
  {
    name: 'Orthonormal basis conditions (2D)',
    formula: '|e₁| = 1, |e₂| = 1, e₁·e₂ = 0',
    note: 'Unit length AND mutual orthogonality — both required.',
    week: 'W1a',
  },
  {
    name: 'Rotation matrix',
    formula: 'Q = [e₁ e₂] = [[cos θ, −sin θ], [sin θ, cos θ]]',
    note: 'θ is the angle between e₁ and the horizontal axis. Q is orthogonal: Q⁻¹ = Qᵀ.',
    week: 'W1a',
  },
  {
    name: 'Coordinates in new basis',
    formula: 'z = Qᵀx  (per point);  Z = XQ  (dataset with rows xᵢᵀ)',
    note: 'Watch the transpose: per-point uses Qᵀ, row-stacked dataset multiplies by Q on the right.',
    week: 'W1a',
  },
  {
    name: 'Centering (translation)',
    formula: 'Ẍ has rows xᵢᵀ − x̄ᵀ,  where x̄ = (1/n) Σᵢ₌₁ⁿ xᵢ',
    note: 'Multi-dimensional translation works exactly like 1-D: subtract the mean from each row.',
    week: 'W1a',
  },
  {
    name: 'Variance-covariance matrix',
    formula: 'Σ = (1/n) ẌᵀẌ',
    note: 'DECK CONVENTION: divide by n, not n−1 (population, not sample covariance). Data must be centered first.',
    week: 'W1a',
  },
  {
    name: 'Whitening / scaling step',
    formula: 'V = ZΛ⁻¹ = ẌQΛ⁻¹,  Λ = diag(λ₁, …, λ_d)',
    note: 'Λ⁻¹ divides each rotated coordinate by its axis length; V follows the standard 2D normal, so VᵀV = nI.',
    week: 'W1a',
  },
  {
    name: 'Eigendecomposition of covariance',
    formula: '(1/n) ẌᵀẌ = Q Λ² Qᵀ',
    note: "Derived from VᵀV = nI and Q⁻¹ = Qᵀ. Note: in THIS derivation the eigenvalues of Σ equal λᵢ² (squared axis lengths), while the PCA slide simply calls Σ's eigenvalues λᵢ.",
    week: 'W1a',
  },
  {
    name: 'Mahalanobis distance',
    formula: 'D(x) = √((xᵀ − x̄ᵀ) Σ⁻¹ (x − x̄)) = √(vᵀv)',
    note: 'Euclidean distance measured AFTER translation, rotation and scaling. With Σ = I it reduces to ordinary Euclidean distance. Uses QΛ⁻²Qᵀ = Σ⁻¹ in the derivation.',
    week: 'W1a',
  },
  {
    name: 'PCA covariance step',
    formula: 'Σ ← (1/n) ẌᵀẌ, then eigenpairs {λᵢ, eᵢ} with λ₁ ≥ λ₂ ≥ …; keep top-k eigenvectors',
    note: 'Output is the eigenVECTORS (directions), not eigenvalues; k << d. Eigenvalues only rank the directions.',
    week: 'W1a',
  },
  {
    name: 'Uncertainty of a single outcome',
    formula: 'uncertainty = −log₂(probability) = −log p',
    note: 'Deck convention: if base is not specified, log means log₂ (answers in bits/gestures). Lower probability → more gestures needed.',
    week: 'W1a',
  },
  {
    name: 'Expected uncertainty / Entropy',
    formula: 'H(X) = −Σᵢ₌₁ⁿ pᵢ log pᵢ, where pᵢ = Pr(X = xᵢ)',
    note: 'Probability-weighted average of −log pᵢ. Slide example: (½)×1 + (¼)×2 + (¼)×2 = 1.5 bits. Terms with pᵢ = 0 contribute 0.',
    week: 'W1a',
  },
  {
    name: 'Binary entropy',
    formula: 'H(X) = −p₀ log p₀ − p₁ log p₁, with p₀ + p₁ = 1',
    note: 'H = 0 when p₀ = 1 or p₁ = 1 (certain); H = 1 (max) when p₀ = p₁ = 0.5. Curve is an inverted-U over Pr(X=1).',
    week: 'W1a',
  },
  {
    name: 'Maximum entropy',
    formula: 'H_max = log n (n = number of outcomes), at the uniform distribution',
    note: "Fair die: H = log 6 ≈ 2.585 > log 2 = 1 = fair coin. A biased die can dip below a fair coin's entropy.",
    week: 'W1a',
  },
  {
    name: 'Conditional entropy',
    formula: 'H(X|Y) = Σ_{yⱼ} p(Y = yⱼ) H(X|Y = yⱼ)',
    note: 'Weighted average of within-group entropies. Y determines X ⇒ H(X|Y) = 0; X ⊥ Y ⇒ H(X|Y) = H(X). Two-bag example: H = 1.',
    week: 'W1a',
  },
  {
    name: 'Mutual information relations',
    formula: 'I(X;Y) = H(X) − H(X|Y); Y determines X ⇒ I(X;Y) = H(X); X ⊥ Y ⇒ I(X;Y) = 0',
    note: 'Venn diagram: I(X;Y) is the overlap of H(X) and H(Y); H(X|Y), H(Y|X) are the exclusive parts; H(X,Y) is the union.',
    week: 'W1a',
  },
  {
    name: 'Cross entropy',
    formula: 'H(p, q) = −𝔼ₚ log q = −Σᵢ pᵢ log qᵢ',
    note: 'Expected bits coding true p with a scheme optimized for q. H(p,q) = H(p) iff p = q, else H(p,q) > H(p). Example: 2.5 vs 2.25.',
    week: 'W1a',
  },
  {
    name: 'KL divergence (relative entropy)',
    formula: 'D_KL(p‖q) = H(p, q) − H(p)',
    note: "The 'gap' — extra bits from using q's code. Smaller when q approximates p better; example value 2.5 − 2.25 = 0.25.",
    week: 'W1a',
  },
  {
    name: 'Cross-entropy loss (one-hot label)',
    formula: 'H(p, q) = −log₂ q(true class), for one-hot p',
    note: 'Common multi-class classification loss. q = (0.125, 0.5, 0.25, 0.125): label 1 → 3, label 2 → 1, label 3 → 2. Aggregate over all predictions for the full loss.',
    week: 'W1a',
  },
  {
    name: 'Simple linear regression hypothesis',
    formula: 'h(x) = w₁x + w₀',
    note: 'w₀ = intercept, w₁ = slope. The deck also writes it as h(x) = w₀ + w₁x — same thing.',
    week: 'W2',
  },
  {
    name: 'Mean Squared Error (MSE)',
    formula: 'J(w₀, w₁) = (1/n) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]²',
    note: 'Deck convention: divide by n (not n−1, no 1/2 factor). Residual is h(xᵢ) − yᵢ = ŷᵢ − yᵢ (prediction minus actual).',
    week: 'W2',
  },
  {
    name: 'Multivariable hypothesis (vector form)',
    formula: 'h(x) = w₀ + w₁x₁ + ... + wₘxₘ = Σⱼ₌₀ᵐ wⱼxⱼ = w·x = wᵀx  (with x₀ = 1)',
    note: 'm = number of features; after adding x₀ = 1, x ∈ ℝᵐ⁺¹ and w ∈ ℝᵐ⁺¹. Know that the intercept is w₀ on the constant feature.',
    week: 'W2',
  },
  {
    name: 'MSE in matrix form',
    formula: 'J(w) = (1/n) Σᵢ₌₁ⁿ (wᵀxᵢ − yᵢ)² = (1/n)(Xw − y)ᵀ(Xw − y)',
    note: 'Dimensions: X is n × (m+1), w is (m+1) × 1, y is n × 1. Exam tip: be able to state these dimensions.',
    week: 'W2',
  },
  {
    name: 'Normal equation and analytical solution',
    formula: '∇J(w) = XᵀXw − Xᵀy = 0  ⇒  XᵀXw = Xᵀy  ⇒  w = (XᵀX)⁻¹Xᵀy = X†y',
    note: "X† = (XᵀX)⁻¹Xᵀ is the pseudo-inverse. Slide marked Optional: 'formulae are not important, for you to understand the complexity of analytical solutions only' — the point is why iterative methods are preferred.",
    week: 'W2',
  },
  {
    name: 'Simple LR partial derivatives (Optional slide)',
    formula: '∂J/∂w₀ = (2/n) Σᵢ₌₁ⁿ (w₀ + w₁xᵢ − yᵢ);   ∂J/∂w₁ = (2/n) Σᵢ₌₁ⁿ xᵢ(w₀ + w₁xᵢ − yᵢ)',
    note: 'Set both to 0 for the closed form: w₁ = [n Σxᵢyᵢ − Σxᵢ Σyᵢ] / [n Σxᵢ² − (Σxᵢ)²], w₀ = [Σxᵢ² Σyᵢ − Σxᵢ Σxᵢyᵢ] / [n Σxᵢ² − (Σxᵢ)²]. The 2/n factor comes from differentiating the squared term.',
    week: 'W2',
  },
  {
    name: 'Polynomial model (degree-2, two variables)',
    formula: 'h(x) = ax₁² + bx₁x₂ + cx₂² + dx₁ + ex₂ + f',
    note: 'Still LINEAR in parameters a..f over expanded features — fit with linear regression after PolynomialFeatures(2). One-variable case: h(x) = ax² + bx + c = (a b)(x², x)ᵀ + c.',
    week: 'W2',
  },
  {
    name: 'Gradient descent update rule',
    formula: 'wⱼ ← wⱼ − α · ∂J(w)/∂wⱼ   (repeat until convergence; update all j = 0, 1, ... SIMULTANEOUSLY)',
    note: 'α = learning rate. Simultaneous update is a classic exam trap: compute all partials at the current w before changing any wⱼ. Vector form: w ← w − α∇w J(w).',
    week: 'W2',
  },
  {
    name: 'Convexity definition',
    formula: 'f(tx₁ + (1−t)x₂) ≤ t·f(x₁) + (1−t)·f(x₂),  ∀x₁, x₂ and t ∈ [0, 1]',
    note: "'Function f is BELOW the linear interpolation from x₁ to x₂.' Convex ⇒ all local minima are global minima. Non-convex ⇒ final GD solution is sensitive to initialization.",
    week: 'W2',
  },
  {
    name: 'Mini-batch gradient descent',
    formula: 'w = w − α∇w Σᵢ₌₁ᵏ j(w; xᵢ, yᵢ)   (full batch uses Σᵢ₌₁ⁿ)',
    note: 'Sample k < n summand gradients per iteration to save cost. SGD is posed as a question on the slide (batch size k = 1).',
    week: 'W2',
  },
  {
    name: 'Convergence criterion',
    formula: 'Declare convergence if J(w) decreases by less than 10⁻³ in one iteration',
    note: 'Also memorize the α behavior: sufficiently small α ⇒ J decreases every iteration; too small ⇒ slow; too large ⇒ may not decrease, may diverge.',
    week: 'W2',
  },
  {
    name: 'Sum of Squared Residues',
    formula: 'SSᵣₑₛ = Σᵢ (ŷᵢ − yᵢ)²',
    note: 'Error in regression: y − ŷ = f(x) − h(x). SSᵣₑₛ has no 1/n — it is the raw sum (contrast with MSE).',
    week: 'W2',
  },
  {
    name: 'Bias-variance decomposition',
    formula: '𝔼[(f(x) − h(x))²] = Bias²(h(x)) + Var(h(x)) + σ²;  Bias(h(x)) = 𝔼[h(x)] − f(x);  Var(h(x)) = 𝔼[(h(x))²] − (𝔼[h(x)])²',
    note: 'Bias enters SQUARED; σ² is irreducible noise. Bias = erroneous assumptions in the algorithm; Variance = sensitivity to small fluctuation of datasets.',
    week: 'W2',
  },
  {
    name: 'Regularized learning framework',
    formula: 'h* = arg minₕ∈ℋ {J(h) + C(h)};  in practice: min C·J(w; X, y) + ‖w‖  or  min J(w; X, y) + α·‖w‖',
    note: 'C(h) / ‖w‖ = model complexity. Large C: trade complexity for performance; small C: trade performance for less complexity. Note both parameterizations appear on the slide — they are equivalent up to scaling.',
    week: 'W2',
  },
  {
    name: 'Ridge regression',
    formula: 'min_w {J(w) + α‖w‖₂²},  where ‖w‖₂ = √(Σⱼ₌₁ᵈ wⱼ²)',
    note: "Penalty is the SQUARED L2 norm. L2 constraint region is a circle; shrinks weights but rarely to exactly zero. Slide typo calls it 'rigid regression'.",
    week: 'W2',
  },
  {
    name: 'Lasso regression',
    formula: 'min_w {J(w) + α‖w‖₁},  where ‖w‖₁ = Σⱼ₌₁ᵈ |wⱼ|',
    note: 'L1 constraint region is a diamond with corners on the axes, so the optimum tends to land on an axis → sparse (some wⱼ exactly 0).',
    week: 'W2',
  },
  {
    name: 'Elastic Net',
    formula: 'min_w {J(w) + λ₁‖w‖₁ + λ₂‖w‖₂}',
    note: 'Combines L1 and L2 penalties with separate weights λ₁, λ₂ (as written on the slide — the L2 term appears unsquared there).',
    week: 'W2',
  },
  {
    name: 'Total sum of squares (SST)',
    formula: 'SST = Σᵢ (yᵢ − ȳ)²',
    note: 'Model-independent; computed as np.sum((y - np.mean(y))**2). No division by n — these are raw sums, not variances.',
    week: 'W2',
  },
  {
    name: 'Explained sum of squares (SSR)',
    formula: 'SSR = Σᵢ (ŷᵢ − ȳ)²',
    note: "Predictions vs the target MEAN. Careful: some texts call this SSE/ESS — this course calls it 'explained sum of squares' ssr.",
    week: 'W2',
  },
  {
    name: 'R² score',
    formula: 'R² = SSR / SST = 1 − SSE / SST',
    note: 'What model.score() returns for regressors. Report the version measured on held-out test data — training R² is optimistic (0.73 vs 0.42 in the lab).',
    week: 'W2',
  },
  {
    name: 'Mean absolute error',
    formula: 'MAE = (1/n) Σᵢ |yᵢ − ŷᵢ|',
    note: 'Divides by n. Same units as y; less sensitive to outliers than MSE. Lab value: 25,920.69.',
    week: 'W2',
  },
  {
    name: 'Polynomial feature count',
    formula: '#columns = C(k + d, d)  for k features, degree d (incl. bias)',
    note: 'Check with poly.powers_. Lab: k=2, d=2 → C(4,2)=6 columns; k=2, d=3 → C(5,3)=10 columns. Includes the constant column of ones.',
    week: 'W2',
  },
  {
    name: 'Odds',
    formula: 'Odds = p(1|xᵢ)/p(−1|xᵢ)',
    note: 'Odds a:b ↔ P(success) = a/(a+b). Table: 1:1→50%, 3:1→75%, 1:4→20%, 99:1→99%. Classic exam conversion.',
    week: 'W3',
  },
  {
    name: 'Log-odds model',
    formula: 'ln[p(1|xᵢ)/p(−1|xᵢ)] = wᵀxᵢ  ⇔  p(1|xᵢ)/p(−1|xᵢ) = e^(wᵀxᵢ)',
    note: 'Deck uses natural log (ln) throughout. The log-odds, not the probability, is linear in x.',
    week: 'W3',
  },
  {
    name: 'Sigmoid / logistic function',
    formula: 'σ(x) = 1/(1 + e^(−x))',
    note: 'Range (0,1), σ(0) = 0.5, steepest at 0, saturates at the ends.',
    week: 'W3',
  },
  {
    name: 'Sigmoid symmetry',
    formula: 'σ(−x) = 1 − σ(x)',
    note: 'This is what lets p(yᵢ|xᵢ) collapse to σ(yᵢwᵀxᵢ) for y ∈ {+1,−1}.',
    week: 'W3',
  },
  {
    name: 'Sigmoid derivative',
    formula: 'dσ/dx = σ(x)[1 − σ(x)]',
    note: 'Marked Optional on the slide, but used implicitly in the gradient derivation.',
    week: 'W3',
  },
  {
    name: 'Class probability',
    formula: 'p(1|xᵢ) = 1/(1 + e^(−wᵀxᵢ)) = σ(wᵀxᵢ)',
    note: 'Pipeline: xᵢ → wᵀxᵢ (regression) → σ(wᵀxᵢ) (logistic function).',
    week: 'W3',
  },
  {
    name: 'Compact per-sample likelihood',
    formula: 'p(yᵢ|xᵢ; w) = σ(yᵢwᵀxᵢ) = 1/(1 + e^(−yᵢwᵀxᵢ))',
    note: "Only valid with the deck's ±1 label convention (NOT 0/1). yᵢ multiplies the score inside σ.",
    week: 'W3',
  },
  {
    name: 'Decision rule and boundary',
    formula: 'y = 1 if wᵀx > 0, y = −1 otherwise; boundary: wᵀx = 0 (odds = 1)',
    note: 'Boundary is linear; the 0 threshold is tunable. Predict positive ⇔ p(1|x) > p(−1|x) ⇔ odds > 1.',
    week: 'W3',
  },
  {
    name: 'Likelihood and log likelihood',
    formula: 'p(D|w) = Πᵢ₌₁ⁿ p(yᵢ|xᵢ; w);  ln p(D|w) = Σᵢ₌₁ⁿ ln p(yᵢ|xᵢ; w)',
    note: "Assumes i.i.d. samples; maximize the log (sum) in practice. Slide asks 'Why not MAP?' as an aside.",
    week: 'W3',
  },
  {
    name: 'MLE ⇔ logistic loss minimization',
    formula: 'w* = arg max_w Σᵢ ln p(yᵢ|xᵢ) = arg min_w L(w) = arg min_w Σᵢ₌₁ⁿ ln(1 + e^(−yᵢwᵀxᵢ))',
    note: 'Sign flip: maximizing log likelihood = minimizing Σ ln(1 + e^(−yᵢwᵀxᵢ)). Objective is CONVEX → local optimum is global; but no closed form.',
    week: 'W3',
  },
  {
    name: 'Gradient descent update',
    formula: 'w_{t+1} = w_t − η_t ∇L(w_t)',
    note: 'Minus sign because we minimize L; η_t is the (possibly time-varying) learning rate.',
    week: 'W3',
  },
  {
    name: 'Gradient of logistic loss',
    formula: '∇L(w) = Σᵢ₌₁ⁿ [−yᵢxᵢ e^(−yᵢwᵀxᵢ)]/[1 + e^(−yᵢwᵀxᵢ)] = −Σᵢ₌₁ⁿ yᵢxᵢ[1 − p(yᵢ|xᵢ)]',
    note: 'Interpretation: each sample pulls with weight 1 − p(yᵢ|xᵢ) — poorly fit samples dominate the update.',
    week: 'W3',
  },
  {
    name: 'Heart-disease grouped log likelihood',
    formula: 'L(D) = Σᵢ₌₁⁸ [nᵢ(y=1) ln 1/(1+e^(−wi−b)) + nᵢ(y=−1) ln 1/(1+e^(wi+b))]',
    note: '1-D model p(yᵢ|xᵢ;θ) = 1/(1+e^(−yᵢ(wxᵢ+b))), θ = {w,b}; nᵢ(y=±1) are group counts. MLE: w* = 0.58, b* = −3.34.',
    week: 'W3',
  },
  {
    name: '1-D decision boundary',
    formula: 'wx + b = 0 ⇒ x* = −b/w; e.g. x* = 3.34/0.58 = 5.78',
    note: 'wx+b > 0 → p(+|x) > p(−|x); wx+b < 0 → p(+|x) < p(−|x). x* = 5.78 ≈ around 51 years old on the age-group scale.',
    week: 'W3',
  },
  {
    name: 'SoftMax function',
    formula: 'p(y=k|x) = e^(wₖᵀx) / Σⱼ e^(wⱼᵀx),  k = 1,…,K',
    note: 'One weight vector wₖ per class. Reduces to the logistic function when K=2. Outputs sum to 1 by construction.',
    week: 'W3',
  },
  {
    name: 'Cross entropy (multiclass)',
    formula: 'L(W) = −Σᵢ₌₁ⁿ Σₖ₌₁ᴷ δ(yᵢ,k) ln p(y=k|xᵢ; W),  δ(yᵢ,k)=1 if yᵢ=k else 0',
    note: 'One-hot label kills all but the true-class term, so per-sample loss = −ln(true-class probability). Uses ln, not log₂ or log₁₀.',
    week: 'W3',
  },
  {
    name: 'Accuracy',
    formula: 'Accuracy = (TP + TN) / (TP + FP + TN + FN)',
    note: 'Misleading on imbalanced data — predicting all non-fraud gives high accuracy. Denominator is ALL samples.',
    week: 'W3',
  },
  {
    name: 'Precision',
    formula: 'Precision = TP / (TP + FP)',
    note: "'How precise is the positive prediction?' Denominator = predicted-positive column. Common exam trap: swapping FP with FN.",
    week: 'W3',
  },
  {
    name: 'Recall (= TPR)',
    formula: 'Recall = TP / (TP + FN)',
    note: "'How many positive cases are detected?' Denominator = actual-positive row. Identical to TPR / sensitivity / probability of detection.",
    week: 'W3',
  },
  {
    name: 'F1 score',
    formula: 'F₁ = ((Precision⁻¹ + Recall⁻¹)/2)⁻¹ = 2·Precision·Recall / (Precision + Recall)',
    note: 'Harmonic mean — punishes precision/recall imbalance more than the arithmetic mean; the deck asks which mean better captures both.',
    week: 'W3',
  },
  {
    name: 'F-beta score',
    formula: 'F_β = ((Precision⁻¹ + β²·Recall⁻¹)/(1+β²))⁻¹ = (1+β²)·Precision·Recall / (β²·Precision + Recall)',
    note: 'Larger β ⇒ recall more important; smaller β ⇒ precision more important. β=1 gives F1. β is chosen by the use case, not tuned on data.',
    week: 'W3',
  },
  {
    name: 'False Positive Rate',
    formula: 'FPR = FP / (FP + TN)',
    note: "'Probability of False Alarm' — x-axis of ROC, = 1 − specificity. Denominator = actual-negative row (not the predicted-positive column).",
    week: 'W3',
  },
  {
    name: 'True Positive Rate',
    formula: 'TPR = TP / (TP + FN)',
    note: "'Probability of Detection' — y-axis of ROC (sensitivity). Same formula as recall.",
    week: 'W3',
  },
  {
    name: 'ROC / AUC',
    formula: 'ROC: plot TPR(T) vs FPR(T) as threshold T varies; AUC = area under ROC curve',
    note: '(0,1) = perfect classification; diagonal = random guess; AUC = P(random positive ranked above random negative). Larger AUC wins comparisons.',
    week: 'W3',
  },
  {
    name: 'Decision boundary of logistic regression',
    formula: 'w₀x₀ + w₁x₁ + b = 0  ⇒  x₀ = (−w₁·x₁ − b) / w₀',
    note: 'The set of points where P = 0.5. A straight line — logistic regression is a linear classifier. The rearranged form is exactly how the notebook plots it from coef_ and intercept_.',
    week: 'W3',
  },
  {
    name: 'Model complexity (L2 weight norm)',
    formula: '‖w‖₂ = √(w₀² + w₁²)',
    note: "The notebook's complexity measure. Grows with C: 0.0136 (C=0.0001), 0.1747 (C=0.01), 0.4019 (C=0.1), 0.7873 (C=1).",
    week: 'W3',
  },
  {
    name: 'sklearn regularized logistic objective (concept)',
    formula: 'min over w, b of: ½‖w‖² + C · Σᵢ log-loss(yᵢ, σ(wᵀxᵢ + b))',
    note: 'CONVENTION CAVEAT: C multiplies the DATA term, so C is the INVERSE regularization strength — small C = strong regularization (opposite of λ conventions where λ multiplies the penalty).',
    week: 'W3',
  },
  {
    name: 'my_linspace margin helper',
    formula: 'range = [min − 0.1·(max − min),  max + 0.1·(max − min)] in `steps` even points',
    note: 'Notebook utility: widens the plotting grid by 10% of the data spread on each side so contours extend past the data.',
    week: 'W3',
  },
  {
    name: 'Entropy',
    formula: 'H(X) = -Σ_i p_i log p_i',
    note: 'Expected uncertainty of a random variable X with outcomes x_i and probabilities p_i = Pr(X=x_i).',
    week: 'W4',
  },
  {
    name: 'Binary Entropy',
    formula: 'H(X) = -p0 log p0 - p1 log p1,  p0+p1=1',
    note: 'Special case for two outcomes; maximum value 1 at p0=p1=0.5, minimum value 0 when p0 or p1 = 1.',
    week: 'W4',
  },
  {
    name: 'Conditional Entropy',
    formula: 'H(Y|X) = Σ_i p(X=x_i) H(Y|X=x_i)',
    note: 'Remaining uncertainty in Y once X is known; equals 0 if X determines Y.',
    week: 'W4',
  },
  {
    name: 'Mutual Information / Information Gain',
    formula: 'I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y)',
    note: 'Equals 0 when X and Y are independent; equals H(Y) if X determines Y.',
    week: 'W4',
  },
  {
    name: 'Information Gain for a Split',
    formula: 'IG(S,A) = H(Y) - H(Y|A)',
    note: 'Used by ID3 to rank candidate splitting attributes A; the attribute maximizing IG is chosen.',
    week: 'W4',
  },
  {
    name: 'Gini Impurity',
    formula: 'Gini(S) = Σ_i (|S_i|/|S|)(1-|S_i|/|S|) = 1 - Σ_i (|S_i|/|S|)^2',
    note: 'Probability a randomly labeled element is misclassified; used by CART as an alternative to entropy.',
    week: 'W4',
  },
  {
    name: 'Gini Gain',
    formula: 'GiniGain(S,A) = Gini(S) - Σ_i (|S_i|/|S|) Gini(S_i)',
    note: 'Reduction in Gini impurity achieved by splitting S on attribute A.',
    week: 'W4',
  },
  {
    name: 'SplitInfo',
    formula: 'SplitInfo(S,A) = -Σ_i (|S_i|/|S|) log(|S_i|/|S|)',
    note: "Entropy of the attribute's own value distribution; penalizes many-valued attributes.",
    week: 'W4',
  },
  {
    name: 'Gain Ratio',
    formula: 'GainRatio(S,A) = InfoGain(S,A) / SplitInfo(S,A) = I(class;A) / H(A)',
    note: 'Normalizes information gain to avoid bias toward high-cardinality attributes.',
    week: 'W4',
  },
  {
    name: 'Continuous Attribute Threshold Split',
    formula: 'A < θ  vs.  A ≥ θ,   θ = midpoint(x_i, x_{i+1}) where class(x_i) ≠ class(x_{i+1})',
    note: 'Candidate thresholds for a sorted continuous attribute; the threshold maximizing information gain is chosen.',
    week: 'W4',
  },
  {
    name: 'Variance Reduction (Regression Trees)',
    formula: 'VarianceReduction(S,A) = Var(S) - Σ_i (|S_i|/|S|) Var(S_i)',
    note: 'Splitting criterion for continuous targets; plays the role of information gain/Gini gain in classification.',
    week: 'W4',
  },
  {
    name: 'Supervised Learning Target/Hypothesis',
    formula: 'f: X → Y (unknown target),  h: X → Y with h ≈ f,  D = {(x1,y1), ..., (xn,yn)}',
    note: 'General formalization: a decision tree is one hypothesis h chosen from hypothesis space H to approximate f.',
    week: 'W4',
  },
  {
    name: 'Ensemble Error (Majority Vote)',
    formula: 'P(ensemble wrong) = sum_{i=13}^{25} C(25,i) * eps^i * (1-eps)^(25-i)',
    note: 'For 25 independent classifiers each with error rate eps=0.35, this evaluates to ≈0.06, far below eps.',
    week: 'W4',
  },
  {
    name: 'Variance of Averaged Ensemble',
    formula: 'Var(M*) = Var((1/n) * sum_i(Mi)) = sigma^2 / n',
    note: 'For n independent models each with variance sigma^2; averaging reduces variance by factor n.',
    week: 'W4',
  },
  {
    name: 'Bootstrap Sample Coverage',
    formula: 'P(sample not selected in Dj) = (1 - 1/m)^m ≈ 1/e ≈ 0.368; fraction of distinct samples ≈ 1 - (1-1/m)^m ≈ 0.632',
    note: 'For a bootstrap sample of size m drawn with replacement from m examples; ~63% of distinct originals appear on average.',
    week: 'W4',
  },
  {
    name: 'AdaBoost weighted error rate',
    formula: 'err_t = sum_i( w_i * I(h_t(x_i) != y_i) ) / sum_i( w_i )',
    note: 'Fraction of total instance weight that classifier t misclassifies at round t.',
    week: 'W4',
  },
  {
    name: 'AdaBoost alpha (voting weight)',
    formula: 'alpha_t = (1/2) * ln( (1 - err_t) / err_t )',
    note: 'Larger alpha_t means the classifier gets more say in the final weighted vote; err_t = 1/3 gives alpha_t = (1/2)ln(2).',
    week: 'W4',
  },
  {
    name: 'AdaBoost weight update',
    formula: 'w_i <- w_i * exp(-alpha_t * y_i * h_t(x_i)), then renormalize so sum_i w_i = 1',
    note: 'Increases weight for misclassified instances (y_i*h_t(x_i) = -1), decreases weight for correctly classified ones (y_i*h_t(x_i) = 1).',
    week: 'W4',
  },
  {
    name: 'AdaBoost final prediction',
    formula: 'H(x) = sign( sum_t alpha_t * h_t(x) )',
    note: 'Weighted majority vote across all K weak classifiers using their alpha_t weights.',
    week: 'W4',
  },
  {
    name: 'Gradient boosting residual fit',
    formula: 'h(x) = F_{m+1}(x) - F_m(x), fit to residual y - F_m(x)',
    note: 'Each new tree at stage m is trained to predict the current residual error of the ensemble.',
    week: 'W4',
  },
  {
    name: 'Entropy (worked example)',
    formula: 'H(S) = -sum_i( p_i * log2(p_i) )',
    note: 'Impurity of node S over classes i with proportions p_i; computed via scipy.stats.entropy(probs, base=2) in the notebook, e.g. H([29/64,35/64]) = 0.9937.',
    week: 'W4',
  },
  {
    name: 'Weighted / Conditional Entropy (worked example)',
    formula: 'H(S|A) = sum_v( |Sv|/|S| * H(Sv) )',
    note: 'Average child-node entropy after splitting S on attribute A into subsets Sv; e.g. H_A1 = (26/64)*H([21/26,5/26]) + (38/64)*H([8/38,30/38]) = 0.7278.',
    week: 'W4',
  },
  {
    name: 'Information Gain (worked example)',
    formula: 'IG(S,A) = H(S) - H(S|A)',
    note: 'Used by ID3 to select the best split; e.g. IG_A1 = 0.9937 - 0.7278 = 0.2659.',
    week: 'W4',
  },
  {
    name: 'Gini Impurity (binary)',
    formula: 'Gini(p) = 1 - p^2 - (1-p)^2',
    note: "CART's default impurity criterion; implemented as def gini(p): return 1 - p*p - (1-p)*(1-p) and plotted over p in [0,1], peaking at 0.5 for p=0.5.",
    week: 'W4',
  },
  {
    name: 'Split Information (worked example)',
    formula: 'SplitInfo(A) = -sum_v( |Sv|/|S| * log2(|Sv|/|S|) )',
    note: 'Entropy of the partition sizes induced by A alone; e.g. SI_Name = entropy([1/8]*8, base=2) = 3.0, SI_cap = entropy([3/8,3/8,2/8], base=2) = 1.5613.',
    week: 'W4',
  },
  {
    name: 'Gain Ratio (worked example)',
    formula: 'GainRatio(A) = IG(S,A) / SplitInfo(A)',
    note: "C4.5's cardinality-corrected split criterion; e.g. GR_cap = 0.6101/1.5613 = 0.3908, the highest among Name/Height/cap despite Name's larger raw IG.",
    week: 'W4',
  },
  {
    name: 'Out-of-bag probability',
    formula: 'P(row excluded from one bootstrap sample) = (1 - 1/n)^n → e^-1 ≈ 0.368 as n → ∞',
    note: 'Explains why oob_score=True in BaggingClassifier/RandomForestClassifier gives a usable validation estimate from roughly a third of the training rows per tree.',
    week: 'W4',
  },
  {
    name: 'Bagged ensemble variance reduction',
    formula: 'Var(mean of B i.i.d. estimators) = σ² / B',
    note: "If the B base learners' errors were fully independent, averaging B of them would shrink prediction variance by a factor of B; random feature subsampling in Random Forest pushes the learners closer to this independence assumption than plain bagging does.",
    week: 'W4',
  },
  {
    name: 'AdaBoost weighted error and estimator weight (notebook variant)',
    formula: 'ε_m = Σ_i w_i · 1[y_i ≠ h_m(x_i)] / Σ_i w_i;  α_m = ln((1 - ε_m) / ε_m)',
    note: 'α_m is the vote weight given to weak learner h_m; low weighted error ε_m gives a large α_m, and sample weights are then multiplied by exp(α_m) for misclassified points before renormalizing, matching the sample_weight update in adaboost[i]._boost(...) in the notebook. Note this omits the ½ factor used in the lecture-deck alpha_t formula above — a discrepancy in the source materials, kept verbatim.',
    week: 'W4',
  },
  {
    name: 'Gradient boosting additive update',
    formula: 'F_m(x) = F_{m-1}(x) + γ_m · h_m(x), where h_m is fit to the negative gradient (residual) of the loss w.r.t. F_{m-1}',
    note: "Explains why gboost.staged_predict(x_train) shows accuracy improving monotonically as more of the 10 estimators are added — each new tree targets what the current ensemble still gets wrong.",
    week: 'W4',
  },
  {
    "name": "Neuron output",
    "formula": "output = f( Σᵢ wᵢxᵢ + b )",
    "note": "Dot product of inputs and weights, add bias, apply non-linearity (slide 12).",
    "week": "W5"
  },
  {
    "name": "Weighted sum with bias input",
    "formula": "Σⱼ₌₀ᵈ wⱼxⱼ = w₀ + w₁x₁ + w₂x₂ + … + w_d x_d,  with x₀ = 1",
    "note": "Absorbs the bias into the sum via a constant input x₀ = 1 (slide 13).",
    "week": "W5"
  },
  {
    "name": "Perceptron",
    "formula": "ŷ = o(w·x) = 1 if Σⱼ₌₀ᵈ wⱼxⱼ > 0, else −1",
    "note": "Step activation; neuron fires when linear sum exceeds 0 (slide 13).",
    "week": "W5"
  },
  {
    "name": "Logistic unit",
    "formula": "ŷ = σ(w·x) = 1 / (1 + e^(−Σⱼ₌₀ᵈ wⱼxⱼ))",
    "note": "Default smooth activation of neural networks (slide 14).",
    "week": "W5"
  },
  {
    "name": "General logistic function",
    "formula": "f(x) = L / (1 + e^(−k(x − x₀)))",
    "note": "L = max value, k = steepness, x₀ = midpoint; k=1, x₀=0, L=1 gives the sigmoid (slide 15).",
    "week": "W5"
  },
  {
    "name": "Sigmoid",
    "formula": "σ(x) = 1 / (1 + e^(−x))",
    "note": "Bounded in (0,1); good for classification, prone to vanishing gradients (slide 33).",
    "week": "W5"
  },
  {
    "name": "Squared error loss (regression)",
    "formula": "J(w) = Σᵢ₌₁ⁿ (yᵢ − ŷᵢ)²",
    "note": "Objective for regression (slide 17).",
    "week": "W5"
  },
  {
    "name": "Binary cross-entropy",
    "formula": "J(w) = −Σᵢ₌₁ⁿ [ yᵢ ln(ŷᵢ) + (1 − yᵢ) ln(1 − ŷᵢ) ]",
    "note": "Objective for binary classification (slide 17).",
    "week": "W5"
  },
  {
    "name": "Multiclass cross-entropy",
    "formula": "J(w) = −Σᵢ₌₁ⁿ Σₖ₌₁ᴷ δ(yᵢ, k) ln ŷᵢ,ₖ",
    "note": "δ(yᵢ,k) = 1 if sample i is class k; only the true class's log-probability counts (slide 17).",
    "week": "W5"
  },
  {
    "name": "Squared-error gradient (identity activation)",
    "formula": "∂J/∂wⱼ = 2(yᵢ − ŷᵢ)(−xᵢ,ⱼ)",
    "note": "Chain rule for one sampled i in SGD regression (slides 21-22).",
    "week": "W5"
  },
  {
    "name": "SGD update with η = 0.5",
    "formula": "wⱼ ← wⱼ + (yᵢ − ŷᵢ) xᵢ,ⱼ",
    "note": "Simplified update used in the worked example (slides 22-23).",
    "week": "W5"
  },
  {
    "name": "ReLU",
    "formula": "f(x) = max(x, 0)",
    "note": "Cheap, sparse; may blow up and suffers dying ReLU (slide 34).",
    "week": "W5"
  },
  {
    "name": "Leaky ReLU",
    "formula": "f(x) = x if x ≥ 0;  a·x if x < 0",
    "note": "Small slope a for negatives addresses dying ReLU (slide 35).",
    "week": "W5"
  },
  {
    "name": "Softmax",
    "formula": "p(y = k | x) = e^(wₖᵀx) / Σⱼ e^(wⱼᵀx)",
    "note": "Multiclass extension of the logistic function; outputs sum to 1 (slide 36).",
    "week": "W5"
  },
  {
    "name": "Hidden layer computation",
    "formula": "vₘ = Σⱼ₌₀ᵈ w⁽¹⁾ₘ,ⱼ xⱼ ;  zₘ = σ(vₘ)",
    "note": "Fused multiply-add then activation (sigmoid, ReLU, etc.) (slide 40).",
    "week": "W5"
  },
  {
    "name": "Output layer computation",
    "formula": "vₖ = Σⱼ₌₀ᵐ w⁽²⁾ₖ,ⱼ zⱼ ;  ŷₖ = σ(vₖ)",
    "note": "Output activation needed for classification (slide 40).",
    "week": "W5"
  },
  {
    "name": "Layer in matrix form",
    "formula": "z = σ(W⁽¹⁾x), W⁽¹⁾ ∈ ℝ^(m×(d+1));  ŷ = σ(W⁽²⁾z), W⁽²⁾ ∈ ℝ^(k×(m+1))",
    "note": "One weight matrix between each adjacent pair of layers; +1 column for the bias (slide 42).",
    "week": "W5"
  },
  {
    "name": "Parameter count (one hidden layer, with biases)",
    "formula": "#weights = m(d + 1) + k(m + 1)",
    "note": "Derived from the matrix sizes on slide 42; e.g. d=10, m=5, k=3 gives 73.",
    "week": "W5"
  },
  {
    "name": "Network as a function",
    "formula": "f(X; W) = y",
    "note": "A deep feed-forward net maps inputs X to outputs y via parameters W (slides 7, 43).",
    "week": "W5"
  },
  {
    "name": "Sigmoid activation",
    "formula": "σ(v) = 1 / (1 + e^(-v)),  σ(0) = 0.5",
    "note": "Hidden unit activation in the worked example.",
    "week": "W5"
  },
  {
    "name": "Two-layer forward pass",
    "formula": "v = W(1)x,  z = [1; σ(v)],  ŷ = W(2)z  (W(1): m x (d+1), W(2): k x (m+1))",
    "note": "Forward computation for one hidden layer with bias units.",
    "week": "W5"
  },
  {
    "name": "Chain rule",
    "formula": "d f(g(x))/dx = f'(g(x)) g'(x);  ∂y/∂x = (∂y/∂u)(∂u/∂v)(∂v/∂x)",
    "note": "Basis of backpropagation.",
    "week": "W5"
  },
  {
    "name": "Vector chain rule",
    "formula": "∂J/∂v = (∂J/∂z)(∂z/∂v)",
    "note": "Jacobian form used for layer-to-layer propagation (optional slide).",
    "week": "W5"
  },
  {
    "name": "Output weight gradient (regression)",
    "formula": "∂J/∂w_q(2) = 2(ŷ - y) z_q",
    "note": "J = (y - ŷ)^2 with identity output.",
    "week": "W5"
  },
  {
    "name": "Hidden weight gradient (regression)",
    "formula": "∂J/∂w_{q,j}(1) = 2(ŷ - y) w_q(2) z_q(1 - z_q) x_j",
    "note": "Full chain w to v to z to ŷ to J; e.g. w_{1,2}(1) gives -1 in the slide example.",
    "week": "W5"
  },
  {
    "name": "Hidden error signal (2-layer)",
    "formula": "δ_q(1) = ∂J/∂v_q = δ(2) w_q(2) z_q(1 - z_q)",
    "note": "δ(1) = [-0.5, -0.5] in the slide example.",
    "week": "W5"
  },
  {
    "name": "Linear layer weight gradient",
    "formula": "z = Wx, ∂J/∂z = δᵀ  gives  ∂J/∂W = δ xᵀ",
    "note": "Outer product; same shape as W.",
    "week": "W5"
  },
  {
    "name": "Logistic layer weight gradient",
    "formula": "z = σ(Wx)  gives  ∂J/∂W = (δ ∘ z ∘ (1 - z)) xᵀ",
    "note": "∘ is the elementwise product.",
    "week": "W5"
  },
  {
    "name": "General layer forward",
    "formula": "v(l) = W(l) z(l-1),  z(l) = σ(v(l))",
    "note": "Pre-activation then activation at layer l.",
    "week": "W5"
  },
  {
    "name": "General layer backward",
    "formula": "δ_v(l) = δ_z(l) ⊙ z(l) ⊙ (1 - z(l));  ∂J/∂W(l) = δ_v(l)(z(l-1))ᵀ;  δ_z(l-1) = (W(l))ᵀ δ_v(l)",
    "note": "Repeat from the output layer down to layer 1.",
    "week": "W5"
  },
  {
    "name": "Error backpropagation (adjacent layers)",
    "formula": "Logistic: δ(5) = W(6)ᵀ(δ(6) ∘ z(6) ∘ (1 - z(6)));  Identity: δ(5) = W(6)ᵀ δ(6)",
    "note": "Error passed from layer 6 to layer 5.",
    "week": "W5"
  },
  {
    "name": "Gradient of weights (adjacent layers)",
    "formula": "Logistic: ∂J/∂W(6) = (δ(6) ∘ z(6) ∘ (1 - z(6))) z(5)ᵀ;  Identity: ∂J/∂W(6) = δ(6) z(5)ᵀ",
    "note": "Weight gradient at layer 6.",
    "week": "W5"
  },
  {
    "name": "Regression output gradient",
    "formula": "J = (y - ŷ)^2,  ŷ = v(L):  ∂J/∂ŷ = ∂J/∂v(L) = 2(ŷ - y)",
    "note": "Starting error for regression.",
    "week": "W5"
  },
  {
    "name": "Binary cross-entropy output gradient",
    "formula": "J = -[y ln ŷ + (1 - y) ln(1 - ŷ)],  ŷ = σ(v(L)):  ∂J/∂ŷ = (ŷ - y)/(ŷ(1 - ŷ)),  ∂J/∂v(L) = ŷ - y",
    "note": "Sigmoid derivative cancels the denominator.",
    "week": "W5"
  },
  {
    "name": "Multiclass cross-entropy output gradient",
    "formula": "J = -Σ_k y_k ln ŷ_k,  ŷ = softmax(v(L)):  ∂J/∂ŷ_k = -y_k/ŷ_k (vector -y ⊘ ŷ),  ∂J/∂v(L) = ŷ - y",
    "note": "Starting error for softmax classification.",
    "week": "W5"
  },
  {
    "name": "Binary BP in matrix form",
    "formula": "∂J/∂W(2) = (ŷ - y) zᵀ;  δ(1) = (ŷ - y) W(2)ᵀ;  ∂J/∂W(1) = (δ(1) ∘ z ∘ (1 - z)) xᵀ",
    "note": "Optional slide p.69.",
    "week": "W5"
  },
  {
    "name": "Multiclass BP in matrix form",
    "formula": "δ(2) = -1_y ∘ (1 ⊘ ŷ);  ∂J/∂W(2) = (1_y ∘ (ŷ - 1)) zᵀ;  δ(1) = W(2)ᵀ(1_y ∘ (ŷ - 1))",
    "note": "Optional slide p.70; 1_y is the one-hot vector of y, sigmoid outputs.",
    "week": "W5"
  },
  {
    "name": "Gradient descent weight update",
    "formula": "W(l) ← W(l) - η ∂J/∂W(l)",
    "note": "Applied at every level; mini-batch version accumulates into W_new then copies back.",
    "week": "W5"
  },
  {
    "name": "Regularized cost",
    "formula": "C · J(w; X, y) + ||w||",
    "note": "C controls how strongly large parameters are penalized (relative to fit).",
    "week": "W5"
  },
  {
    "name": "Dropout keep factor",
    "formula": "α = 1 - drop-off rate;  test-time pre-activation = α × (W z), or use αW",
    "note": "Neuron turned off with probability 1 - α in training; discount at test.",
    "week": "W5"
  },
  {
    "name": "Xavier/He initialization ranges",
    "formula": "Logistic: r = sqrt(6/(n_in + n_out)), σ = sqrt(2/(n_in + n_out));  tanh: 4 × these;  ReLU: sqrt(2) × these",
    "note": "Uniform on [-r, r] or normal with std σ (table on slide p.84, from Geron 1st ed.). Caution: the original Glorot/Xavier paper puts the factor 4 on the logistic unit, not tanh; use the slide's version for this course.",
    "week": "W5"
  },
  {
    "name": "Dropout ensemble size",
    "formula": "number of sub-networks = 2^(number of non-output units)",
    "note": "e.g. 4 non-output units gives 16 sub-networks (slide p.82).",
    "week": "W5"
  },
  {
    "name": "3 x 3 spatial filter response",
    "formula": "g(x, y) = Σ_{i=-1..1} Σ_{j=-1..1} w(i, j) · f(x+i, y+j)",
    "note": "Response at pixel (x, y): filter coefficients times pixels under them, summed (slide p.8).",
    "week": "W6"
  },
  {
    "name": "General linear spatial filter",
    "formula": "g(x, y) = Σ_{i=-a..a} Σ_{j=-b..b} w(i, j) · f(x+i, y+j)",
    "note": "Same operation for a (2a+1) x (2b+1) filter (slide p.8).",
    "week": "W6"
  },
  {
    "name": "Box filter response",
    "formula": "R = (1/9) Σ_{i,j} x_{i,j}",
    "note": "3 x 3 box filter = mean of the neighbourhood (slide p.10).",
    "week": "W6"
  },
  {
    "name": "Box (averaging) kernel",
    "formula": "(1/9) × [[1,1,1],[1,1,1],[1,1,1]]",
    "note": "Equal-weight smoothing / lowpass filter (slide p.10).",
    "week": "W6"
  },
  {
    "name": "Weighted averaging kernel",
    "formula": "(1/16) × [[1,2,1],[2,4,2],[1,2,1]]",
    "note": "Centre-weighted smoothing filter, 'more smoothed effect' (slide p.10).",
    "week": "W6"
  },
  {
    "name": "Laplacian kernel",
    "formula": "[[0,1,0],[1,-4,1],[0,1,0]]",
    "note": "Second-derivative edge detector; coefficients sum to 0 (slide p.13).",
    "week": "W6"
  },
  {
    "name": "Laplacian display rescaling",
    "formula": "filtered ← filtered − min(filtered);  filtered ← filtered × (255 / max(filtered))",
    "note": "Shift and scale Laplacian output into [0, 255] for display (slide p.14).",
    "week": "W6"
  },
  {
    "name": "Laplacian sharpening",
    "formula": "sharpened = f − ∇²f   (with the −4-centre Laplacian)",
    "note": "Subtract the Laplacian edge map from the original to sharpen (slide p.14).",
    "week": "W6"
  },
  {
    "name": "Sharpening kernel (5-centre)",
    "formula": "[[0,-1,0],[-1,5,-1],[0,-1,0]]",
    "note": "Identity minus Laplacian; coefficients sum to 1 so it outputs a sharpened image (slides p.15, p.21).",
    "week": "W6"
  },
  {
    "name": "8-neighbour edge kernel",
    "formula": "[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]",
    "note": "Includes diagonals; sums to 0, outputs an edge map (slide p.16).",
    "week": "W6"
  },
  {
    "name": "1D convolution (stride s)",
    "formula": "y_k = Σ_{j=1..m} w_j · x_{s·k + j}",
    "note": "Shared kernel (w1..wm) slides along the input; example kernel (1, 0, -1) (slide p.17).",
    "week": "W6"
  },
  {
    "name": "Convolution output size",
    "formula": "O = (N + 2P − F) / S + 1",
    "note": "N input size, F filter size, P padding, S stride; e.g. 7,3,0,1 gives 5; 7,3,0,2 gives 3; 7,3,1,1 gives 7; 32,5,0,1 gives 28 (slides p.22-30).",
    "week": "W6"
  },
  {
    "name": "Conv neuron pre-activation",
    "formula": "z = wᵀx + b",
    "note": "Dot product of filter w (e.g. 5x5x3) with an image chunk x of the same shape, plus bias (slide p.29).",
    "week": "W6"
  },
  {
    "name": "Conv neuron activation",
    "formula": "a = σ(wᵀx + b)",
    "note": "Activation function applied after the convolution (slide p.29).",
    "week": "W6"
  },
  {
    "name": "Conv layer output volume",
    "formula": "O × O × K   (K = number of filters)",
    "note": "Each filter gives one O x O activation map; 2 filters on 32x32x3 with 5x5x3 give 28x28x2 (slide p.31).",
    "week": "W6"
  },
  {
    "name": "Conv layer parameter count",
    "formula": "params = K × (F_h × F_w × C_in + 1)",
    "note": "Each of K filters spans all C_in input channels plus one bias, e.g. 6 × (5×5×3 + 1) = 456.",
    "week": "W6"
  },
  {
    "name": "Pooling output size",
    "formula": "O = (N − F)/S + 1; with F = S = 2 (non-overlapping), O = N/2; depth unchanged",
    "note": "Max/avg pooling acts per feature map, e.g. 3×24×24 to 3×12×12.",
    "week": "W6"
  },
  {
    "name": "Max pooling",
    "formula": "y = max over (i,j) in window of x_ij",
    "note": "Outputs the largest activation in each non-overlapping window.",
    "week": "W6"
  },
  {
    "name": "Average pooling",
    "formula": "y = (1/|window|) Σ over (i,j) in window of x_ij",
    "note": "Outputs the mean of each window, e.g. (2+3+6+8)/4 = 4.75.",
    "week": "W6"
  },
  {
    "name": "Global average pooling",
    "formula": "y_c = (1/(H·W)) Σ_i Σ_j x_ijc;  H×W×C becomes 1×1×C",
    "note": "GoogLeNet replaces FC layers with this; zero parameters versus 7×7×1024×1024 ≈ 51.4M for FC.",
    "week": "W6"
  },
  {
    "name": "Convolution multiplication count",
    "formula": "ops = H_out × W_out × K × (F_h × F_w × C_in)",
    "note": "Slide p.56: 14×14×48×5×5×480 ≈ 112.9M direct versus ≈ 5.3M with a 1×1 bottleneck to 16 channels.",
    "week": "W6"
  },
  {
    "name": "Fully connected (Dense) parameter count",
    "formula": "params = n_in × n_out + n_out",
    "note": "E.g. Flatten 1,024 to Dense(128) gives 131,200 parameters.",
    "week": "W6"
  },
  {
    "name": "Residual block output",
    "formula": "y = ReLU(F(x) + x)",
    "note": "ResNet: layers learn residual F(x); the identity skip connection adds x back.",
    "week": "W6"
  },
  {
    "name": "ConvNet layer pattern",
    "formula": "INPUT -> [[CONV -> RELU]*N -> POOL?]*M -> [FC -> RELU]*K -> FC   (N ≥ 0, usually N ≤ 3; M ≥ 0; K ≥ 0, usually K < 3)",
    "note": "General template for stacking CNN layers (slide p.63).",
    "week": "W6"
  },
  {
    "name": "Simplest RNN (single neuron)",
    "formula": "y(t) = σ(wᵀ x(t) + y(t-1) + b)",
    "note": "One neuron feeding its own output back as input at the next step (slide p.17).",
    "week": "W7"
  },
  {
    "name": "RNN layer",
    "formula": "y(t) = σ(W_xᵀ x(t) + W_yᵀ y(t-1) + b)",
    "note": "Every neuron receives the input vector and the previous output vector; y(t) depends on all inputs since t = 0 (slide p.18).",
    "week": "W7"
  },
  {
    "name": "Memory cell output and state",
    "formula": "y(t) = W_yᵀ h(t) + b_y,  h(t) = σ(W_xᵀ x(t) + W_hᵀ h(t-1) + b)",
    "note": "Cell keeps hidden state h across steps and produces output from it (slide p.19).",
    "week": "W7"
  },
  {
    "name": "Vanilla RNN hidden state",
    "formula": "h(t) = tanh(W_xᵀ x(t) + W_hᵀ h(t-1) + b)",
    "note": "Vanilla RNN cell uses tanh; output y(t) = W_yᵀ h(t) + b_y (slide p.24).",
    "week": "W7"
  },
  {
    "name": "Stacked form of vanilla RNN",
    "formula": "h_t = tanh(W_hᵀ h(t-1) + W_xᵀ x(t)) = tanh([W_hᵀ W_xᵀ] [h(t-1); x(t)]) = tanh(Wᵀ [h(t-1); x(t)])",
    "note": "One matrix W on the stacked state and input; backprop from h(t) to h(t-1) multiplies by W (slides p.29-30).",
    "week": "W7"
  },
  {
    "name": "Hyperbolic tangent",
    "formula": "tanh(x) = sinh(x)/cosh(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ) = (e²ˣ - 1)/(e²ˣ + 1) = (1 - e⁻²ˣ)/(1 + e⁻²ˣ) ∈ (-1, 1)",
    "note": "Zero-centred activation used in RNNs; makes convergence faster (slide p.25).",
    "week": "W7"
  },
  {
    "name": "tanh vs sigmoid",
    "formula": "tanh(x) = 2·σ(2x) - 1",
    "note": "tanh is a rescaled, shifted sigmoid (slide p.25).",
    "week": "W7"
  },
  {
    "name": "Vanilla RNN parameter count",
    "formula": "params = d·n + n² + n  (input d, hidden n; add n·k + k for an output layer of size k)",
    "note": "Derived from W_x, W_h, b; independent of sequence length due to weight sharing.",
    "week": "W7"
  },
  {
    "name": "Gradient growth / decay over T steps",
    "formula": "gradient scale ≈ (largest singular value of W)^T, where T = number of steps;  > 1 explodes, < 1 vanishes",
    "note": "Repeated factors of W in BPTT (slide p.31); e.g. 1.1⁵⁰ ≈ 117, 0.9⁵⁰ ≈ 0.005.",
    "week": "W7"
  },
  {
    "name": "LSTM forget gate",
    "formula": "f_t = σ(W_f · [h_(t-1), x_t] + b_f)",
    "note": "Decides which parts of the long-term state to erase (slide p.36).",
    "week": "W7"
  },
  {
    "name": "LSTM input gate",
    "formula": "i_t = σ(W_i · [h_(t-1), x_t] + b_i)",
    "note": "Decides which parts of the candidate to add to the cell state (slide p.37).",
    "week": "W7"
  },
  {
    "name": "LSTM candidate state",
    "formula": "C̃_t = tanh(W_C · [h_(t-1), x_t] + b_C)",
    "note": "New candidate values for the cell state, in (-1, 1) (slide p.37).",
    "week": "W7"
  },
  {
    "name": "LSTM cell state update",
    "formula": "C_t = f_t * C_(t-1) + i_t * C̃_t",
    "note": "Element-wise: keep part of old memory, add part of new candidate (slide p.38).",
    "week": "W7"
  },
  {
    "name": "LSTM output gate and hidden state",
    "formula": "o_t = σ(W_o · [h_(t-1), x_t] + b_o),  h_t = o_t * tanh(C_t)",
    "note": "Selects which parts of the long-term state are output (slide p.39).",
    "week": "W7"
  },
  {
    "name": "LSTM parameter count",
    "formula": "params = 4 · (n·(n + d) + n)",
    "note": "Four weight matrices (f, i, C̃, o) on [h, x] of size n + d; four times a vanilla RNN cell.",
    "week": "W7"
  },
  {
    "name": "Scaled dot-product attention",
    "formula": "Attention(Q, K, V) = softmax(QKᵀ / √d_k) V",
    "note": "Core Transformer equation; scores scaled by 1/√d_k, softmax row-wise, then weight the values (slides p.43, p.52, p.80).",
    "week": "W7"
  },
  {
    "name": "Embedding similarity",
    "formula": "similarity(word_i, word_j) = w_iᵀ w_j = w_jᵀ w_i",
    "note": "Plain symmetric dot-product similarity of 512-d word embeddings, the baseline before learned projections (slide p.49).",
    "week": "W7"
  },
  {
    "name": "Query/key score via projections",
    "formula": "q_jᵀ k_i = ((W^Q)ᵀ w_j)ᵀ ((W^K)ᵀ w_i) = w_jᵀ W^Q (W^K)ᵀ w_i",
    "note": "Learned, asymmetric similarity: attention of word_i when generating word_j (slide p.51).",
    "week": "W7"
  },
  {
    "name": "Unnormalised attention output",
    "formula": "o_j = Σ_{i=1}^{300} (q_jᵀ k_i) v_i",
    "note": "Output of word j as attention-weighted sum of values; softmax turns the scores into weights (slide p.52).",
    "week": "W7"
  },
  {
    "name": "Q, K, V projections",
    "formula": "qⁱ = W^q aⁱ,  kⁱ = W^k aⁱ,  vⁱ = W^v aⁱ;  Qᵀ = W^q I, Kᵀ = W^k I, Vᵀ = W^v I with I = [a¹ a² a³ a⁴]",
    "note": "Every input produces a query, key and value using shared learned matrices (slides p.73-78).",
    "week": "W7"
  },
  {
    "name": "Dot-product attention score",
    "formula": "α_{1←i} = q¹ · kⁱ",
    "note": "Relevance of input i to query 1 (slides p.72-73).",
    "week": "W7"
  },
  {
    "name": "Additive attention score",
    "formula": "α = W tanh(W^q x_q + W^k x_k)",
    "note": "Alternative relevance function from the figure: add projections, tanh, then linear map W (slide p.72).",
    "week": "W7"
  },
  {
    "name": "Softmax attention weights",
    "formula": "α'_{1←i} = exp(α_{1←i}) / Σ_j exp(α_{1←j})",
    "note": "Normalises scores into positive weights summing to 1 (slide p.74).",
    "week": "W7"
  },
  {
    "name": "Self-attention output",
    "formula": "bⁱ = Σ_j α'_{i←j} vʲ   (e.g. b¹ = Σ_j α'_{1←j} vʲ)",
    "note": "Each output is the weighted sum of all values by its attention weights (slides p.75, p.77).",
    "week": "W7"
  },
  {
    "name": "Attention matrix",
    "formula": "A = QKᵀ;  A' = row-wise softmax(A / √d_k);  output = A'V",
    "note": "All pairwise scores at once; n tokens give an n x n matrix (slide p.80).",
    "week": "W7"
  },
  {
    "name": "Encoder-decoder context vector",
    "formula": "c_t = Σ_i α_{t,i} h_i",
    "note": "Decoder step t reads a new mixture of encoder states; e.g. c_2 = 0.05 h_I + 0.55 h_live + 0.35 h_in + 0.05 h_Singapore (slide p.62).",
    "week": "W7"
  },
  {
    "name": "Weighted average (attention intuition)",
    "formula": "Milo = 0.1 x very + 0.3 x cute + 0.6 x dog",
    "note": "Attention as a weighted average of value vectors with weights from queries and keys (slide p.48).",
    "week": "W7"
  },
  {
    "name": "VAE sampled coding",
    "formula": "coding = μ + σ x ε,  ε ~ N(0, 1)  (i.e. coding ~ N(μ, σ²))",
    "note": "Encoder outputs μ and σ; Gaussian noise times σ is added to μ as in the diagram (slides p.65-66).",
    "week": "W7"
  },
  {
    "name": "Dense layer parameter count (autoencoder)",
    "formula": "params = Σ_layers (n_in x n_out + n_out); 784-100-30-100-784 gives 162,800 + 1,014 = 163,814",
    "note": "Standard count for the FNN encoder-decoder on slide p.59.",
    "week": "W7"
  },
  {
    "name": "Raw attention score",
    "formula": "α(i from j) = qⁱ · kʲ;  A = QKᵀ",
    "note": "Dot product of query i with key j; stacking gives the n x n raw score matrix (slide p.80).",
    "week": "W7"
  },
  {
    "name": "Row-wise softmax",
    "formula": "A'ᵢⱼ = exp(Sᵢⱼ) / Σₖ exp(Sᵢₖ)",
    "note": "Normalises each row of scaled scores to sum to 1.",
    "week": "W7"
  },
  {
    "name": "Multi-head projections",
    "formula": "q^(i,h) = W^(q,h) qⁱ  (same for k, v), with qⁱ = W^q aⁱ",
    "note": "Each head h gets its own projected q, k, v (slide p.84).",
    "week": "W7"
  },
  {
    "name": "Multi-head output",
    "formula": "bⁱ = W^O [b^(i,1); b^(i,2); ...]",
    "note": "Concatenate head outputs and mix with a learned output matrix (slide p.86).",
    "week": "W7"
  },
  {
    "name": "Residual connection",
    "formula": "output = F(x) + x",
    "note": "Add step of Add & Norm; helps prevent vanishing gradients (slide p.87).",
    "week": "W7"
  },
  {
    "name": "Layer normalisation",
    "formula": "x'ᵢ = (xᵢ − m) / σ,  m = mean(x₁..x_K), σ = std(x₁..x_K)",
    "note": "Statistics are taken across the elements of a single vector (slide p.88).",
    "week": "W7"
  },
  {
    "name": "Sinusoidal positional encoding (even dims)",
    "formula": "PE(pos, 2i) = sin( pos / 10000^(i / (d_model/2)) ),  0 ≤ i < d_model/2",
    "note": "Added to word embeddings; same length d_model (slide p.89).",
    "week": "W7"
  },
  {
    "name": "Sinusoidal positional encoding (odd dims)",
    "formula": "PE(pos, 2i+1) = cos( pos / 10000^(i / (d_model/2)) )",
    "note": "Pairs with the sine term; d_model = 4, pos = 1 gives [0.84, 0.54, 0.01, 1.00].",
    "week": "W7"
  },
  {
    "name": "Transformer input",
    "formula": "input = word embedding + positional encoding",
    "note": "Injects order information that self-attention lacks (slide p.89).",
    "week": "W7"
  },
  {
    "name": "Generalised RNN",
    "formula": "H(t) = r(t)(H(t−1)) + f(t)(x(t));  y(t) = g(t)(H(t))",
    "note": "Optional; nested r calls block parallel training (slides p.109-111).",
    "week": "W7"
  },
  {
    "name": "RNN without r (parallelisable)",
    "formula": "H(t) = H(t−1) + f(t)(x(t)) = f(1)(x(1)) + f(2)(x(2)) + ... + f(t)(x(t))",
    "note": "Optional; a running sum whose terms can be computed in parallel (slide p.112).",
    "week": "W7"
  },
  {
    "name": "Linear attention",
    "formula": "y(t) = Σ_{s=1..t} v(s) k(s)ᵀ q(t),  with q = W^Q x, k = W^K x, v = W^V x",
    "note": "Optional; self-attention without softmax, causal by construction (slide p.114).",
    "week": "W7"
  },
  {
    "name": "Linear attention recurrence",
    "formula": "S_t = S_(t−1) + v_t k_tᵀ;  o_t = S_t q_t",
    "note": "Optional; RetNet uses S_t = γ S_(t−1) + v_t k_tᵀ, Mamba-2 uses γ_t (slide p.115).",
    "week": "W7"
  },
  {
    "name": "Perplexity",
    "formula": "PP = exp( −(1/N) Σᵢ log P(wᵢ | w₁, ..., wᵢ₋₁) )",
    "note": "Exponential of average negative log-likelihood; lower means less uncertainty (slide p.116).",
    "week": "W7"
  },
  {
    "name": "Causal mask count",
    "formula": "allowed weights = n(n+1)/2 out of n²",
    "note": "Derived: token i attends to positions 1..i; n = 4 gives 10 of 16.",
    "week": "W7"
  },
  {
    "name": "GAN discriminator objective",
    "formula": "max_D  E_{x~p_x}[log D(x)] + E_{z~p_z}[log(1 − D(G(z)))]",
    "note": "With G fixed, D pushes D(x) toward 1 on real data and D(G(z)) toward 0 on fakes (slide p.10).",
    "week": "W8"
  },
  {
    "name": "GAN generator objective (theory)",
    "formula": "min_G  E_{z~p_z}[log(1 − D(G(z)))]",
    "note": "With D fixed, G tries to make D(G(z)) near 1; the theoretical generator step (slides p.10-11).",
    "week": "W8"
  },
  {
    "name": "GAN generator objective (in practice)",
    "formula": "max_G  E_{z~p_z}[log D(G(z))]",
    "note": "Practical replacement for the generator step used in training (slide p.11); same goal of D(G(z)) toward 1.",
    "week": "W8"
  },
  {
    "name": "GAN min-max problem",
    "formula": "min_G max_D { E_{x~p_x}[log D(x)] + E_{z~p_z}[log(1 − D(G(z)))] }",
    "note": "Overall GAN game, solved by alternating step 1 (fix G, update D) and step 2 (fix D, update G) (slide p.11).",
    "week": "W8"
  },
  {
    "name": "Next-word training pairs from a sentence (derived)",
    "formula": "pairs = N − 1  for a sequence of N words (prefix w1..wk predicts w(k+1), k = 1..N−1)",
    "note": "How self-supervised pre-training data is built from raw text (slide p.20 example: 5 words give 4 pairs).",
    "week": "W8"
  },
  {
    "name": "Active-parameter fraction (derived)",
    "formula": "active fraction = active parameters / total parameters",
    "note": "Compare sparse models in the LLM table, e.g. DeepSeek R1 37/671 ≈ 5.5%, Mixtral 39/141 ≈ 27.7% (slide p.22).",
    "week": "W8"
  },
  {
    "name": "Reward model pairwise ranking loss",
    "formula": "loss(θ) = -(1 / C(K,2)) × E_(x, y_w, y_l)~D [ log σ( r_θ(x, y_w) - r_θ(x, y_l) ) ]",
    "note": "Trains the reward model to score the human-preferred completion y_w above y_l; K outputs ranked per prompt give C(K,2) pairs.",
    "week": "W8"
  },
  {
    "name": "Number of comparison pairs from a ranking",
    "formula": "C(K,2) = K(K - 1) / 2",
    "note": "Pairs obtained when a labeler ranks K outputs; K = 4 gives 6.",
    "week": "W8"
  },
  {
    "name": "RLHF reward with KL prediction shift penalty",
    "formula": "R(x, y) = r_θ(y|x) - λ_KL × D_KL( π_PPO(y|x) || π_base(y|x) )",
    "note": "Reward model score minus a penalty for the tuned LM drifting from the initial LM; used in ChatGPT step 3.",
    "week": "W8"
  },
  {
    "name": "Trajectory probability",
    "formula": "p_θ(τ) = p(s1) π_θ(a1|s1) p(s2|s1,a1) π_θ(a2|s2) p(s3|s2,a2) π_θ(a3|s3) ...",
    "note": "Probability of a state-action sequence under policy π_θ and environment transitions.",
    "week": "W8"
  },
  {
    "name": "Discounted total reward",
    "formula": "R(τ) = r1 + γ r2 + γ² r3 + ...",
    "note": "Return of a trajectory; γ discounts later rewards.",
    "week": "W8"
  },
  {
    "name": "Policy gradient",
    "formula": "∇_θ J(θ) = E_τ[ R(τ) × Σ_{t=1..T} ∇ log π_θ(a_t|s_t) ]",
    "note": "Raise log-probability of actions in trajectories with high total reward.",
    "week": "W8"
  },
  {
    "name": "Gradient ascent update",
    "formula": "θ <- θ + η ∇_θ J(θ)",
    "note": "Policy parameter update after each round of data collection (η = learning rate).",
    "week": "W8"
  },
  {
    "name": "PPO objective",
    "formula": "J^θ'_PPO(θ) = J^θ'(θ) - β × KL(θ, θ')",
    "note": "Policy improvement objective penalised for moving the new policy θ too far from the data-collecting policy θ'.",
    "week": "W8"
  },
  {
    "name": "PPO importance-weighted surrogate",
    "formula": "J^θ'(θ) = E_(s_t, a_t)~π_θ' [ ( π_θ(a_t|s_t) / π_θ'(a_t|s_t) ) × A^θ'(s_t, a_t) ]",
    "note": "Reuses samples from the old policy θ' by re-weighting with the probability ratio times the advantage.",
    "week": "W8"
  },
  {
    "name": "Pixel count for autoregressive image generation",
    "formula": "steps = H × W  (256 × 256 = 65,536)",
    "note": "Number of sequential steps when generating one pixel at a time.",
    "week": "W8"
  },
  {
    "name": "VAE latent sampling",
    "formula": "z = μ + σ × ε,  ε ~ Gaussian noise",
    "note": "Codings μ and σ combined with Gaussian noise to form the latent code (VAE figure, slide p.59).",
    "week": "W8"
  },
  {
    "name": "Denoise step",
    "formula": "x_(t-1) = x_t - NoisePredictor(x_t, t)",
    "note": "Schematic from slide p.64: the predicted noise for step t is subtracted from the noisy image to get a less noisy image.",
    "week": "W8"
  },
  {
    "name": "DDPM noisy sample (forward, closed form)",
    "formula": "x_t = √ᾱ_t x₀ + √(1 − ᾱ_t) ε,  ε ~ N(0, I)",
    "note": "Jump directly to timestep t during training; ᾱ_t decreases with t so later steps are noisier (slide p.68).",
    "week": "W8"
  },
  {
    "name": "DDPM training loss",
    "formula": "L = ‖ε − ε_θ(√ᾱ_t x₀ + √(1 − ᾱ_t) ε, t)‖²,  t ~ Uniform({1, ..., T})",
    "note": "MSE between true and predicted noise; one gradient step per sampled (x₀, t, ε) (Algorithm 1, slide p.67).",
    "week": "W8"
  },
  {
    "name": "DDPM sampling step",
    "formula": "x_{t−1} = (1/√α_t) (x_t − ((1 − α_t)/√(1 − ᾱ_t)) ε_θ(x_t, t)) + σ_t z,  z ~ N(0, I) if t > 1 else z = 0",
    "note": "Subtract scaled predicted noise, rescale, then add fresh noise; repeat from t = T to 1 starting at x_T ~ N(0, I) (Algorithm 2, slide p.67).",
    "week": "W8"
  },
  {
    "name": "Fréchet distance between Gaussians",
    "formula": "d_F(N(μ, Σ), N(μ′, Σ′))² = ‖μ − μ′‖²₂ + tr(Σ + Σ′ − 2(Σ^½ Σ′ Σ^½)^½)",
    "note": "FID when applied to CNN features of real vs generated images; smaller is better (slide p.81).",
    "week": "W8"
  },
  {
    "name": "FID in 1-D / diagonal case (derived)",
    "formula": "d_F² = Σᵢ (μᵢ − μ′ᵢ)² + Σᵢ (σᵢ − σ′ᵢ)²",
    "note": "Special case when covariances are diagonal (or scalar); σᵢ, σ′ᵢ are standard deviations (square roots of the diagonal variances), not variances. Handy for hand calculation.",
    "week": "W8"
  },
  {
    "name": "FID procedure",
    "formula": "1) compute f(x), f(x′) ∈ Rᵏ; 2) fit N(μ, Σ) to f(x) and N(μ′, Σ′) to f(x′); 3) compute d_F²",
    "note": "f is a pretrained CNN; requires many samples to estimate means and covariances (slides p.81-82).",
    "week": "W8"
  },
  {
    "name": "Scaled dot-product (cross-)attention",
    "formula": "Attention(Q, K, V) = softmax(QKᵀ / √d) V",
    "note": "Used inside the LDM denoising U-Net to inject the condition (slide p.93).",
    "week": "W8"
  },
  {
    "name": "LDM cross-attention projections",
    "formula": "Q = W_Q⁽ⁱ⁾ φᵢ(z_t),  K = W_K⁽ⁱ⁾ τ_θ(y),  V = W_V⁽ⁱ⁾ τ_θ(y)",
    "note": "Queries from the intermediate U-Net features of the latent; keys and values from the encoded condition y (slide p.93).",
    "week": "W8"
  },
  {
    "name": "Latent Diffusion Model loss",
    "formula": "L_LDM = E_{ℰ(x), y, ε~N(0,1), t} [ ‖ε − ε_θ(z_t, t, τ_θ(y))‖²₂ ]",
    "note": "DDPM noise-prediction loss applied in latent space z = ℰ(x) and conditioned on τ_θ(y) (Rombach et al. 2022, slide p.93).",
    "week": "W8"
  },
  {
    "name": "Auto-encoder shapes",
    "formula": "Encoder: H × W × 3 to h × w × c;  Decoder: h × w × c to H × W × 3;  compression = (H × W × 3)/(h × w × c)",
    "note": "Decoder of a reconstruction-trained auto-encoder is Step 3 of Stable Diffusion (slide p.91).",
    "week": "W8"
  }
]
