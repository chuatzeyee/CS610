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
  }
]
