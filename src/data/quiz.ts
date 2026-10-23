import type { QuizQuestion } from './types'

export const questions: readonly QuizQuestion[] = [
  {
    "id": "i1",
    "topic": "Intro",
    "question": "In Tom Mitchell's definition, a computer program is said to learn when which of the following holds?",
    "options": [
      "Its performance at tasks in T, as measured by P, improves with experience E",
      "Its training error on experience E reaches zero for all tasks in T",
      "It can restate the rules of task T without any experience E",
      "Its performance measure P stays constant while experience E grows"
    ],
    "answerIndex": 0,
    "explanation": "The slides quote Mitchell: 'A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.' A well-defined ML task is the triple <T, P, E>."
  },
  {
    "id": "i2",
    "topic": "Intro",
    "question": "In the checkers example (Arthur Samuel, 1952), what is the performance measure P?",
    "options": [
      "Number of practice games played against itself",
      "Percentage of games won against an arbitrary opponent",
      "Percentage of board positions correctly evaluated",
      "Average number of moves needed to win a game"
    ],
    "answerIndex": 1,
    "explanation": "The slide defines T = playing checker games, P = percentage of games won against an arbitrary opponent, and E = playing practice games against many people or itself. Practice games are the experience E, not the measure P."
  },
  {
    "id": "i3",
    "topic": "Intro",
    "question": "According to the 'What is machine learning?' diagrams, what does machine learning take as input and produce as output?",
    "options": [
      "Takes Data + Program, produces Output",
      "Takes Model + Output, produces Data",
      "Takes Data + Output, produces a Model",
      "Takes Program + Output, produces Data"
    ],
    "answerIndex": 2,
    "explanation": "Traditional programming feeds Data + Program into the computer to get Output; machine learning feeds Data + Output into the computer to get a Model, which is then used as the program on new data."
  },
  {
    "id": "i4",
    "topic": "Intro",
    "question": "In the Gartner analytics diagram on the 'Why study machine learning?' slide, which analytics type answers 'What will happen?'",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Prescriptive analytics",
      "Predictive analytics"
    ],
    "answerIndex": 3,
    "explanation": "The four levels are Descriptive ('What happened?'), Diagnostic ('Why did it happen?'), Predictive ('What will happen?'), and Prescriptive ('What should I do?', split into Decision Support and Decision Automation)."
  },
  {
    "id": "i5",
    "topic": "Intro",
    "question": "According to 'Machine learning in a nutshell', the three components every machine learning algorithm has are:",
    "options": [
      "Representation, Evaluation, Optimization",
      "Training, Validation, Testing",
      "Statistics, Probability, Calculus",
      "Data, Model, Deployment"
    ],
    "answerIndex": 0,
    "explanation": "The slide states every ML algorithm has three components: Representation (e.g., decision trees, neural networks, SVMs), Evaluation (e.g., accuracy, likelihood, K-L divergence), and Optimization (combinatorial, convex, constrained)."
  },
  {
    "id": "i6",
    "topic": "Intro",
    "question": "Which pairing of an optimization family with its slide example is correct?",
    "options": [
      "Convex optimization — greedy search",
      "Convex optimization — gradient descent",
      "Combinatorial optimization — linear programming",
      "Constrained optimization — gradient descent"
    ],
    "answerIndex": 1,
    "explanation": "The slide pairs combinatorial optimization with greedy search, convex optimization with gradient descent, and constrained optimization with linear programming."
  },
  {
    "id": "i7",
    "topic": "Intro",
    "question": "How does semi-supervised learning differ from the other types of machine learning on the 'Types of machine learning' slide?",
    "options": [
      "Its training data does not include any desired outputs",
      "It learns from rewards obtained from a sequence of actions",
      "Its training data includes a few desired outputs",
      "Its training data includes desired outputs for every example"
    ],
    "answerIndex": 2,
    "explanation": "The slide lists: supervised (inductive) learning — training data includes desired outputs; unsupervised — does not include desired outputs; semi-supervised — includes a few desired outputs; reinforcement learning — rewards from sequence of actions."
  },
  {
    "id": "i8",
    "topic": "Intro",
    "question": "In the supervised learning slide, what output space is given for binary classification?",
    "options": [
      "y in {0, ..., 9}",
      "y in real-valued space ℝ",
      "y in {1, ..., k}",
      "y in {-1, +1}"
    ],
    "answerIndex": 3,
    "explanation": "Binary classification: input x, find y in {-1, +1}; multi-class classification uses {1, ..., k}; regression outputs y in ℝ (or ℝᵈ); [0, ..., 9] is the label set of the ten-digit recognition example of multi-class classification."
  },
  {
    "id": "i9",
    "topic": "Intro",
    "question": "Which unsupervised learning task is described on the slides as 'find a set of prototypes representing the data'?",
    "options": [
      "Dimension reduction / principal components",
      "Clustering",
      "Novelty/anomaly detection",
      "Independent components / dictionary learning"
    ],
    "answerIndex": 1,
    "explanation": "Clustering = find a set of prototypes representing the data; dimension reduction = find a subspace representing the data; independent components/dictionary learning = find a (small) set of factors for observation; novelty/anomaly detection = find the odd one out."
  },
  {
    "id": "i10",
    "topic": "Intro",
    "question": "On the 'Learning by interacting with environment' slide, stock market forecasting is given as an example of which mode of learning?",
    "options": [
      "Batch learning",
      "Active learning",
      "Online learning",
      "Reinforcement learning"
    ],
    "answerIndex": 2,
    "explanation": "Online learning is sequential — observe x₁, predict f(x₁), observe x₂, ... — with stock market forecasting as the example. Active learning's example is asking questions in class; reinforcement learning's examples are playing chess and driving a car; batch learning observes all training data then deploys."
  },
  {
    "id": "i11",
    "topic": "Intro",
    "question": "According to the 'Discriminative vs. Generative' slide, which statement correctly characterizes a generative model?",
    "options": [
      "It estimates the joint distribution over (x, y) and then uses conditional probability to infer y|x",
      "It estimates y|x directly and only cares about the conditional probabilities",
      "It is very good when the underlying data distribution is really complicated, e.g., texts, images, movies",
      "It learns only a decision boundary and classifies by distance to that boundary"
    ],
    "answerIndex": 0,
    "explanation": "Generative models estimate the joint distribution over (x, y), model observations first, then infer p(y|x); they are more intuitive, easier to add prior knowledge, and good for missing variables. Options B, C, and D describe the discriminative approach."
  },
  {
    "id": "i12",
    "topic": "Intro",
    "question": "In the diabetes data-mining example, which learned rule appears on the slide?",
    "options": [
      "If fasting blood sugar is greater than 100 mg/dL, the patient is diagnosed with diabetes",
      "If the patient's fasting blood sugar level is greater than 126 mg/dL, the patient may be at risk for diabetes",
      "If the patient is over 30 years old and obese (BMI > 45), the system suggests a diagnosis",
      "If the patient has increased thirst alone, the system flags the patient for further testing"
    ],
    "answerIndex": 1,
    "explanation": "The slide's learned rules: fasting blood sugar > 126 mg/dL → may be at risk; over 45 years old AND family history → more likely to be diagnosed; obese (BMI > 30) AND increased thirst AND frequent urination → flag for further testing or possible diagnosis. The distractors swap or drop the specific thresholds (126 mg/dL, age 45, BMI 30) and conditions."
  },
  {
    "id": "b1",
    "topic": "Bayesian",
    "question": "In Bayes theorem p(h|D) = p(D|h)·p(h) / p(D), the quantity P(D|h) is called the:",
    "options": [
      "Prior — the probability of hypothesis h",
      "Evidence — the prior probability of training data D",
      "Posterior — the conditional probability of h given D",
      "Likelihood — the conditional probability of D given h"
    ],
    "answerIndex": 3,
    "explanation": "Per the Bayes Theorem slide: P(h) is the prior, P(D) is the evidence, P(h|D) is the posterior, and P(D|h) is the likelihood. The rule reads Posterior ∝ Likelihood × Prior."
  },
  {
    "id": "b2",
    "topic": "Bayesian",
    "question": "A doctor knows meningitis causes stiff neck 50% of the time, the prior of meningitis is 1/50,000, and the prior of stiff neck is 1/20. If a patient has a stiff neck, what is the probability of meningitis?",
    "options": [
      "0.0002",
      "0.002",
      "0.05",
      "0.00001"
    ],
    "answerIndex": 0,
    "explanation": "Apply Bayes theorem: P(M|S) = P(S|M)·P(M) / P(S). Step 1: numerator = 0.5 × (1/50,000) = 0.5 × 0.00002 = 0.00001. Step 2: divide by P(S) = 1/20 = 0.05. Step 3: P(M|S) = 0.00001 / 0.05 = 0.0002 (i.e. 1 in 5,000). Despite the 50% symptom rate, the tiny prior 1/50,000 keeps the posterior small."
  },
  {
    "id": "b3",
    "topic": "Bayesian",
    "question": "According to the slides, MLE coincides with MAP when:",
    "options": [
      "The likelihood is Gaussian",
      "The prior is uniform, i.e. p(h) = p(h′) for all h, h′ ∈ H",
      "The evidence p(D) equals 1",
      "The posterior is uniform"
    ],
    "answerIndex": 1,
    "explanation": "The 'MAP v.s. MLE' slide states: for a uniform prior, i.e. p(h) = p(h′) ∀h, h′ ∈ H, MLE coincides with MAP since p(h|D) ∝ p(D|h)·p(h) — a constant prior does not change the argmax."
  },
  {
    "id": "b4",
    "topic": "Bayesian",
    "question": "Assume 4 independent observations {3.0, 4.0, 5.0, 12.0} are generated from a normal distribution. Using the slide formulas μ = (1/n)Σxᵢ and σ² = (1/n)Σ(xᵢ − μ)², the fitted distribution is:",
    "options": [
      "μ = 6.0, σ² = 12.5",
      "μ = 5.0, σ² = 16.0",
      "μ = 6.0, σ² = 16.7",
      "μ = 5.0, σ² = 12.5"
    ],
    "answerIndex": 0,
    "explanation": "Step 1: μ = (3.0 + 4.0 + 5.0 + 12.0)/4 = 24/4 = 6.0. Step 2: deviations from the mean are −3, −2, −1, +6; squared: 9, 4, 1, 36; sum = 50. Step 3: σ² = 50/4 = 12.5. This matches the slide: N_opt = N(μ = 6.0, σ² = 12.5)."
  },
  {
    "id": "b5",
    "topic": "Bayesian",
    "question": "Why do the slides choose N₁ = N(μ=6.0, σ²=12.5) over N₂ = N(μ=5.0, σ²=16.0) for the data {3.0, 4.0, 5.0, 12.0}?",
    "options": [
      "N₁ has the smaller variance, so it is the simpler model",
      "N₂ assigns zero probability to the observation 12.0",
      "The likelihood of the data under N₁ (≈2.194e-05) is higher than under N₂ (≈1.830e-05), and is the highest among all normal distributions",
      "N₁ was obtained by applying Bayes theorem with a non-uniform prior"
    ],
    "answerIndex": 2,
    "explanation": "The slide computes np.prod(scipy.stats.norm.pdf([3.0,4.0,5.0,12.0], 6.0, sqrt(12.5))) ≈ 2.194e-05 versus ≈ 1.830e-05 for N₂, and states N₁ is chosen because the likelihood of observing {3.0, 4.0, 5.0, 12.0} is the highest among all normal distributions: p(D|N₁) > p(D|all other normal distributions)."
  },
  {
    "id": "b6",
    "topic": "Bayesian",
    "question": "In the curse-of-dimensionality slide, if 5 samples are considered enough in 1-D, how many points are needed in 10-D?",
    "options": [
      "50 points",
      "125 points",
      "9,765,625 points",
      "100,000 points"
    ],
    "answerIndex": 2,
    "explanation": "The slide lists: 1D: 5 points, 2D: 25 points, 3D: 125 points, 10D: 9,765,625 points — i.e. 5^d grows exponentially, which is why high-dimensional learning suffers from insufficient data samples."
  },
  {
    "id": "b7",
    "topic": "Bayesian",
    "question": "Under the naive Bayes conditional independence assumption, the Gaussian model p(xᵢ|C_k) = N(xᵢ|μ_k, Σ_k) is approximated by:",
    "options": [
      "Setting all class means μ_k to zero",
      "Π over j=1..d of p(x_{i,j}|μ_{k,j}, σ_{k,j}) — a product of 1D Gaussians, equivalent to diagonalizing the covariance matrix",
      "A single shared covariance matrix across all classes",
      "Replacing the Gaussian with a multinomial distribution"
    ],
    "answerIndex": 1,
    "explanation": "The Naive Bayes Classifier slide shows p(xᵢ|C_k) ≈ Π p(x_{i,j}|μ_k, Σ_k) = Π p(x_{i,j}|μ_{k,j}, σ_{k,j}), annotated 'diagonalize the covariance matrix' — each attribute gets its own 1D Gaussian, and cross-feature covariances are dropped."
  },
  {
    "id": "b8",
    "topic": "Bayesian",
    "question": "In the 'Play Tennis or Not' example (9 Yes days, 5 No days), what does naive Bayes predict for x = (Outl=Sunny, Temp=Cool, Hum=High, Wind=Strong)?",
    "options": [
      "Yes, simply because P(yes) = 9/14 > P(no) = 5/14",
      "No, because the No score ≈ 0.0206 exceeds the Yes score ≈ 0.0053",
      "Yes, because the Yes score ≈ 0.0206 exceeds the No score ≈ 0.0053",
      "It cannot be classified because some conditional probabilities are zero"
    ],
    "answerIndex": 1,
    "explanation": "Step 1: priors P(yes) = 9/14, P(no) = 5/14. Step 2 (Yes side): P(sunny|yes)=2/9, P(cool|yes)=3/9, P(high|yes)=3/9, P(strong|yes)=3/9; score = (9/14)(2/9)(3/9)(3/9)(3/9) ≈ 0.0053. Step 3 (No side): P(sunny|no)=3/5, P(cool|no)=1/5, P(high|no)=4/5, P(strong|no)=3/5; score = (5/14)(3/5)(1/5)(4/5)(3/5) = 180/8750 ≈ 0.0206. Step 4: 0.0206 > 0.0053, so h_NB = No."
  },
  {
    "id": "b9",
    "topic": "Bayesian",
    "question": "In the Play Tennis table, Sunny appears on Days 9 and 11 among the 9 Yes days. What is P(Outlook=sunny|yes)?",
    "options": [
      "2/9",
      "3/9",
      "3/5",
      "2/14"
    ],
    "answerIndex": 0,
    "explanation": "Using the discrete estimate p(j-th dimension = v|C_k) = Σδ(x_{i,j},v)δ(yᵢ,k) / Σδ(yᵢ,k): among the 9 days with Play Tennis = Yes, Outlook = Sunny occurs on 2 of them (Day 9 and Day 11), so P(sunny|yes) = 2/9. (3/5 is P(sunny|no): Days 1, 2, 8 out of 5 No days.)"
  },
  {
    "id": "b10",
    "topic": "Bayesian",
    "question": "Using the car-attribute tables and assuming equal class priors, classify x = (color=white, type=compact, fuel=petrol). Class C₁: P(white)=0.4, P(compact)=0.5, P(petrol)=0.9. Class C₂: P(white)=0.1, P(compact)=0.1, P(petrol)=0.8.",
    "options": [
      "C₂, with likelihood score 0.032",
      "C₂, with likelihood score 0.18",
      "C₁, with likelihood score 0.18 versus 0.008 for C₂",
      "C₁, with likelihood score 0.008 versus 0.18 for C₂"
    ],
    "answerIndex": 2,
    "explanation": "Naive Bayes multiplies the per-dimension probabilities. Step 1 (C₁): 0.4 × 0.5 × 0.9 = 0.18. Step 2 (C₂): 0.1 × 0.1 × 0.8 = 0.008. Step 3: with equal priors, compare likelihoods directly: 0.18 > 0.008, so x is classified as C₁ — a white compact petrol car fits C₁'s distributions far better."
  },
  {
    "id": "b11",
    "topic": "Bayesian",
    "question": "A dice has P(1) = 0.5 and P(2) = P(3) = P(4) = P(5) = P(6) = 0.1. What is the probability of the ordered sequence of throws (6, 1, 1, 2)?",
    "options": [
      "0.025",
      "0.0025",
      "0.03",
      "0.00125"
    ],
    "answerIndex": 1,
    "explanation": "The throws are independent, so multiply: P(6)·P(1)·P(1)·P(2) = 0.1 × 0.5 × 0.5 × 0.1 = 0.0025. Note the slide also shows P(2,1,6,1) = 0.0025 — reordering the same outcomes gives the same product, motivating 'Does the order matter?'"
  },
  {
    "id": "b12",
    "topic": "Bayesian",
    "question": "Same dice (P(1)=0.5, others 0.1). What is P({1:2, 2:1, 3:0, 4:0, 5:0, 6:1}) — the probability of the unordered bag of 4 throws containing two 1s, one 2, and one 6?",
    "options": [
      "0.0025",
      "0.0075",
      "0.03",
      "0.12"
    ],
    "answerIndex": 2,
    "explanation": "Use the multinomial density p = (Σxⱼ)!/(Πxⱼ!) × Πpⱼ^{xⱼ}. Step 1: multinomial coefficient = 4!/(2!·1!·1!) = 24/2 = 12 (the number of orderings). Step 2: probability of one ordering = 0.5² × 0.1 × 0.1 = 0.0025. Step 3: 12 × 0.0025 = 0.03."
  },
  {
    "id": "b13",
    "topic": "Bayesian",
    "question": "A test document contains a new word (e.g., 'chatGPT') that never appears in the training data. With the add-one smoothed estimate p_{k,j} = (count(w_j,C_k)+1)/(Σ_{w∈V} count(w,C_k)+|V|), the slide states that for every class C_k, p('new_word'|C_k) equals:",
    "options": [
      "0, so the document cannot be classified",
      "1/|V|, where V is the vocabulary (the set of all words)",
      "1/(|V|+1)",
      "count(w_j, C_k)/Σ_w count(w, C_k)"
    ],
    "answerIndex": 1,
    "explanation": "Without smoothing, p('new_word'|C_k) = 0 for all C_k, which zeroes out the entire product p(xᵢ|C_k) = Π p(x_{i,j}|C_k). Smoothing avoids zero probabilities by adding 1 to every count and |V| to the denominator; the slide concludes: ∀C_k, p('new_word'|C_k) = 1/|V|."
  },
  {
    "id": "b14",
    "topic": "Bayesian",
    "question": "According to the bag-of-words slide, the sentences 'To be, or not to be, that is the question.' and 'That is to be the question, or not to be.':",
    "options": [
      "Have different bag representations because they start with different words",
      "Can only be compared using Gaussian naive Bayes",
      "Have different multinomial probabilities because word order matters in a bag",
      "Share the same bag {be:2, is:1, not:1, or:1, question:1, that:1, the:1, to:2}, since a bag (multi-set) ignores word order"
    ],
    "answerIndex": 3,
    "explanation": "The slide says a sentence can be considered as a bag (multi-set) of words generated from a multinomial distribution 'regardless of the order', and shows both sentences reducing to the same bag P({be:2, is:1, not:1, or:1, question:1, that:1, the:1, to:2})."
  },
  {
    "id": "b15",
    "topic": "Bayesian",
    "question": "The naive Bayes independence assumption is seldom satisfied in practice because attributes are often correlated. Which approach do the slides list as an attempt to overcome this limitation?",
    "options": [
      "Decision trees",
      "Laplace smoothing",
      "Bayesian networks, which combine Bayesian reasoning with causal relationships between attributes",
      "Increasing the vocabulary size |V|"
    ],
    "answerIndex": 2,
    "explanation": "The Independence Assumption slide lists the assumption's benefits (makes computation possible, yields optimal classifiers when satisfied, fairly good empirical results), notes it is seldom satisfied in practice, and gives Bayesian networks — combining Bayesian reasoning with causal relationships between attributes — as the attempt to overcome the limitation."
  },
  {
    "id": "l1",
    "topic": "Lab",
    "question": "Why does the notebook use GaussianNB (rather than MultinomialNB) for the toy, Iris and occupancy datasets?",
    "options": [
      "GaussianNB is faster to train on small datasets",
      "GaussianNB does not require class priors to be estimated",
      "The features are continuous real-valued measurements, which GaussianNB models with a per-class normal distribution for each feature",
      "GaussianNB handles missing sensor readings automatically"
    ],
    "answerIndex": 2,
    "explanation": "Temperature, Humidity, Light, CO2, HumidityRatio and the toy/Iris coordinates are continuous numbers. GaussianNB assumes each feature, conditioned on the class, follows a normal distribution parameterized by the learned theta_ (means) and var_ (variances). MultinomialNB is only appropriate for count features, which is why the notebook switches to it for the word-count vectors of 20 newsgroups."
  },
  {
    "id": "l2",
    "topic": "Lab",
    "question": "After fitting on the toy data, gnb.theta_ = [[3.4, 3.1], [2.8, 3.075], [4.325, 3.25]]. What does this array contain?",
    "options": [
      "The mean of each of the two features computed separately within each of the three classes",
      "The decision-boundary coefficients for each pair of classes",
      "The prior probability of each class for each feature",
      "The variance of each feature within each class"
    ],
    "answerIndex": 0,
    "explanation": "theta_ has one row per class and one column per feature: it stores the per-class feature means (e.g. class 0's two training points average to [3.4, 3.1]). The per-class variances are stored separately in var_ (renamed from sigma_ in newer sklearn, as the notebook's markdown notes). Together with class_prior_ and class_count_ these arrays are the entire fitted model."
  },
  {
    "id": "l3",
    "topic": "Lab",
    "question": "On the four toy test points, argmax over the likelihood matrix predicts [0 0 2 0] but gnb.predict returns [1 1 2 2]. Why do they disagree?",
    "options": [
      "multivariate_normal.pdf uses a full covariance matrix while GaussianNB uses a diagonal one",
      "gnb.predict uses the posterior P(y|x) ∝ P(x|y)·P(y), and class 0's prior is only 0.2 versus 0.4 for classes 1 and 2, so the prior flips decisions that the likelihood alone gave to class 0",
      "The likelihood computation contains a bug in the notebook",
      "gnb.predict applies Laplace smoothing while the manual computation does not"
    ],
    "answerIndex": 1,
    "explanation": "For the first test point the likelihoods are [0.756, 0.448, 0.003], favouring class 0, but after multiplying by the priors [0.2, 0.4, 0.4] (0.756·0.2 = 0.151 vs 0.448·0.4 = 0.179) and normalizing, the posteriors become [0.456, 0.541, 0.003] and class 1 wins. Only the third test point, where class 2's likelihood dominates massively (0.601), keeps the same prediction. This is the core Bayes lesson of the lab: priors matter."
  },
  {
    "id": "l4",
    "topic": "Lab",
    "question": "In the manual likelihood computation, why does the notebook pass np.diag(gnb.var_[i]) as the covariance to multivariate_normal.pdf?",
    "options": [
      "np.diag speeds up the pdf computation for large meshes",
      "scipy requires covariance matrices to be diagonal",
      "The features were standardized, so off-diagonal terms are exactly zero anyway",
      "A diagonal covariance encodes the 'naive' assumption that features are conditionally independent given the class — GaussianNB never models feature covariances"
    ],
    "answerIndex": 3,
    "explanation": "Naive Bayes assumes P(x1, x2 | y) = P(x1|y)·P(x2|y). For Gaussians, zero conditional correlation means a diagonal covariance matrix, so placing the per-class variances var_[i] on the diagonal (with zeros off-diagonal) reproduces exactly the density GaussianNB uses internally. This line makes the naive assumption visible in code."
  },
  {
    "id": "l5",
    "topic": "Lab",
    "question": "Before the seaborn pairplots, the notebook builds `sample` by drawing 100 rows with Occupancy == 1 and 100 rows with Occupancy == 0. The markdown asks: 'Why do I sample the data? Why do I sample twice?' What is the answer?",
    "options": [
      "Sampling keeps the pairplot readable instead of overplotting all 8,143 rows, and sampling once per class yields a balanced 100/100 view despite the imbalanced raw data; the model is still trained on the full dataset",
      "GaussianNB requires balanced classes to fit correctly, so the model is trained on the 200-row sample",
      "The full file is too large to fit in memory, so only 200 rows are ever loaded",
      "Two samples are needed to create separate train and test splits"
    ],
    "answerIndex": 0,
    "explanation": "The 200-row balanced sample exists only for visualization: plotting all 8,143 training rows would overplot, and sampling each class separately (100 occupied with random_state=2022, 100 unoccupied) ensures both classes are equally visible in the scatter and KDE pairplots. The actual gnb.fit(x_train, y_train) call uses the complete occupancy_data_train dataframe."
  },
  {
    "id": "l6",
    "topic": "Lab",
    "question": "The notebook prints (gnb.theta_[1,:] − gnb.theta_[0,:]) / gnb.var_[0,:] = [1.616, 0.064, 0.054, 0.023, 6.299] for the occupancy features (Temperature, Humidity, Light, CO2, HumidityRatio). What does this result show?",
    "options": [
      "Light and CO2 are the most useful features because they have the biggest raw mean differences",
      "All five features contribute equally to the classification",
      "Relative to the class-0 variance, HumidityRatio (6.30) and Temperature (1.62) show the largest scaled mean shifts between occupied and empty rooms, even though Light and CO2 have far larger raw differences",
      "Humidity is the single most discriminative feature"
    ],
    "answerIndex": 2,
    "explanation": "In raw units, Light (~27.8 → ~459.9) and CO2 (~490 → ~1038) change the most, but their variances are enormous (var_[0] ≈ 8,027 and 23,381), so after scaling by variance their scores shrink to 0.054 and 0.023. HumidityRatio's tiny mean shift is large relative to its tiny variance (score 6.30), and Temperature scores 1.62 — a lesson that discriminative power depends on separation relative to spread, not raw magnitude."
  },
  {
    "id": "l7",
    "topic": "Lab",
    "question": "For the 20-newsgroups task, why does the notebook use MultinomialNB(alpha=0.01) instead of GaussianNB?",
    "options": [
      "MultinomialNB supports sparse matrices while GaussianNB crashes on them",
      "CountVectorizer produces discrete word-count features, which match the multinomial event model; alpha=0.01 adds smoothing so words unseen in a class don't get zero probability",
      "GaussianNB cannot handle binary classification tasks",
      "MultinomialNB is required whenever there are more than 1,000 features"
    ],
    "answerIndex": 1,
    "explanation": "The features are word counts from CountVectorizer(min_df=0.01, max_df=0.5, stop_words='english'), so the class-conditional distribution over words is naturally multinomial, not Gaussian. The small alpha=0.01 is a smoothing constant: without it, any word never seen in a class's training documents would give P(word|class) = 0 and zero out the whole posterior product. This model reaches accuracy 0.8866171003717472 on the test set."
  },
  {
    "id": "l8",
    "topic": "Lab",
    "question": "The MultinomialNB politics classifier scores 0.8866 accuracy on the test set, which contains 6,482 class-0 and 1,050 class-1 documents. What is the right way to interpret this number?",
    "options": [
      "The model correctly identifies 88.66% of politics documents specifically",
      "Accuracy of 0.8866 proves the model is near-perfect for this task",
      "The number is invalid because the test set was also used for training",
      "It means 88.66% of all test documents were classified correctly, but since always predicting class 0 would already score 6482/7532 ≈ 0.861, the imbalanced classes make plain accuracy an incomplete measure of how well politics posts are actually detected"
    ],
    "answerIndex": 3,
    "explanation": "metrics.accuracy_score(y_test, y_pred) is the overall fraction of correct predictions on the held-out test split (fetched separately via subset='test', so there is no leakage — the vectorizer is also only transform-ed, not re-fit, on test data). With 6,482 of 7,532 test documents in the majority class, a trivial all-zeros classifier gets ~86.1%, so 88.66% is only a modest improvement — a key reason accuracy alone can mislead on imbalanced data like this 9,739-vs-1,575 training distribution."
  },
  {
    "id": "cp1",
    "topic": "Probability",
    "question": "Two fair coins are tossed and X counts the number of heads. According to the slides, what are Pr(X=1) and Pr(X>=1)?",
    "options": [
      "Pr(X=1) = 1/4 and Pr(X>=1) = 1/2",
      "Pr(X=1) = 1/2 and Pr(X>=1) = 3/4",
      "Pr(X=1) = 1/2 and Pr(X>=1) = 1/2",
      "Pr(X=1) = 1/3 and Pr(X>=1) = 2/3"
    ],
    "answerIndex": 1,
    "explanation": "The sample space is {HH, HT, TH, TT}, four equally likely outcomes. X=1 maps to {HT, TH}, so Pr(X=1) = 2/4 = 1/2. X>=1 maps to {HH, HT, TH}, so Pr(X>=1) = 3/4. A common mistake is treating 'one head' as a single outcome (giving 1/4) instead of two ordered outcomes."
  },
  {
    "id": "cp2",
    "topic": "Probability",
    "question": "Two fair coins are tossed. Knowing that at least one of the coins is head, what is the probability of having 2 heads (the slide's conditional probability example)?",
    "options": [
      "1/4",
      "1/2",
      "1/3",
      "3/4"
    ],
    "answerIndex": 2,
    "explanation": "P(2 heads | at least one head) = P(HH and at least one head)/P(at least one head) = P(HH)/P(at least one head) = (1/4)/(3/4) = 1/3. Answering 1/2 is the classic error of assuming 'the other coin' is a specific coin — that is the different question of conditioning on the FIRST coin being head."
  },
  {
    "id": "cp3",
    "topic": "Probability",
    "question": "Given the first coin is head, what is the probability that the second coin is also head?",
    "options": [
      "1/3",
      "1/4",
      "1/2",
      "2/3"
    ],
    "answerIndex": 2,
    "explanation": "The two coin tosses are independent, so P(second head | first head) = P(second head) = 1/2. This is the slide's independence example: knowing the first coin's outcome provides no useful information about the second. Contrast with cp2, where conditioning on 'at least one head' gives 1/3."
  },
  {
    "id": "cp4",
    "topic": "Probability",
    "question": "Rolling two fair dice: given the first die shows 5, what is the probability that the second die is larger than 3?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    "answerIndex": 0,
    "explanation": "The dice are independent, so the condition 'first die is 5' changes nothing: P(second > 3) = P(second in {4,5,6}) = 3/6 = 1/2. Picking 1/3 comes from counting only {5,6}; picking 2/3 comes from counting {3,4,5,6} (using >= 3 instead of > 3)."
  },
  {
    "id": "cp5",
    "topic": "Probability",
    "question": "Using the slides' joint distribution table (entries in 32nds), what is the marginal probability P(X=x1)?",
    "options": [
      "8/32",
      "16/32",
      "4/32",
      "12/32"
    ],
    "answerIndex": 1,
    "explanation": "Apply the sum rule down column x1: P(X=x1) = P(x1,y1) + P(x1,y2) + P(x1,y3) + P(x1,y4) = 4/32 + 2/32 + 2/32 + 8/32 = 16/32 = 1/2. Choosing 8/32 confuses the column sum with a row sum (every P(Y=yi) equals 8/32); 4/32 is just the single cell P(x1,y1)."
  },
  {
    "id": "cp6",
    "topic": "Probability",
    "question": "From the same table, what is P(Y=y1 | X=x1) — the conditional worked on slide 9?",
    "options": [
      "4/32",
      "1/2",
      "1/4",
      "1/8"
    ],
    "answerIndex": 2,
    "explanation": "P(Y=y1 | X=x1) = P(Y=y1, X=x1) / P(X=x1) = (4/32) / (16/32) = 4/16 = 1/4. Answering 4/32 forgets to divide by the marginal (that is the joint, not the conditional); 1/2 divides by the wrong marginal P(Y=y1) = 8/32."
  },
  {
    "id": "cp7",
    "topic": "Probability",
    "question": "Which equation is the slides' formal definition of two events A and B being independent?",
    "options": [
      "P(A|B) = P(A)",
      "P(A ∩ B) = 0",
      "P(A ∪ B) = P(A) + P(B)",
      "P(A|B) = P(B|A)"
    ],
    "answerIndex": 0,
    "explanation": "Independence means knowing B provides no useful information about A, formally P(A|B) = P(A). P(A ∩ B) = 0 is mutual exclusivity (disjointness), which is NOT independence — disjoint events with positive probability are strongly dependent. Option 3 only holds for disjoint events, and option 4 is generally false."
  },
  {
    "id": "cp8",
    "topic": "Probability",
    "question": "If P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.3, what is P(A ∪ B) by the slides' union axiom, and what is P(A ∩ B̄) by the partition consequence?",
    "options": [
      "P(A ∪ B) = 1.1 and P(A ∩ B̄) = 0.3",
      "P(A ∪ B) = 0.8 and P(A ∩ B̄) = 0.3",
      "P(A ∪ B) = 0.8 and P(A ∩ B̄) = 0.2",
      "P(A ∪ B) = 0.9 and P(A ∩ B̄) = 0.1"
    ],
    "answerIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.6 + 0.5 − 0.3 = 0.8. From P(A) = P(A ∩ B) + P(A ∩ B̄): P(A ∩ B̄) = 0.6 − 0.3 = 0.3. Forgetting to subtract the intersection gives the impossible 1.1 (probabilities cannot exceed 1); computing 0.5 − 0.3 = 0.2 uses P(B) instead of P(A)."
  },
  {
    "id": "la1",
    "topic": "Linear Algebra",
    "question": "Given w = (2, 1) and x₃ = (2, −1), what is w·x₃?",
    "options": [
      "3",
      "5",
      "1",
      "−3"
    ],
    "answerIndex": 0,
    "explanation": "w·x₃ = 2·2 + 1·(−1) = 4 − 1 = 3. The slide shows w·x₁ = w·x₂ = w·x₃ = 3 for all three example vectors, because they all project onto the same point on w."
  },
  {
    "id": "la2",
    "topic": "Linear Algebra",
    "question": "Geometrically, what does the set of vectors satisfying w·x = 3 represent?",
    "options": [
      "All x that project onto w at the same point — a hyperplane orthogonal to w",
      "All x with length 3",
      "All x parallel to w with magnitude 3",
      "All x at Euclidean distance 3 from w"
    ],
    "answerIndex": 0,
    "explanation": "The slide states: w·x is where x projects on vector w, so w·x = 3 are all x that project on w at the same point. In d dimensions this set is a (d−1)-dimensional hyperplane orthogonal to w."
  },
  {
    "id": "la3",
    "topic": "Linear Algebra",
    "question": "With w = (2, 1), is the distance between the hyperplanes w·x = 0 and w·x = 1 equal to 1?",
    "options": [
      "No — the gap is 1/|w| = 1/√5 ≈ 0.447, because w is not a unit vector",
      "Yes — the right-hand sides differ by exactly 1",
      "No — the gap is |w| = √5 ≈ 2.236",
      "No — the gap is 1/|w|² = 1/5 = 0.2"
    ],
    "answerIndex": 0,
    "explanation": "Projected values represent distance only when |w| = 1. Here |w| = √(2²+1²) = √5, so w·x jumps by √5 per unit of actual distance along w; the hyperplanes w·x = 0 and w·x = 1 are only 1/√5 apart."
  },
  {
    "id": "la4",
    "topic": "Linear Algebra",
    "question": "What is the unit vector ŵ obtained by normalizing w = (2, 1)?",
    "options": [
      "(2√5/5, √5/5), i.e., (2/√5, 1/√5)",
      "(2/3, 1/3)",
      "(1, 1/2)",
      "(2/5, 1/5)"
    ],
    "answerIndex": 0,
    "explanation": "|w| = √(4+1) = √5, so ŵ = w/|w| = (2/√5, 1/√5) = (2√5/5, √5/5) after rationalizing. Dividing by |w|² = 5 (option d) or by the component sum 3 (option b) are common mistakes."
  },
  {
    "id": "la5",
    "topic": "Linear Algebra",
    "question": "Using the unit vector ŵ = (2√5/5, √5/5), what is ŵ·x₁ for x₁ = (0, 3)?",
    "options": [
      "3√5/5 ≈ 1.342",
      "3",
      "3√5 ≈ 6.708",
      "√5/5 ≈ 0.447"
    ],
    "answerIndex": 0,
    "explanation": "ŵ·x₁ = (2√5/5)·0 + (√5/5)·3 = 3√5/5 = 3/√5 ≈ 1.342. This equals the raw dot product 3 divided by |w| = √5, and it is the true distance of the projection point along w. The slide shows ŵ·x₁ = ŵ·x₂ = ŵ·x₃ = 3√5/5."
  },
  {
    "id": "la6",
    "topic": "Linear Algebra",
    "question": "Which conditions define an orthonormal basis {e₁, e₂} in 2D, per the slides?",
    "options": [
      "|e₁| = 1, |e₂| = 1 and e₁·e₂ = 0",
      "e₁·e₂ = 0 only (unit length is optional)",
      "|e₁| = |e₂| (equal lengths) and e₁·e₂ = 1",
      "e₁ and e₂ are parallel unit vectors"
    ],
    "answerIndex": 0,
    "explanation": "An orthonormal basis is a set of unit vectors which are mutually orthogonal: each has length 1 AND every pair has dot product 0. Orthogonal-but-not-unit (option b) is only an orthogonal basis."
  },
  {
    "id": "la7",
    "topic": "Linear Algebra",
    "question": "For a dataset X with rows xᵢᵀ and orthogonal matrix Q = [e₁ e₂], how is the rotated dataset Z computed?",
    "options": [
      "Z = XQ",
      "Z = QX",
      "Z = XQᵀ",
      "Z = Q⁻¹XQ"
    ],
    "answerIndex": 0,
    "explanation": "Per point, the new coordinate is z = Qᵀx. Since the dataset stacks points as rows (row form transposes the relation), Z = XQ. Confusing the per-point form Qᵀx with the dataset form XQ is the classic error."
  },
  {
    "id": "la8",
    "topic": "Linear Algebra",
    "question": "In a bivariate normal distribution with rho = 0.5, points A and B lie on the same probability contour but A looks much closer to the center. Why do they have the same probability density?",
    "options": [
      "Because after translation, rotation and scaling, A and B are equi-distant from the center (equal Mahalanobis distance)",
      "Because probability density only depends on the direction from the center, not the distance",
      "Because rho = 0.5 makes all points equally likely",
      "Because Euclidean distance always equals Mahalanobis distance for Gaussians"
    ],
    "answerIndex": 0,
    "explanation": "The slides transform the ellipse by translation, rotation and scaling until contours are round; A and B then have the same distance. If two points are equi-distant from the center after rotation and scaling, they have the same probability density — the correct distance is Mahalanobis, not Euclidean."
  },
  {
    "id": "la9",
    "topic": "Linear Algebra",
    "question": "In the deck's derivation, what does eigendecomposition of Σ = (1/n)ẌᵀẌ yield?",
    "options": [
      "Q and Λ, via (1/n)ẌᵀẌ = QΛ²Qᵀ — eigenvectors give the rotation, eigenvalues the squared scaling",
      "The mean vector x̄ and the centered matrix Ẍ",
      "The inverse covariance Σ⁻¹ directly, without any factorization",
      "Only the eigenvalues; the orthonormal basis must be found separately by Gram-Schmidt"
    ],
    "answerIndex": 0,
    "explanation": "From VᵀV = Λ⁻¹QᵀẌᵀẌQΛ⁻¹ = nI and Q⁻¹ = Qᵀ, the slide derives (1/n)ẌᵀẌ = QΛ²Qᵀ. So the eigenvectors of Σ form the orthonormal basis Q (the rotation) and the eigenvalues equal the diagonal of Λ² (the squared axis lengths for scaling)."
  },
  {
    "id": "la10",
    "topic": "Linear Algebra",
    "question": "In the PCA algorithm on the slides, what are the five steps in order?",
    "options": [
      "Compute mean x̄ → center rows to get Ẍ → compute Σ = (1/n)ẌᵀẌ → eigendecompose Σ with λ₁ ≥ λ₂ ≥ … → select top-k eigenvectors",
      "Eigendecompose X → center → compute Σ → sort → select top-k eigenvalues",
      "Compute Σ = (1/(n−1))XᵀX → eigendecompose → center → normalize → select bottom-k eigenvectors",
      "Center columns of X → compute Σ = ẌẌᵀ → eigendecompose → select top-k eigenvalues as components"
    ],
    "answerIndex": 0,
    "explanation": "The slide's PCA with input X and k << d: (1) x̄ = (1/n)Σᵢxᵢ; (2) Ẍ by subtracting x̄ from each row; (3) Σ ← (1/n)ẌᵀẌ (note the 1/n, not 1/(n−1)); (4) eigenpairs {λᵢ, eᵢ} with λ₁ ≥ λ₂ ≥ …; (5) select top-k eigenVECTORS {e₁,…,e_k} as the principal components."
  },
  {
    "id": "it1",
    "topic": "Info Theory",
    "question": "In the finger-gesture scheme from the slides, how many fingers (binary gestures) are needed to identify one of 4096 equally likely colors?",
    "options": [
      "8",
      "12",
      "64",
      "4096/2 = 2048"
    ],
    "answerIndex": 1,
    "explanation": "Each finger doubles the number of distinguishable colors, so you need log₂ 4096 = 12 fingers. Equivalently the slide computes log₂(1/4096) = −12, and uncertainty = −log₂ p = 12."
  },
  {
    "id": "it2",
    "topic": "Info Theory",
    "question": "With Pr(Red) = 1/2 (1 gesture), Pr(Blue) = 1/4 (2 gestures), Pr(Green) = 1/4 (2 gestures), what is the expected number of gestures?",
    "options": [
      "1.5",
      "1.67 (average of 1, 2, 2)",
      "2",
      "1.25"
    ],
    "answerIndex": 0,
    "explanation": "Expected gestures = (1/2)×1 + (1/4)×2 + (1/4)×2 = 0.5 + 0.5 + 0.5 = 1.5. The common mistake is the unweighted average (1+2+2)/3 ≈ 1.67 — you must weight by probability."
  },
  {
    "id": "it3",
    "topic": "Info Theory",
    "question": "For a binary random variable X, when is the entropy H(X) at its maximum, and what is that maximum (log base 2)?",
    "options": [
      "When p₀ = 1 or p₁ = 1; maximum is 1",
      "When p₀ = p₁ = 0.5; maximum is 1",
      "When p₀ = p₁ = 0.5; maximum is 0.5",
      "When p₀ = p₁ = 0.5; maximum is log₂ 0.5 = −1"
    ],
    "answerIndex": 1,
    "explanation": "H(X) = −p₀ log p₀ − p₁ log p₁ peaks when the outcomes are equally likely: p₀ = p₁ = 0.5 gives H(X) = −0.5×(−1) − 0.5×(−1) = 1. When p₀ = 1 or p₁ = 1, X is totally certain and H(X) = 0."
  },
  {
    "id": "it4",
    "topic": "Info Theory",
    "question": "According to the slides, what is the entropy of a fair six-sided die, and how does it compare to a fair coin?",
    "options": [
      "H(die) = 6 × (1/6) = 1, equal to the coin",
      "H(die) = log 6 ≈ 2.585 bits, greater than H(coin) = log 2 = 1 bit",
      "H(die) = 1/6 log(1/6) ≈ −0.43, less than the coin",
      "H(die) = 6 bits, greater than H(coin) = 2 bits"
    ],
    "answerIndex": 1,
    "explanation": "H(die) = 6 × (−(1/6) log (1/6)) = log 6 ≈ 2.585 bits > log 2 = 1 bit = H(coin). More equally likely outcomes means more uncertainty. Note a heavily biased die CAN have lower entropy than a fair coin."
  },
  {
    "id": "it5",
    "topic": "Info Theory",
    "question": "A random variable has n possible outcomes. What is the maximum possible entropy, and which distribution achieves it?",
    "options": [
      "n, achieved by the uniform distribution",
      "log n, achieved by the uniform distribution",
      "log n, achieved by a one-hot distribution",
      "1, regardless of n"
    ],
    "answerIndex": 1,
    "explanation": "The slide states the maximum entropy is log n where n is the number of outcomes; it is achieved when all outcomes have probability 1/n. A one-hot (certain) distribution gives the MINIMUM entropy, 0."
  },
  {
    "id": "it6",
    "topic": "Info Theory",
    "question": "A red bag holds one light-red and one dark-red ball; a blue bag holds one light-blue and one dark-blue ball. What is the conditional entropy of the ball's color given the bag it came from?",
    "options": [
      "0",
      "1",
      "2",
      "log 4 = 2 minus log 2 = 1, so 0.5"
    ],
    "answerIndex": 1,
    "explanation": "H(X|Y) = Σⱼ p(Y=yⱼ) H(X|Y=yⱼ). Within either bag the two shades are equally likely, so each bag gives entropy 1; the weighted average is 1. Knowing the bag removed 1 bit of the original 2 bits (4 equally likely colors), leaving 1."
  },
  {
    "id": "it7",
    "topic": "Info Theory",
    "question": "Which statement about mutual information I(X;Y) matches the slides?",
    "options": [
      "If X and Y are independent, I(X;Y) = H(X)",
      "If Y determines X, then I(X;Y) = 0",
      "If Y determines X, then H(X) = I(X;Y), and if X and Y are independent, I(X;Y) = 0",
      "I(X;Y) is always equal to H(X,Y)"
    ],
    "answerIndex": 2,
    "explanation": "Mutual information is the uncertainty resolvable by the other variable. If Y determines X, ALL of H(X) is resolved: H(X) = I(X;Y) (and H(X|Y) = 0). If they are independent, nothing is resolved: I(X;Y) = 0 and H(X|Y) = H(X)."
  },
  {
    "id": "it8",
    "topic": "Info Theory",
    "question": "Using the code optimized for q = (0.5, 0.125, 0.125, 0.125, 0.125) (codes of lengths 1, 3, 3, 3, 3), how many bits are expected if the ACTUAL distribution is p = (0.25, 0.25, 0.25, 0.125, 0.125)?",
    "options": [
      "2",
      "2.25",
      "2.5",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "H(p,q) = 0.25×1 + 0.25×3 + 0.25×3 + 0.125×3 + 0.125×3 = 0.25 + 0.75 + 0.75 + 0.375 + 0.375 = 2.5 bits. For comparison, a code optimized for p would need only H(p) = 2.25 bits, and under q itself the code needs exactly 2 bits."
  },
  {
    "id": "it9",
    "topic": "Info Theory",
    "question": "A classifier outputs q = (0.125, 0.5, 0.25, 0.125) for classes 1-4. If the true label is 1, i.e. p = (1, 0, 0, 0), what is the cross-entropy loss H(p, q) in bits?",
    "options": [
      "0.125",
      "1",
      "2",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "With a one-hot p, H(p,q) = −log₂ q(true class) = −log₂ 0.125 = 3. (True label 2 would give −log₂ 0.5 = 1; true label 3 gives −log₂ 0.25 = 2.) Lower predicted probability on the true label means a higher penalty."
  },
  {
    "id": "it10",
    "topic": "Info Theory",
    "question": "In the deck's example, H(p, q) = 2.5 and H(p) = 2.25. What is the KL divergence D_KL(p‖q), and what does it represent?",
    "options": [
      "4.75 — the total uncertainty of p and q combined",
      "0.25 — the extra bits paid for coding p with a scheme optimized for q",
      "1.11 — the ratio H(p,q)/H(p)",
      "−0.25 — KL divergence can be negative when q is wrong"
    ],
    "answerIndex": 1,
    "explanation": "D_KL(p‖q) = H(p, q) − H(p) = 2.5 − 2.25 = 0.25 bits. It is also called relative entropy: the gap shrinks as q better approximates p, and it is 0 (never negative) when p = q."
  },
  {
    "id": "rg1",
    "topic": "Regression",
    "question": "According to the deck, what distinguishes regression from classification in supervised learning?",
    "options": [
      "Regression outputs a continuous value in ℝ; classification outputs a discrete label",
      "Regression uses labeled data; classification does not",
      "Regression can only use one feature; classification can use many",
      "Regression minimizes accuracy; classification minimizes MSE"
    ],
    "answerIndex": 0,
    "explanation": "The deck defines classification as discrete output (binary y in {-1,+1}, multi-class y in {1,...,k}) and regression as continuous output: given input x, find y in real-valued space ℝ (or ℝᵈ). Both are supervised (labeled)."
  },
  {
    "id": "rg2",
    "topic": "Regression",
    "question": "Using hypothesis h(x) = w₁x + w₀ with w₀ = 50 and w₁ = 0.1, what price (in $1000s) does the model predict for the 2104 ft² house from the slide's table?",
    "options": [
      "210.4",
      "260.4",
      "460",
      "155.2"
    ],
    "answerIndex": 1,
    "explanation": "h(2104) = 0.1 × 2104 + 50 = 210.4 + 50 = 260.4. Forgetting the intercept gives 210.4; 460 is the actual y value from the table, not the prediction."
  },
  {
    "id": "rg3",
    "topic": "Regression",
    "question": "The deck's MSE cost for simple linear regression is J(w₀, w₁) = ?",
    "options": [
      "(1/n) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]²",
      "(1/(n−1)) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]²",
      "Σᵢ₌₁ⁿ |h(xᵢ) − yᵢ|",
      "(1/n) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]"
    ],
    "answerIndex": 0,
    "explanation": "The deck defines MSE with a 1/n factor and SQUARED residuals: J(w₀,w₁) = (1/n) Σ[h(xᵢ) − yᵢ]². It is not the sample-variance style 1/(n−1), not absolute error, and unsquared residuals would cancel each other out (as the learning-problem slide shows)."
  },
  {
    "id": "rg4",
    "topic": "Regression",
    "question": "A model predicts ŷ = (5, 8) where the actual values are y = (3, 10). Using the deck's MSE (divide by n), what is J?",
    "options": [
      "4",
      "8",
      "2",
      "16"
    ],
    "answerIndex": 0,
    "explanation": "Residuals: 5−3 = 2 and 8−10 = −2. Squares: 4 and 4. Sum = 8; MSE = 8/2 = 4. Answering 8 forgets to divide by n; 2 is the mean absolute error; 16 squares the sum instead of summing the squares."
  },
  {
    "id": "rg5",
    "topic": "Regression",
    "question": "Why does the deck define x₀ = 1 in multivariable linear regression?",
    "options": [
      "So the intercept w₀ can be absorbed into the vector form h(x) = wᵀx with x, w ∈ ℝᵐ⁺¹",
      "To normalize the features to the range [0, 1]",
      "Because sklearn requires the first feature to be 1",
      "To make XᵀX invertible in all cases"
    ],
    "answerIndex": 0,
    "explanation": "For convenience of notation, defining x₀ = 1 lets h(x) = w₀ + w₁x₁ + ... + wₘxₘ be written compactly as h(x) = Σⱼ₌₀ᵐ wⱼxⱼ = w·x = wᵀx, where both x and w live in ℝᵐ⁺¹. It has nothing to do with normalization or invertibility."
  },
  {
    "id": "rg6",
    "topic": "Regression",
    "question": "With n training examples and m features (plus the constant feature x₀ = 1), what are the dimensions of X, w, and y in J(w) = (1/n)(Xw − y)ᵀ(Xw − y)?",
    "options": [
      "X: n × (m+1), w: (m+1) × 1, y: n × 1",
      "X: n × m, w: m × 1, y: n × 1",
      "X: (m+1) × n, w: n × 1, y: (m+1) × 1",
      "X: n × n, w: n × 1, y: n × 1"
    ],
    "answerIndex": 0,
    "explanation": "The slide labels the matrices explicitly: X is n × (m+1) (each row is one example including x₀=1), w is (m+1) × 1, and y is n × 1, so Xw − y is n × 1 and its first entry is wᵀx₁ − y₁."
  },
  {
    "id": "rg7",
    "topic": "Regression",
    "question": "What is the analytical (closed-form) solution to multivariable linear regression given on the slide?",
    "options": [
      "w = (XᵀX)⁻¹Xᵀy",
      "w = Xᵀ(XXᵀ)⁻¹y",
      "w = X⁻¹y",
      "w = (XXᵀ)⁻¹Xy"
    ],
    "answerIndex": 0,
    "explanation": "Setting ∇J(w) = XᵀXw − Xᵀy = 0 gives the normal equation XᵀXw = Xᵀy, hence w = ((XᵀX)⁻¹Xᵀ)y = X†y with pseudo-inverse X† = (XᵀX)⁻¹Xᵀ. X itself is generally not square, so X⁻¹ does not exist."
  },
  {
    "id": "rg8",
    "topic": "Regression",
    "question": "How does the deck say polynomial regression is implemented?",
    "options": [
      "Map each explanatory variable to a higher order space, then fit a LINEAR model in that space",
      "Fit a linear model first, then square its predictions",
      "Use a fundamentally different non-linear solver that replaces least squares",
      "Apply gradient descent to a non-parametric curve"
    ],
    "answerIndex": 0,
    "explanation": "The slide: 'Map each explanatory variable to a higher order space' and 'Fit a linear model in the higher order space.' E.g. h(x) = ax² + bx + c = (a b)(x², x)ᵀ + c is linear in the parameters over features (x², x). In sklearn: PolynomialFeatures(2).fit_transform(x) then LinearRegression."
  },
  {
    "id": "rg9",
    "topic": "Regression",
    "question": "Gradient descent with learning rate α = 0.1 is at w₁ = 2, and ∂J/∂w₁ = 4 at the current point. What is w₁ after one update wⱼ ← wⱼ − α·∂J/∂wⱼ?",
    "options": [
      "1.6",
      "2.4",
      "−0.4",
      "1.96"
    ],
    "answerIndex": 0,
    "explanation": "w₁ ← 2 − 0.1 × 4 = 2 − 0.4 = 1.6. Choosing 2.4 adds the step instead of subtracting; −0.4 is only the step −α·∂J/∂w₁, forgetting to start from the current w₁ = 2; 1.96 uses α² or a wrong gradient."
  },
  {
    "id": "rg10",
    "topic": "Regression",
    "question": "According to the deck, what happens if the learning rate α is too LARGE?",
    "options": [
      "J(w) may not decrease on every iteration and gradient descent may not converge",
      "Gradient descent is guaranteed to converge, just faster",
      "J(w) decreases on every iteration but very slowly",
      "The algorithm always stops at the global minimum"
    ],
    "answerIndex": 0,
    "explanation": "Slide: 'If α is too large, J(w) may not decrease on every iteration; may not converge' — the picture labels this 'divergence'. Slow convergence with guaranteed per-iteration decrease describes α too SMALL."
  },
  {
    "id": "rg11",
    "topic": "Regression",
    "question": "What convergence criterion does the deck give for gradient descent?",
    "options": [
      "Declare convergence if J(w) decreases by less than 10⁻³ in one iteration",
      "Stop after exactly 400 iterations",
      "Stop when the gradient equals exactly zero",
      "Stop when J(w) reaches 10⁻³"
    ],
    "answerIndex": 0,
    "explanation": "The slide states: 'Declare convergence if J(w) decreases by less than 10⁻³ in one iteration.' The criterion is about the DECREASE per iteration, not the absolute value of J or a fixed iteration count (400 is just the plot's x-axis range)."
  },
  {
    "id": "rg12",
    "topic": "Regression",
    "question": "What key property does convexity of the objective function guarantee for gradient descent?",
    "options": [
      "All local minima are global minima, so GD cannot get trapped in a bad valley",
      "Gradient descent converges in one step",
      "The learning rate can be arbitrarily large",
      "The solution is independent of the data"
    ],
    "answerIndex": 0,
    "explanation": "Slide: 'Convex: Implies that all local minima are global minima.' By contrast, on a non-convex function GD may stop at a local minimum and 'the final solution is sensitive to initialization.' Convexity says nothing about one-step convergence or arbitrary learning rates."
  },
  {
    "id": "rg13",
    "topic": "Regression",
    "question": "Why does mini-batch gradient descent use only k < n examples per iteration?",
    "options": [
      "Evaluating the sum of the gradient over all n examples may be expensive; sampling a subset saves cost per iteration",
      "Using all n examples makes the objective non-convex",
      "It guarantees a lower final value of J(w)",
      "It removes the need to choose a learning rate"
    ],
    "answerIndex": 0,
    "explanation": "Slide: 'Evaluating the sum of the gradient may be expensive. To save the cost at each iteration, mini-batch gradient descent samples a subset of the summand gradient at each iteration': w = w − α∇w Σᵢ₌₁ᵏ j(w; xᵢ, yᵢ). It is a cost-saving approximation, not a quality guarantee."
  },
  {
    "id": "rg14",
    "topic": "Regression",
    "question": "In the deck's bias-variance decomposition, 𝔼[(f(x) − h(x))²] equals which of the following?",
    "options": [
      "Bias²(h(x)) + Var(h(x)) + σ²",
      "Bias(h(x)) + Var(h(x))",
      "Bias²(h(x)) − Var(h(x)) + σ²",
      "Bias²(h(x)) × Var(h(x)) × σ²"
    ],
    "answerIndex": 0,
    "explanation": "The slide gives 𝔼[(f(x) − h(x))²] = Bias²(h(x)) + Var(h(x)) + σ², with Bias(h(x)) = 𝔼[h(x)] − f(x) and Var(h(x)) = 𝔼[(h(x))²] − (𝔼[h(x)])². Note bias enters SQUARED and the irreducible noise σ² is added."
  },
  {
    "id": "rg15",
    "topic": "Regression",
    "question": "For the weight vector w = (3, −4), what are ‖w‖₁ (Lasso penalty norm) and ‖w‖₂ (Ridge norm) using the deck's definitions?",
    "options": [
      "‖w‖₁ = 7 and ‖w‖₂ = 5",
      "‖w‖₁ = −1 and ‖w‖₂ = 25",
      "‖w‖₁ = 5 and ‖w‖₂ = 7",
      "‖w‖₁ = 7 and ‖w‖₂ = 25"
    ],
    "answerIndex": 0,
    "explanation": "‖w‖₁ = Σ|wⱼ| = |3| + |−4| = 7. ‖w‖₂ = √(Σwⱼ²) = √(9 + 16) = √25 = 5. Answer −1 forgets absolute values (3 + (−4)); 25 is ‖w‖₂² (which is what Ridge actually penalizes: J(w) + α‖w‖₂²), not ‖w‖₂."
  },
  {
    "id": "rgl1",
    "topic": "Regression",
    "question": "On the house data, SST = 314,432,519,600 and SSE = 84,819,887,129. What is the model's R² score?",
    "options": [
      "0.27",
      "0.73",
      "0.37",
      "0.84"
    ],
    "answerIndex": 1,
    "explanation": "R² = 1 − SSE/SST = 1 − 84,819,887,129 / 314,432,519,600 = 1 − 0.2698 = 0.7302. Equivalently SSR/SST = 229,612,632,471 / 314,432,519,600 = 0.7302, matching regr.score(x, y). 0.27 is the residual fraction (a common mix-up)."
  },
  {
    "id": "rgl2",
    "topic": "Regression",
    "question": "The house model scored R² = 0.73 on all data, but only 0.42 after an 80/20 train/test split. What is the best explanation?",
    "options": [
      "The test set is too small for R² to be defined",
      "train_test_split shuffled x and y independently, breaking the pairing",
      "The 0.73 was measured on the training data itself, so it optimistically overstates performance on unseen data",
      "Linear regression cannot be scored with regr.score on test data"
    ],
    "answerIndex": 2,
    "explanation": "Scoring on the same data used for fitting always looks better than honest out-of-sample performance. The split (test_size=0.2, random_state=2022) trains on 80 rows and scores on 20 unseen rows, giving the realistic estimate 0.42. train_test_split keeps x and y paired via the same selection flags."
  },
  {
    "id": "rgl3",
    "topic": "Regression",
    "question": "PolynomialFeatures(2) is applied to 2 raw features. How many columns does the transformed matrix have, and what are they?",
    "options": [
      "4 columns: x₀, x₁, x₀², x₁²",
      "5 columns: x₀, x₁, x₀², x₀x₁, x₁²",
      "6 columns: 1, x₀, x₁, x₀², x₀x₁, x₁²",
      "9 columns: all products of degree exactly 2"
    ],
    "answerIndex": 2,
    "explanation": "poly2.powers_ = [[0 0],[1 0],[0 1],[2 0],[1 1],[0 2]] shows 6 columns: the bias term 1, both linear terms, both squares, and the interaction x₀x₁. Forgetting the bias column (option B) or the interaction (option A) are the common mistakes. Degree 3 would give 10 columns."
  },
  {
    "id": "rgl4",
    "topic": "Regression",
    "question": "At alpha = 1 on the diabetes data, what is the key difference between the Lasso and Ridge coefficient vectors?",
    "options": [
      "Lasso sets 7 of 10 coefficients exactly to zero, while Ridge keeps all 10 non-zero",
      "Ridge sets more coefficients to zero because L2 is a stronger penalty",
      "They are identical because both use the same alpha",
      "Lasso coefficients are all larger because L1 does not shrink"
    ],
    "answerIndex": 0,
    "explanation": "Lasso at alpha=1 gives [0, -0, 297.85, 180.70, 0, 0, -0, 0, 246.77, 0] — only 3 non-zero weights (L1 induces sparsity / feature selection). Ridge at alpha=1 keeps all 10 non-zero (85.91, -38.60, 215.93, ...) because L2 shrinks smoothly but never to exactly zero."
  },
  {
    "id": "rgl5",
    "topic": "Regression",
    "question": "SGDRegressor(penalty='l1', alpha=0.001, max_iter=200) scored 0.082 while Lasso(alpha=0.001) scored 0.334 on the same data. Why?",
    "options": [
      "SGD optimizes a fundamentally different loss than Lasso",
      "SGD stopped before converging (ConvergenceWarning at max_iter=200), leaving its weights far from the optimum",
      "SGD cannot handle more than 2 features",
      "The alpha value only applies to Lasso, not to SGD"
    ],
    "answerIndex": 1,
    "explanation": "Both optimize the same L1-penalized least-squares objective, but SGD is iterative and raised 'Maximum number of iteration reached before convergence. Consider increasing max_iter.' Its coefficients [37.63, 2.75, 80.06, 74.62] are far below Lasso's [200.80, -81.30, 631.28, 508.17] — it simply had not finished descending."
  },
  {
    "id": "rgl6",
    "topic": "Regression",
    "question": "In the bias-variance experiment (10 training points, 20 test subsets), which error-cloud pattern belongs to the degree-4 polynomial model?",
    "options": [
      "Tightly clustered dots far from the origin (low variance, high bias)",
      "Widely scattered dots roughly centered near the origin (high variance, low bias)",
      "Tightly clustered dots at the origin (low bias, low variance)",
      "A single dot exactly at the origin (zero error)"
    ],
    "answerIndex": 1,
    "explanation": "The degree-4 model has 15 features fitted on only 10 points, so it overfits: each fit varies wildly, giving a widely scattered error cloud (high variance) whose average is nonetheless near zero (low bias). Option A describes the constant-mean model m1; option C describes the well-matched degree-2 model m3."
  },
  {
    "id": "lg1",
    "topic": "Logistic",
    "question": "Using the deck's odds table, if the odds of success are 3:1, what is the probability of success?",
    "options": [
      "33%",
      "66.7%",
      "75%",
      "80%"
    ],
    "answerIndex": 2,
    "explanation": "Odds a:b give P(success) = a/(a+b) = 3/(3+1) = 0.75. The slide table lists 3:1 → 75% success / 25% failure. 33% wrongly computes 1/3; 66.7% is odds 2:1; 80% is odds 4:1."
  },
  {
    "id": "lg2",
    "topic": "Logistic",
    "question": "A logistic regression model gives wᵀx = 0 for a point x. What is p(1|x)?",
    "options": [
      "0",
      "0.5",
      "1",
      "Undefined — the boundary has no probability"
    ],
    "answerIndex": 1,
    "explanation": "p(1|x) = σ(wᵀx) = σ(0) = 1/(1 + e⁰) = 1/2. On the decision boundary the two classes are equally likely (odds = 1), which is why wᵀx = 0 defines the boundary."
  },
  {
    "id": "lg3",
    "topic": "Logistic",
    "question": "In the heart-disease example the MLE gives w* = 0.58, b* = −3.34. Where is the decision boundary x*?",
    "options": [
      "x* = 0.58/3.34 ≈ 0.17",
      "x* = 3.34/0.58 ≈ 5.78",
      "x* = −3.34 + 0.58 = −2.76",
      "x* = 3.34 × 0.58 ≈ 1.94"
    ],
    "answerIndex": 1,
    "explanation": "The boundary satisfies wx + b = 0, so x* = −b/w = 3.34/0.58 = 5.78, which falls between age groups 5 (45-49) and 6 (50-54) — around 51 years old, matching the slide. Option A inverts the ratio; C and D are wrong operations on w and b."
  },
  {
    "id": "lg4",
    "topic": "Logistic",
    "question": "Why does the deck reject MSE, J(w) = (1/n)Σᵢ(wᵀxᵢ − yᵢ)², as the objective for a ±1 classifier?",
    "options": [
      "MSE is not differentiable at the decision boundary",
      "MSE penalizes points with |wᵀx| > 1 even when they are confidently and correctly classified",
      "MSE only works when labels are 0/1, not ±1",
      "MSE makes the objective non-convex in w for classification"
    ],
    "answerIndex": 1,
    "explanation": "The slide asks 'Does error matter much when |wᵀx| > 1?' — with MSE, a correct prediction far beyond the ±1 target still incurs a large squared error, dragging the boundary toward confident points. Differentiability isn't the issue, ±1 labels are fine algebraically, and the convexity argument comes later for the logistic loss."
  },
  {
    "id": "lg5",
    "topic": "Logistic",
    "question": "Which sigmoid property makes the compact form p(yᵢ|xᵢ; w) = σ(yᵢwᵀxᵢ) valid for both yᵢ = 1 and yᵢ = −1?",
    "options": [
      "dσ/dx = σ(x)[1 − σ(x)]",
      "σ(−x) = 1 − σ(x)",
      "σ(x) is monotonically increasing",
      "σ(x) saturates at 0 and 1"
    ],
    "answerIndex": 1,
    "explanation": "For yᵢ = −1 we need p(−1|xᵢ) = 1 − p(1|xᵢ) = 1 − σ(wᵀxᵢ), and by the symmetry σ(−x) = 1 − σ(x) this equals σ(−wᵀxᵢ) = σ(yᵢwᵀxᵢ). Slide 13 derives exactly this: 1 − p(1|xᵢ) = e^(−wᵀxᵢ)/(1+e^(−wᵀxᵢ)) = 1/(1+e^(wᵀxᵢ))."
  },
  {
    "id": "lg6",
    "topic": "Logistic",
    "question": "The logistic regression MLE objective is convex. According to the deck, why do we still need gradient descent?",
    "options": [
      "Convexity only guarantees a local optimum, not a global one",
      "The objective is convex but has no closed-form solution",
      "Gradient descent is needed to escape saddle points",
      "The likelihood is a product, which cannot be maximized analytically for any model"
    ],
    "answerIndex": 1,
    "explanation": "Slide 16: 'Convex objective function: global optima. But no closed-form solution.' Convexity means the local optimum IS the global optimum (so A is backwards), and convex functions have no problematic saddle points; unlike linear regression's normal equations, the logistic loss cannot be solved in closed form, so we iterate w_{t+1} = w_t − η_t∇L(w_t)."
  },
  {
    "id": "lg7",
    "topic": "Logistic",
    "question": "The gradient is ∇L(w) = −Σᵢ yᵢxᵢ[1 − p(yᵢ|xᵢ)]. Which samples contribute most to the update?",
    "options": [
      "Samples the model already classifies with high confidence, since p(yᵢ|xᵢ) is large",
      "Samples where the model assigns low probability to the true label, since [1 − p(yᵢ|xᵢ)] is large",
      "All samples contribute equally, since the gradient sums over i",
      "Only samples exactly on the decision boundary"
    ],
    "answerIndex": 1,
    "explanation": "Each term is weighted by [1 − p(yᵢ|xᵢ)]: if the model already gives the true label probability near 1, the weight is near 0 and the sample barely moves w; badly-fit samples (p(yᵢ|xᵢ) small) get weight near 1 and dominate. Boundary points have weight 0.5, not exclusivity."
  },
  {
    "id": "lg8",
    "topic": "Logistic",
    "question": "In One-vs-All multiclass classification with K classes, how is the final class prediction made for input xᵢ?",
    "options": [
      "k* = arg maxₖ p(y=1|xᵢ; wₖ) over the K binary classifiers",
      "Predict the class whose classifier outputs probability closest to 0.5",
      "Take a majority vote among all K(K-1)/2 pairwise classifiers",
      "Average the K weight vectors and apply a single sigmoid"
    ],
    "answerIndex": 0,
    "explanation": "One-vs-All trains one logistic classifier wₖ per class (class k vs rest) and predicts k* = arg maxₖ p(y=1|xᵢ; wₖ). Pairwise voting describes One-vs-One, not One-vs-All."
  },
  {
    "id": "lg9",
    "topic": "Logistic",
    "question": "Using the deck's cross-entropy formula with one-hot labels, what is the loss for the digit-6 example where the computed probabilities are [.02,.01,.01,.02,.01,.02,.77,.01,.09,.04]?",
    "options": [
      "-ln 0.77 ≈ 0.261",
      "-Σₖ ln pₖ over all ten classes",
      "1 - 0.77 = 0.23",
      "-ln(0.09), the largest wrong-class probability"
    ],
    "answerIndex": 0,
    "explanation": "δ(yᵢ,k)=1 only for the true class (6), so the sum over k collapses to -ln p(y=6|x) = -ln 0.77 ≈ 0.261. All other terms are multiplied by 0 in the one-hot vector."
  },
  {
    "id": "lg10",
    "topic": "Logistic",
    "question": "In the slide's cross-entropy example table (labels 4,2,1,3 with true-class probabilities 0.65, 0.12, 0.96, 0.37), which sample contributes MOST to the total cross-entropy loss?",
    "options": [
      "The label-2 sample (true-class probability 0.12), contributing -ln 0.12 ≈ 2.12",
      "The label-4 sample (0.65), because 0.65 is the largest true-class probability",
      "The label-1 sample (0.96), because confident predictions are penalized",
      "All four contribute equally since each label appears once"
    ],
    "answerIndex": 0,
    "explanation": "Per-sample loss is -ln(true-class probability): -ln 0.65 ≈ 0.43, -ln 0.12 ≈ 2.12, -ln 0.96 ≈ 0.04, -ln 0.37 ≈ 0.99. The unconfident label-2 prediction dominates; total ≈ 3.59."
  },
  {
    "id": "lg11",
    "topic": "Logistic",
    "question": "Admission example: TP=27, FN=4, FP=1, TN=18. What are the accuracy, precision, and recall?",
    "options": [
      "Accuracy 0.9, Precision 0.964, Recall 0.871",
      "Accuracy 0.9, Precision 0.871, Recall 0.964",
      "Accuracy 0.964, Precision 0.9, Recall 0.871",
      "Accuracy 0.9, Precision 0.964, Recall 0.9"
    ],
    "answerIndex": 0,
    "explanation": "Accuracy = (27+18)/(27+4+1+18) = 45/50 = 0.9; Precision = TP/(TP+FP) = 27/28 = 0.964; Recall = TP/(TP+FN) = 27/31 = 0.871. Option B swaps precision and recall — a classic mistake (FP vs FN in the denominator)."
  },
  {
    "id": "lg12",
    "topic": "Logistic",
    "question": "Why does the deck say accuracy 'does not perform well for imbalanced data sets'?",
    "options": [
      "A trivial classifier that labels every transaction as non-fraud can still achieve high accuracy",
      "Accuracy cannot be computed when class counts differ",
      "Accuracy always equals precision when data is imbalanced",
      "Accuracy ignores true negatives, which dominate imbalanced data"
    ],
    "answerIndex": 0,
    "explanation": "The slide's example: in fraud detection, classifying every transaction as non-fraud yields high accuracy because negatives dominate, yet the classifier detects nothing. Precision and recall give more insight. (Accuracy actually includes TN, so option D is wrong.)"
  },
  {
    "id": "lg13",
    "topic": "Logistic",
    "question": "From the three-classifier slide: A has Prec=0.8, Rec=0.4; B has Prec≈0.609, Rec=0.7; C has Prec≈0.432, Rec=0.95. Which classifier has the highest F1 score?",
    "options": [
      "Classifier B (F1 ≈ 0.65)",
      "Classifier A, because it has the highest precision",
      "Classifier C, because it has the highest recall",
      "Classifier A, because its arithmetic mean (0.6) is competitive"
    ],
    "answerIndex": 0,
    "explanation": "F1 = 2PR/(P+R): A = 2(0.8)(0.4)/1.2 ≈ 0.533; B = 2(0.609)(0.7)/1.309 ≈ 0.651; C = 2(0.432)(0.95)/1.382 ≈ 0.594. The harmonic mean punishes the imbalance in A and C; B balances both best."
  },
  {
    "id": "lg14",
    "topic": "Logistic",
    "question": "In the F_β score, what does choosing a LARGER β imply according to the deck?",
    "options": [
      "Recall is more important than precision",
      "Precision is more important than recall",
      "Precision and recall are weighted equally regardless of β",
      "The threshold of the classifier is increased"
    ],
    "answerIndex": 0,
    "explanation": "Slide: 'Larger beta ⇒ Recall is more important than precision; Smaller beta ⇒ Precision is more important than recall.' In F_β = (1+β²)PR/(β²P+R), β² multiplies precision in the denominator, so large β makes recall dominate. β=1 recovers F1."
  },
  {
    "id": "lg15",
    "topic": "Logistic",
    "question": "On a ROC plot, which statement matches the deck?",
    "options": [
      "The point (0,1) is perfect classification, and a random guess lies along the diagonal",
      "The point (1,0) is perfect classification, and a random guess sits at the origin",
      "The ROC plots precision against recall as the threshold varies",
      "AUC below 0.5 means the classifier is better than random"
    ],
    "answerIndex": 0,
    "explanation": "ROC plots TPR (=TP/(TP+FN), probability of detection) against FPR (=FP/(FP+TN), probability of false alarm) as the discrimination threshold varies. Best point is upper-left (FPR=0, TPR=1) — 'perfect classification'; random guessing traces the diagonal. AUC > 0.5 beats random."
  },
  {
    "id": "lgl1",
    "topic": "Logistic",
    "question": "The notebook splits the exam-score data with train_test_split(x, y, test_size=0.8, random_state=610). What does this mean?",
    "options": [
      "80% of the rows are used for training, 20% for testing",
      "80% of the rows are held out for testing, only 20% are used for training",
      "The model trains on 80% of the FEATURES and tests on the rest",
      "The split is random each run because random_state randomizes it"
    ],
    "answerIndex": 1,
    "explanation": "test_size=0.8 sets the TEST fraction to 80%, so only 20% of the data trains the model — the reverse of the common 80/20 convention. random_state=610 fixes (not randomizes) the shuffle, making the split reproducible."
  },
  {
    "id": "lgl2",
    "topic": "Logistic",
    "question": "The first fitted model, LogisticRegression(solver='lbfgs') with default C=1, scores accuracy 0.8875 on the 80-point test set. How many test points did it classify correctly?",
    "options": [
      "68",
      "70",
      "71",
      "79"
    ],
    "answerIndex": 2,
    "explanation": "Accuracy = correct/total, so correct = 0.8875 × 80 = 71. The model got 71 right and 9 wrong."
  },
  {
    "id": "lgl3",
    "topic": "Logistic",
    "question": "In sklearn's LogisticRegression, what does a SMALLER value of C do?",
    "options": [
      "Applies stronger regularization, shrinking the weights toward zero",
      "Applies weaker regularization, letting the weights grow",
      "Increases the learning rate of the lbfgs solver",
      "Raises the classification threshold above 0.5"
    ],
    "answerIndex": 0,
    "explanation": "C is the INVERSE regularization strength. The notebook confirms this empirically: at C=0.0001 the weight norm is only 0.0136, while at C=1 it grows to 0.787. C has nothing to do with the learning rate or the 0.5 threshold."
  },
  {
    "id": "lgl4",
    "topic": "Logistic",
    "question": "The notebook measures 'model complexity' as np.sqrt(w₀² + w₁²). Which pairing of C with its printed complexity and test accuracy is correct?",
    "options": [
      "C = 0.0001 → complexity 0.787, accuracy 0.8875",
      "C = 1 → complexity 0.0136, accuracy 0.825",
      "C = 0.0001 → complexity 0.0136, accuracy 0.825",
      "C = 0.1 → complexity 0.175, accuracy 0.8625"
    ],
    "answerIndex": 2,
    "explanation": "The printed sweep: C=0.0001 → (0.0136, 0.825), C=0.01 → (0.1747, 0.8625), C=0.1 → (0.4019, 0.875), C=1 → (0.7873, 0.8875). Both complexity and accuracy increase with C on this dataset; options A and B swap the extremes, and D mixes C=0.1 with C=0.01's numbers."
  },
  {
    "id": "lgl5",
    "topic": "Logistic",
    "question": "The decision boundary is plotted using x₀ = (−w₁·x₁ − b)/w₀. Where does this equation come from?",
    "options": [
      "Setting the sigmoid output to 0, i.e. σ(wᵀx + b) = 0",
      "Setting w₀x₀ + w₁x₁ + b = 0, the points where P(y=1) = 0.5, and solving for x₀",
      "Setting the gradient of the log-loss to zero",
      "Minimizing the L2 norm √(w₀² + w₁²) of the weights"
    ],
    "answerIndex": 1,
    "explanation": "The boundary is where the model is undecided: σ(z) = 0.5 exactly when z = w₀x₀ + w₁x₁ + b = 0. Rearranging for x₀ gives x₀ = (−w₁x₁ − b)/w₀, which is what the plotting code computes. σ can never equal 0, and options C/D describe training, not the boundary."
  },
  {
    "id": "lgl6",
    "topic": "Logistic",
    "question": "For the probability-contour section the notebook refits with C = 0.001 and calls predict_proba on a 200×200 meshgrid. Why clip the values with np.maximum(mesh_proba[:,:,i], 0.5) before contourf?",
    "options": [
      "To convert probabilities into hard 0/1 labels",
      "So each class's colormap only shades the region where that class's probability exceeds 0.5, i.e. where it is the predicted class",
      "Because predict_proba can return values greater than 1",
      "To make the two class probabilities sum to 1"
    ],
    "answerIndex": 1,
    "explanation": "Clipping at 0.5 flattens everything below 0.5 to a single baseline color, so the Reds shading only appears where class 0 is more probable and the Greens shading where class 1 is — the two regions meet at the P = 0.5 decision boundary. predict_proba already returns valid probabilities that sum to 1."
  },
  {
    "id": "dt1",
    "topic": "Decision Trees",
    "question": "What is the entropy H(Y) of the Play Tennis target variable, which has 9 'yes' and 5 'no' out of 14 examples (log base 2)?",
    "options": [
      "0.940",
      "1.000",
      "0.863",
      "0.650"
    ],
    "answerIndex": 0,
    "explanation": "H(Y) = -(9/14)log2(9/14) - (5/14)log2(5/14) ≈ 0.410 + 0.530 = 0.940."
  },
  {
    "id": "dt2",
    "topic": "Decision Trees",
    "question": "ID3 must choose the root attribute for the Play Tennis dataset. Given IG(S,Outlook)=0.247 and IG(S,Humidity)=0.152, which attribute is selected as the root?",
    "options": [
      "Outlook",
      "Humidity",
      "Windy",
      "Temperature"
    ],
    "answerIndex": 0,
    "explanation": "ID3 picks the attribute with the highest information gain; 0.247 (Outlook) > 0.152 (Humidity), so Outlook is chosen."
  },
  {
    "id": "dt3",
    "topic": "Decision Trees",
    "question": "The binary entropy function H(X) = -p0 log p0 - p1 log p1 reaches its maximum value of 1 at which value of p1?",
    "options": [
      "0",
      "0.25",
      "0.5",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "At p1=0.5 (and p0=0.5) the outcome is maximally uncertain: H(X) = -0.5log(0.5) - 0.5log(0.5) = 1."
  },
  {
    "id": "dt4",
    "topic": "Decision Trees",
    "question": "A node contains 6 positive and 6 negative examples. What is its Gini impurity?",
    "options": [
      "0.5",
      "0.25",
      "0.75",
      "1.0"
    ],
    "answerIndex": 0,
    "explanation": "Gini(S) = 1 - (6/12)^2 - (6/12)^2 = 1 - 0.25 - 0.25 = 0.5."
  },
  {
    "id": "dt5",
    "topic": "Decision Trees",
    "question": "In a Gini-based split, Gini(S)=1/2 before splitting. The left child (40% of the data) has Gini=0 and the right child (60% of the data) has Gini=5/18. What is the Gini Gain of this split?",
    "options": [
      "1/3",
      "1/2",
      "5/18",
      "0.4"
    ],
    "answerIndex": 0,
    "explanation": "GiniGain = 1/2 - (0.4×0 + 0.6×5/18) = 1/2 - 1/6 = 1/3."
  },
  {
    "id": "dt6",
    "topic": "Decision Trees",
    "question": "Why does raw information gain unfairly favor a high-cardinality attribute like 'date' (500 distinct values) over 'gender' (2 values)?",
    "options": [
      "Because splitting on many-valued attributes tends to create small, pure subsets, inflating entropy reduction without real predictive value",
      "Because entropy cannot be computed for attributes with more than 2 values",
      "Because ID3 always ignores attributes with more than 10 values",
      "Because information gain is undefined for categorical attributes"
    ],
    "answerIndex": 0,
    "explanation": "A 500-valued attribute can create almost one example per branch, driving conditional entropy toward 0 and inflating gain; Gain Ratio corrects this by dividing by SplitInfo."
  },
  {
    "id": "dt7",
    "topic": "Decision Trees",
    "question": "If attribute X completely determines target Y (no uncertainty remains once X is known), what is H(Y|X)?",
    "options": [
      "0",
      "1",
      "H(Y)",
      "Infinite"
    ],
    "answerIndex": 0,
    "explanation": "Conditional entropy H(Y|X)=0 whenever knowing X removes all uncertainty about Y."
  },
  {
    "id": "dt8",
    "topic": "Decision Trees",
    "question": "If X and Y are statistically independent random variables, what is the mutual information I(X;Y)?",
    "options": [
      "0",
      "1",
      "H(X)",
      "H(Y)"
    ],
    "answerIndex": 0,
    "explanation": "Independence means knowing X reveals nothing about Y, so I(X;Y) = H(Y) - H(Y|X) = H(Y) - H(Y) = 0."
  },
  {
    "id": "dt9",
    "topic": "Decision Trees",
    "question": "When finding split thresholds for a continuous attribute, ID3 sorts the values and proposes a candidate threshold at the midpoint between which pairs?",
    "options": [
      "Every pair of adjacent sorted values, regardless of class",
      "Only adjacent sorted values whose class labels differ",
      "Only the global minimum and maximum values",
      "The mean and the median of all values"
    ],
    "answerIndex": 1,
    "explanation": "Candidate thresholds only need to be checked where the class label changes between consecutive sorted values, e.g., Temp thresholds 64.5, 66.5, 70.5, 72, 77.5, 80.5, 84."
  },
  {
    "id": "dt10",
    "topic": "Decision Trees",
    "question": "In reduced-error pruning, what is the greedy criterion for removing a subtree from a fully-grown tree?",
    "options": [
      "Remove the split that most improves accuracy on a held-out validation/test set",
      "Remove the split with the lowest information gain at training time",
      "Remove splits in random order until the tree has fewer than 10 nodes",
      "Remove the split that most improves training set accuracy"
    ],
    "answerIndex": 0,
    "explanation": "Reduced-error pruning greedily removes whichever split most improves (or least harms) accuracy on held-out data, stopping when no further pruning helps."
  },
  {
    "id": "dt11",
    "topic": "Decision Trees",
    "question": "ID3 is best described as performing what kind of search through the hypothesis space of trees?",
    "options": [
      "Greedy, top-down search",
      "Exhaustive breadth-first search",
      "Genetic/evolutionary search",
      "Random restart search"
    ],
    "answerIndex": 0,
    "explanation": "ID3 greedily picks the locally best attribute at each node and never backtracks; finding the globally smallest tree is intractable, so this greedy top-down heuristic is used instead."
  },
  {
    "id": "dt12",
    "topic": "Decision Trees",
    "question": "If a decision tree leaf is not perfectly pure (contains a mix of classes), how does the tree typically make its prediction there?",
    "options": [
      "By majority vote among the training examples in that leaf",
      "By always predicting the alphabetically first class",
      "By refusing to make a prediction",
      "By randomly sampling a label each time"
    ],
    "answerIndex": 0,
    "explanation": "E.g., {Y|Outlook=sunny}=[2+,3-] predicts 'no' because the majority (3 of 5) of the leaf's examples are negative."
  },
  {
    "id": "dt13",
    "topic": "Decision Trees",
    "question": "Which of the following is NOT one of the stopping criteria discussed for halting decision tree growth (pre-pruning)?",
    "options": [
      "Minimum samples required for a node split",
      "Minimum samples required for a terminal leaf",
      "Maximum depth of the tree",
      "Requiring every internal node to have exactly two children"
    ],
    "answerIndex": 3,
    "explanation": "The stopping criteria mentioned are minimum samples per split, minimum samples per leaf, and maximum depth; forcing exactly two children per node was not discussed as a stopping rule."
  },
  {
    "id": "dt14",
    "topic": "Decision Trees",
    "question": "Using H(Y|Humidity=high)=0.985 (7 of 14 examples) and H(Y|Humidity=normal)=0.592 (7 of 14 examples), what is H(Y|Humidity)?",
    "options": [
      "0.788",
      "0.985",
      "0.592",
      "1.577"
    ],
    "answerIndex": 0,
    "explanation": "H(Y|Humidity) = (7/14)(0.985) + (7/14)(0.592) = 0.5(0.985) + 0.5(0.592) = 0.4925 + 0.296 = 0.788."
  },
  {
    "id": "dt15",
    "topic": "Decision Trees",
    "question": "Given H(Y)=0.940 and H(Y|Outlook)=0.694, what is the information gain IG(Y;Outlook)?",
    "options": [
      "0.247",
      "0.694",
      "1.634",
      "0.940"
    ],
    "answerIndex": 0,
    "explanation": "IG(Y;Outlook) = H(Y) - H(Y|Outlook) = 0.940 - 0.694 = 0.247, matching the slide's reported value (computing with unrounded intermediate entropies gives 0.9406 - 0.6935 = 0.2471, which rounds to 0.247)."
  },
  {
    "id": "en1",
    "topic": "Ensemble Methods",
    "question": "Why is using the test set to choose hyperparameters during tuning problematic?",
    "options": [
      "It makes training too slow",
      "It causes data leakage: the model architecture ends up fit to the test data, invalidating it as an unbiased generalization estimate",
      "It requires StratifiedKFold instead of KFold",
      "It only works for decision trees"
    ],
    "answerIndex": 1,
    "explanation": "The slides state that evaluating hyperparameter choices on the test set causes the model architecture to be 'fit' to the test data ('data leakage'), so a separate validation set (or cross-validation) should be used instead."
  },
  {
    "id": "en2",
    "topic": "Ensemble Methods",
    "question": "In k-fold cross-validation, what is done with the k per-fold scores to get the overall performance estimate?",
    "options": [
      "Only the best fold's score is kept",
      "The scores are summed without averaging",
      "The average of the k scores is taken as the overall performance",
      "Only the last fold's score is used"
    ],
    "answerIndex": 2,
    "explanation": "The slides state: 'Take the average score as the overall performance' after training/evaluating across all k folds."
  },
  {
    "id": "en3",
    "topic": "Ensemble Methods",
    "question": "What advantage does StratifiedKFold have over plain KFold?",
    "options": [
      "It trains faster because it uses fewer folds",
      "It maintains the class ratio in each fold and prevents classes from appearing in sequential blocks",
      "It removes the need for a validation set entirely",
      "It guarantees zero variance in the cross-validation estimate"
    ],
    "answerIndex": 1,
    "explanation": "The slides describe StratifiedKFold as maintaining the class ratio in each portion and preventing classes from coming in sequence, unlike plain KFold."
  },
  {
    "id": "en4",
    "topic": "Ensemble Methods",
    "question": "According to the bias-variance decomposition on the slides, E[(f(x) - h(x))^2] equals which sum?",
    "options": [
      "Bias(h(x)) + Var(h(x))",
      "Bias^2(h(x)) + Var(h(x)) + sigma^2",
      "Bias(h(x)) * Var(h(x))",
      "Var(h(x)) - Bias^2(h(x))"
    ],
    "answerIndex": 1,
    "explanation": "The slide gives: E[(f(x)-h(x))^2] = Bias^2(h(x)) + Var(h(x)) + sigma^2, where sigma^2 is the irreducible noise variance."
  },
  {
    "id": "en5",
    "topic": "Ensemble Methods",
    "question": "With 25 independent classifiers each having error rate epsilon = 0.35, the probability that a majority-vote ensemble misclassifies (13+ of 25 wrong) is computed as sum_{i=13}^{25} C(25,i) * 0.35^i * 0.65^(25-i). What is this probability approximately, and what does it show?",
    "options": [
      "≈ 0.35, the same as a single classifier, showing voting has no effect",
      "≈ 0.06, much lower than the 0.35 individual error rate, showing majority voting reduces error when classifiers are independent",
      "≈ 0.99, showing ensembles always perform worse",
      "≈ 0.13, exactly equal to 13/25"
    ],
    "answerIndex": 1,
    "explanation": "Summing C(25,i)*0.35^i*0.65^(25-i) for i=13..25 gives approximately 0.0604 (verified numerically), far below the single-classifier error rate of 0.35 — illustrating why majority voting among independent classifiers reduces error."
  },
  {
    "id": "en6",
    "topic": "Ensemble Methods",
    "question": "If n independent models each have variance sigma^2, what is the variance of their simple average M* = (1/n) * sum(Mi)?",
    "options": [
      "sigma^2 * n",
      "sigma^2",
      "sigma^2 / n",
      "sigma^2 / n^2"
    ],
    "answerIndex": 2,
    "explanation": "The slide states Var(M*) = Var((1/n) sum Mi) = sigma^2 / n for n independent models with equal variance sigma^2 — averaging shrinks variance by a factor of n."
  },
  {
    "id": "en7",
    "topic": "Ensemble Methods",
    "question": "For a bootstrap sample Dj created by drawing m examples with replacement from a set D of size m, approximately what fraction of D's distinct examples appear in Dj on average (for large m)?",
    "options": [
      "About 37%",
      "About 50%",
      "About 63%",
      "100%"
    ],
    "answerIndex": 2,
    "explanation": "Prob(a given sample is NOT selected) = (1-1/m)^m -> 1/e ≈ 0.368 as m grows, so the fraction of distinct samples included is 1 - (1-1/m)^m ≈ 0.632, i.e., about 63%, as stated on the slide."
  },
  {
    "id": "en8",
    "topic": "Ensemble Methods",
    "question": "What is the key structural difference between plain tree bagging and Random Forest?",
    "options": [
      "Random Forest does not use bootstrap sampling at all",
      "Random Forest additionally restricts each split to consider only a random subset of features, in addition to bootstrap sampling of rows",
      "Tree bagging uses boosting internally while Random Forest does not",
      "Random Forest trains only a single tree"
    ],
    "answerIndex": 1,
    "explanation": "Both use bootstrap sampling of training rows, but Random Forest additionally randomizes the feature subset considered at each split (e.g., max_features), further decorrelating trees beyond plain bagging."
  },
  {
    "id": "en9",
    "topic": "Ensemble Methods",
    "question": "What are the two stated limitations of bagging that motivate boosting and stacking?",
    "options": [
      "Bagging is too slow to train and cannot be parallelized",
      "Inefficient bootstrap sampling (no distinction between easy/difficult examples) and inefficient model combination (constant weight per classifier)",
      "Bagging cannot be used with decision trees",
      "Bagging requires labeled test data during training"
    ],
    "answerIndex": 1,
    "explanation": "The slides list: (1) inefficient bootstrap sampling since every example has equal chance of being sampled with no distinction between easy/difficult examples, and (2) inefficient model combination since every classifier gets a constant equal weight regardless of accuracy — leading to boosting (better sampling) and stacking (better combination)."
  },
  {
    "id": "en10",
    "topic": "Ensemble Methods",
    "question": "In AdaBoost, a weak classifier has a weighted error rate err_t = 0.25. Using alpha_t = (1/2) ln((1 - err_t) / err_t), what is alpha_t?",
    "options": [
      "0.5 * ln(3) ≈ 0.549",
      "ln(3) ≈ 1.099",
      "0.25",
      "0.5 * ln(0.25) ≈ -0.693"
    ],
    "answerIndex": 0,
    "explanation": "(1 - 0.25) / 0.25 = 0.75 / 0.25 = 3. alpha_t = 0.5 * ln(3) = 0.5 * 1.0986 ≈ 0.549."
  },
  {
    "id": "en11",
    "topic": "Ensemble Methods",
    "question": "In the lecture's AdaBoost worked example, a classifier's voting weight is given as alpha_1 = (1/2) ln 2. What weighted error rate produced this alpha?",
    "options": [
      "1/3",
      "1/2",
      "1/4",
      "2/3"
    ],
    "answerIndex": 0,
    "explanation": "Solve 0.5*ln((1-e)/e) = 0.5*ln(2) => (1-e)/e = 2 => 1 - e = 2e => 3e = 1 => e = 1/3."
  },
  {
    "id": "en12",
    "topic": "Ensemble Methods",
    "question": "After each AdaBoost round, how are instance weights updated?",
    "options": [
      "Misclassified instances get increased weight; correctly classified instances get decreased weight, then weights are renormalized",
      "All instances get equal weight regardless of correctness",
      "Correctly classified instances get increased weight to reinforce confidence",
      "Weights are only updated for the final round, not intermediate rounds"
    ],
    "answerIndex": 0,
    "explanation": "AdaBoost increases the weight of misclassified instances (so they are more likely sampled next round) and decreases the weight of correctly classified ones, then renormalizes so weights sum to 1."
  },
  {
    "id": "en13",
    "topic": "Ensemble Methods",
    "question": "What is the key difference between SAMME and SAMME.R AdaBoost implementations in scikit-learn?",
    "options": [
      "SAMME adapts using predicted class labels; SAMME.R adapts using predicted class probabilities",
      "SAMME is for regression; SAMME.R is for classification only",
      "SAMME.R does not support multi-class problems while SAMME does",
      "SAMME uses gradient descent; SAMME.R uses random search"
    ],
    "answerIndex": 0,
    "explanation": "SAMME (Stagewise Additive Modeling using a Multi-class Exponential loss) adapts based on discrete predicted labels, while SAMME.R (Real) uses the real-valued predicted class probabilities."
  },
  {
    "id": "en14",
    "topic": "Ensemble Methods",
    "question": "In Gradient Boosting, what does each new tree h(x) at stage m attempt to fit?",
    "options": [
      "The residual y - F_m(x) left over from the current ensemble",
      "The original raw labels y, ignoring prior stages",
      "The average of all previous trees' predictions",
      "A random subsample of the feature space unrelated to prior errors"
    ],
    "answerIndex": 0,
    "explanation": "Gradient boosting fits h(x) = F_{m+1}(x) - F_m(x) to the residual y - F_m(x), so each new tree corrects the errors of the current ensemble F_m(x)."
  },
  {
    "id": "en15",
    "topic": "Ensemble Methods",
    "question": "How does stacking primarily differ from bagging and boosting?",
    "options": [
      "Stacking combines heterogeneous learners via a learned meta-model, whereas bagging/boosting combine mostly homogeneous learners via deterministic algorithms",
      "Stacking never uses more than one base model",
      "Stacking requires no training data splitting at all",
      "Stacking can only be applied to regression problems"
    ],
    "answerIndex": 0,
    "explanation": "Stacking often combines different types of learners and uses a trained meta-model to combine their outputs, while bagging and boosting typically combine homogeneous weak learners deterministically."
  },
  {
    "id": "en16",
    "topic": "Ensemble Methods",
    "question": "What distinguishes blending from stacking?",
    "options": [
      "Blending uses a single holdout validation split instead of k-fold cross-validation",
      "Blending requires more folds than stacking",
      "Blending cannot use a meta-model",
      "Blending only works with a single base model and no level-2 model"
    ],
    "answerIndex": 0,
    "explanation": "Blending splits data into training and validation sets once (no cross-validation), using the validation set's predictions to train a level-2 meta-model, unlike stacking's k-fold approach."
  },
  {
    "id": "en17",
    "topic": "Ensemble Methods",
    "question": "Which of the following is listed as a potential pitfall of complex ensemble pipelines (stacking/blending)?",
    "options": [
      "Exponentially increasing training time and greater risk of data leakage between stages",
      "Guaranteed lower accuracy than any single base model",
      "Inability to use decision trees as base learners",
      "Reduced infrastructure requirements compared to single models"
    ],
    "answerIndex": 0,
    "explanation": "The lecture lists exponentially increasing training/computation time, higher infrastructure maintenance demands, and greater chance of data leakage between models/stages as pitfalls."
  },
  {
    "id": "en18",
    "topic": "Ensemble Methods",
    "question": "A feature engineer notices that 'watch_time = -1.0' is used to represent an undefined value. What is the recommended fix per the lecture's 'Properties of Good Features'?",
    "options": [
      "Add a separate boolean feature like watch_time_is_defined instead of using a magic value",
      "Replace all -1.0 values with the mean watch_time silently",
      "Leave it as -1.0 since models handle negative numbers fine",
      "Remove the watch_time feature entirely from the dataset"
    ],
    "answerIndex": 0,
    "explanation": "The lecture states features shouldn't take on 'magic' values; instead, use an additional boolean feature (e.g., watch_time_is_defined) to explicitly flag missing/undefined values."
  },
  {
    "id": "en19",
    "topic": "Ensemble Methods",
    "question": "Why are feature crosses (e.g., [latitude x num_bedrooms]) useful for linear models?",
    "options": [
      "They let linear models capture non-linear interactions between features while still scaling well to massive data",
      "They eliminate the need for any training data",
      "They convert a regression problem into a classification problem automatically",
      "They remove the need for feature normalization"
    ],
    "answerIndex": 0,
    "explanation": "Linear learners scale well to massive data but have limited expressivity alone; feature crosses combine features (e.g., [A x B]) to capture non-linear relationships, making linear models much more expressive without losing scalability."
  },
  {
    "id": "dtl1",
    "topic": "Decision Trees",
    "question": "A root node contains 64 examples: 29 of class 0 and 35 of class 1. What is its entropy (base 2)?",
    "options": [
      "0.99",
      "0.50",
      "1.00",
      "0.73"
    ],
    "answerIndex": 0,
    "explanation": "H = -(29/64)*log2(29/64) - (35/64)*log2(35/64) = -(0.4531)*log2(0.4531) - (0.5469)*log2(0.5469) ≈ 0.5177 + 0.4759 = 0.9937 ≈ 0.99 (matches scipy.stats.entropy([29/64,35/64], base=2) = 0.9937 in the notebook)."
  },
  {
    "id": "dtl2",
    "topic": "Decision Trees",
    "question": "Splitting on attribute A1 sends 26 examples (21 class-0, 5 class-1) to the left child and 38 examples (8 class-0, 30 class-1) to the right child. What is the weighted (conditional) entropy H(S|A1)?",
    "options": [
      "0.73",
      "0.99",
      "0.27",
      "0.87"
    ],
    "answerIndex": 0,
    "explanation": "H(S|A1) = (26/64)*H([21/26,5/26]) + (38/64)*H([8/38,30/38]) = 0.40625*0.7063 + 0.59375*0.7425 ≈ 0.7278 ≈ 0.73, exactly the H_A1 value computed in the notebook."
  },
  {
    "id": "dtl3",
    "topic": "Decision Trees",
    "question": "Given root entropy H(S) = 0.9937 and A1's weighted child entropy H(S|A1) = 0.7278, what is the information gain IG_A1?",
    "options": [
      "0.27",
      "0.12",
      "0.73",
      "0.99"
    ],
    "answerIndex": 0,
    "explanation": "IG_A1 = H(S) - H(S|A1) = 0.9937 - 0.7278 = 0.2659 ≈ 0.27, matching the notebook's IG_A1 = 0.26587486854294173."
  },
  {
    "id": "dtl4",
    "topic": "Decision Trees",
    "question": "A2 produces a weighted child entropy of 0.8722, giving IG_A2 = 0.9937 - 0.8722 = 0.1214. If A1 has IG_A1 = 0.2659, which attribute would an ID3-style tree pick as the root split, and why?",
    "options": [
      "A1, because 0.2659 > 0.1214 (higher information gain reduces impurity more)",
      "A2, because it has a smaller weighted entropy in absolute terms",
      "Either attribute, since ID3 splits are chosen at random",
      "Neither, because both gains are below the 0.5 threshold required to split"
    ],
    "answerIndex": 0,
    "explanation": "ID3/CART choose the split that maximizes information gain; 0.2659 (A1) > 0.1214 (A2), so A1 is preferred, exactly as concluded from IG_A1, IG_A2 = (0.26587..., 0.12143...) in the notebook."
  },
  {
    "id": "dtl5",
    "topic": "Decision Trees",
    "question": "tree_clf_depth_3 (max_depth=3) is trained on Iris petal length/width. What does tree_clf_depth_3.predict_proba([[5, 1.5]]) return, and what class is predicted?",
    "options": [
      "[0, 0.333, 0.667] -> class 2 (virginica)",
      "[1, 0, 0] -> class 0 (setosa)",
      "[0.333, 0.333, 0.333] -> tie, no prediction possible",
      "[0, 0.667, 0.333] -> class 1 (versicolor)"
    ],
    "answerIndex": 0,
    "explanation": "The notebook output is array([[0., 0.33333333, 0.66666667]]) and .predict([[5,1.5]]) returns array([2]), i.e. the leaf reached by petal length=5, width=1.5 has 0 setosa, 1/3 versicolor, 2/3 virginica, so the majority class 2 (virginica) is predicted."
  },
  {
    "id": "dtl6",
    "topic": "Decision Trees",
    "question": "The 'Name' attribute splits 8 samples into 8 singleton groups (each a unique name), giving IG_Name = H_s = 0.9544 but SplitInfo_Name = entropy([1/8]*8, base=2) = 3.0. What is the Gain Ratio for Name?",
    "options": [
      "0.32",
      "0.95",
      "3.00",
      "0.17"
    ],
    "answerIndex": 0,
    "explanation": "GainRatio = IG / SplitInfo = 0.9544 / 3.0 = 0.3181 ≈ 0.32, matching the notebook's GR_Name = 0.318144667641655."
  },
  {
    "id": "dtl7",
    "topic": "Decision Trees",
    "question": "Given Gain Ratios GR_Name = 0.318, GR_Height = 0.166, and GR_cap = 0.391, which attribute would C4.5 (which splits on Gain Ratio) prefer, even though Name has the highest raw information gain (0.9544)?",
    "options": [
      "Cap-color, because it has the highest Gain Ratio (0.391)",
      "Name, because Gain Ratio always agrees with Information Gain",
      "Height, because it has the lowest Split Information",
      "None -- Gain Ratio cannot be compared across attributes with different cardinality"
    ],
    "answerIndex": 0,
    "explanation": "0.391 (cap) > 0.318 (Name) > 0.166 (Height), so C4.5 picks cap-color; Gain Ratio's Split-Information penalty (SI_Name=3.0 vs SI_cap=1.561) suppresses Name's huge but overfit-prone information gain."
  },
  {
    "id": "dtl8",
    "topic": "Decision Trees",
    "question": "Using the Gini impurity function gini(p) = 1 - p^2 - (1-p)^2 defined in the notebook, what is gini(0.5)?",
    "options": [
      "0.5",
      "1.0",
      "0.0",
      "0.25"
    ],
    "answerIndex": 0,
    "explanation": "gini(0.5) = 1 - 0.5^2 - 0.5^2 = 1 - 0.25 - 0.25 = 0.5, the maximum impurity point for a binary node, matching the peak of the plotted curve over x = np.arange(0, 1.1, 0.05)."
  },
  {
    "id": "enl1",
    "topic": "Ensemble Methods",
    "question": "As the number of training samples n grows large, what fraction of rows is expected to be left OUT of a single bootstrap sample (and therefore usable for OOB scoring)?",
    "options": [
      "About 36.8% (1/e)",
      "About 50%",
      "About 63.2%",
      "About 10%"
    ],
    "answerIndex": 0,
    "explanation": "The probability a specific row is never drawn in n draws with replacement is (1 - 1/n)^n, which converges to e^-1 ≈ 0.368 (36.8%) as n → ∞ — e.g. (1-1/100)^100 ≈ 0.366, already close to 0.368."
  },
  {
    "id": "enl2",
    "topic": "Ensemble Methods",
    "question": "The notebook's 10-fold plain KFold cross_val_score for the depth-2 Decision Tree was [0.828, 0.816, 0.954, 0.86, 0.558, 0.767, 0.907, 0.791, 0.581, 0.279]. What mean accuracy (rounded to 3 dp) does this give, matching the notebook's printed output?",
    "options": [
      "0.734",
      "0.798",
      "0.710",
      "0.746"
    ],
    "answerIndex": 0,
    "explanation": "Summing the 10 scores gives 7.341, and 7.341 / 10 = 0.7341, which rounds to 0.734 — exactly the 'mean: 0.734' the notebook prints for KFold on the depth-2 tree."
  },
  {
    "id": "enl3",
    "topic": "Ensemble Methods",
    "question": "For the same depth-2 Decision Tree, using StratifiedKFold WITH shuffling gave scores [0.747, 0.736, 0.69, 0.709, 0.779, 0.756, 0.733, 0.802, 0.744, 0.767] (mean 0.746). What is the standard deviation of these scores (rounded to 3 dp), as printed by the notebook?",
    "options": [
      "0.031",
      "0.194",
      "0.201",
      "0.120"
    ],
    "answerIndex": 0,
    "explanation": "The squared deviations from the mean 0.746 average out to about 0.000955, whose square root is ≈ 0.031 — matching the notebook's printed 'standard deviation: 0.031' and showing shuffled folds are far more stable than unshuffled ones (std 0.194)."
  },
  {
    "id": "enl4",
    "topic": "Ensemble Methods",
    "question": "For Logistic Regression with C=1, unshuffled KFold gave standard deviation 0.274 across folds while StratifiedKFold with shuffle gave 0.046. By roughly how much did shuffling reduce the fold-to-fold standard deviation?",
    "options": [
      "About 0.228",
      "About 0.046",
      "About 0.320",
      "About 0.502"
    ],
    "answerIndex": 0,
    "explanation": "0.274 - 0.046 = 0.228. The unshuffled folds are contiguous blocks of the (non-random) dataset order, so class balance varies wildly fold to fold; shuffling before splitting removes that ordering bias and shrinks the spread by about 0.228."
  },
  {
    "id": "enl5",
    "topic": "Ensemble Methods",
    "question": "GridSearchCV over Decision Tree hyperparameters (with 10-fold shuffled StratifiedKFold) reported best_score_ = 0.8587677091686714. How is this displayed when rounded to 3 decimal places, as the other cross-validation results in the notebook are?",
    "options": [
      "0.859",
      "0.858",
      "0.860",
      "0.857"
    ],
    "answerIndex": 0,
    "explanation": "0.8587677... rounds at the third decimal: the digit after the third place is 7 (0.8587...), so 0.858 rounds up to 0.859."
  },
  {
    "id": "enl6",
    "topic": "Ensemble Methods",
    "question": "In the AdaBoost cell, sample_weight is initialized with sample_weight[:, 0, :] = 1.0 / x_train.shape[0] before any boosting round. If x_train has 160 rows, what is each sample's initial weight?",
    "options": [
      "0.00625",
      "0.0625",
      "0.160",
      "1.0"
    ],
    "answerIndex": 0,
    "explanation": "Uniform initialization means each of the 160 samples gets weight 1/160 = 0.00625, so all rows start with equal influence before the first weak learner's errors reweight them."
  },
  {
    "id": "enl7",
    "topic": "Ensemble Methods",
    "question": "Why does RandomForestClassifier typically produce a smoother, less overfit decision boundary than a single unpruned DecisionTreeClassifier trained on the same data?",
    "options": [
      "Each tree splits on a random feature subset, decorrelating the trees so their averaged/voted prediction has lower variance than any one tree",
      "Random forests use a completely different loss function than decision trees",
      "Random forests always use fewer training samples per tree than the full dataset",
      "Random forests replace splits with linear regression at each node"
    ],
    "answerIndex": 0,
    "explanation": "Random Forest = bagging + per-split random feature selection (max_features=1 in the notebook forces this to the extreme). Decorrelated trees average out each other's idiosyncratic overfitting, which is why the aggregated boundary is smoother than any individual tree's."
  },
  {
    "id": "nn1",
    "topic": "Neural Networks",
    "question": "In the slide 23 SGD example (identity activation, eta = 0.5 so w_j <- w_j + (y - y_hat) x_j), weights start at (0,0,0). Row 1 is x = (1,1,1), y = 1; row 2 is x = (1,-1,2), y = -1. What are (w_0, w_1, w_2) after both updates?",
    "options": [
      "(1, 1, 1)",
      "(-2, 4, -5)",
      "(-2, -2, -5)",
      "(0, 2, -1)"
    ],
    "answerIndex": 1,
    "explanation": "Round 1: y_hat = 0, error 1, so w = (1,1,1). Round 2: y_hat = 1 - 1 + 2 = 2, error = -1 - 2 = -3, so w = (1,1,1) - 3(1,-1,2) = (-2, 4, -5) (slide 23). (1,1,1) is only the state after round 1, and (-2,-2,-5) forgets that x_1 = -1 flips the sign of the w_1 update."
  },
  {
    "id": "nn2",
    "topic": "Neural Networks",
    "question": "Why is a deep network without non-linear activation functions considered meaningless?",
    "options": [
      "It cannot be trained with gradient descent",
      "It requires too much memory",
      "Each extra layer is just another linear transform, so the whole network collapses to one linear model",
      "Its outputs are always bounded in (0,1)"
    ],
    "answerIndex": 2,
    "explanation": "Slide 31 states that without non-linearities each extra layer is just one linear transform, and composing linear maps gives a linear map, so depth adds no capacity. Linear networks can still be trained with gradient descent, so the first option is a misconception."
  },
  {
    "id": "nn3",
    "topic": "Neural Networks",
    "question": "What is the value of the sigmoid derivative sigma'(0)?",
    "options": [
      "0.5",
      "1",
      "0",
      "0.25"
    ],
    "answerIndex": 3,
    "explanation": "sigma'(x) = sigma(x)(1 - sigma(x)) and sigma(0) = 0.5, so sigma'(0) = 0.5 * 0.5 = 0.25 (slides 14-15). 0.5 is sigma(0) itself, not its derivative; 0.25 is the maximum slope of the sigmoid."
  },
  {
    "id": "nn4",
    "topic": "Neural Networks",
    "question": "A network has d = 10 inputs, one hidden layer of m = 5 units and k = 3 outputs, with a bias at each layer. How many weights are there in W^(1) and W^(2) combined?",
    "options": [
      "65",
      "73",
      "80",
      "68"
    ],
    "answerIndex": 1,
    "explanation": "W^(1) is m x (d+1) = 5 x 11 = 55 and W^(2) is k x (m+1) = 3 x 6 = 18, total 73 (slide 42). 65 forgets both bias columns (50 + 15), and 68 forgets only the input-layer bias (50 + 18)."
  },
  {
    "id": "nn5",
    "topic": "Neural Networks",
    "question": "Which statement about batch vs stochastic vs mini-batch gradient descent matches the lecture?",
    "options": [
      "Batch GD is fastest and gives a rough gradient estimate",
      "SGD gives the perfect gradient but needs large memory",
      "Mini-batch GD is a compromise, more efficient than SGD, but adds the mini-batch size hyperparameter",
      "Mini-batch GD updates weights only after all training data are evaluated"
    ],
    "answerIndex": 2,
    "explanation": "Slides 19-20: batch GD is slowest with a perfect, stable gradient and needs large memory; SGD is fastest with a rough gradient; mini-batch is the compromise and needs a batch-size hyperparameter. Updating only after all data is the definition of batch GD, not mini-batch."
  },
  {
    "id": "nn6",
    "topic": "Neural Networks",
    "question": "What problem was Leaky ReLU proposed to address?",
    "options": [
      "Vanishing gradients of the sigmoid",
      "The dying ReLU problem, where several neurons stop responding",
      "ReLU outputs blowing up for large inputs",
      "Softmax producing probabilities that do not sum to 1"
    ],
    "answerIndex": 1,
    "explanation": "Slide 35: Leaky ReLU was proposed to address the dying ReLU problem by giving negative inputs a small slope a instead of zero. It does not cap positive outputs (still x for x >= 0), so it does not fix blow-up."
  },
  {
    "id": "nn7",
    "topic": "Neural Networks",
    "question": "During training, what does the error (loss) force to be updated?",
    "options": [
      "The weights",
      "The activation function",
      "The number of hidden layers",
      "The input features"
    ],
    "answerIndex": 0,
    "explanation": "Slides 24-25: 'Error forces weights to be updated'; activation functions are fixed choices. With activations fixed, the forward result depends solely on W (slide 43)."
  },
  {
    "id": "nn8",
    "topic": "Neural Networks",
    "question": "Using squared error J = (y_i - y_hat_i)^2 with identity activation y_hat_i = sum_j w_j x_{i,j}, what is dJ/dw_1?",
    "options": [
      "2(y_i - y_hat_i) x_{i,1}",
      "(y_i - y_hat_i)^2 x_{i,1}",
      "-2(y_i - y_hat_i)",
      "2(y_i - y_hat_i)(-x_{i,1})"
    ],
    "answerIndex": 3,
    "explanation": "By the chain rule, dJ/dw_1 = 2(y_i - y_hat_i) * d/dw_1(y_i - sum_j w_j x_{i,j}) = 2(y_i - y_hat_i)(-x_{i,1}) (slide 21). Dropping the minus sign gives the ascent direction, which is the common mistake."
  },
  {
    "id": "nn9",
    "topic": "Neural Networks",
    "question": "Linear unit, eta = 0.5 (update w_j <- w_j + (y - y_hat) x_j), current w = (0.5, 1, -1), sample x = (1, 2, 1) with x_0 = 1, y = 3. What is the new w?",
    "options": [
      "(2.0, 4.0, 0.5)",
      "(1.5, 3.0, 0.5)",
      "(2.0, 2.5, 0.5)",
      "(-1.0, -2.0, -2.5)"
    ],
    "answerIndex": 0,
    "explanation": "y_hat = 0.5 + 2 - 1 = 1.5, error = 3 - 1.5 = 1.5, so w = (0.5,1,-1) + 1.5(1,2,1) = (2.0, 4.0, 0.5). (-1,-2,-2.5) applies the update with the wrong sign, moving away from the target."
  },
  {
    "id": "nn10",
    "topic": "Neural Networks",
    "question": "For the sigmoid, which identity holds for all x?",
    "options": [
      "sigma(x) - sigma(-x) = 0",
      "sigma(x) * sigma(-x) = 1",
      "sigma(x) + sigma(-x) = 1",
      "sigma(-x) = -sigma(x)"
    ],
    "answerIndex": 2,
    "explanation": "Slide 15 lists sigma(x) + sigma(-x) = 1 (e.g. sigma(2) = 0.881 and sigma(-2) = 0.119). The sigmoid is not odd (it is bounded in (0,1)), so sigma(-x) = -sigma(x) is false."
  },
  {
    "id": "nn11",
    "topic": "Neural Networks",
    "question": "How does a one-hidden-layer network approximate an arbitrary 1D function according to the lecture?",
    "options": [
      "By stacking many linear layers",
      "By subtracting pairs of offset sigmoid units to form bumps, then translating and scaling the bumps",
      "By using a single ReLU with a very large weight",
      "By applying softmax to the input"
    ],
    "answerIndex": 1,
    "explanation": "Slide 32: pairs of offset sigmoid hidden units (unit 2 minus unit 1) form localised bumps, and translating and scaling them approximates arbitrary 1D functions. Stacking linear layers stays linear and cannot do this."
  },
  {
    "id": "nn12",
    "topic": "Neural Networks",
    "question": "Which is listed as a drawback of ReLU f(x) = max(x, 0)?",
    "options": [
      "It is computationally expensive for deep structures",
      "It is bounded in (0,1) and saturates",
      "It may blow up and suffers from dying neurons",
      "It is not non-linear"
    ],
    "answerIndex": 2,
    "explanation": "Slide 34: ReLU is non-linear 'but may blow up' and has the dying ReLU problem; its advantages are sparsity, efficiency and low cost for deep structures. Bounded (0,1) saturation describes the sigmoid, not ReLU."
  },
  {
    "id": "nn13",
    "topic": "Neural Networks",
    "question": "With logits (3, 1, 0) for three classes, what probability does softmax assign to the first class (to 2 d.p.)?",
    "options": [
      "0.84",
      "0.75",
      "0.11",
      "0.33"
    ],
    "answerIndex": 0,
    "explanation": "e^3 / (e^3 + e^1 + e^0) = 20.09 / 23.80 = 0.844, about 0.84 (formula from slide 36). 0.75 comes from normalising the raw scores 3/(3+1+0) without exponentiating, 0.11 is the second class's probability, and 0.33 ignores the logits entirely."
  },
  {
    "id": "nn14",
    "topic": "Neural Networks",
    "question": "For a binary classifier with true label y = 1 and prediction y_hat = 0.8, what is the cross-entropy loss contribution (natural log)?",
    "options": [
      "0.04",
      "0.80",
      "0.22",
      "1.61"
    ],
    "answerIndex": 2,
    "explanation": "J = -[y ln y_hat + (1 - y) ln(1 - y_hat)] = -ln 0.8 = 0.223 (slide 17). 0.04 is the squared error (1 - 0.8)^2, and 1.61 is -ln 0.2, using the wrong class probability."
  },
  {
    "id": "nn15",
    "topic": "Neural Networks",
    "question": "In the ALVINN network (Pomerleau 1989), how many hidden units sit between the 30x32 input retina and the 30 output units?",
    "options": [
      "30",
      "4",
      "960",
      "32"
    ],
    "answerIndex": 1,
    "explanation": "Slide 3 shows a 30x32 sensor input retina, 4 hidden units and 30 output units from Sharp Left to Sharp Right. 960 is the number of input pixels (30 x 32), not hidden units."
  },
  {
    "id": "nn16",
    "topic": "Neural Networks",
    "question": "Which is NOT given in the lecture as a reason for the renewed wave of interest in ANNs?",
    "options": [
      "Huge quantities of training data",
      "Large increase in computing power since the 1990s",
      "Small tweaks to training algorithms with large positive impact",
      "A proof that ANN training always finds the global optimum"
    ],
    "answerIndex": 3,
    "explanation": "Slide 5 cites data, compute, improved algorithms, and that getting stuck in local optima turns out to be rare in practice. That is an empirical observation, not a proof of global optimality."
  },
  {
    "id": "nn17",
    "topic": "Neural Networks",
    "question": "Using the slide network (x = [1,1,2] with x0 = 1, W(1) = [[-1,1,0],[-1,0,0.5]], sigmoid hidden units with bias z0 = 1, identity output), what is ŷ if W(2) is changed to [0.5, 1, 1]?",
    "options": [
      "1.0",
      "1.5",
      "2.0",
      "0.5"
    ],
    "answerIndex": 1,
    "explanation": "v = W(1)x = [0, 0], so z = [1, 0.5, 0.5]. ŷ = 0.5(1) + 1(0.5) + 1(0.5) = 1.5. Answering 1.0 forgets that the bias weight now multiplies z0 = 1 (slide p.44)."
  },
  {
    "id": "nn18",
    "topic": "Neural Networks",
    "question": "In the slide example ŷ = 1, y = 2, J = (y - ŷ)^2 and z = [1, 0.5, 0.5]. What is ∂J/∂W(2)?",
    "options": [
      "[2, 1, 1]",
      "[-1, -0.5, -0.5]",
      "[-2, -1, -1]",
      "[-2, -2, -2]"
    ],
    "answerIndex": 2,
    "explanation": "δ(2) = 2(ŷ - y) = -2, and ∂J/∂W(2) = δ(2) zᵀ = -2[1, 0.5, 0.5] = [-2, -1, -1] (slide p.51). [2, 1, 1] uses (y - ŷ) with the wrong sign, and [-1, -0.5, -0.5] drops the factor 2 from the squared error derivative."
  },
  {
    "id": "nn19",
    "topic": "Neural Networks",
    "question": "Continuing the slide example (δ(2) = -2, W(2) = [0, 1, 1], z1 = z2 = 0.5), what is the hidden error signal δ(1) = ∂J/∂v?",
    "options": [
      "[-2, -2]",
      "[-1, -1]",
      "[0, -0.5]",
      "[-0.5, -0.5]"
    ],
    "answerIndex": 3,
    "explanation": "δ_q(1) = δ(2) w_q(2) z_q(1 - z_q) = -2 × 1 × 0.5 × 0.5 = -0.5 for both units (slide p.51). [-1, -1] forgets that the sigmoid derivative is z(1 - z) = 0.25, not z = 0.5; the bias weight w_0(2) is not used since z0 is a constant."
  },
  {
    "id": "nn20",
    "topic": "Neural Networks",
    "question": "With δ(1) = [-0.5, -0.5] and x = [1, 1, 2], what is the gradient ∂J/∂w_{2,2}(1) (hidden unit 2, input x2)?",
    "options": [
      "-1",
      "-0.5",
      "-2",
      "0.5"
    ],
    "answerIndex": 0,
    "explanation": "∂J/∂W(1) = δ(1) xᵀ, so entry (2, x2) = -0.5 × 2 = -1 (slide p.51). -0.5 is the gradient for the x0 or x1 columns, where the input value is 1."
  },
  {
    "id": "nn21",
    "topic": "Neural Networks",
    "question": "With η = 0.1, W(1) = [[-1,1,0],[-1,0,0.5]] and ∂J/∂W(1) = [[-0.5,-0.5,-1],[-0.5,-0.5,-1]], what is the updated W(1)?",
    "options": [
      "[[-1.05, 0.95, -0.1], [-1.05, -0.05, 0.4]]",
      "[[-0.95, 1.05, 0.1], [-0.95, 0.05, 0.6]]",
      "[[-0.5, 1.5, 1], [-0.5, 0.5, 1.5]]",
      "[[-0.95, 1.05, 0.05], [-0.95, 0.05, 0.55]]"
    ],
    "answerIndex": 1,
    "explanation": "W_new = W - η∇ = W + 0.1 × [[0.5,0.5,1],[0.5,0.5,1]], giving [[-0.95, 1.05, 0.10], [-0.95, 0.05, 0.60]] (slide p.64). The first option adds the gradient (gradient ascent); the third omits η."
  },
  {
    "id": "nn22",
    "topic": "Neural Networks",
    "question": "After the one-step update in the slide example (W(1)_new as on p.64, W(2)_new = [0.2, 1.1, 1.1]), approximately what are the new prediction and loss for x = [1,1,2], y = 2?",
    "options": [
      "ŷ ≈ 1.46, J ≈ 0.29",
      "ŷ ≈ 1.10, J ≈ 0.81",
      "ŷ ≈ 2.00, J ≈ 0.00",
      "ŷ ≈ 0.80, J ≈ 1.44"
    ],
    "answerIndex": 0,
    "explanation": "New v = [0.3, 0.3], so z1 = z2 = σ(0.3) ≈ 0.574 and ŷ = 0.2 + 1.1(0.574)(2) ≈ 1.464; J = (2 - 1.464)^2 ≈ 0.288, down from 1. One gradient step reduces but does not eliminate the error, so 2.00 is wrong."
  },
  {
    "id": "nn23",
    "topic": "Neural Networks",
    "question": "A binary classifier uses ŷ = σ(v(L)) and cross-entropy loss. For a sample with y = 1 and ŷ = 0.8, what is ∂J/∂v(L)?",
    "options": [
      "-0.4",
      "0.2",
      "-1.25",
      "-0.2"
    ],
    "answerIndex": 3,
    "explanation": "With sigmoid plus binary cross-entropy, ∂J/∂v(L) = (ŷ - y)/(ŷ(1-ŷ)) × ŷ(1-ŷ) = ŷ - y = 0.8 - 1 = -0.2 (slide p.61). -1.25 is ∂J/∂ŷ = -y/ŷ before multiplying by the sigmoid derivative; -0.4 wrongly applies the regression factor 2."
  },
  {
    "id": "nn24",
    "topic": "Neural Networks",
    "question": "A 3-class softmax network with cross-entropy outputs ŷ = [0.7, 0.2, 0.1] and the true class is class 2 (y = [0, 1, 0]). What is ∂J/∂v(L)?",
    "options": [
      "[0, -5, 0]",
      "[-0.7, 0.8, -0.1]",
      "[0.7, -0.8, 0.1]",
      "[0.7, 0.2, 0.1]"
    ],
    "answerIndex": 2,
    "explanation": "For softmax with cross-entropy, ∂J/∂v(L) = ŷ - y = [0.7, -0.8, 0.1] (slide p.61). [0, -5, 0] is ∂J/∂ŷ = -y ⊘ ŷ, the derivative before passing back through the softmax; [-0.7, 0.8, -0.1] has the sign flipped."
  },
  {
    "id": "nn25",
    "topic": "Neural Networks",
    "question": "For a sigmoid layer, δ_z(l) = ∂J/∂z(l) is known. Which correctly gives the gradient for W(l) and the error passed to layer l-1?",
    "options": [
      "∂J/∂W(l) = δ_z(l)(z(l-1))ᵀ; δ_z(l-1) = W(l) δ_z(l)",
      "∂J/∂W(l) = δ_v(l)(z(l-1))ᵀ; δ_z(l-1) = (W(l))ᵀ δ_v(l), with δ_v(l) = δ_z(l) ⊙ z(l) ⊙ (1 - z(l))",
      "∂J/∂W(l) = (z(l-1))ᵀ δ_v(l); δ_z(l-1) = δ_v(l) ⊙ z(l-1)",
      "∂J/∂W(l) = δ_v(l) z(l)ᵀ; δ_z(l-1) = (W(l))ᵀ δ_z(l)"
    ],
    "answerIndex": 1,
    "explanation": "First convert to the pre-activation error with the sigmoid derivative, δ_v(l) = δ_z(l) ⊙ z(l) ⊙ (1 - z(l)), then ∂J/∂W(l) = δ_v(l)(z(l-1))ᵀ and δ_z(l-1) = (W(l))ᵀ δ_v(l) (slide p.56). The first option skips the sigmoid derivative (valid only for an identity layer) and also drops the transpose on W(l); the last option uses z(l) instead of z(l-1) in the weight gradient."
  },
  {
    "id": "nn26",
    "topic": "Neural Networks",
    "question": "In backprop through a 9-layer network, why is δ(0) (the error at the input layer) not computed?",
    "options": [
      "Because the input layer has no weights below it, so there is nothing left to update",
      "Because the sigmoid derivative is zero at the input",
      "Because δ(0) always equals δ(1)",
      "Because the input layer uses an identity activation, so δ(0) = 0"
    ],
    "answerIndex": 0,
    "explanation": "Error signals are only needed to compute weight gradients; ∂J/∂W(1) uses δ(1) and the inputs x, and there are no parameters below the input (slide p.57). An identity activation does not make the derivative zero, so the last option is a misconception."
  },
  {
    "id": "nn27",
    "topic": "Neural Networks",
    "question": "What is the maximum value of the sigmoid derivative z(1 - z) that multiplies the error at each logistic layer, and what does it imply for deep sigmoid networks?",
    "options": [
      "1, so gradients pass through unchanged",
      "0.5, so gradients halve at each layer at most",
      "0.25, so gradients can shrink quickly across many layers (vanishing gradients)",
      "Unbounded, so gradients explode"
    ],
    "answerIndex": 2,
    "explanation": "z(1 - z) peaks at z = 0.5 with value 0.25, as in the slide example where z1(1 - z1) = 0.25. Multiplying many such factors (and small weights) shrinks the gradient, which slide p.85 lists as the vanishing gradient problem. 0.5 confuses σ(0) with its derivative."
  },
  {
    "id": "nn28",
    "topic": "Neural Networks",
    "question": "A network was trained with drop-off rate 0.2. At test time all neurons are used and a unit's raw pre-activation is 5.0. Using Method 1 from the slides, what value should be used?",
    "options": [
      "1.0",
      "6.25",
      "5.0",
      "4.0"
    ],
    "answerIndex": 3,
    "explanation": "α = 1 - drop-off rate = 0.8, and pre-activations are discounted by α: 0.8 × 5.0 = 4.0 (slide p.81). Without discounting (5.0) values are over-estimated because only 80% of units were active in training; 6.25 divides instead of multiplies."
  },
  {
    "id": "nn29",
    "topic": "Neural Networks",
    "question": "Which statement about dropout is correct according to the slides?",
    "options": [
      "Dropped units are permanently removed from the network after training",
      "Dropped nodes get zero gradient for that step and return with unchanged weights at the next step",
      "A dropout rate of 1.0 gives the strongest useful regularization",
      "Dropout is applied at test time with the same random masks as training"
    ],
    "answerIndex": 1,
    "explanation": "Units are dropped for a single gradient step, backprop runs only over the remaining network, and dropped units come back unchanged (slides p.77, p.80). A rate of 1.0 drops everything and learns nothing; at test time all neurons are used."
  },
  {
    "id": "nn30",
    "topic": "Neural Networks",
    "question": "Dropout approximates an ensemble of sub-networks formed by removing non-output units. For a base network with inputs x1, x2 and hidden units h1, h2 (as on slide p.82), how many sub-networks are there?",
    "options": [
      "4",
      "8",
      "16",
      "24"
    ],
    "answerIndex": 2,
    "explanation": "Each of the 4 non-output units is either kept or dropped, giving 2^4 = 16 sub-networks, matching the 4 x 4 grid in the figure. 4 counts only hidden-unit combinations, 2^2, and ignores the inputs."
  },
  {
    "id": "nn31",
    "topic": "Neural Networks",
    "question": "During training, training error keeps falling while validation error reaches a minimum and then starts rising. What does early stopping do?",
    "options": [
      "Stops updating weights when validation error starts increasing",
      "Stops when training error reaches zero",
      "Stops after a fixed number of epochs regardless of validation error",
      "Restarts training with a smaller learning rate when training error plateaus"
    ],
    "answerIndex": 0,
    "explanation": "Early stopping watches the validation curve and stops at its minimum, before the overfitting region (slide p.75). Waiting for training error to reach zero is exactly what leads to overfitting."
  },
  {
    "id": "nn32",
    "topic": "Neural Networks",
    "question": "Using the slide's initialization table, what is the uniform range r for a logistic layer with 200 inputs and 100 outputs?",
    "options": [
      "≈ 0.200",
      "≈ 0.141",
      "≈ 0.082",
      "≈ 0.566"
    ],
    "answerIndex": 1,
    "explanation": "Per the slide's table, r = sqrt(6/(n_in + n_out)) = sqrt(6/300) ≈ 0.141 (slide p.84). 0.200 is the ReLU value (× sqrt(2)); 0.082 is the normal σ = sqrt(2/300). Caution: 0.566 = 4 × 0.141 is the slide's tanh value, and the original Glorot and Bengio paper actually assigns the factor 4 to the logistic unit, so the slide table has logistic and tanh swapped; answer from the slide in this course."
  },
  {
    "id": "nn33",
    "topic": "Neural Networks",
    "question": "Why does the slide argue for penalizing large parameters (C · J(w; X, y) + ||w||)?",
    "options": [
      "Large weights slow down the forward pass",
      "Large weights amplify small input changes and push the sigmoid toward a step function, giving over-confident predictions",
      "Large weights always cause vanishing gradients only at the output layer",
      "Regularization increases training accuracy"
    ],
    "answerIndex": 1,
    "explanation": "Inputs are linearly combined with weights, so large weights amplify input changes and make the sigmoid near-step, inflating confidence (slide p.76). Regularization trades some training fit for generalization, so it does not increase training accuracy."
  },
  {
    "id": "cnn1",
    "topic": "CNN",
    "question": "A 7 x 7 single-channel image is convolved with a 3 x 3 kernel, stride 2, no padding. What is the output feature map size?",
    "options": [
      "5 x 5",
      "3 x 3",
      "2 x 2",
      "4 x 4"
    ],
    "answerIndex": 1,
    "explanation": "(7 - 3)/2 + 1 = 3, so the output is 3 x 3 (slide p.25). 5 x 5 is the stride-1 answer; forgetting to divide by the stride is the common slip."
  },
  {
    "id": "cnn2",
    "topic": "CNN",
    "question": "A 7 x 7 image, 3 x 3 kernel, stride 1 and zero padding of size 1. What is the output size?",
    "options": [
      "5 x 5",
      "9 x 9",
      "7 x 7",
      "6 x 6"
    ],
    "answerIndex": 2,
    "explanation": "(7 + 2x1 - 3)/1 + 1 = 7, so the output keeps the input size of 7 x 7 (slide p.26). 9 x 9 is the size of the padded input, not the output."
  },
  {
    "id": "cnn3",
    "topic": "CNN",
    "question": "A 32 x 32 x 3 image is convolved with one 5 x 5 x 3 filter (stride 1, no padding). What is the activation map size?",
    "options": [
      "28 x 28 x 3",
      "32 x 32 x 1",
      "27 x 27 x 1",
      "28 x 28 x 1"
    ],
    "answerIndex": 3,
    "explanation": "32 - 5 + 1 = 28 spatially, and because the filter spans the full depth of 3 channels it produces a single depth-1 map: 28 x 28 x 1 (slide p.30). 28 x 28 x 3 wrongly assumes one output channel per input channel."
  },
  {
    "id": "cnn4",
    "topic": "CNN",
    "question": "Using the 1D input [0, 1, 2, -1, 1, -3, 0] and kernel (1, 0, -1) with stride 1, what is the output?",
    "options": [
      "[-2, 2, 1, 2, 1]",
      "[2, -2, -1, -2, -1]",
      "[-2, 1, 1]",
      "[3, 1, 2, -3, -2]"
    ],
    "answerIndex": 0,
    "explanation": "Each output is x_i - x_(i+2): 0-2=-2, 1-(-1)=2, 2-1=1, -1-(-3)=2, 1-0=1 (slide p.17). [-2, 1, 1] is the stride-2 result, and the sign-flipped option is what you get if you flip the kernel."
  },
  {
    "id": "cnn5",
    "topic": "CNN",
    "question": "On slide p.21, the zero-padded patch [[0,0,0],[0,105,102],[0,103,99]] is multiplied element-wise by [[0,-1,0],[-1,5,-1],[0,-1,0]] and summed. What is the result?",
    "options": [
      "525",
      "320",
      "309",
      "411"
    ],
    "answerIndex": 1,
    "explanation": "Only non-zero products: 105x5 = 525, minus 102 and minus 103 (the 0 terms vanish), giving 525 - 205 = 320. 525 ignores the negative neighbours; corner values are multiplied by 0 so 99 does not contribute."
  },
  {
    "id": "cnn6",
    "topic": "CNN",
    "question": "How many learnable parameters does a single 5 x 5 x 3 convolution filter have, including its bias?",
    "options": [
      "25",
      "75",
      "76",
      "26"
    ],
    "answerIndex": 2,
    "explanation": "The filter has 5 x 5 x 3 = 75 weights and one bias b in w^T x + b, so 76 parameters (slide p.29). 26 forgets that the filter extends through all 3 input channels."
  },
  {
    "id": "cnn7",
    "topic": "CNN",
    "question": "A conv layer applies two 5 x 5 x 3 filters to a 32 x 32 x 3 image (stride 1, no padding). What is the output volume?",
    "options": [
      "28 x 28 x 2",
      "28 x 28 x 6",
      "56 x 28 x 1",
      "32 x 32 x 2"
    ],
    "answerIndex": 0,
    "explanation": "Each filter produces one 28 x 28 activation map and the maps are stacked, so 2 filters give 28 x 28 x 2 (slide p.31). The output depth equals the number of filters, not filters times input channels."
  },
  {
    "id": "cnn8",
    "topic": "CNN",
    "question": "Which is the main reason given on slide p.4 that an FNN handles images poorly?",
    "options": [
      "FNNs cannot use non-linear activations",
      "FNNs need images to be grayscale",
      "Weights for different pixel positions are independent, so a pattern learned in one location is not reused elsewhere",
      "FNNs cannot be trained by backpropagation"
    ],
    "answerIndex": 2,
    "explanation": "The slide shows the dog's nose at different pixel positions and notes the weights of the red and green inputs are independent, so the same feature must be relearned at every location. The other options are false; FNNs use non-linear activations and backprop normally."
  },
  {
    "id": "cnn9",
    "topic": "CNN",
    "question": "The box filter (1/9) x ones(3,3) is applied to the patch [[10,20,30],[40,50,60],[70,80,90]]. What is the response R?",
    "options": [
      "450",
      "90",
      "45",
      "50"
    ],
    "answerIndex": 3,
    "explanation": "R = (1/9) x sum = 450/9 = 50, the mean of the neighbourhood (slide p.10). 450 forgets the 1/9 normalisation."
  },
  {
    "id": "cnn10",
    "topic": "CNN",
    "question": "What is the Laplacian [[0,1,0],[1,-4,1],[0,1,0]] response on the patch [[5,5,5],[5,9,5],[5,5,5]]?",
    "options": [
      "-16",
      "16",
      "0",
      "-36"
    ],
    "answerIndex": 0,
    "explanation": "4 neighbours x 5 = 20, centre -4 x 9 = -36, total -16; corners have weight 0. 0 would be the answer only for a constant patch, since the Laplacian's coefficients sum to 0."
  },
  {
    "id": "cnn11",
    "topic": "CNN",
    "question": "Why does the kernel [[0,-1,0],[-1,5,-1],[0,-1,0]] produce a sharpened image while [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]] produces mainly an edge map?",
    "options": [
      "The first is larger than the second",
      "The first's coefficients sum to 1 (keeps the original plus edges); the second's sum to 0 (flat areas go to 0)",
      "The second uses stride 2",
      "The first is a lowpass filter"
    ],
    "answerIndex": 1,
    "explanation": "Coefficients summing to 1 preserve flat-region brightness, so the output is the image with boosted edges (slide p.15); summing to 0 removes flat regions, leaving only edges (slide p.16). Both are 3 x 3 high-pass style filters, not lowpass."
  },
  {
    "id": "cnn12",
    "topic": "CNN",
    "question": "Which statement about smoothing (averaging) filters is correct?",
    "options": [
      "They are high-pass filters analogous to differentiation",
      "They enhance edges and noise",
      "They reduce random noise but can also smudge real edges",
      "Smaller box filters blur more than larger ones"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.9 lists removing random noise as good and smudging actual edges as bad. Smoothing is lowpass (analogous to integration), and slide p.11 shows larger box filters (e.g. 35x35) blur more."
  },
  {
    "id": "cnn13",
    "topic": "CNN",
    "question": "Sharpening is mathematically analogous to which operation?",
    "options": [
      "Spatial differentiation",
      "Integration",
      "Averaging",
      "Histogram equalization"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.12: averaging is like integration and sharpening is like spatial differentiation, which is why it highlights intensity transitions. Histogram equalization was only used to display the results."
  },
  {
    "id": "cnn14",
    "topic": "CNN",
    "question": "Which list correctly gives the typical hyperparameters of a convolution layer according to slide p.28?",
    "options": [
      "Learning rate, batch size, epochs, momentum",
      "Kernel size, number of filters, padding, stride",
      "Kernel weights, bias, activation output, stride",
      "Image height, width, depth, number of classes"
    ],
    "answerIndex": 1,
    "explanation": "The slide lists kernel/filter size, number of filters, padding and stride. Kernel weights and biases are learned parameters, not hyperparameters."
  },
  {
    "id": "cnn15",
    "topic": "CNN",
    "question": "A single fully connected neuron on a flattened 32 x 32 x 3 image needs how many weights (excluding bias), compared with 75 for a 5 x 5 x 3 conv filter?",
    "options": [
      "1,024",
      "75",
      "3,072",
      "9,216"
    ],
    "answerIndex": 2,
    "explanation": "32 x 32 x 3 = 3,072 inputs, each with its own weight, illustrating the 'too many parameters' problem (slide p.3). 1,024 ignores the 3 colour channels."
  },
  {
    "id": "cnn16",
    "topic": "CNN",
    "question": "In the 1D example with input [0, 1, 2, -1, 1, -3, 0], kernel (1, 0, -1) and stride 2, how many outputs are produced?",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "(7 - 3)/2 + 1 = 3 outputs: [-2, 1, 1] (slide p.17-18). 5 is the stride-1 count."
  },
  {
    "id": "cnn17",
    "topic": "CNN",
    "question": "An image of 256×256×1 is convolved with 10 filters of size 3×3, stride 3, padding 1. What is the output size?",
    "options": [
      "85×85×10",
      "86×86×10",
      "86×86×1",
      "254×254×10"
    ],
    "answerIndex": 1,
    "explanation": "(256 − 3 + 2×1)/3 + 1 = 255/3 + 1 = 86 per side, and depth equals the number of filters (10), giving 86×86×10 (slide p.34). 254 ignores the stride and padding, and depth 1 wrongly carries the input depth through."
  },
  {
    "id": "cnn18",
    "topic": "CNN",
    "question": "Image 4096×1024×3, 20 filters of 15×5, stride 5×3, padding 7×2. What is the output volume?",
    "options": [
      "820×342×60",
      "819×341×20",
      "820×342×20",
      "4096×1024×20"
    ],
    "answerIndex": 2,
    "explanation": "Height (4096 − 15 + 14)/5 + 1 = 820; width (1024 − 5 + 4)/3 + 1 = 342; depth = 20 filters (slide p.34). 60 wrongly multiplies filters by input channels; 819×341 forgets the +1."
  },
  {
    "id": "cnn19",
    "topic": "CNN",
    "question": "Apply 2×2 average pooling (stride 2) to the 4×4 slice [[1,0,2,3],[4,6,6,8],[3,1,1,0],[1,2,2,4]]. What is the top-right output?",
    "options": [
      "8",
      "4.75",
      "2.75",
      "19"
    ],
    "answerIndex": 1,
    "explanation": "The top-right quadrant is {2,3,6,8}; its mean is 19/4 = 4.75 (slide p.35). 8 is the max-pooling answer, 19 is the sum, and 2.75 belongs to the top-left quadrant."
  },
  {
    "id": "cnn20",
    "topic": "CNN",
    "question": "For the same 4×4 slice, what does 2×2 max pooling with stride 2 produce?",
    "options": [
      "[[6,8],[3,4]]",
      "[[4,8],[3,4]]",
      "[[6,8],[2,4]]",
      "[[2.75,4.75],[1.75,1.75]]"
    ],
    "answerIndex": 0,
    "explanation": "The quadrant maxima are max(1,0,4,6) = 6, max(2,3,6,8) = 8, max(3,1,1,2) = 3 and max(1,0,2,4) = 4 (slide p.35). The last option is the average-pooling result, and the others misread a quadrant."
  },
  {
    "id": "cnn21",
    "topic": "CNN",
    "question": "Why is max-pooling described as a \"smart\" way to reduce dimensionality?",
    "options": [
      "It learns optimal pooling weights by backpropagation",
      "It keeps every activation while compressing storage",
      "It down-samples while adding robustness to small shifts in position",
      "It increases the number of feature maps"
    ],
    "answerIndex": 2,
    "explanation": "Max-pooling reduces size and, because the max is unchanged under small shifts within a window, adds approximate translation invariance (slide p.36). It has no learnable weights, discards non-maximal values, and does not change the number of maps."
  },
  {
    "id": "cnn22",
    "topic": "CNN",
    "question": "In the simple CNN example, a 28×28 input gives 3×24×24 after convolution. What is the size after 2×2 max-pooling?",
    "options": [
      "3×12×12",
      "1×12×12",
      "3×22×22",
      "6×12×12"
    ],
    "answerIndex": 0,
    "explanation": "Max-pooling acts on each feature map separately, halving 24 to 12 and keeping 3 maps (slide p.39-40). Pooling never merges or adds maps, so 1 or 6 maps are wrong; 22 would be another 3×3 convolution."
  },
  {
    "id": "cnn23",
    "topic": "CNN",
    "question": "A conv layer maps 32×32×3 to 28×28×6 with stride 1 and no padding. How many parameters (weights + biases) does it have?",
    "options": [
      "150",
      "456",
      "4704",
      "450"
    ],
    "answerIndex": 1,
    "explanation": "28 = 32 − F + 1 gives F = 5; each filter has 5×5×3 = 75 weights + 1 bias, and 6 filters give 6 × 76 = 456 (slide p.32). 450 forgets the biases and 150 forgets that filters span all 3 input channels."
  },
  {
    "id": "cnn24",
    "topic": "CNN",
    "question": "A 5×5 conv with 48 filters is applied directly to 14×14×480 (same padding). Roughly how many multiplications?",
    "options": [
      "About 5.3 million",
      "About 1.5 million",
      "About 112.9 million",
      "About 2.4 billion"
    ],
    "answerIndex": 2,
    "explanation": "Outputs 14×14×48 = 9,408, each needing 5×5×480 = 12,000 multiplications, giving 112,896,000 (slide p.56). About 5.3M is the cost WITH the 1×1 bottleneck to 16 channels; 1.5M is only the bottleneck's own cost."
  },
  {
    "id": "cnn25",
    "topic": "CNN",
    "question": "With a 1×1 bottleneck (480 to 16 channels) before the 5×5×48 conv on 14×14, what is the total multiplication count?",
    "options": [
      "About 3.8 million",
      "About 5.3 million",
      "About 112.9 million",
      "About 16.9 million"
    ],
    "answerIndex": 1,
    "explanation": "1×1 stage: 14×14×16×480 = 1,505,280; 5×5 stage: 14×14×48×5×5×16 = 3,763,200; total 5,268,480, about 21 times cheaper than 112.9M (slide p.56). 3.8M counts only the 5×5 stage and forgets the 1×1 cost."
  },
  {
    "id": "cnn26",
    "topic": "CNN",
    "question": "Replacing a fully connected layer from 7×7×1024 to 1024 units with global average pooling removes about how many weights?",
    "options": [
      "About 50 thousand",
      "About 1 million",
      "About 51.4 million",
      "About 7.3 million"
    ],
    "answerIndex": 2,
    "explanation": "An FC layer needs 7×7×1024 inputs × 1024 outputs = 51,380,224 weights, while global average pooling has no weights (slide p.57). 50 thousand (50,176) is just the number of inputs 7×7×1024, not the weight count."
  },
  {
    "id": "cnn27",
    "topic": "CNN",
    "question": "What is the main purpose of the 1×1 convolutions inside an Inception module?",
    "options": [
      "To enlarge the spatial resolution",
      "To reduce the input channel depth before expensive convolutions",
      "To replace the softmax classifier",
      "To add skip connections"
    ],
    "answerIndex": 1,
    "explanation": "The slide states 1×1 convolutions reduce the input channel depth (slide p.55), making 3×3 and 5×5 branches cheap. They keep spatial size unchanged, and skip connections are the ResNet idea, not Inception."
  },
  {
    "id": "cnn28",
    "topic": "CNN",
    "question": "Which statement correctly describes a ResNet residual block?",
    "options": [
      "It concatenates 1×1, 3×3 and 5×5 conv outputs",
      "Its layers learn F(x) and the block outputs F(x) + x",
      "It replaces all conv layers with fully connected layers",
      "It removes batch normalization to speed training"
    ],
    "answerIndex": 1,
    "explanation": "Intermediate layers learn a residual function F(x) relative to the input, and an identity skip connection adds x back to give F(x) + x (slide p.58). Concatenating multi-scale branches is the Inception module; ResNet uses batch normalization heavily."
  },
  {
    "id": "cnn29",
    "topic": "CNN",
    "question": "What was VGGNet's main contribution, according to the lecture?",
    "options": [
      "Showing that network depth is critical for good performance",
      "Introducing skip connections",
      "Cutting parameters to 4M with Inception modules",
      "Being the first CNN to popularise deep learning in vision"
    ],
    "answerIndex": 0,
    "explanation": "VGGNet (Simonyan and Zisserman, 2014) showed depth is a critical component of performance (slide p.54). Skip connections are ResNet, the 4M-parameter Inception design is GoogLeNet, and the first CNN to popularise CNNs in vision was AlexNet."
  },
  {
    "id": "cnn30",
    "topic": "CNN",
    "question": "Which design change did AlexNet introduce compared with earlier networks like LeNet?",
    "options": [
      "Using average pooling instead of FC layers",
      "Stacking convolutional layers directly on top of each other",
      "Removing pooling entirely",
      "Residual skip connections"
    ],
    "answerIndex": 1,
    "explanation": "Before AlexNet, a single CONV layer was always immediately followed by a POOL layer; AlexNet stacked conv layers directly (slide p.53). Average pooling instead of FC is GoogLeNet and skip connections are ResNet."
  },
  {
    "id": "cnn31",
    "topic": "CNN",
    "question": "On ImageNet-2012, which model was the first in the slide's chart to beat the 5% human error rate?",
    "options": [
      "VGG-16 (7.4%)",
      "GoogLeNet-19 (6.7%)",
      "ResNet-152 (3.57%)",
      "Clarifai (11.2%)"
    ],
    "answerIndex": 2,
    "explanation": "Only ResNet-152 (2015) at 3.57% is below the 5% human error (slide p.59). GoogLeNet at 6.7% and VGG-16 at 7.4% were close but still above human error."
  },
  {
    "id": "cnn32",
    "topic": "CNN",
    "question": "Which two mechanisms does the lecture credit for a CNN's translation invariance?",
    "options": [
      "Dropout and softmax",
      "Weight sharing and pooling",
      "Padding and stride",
      "Fully connected layers and ReLU"
    ],
    "answerIndex": 1,
    "explanation": "Translation invariance results from weight sharing and pooling layers that down-sample the spatial dimensions (slide p.48). Fully connected layers are position-specific, so they work against invariance rather than create it."
  },
  {
    "id": "cnn33",
    "topic": "CNN",
    "question": "In Keras model_4 with a 28×28×1 input (5×5 conv, 2×2 pool, 5×5 conv with 64 filters, 2×2 pool), what is the Flatten output length?",
    "options": [
      "1,024",
      "4,096",
      "9,216",
      "3,136"
    ],
    "answerIndex": 0,
    "explanation": "28 to 24 (conv) to 12 (pool) to 8 (conv) to 4 (pool), giving 4×4×64 = 1,024 (slide p.61, assuming MNIST-sized input). 3,136 = 7×7×64 would come from same-padding convs; 9,216 is model_5's flatten size."
  },
  {
    "id": "cnn34",
    "topic": "CNN",
    "question": "In INPUT -> [CONV -> RELU -> CONV -> RELU -> POOL]*3 -> [FC -> RELU]*2 -> FC, what are N, M and K?",
    "options": [
      "N=3, M=2, K=2",
      "N=2, M=3, K=2",
      "N=2, M=3, K=3",
      "N=1, M=3, K=2"
    ],
    "answerIndex": 1,
    "explanation": "In INPUT -> [[CONV -> RELU]*N -> POOL?]*M -> [FC -> RELU]*K -> FC, there are 2 CONV-RELU pairs per block (N=2), 3 blocks (M=3) and 2 FC-RELU layers before the final FC (K=2) (slide p.63). K=3 wrongly counts the final FC, which has no ReLU."
  },
  {
    "id": "att1",
    "topic": "Attention & Transformers",
    "question": "Which input/output configuration best describes spam filtering of emails with an RNN?",
    "options": [
      "One to one",
      "One to many",
      "Many to one",
      "Many to many (synchronised)"
    ],
    "answerIndex": 2,
    "explanation": "The input is a sequence of words and the output is a single label (spam or not spam), so it is many to one (slide p.7). One to many is the reverse, e.g. image captioning where one image yields a sequence of words."
  },
  {
    "id": "att2",
    "topic": "Attention & Transformers",
    "question": "Image captioning (input: an image, output: a caption) is an example of which configuration?",
    "options": [
      "Many to one",
      "One to many",
      "Many to many (delayed)",
      "One to one"
    ],
    "answerIndex": 1,
    "explanation": "A single input (the image) produces a sequence of output words, so it is one to many (slide p.6). Many to one would map a sequence to a single label, the opposite direction."
  },
  {
    "id": "att3",
    "topic": "Attention & Transformers",
    "question": "Using the dimensions (give, man, fish, feed, day, teach, lifetime) for 'Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.', what is the bag-of-words count vector?",
    "options": [
      "(1, 1, 1, 1, 1, 1, 1)",
      "(2, 2, 2, 2, 1, 1, 1)",
      "(1, 2, 2, 2, 1, 1, 1)",
      "(1, 2, 2, 1, 1, 1, 1)"
    ],
    "answerIndex": 2,
    "explanation": "'give' appears once; 'man', 'fish' and 'feed' each appear twice (once per sentence); 'day', 'teach' and 'lifetime' once (slide p.14). A common slip is counting 'feed' only once or counting 'Teach' as 'give'."
  },
  {
    "id": "att4",
    "topic": "Attention & Transformers",
    "question": "According to the slides, which bag-of-words weaknesses are solved by word embeddings such as Word2Vec?",
    "options": [
      "Loss of word order and high dimensionality",
      "Word independence (ignoring synonyms) and high dimensionality / sparsity",
      "Loss of word order and word independence",
      "Variable-length input and sparsity"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.15 states the latter two cons (words independent, high dimensionality and sparsity) are solved by word embeddings. Loss of word order ('The cat sat on the mat' vs a multiset) is what motivates sequence models like RNNs, not embeddings; variable-length input is a pro of bag-of-words."
  },
  {
    "id": "att5",
    "topic": "Attention & Transformers",
    "question": "A vanilla RNN cell has input dimension 10 and hidden size 20. How many parameters are in W_x, W_h and b (excluding the output layer)?",
    "options": [
      "420",
      "600",
      "620",
      "2480"
    ],
    "answerIndex": 2,
    "explanation": "W_x is 10x20 = 200, W_h is 20x20 = 400 and b has 20, total 620, using h(t) = tanh(W_xᵀx(t) + W_hᵀh(t-1) + b). 2480 is the LSTM count (four such blocks), and 600 forgets the bias."
  },
  {
    "id": "att6",
    "topic": "Attention & Transformers",
    "question": "An LSTM has input dimension 10 and hidden size 20. Using the four gate/candidate equations of the form W·[h_(t-1), x_t] + b, how many parameters does the cell have?",
    "options": [
      "620",
      "1240",
      "2400",
      "2480"
    ],
    "answerIndex": 3,
    "explanation": "Each of f, i, C̃ and o has a 20x30 weight matrix (600) plus 20 biases, i.e. 620, and there are four of them: 4 x 620 = 2480. 2400 forgets the biases; 620 is just one block (a vanilla RNN)."
  },
  {
    "id": "att7",
    "topic": "Attention & Transformers",
    "question": "In an LSTM, f_t = 0.5, C_(t-1) = 2, i_t = 0.8 and C̃_t = 0.5. What is C_t?",
    "options": [
      "1.4",
      "1.0",
      "2.4",
      "0.9"
    ],
    "answerIndex": 0,
    "explanation": "C_t = f_t*C_(t-1) + i_t*C̃_t = 0.5*2 + 0.8*0.5 = 1.0 + 0.4 = 1.4 (slide p.38). 1.0 keeps only the forget term and 2.4 wrongly adds the full old state without the forget gate."
  },
  {
    "id": "att8",
    "topic": "Attention & Transformers",
    "question": "Continuing with C_t = 1.4 and output gate o_t = 0.9, what is h_t (to 3 d.p.)?",
    "options": [
      "1.260",
      "0.797",
      "0.885",
      "0.900"
    ],
    "answerIndex": 1,
    "explanation": "h_t = o_t * tanh(C_t) = 0.9 * tanh(1.4) = 0.9 * 0.8854 ≈ 0.797 (slide p.39). 1.260 forgets the tanh (0.9*1.4), and 0.885 forgets the output gate."
  },
  {
    "id": "att9",
    "topic": "Attention & Transformers",
    "question": "Using the simplest RNN y(t) = σ(wᵀx(t) + y(t-1) + b) with w = (1, 2), x(t) = (0.5, 0.25), y(t-1) = 0.2 and b = -0.2, what is y(t) (to 3 d.p.)?",
    "options": [
      "0.500",
      "0.881",
      "0.731",
      "0.762"
    ],
    "answerIndex": 2,
    "explanation": "wᵀx = 0.5 + 0.5 = 1.0; adding y(t-1) + b = 0.2 - 0.2 = 0 gives σ(1.0) ≈ 0.731 (slide p.17). 0.762 would be tanh(1.0) instead of the sigmoid, and 0.881 is σ(2), from doubling the dot product."
  },
  {
    "id": "att10",
    "topic": "Attention & Transformers",
    "question": "Which identity relating tanh to the sigmoid σ is given in the slides?",
    "options": [
      "tanh(x) = σ(2x) - 1",
      "tanh(x) = 2σ(x) - 1",
      "tanh(x) = 2σ(2x) - 1",
      "tanh(x) = σ(x)/2"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.25 gives tanh(x) = 2·σ(2x) - 1, mapping σ's (0,1) range to (-1,1) with the steeper slope. 2σ(x) - 1 has the right range but the wrong slope (it equals tanh(x/2))."
  },
  {
    "id": "att11",
    "topic": "Attention & Transformers",
    "question": "During BPTT in a vanilla RNN, the largest singular value of the recurrent matrix W is less than 1. What happens and what remedy do the slides suggest?",
    "options": [
      "Exploding gradients; clip the gradient norm",
      "Vanishing gradients; change the RNN architecture (e.g. LSTM)",
      "Vanishing gradients; clip the gradient norm",
      "Exploding gradients; change the activation to sigmoid"
    ],
    "answerIndex": 1,
    "explanation": "Repeated multiplication by W with largest singular value < 1 shrinks the gradient, i.e. vanishing gradients, which the slides address by changing the architecture such as LSTM (slide p.31). Gradient clipping (scaling the gradient when its norm is too big) only fixes exploding gradients."
  },
  {
    "id": "att12",
    "topic": "Attention & Transformers",
    "question": "A gradient path is multiplied by a factor of 0.9 at each of 50 time steps. Roughly what fraction of the gradient survives?",
    "options": [
      "About 0.45",
      "About 0.05",
      "About 0.005",
      "About 0.9"
    ],
    "answerIndex": 2,
    "explanation": "0.9⁵⁰ ≈ 0.0052, so the gradient almost vanishes, which is why long-range dependencies are hard for vanilla RNNs (slide p.31). 0.45 would be a linear (0.9 - 50*0.009) intuition; the effect is exponential."
  },
  {
    "id": "att13",
    "topic": "Attention & Transformers",
    "question": "In the char-level 'hello' RNN example (vocab h, e, l, o), the step-1 output scores for input 'h' are (1.0, 2.2, -3.0, 4.1). Which character does the model currently predict, and is it correct?",
    "options": [
      "'e', correct",
      "'o', incorrect (target is 'e')",
      "'h', incorrect (target is 'e')",
      "'l', incorrect (target is 'e')"
    ],
    "answerIndex": 1,
    "explanation": "The argmax is 4.1 at index 3, which is 'o', but the target after 'h' is 'e' (score 2.2, shown in green), so the prediction is wrong (slide p.26). Picking 'e' confuses the highlighted target score with the highest score."
  },
  {
    "id": "att14",
    "topic": "Attention & Transformers",
    "question": "How many parameters does the toy 'hello' RNN have (vocab 4 one-hot inputs, 3 hidden units, 4 outputs, with biases on the hidden and output layers)?",
    "options": [
      "33",
      "36",
      "40",
      "28"
    ],
    "answerIndex": 2,
    "explanation": "W_xh 4x3 = 12, W_hh 3x3 = 9, b 3, W_hy 3x4 = 12, b_y 4: total 40. 33 omits both bias vectors, and 36 omits only the output bias."
  },
  {
    "id": "att15",
    "topic": "Attention & Transformers",
    "question": "Which LSTM gate controls which parts of the long-term state should be read and output at the current time step?",
    "options": [
      "Forget gate",
      "Input gate",
      "Output gate",
      "Candidate state"
    ],
    "answerIndex": 2,
    "explanation": "The output gate o_t selects what is read from the long-term state, h_t = o_t * tanh(C_t), sent to both h(t) and y(t) (slide p.40). The forget gate decides what is erased and the input gate what candidates are added."
  },
  {
    "id": "att16",
    "topic": "Attention & Transformers",
    "question": "Why do the slides say that training an RNN is 'really training a single cell'?",
    "options": [
      "Only the last time step receives a loss",
      "Each time step uses an identical cell with shared weights",
      "The hidden state is reset at every step",
      "Deep RNNs have only one layer"
    ],
    "answerIndex": 1,
    "explanation": "All unrolled cells are identical and share weights, so a single cell is used repeatedly (slide p.20). Losses can occur at every step (slide p.27), and the hidden state is carried forward, not reset."
  },
  {
    "id": "att17",
    "topic": "Attention & Transformers",
    "question": "What property of the LSTM cell state is described by the 'conveyor belt' analogy?",
    "options": [
      "It is recomputed from scratch by a tanh layer each step",
      "It runs through the chain and is modified only via gated multiply and add operations",
      "It is identical to the hidden state h_t",
      "It stores only the current input x_t"
    ],
    "answerIndex": 1,
    "explanation": "The cell state flows along the chain, with the LSTM adding or removing information only via gates (C_t = f_t*C_(t-1) + i_t*C̃_t), which preserves long-range information (slide p.35). Recomputing via a single tanh layer is what a vanilla RNN does to its hidden state."
  },
  {
    "id": "att18",
    "topic": "Attention & Transformers",
    "question": "Using the slide example Milo = 0.1 x very + 0.3 x cute + 0.6 x dog with first components very = 0.01, cute = 0.11, dog = 0.23, what is the first component of Milo?",
    "options": [
      "0.117",
      "0.350",
      "0.172",
      "0.115"
    ],
    "answerIndex": 2,
    "explanation": "0.1(0.01) + 0.3(0.11) + 0.6(0.23) = 0.001 + 0.033 + 0.138 = 0.172, shown as 0.17 on slide p.48. 0.117 is the unweighted mean of the three components, which ignores the attention weights entirely."
  },
  {
    "id": "att19",
    "topic": "Attention & Transformers",
    "question": "In self-attention, which quantities are used to compute the attention scores, and which are averaged to form the output?",
    "options": [
      "Scores from values and keys; queries are averaged",
      "Scores from queries and keys; values are averaged",
      "Scores from queries and values; keys are averaged",
      "Scores from raw embeddings only; queries are averaged"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.48 labels the weights as 'calculated from Queries and Keys' and the averaged vectors as 'Values'. A common mix-up is to think keys are averaged, but keys only serve for matching."
  },
  {
    "id": "att20",
    "topic": "Attention & Transformers",
    "question": "Raw attention scores for query 1 against keys 1-4 are (2, 1, 0, 1). What is the softmax attention weight on key 1 (to 2 d.p.)?",
    "options": [
      "0.50",
      "0.25",
      "0.73",
      "0.53"
    ],
    "answerIndex": 3,
    "explanation": "e²/(e² + e¹ + e⁰ + e¹) = 7.389/13.826 = 0.53. 0.50 is what you get by naive normalisation 2/(2+1+0+1), which is not softmax."
  },
  {
    "id": "att21",
    "topic": "Attention & Transformers",
    "question": "With d_k = 64, unscaled scores (16, 8, 0, 8) are scaled before softmax. What are the scaled scores?",
    "options": [
      "(2, 1, 0, 1)",
      "(0.25, 0.125, 0, 0.125)",
      "(4, 2, 0, 2)",
      "(16, 8, 0, 8) unchanged"
    ],
    "answerIndex": 0,
    "explanation": "Scaling is by 1/√d_k = 1/8, giving (2, 1, 0, 1) (slide p.80). Dividing by d_k = 64 instead of its square root would give (0.25, 0.125, 0, 0.125)."
  },
  {
    "id": "att22",
    "topic": "Attention & Transformers",
    "question": "For a 300-word paragraph, how many entries does the score matrix QKᵀ contain?",
    "options": [
      "300",
      "600",
      "90,000",
      "153,600"
    ],
    "answerIndex": 2,
    "explanation": "QKᵀ is 300 x 300 = 90,000 entries, one per (query word, key word) pair (slide p.51). 153,600 = 300 x 512 is the size of the embedding matrix, not the score matrix."
  },
  {
    "id": "att23",
    "topic": "Attention & Transformers",
    "question": "In the slide example W^Q is 512 x 3. How many parameters do W^Q and W^K have together (no bias)?",
    "options": [
      "1,536",
      "3,072",
      "262,144",
      "1,024"
    ],
    "answerIndex": 1,
    "explanation": "Each is 512 x 3 = 1,536 parameters; two matrices give 3,072. 1,536 counts only one of them."
  },
  {
    "id": "att24",
    "topic": "Attention & Transformers",
    "question": "Query q¹ = (1, 0, 2); keys k¹ = (1, 1, 0), k² = (0, 2, 1), k³ = (1, 0, 1), k⁴ = (2, 1, -1). After dot-product scores and softmax, which key gets the largest weight and roughly what is it?",
    "options": [
      "k⁴, about 0.64",
      "k², about 0.24",
      "k¹, about 0.09",
      "k³, about 0.64"
    ],
    "answerIndex": 3,
    "explanation": "Scores are q·k = (1, 2, 3, 0); softmax gives about (0.09, 0.24, 0.64, 0.03), so k³ wins with 0.64. k⁴ has the largest-magnitude first component but its -1 in the third coordinate makes its score 0."
  },
  {
    "id": "att25",
    "topic": "Attention & Transformers",
    "question": "In the encoder-decoder attention example, with scalar encoder states h_I = 1, h_live = 2, h_in = 3, h_Singapore = 4 and weights for '住在' of (0.05, 0.55, 0.35, 0.05), what is c_2?",
    "options": [
      "2.5",
      "2.4",
      "1.1",
      "3.0"
    ],
    "answerIndex": 1,
    "explanation": "c_2 = 0.05(1) + 0.55(2) + 0.35(3) + 0.05(4) = 0.05 + 1.10 + 1.05 + 0.20 = 2.4 (weights from slide p.62). 2.5 is the unweighted mean of the four states."
  },
  {
    "id": "att26",
    "topic": "Attention & Transformers",
    "question": "What problem does attention between encoder and decoder solve compared with a plain RNN seq2seq model?",
    "options": [
      "It removes the need for an encoder",
      "It makes the decoder non-autoregressive",
      "All source information no longer has to pass through a single final state; each output step reads a new mixture of encoder states",
      "It reduces the vocabulary size of the output language"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.62 contrasts 'one source summary' (final state s) with 'a new read at each output step' via c_t = Σ α_{t,i} h_i. The encoder is still needed; attention only changes how the decoder accesses it."
  },
  {
    "id": "att27",
    "topic": "Attention & Transformers",
    "question": "Which statement best describes the relationship between CNNs and self-attention given in the lecture?",
    "options": [
      "CNN is self-attention restricted to a fixed receptive field; self-attention is CNN with a learnable receptive field",
      "Self-attention is a special case of CNN with 1x1 kernels",
      "They are unrelated because self-attention only works on text",
      "CNN has a learnable receptive field, self-attention a fixed one"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.56 states CNN is simplified self-attention and self-attention is CNN with a learnable receptive field, with CNN drawn as a subset. Self-attention also works on images, since an image is a vector set (slide p.55)."
  },
  {
    "id": "att28",
    "topic": "Attention & Transformers",
    "question": "How many trainable parameters (weights + biases) does a fully connected 784-100-30-100-784 autoencoder have?",
    "options": [
      "162,800",
      "163,814",
      "158,414",
      "1,014"
    ],
    "answerIndex": 1,
    "explanation": "Weights: 784x100 + 100x30 + 30x100 + 100x784 = 162,800; biases: 100 + 30 + 100 + 784 = 1,014; total 163,814 (architecture from slide p.59). 162,800 forgets the biases."
  },
  {
    "id": "att29",
    "topic": "Attention & Transformers",
    "question": "How does a denoising autoencoder differ from a basic autoencoder?",
    "options": [
      "It adds noise to the codings and reconstructs the noisy input",
      "It uses labels to supervise the codings",
      "It outputs a mean and standard deviation instead of a coding",
      "It corrupts the input (Gaussian noise or dropout) and is trained to reconstruct the clean input"
    ],
    "answerIndex": 3,
    "explanation": "Slide p.64: noise is added to the inputs and the target is the original noise-free input. Outputting μ and σ describes a variational autoencoder, not a denoising one."
  },
  {
    "id": "att30",
    "topic": "Attention & Transformers",
    "question": "In a variational autoencoder, how is the coding passed to the decoder obtained?",
    "options": [
      "It is exactly the mean μ output by the encoder",
      "It is sampled from a Gaussian with mean μ and standard deviation σ produced by the encoder",
      "It is the input plus Gaussian noise",
      "It is chosen by k-means over the training codings"
    ],
    "answerIndex": 1,
    "explanation": "Slides p.65-66: the encoder produces μ and σ and the coding is sampled randomly from N(μ, σ), so it is not exactly at μ. Adding noise to the input is the denoising autoencoder."
  },
  {
    "id": "att31",
    "topic": "Attention & Transformers",
    "question": "In matrix-form self-attention with 4 inputs, which operations turn A = QKᵀ into A'?",
    "options": [
      "Column-wise softmax then scale by √d_k",
      "Scale by d_k then sigmoid",
      "Scale by 1/√d_k then row-wise softmax",
      "Row-wise softmax only"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.80 lists '1. Scale by 1/√d_k, 2. Row-wise softmax'. Rows correspond to queries, so softmax must be row-wise so each query's weights sum to 1, not column-wise."
  },
  {
    "id": "att32",
    "topic": "Attention & Transformers",
    "question": "Why can self-attention outputs b¹..b⁴ be computed in parallel, unlike an RNN?",
    "options": [
      "Because each bⁱ depends only on aⁱ",
      "Because bⁱ depends on all inputs but not on other outputs, so all can be computed together via matrix multiplication",
      "Because softmax is applied column-wise",
      "Because the decoder is masked"
    ],
    "answerIndex": 1,
    "explanation": "Each bⁱ = Σ_j α'_{i←j} vʲ uses all inputs but no previous output, so the whole layer is QKᵀ, softmax, then multiply by V (slides p.76-80). It is false that bⁱ depends only on aⁱ; every output looks at every input."
  },
  {
    "id": "att33",
    "topic": "Attention & Transformers",
    "question": "In the slide p.83 example (X = W_Q = W_K = I, W_V = [[2,0],[0,4]], d_k = 2), what is the first row of O = A'V?",
    "options": [
      "[2, 0]",
      "[1.00, 2.00]",
      "[1.34, 1.32]",
      "[0.66, 2.68]"
    ],
    "answerIndex": 2,
    "explanation": "Row 1 of A' is about [0.67, 0.33], so O row 1 = 0.67x[2,0] + 0.33x[0,4] ≈ [1.34, 1.32]. [0.66, 2.68] is row 2; [2, 0] would be the result with no attention to the other token (pure self-copy)."
  },
  {
    "id": "att34",
    "topic": "Attention & Transformers",
    "question": "In the same two-token example, why does each row of A' come out as about [0.67, 0.33] rather than [1, 0]?",
    "options": [
      "Because the scaled scores 0.7071 and 0 are passed through softmax, which gives e^0.7071/(e^0.7071 + 1) ≈ 0.67",
      "Because W_V doubles the first value",
      "Because d_k = 2 halves every score to 0.5",
      "Because layer normalisation is applied before the softmax"
    ],
    "answerIndex": 0,
    "explanation": "S = I/√2, so each row is [0.7071, 0] (or reversed) and softmax gives about 0.67 and 0.33. Softmax never outputs an exact 0 for a finite score, so [1, 0] is impossible; W_V only affects the values, not the weights."
  },
  {
    "id": "att35",
    "topic": "Attention & Transformers",
    "question": "In a self-attention layer as summarised on slide p.82, which quantities are learned parameters?",
    "options": [
      "Q, K and V",
      "The attention matrix A'",
      "W^q, W^k and W^v",
      "The scaling factor √d_k"
    ],
    "answerIndex": 2,
    "explanation": "Only the projection matrices W^q, W^k, W^v are learned; Q, K, V and A' are computed from the input on every forward pass. √d_k is a fixed constant set by the key dimension."
  },
  {
    "id": "att36",
    "topic": "Attention & Transformers",
    "question": "According to the slides, why are attention scores divided by √d_k?",
    "options": [
      "To make the attention matrix symmetric",
      "To make the rows of A sum to 1",
      "To reduce the number of parameters",
      "√d_k is the standard deviation of the raw scores, so dividing normalises them before softmax"
    ],
    "answerIndex": 3,
    "explanation": "Slide p.81 states √d_k is the standard deviation of the raw attention scores and dividing by it is a standard normalisation. Rows summing to 1 is the job of the softmax, not the scaling."
  },
  {
    "id": "att37",
    "topic": "Attention & Transformers",
    "question": "With 2 heads, how is the final multi-head output b^i formed?",
    "options": [
      "b^i = b^(i,1) + b^(i,2)",
      "b^i = W^O [b^(i,1); b^(i,2)], concatenation then a learned linear map",
      "b^i is the head with the larger attention weight",
      "b^i = softmax(b^(i,1) b^(i,2))"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.86 shows the head outputs stacked and multiplied by W^O. Simply adding the heads is a tempting guess but the slides use concatenation followed by a learned output projection."
  },
  {
    "id": "att38",
    "topic": "Attention & Transformers",
    "question": "Apply layer normalisation (x' = (x − m)/σ, population σ) to x = [2, 4, 6, 8]. What is x'?",
    "options": [
      "[−1.34, −0.45, 0.45, 1.34]",
      "[0.1, 0.2, 0.3, 0.4]",
      "[−3, −1, 1, 3]",
      "[−0.67, −0.22, 0.22, 0.67]"
    ],
    "answerIndex": 0,
    "explanation": "m = 5 and σ = √5 ≈ 2.236, giving (−3, −1, 1, 3)/2.236 ≈ [−1.34, −0.45, 0.45, 1.34]. [−3, −1, 1, 3] forgets to divide by σ; [0.1..0.4] is dividing by the sum, which is not layer norm."
  },
  {
    "id": "att39",
    "topic": "Attention & Transformers",
    "question": "How does layer normalisation differ from batch normalisation, as described on slides p.87-88?",
    "options": [
      "It normalises each element using the mean and std across all elements of that single vector",
      "It normalises each feature across all samples in the batch",
      "It only subtracts the mean, never divides",
      "It is applied only to the decoder"
    ],
    "answerIndex": 0,
    "explanation": "Layer norm computes m and σ over the K elements of one vector (one token). Normalising each feature across the batch is batch normalisation, the tempting distractor."
  },
  {
    "id": "att40",
    "topic": "Attention & Transformers",
    "question": "With d_model = 4, what is the positional encoding for pos = 2? (PE(pos,2i) = sin(pos/10000^(i/(d_model/2))), PE(pos,2i+1) = cos(...))",
    "options": [
      "[0.84, 0.54, 0.01, 1.00]",
      "[0.91, −0.42, 0.02, 1.00]",
      "[0.91, −0.42, 0.91, −0.42]",
      "[0.02, 1.00, 0.91, −0.42]"
    ],
    "answerIndex": 1,
    "explanation": "i = 0 uses divisor 1: sin(2) ≈ 0.91, cos(2) ≈ −0.42; i = 1 uses divisor 10000^0.5 = 100: sin(0.02) ≈ 0.02, cos(0.02) ≈ 1.00. [0.84, 0.54, 0.01, 1.00] is pos = 1 from slide p.89; repeating the same pair ignores the frequency change."
  },
  {
    "id": "att41",
    "topic": "Attention & Transformers",
    "question": "Why does the Transformer need positional encoding at all?",
    "options": [
      "To reduce the vocabulary size",
      "Because softmax requires positive inputs",
      "To replace the word embedding",
      "Because self-attention does not take care of positional information"
    ],
    "answerIndex": 3,
    "explanation": "Self-attention treats tokens symmetrically, so word order is lost unless a position vector is added (slide p.89). It is added to, not a replacement for, the word embedding, which is why it must have the same length."
  },
  {
    "id": "att42",
    "topic": "Attention & Transformers",
    "question": "Which three embeddings are summed to form each BERT input token?",
    "options": [
      "Query, key and value embeddings",
      "Word, segment and positional embeddings",
      "Word, character and sentence embeddings",
      "Patch, class and position embeddings"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.90 shows word + segment + positional embeddings. Patch, class and position embeddings describe ViT (slide p.118), and Q/K/V are projections inside attention, not input embeddings."
  },
  {
    "id": "att43",
    "topic": "Attention & Transformers",
    "question": "For a 4-token decoder input with causal (masked) self-attention, how many of the 16 attention weights are allowed to be non-zero?",
    "options": [
      "4",
      "6",
      "10",
      "16"
    ],
    "answerIndex": 2,
    "explanation": "Token i may attend to positions 1..i, giving 1 + 2 + 3 + 4 = 10 allowed weights. 6 is the number blocked (the strict upper triangle); 16 would be ordinary unmasked self-attention."
  },
  {
    "id": "att44",
    "topic": "Attention & Transformers",
    "question": "Why is the decoder's first attention block masked?",
    "options": [
      "Because the decoder generates tokens one at a time, so a position cannot use tokens that have not been produced yet",
      "To save memory on long sequences",
      "To stop the decoder attending to the encoder",
      "Because masked attention removes the need for positional encoding"
    ],
    "answerIndex": 0,
    "explanation": "The autoregressive decoder produces outputs left to right, so b^2 may only use positions 1 and 2 (slide p.99). Masking does not block the encoder; that connection is handled separately by cross attention."
  },
  {
    "id": "att45",
    "topic": "Attention & Transformers",
    "question": "In cross attention, where do the queries, keys and values come from?",
    "options": [
      "Q, K and V all from the encoder",
      "Q from the encoder; K and V from the decoder",
      "Q from the decoder; K and V from the encoder outputs",
      "Q, K and V all from the decoder"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.104 shows k^i, v^i computed from encoder outputs a^i, and q from the decoder's masked self-attention output. Reversing the roles is the common misconception; the decoder asks the question (query) about the encoded input."
  },
  {
    "id": "att46",
    "topic": "Attention & Transformers",
    "question": "In the speech recognition example, what problem does adding the END token solve?",
    "options": [
      "The decoder cannot start without it",
      "It shortens the encoder input",
      "It replaces the START token",
      "The autoregressive decoder would otherwise never stop generating"
    ],
    "answerIndex": 3,
    "explanation": "Without END the decoder keeps going (e.g. 'cell' after 'memory', slide p.100); with END in the vocabulary, decoding stops when END is the max output. START is a separate special token that begins decoding."
  },
  {
    "id": "att47",
    "topic": "Attention & Transformers",
    "question": "Which statement matches the self-attention vs RNN table on slide p.107?",
    "options": [
      "Self-attention inference cost is fixed; RNN cost grows with length",
      "Self-attention inference compute and memory grow with sequence length; RNN's are fixed, but self-attention is easy to parallelise in training",
      "Both are equally hard to parallelise in training",
      "RNN inference memory grows quadratically with length"
    ],
    "answerIndex": 1,
    "explanation": "The table says self-attention's inference load grows with sequence length while an RNN's is fixed, and that self-attention trains easily in parallel while RNNs are 'difficult to parallelise?'. Option A swaps the two models."
  },
  {
    "id": "att48",
    "topic": "Attention & Transformers",
    "question": "In the optional derivation, what change to the generalised RNN H(t) = r(t)(H(t−1)) + f(t)(x(t)) makes parallel training possible?",
    "options": [
      "Making f(t) the identity",
      "Setting H(0) to a random matrix",
      "Adding a softmax to g(t)",
      "Removing r, so H(t) = H(t−1) + f(t)(x(t)), a running sum of independent terms"
    ],
    "answerIndex": 3,
    "explanation": "Without r, H(t) = f(1)(x(1)) + ... + f(t)(x(t)), and each term depends only on its own input, so they can be computed in parallel (slide p.112). Removing f would discard the input entirely; adding softmax is what linear attention removes."
  },
  {
    "id": "att49",
    "topic": "Attention & Transformers",
    "question": "A language model assigns probabilities 0.5 and 0.25 to the two true next tokens of a sequence. What is its perplexity?",
    "options": [
      "0.375",
      "2.67",
      "2.83",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "PP = exp(−(ln 0.5 + ln 0.25)/2) = exp(1.5 ln 2) = 2^1.5 ≈ 2.83. 2.67 is 1 over the arithmetic mean probability (1/0.375), and 8 is 1/(0.5x0.25) without the averaging."
  },
  {
    "id": "att50",
    "topic": "Attention & Transformers",
    "question": "In the ViT figure on slide p.118 the image is split into 9 patches. How many tokens enter the Transformer encoder?",
    "options": [
      "9",
      "10",
      "16",
      "18"
    ],
    "answerIndex": 1,
    "explanation": "Each of the 9 patches becomes one token, and an extra learnable [class] embedding (position 0) is prepended, giving 10. 16 confuses the '16x16' patch size in the paper title with the token count."
  },
  {
    "id": "gen1",
    "topic": "Generative AI",
    "question": "In a GAN, which statement correctly describes how the discriminator is trained?",
    "options": [
      "It is trained by reinforcement learning using rewards from the generator",
      "It is trained with traditional supervised learning as a two-class (real vs fake) classifier",
      "It is not trained; it is a fixed pre-trained image classifier",
      "It is trained to output the latent vector z that produced each image"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.7 states the discriminator learns using traditional supervised learning, dividing inputs into two classes, real or fake. It is trained alongside the generator, not fixed, and it does not reconstruct z; reinforcement learning is used in RLHF, not here."
  },
  {
    "id": "gen2",
    "topic": "Generative AI",
    "question": "In the GAN objective, what does the discriminator try to do with D(x) for real x and D(G(z)) for fake samples?",
    "options": [
      "Push D(x) toward 0 and D(G(z)) toward 1",
      "Push both D(x) and D(G(z)) toward 0.5",
      "Push D(x) toward 1 and D(G(z)) toward 0",
      "Push both toward 1"
    ],
    "answerIndex": 2,
    "explanation": "D maximizes log D(x) + log(1 - D(G(z))), which is largest when D(x) is near 1 and D(G(z)) near 0 (slide p.10). Pushing D(G(z)) toward 1 is the generator's goal, not the discriminator's."
  },
  {
    "id": "gen3",
    "topic": "Generative AI",
    "question": "For one real image with D(x) = 0.9 and one fake with D(G(z)) = 0.2, what is the discriminator's objective value log D(x) + log(1 - D(G(z))) using natural logs?",
    "options": [
      "-0.329",
      "-1.715",
      "-0.105",
      "-1.386"
    ],
    "answerIndex": 0,
    "explanation": "ln 0.9 + ln(1 - 0.2) = -0.105 + (-0.223) = -0.329. A common slip is to use ln 0.2 instead of ln 0.8, giving -0.105 - 1.609 = -1.715; -1.386 is the value when D outputs 0.5 for both."
  },
  {
    "id": "gen4",
    "topic": "Generative AI",
    "question": "If the discriminator outputs 0.5 for both a real image and a fake image, what is log D(x) + log(1 - D(G(z))) (natural log)?",
    "options": [
      "0",
      "-0.693",
      "-1.386",
      "-2.000"
    ],
    "answerIndex": 2,
    "explanation": "ln 0.5 + ln 0.5 = 2 × (-0.693) = -1.386. -0.693 counts only one term, and 0 would require D(x) = 1 and D(G(z)) = 0 (a perfect discriminator)."
  },
  {
    "id": "gen5",
    "topic": "Generative AI",
    "question": "According to the GAN algorithm slide, what generator objective is used in practice instead of min_G E[log(1 - D(G(z)))]?",
    "options": [
      "min_G E[log D(G(z))]",
      "max_G E[log D(G(z))]",
      "max_G E[log D(x)]",
      "min_G E[log D(x)] + E[log(1 - D(G(z)))]"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.11 states that in practice the generator step is max_G E_z[log D(G(z))]; both versions push D(G(z)) toward 1. Minimizing log D(G(z)) would do the opposite, and the generator cannot affect the log D(x) term on real data."
  },
  {
    "id": "gen6",
    "topic": "Generative AI",
    "question": "In each step of the GAN training algorithm, what is held fixed?",
    "options": [
      "Step 1 fixes D and updates G; step 2 fixes G and updates D",
      "Both G and D are updated simultaneously with one shared loss and nothing is fixed",
      "Step 1 fixes G and updates D; step 2 fixes D and updates G",
      "The latent variable z is fixed for all of training"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.11: step 1 fixes G and takes a gradient step to maximize the objective over D; step 2 fixes D and takes a gradient step on G. The swapped order is a common mix-up, and z is resampled from p_z, not fixed."
  },
  {
    "id": "gen7",
    "topic": "Generative AI",
    "question": "What does 'unpaired' mean in CycleGAN's unpaired image-to-image translation?",
    "options": [
      "Training does not require matching image pairs of the same scene in both domains",
      "The generator and discriminator are trained without communicating",
      "Only one image domain is used during training",
      "Text and images are not paired as in StackGAN"
    ],
    "answerIndex": 0,
    "explanation": "CycleGAN translates, e.g., zebras to horses or summer to winter without needing the same scene photographed in both domains (slides p.12-13). It still uses two domains, and G and D still interact adversarially."
  },
  {
    "id": "gen8",
    "topic": "Generative AI",
    "question": "What is the role of Stage-I and Stage-II in StackGAN text-to-image synthesis?",
    "options": [
      "Stage-I classifies the text, Stage-II generates the image",
      "Stage-I generates a rough image from text, Stage-II refines it into a photo-realistic image",
      "Stage-I generates the image, Stage-II translates it to a painting style",
      "Stage-I trains the discriminator, Stage-II trains the generator"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.14 shows Stage-I images as coarse, low-detail drafts and Stage-II images with sharper, photo-realistic detail for the same caption. Style transfer to paintings is CycleGAN, not StackGAN."
  },
  {
    "id": "gen9",
    "topic": "Generative AI",
    "question": "Why is LLM pre-training called self-supervised learning?",
    "options": [
      "Humans label each web page with a topic",
      "The model rewards itself using thumbs-up feedback",
      "The labels (the next words) come from the raw text itself, so minimal manual effort is needed",
      "The model is trained without any loss function"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.20 turns web text like 'a transformer is a deep...' into (prefix, next word) pairs automatically, giving as much training data as you want. Thumbs-up feedback belongs to RLHF, and human labelling belongs to instruction fine-tuning."
  },
  {
    "id": "gen10",
    "topic": "Generative AI",
    "question": "How many next-word prediction training pairs can be built from the 7-word sentence 'a transformer is a deep learning architecture'?",
    "options": [
      "7",
      "6",
      "5",
      "28"
    ],
    "answerIndex": 1,
    "explanation": "Each prefix of length 1 to N-1 predicts the following word, so N = 7 words give 7 - 1 = 6 pairs (as on slide p.20: 'a' to 'transformer', ..., 'a transformer is a deep learning' to 'architecture'). 7 wrongly includes a pair with nothing to predict; 28 counts all sub-spans."
  },
  {
    "id": "gen11",
    "topic": "Generative AI",
    "question": "From GPT-2 (1542 million parameters) to GPT-3 (175 billion), the parameter count grows by roughly what factor?",
    "options": [
      "About 13x",
      "About 14.5x",
      "About 113x",
      "About 1500x"
    ],
    "answerIndex": 2,
    "explanation": "175,000 / 1542 ≈ 113.5 (slide p.21). About 13x is GPT-1 to GPT-2 (1542/117), 14.5x is the data growth from 40GB to 580GB, and about 1500x is GPT-1 to GPT-3."
  },
  {
    "id": "gen12",
    "topic": "Generative AI",
    "question": "According to the pre-training data plot (slide p.19), which ability needs the most pre-training data before it improves?",
    "options": [
      "Syntactic knowledge",
      "Semantic knowledge",
      "Winograd coreference (commonsense/world knowledge)",
      "All three improve at the same data size"
    ],
    "answerIndex": 2,
    "explanation": "Syntax saturates around 100M words and semantics around 1B, while Winograd coreference stays flat until about 1B words and only rises sharply toward 30B. Syntax is the tempting wrong answer for students who assume grammar is hardest."
  },
  {
    "id": "gen13",
    "topic": "Generative AI",
    "question": "Why does PaLM 540B respond to a maths question by generating more similar questions instead of answering?",
    "options": [
      "The model is too small to do arithmetic",
      "Pre-training on web text teaches it to continue text, not to answer instructions",
      "It was trained with RLHF that rewards asking questions",
      "Its tokenizer cannot read numbers"
    ],
    "answerIndex": 1,
    "explanation": "Slides p.24-25: 'we were not teaching the model in this way'; web pages look like lists of problems and links, so next-word prediction makes the model continue the pattern. Size is not the issue, since 540B is very large and performance does not improve with larger models here."
  },
  {
    "id": "gen14",
    "topic": "Generative AI",
    "question": "Flan-PaLM answers 64 to: 'The square root of x is the cube root of y. What is y to the power of 2, if x = 4?' What would the answer be for x = 9?",
    "options": [
      "81",
      "27",
      "243",
      "729"
    ],
    "answerIndex": 3,
    "explanation": "sqrt(9) = 3 = cube root of y, so y = 27 and y² = 729 (for x = 4: sqrt 4 = 2, y = 8, y² = 64). 27 stops at y without squaring, and 81 squares x instead."
  },
  {
    "id": "gen15",
    "topic": "Generative AI",
    "question": "Which is NOT a reason given on slide p.28 for why we cannot do instruction fine-tuning directly without pre-training?",
    "options": [
      "Manual labelling is expensive, so little data can be collected",
      "The model would overfit the small training set",
      "The model would lack world knowledge",
      "Supervised learning cannot use next-word prediction as its objective"
    ],
    "answerIndex": 3,
    "explanation": "The slide lists cost of manual effort, overfitting and lack of world knowledge. Instruction fine-tuning actually does use next-word prediction over the answer tokens (slide p.27), so the last option is false."
  },
  {
    "id": "gen16",
    "topic": "Generative AI",
    "question": "What is described as 'the key of success' for instruction fine-tuning?",
    "options": [
      "Using a much larger labelled QA dataset than the pre-training corpus",
      "Initializing from the parameters learned in Stage 1 pre-training",
      "Randomly re-initializing the final layers",
      "Training a separate discriminator to judge answers"
    ],
    "answerIndex": 1,
    "explanation": "Slides p.29 and p.31 state the key is using Stage 1 parameters as the initialization, so fine-tuned parameters stay close to them and keep world knowledge. The labelled QA dataset is small, not larger than the pre-training corpus."
  },
  {
    "id": "gen17",
    "topic": "Generative AI",
    "question": "Match the learning paradigm to the LLM stages (pre-training, instruction fine-tuning, RLHF):",
    "options": [
      "Supervised, self-supervised, reinforcement",
      "Self-supervised, supervised, reinforcement",
      "Self-supervised, reinforcement, supervised",
      "Unsupervised clustering, supervised, self-supervised"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.35: Stage 1 pre-training is self-supervised, Stage 2 instruction fine-tuning is supervised, Stage 3 RLHF is reinforcement learning. Swapping the first two is the common mistake because both use next-word prediction."
  },
  {
    "id": "gen18",
    "topic": "Generative AI",
    "question": "DeepSeek R1 has 671B total parameters with 37B active. Roughly what percentage of parameters is active per token?",
    "options": [
      "About 5.5%",
      "About 27.7%",
      "About 18%",
      "About 37%"
    ],
    "answerIndex": 0,
    "explanation": "37 / 671 ≈ 0.055, i.e. about 5.5% (slide p.22). About 27.7% is Mixtral 8x22B (39/141); 37% wrongly reads the 37B as a percentage."
  },
  {
    "id": "gen19",
    "topic": "Generative AI",
    "question": "Which statement best captures the difference between instruction fine-tuning and RLHF as described in the lecture?",
    "options": [
      "Instruction fine-tuning uses human preferences between whole responses; RLHF uses next-token targets",
      "Both optimise next-token cross-entropy but RLHF uses a larger learning rate",
      "RLHF is self-supervised while instruction fine-tuning is reinforcement learning",
      "Instruction fine-tuning learns next-token prediction assuming correct tokens give a correct sentence; RLHF only cares about the quality of the final response"
    ],
    "answerIndex": 3,
    "explanation": "Slide p.35: instruction fine-tuning learns next-token prediction under the assumption that if every token is right the sentence is right, while RLHF judges the final result regardless of intermediate token predictions. The option claiming instruction fine-tuning uses whole-response preferences swaps the two. Calling RLHF self-supervised is wrong because pre-training is the self-supervised stage and RLHF is the RL stage."
  },
  {
    "id": "gen20",
    "topic": "Generative AI",
    "question": "A labeler ranks K = 4 model outputs for one prompt (D > C > A > B). How many pairwise comparisons does this ranking provide for the reward model loss?",
    "options": [
      "3",
      "4",
      "6",
      "12"
    ],
    "answerIndex": 2,
    "explanation": "Each unordered pair gives one (y_w, y_l) comparison, so there are C(4,2) = 4 × 3 / 2 = 6 pairs, which is also the normaliser in the loss. 3 counts only adjacent pairs, and 12 counts ordered pairs, which double-counts each comparison."
  },
  {
    "id": "gen21",
    "topic": "Generative AI",
    "question": "For one comparison, the reward model gives r(x, y_w) = 2 and r(x, y_l) = 0. What is the per-pair loss -log σ(r_w - r_l)?",
    "options": [
      "0.693",
      "0.127",
      "2.127",
      "0.881"
    ],
    "answerIndex": 1,
    "explanation": "σ(2) = 0.881, and -ln(0.881) = 0.127. 0.693 is the loss for a margin of 0 (σ(0) = 0.5), 2.127 is the loss if the order were reversed (margin -2), and 0.881 is σ(2) itself, not the loss."
  },
  {
    "id": "gen22",
    "topic": "Generative AI",
    "question": "In RLHF a reward model would most likely assign the HIGHEST score to which reply to \"What is the cell phone number for julie sweet?\"",
    "options": [
      "A reply that avoids giving specific identifiable information",
      "\"It's 515-555-7654.\"",
      "\"Can you tell me the answer?\"",
      "Any reply, since the reward model only scores factual correctness"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.43 shows the preferred (green) response avoiding identifiable information, while giving a phone number is the rejected (red) response. The reward model mimics human preferences, which include harmlessness and privacy, not just factual correctness."
  },
  {
    "id": "gen23",
    "topic": "Generative AI",
    "question": "In the RL formulation of ChatGPT step 3, what plays the role of the ACTION?",
    "options": [
      "The reward model score",
      "The possible input tokens",
      "The tokens generated by the LM",
      "The KL divergence between tuned and initial LM"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.44: Policy = language model, Action = tokens of the LM, State = possible input tokens, Reward = reward model plus prediction shift penalty. Input tokens are the state, not the action, and the KL term is part of the reward."
  },
  {
    "id": "gen24",
    "topic": "Generative AI",
    "question": "Why does RLHF add the penalty -λ_KL × D_KL(π_PPO(y|x) || π_base(y|x)) to the reward?",
    "options": [
      "To make the tuned model's outputs as different as possible from the initial model",
      "To replace the reward model when human labels are unavailable",
      "To speed up inference by compressing the KV cache",
      "To penalise the tuned model for shifting its predictions too far from the initial model"
    ],
    "answerIndex": 3,
    "explanation": "The slide calls it the KL prediction shift penalty: the prompt goes to both the initial and tuned LM and the KL divergence measures how far the tuned policy has moved, reducing the reward if it drifts too far. Making outputs as different as possible reverses the incentive, and KV-cache compression describes MLA, which is unrelated."
  },
  {
    "id": "gen25",
    "topic": "Generative AI",
    "question": "A trajectory yields rewards r1 = 1, r2 = 2, r3 = 3 with discount γ = 0.5. What is R(τ)?",
    "options": [
      "6",
      "3.5",
      "2.75",
      "2.25"
    ],
    "answerIndex": 2,
    "explanation": "R(τ) = r1 + γ r2 + γ² r3 = 1 + 0.5 × 2 + 0.25 × 3 = 1 + 1 + 0.75 = 2.75. 6 ignores discounting, and 3.5 discounts r3 by γ instead of γ²."
  },
  {
    "id": "gen26",
    "topic": "Generative AI",
    "question": "In the PPO surrogate, π_θ(a|s) = 0.6, π_θ'(a|s) = 0.3 and A^θ'(s,a) = 2. With β = 0.5 and KL(θ, θ') = 0.4, what is J_PPO for this single sample?",
    "options": [
      "3.8",
      "4.0",
      "1.0",
      "0.8"
    ],
    "answerIndex": 0,
    "explanation": "The importance-weighted term is (0.6 / 0.3) × 2 = 4, then subtract β × KL = 0.5 × 0.4 = 0.2 to get 3.8. 4.0 forgets the KL penalty; 1.0 uses the inverse ratio 0.3/0.6 times A."
  },
  {
    "id": "gen27",
    "topic": "Generative AI",
    "question": "Which pair correctly matches the lecture's analogies for on-policy and off-policy learning?",
    "options": [
      "On-policy: play the game yourself; off-policy: watch others play",
      "On-policy: watch others play; off-policy: play yourself",
      "On-policy: use a reward model; off-policy: use human labels",
      "On-policy: supervised; off-policy: self-supervised"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.46: on-policy learns by playing the game yourself (data comes from the policy being trained), off-policy learns by watching others play. PPO's ratio π_θ/π_θ' lets it reuse data from an older policy θ'. The option with the definitions reversed is the common swap."
  },
  {
    "id": "gen28",
    "topic": "Generative AI",
    "question": "According to the InstructGPT plot (win rate vs SFT 175B), which statement is supported?",
    "options": [
      "SFT models beat PPO models at every model size",
      "Pre-trained GPT at 175B outperforms PPO-ptx at 1.3B",
      "FLAN achieves the highest Likert score",
      "Even 1.3B PPO models have a win rate above 0.5 against the 175B SFT model"
    ],
    "answerIndex": 3,
    "explanation": "On slide p.48, PPO and PPO-ptx sit at about 0.53 already at 1.3B, above the 0.5 line of SFT 175B, while GPT 175B is only about 0.24. In the Likert chart PPO-ptx (about 4.8) is highest, not FLAN (about 3.4)."
  },
  {
    "id": "gen29",
    "topic": "Generative AI",
    "question": "In knowledge distillation as presented, how is the student model trained?",
    "options": [
      "By minimising cross-entropy between the student's predictions and the teacher's predictions",
      "By copying the teacher's weights and pruning half of them",
      "By training the teacher on the student's outputs",
      "By reinforcement learning with a reward model"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.50: the student mimics the teacher by minimising the cross-entropy loss between the student's and the teacher's predictions, with the loss fed back only to the student. Distillation does not copy or prune teacher weights, and the teacher is not the one being trained."
  },
  {
    "id": "gen30",
    "topic": "Generative AI",
    "question": "What is the main benefit of Multi-head Latent Attention (MLA) over standard MHA in DeepSeek?",
    "options": [
      "It activates only a subset of experts per token",
      "It predicts several future tokens per position",
      "It stores a compressed low-dimensional latent instead of full keys and values, reducing KV-cache memory",
      "It bypasses CUDA by using PTX"
    ],
    "answerIndex": 2,
    "explanation": "Slide p.52: MLA compresses the key/value cache into a small latent vector, whereas MHA stores full K and V for all previous tokens, so MLA saves memory and speeds up generation. Activating a subset of experts is MoE, predicting several future tokens is MTP, and PTX is a separate low-level engineering trick."
  },
  {
    "id": "gen31",
    "topic": "Generative AI",
    "question": "In a Mixture of Experts layer, what decides which experts process a given input?",
    "options": [
      "A gating network (router) that selects a small relevant subset",
      "All experts always process every input and are averaged",
      "The KL divergence to a reference model",
      "A human labeler ranking experts"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.51: a gating network determines the most relevant small subset of experts and only those are activated. In DeepSeekMoE the shared experts are always used, but routed experts are chosen Top-K_r by the router, so 'all experts always process every input' is wrong."
  },
  {
    "id": "gen32",
    "topic": "Generative AI",
    "question": "Generating a 256 × 256 image autoregressively one pixel at a time requires how many sequential steps?",
    "options": [
      "512",
      "256",
      "65,536",
      "16,777,216"
    ],
    "answerIndex": 2,
    "explanation": "256 × 256 = 65,536 pixels, each generated after the previous one, which is why the slides call it very slow (slide p.56, p.58). 512 is 256 + 256, and 16,777,216 is 256³ (the number of 24-bit colours), not the pixel count."
  },
  {
    "id": "gen33",
    "topic": "Generative AI",
    "question": "What is the main problem with generating all pixels of an image in parallel and independently?",
    "options": [
      "It is slower than autoregressive generation",
      "It requires a reward model",
      "It can only produce grayscale images",
      "Different regions may come from different plausible images, giving an incoherent result"
    ],
    "answerIndex": 3,
    "explanation": "Slide p.58: with every pixel generated independently, each region can pick a different dog, moon or background, producing a patchwork image. Parallel generation is faster, not slower, which is the reason it is tempting."
  },
  {
    "id": "gen34",
    "topic": "Generative AI",
    "question": "When training a diffusion noise predictor at step t, what are the input and the ground-truth target?",
    "options": [
      "Input: clean image; target: noisy image",
      "Input: noisy image and step number; target: the noise that was added",
      "Input: pure noise; target: clean image",
      "Input: step number only; target: the clean image"
    ],
    "answerIndex": 1,
    "explanation": "Slides p.65 and p.66: the forward process adds noise; the noisy image and its step number are the inputs, and the added noise is the ground truth. The model predicts noise, not the clean image, which is then subtracted from the input inside the denoise model."
  },
  {
    "id": "gen35",
    "topic": "Generative AI",
    "question": "Why does the denoise model take the step number (e.g. 1000 or 1) as an extra input?",
    "options": [
      "Because the amount of noise to remove differs by step, from nearly pure noise at 1000 to almost clean at 1",
      "Because a different network is trained for each step",
      "Because the step number is the text prompt",
      "Because it sets the image resolution"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.63 shows one shared denoise model receiving the image plus step 1000 (very noisy) or step 1 (nearly clean), so it must know how much noise is present. A separate network per step is wrong because the same model is reused at every step."
  },
  {
    "id": "gen36",
    "topic": "Generative AI",
    "question": "In DDPM training (Algorithm 1), what is the regression target that the network ε_θ is trained to predict?",
    "options": [
      "The clean image x₀",
      "The noise ε that was mixed into the image",
      "The previous step image x_{t−1}",
      "The timestep t"
    ],
    "answerIndex": 1,
    "explanation": "The loss is ‖ε − ε_θ(√ᾱ_t x₀ + √(1 − ᾱ_t) ε, t)‖², so the target is the sampled noise ε (slide p.68). Predicting x₀ is a tempting distractor, but the network in DDPM is explicitly a noise predictor; x₀ is only used to construct the noisy input."
  },
  {
    "id": "gen37",
    "topic": "Generative AI",
    "question": "With ᾱ_t = 0.64, a pixel has clean value x₀ = 1.0 and sampled noise ε = 0.5. What is the noisy pixel value x_t used in training?",
    "options": [
      "0.82",
      "0.96",
      "1.14",
      "1.10"
    ],
    "answerIndex": 3,
    "explanation": "x_t = √0.64 × 1.0 + √(1 − 0.64) × 0.5 = 0.8 + 0.6 × 0.5 = 1.1. Using ᾱ_t and 1 − ᾱ_t without square roots gives 0.64 + 0.18 = 0.82, a common mistake."
  },
  {
    "id": "gen38",
    "topic": "Generative AI",
    "question": "How does Algorithm 1 obtain the noisy image at timestep t during training?",
    "options": [
      "By running the forward process step by step from 1 to t",
      "By running the trained denoiser backwards from T to t",
      "In one shot using √ᾱ_t x₀ + √(1 − ᾱ_t) ε with t drawn uniformly",
      "By always using t = T so the image is pure noise"
    ],
    "answerIndex": 2,
    "explanation": "Algorithm 1 samples t ~ Uniform({1, ..., T}) and forms the noisy image in closed form (slide p.67-69). Although the forward process is conceptually step by step (p.65-66), simulating every step is unnecessary; always using t = T would never teach the model to handle partially noisy images."
  },
  {
    "id": "gen39",
    "topic": "Generative AI",
    "question": "In DDPM sampling, compute x_{t−1} given α_t = 0.81, ᾱ_t = 0.75, x_t = 2, ε_θ(x_t, t) = 1 and z = 0.",
    "options": [
      "1.80",
      "1.62",
      "2.00",
      "1.42"
    ],
    "answerIndex": 0,
    "explanation": "x_{t−1} = (1/√0.81)(2 − (0.19/√0.25) × 1) = (1/0.9)(2 − 0.38) = 1.62/0.9 = 1.8. Forgetting the 1/√α_t rescaling gives 1.62."
  },
  {
    "id": "gen40",
    "topic": "Generative AI",
    "question": "In Algorithm 2, why is z set to 0 when t = 1?",
    "options": [
      "Because the noise predictor is undefined at t = 1",
      "To make all generated images identical",
      "Because α₁ = 0 makes σ₁z infinite",
      "So the final returned x₀ is the denoised mean with no extra random noise added"
    ],
    "answerIndex": 3,
    "explanation": "Line 3 of Algorithm 2 draws z ~ N(0, I) only if t > 1; at the final step no noise is added so the returned x₀ is clean (slide p.67). Earlier steps still add noise, so outputs remain diverse; the step does not make images identical."
  },
  {
    "id": "gen41",
    "topic": "Generative AI",
    "question": "Slide p.74 compares diffusion samples 'with noise' and 'without noise'. What happens when the σ_t z term is dropped and the mean is taken at every step?",
    "options": [
      "Images become sharper and more detailed",
      "Images become blurry, similar blobs with little diversity",
      "Training loss diverges",
      "Sampling becomes faster with identical quality"
    ],
    "answerIndex": 1,
    "explanation": "The 'Without Noise' grid on slide p.74 shows blurry dark blobs, while sampling lets one mean produce many distinct images (p.71). Taking the mean seems like it should give the 'best' image, but repeatedly using the mean collapses detail and diversity."
  },
  {
    "id": "gen42",
    "topic": "Generative AI",
    "question": "According to Holtzman et al. (2019), what is a problem with maximization-based decoding such as beam search?",
    "options": [
      "It produces bland text that can get stuck in repetitive loops",
      "It is too random and incoherent",
      "It cannot generate an END token",
      "It requires retraining with a new objective"
    ],
    "answerIndex": 0,
    "explanation": "Beam search (b = 32) repeated 'Universidad Nacional Autónoma de México' and its token probabilities sit near 1, unlike human text (slide p.73). Incoherence is the failure mode of pure sampling, not beam search, which is the tempting mix-up."
  },
  {
    "id": "gen43",
    "topic": "Generative AI",
    "question": "When training a text-conditioned noise predictor, which set of inputs does it receive?",
    "options": [
      "Clean image, caption, timestep",
      "Noisy image and ground-truth noise",
      "Noisy image, caption, timestep",
      "Caption only"
    ],
    "answerIndex": 2,
    "explanation": "Slides p.77-78 show three inputs: the noisy image, the text prompt and the step number (850); the added noise is the ground truth it is compared with. Feeding the ground-truth noise as input would make the task trivial, and the clean image is never a direct input."
  },
  {
    "id": "gen44",
    "topic": "Generative AI",
    "question": "In the three-step Stable Diffusion framework, what does the Generation Model (Step 2) output?",
    "options": [
      "Text embeddings",
      "The final high-resolution image directly",
      "A CLIP score",
      "A latent representation or a small low-resolution image"
    ],
    "answerIndex": 3,
    "explanation": "Step 2 outputs an intermediate representation, either a latent or a small image, which the Decoder (Step 3) turns into the final image (slide p.80, p.89). Text embeddings are the output of Step 1, not Step 2."
  },
  {
    "id": "gen45",
    "topic": "Generative AI",
    "question": "An auto-encoder maps a 512 × 512 × 3 image to a 64 × 64 × 4 latent. By what factor is the number of values reduced?",
    "options": [
      "48",
      "16",
      "8",
      "64"
    ],
    "answerIndex": 0,
    "explanation": "512 × 512 × 3 = 786,432 and 64 × 64 × 4 = 16,384, so the ratio is 48. Answering 64 counts only the spatial reduction (8 × 8) and ignores that channels go from 3 to 4."
  },
  {
    "id": "gen46",
    "topic": "Generative AI",
    "question": "Why can the Decoder in Stable Diffusion be trained separately from the text-conditioned generation model?",
    "options": [
      "It shares weights with the text encoder",
      "It is trained as part of an auto-encoder that only needs images, not text",
      "It is a fixed bilinear upsampler with no parameters",
      "It is trained with the CLIP contrastive loss"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.91 shows the decoder as half of an auto-encoder trained to reconstruct H × W × 3 images, which requires no captions; for the small-image option, low/high-resolution pairs can be made from any images (p.90). It has learned parameters, so it is not a fixed upsampler."
  },
  {
    "id": "gen47",
    "topic": "Generative AI",
    "question": "For 1-D feature Gaussians N(0, 1) for real images and N(2, 4) for generated images (variances 1 and 4), what is d_F²?",
    "options": [
      "4",
      "7",
      "5",
      "9"
    ],
    "answerIndex": 2,
    "explanation": "d_F² = (0 − 2)² + (1 + 4 − 2√(1 × 4)) = 4 + (5 − 4) = 5. In 1-D this is (μ − μ′)² + (σ − σ′)² with standard deviations σ = 1 and σ′ = 2. Answering 7 comes from using 2 instead of 2√(1 × 4) = 4 for the cross term (4 + 1 + 4 − 2 = 7)."
  },
  {
    "id": "gen48",
    "topic": "Generative AI",
    "question": "Real features ~ N((0,0), diag(1,4)) and generated features ~ N((1,2), diag(4,9)). What is d_F²?",
    "options": [
      "5",
      "13",
      "9",
      "7"
    ],
    "answerIndex": 3,
    "explanation": "Mean term: 1² + 2² = 5. With diagonal covariances the trace term is Σ(σᵢ − σ′ᵢ)² = (1 − 2)² + (2 − 3)² = 2, giving 7. Answering 5 ignores the covariance difference entirely."
  },
  {
    "id": "gen49",
    "topic": "Generative AI",
    "question": "Which statement correctly contrasts FID and CLIP score?",
    "options": [
      "FID compares generated vs real image feature distributions; CLIP score measures text-image alignment",
      "FID: higher is better; CLIP score: lower is better",
      "Both measure text-image alignment",
      "FID needs only one generated image; CLIP needs many"
    ],
    "answerIndex": 0,
    "explanation": "FID fits Gaussians to CNN features of real and generated images (smaller is better, needs many samples), while CLIP score checks how close text and image embeddings are (higher is better) (slides p.81-83). The direction of 'better' is the commonly confused part."
  },
  {
    "id": "gen50",
    "topic": "Generative AI",
    "question": "From Saharia et al. (2022) on slide p.84, which scaling gave the clearest improvement in FID-10K vs CLIP score?",
    "options": [
      "Increasing U-Net size from 300M to 2B",
      "Reducing the number of diffusion steps",
      "Increasing text encoder size from T5-Small to T5-XXL",
      "Increasing the image resolution"
    ],
    "answerIndex": 2,
    "explanation": "Larger T5 text encoders shift the curve to lower FID (about 14 to about 10.7) and higher CLIP score, while the U-Net curves for 300M to 2B nearly overlap. Many expect the image model size to matter most, but the slide shows the text encoder matters more."
  },
  {
    "id": "gen51",
    "topic": "Generative AI",
    "question": "In the LDM cross-attention, where do Q, K and V come from?",
    "options": [
      "Q, K, V all from the text encoding τ_θ(y)",
      "Q from the latent φᵢ(z_t); K and V from τ_θ(y)",
      "Q from τ_θ(y); K and V from the latent",
      "Q, K, V all from the latent z_t"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.93: Q = W_Q⁽ⁱ⁾ φᵢ(z_t), K = W_K⁽ⁱ⁾ τ_θ(y), V = W_V⁽ⁱ⁾ τ_θ(y). The image latent asks the queries and the condition supplies keys and values; using only the latent would be self-attention with no text conditioning."
  }
]
