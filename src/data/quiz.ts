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
  }
]
