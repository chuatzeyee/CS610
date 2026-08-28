import type { Definition } from './types'

export const definitions: readonly Definition[] = [
  {
    "term": "Machine learning (Mitchell's definition)",
    "definition": "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.",
    "example": "Checkers (Arthur Samuel, 1952): T = playing checker games, P = percentage of games won against an arbitrary opponent, E = playing practice games against many people or itself.",
    "source": "Intro"
  },
  {
    "term": "Learning (Herbert Simon's definition)",
    "definition": "Any process by which a system improves performance from experience.",
    "source": "Intro"
  },
  {
    "term": "Well-defined ML task <T, P, E>",
    "definition": "The specification of a learning problem as a triple of task T, performance measure P, and experience E.",
    "example": "Spam filtering: T = categorize email messages as spam or legitimate, P = percentage of email messages correctly classified, E = database of emails with human-given labels.",
    "source": "Intro"
  },
  {
    "term": "Traditional programming vs machine learning",
    "definition": "In traditional programming, Data + Program go into the computer to produce Output; in machine learning, Data + Output go into the computer to produce a Model, which is then used as the program on new data.",
    "source": "Intro"
  },
  {
    "term": "Supervised (inductive) learning",
    "definition": "Learning where the training data includes desired outputs: given (input, correct output) pairs, predict (input, ?) by learning h(x) ≈ f(x) for the unknown function y = f(x).",
    "example": "Spam filtering and handwritten digit recognition.",
    "source": "Intro"
  },
  {
    "term": "Unsupervised learning",
    "definition": "Learning where the training data does not include desired outputs; tasks include clustering, dimension reduction, independent components/dictionary learning, and novelty/anomaly detection.",
    "example": "Clustering unlabeled points into three colored groups, as in the slide's 'original unclustered data' vs 'clustered data' figure.",
    "source": "Intro"
  },
  {
    "term": "Semi-supervised learning",
    "definition": "Learning where the training data includes a few desired outputs (only a small portion of the data is labeled).",
    "source": "Intro"
  },
  {
    "term": "Reinforcement learning",
    "definition": "Learning from rewards obtained from a sequence of actions: repeat — take an action, environment reacts, observe stuff, update model.",
    "example": "Game playing (chess), self-driving cars, autonomous plane flight.",
    "source": "Intro"
  },
  {
    "term": "Classification",
    "definition": "Supervised learning with discrete output. Binary classification maps input x to y in {-1, +1}; multi-class classification maps input x to y in {1, ..., k}.",
    "example": "Digit recognition: map each image x to one of ten digits [0, ..., 9].",
    "source": "Intro"
  },
  {
    "term": "Regression",
    "definition": "Supervised learning with continuous output: given input x, find y in real-valued space ℝ (or ℝᵈ).",
    "example": "Simple linear regression Y = a + b·X, e.g., wgt = 80 + 2·(hgt) predicting body weight from height.",
    "source": "Intro"
  },
  {
    "term": "Linear regression",
    "definition": "Regression that assumes a linear dependence between input and output.",
    "example": "wgt = 80 + 2·(hgt) — body weight in pounds from height in inches.",
    "source": "Intro"
  },
  {
    "term": "Nonlinear regression",
    "definition": "Regression without the linear-dependence assumption, used when relationships are more complex.",
    "example": "Time series forecasting, such as the Microsoft stock time series forecast on the slide.",
    "source": "Intro"
  },
  {
    "term": "Dataset notation D",
    "definition": "A dataset is expressed as D = {(xᵢ, yᵢ)}ᵢ₌₁ⁿ = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}, where x stands for input and y stands for output.",
    "source": "Intro"
  },
  {
    "term": "Clustering",
    "definition": "Unsupervised task of finding a set of prototypes representing the data.",
    "example": "Applications: marketing segmentation, group of insurance interests, web news, pictures, city-planning.",
    "source": "Intro"
  },
  {
    "term": "Dimension reduction / principal components",
    "definition": "Unsupervised task of finding a subspace representing the data; Principal Component Analysis (PCA) maps the original data space into a component space (PC 1, PC 2).",
    "example": "Gene expression data on axes Gene 1/2/3 projected by PCA onto PC 1 and PC 2; nonlinear embedding recovers a manifold from the swiss-roll data.",
    "source": "Intro"
  },
  {
    "term": "Independent components / dictionary learning",
    "definition": "Unsupervised task of finding a (small) set of factors for observation.",
    "source": "Intro"
  },
  {
    "term": "Novelty / anomaly detection",
    "definition": "Identification of new or unknown patterns — finding the odd one out; can use a parametric or a non-parametric approach.",
    "example": "Bodesheim (2012) figure: a model trained on bear images is asked of a test sample x*, 'Is this an example of a novel category?'",
    "source": "Intro"
  },
  {
    "term": "Batch learning",
    "definition": "Observe the full training data (x₁, y₁) ... (xₙ, yₙ), then deploy the model.",
    "source": "Intro"
  },
  {
    "term": "Online learning",
    "definition": "Sequential learning: observe x₁, predict f(x₁), observe x₂, and so on.",
    "example": "Stock market forecasting.",
    "source": "Intro"
  },
  {
    "term": "Active learning",
    "definition": "The learner queries y for a chosen x, improves the model, then picks a new x to query.",
    "example": "Asking questions in class.",
    "source": "Intro"
  },
  {
    "term": "Discriminative model",
    "definition": "A supervised model that estimates y|x directly, caring only about the conditional probabilities; often better convergence and simpler solutions, and very good when the underlying data distribution is really complicated (e.g., texts, images, movies).",
    "example": "Illustrated by a decision boundary separating classes, classifying a point by which side (distance) it falls on.",
    "source": "Intro"
  },
  {
    "term": "Generative model",
    "definition": "A supervised model that estimates the joint distribution over (x, y) first, then uses conditional probability to infer y|x, i.e., infer p(y|x); often more intuitive, easier to add prior knowledge, and good for missing variables and better diagnostics.",
    "source": "Intro"
  },
  {
    "term": "Three components of every ML algorithm",
    "definition": "Representation (e.g., decision trees, rules/logic programs, instances, graphical models, neural networks, SVMs, ensembles), Evaluation (e.g., accuracy, precision and recall, squared error, likelihood, posterior probability, cost/utility, margin, entropy, K-L divergence), and Optimization (combinatorial, convex, constrained).",
    "source": "Intro"
  },
  {
    "term": "Optimization families",
    "definition": "The three optimization types listed for ML: combinatorial optimization (e.g., greedy search), convex optimization (e.g., gradient descent), and constrained optimization (e.g., linear programming).",
    "source": "Intro"
  },
  {
    "term": "Shallow vs deep learning",
    "definition": "Shallow architectures are (a) linear models or (b) non-linear models with one layer of kernel units K(xᵢ, x) feeding a sum; deep learning is (c) a non-linear model with a deep architecture of many stacked layers producing f(x).",
    "source": "Intro"
  },
  {
    "term": "Prior probability P(h)",
    "definition": "The prior probability of hypothesis h — what we believe about h before seeing the data. In the slides' words, choosing p(h) reflects our prior knowledge about the learning task; the prior 'encodes the knowledge/preference'.",
    "example": "Prior probability of any patient having meningitis is 1/50,000.",
    "source": "Bayesian"
  },
  {
    "term": "Posterior probability P(h|D)",
    "definition": "The conditional probability of hypothesis h given training data D. Bayes theorem gives Posterior ∝ Likelihood × Prior: p(h|D) = p(D|h)·p(h) / p(D).",
    "example": "P(M|S) = 0.0002: the probability a patient has meningitis given the stiff-neck symptom.",
    "source": "Bayesian"
  },
  {
    "term": "Likelihood P(D|h)",
    "definition": "The conditional probability of the data D given hypothesis h — how probable the observations are if h were true.",
    "example": "The likelihood of {3.0, 4.0, 5.0, 12.0} under N(μ=6.0, σ²=12.5) is ≈ 2.194e-05.",
    "source": "Bayesian"
  },
  {
    "term": "Evidence P(D)",
    "definition": "The prior probability of the training data D. It appears in the denominator of Bayes theorem and is the same for every hypothesis, so it can be dropped when comparing hypotheses (giving the '∝' form).",
    "example": "Prior probability of any patient having stiff neck is 1/20 — the evidence in the meningitis example.",
    "source": "Bayesian"
  },
  {
    "term": "Bayes Theorem",
    "definition": "p(h|D) = p(D|h)·p(h) / p(D), i.e. Posterior ∝ Likelihood × Prior. Named after Thomas Bayes (1702–1761).",
    "example": "P(M|S) = P(S|M)·P(M) / P(S) = (0.5 × 1/50,000) / (1/20) = 0.0002.",
    "source": "Bayesian"
  },
  {
    "term": "Maximum A Posterior (MAP)",
    "definition": "Find the most probable hypothesis given the training data by maximizing the posterior probability: h_MAP = argmax over h∈H of p(h|D) = argmax p(D|h)·p(h).",
    "example": "Classification by MAP: k* = argmax over 1≤k≤K of p(xᵢ|C_k)·p(C_k).",
    "source": "Bayesian"
  },
  {
    "term": "Maximum Likelihood Estimation (MLE)",
    "definition": "Find a hypothesis h that maximizes the likelihood of the training data: h_MLE = argmax over h∈H of p(D|h).",
    "example": "Fitting N(μ=6.0, σ²=12.5) to {3.0, 4.0, 5.0, 12.0} because p(D|N_opt) ≥ p(D|N) for all normal distributions N.",
    "source": "Bayesian"
  },
  {
    "term": "Uniform prior",
    "definition": "A prior with p(h) = p(h′) for all h, h′ ∈ H. For a uniform prior, MLE coincides with MAP, since p(h|D) ∝ p(D|h)·p(h).",
    "source": "Bayesian"
  },
  {
    "term": "Class prior p(C_k)",
    "definition": "The prior probability of class C_k in a probabilistic classifier. Estimated in closed form as p(C_k) = (1/n)·Σᵢ δ(yᵢ, k), i.e. the fraction of training samples in class k.",
    "example": "In the slide-18 table with 10 samples: 2 samples have Y=0, so p(C₀) = 0.2.",
    "source": "Bayesian"
  },
  {
    "term": "Class-conditional density p(xᵢ|C_k)",
    "definition": "The likelihood of observing xᵢ generated from the distribution describing class C_k; it is the probability density function of class C_k.",
    "example": "In a Gaussian generative model, p(xᵢ|C_k) = N(xᵢ|μ_k, Σ_k).",
    "source": "Bayesian"
  },
  {
    "term": "Probabilistic generative model",
    "definition": "A classifier that models how the data of each class is generated: given training data D = {(xᵢ, yᵢ)} sampled from K classes, it classifies xᵢ via p(C_k|xᵢ) ∝ p(xᵢ|C_k)·p(C_k), using a per-class density and a class prior.",
    "example": "The two-class and three-class Gaussian generative models shown with class-conditional densities p(x|C_k) and posterior probabilities p(C_k|x).",
    "source": "Bayesian"
  },
  {
    "term": "Multivariate Gaussian distribution",
    "definition": "The most commonly used distribution for describing continuous data: p(xᵢ|C_k) = 1/((2π)^(d/2)·|Σ_k|^(1/2)) · exp(−½·(xᵢ−μ_k)ᵀ·Σ_k⁻¹·(xᵢ−μ_k)), with xᵢ, μ_k ∈ ℝᵈ and Σ_k in the set of positive semi-definite d×d matrices.",
    "example": "68% of data fall within 1 standard deviation of the mean, 95% within 2, 99.7% within 3.",
    "source": "Bayesian"
  },
  {
    "term": "Indicator function δ(yᵢ, k)",
    "definition": "δ(yᵢ, k) = 1 if yᵢ = k and 0 otherwise. Used in the closed-form estimates of μ_k, Σ_k, p(C_k), and (as δ(x_{i,j}, v)) in the discrete parameter estimate.",
    "source": "Bayesian"
  },
  {
    "term": "Curse of dimensionality",
    "definition": "One challenge of learning with high-dimensional data is insufficient data samples: the number of points needed grows exponentially with dimension.",
    "example": "If 5 samples are enough in 1-D, then 2D needs 25, 3D needs 125, and 10D needs 9,765,625 points.",
    "source": "Bayesian"
  },
  {
    "term": "Singularity of the covariance matrix",
    "definition": "When the data size is too small for high-dimensional data, the estimated covariance matrix Σ_k becomes singular (non-invertible), breaking the Gaussian density which needs Σ_k⁻¹. Solution on the slide: diagonalize the covariance matrix.",
    "source": "Bayesian"
  },
  {
    "term": "Conditional independence assumption",
    "definition": "The naive Bayes assumption that all attributes are conditionally independent given the class, so p(xᵢ|C_k) ≈ Π over j=1..d of p(x_{i,j}|C_k). It makes computation possible, yields optimal classifiers when satisfied, and gives fairly good empirical results, but is seldom satisfied in practice as attributes are often correlated.",
    "source": "Bayesian"
  },
  {
    "term": "Naive Bayes (NB) classifier",
    "definition": "The MAP classifier under the conditional independence assumption: C_NB = argmax over C_k of p(C_k)·Π over j=1..d of p(x_{i,j}|C_k).",
    "example": "Play Tennis: h_NB = argmax over h∈[yes,no] of P(h)·P(Outlook=sunny|h)·P(Temp=cool|h)·P(Humidity=high|h)·P(Wind=strong|h).",
    "source": "Bayesian"
  },
  {
    "term": "Gaussian Naive Bayes",
    "definition": "Naive Bayes with each factor a 1D Gaussian: p(xᵢ|C_k) ≈ Π p(x_{i,j}|μ_{k,j}, σ_{k,j}); equivalent to diagonalizing the covariance matrix of the full Gaussian model.",
    "example": "sklearn: gnb = naive_bayes.GaussianNB(); gnb.fit(x_train, y_train); y_pred = gnb.predict(x_test); parameters in gnb.class_prior_, gnb.class_count_, gnb.theta_, gnb.var_.",
    "source": "Bayesian"
  },
  {
    "term": "Multinomial Naive Bayes",
    "definition": "Naive Bayes where p(xᵢ|C_k) follows a multinomial distribution instead of a Gaussian; used for word-count features. Since the multinomial coefficient is the same for all classes, p(C_k|xᵢ) ∝ p_{k,1}^{x_{i,1}}·...·p_{k,d}^{x_{i,d}}·p(C_k).",
    "example": "sklearn: mnb = naive_bayes.MultinomialNB(alpha=0.01), where alpha is the smoothing parameter.",
    "source": "Bayesian"
  },
  {
    "term": "Multinomial distribution",
    "definition": "A generalization of the binomial distribution to more than two outcomes; the probability of a bag of counts includes the multinomial coefficient (x₁+...+x_d)!/(x₁!·...·x_d!).",
    "example": "Dice with P(1)=0.5, P(2)=...=P(6)=0.1: P(6,1,1,2) = 0.0025 and P({1:2, 2:1, 6:1}) = 4!/(2!·1!·1!) × 0.5²×0.1×0.1 = 0.03.",
    "source": "Bayesian"
  },
  {
    "term": "Bag-of-words model",
    "definition": "A sentence is considered as a bag (multi-set) of words generated from a multinomial distribution, regardless of the order; sentence i is represented as xᵢ = (x_{i,1}, ..., x_{i,d}) where x_{i,j} counts occurrences of word w_j.",
    "example": "'To be, or not to be, that is the question.' → {be:2, is:1, not:1, or:1, question:1, that:1, the:1, to:2}.",
    "source": "Bayesian"
  },
  {
    "term": "Mega-document",
    "definition": "For multinomial NB parameter estimation, create a mega-document for each class k by concatenating all the docs in this class, then compute the frequency of each word w in it: p_{k,j} = count(w_j, C_k) / Σ_w count(w, C_k).",
    "source": "Bayesian"
  },
  {
    "term": "Laplace (add-one) smoothing",
    "definition": "Smoothing to avoid zero probabilities when a word never appears in a class's training data: p_{k,j} = (count(w_j, C_k) + 1) / (Σ over w∈V of count(w, C_k) + |V|), where V is the vocabulary (the set of all words).",
    "example": "A new word like 'chatGPT' that never appears in training data gets p('new_word'|C_k) = 1/|V| for all classes, instead of 0.",
    "source": "Bayesian"
  },
  {
    "term": "Stop words / document frequency filtering",
    "definition": "Common words removed before building word-count features. In the 20 Newsgroups example, CountVectorizer(min_df=0.01, max_df=0.5, stop_words='english') removes English stop words and filters words by minimum and maximum document frequency.",
    "source": "Bayesian"
  },
  {
    "term": "Bayesian networks",
    "definition": "An attempt to overcome the limitation of the naive Bayes independence assumption: they combine Bayesian reasoning with causal relationships between attributes.",
    "source": "Bayesian"
  }
]
