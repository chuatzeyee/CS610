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
  },
  {
    "term": "Sample space (S)",
    "definition": "The set of all possible outcomes (w) of an experiment or random trial.",
    "example": "Tossing two coins: S = {HH, HT, TH, TT}.",
    "source": "CondProb"
  },
  {
    "term": "Outcome (w)",
    "definition": "A single possible result of an experiment or random trial; the elements of the sample space.",
    "example": "HT (first coin head, second coin tail) is one outcome of tossing two coins.",
    "source": "CondProb"
  },
  {
    "term": "Event (E)",
    "definition": "A subset of the sample space — a collection of outcomes we care about.",
    "example": "{HH, HT, TH} is the event 'at least one coin is head'; {HT, TH} is the event 'exactly one coin is head'.",
    "source": "CondProb"
  },
  {
    "term": "Random variable",
    "definition": "A variable which takes a set of possible values, with each value mapping to an event in the sample space.",
    "example": "X = number of heads when tossing two coins; X=1 maps to the event {HT, TH}.",
    "source": "CondProb"
  },
  {
    "term": "Probability",
    "definition": "The likelihood of a random variable taking on one possible value or a set of possible values.",
    "example": "Pr(X=1) = 1/2 and Pr(X>=1) = 3/4 for two fair coin tosses.",
    "source": "CondProb"
  },
  {
    "term": "Probability axioms",
    "definition": "The basic rules every probability must obey: 0 <= P(E) <= 1 for any event, P(S) = 1, P(∅) = 0, and P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
    "source": "CondProb"
  },
  {
    "term": "Complement rule",
    "definition": "The probability that event A does not occur is one minus the probability it does: P(Ā) = 1 − P(A).",
    "source": "CondProb"
  },
  {
    "term": "Partition rule (splitting an event)",
    "definition": "Any event A can be split by another event B into two disjoint pieces: P(A) = P(A ∩ B) + P(A ∩ B̄).",
    "source": "CondProb"
  },
  {
    "term": "Conditional probability",
    "definition": "A measure of the probability of an event given that (by assumption, presumption, assertion or evidence) another event has occurred. Formally P(A|B) = P(A,B)/P(B), requiring P(B) > 0.",
    "example": "Knowing one of two tossed coins is head, the probability of having 2 heads is (1/4)/(3/4) = 1/3.",
    "source": "CondProb"
  },
  {
    "term": "Independence",
    "definition": "Two events are independent if knowing the outcome of one provides no useful information about the outcome of the other; formally P(A|B) = P(A).",
    "example": "Given the first coin is head, the probability the second is also head is still 1/2; given the first die is 5, the probability the second is larger than 3 is still 1/2.",
    "source": "CondProb"
  },
  {
    "term": "Marginal distribution",
    "definition": "The probability distribution of a subset of the collection of random variables — obtained by summing the joint distribution over the variables you drop.",
    "example": "In the slide's table, P(X=x1) = 4/32 + 2/32 + 2/32 + 8/32 = 16/32.",
    "source": "CondProb"
  },
  {
    "term": "Joint distribution",
    "definition": "The probability distribution of multiple random variables considered together, e.g., P(X,Y) giving a probability for every (x, y) pair.",
    "example": "The slide's 4x4 table of 32nds, e.g., P(X=x1, Y=y1) = 4/32.",
    "source": "CondProb"
  },
  {
    "term": "Product rule",
    "definition": "A joint probability factors into a conditional probability times a marginal: P(X,Y) = P(X|Y) P(Y).",
    "source": "CondProb"
  },
  {
    "term": "Sum rule (marginalisation)",
    "definition": "A marginal is obtained by summing the joint distribution over the other variable: P(X) = Σ_Y P(X,Y).",
    "example": "P(Y=y1) = 4/32 + 2/32 + 1/32 + 1/32 = 8/32.",
    "source": "CondProb"
  },
  {
    "term": "Law of total probability",
    "definition": "Combining the sum and product rules: P(X=x) = Σᵢ P(Y=yᵢ) P(X=x|Y=yᵢ) — a marginal is a weighted average of conditionals.",
    "source": "CondProb"
  },
  {
    "term": "Dot product (as projection)",
    "definition": "For vectors w and x, w·x is the sum of element-wise products; geometrically it tells you where x projects onto the direction of w (scaled by |w|).",
    "example": "With w = (2,1): w·x₁ = w·x₂ = w·x₃ = 3 for x₁ = (0,3), x₂ = (1,1), x₃ = (2,−1) — all three project to the same point on w.",
    "source": "LinAlg"
  },
  {
    "term": "Projection",
    "definition": "The point on a direction vector w where another vector x 'lands' when dropped perpendicularly onto the line through w; computed via the dot product.",
    "example": "w·x = 3 describes all vectors x that project onto w at the same point.",
    "source": "LinAlg"
  },
  {
    "term": "Hyperplane",
    "definition": "In a d-dimensional space, the set of all vectors with the same projection on a vector w — a (d−1)-dimensional subspace orthogonal to w. In 3D these are planes.",
    "example": "w·x = 0 and w·x = 1 are two parallel hyperplanes; their separation is 1/|w|, not necessarily 1.",
    "source": "LinAlg"
  },
  {
    "term": "Unit vector",
    "definition": "A vector with length 1 (|w| = 1). The projected value w·x represents an actual distance if and only if w is a unit vector.",
    "example": "w = (2,1) has |w| = √5, so it is not a unit vector; the projected value 3 is not a distance.",
    "source": "LinAlg"
  },
  {
    "term": "Normalization (of a vector)",
    "definition": "Dividing a vector by its own length to make it a unit vector: ŵ = w/|w|.",
    "example": "w = (2,1) normalizes to ŵ = (2√5/5, √5/5); then ŵ·x₁ = ŵ·x₂ = ŵ·x₃ = 3√5/5.",
    "source": "LinAlg"
  },
  {
    "term": "Orthonormal basis",
    "definition": "A set of unit vectors which are mutually orthogonal; projecting onto them gives new coordinates in a rotated frame.",
    "example": "In 2D: |e₁| = 1, |e₂| = 1 and e₁·e₂ = 0.",
    "source": "LinAlg"
  },
  {
    "term": "Orthogonal matrix Q",
    "definition": "A matrix whose columns form an orthonormal basis, satisfying Q⁻¹ = Qᵀ. Multiplying by Q (or Qᵀ) rotates points without stretching them.",
    "example": "Q = [e₁ e₂] = [[cos θ, −sin θ], [sin θ, cos θ]], where θ is the angle between e₁ and the horizontal axis.",
    "source": "LinAlg"
  },
  {
    "term": "Rotation (of data)",
    "definition": "A projection of data onto a new orthonormal basis: z = Qᵀx per point, or Z = XQ for a whole dataset. After rotation, the dimensions are independent.",
    "source": "LinAlg"
  },
  {
    "term": "Translation (of data)",
    "definition": "Shifting data so its mean is at the origin; multi-dimensional data are translated just like 1-D data, by subtracting the mean x̄ from every row of X to form Ẍ.",
    "source": "LinAlg"
  },
  {
    "term": "Scaling (of data)",
    "definition": "Dividing each rotated coordinate by its axis length λⱼ using a diagonal matrix: V = ZΛ⁻¹. After scaling, the probability contours are all round.",
    "source": "LinAlg"
  },
  {
    "term": "Normal (Gaussian) distribution",
    "definition": "The bell-shaped distribution with mean μ and variance σ²; 68% of data lie within 1σ of the mean, 95% within 2σ, 99.7% within 3σ.",
    "example": "The slide plots μ = 0 with σ² = 0.2, 1.0 and 5.0, and μ = −2 with σ² = 0.5.",
    "source": "LinAlg"
  },
  {
    "term": "Standard normal distribution",
    "definition": "The normal distribution with mean 0 and variance 1 (identity covariance in multiple dimensions). The fully transformed data V follows the standard normal distribution in 2D, so VᵀV = nI.",
    "source": "LinAlg"
  },
  {
    "term": "Probability contour",
    "definition": "A curve of constant probability density; for a 2D (bivariate) normal with correlation, contours are ellipses. Points on the same contour have the same density.",
    "example": "For a bivariate normal with rho = 0.5, points A and B have the same probability even though A seems much nearer to the center.",
    "source": "LinAlg"
  },
  {
    "term": "Variance-covariance matrix Σ",
    "definition": "The matrix of variances and covariances of the (centered) data, computed in this deck as Σ = (1/n) ẌᵀẌ. Its eigendecomposition reveals the ellipse's axes (eigenvectors) and squared axis lengths (eigenvalues).",
    "source": "LinAlg"
  },
  {
    "term": "Eigendecomposition",
    "definition": "Factoring a matrix into pairs of eigenvalues and eigenvectors; applied to Σ it gives (1/n)ẌᵀẌ = QΛ²Qᵀ, which identifies the orthonormal basis Q and scaling Λ.",
    "source": "LinAlg"
  },
  {
    "term": "Mahalanobis distance",
    "definition": "The distance from a point to the center of a multivariate normal distribution, measured after translation, rotation and scaling: √((xᵀ − x̄ᵀ) Σ⁻¹ (x − x̄)). It equals plain Euclidean distance √(vᵀv) in the fully transformed space.",
    "source": "LinAlg"
  },
  {
    "term": "Multivariate normal density",
    "definition": "The d-dimensional generalization of the Gaussian: p(x|μ, Σ) = 1/√((2π)^d |Σ|) · exp(−½ (xᵀ−μᵀ) Σ⁻¹ (x−μ)); the exponent contains the squared Mahalanobis distance.",
    "source": "LinAlg"
  },
  {
    "term": "Principal Component Analysis (PCA)",
    "definition": "An algorithm that finds the top-k directions of greatest variance: center the data, compute Σ = (1/n)ẌᵀẌ, eigendecompose it, sort eigenvalues λ₁ ≥ λ₂ ≥ …, and keep the top-k eigenvectors as principal components (k << d).",
    "source": "LinAlg"
  },
  {
    "term": "Principal components",
    "definition": "The top-k eigenvectors {e₁, …, e_k} of the variance-covariance matrix, ordered by decreasing eigenvalue; they form the orthonormal basis PCA projects onto.",
    "source": "LinAlg"
  },
  {
    "term": "Truncated SVD",
    "definition": "A dimensionality-reduction method the deck lists as similar to PCA; it factorizes the data matrix directly and keeps the top components.",
    "source": "LinAlg"
  },
  {
    "term": "Logarithm (log₂) as description length",
    "definition": "The number of binary gestures/signals needed to identify one of k equally likely outcomes is log₂ k; equivalently, an outcome with probability p needs −log₂ p gestures.",
    "example": "4 equally likely colors need log₂ 4 = 2 gestures; 4096 colors need log₂ 4096 = 12 fingers.",
    "source": "InfoTheory"
  },
  {
    "term": "Uncertainty (of one outcome)",
    "definition": "The number of gestures needed to describe an outcome, quantified as −log₂(probability); rarer outcomes carry more uncertainty and need longer descriptions.",
    "example": "Pr(Blue Ball) = 1/4 gives uncertainty −log₂(1/4) = 2 gestures ('blink right eye then left').",
    "source": "InfoTheory"
  },
  {
    "term": "Expected uncertainty",
    "definition": "The probability-weighted average of per-outcome uncertainties: −p₁ log p₁ − ... − pₙ log pₙ = −Σᵢ pᵢ log pᵢ. This is what gets named entropy.",
    "example": "For probabilities (1/2, 1/4, 1/4): (1/2)×1 + (1/4)×2 + (1/4)×2 = 1.5 expected gestures.",
    "source": "InfoTheory"
  },
  {
    "term": "Entropy H(X)",
    "definition": "The expected uncertainty of a random variable X: H(X) = −Σᵢ₌₁ⁿ pᵢ log pᵢ, where pᵢ = Pr(X = xᵢ). Measured in bits when log is base 2 (the deck's default).",
    "example": "A fair coin has H = 1 bit; a fair die has H = log₂ 6 ≈ 2.585 bits.",
    "source": "InfoTheory"
  },
  {
    "term": "Random variable X",
    "definition": "A variable with a set of possible outcomes {x₁, x₂, ..., xₙ}, each occurring with probability pᵢ = Pr(X = xᵢ).",
    "source": "InfoTheory"
  },
  {
    "term": "Binary entropy",
    "definition": "Entropy for a two-outcome variable: H(X) = −p₀ log p₀ − p₁ log p₁ with p₀ + p₁ = 1. It is 0 when either probability is 1 (total certainty) and maximal at 1 bit when p₀ = p₁ = 0.5.",
    "example": "The binary entropy curve is an inverted-U peaking at H(X) = 1 when Pr(X=1) = 0.5.",
    "source": "InfoTheory"
  },
  {
    "term": "Maximum entropy",
    "definition": "The largest possible entropy for a variable with n outcomes is log n, achieved when all outcomes are equally likely (uniform distribution).",
    "example": "H(die) = 6 × (−(1/6) log (1/6)) = log 6 > log 2 = H(coin).",
    "source": "InfoTheory"
  },
  {
    "term": "Conditional entropy H(X|Y)",
    "definition": "The amount of uncertainty of variable X that remains once variable Y is known: H(X|Y) = Σⱼ p(Y=yⱼ) H(X|Y=yⱼ), a weighted average of within-group entropies.",
    "example": "Red bag has {light-red, dark-red}, blue bag has {light-blue, dark-blue}: knowing the bag, either bag gives entropy 1, so H(color|bag) = 1.",
    "source": "InfoTheory"
  },
  {
    "term": "Information",
    "definition": "The 'potential' to resolve uncertainty — knowing one variable can reduce the uncertainty about another.",
    "source": "InfoTheory"
  },
  {
    "term": "Mutual information I(X;Y)",
    "definition": "How much uncertainty about one variable can be resolved by knowing the other variable — the overlap of H(X) and H(Y) in the Venn diagram. If Y determines X, I(X;Y) = H(X); if X and Y are independent, I(X;Y) = 0.",
    "example": "If Y determines X then H(X|Y) = 0 and all of H(X) is mutual information.",
    "source": "InfoTheory"
  },
  {
    "term": "Cross entropy H(p, q)",
    "definition": "The uncertainty (expected code length) of true distribution p when using a coding scheme optimized for estimated distribution q: H(p, q) = −𝔼ₚ log q = −Σᵢ pᵢ log qᵢ. Equals H(p) when p = q, and otherwise H(p, q) > H(p).",
    "example": "With q = (0.5, 0.125, 0.125, 0.125, 0.125) and actual p = (0.25, 0.25, 0.25, 0.125, 0.125): H(p,q) = 2.5 bits > H(p) = 2.25 bits.",
    "source": "InfoTheory"
  },
  {
    "term": "Optimal coding scheme",
    "definition": "A code assigning shorter bit-strings to more probable outcomes so that the expected number of bits equals the entropy of the distribution it is optimized for.",
    "example": "For q = (0.5, 0.125, 0.125, 0.125, 0.125): codes 0, 100, 101, 110, 111 give expected bits 0.5×1 + 4×(0.125×3) = 2 = H(q).",
    "source": "InfoTheory"
  },
  {
    "term": "KL divergence / relative entropy D_KL(p‖q)",
    "definition": "The gap between cross entropy and true entropy: D_KL(p‖q) = H(p, q) − H(p). It measures how badly q approximates p; the better q approximates p, the smaller the gap.",
    "example": "In the deck's example D_KL(p‖q) = 2.5 − 2.25 = 0.25 bits.",
    "source": "InfoTheory"
  },
  {
    "term": "Cross-entropy loss (classification)",
    "definition": "A common loss function for multi-class classification: with one-hot true label p and predicted probabilities q, H(p, q) = −log q(true class). Lower predicted probability on the true label gives a higher penalty; aggregating over all predictions measures the whole model.",
    "example": "q = (0.125, 0.5, 0.25, 0.125): true label 1 → loss 3; label 2 → loss 1; label 3 → loss 2.",
    "source": "InfoTheory"
  },
  {
    "term": "Log base convention",
    "definition": "On this deck (and course), if the base is not specified, log means log₂, so all entropies are in bits (gestures).",
    "source": "InfoTheory"
  },
  {
    "term": "Hypothesis",
    "definition": "The candidate function h(x) the learner uses to approximate the unknown true function f(x); for simple linear regression, h(x) = w₁x + w₀.",
    "source": "Regression"
  },
  {
    "term": "Explanatory variable",
    "definition": "The input variable x (also called input variable); the attribute used to make the prediction.",
    "example": "Size in feet² in the house-price data.",
    "source": "Regression"
  },
  {
    "term": "Target variable",
    "definition": "The output variable y that the model predicts.",
    "example": "Price ($) in 1000's in the house-price data.",
    "source": "Regression"
  },
  {
    "term": "Residual",
    "definition": "The difference between the prediction and the actual value for one training point: h(xᵢ) − yᵢ = ŷᵢ − yᵢ, drawn as the vertical distance between the point and the fitted line.",
    "source": "Regression"
  },
  {
    "term": "Mean Squared Error (MSE)",
    "definition": "The cost function for linear regression: the average of squared residuals, J(w₀, w₁) = (1/n) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]². The deck divides by n.",
    "source": "Regression"
  },
  {
    "term": "Model parameters",
    "definition": "The values learned by fitting: the coefficients (weights on features) and the intercept. In sklearn they are regr.coef_ and regr.intercept_, learned via model.fit(x, y).",
    "source": "Regression"
  },
  {
    "term": "Multivariable linear regression",
    "definition": "Linear regression with m features: h(x) = w₀ + w₁x₁ + ... + wₘxₘ; with the convention x₀ = 1 this is h(x) = Σⱼ₌₀ᵐ wⱼxⱼ = wᵀx with x, w ∈ ℝᵐ⁺¹.",
    "example": "Predicting price from size, number of bedrooms, number of floors, and age of home.",
    "source": "Regression"
  },
  {
    "term": "Notation m, xᵢ, xᵢⱼ",
    "definition": "m = number of features (variables); xᵢ = input (features) of the iᵗʰ training example; xᵢⱼ = value of feature j in the iᵗʰ training example.",
    "source": "Regression"
  },
  {
    "term": "Normal equation",
    "definition": "The condition ∇J(w) = XᵀXw − Xᵀy = 0, i.e. XᵀXw = Xᵀy, whose solution is the analytical least-squares fit.",
    "source": "Regression"
  },
  {
    "term": "Analytical solution (pseudo-inverse)",
    "definition": "Closed-form least-squares weights w = ((XᵀX)⁻¹Xᵀ)y = X†y where X† = (XᵀX)⁻¹Xᵀ. The deck stresses these formulae are shown only so you understand the complexity of analytical solutions.",
    "source": "Regression"
  },
  {
    "term": "Hypothesis space",
    "definition": "The set of all candidate functions the learner can choose from; for linear models any choice of coefficient vector w is a possible hypothesis, so there are infinite possible hypotheses.",
    "source": "Regression"
  },
  {
    "term": "Polynomial regression",
    "definition": "Map each explanatory variable to a higher order space (e.g. x → (x², x)) and fit a LINEAR model in the higher order space; the model is nonlinear in x but linear in the parameters.",
    "example": "h(x) = ax₁² + bx₁x₂ + cx₂² + dx₁ + ex₂ + f built with sklearn PolynomialFeatures(2).",
    "source": "Regression"
  },
  {
    "term": "Regression without intercept",
    "definition": "A model with no separately-fitted intercept (fit_intercept=False in sklearn); if the feature expansion contains a constant term, that constant term's coefficient acts as the intercept.",
    "source": "Regression"
  },
  {
    "term": "Gradient descent",
    "definition": "Iterative optimization: start with some parameters, repeatedly update wⱼ ← wⱼ − α·∂J(w)/∂wⱼ (all j updated simultaneously) to reduce J until we hopefully end up at a minimum.",
    "source": "Regression"
  },
  {
    "term": "Learning rate (α)",
    "definition": "The step-size multiplier in the gradient descent update. Too small → slow convergence; too large → J(w) may not decrease every iteration and may diverge; 'just nice' converges efficiently.",
    "source": "Regression"
  },
  {
    "term": "Convex function",
    "definition": "f is convex if f(tx₁ + (1−t)x₂) ≤ t·f(x₁) + (1−t)·f(x₂) for all x₁, x₂ and t ∈ [0,1] — the function lies below the linear interpolation between any two points. Convexity implies all local minima are global minima.",
    "source": "Regression"
  },
  {
    "term": "Non-convex function",
    "definition": "A function with multiple valleys; gradient descent may stop at a local minimum rather than the global minimum, so the final solution is sensitive to initialization.",
    "source": "Regression"
  },
  {
    "term": "Mini-batch gradient descent",
    "definition": "Because evaluating the full gradient sum over n examples is expensive, sample a subset of k of the summand gradients at each iteration: w = w − α∇w Σᵢ₌₁ᵏ j(w; xᵢ, yᵢ).",
    "source": "Regression"
  },
  {
    "term": "Convergence criterion",
    "definition": "The deck's rule of thumb: declare convergence if J(w) decreases by less than 10⁻³ in one iteration.",
    "source": "Regression"
  },
  {
    "term": "Overfitting",
    "definition": "With too many features (complicated predictor), the learned hypothesis fits the training set very well but fails to generalize to new examples.",
    "example": "Degree-4 polynomial w₀ + w₁x + w₂x² + w₃x³ + w₄x⁴ wiggling through every house-price point.",
    "source": "Regression"
  },
  {
    "term": "Underfitting",
    "definition": "The model is too simple to capture the data pattern; both training and true error are high (left side of the model-complexity curve).",
    "example": "Fitting the straight line w₀ + w₁x to clearly curved house-price data.",
    "source": "Regression"
  },
  {
    "term": "Empirical error vs true error",
    "definition": "Empirical (training) error keeps decreasing with model complexity, while true error is U-shaped; past the best model, empirical error is no longer a good indicator of true error.",
    "source": "Regression"
  },
  {
    "term": "Occam's Razor",
    "definition": "William of Ockham's (1285–1347) Principle of Parsimony: 'One should not increase, beyond what is necessary, the number of entities required to explain anything' — seek the simplest explanation.",
    "source": "Regression"
  },
  {
    "term": "Regularization",
    "definition": "Address overfitting by incorporating model complexity into the optimization: h* = arg min{J(h) + C(h)}. Keep all the features but reduce the magnitude of parameters; works well with many features that each contribute a bit.",
    "source": "Regression"
  },
  {
    "term": "Ridge regression",
    "definition": "Regularized linear regression with L2 penalty: min{J(w) + α‖w‖₂²} where ‖w‖₂ = √(Σⱼ₌₁ᵈ wⱼ²). (The slide calls it 'rigid regression'.)",
    "source": "Regression"
  },
  {
    "term": "Lasso",
    "definition": "Regularized linear regression with L1 penalty: min{J(w) + α‖w‖₁} where ‖w‖₁ = Σⱼ₌₁ᵈ |wⱼ|; the diamond-shaped L1 constraint tends to put the optimum on an axis (sparse weights).",
    "source": "Regression"
  },
  {
    "term": "Elastic Net",
    "definition": "Regularized linear regression combining both penalties: min{J(w) + λ₁‖w‖₁ + λ₂‖w‖₂}.",
    "source": "Regression"
  },
  {
    "term": "Coefficient (regr.coef_)",
    "definition": "The learned weight on each feature; how much the prediction changes per unit change of that feature, holding others fixed.",
    "example": "For size alone: coef_ = [77.00769255]; with size and Taxes: coef_ = [34.069, 32.121] — the size weight changes when Taxes is added.",
    "source": "Regression"
  },
  {
    "term": "Intercept (regr.intercept_)",
    "definition": "The constant w₀ in the linear model; the predicted value when all features are zero.",
    "example": "9161.1588643422 for the single-feature house model.",
    "source": "Regression"
  },
  {
    "term": "Total sum of squares (SST)",
    "definition": "The total variation of the target around its mean: Σ(yᵢ − ȳ)². It is the denominator of R² and does not depend on the model.",
    "example": "SST = 314,432,519,600 for the 100 house prices.",
    "source": "Regression"
  },
  {
    "term": "Explained sum of squares (SSR)",
    "definition": "The variation of the model's predictions around the target mean: Σ(ŷᵢ − ȳ)². The part of SST the model accounts for.",
    "example": "SSR = 229,612,632,470.76 for the size+Taxes model.",
    "source": "Regression"
  },
  {
    "term": "Residual sum of squares (SSE)",
    "definition": "The squared prediction errors: Σ(ŷᵢ − yᵢ)². The part of the variation the model fails to explain.",
    "example": "SSE = 84,819,887,129.24; note SSR + SSE = SST.",
    "source": "Regression"
  },
  {
    "term": "R² score (coefficient of determination)",
    "definition": "The fraction of target variance explained by the model: R² = SSR/SST = 1 − SSE/SST. In sklearn it is returned by model.score(x, y).",
    "example": "regr.score(x, y) = 0.7302 equals ssr/sst = 0.7302 on the house data.",
    "source": "Regression"
  },
  {
    "term": "Train/test split",
    "definition": "Partitioning the data into a training portion used to fit the model and a held-out test portion used to estimate performance on unseen data.",
    "example": "train_test_split(x, y, test_size=0.2, random_state=2022) drops the honest R² from 0.73 (in-sample) to 0.42 (test).",
    "source": "Regression"
  },
  {
    "term": "random_state",
    "definition": "A fixed seed for the random number generator so that random operations (like splits) are reproducible; the notebook notes this is done so bugs can be reproduced.",
    "example": "random_state=2022 in train_test_split.",
    "source": "Regression"
  },
  {
    "term": "Explained variance score",
    "definition": "A metric like R² but computed on the variance of the errors: it ignores any constant (mean) bias in the predictions, so it can exceed R² when predictions are systematically shifted.",
    "example": "0.4723 on the house test set, versus R² = 0.42.",
    "source": "Regression"
  },
  {
    "term": "Mean absolute error (MAE)",
    "definition": "The average absolute difference between predictions and true values: (1/n)Σ|yᵢ − ŷᵢ|. Same units as the target and robust to large outliers.",
    "example": "25,920.69 on the house test set.",
    "source": "Regression"
  },
  {
    "term": "PolynomialFeatures",
    "definition": "An sklearn preprocessing transformer that expands raw features into all polynomial terms up to a given degree (including a bias column of ones and interaction terms), letting a linear model fit curved surfaces.",
    "example": "PolynomialFeatures(2) maps (x₀, x₁) to [1, x₀, x₁, x₀², x₀x₁, x₁²] — 6 columns.",
    "source": "Regression"
  },
  {
    "term": "powers_ attribute",
    "definition": "A matrix recording the exponent of each raw feature in each generated polynomial column, telling you which coefficient belongs to which term.",
    "example": "poly2.powers_ = [[0 0],[1 0],[0 1],[2 0],[1 1],[0 2]], so the 5th coefficient (-15.11) belongs to the x₀x₁ interaction.",
    "source": "Regression"
  },
  {
    "term": "fit_intercept",
    "definition": "A LinearRegression option controlling whether the model fits its own constant term. With polynomial features (which include a bias column of ones), setting fit_intercept=False makes the bias column's coefficient play the intercept's role.",
    "example": "With intercept: first coef 0, intercept 97.936. Without: first coef 97.936, intercept 0.0 — equivalent models.",
    "source": "Regression"
  },
  {
    "term": "Bias-variance tradeoff",
    "definition": "Increasing model complexity reduces bias but increases variance; the best generalization comes from balancing the two.",
    "example": "In the lab's 4-panel experiment, the degree-2 model (matching the true quadratic) gives the best cloud: near the origin and not too scattered.",
    "source": "Regression"
  },
  {
    "term": "Alpha (regularization strength)",
    "definition": "The hyperparameter multiplying the penalty term. Larger alpha means more shrinkage (simpler model, more bias); as alpha → 0 both Lasso and Ridge approach ordinary least squares.",
    "example": "The alpha sweep [1, 0.1, 0.01, 0.001] found alpha=0.1 best for both Lasso (0.4702) and Ridge (0.4649).",
    "source": "Regression"
  },
  {
    "term": "Stochastic gradient descent (SGD)",
    "definition": "An iterative optimizer that updates weights using the gradient computed on one (or a few) samples at a time; approximate but scalable to very large datasets. SGDRegressor supports penalty='l1' (Lasso objective) or 'l2' (Ridge objective).",
    "example": "sgd_l1 scored 0.0818 vs Lasso's 0.3344 on the same data because it did not converge in 200 iterations.",
    "source": "Regression"
  },
  {
    "term": "ConvergenceWarning",
    "definition": "sklearn's warning that an iterative solver hit max_iter before meeting the tolerance — the fitted weights are not yet optimal and max_iter should be increased.",
    "example": "Both SGD models in the lab raised: 'Maximum number of iteration reached before convergence. Consider increasing max_iter to improve the fit.'",
    "source": "Regression"
  },
  {
    "term": "Bias (of a model)",
    "definition": "An error from erroneous assumptions in the learning algorithm; formally Bias(h(x)) = 𝔼[h(x)] − f(x). High bias corresponds to underfitting.",
    "source": "Logistic"
  },
  {
    "term": "Variance (of a model)",
    "definition": "An error from the small fluctuation of datasets; formally Var(h(x)) = 𝔼[(h(x))²] − (𝔼[h(x)])². High variance corresponds to overfitting.",
    "source": "Logistic"
  },
  {
    "term": "Binary classification",
    "definition": "Learning h : X → Y where y takes one of two values; in this deck y = 1 is the positive class (e.g. spam, fraud) and y = −1 is the negative class.",
    "example": "Email: spam or not spam; online transaction: fraud or not fraud.",
    "source": "Logistic"
  },
  {
    "term": "Odds",
    "definition": "The ratio of wins to losses; in binary classification, Odds = p(1|xᵢ)/p(−1|xᵢ).",
    "example": "Odds 3:1 means 75% probability of success and 25% probability of failure.",
    "source": "Logistic"
  },
  {
    "term": "Log-odds (logit)",
    "definition": "The natural log of the odds; logistic regression models it as linear in the features: ln[p(1|xᵢ)/p(−1|xᵢ)] = wᵀxᵢ.",
    "source": "Logistic"
  },
  {
    "term": "Logistic/sigmoid function",
    "definition": "σ(x) = 1/(1 + e^(−x)); values range from 0 to 1, slope is steepest around 0 and saturated at both ends, with σ(−x) = 1 − σ(x) and dσ/dx = σ(x)[1 − σ(x)].",
    "example": "σ(0) = 0.5.",
    "source": "Logistic"
  },
  {
    "term": "Logistic regression",
    "definition": "A classification model that passes a linear regression score wᵀxᵢ through the logistic function to model the probability of success: p(1|xᵢ) = σ(wᵀxᵢ) = 1/(1 + e^(−wᵀxᵢ)).",
    "source": "Logistic"
  },
  {
    "term": "Decision boundary",
    "definition": "The set of points where the two class probabilities are equal, p(1|x)/p(−1|x) = 1, which is exactly wᵀx = 0; for logistic regression this boundary is linear, and the threshold 0 is tunable.",
    "example": "Heart disease example: 0.58x − 3.34 = 0 gives x* = 5.78, around 51 years old.",
    "source": "Logistic"
  },
  {
    "term": "Likelihood",
    "definition": "The probability of the training data under the model: p(D|w) = Πᵢ₌₁ⁿ p(yᵢ|xᵢ; w).",
    "source": "Logistic"
  },
  {
    "term": "Log likelihood",
    "definition": "ln p(D|w) = Σᵢ₌₁ⁿ ln p(yᵢ|xᵢ; w); maximized in practice instead of the raw likelihood because the sum is easier to work with than the product.",
    "source": "Logistic"
  },
  {
    "term": "Logistic loss (per-sample)",
    "definition": "ln(1 + e^(−yᵢwᵀxᵢ)); small when yᵢwᵀxᵢ is large and positive (confident correct prediction), large when it is negative.",
    "source": "Logistic"
  },
  {
    "term": "Convex objective",
    "definition": "An objective where any local optimum is the global optimum; the logistic regression MLE objective is convex, but has no closed-form solution, so gradient descent is required.",
    "source": "Logistic"
  },
  {
    "term": "Positive/negative class",
    "definition": "The deck's label convention: y = 1 is the positive class (the event of interest, e.g. spam, fraud, heart disease) and y = −1 is the negative class.",
    "source": "Logistic"
  },
  {
    "term": "One-vs-All (One-vs-Rest)",
    "definition": "Multiclass strategy that trains one logistic regression classifier w_k per class k to estimate p(y=1|x; w_k) treating class k as positive and all others as negative, then predicts k* = arg max_k p(y=1|x; w_k).",
    "example": "For 3 classes (circles, triangles, squares), train 3 binary boundaries: each class vs the rest.",
    "source": "Logistic"
  },
  {
    "term": "SoftMax function",
    "definition": "Extension of the logistic function to K classes: p(y=k|x) = e^(w_k^T x) / Σⱼ e^(w_j^T x). Derived by setting class probability ratios proportional to e^(w_k^T x) and enforcing that probabilities sum to 1. It sharpens raw scores into a distribution dominated by the largest score.",
    "example": "With 4 classes, p(1|x) = e^(w₁ᵀx) / (e^(w₁ᵀx)+e^(w₂ᵀx)+e^(w₃ᵀx)+e^(w₄ᵀx)).",
    "source": "Logistic"
  },
  {
    "term": "Cross entropy loss (multiclass)",
    "definition": "The multiclass training objective: L(W) = -Σᵢ Σₖ δ(yᵢ,k) ln p(y=k|xᵢ; W), where δ(yᵢ,k)=1 if yᵢ=k else 0. Only the predicted probability of the true class contributes to each sample's loss.",
    "example": "True label 6 one-hot [0,...,1,...,0] vs computed [.02,.01,.01,.02,.01,.02,.77,.01,.09,.04] contributes -ln 0.77 ≈ 0.261.",
    "source": "Logistic"
  },
  {
    "term": "One-hot encoding",
    "definition": "Representation of the actual label as a vector of 0s with a single 1 at the true class position; it plays the role of the indicator δ(yᵢ,k) in the cross-entropy formula.",
    "source": "Logistic"
  },
  {
    "term": "Confusion matrix",
    "definition": "2x2 table of actual vs predicted labels: TP (positive predicted positive), FN (positive predicted negative), FP (negative predicted positive), TN (negative predicted negative).",
    "source": "Logistic"
  },
  {
    "term": "Accuracy",
    "definition": "Fraction of correct predictions: (TP+TN)/(TP+FP+TN+FN). Does not perform well for imbalanced data sets — high accuracy can be achieved by classifying every transaction as non-fraud.",
    "example": "Admission example: (27+18)/50 = 0.9.",
    "source": "Logistic"
  },
  {
    "term": "Precision",
    "definition": "TP/(TP+FP) — how precise is the positive prediction; of all predicted positives, the fraction that are truly positive.",
    "example": "Admission example: 27/(27+1) = 0.964.",
    "source": "Logistic"
  },
  {
    "term": "Recall",
    "definition": "TP/(TP+FN) — how many positive cases are detected; of all actual positives, the fraction predicted positive.",
    "example": "Admission example: 27/(27+4) = 0.871.",
    "source": "Logistic"
  },
  {
    "term": "F1 score",
    "definition": "Harmonic mean of precision and recall: F₁ = 2·Precision·Recall/(Precision+Recall). Captures both metrics in a single number and punishes an imbalance between them more than the arithmetic mean does.",
    "source": "Logistic"
  },
  {
    "term": "F-beta score",
    "definition": "Weighted harmonic mean F_β = (1+β²)·Precision·Recall/(β²·Precision + Recall). Larger β makes recall more important than precision; smaller β makes precision more important than recall.",
    "source": "Logistic"
  },
  {
    "term": "Discrimination threshold",
    "definition": "The tunable cutoff in the decision rule (y=1 if w^T x > threshold). Varying it trades precision against recall; sweeping it generates the ROC curve.",
    "source": "Logistic"
  },
  {
    "term": "ROC curve (Receiver Operation Characteristic)",
    "definition": "Plot of TPR against FPR at various thresholds, illustrating the diagnostic ability of a binary classifier as its discrimination threshold varies. Point (0,1) is perfect classification; a random guess lies along the diagonal.",
    "source": "Logistic"
  },
  {
    "term": "True Positive Rate (TPR)",
    "definition": "TP/(TP+FN), the Probability of Detection — same formula as recall; the y-axis of the ROC curve (also called sensitivity).",
    "source": "Logistic"
  },
  {
    "term": "False Positive Rate (FPR)",
    "definition": "FP/(FP+TN), the Probability of False Alarm; the x-axis of the ROC curve (equal to 1 - specificity).",
    "source": "Logistic"
  },
  {
    "term": "AUC (Area Under the Curve)",
    "definition": "Area under the ROC curve; equals the probability that the classifier ranks a randomly chosen positive example higher than a randomly chosen negative example. One of the most widely used metrics for binary classification; larger AUC = better classifier.",
    "example": "Slide: AUC(A) > AUC(B), so Classifier A is better than Classifier B.",
    "source": "Logistic"
  },
  {
    "term": "train_test_split",
    "definition": "sklearn function that randomly partitions the data into a training set (used to fit) and a test set (used only to evaluate); test_size sets the held-out fraction.",
    "example": "train_test_split(x, y, test_size=0.8, random_state=610) puts 80% of rows in the TEST set, leaving only 20% for training.",
    "source": "Logistic"
  },
  {
    "term": "C (inverse regularization strength)",
    "definition": "sklearn's regularization hyperparameter for logistic regression: SMALLER C means STRONGER L2 regularization (smaller weights, simpler model); larger C means weaker regularization.",
    "example": "C = 0.0001 gives weight norm 0.0136 and accuracy 0.825; C = 1 gives norm 0.787 and accuracy 0.8875.",
    "source": "Logistic"
  },
  {
    "term": "Model complexity (weight norm)",
    "definition": "In this notebook, the L2 norm of the weight vector, √(w₀² + w₁²) — a single number measuring how large (and hence how 'confident'/steep) the model's weights are.",
    "example": "np.sqrt(np.square(clf.coef_[0][0]) + np.square(clf.coef_[0][1])) prints 0.787258620968947 at C = 1.",
    "source": "Logistic"
  },
  {
    "term": "lbfgs solver",
    "definition": "A quasi-Newton optimization algorithm sklearn uses to minimize logistic regression's regularized log-loss; it is the default solver and works well for small dense problems.",
    "example": "LogisticRegression(solver = 'lbfgs') in the first fit.",
    "source": "Logistic"
  },
  {
    "term": "coef_ and intercept_",
    "definition": "Fitted attributes of a sklearn linear model: coef_ holds the learned weights (one per feature) and intercept_ holds the bias term b.",
    "example": "estimator.coef_[0][0], estimator.coef_[0][1] and estimator.intercept_[0] are combined to draw the boundary line.",
    "source": "Logistic"
  },
  {
    "term": "predict vs predict_proba",
    "definition": "predict returns hard class labels (probability thresholded at 0.5); predict_proba returns one probability per class per sample, summing to 1 across classes.",
    "example": "estimator.predict_proba(mesh_data) on 40 000 grid points returns an array reshaped to (200, 200, 2).",
    "source": "Logistic"
  },
  {
    "term": "Meshgrid",
    "definition": "np.meshgrid turns two 1-D coordinate arrays into 2-D coordinate matrices covering every grid combination — the standard trick for evaluating a model over a whole 2-D region for contour plots.",
    "example": "xx0, xx1 = np.meshgrid(x0, x1) with 200 steps each gives a 200×200 grid; np.c_[xx0.ravel(), xx1.ravel()] flattens it into model inputs.",
    "source": "Logistic"
  },
  {
    "term": "Contour plot (contourf)",
    "definition": "A plot that fills regions according to the value of a function over a 2-D grid; here it shades class probability, clipped with np.maximum(proba, 0.5) so each class colors only the region where it is the more likely class.",
    "example": "plt.contourf(xx0, xx1, np.maximum(mesh_proba[:,:,i], 0.5), 20, cmap=Reds/Greens, alpha=0.5).",
    "source": "Logistic"
  },
  {
    "term": "Underfitting via over-regularization",
    "definition": "When regularization is too strong the weights are forced too small, the boundary becomes too 'soft', and even test accuracy suffers.",
    "example": "C = 0.0001 (strongest regularization) has the WORST test accuracy in the sweep, 0.825, versus 0.8875 at C = 1.",
    "source": "Logistic"
  },
  {
    "term": "Decision Tree",
    "definition": "A decision-support tool that uses a tree-like graph or model of decisions and their possible consequences.",
    "example": "The 'Should I accept a new job offer?' tree splits on salary ≥ $50k, then commute time, then free coffee, to reach accept/decline leaves.",
    "source": "DecisionTree"
  },
  {
    "term": "Decision Tree Learning",
    "definition": "Uses a decision tree as a predictive model; recursively partitions the input space and defines a local model (one leaf per region) that maps observations (branches) to a target value (leaves).",
    "example": "ID3 recursively picks the best attribute to split the Play Tennis dataset until each leaf region is a pure combination of Outlook/Humidity/Windy.",
    "source": "DecisionTree"
  },
  {
    "term": "Root Node",
    "definition": "The node at the top of a decision tree representing the entire population or sample before any split.",
    "example": "In the Play Tennis tree, 'Outlook' is the root node covering all 14 examples.",
    "source": "DecisionTree"
  },
  {
    "term": "Decision Node",
    "definition": "A sub-node that can be split further into additional sub-nodes based on a test of an attribute.",
    "example": "The 'Humidity' node under Outlook=Sunny is a decision node because it splits into High/Normal branches.",
    "source": "DecisionTree"
  },
  {
    "term": "Leaf / Terminal Node",
    "definition": "A node that does not split further and outputs a class label (or value) for all examples that reach it.",
    "example": "The 'Yes' node under Outlook=Overcast is a leaf because all 4 examples routed there are positive.",
    "source": "DecisionTree"
  },
  {
    "term": "Splitting",
    "definition": "The process of dividing a node into two or more sub-nodes based on the value of an attribute.",
    "example": "Splitting the root on Outlook produces three branches: sunny, overcast, rainy.",
    "source": "DecisionTree"
  },
  {
    "term": "Branch / Sub-Tree",
    "definition": "A sub-section of the entire tree, consisting of a node and all of its descendants.",
    "example": "The Outlook=Sunny sub-tree contains the Humidity split and its two leaf outcomes.",
    "source": "DecisionTree"
  },
  {
    "term": "Entropy",
    "definition": "A measure of the expected uncertainty (impurity) of a random variable: H(X) = -Σ p_i log p_i.",
    "example": "The Play Tennis target Y=[9+,5-] has entropy H(Y) = 0.940 bits.",
    "source": "DecisionTree"
  },
  {
    "term": "Information Gain",
    "definition": "The expected reduction in entropy of the target variable achieved by partitioning on a given attribute; equals mutual information I(Y;X) = H(Y) - H(Y|X).",
    "example": "IG(S,Outlook) = 0.940 - 0.694 = 0.247, higher than IG(S,Humidity) = 0.152, so Outlook is chosen first.",
    "source": "DecisionTree"
  },
  {
    "term": "Conditional Entropy",
    "definition": "The remaining uncertainty in Y after X is known: H(Y|X) = Σ p(X=x_i) H(Y|X=x_i).",
    "example": "H(Y|Humidity) = 7/14·0.985 + 7/14·0.592 = 0.788.",
    "source": "DecisionTree"
  },
  {
    "term": "Mutual Information",
    "definition": "The amount of uncertainty about one variable that is resolved by knowing another: I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y).",
    "example": "If X completely determines Y, I(X;Y) = H(Y) since H(Y|X) = 0.",
    "source": "DecisionTree"
  },
  {
    "term": "ID3 (Iterative Dichotomiser 3)",
    "definition": "A greedy, top-down decision tree learning algorithm that at each step picks the attribute with the highest information gain to split on.",
    "example": "ID3 chooses Outlook over Humidity at the root because IG(Outlook)=0.247 > IG(Humidity)=0.152.",
    "source": "DecisionTree"
  },
  {
    "term": "Gini Impurity",
    "definition": "A measure of node impurity, Gini(S) = 1 - Σ_i (|S_i|/|S|)^2, representing the probability of misclassifying a randomly labeled element drawn from the set's label distribution.",
    "example": "A node with 5 examples of each of two classes has Gini(S) = 1 - 0.5^2 - 0.5^2 = 0.5.",
    "source": "DecisionTree"
  },
  {
    "term": "Gain Ratio",
    "definition": "Information gain normalized by the split's intrinsic information (SplitInfo), used to penalize attributes with many distinct values: GainRatio(S,A) = InfoGain(S,A) / SplitInfo(S,A).",
    "example": "A 500-valued 'date' attribute may have high raw information gain but a much lower Gain Ratio once divided by its large SplitInfo.",
    "source": "DecisionTree"
  },
  {
    "term": "SplitInfo",
    "definition": "The entropy of an attribute's own value distribution, SplitInfo(S,A) = -Σ_i (|S_i|/|S|) log(|S_i|/|S|), used as the denominator in Gain Ratio.",
    "example": "An attribute that splits data into 14 singleton groups has a very high SplitInfo, shrinking its Gain Ratio.",
    "source": "DecisionTree"
  },
  {
    "term": "Variance Reduction",
    "definition": "A splitting criterion for regression trees (continuous target) that selects the split maximizing the decrease in variance of the target variable within child nodes.",
    "example": "A regression tree predicting house price picks the split that most reduces price variance between the two resulting groups.",
    "source": "DecisionTree"
  },
  {
    "term": "Overfitting (in decision trees)",
    "definition": "When a tree grows large enough to perfectly fit noise in the training data, causing training accuracy to keep rising while test accuracy degrades.",
    "example": "Adding one noisy example (sunny, hot, normal, true, no) can force extra splits that hurt generalization.",
    "source": "DecisionTree"
  },
  {
    "term": "Reduced-Error Pruning",
    "definition": "A post-pruning technique: grow a full tree, then greedily remove the split that most improves accuracy on a held-out validation/test set, repeating until further pruning is harmful.",
    "example": "Starting from about 90 nodes, pruning back toward about 60 nodes raises test accuracy from around 0.80 toward its peak.",
    "source": "DecisionTree"
  },
  {
    "term": "Majority Vote (leaf prediction)",
    "definition": "The rule used at an impure leaf node: predict the class that occurs most frequently among the training examples that reached that leaf.",
    "example": "A leaf with {Y|Outlook=rainy}=[3+,2-] predicts 'yes' by majority vote.",
    "source": "DecisionTree"
  },
  {
    "term": "Non-Linear Decision Boundary",
    "definition": "Because a decision tree partitions the input space with axis-aligned splits arranged hierarchically, it can separate classes that are not linearly separable by a single hyperplane.",
    "example": "A dataset where positive and negative points are not linearly separable can still be perfectly separated by a tree with a few axis-aligned splits.",
    "source": "DecisionTree"
  },
  {
    "term": "Hyperparameter",
    "definition": "A parameter that is not learned through the typical ML training process (e.g., regularization weight, tree depth), whose value must be chosen/searched before or outside of training.",
    "example": "Choosing max_depth and min_samples_split for a decision tree, or the regularization strength for logistic regression.",
    "source": "Ensemble"
  },
  {
    "term": "Grid Search",
    "definition": "A hyperparameter tuning method that exhaustively evaluates every combination of hyperparameter values on a specified grid using cross-validation, then returns the best-scoring combination.",
    "example": "GridSearchCV over criterion in {gini, entropy}, splitter in {best, random}, and max_depth in {2,3,4,5} for a DecisionTreeClassifier.",
    "source": "Ensemble"
  },
  {
    "term": "Random Search",
    "definition": "A hyperparameter tuning method that evaluates only a random sample of points on the hyperparameter grid rather than the entire grid, making it cheaper than grid search while still likely to find near-optimal regions.",
    "example": "Sampling 60 random hyperparameter combinations instead of exhaustively trying every combination in a large grid.",
    "source": "Ensemble"
  },
  {
    "term": "Bayesian Optimization",
    "definition": "A hyperparameter search method that builds a surrogate probability model of the objective function, finds hyperparameters that perform best on the surrogate, evaluates them on the true objective, and updates the surrogate iteratively.",
    "example": "Using a Gaussian Process surrogate to decide the next set of hyperparameters to try for tuning a neural network's learning rate and batch size.",
    "source": "Ensemble"
  },
  {
    "term": "Data Leakage (in tuning)",
    "definition": "The problem of 'fitting' the model architecture to the test data by using the test set to evaluate hyperparameter choices, which invalidates the test set as an unbiased performance estimate.",
    "example": "Repeatedly checking test accuracy while adjusting max_depth, then reporting that same test accuracy as the final generalization estimate.",
    "source": "Ensemble"
  },
  {
    "term": "Cross-Validation",
    "definition": "A resampling procedure that evaluates ML models on a limited data sample by splitting the data into k folds, training on k-1 folds and testing on the remaining fold k times, then averaging the scores.",
    "example": "10-fold cross-validation: train on 9 folds and test on the 10th, repeated 10 times, then average the 10 accuracy scores.",
    "source": "Ensemble"
  },
  {
    "term": "StratifiedKFold",
    "definition": "A cross-validation splitting strategy that maintains the class ratio in each fold, preventing folds with skewed class distributions or sequential runs of the same class.",
    "example": "In a dataset with 90% negative and 10% positive labels, StratifiedKFold ensures each of the k folds also has roughly 90%/10% split.",
    "source": "Ensemble"
  },
  {
    "term": "Ensemble Learning",
    "definition": "Combining multiple classifiers ('experts') into one model that is hopefully more accurate than any individual classifier, typically by training several models and combining their predictions.",
    "example": "Training multiple decision trees on different data subsets and combining their votes into a Random Forest prediction.",
    "source": "Ensemble"
  },
  {
    "term": "Hard Voting",
    "definition": "An ensemble combination rule where each classifier casts a vote for a class label and the majority label wins.",
    "example": "Three classifiers predict classes A, A, B; hard voting selects A.",
    "source": "Ensemble"
  },
  {
    "term": "Soft Voting",
    "definition": "An ensemble combination rule where classifiers output class probabilities, which are averaged (optionally weighted) across classifiers before choosing the class with the highest average probability.",
    "example": "Classifier 1 gives P(A)=0.6; classifier 2 gives P(A)=0.3; soft voting averages to 0.45 and combines with other classes' probabilities to pick a final label.",
    "source": "Ensemble"
  },
  {
    "term": "Bias (statistical)",
    "definition": "The difference between the average prediction of a model (averaged over different training sets) and the true value being predicted: Bias(h(x)) = E[h(x)] - f(x).",
    "example": "A linear model fit to a truly quadratic relationship will systematically under- or over-predict in certain regions — that systematic error is bias.",
    "source": "Ensemble"
  },
  {
    "term": "Variance (statistical)",
    "definition": "The variability of a model's prediction for a given data point across different training sets: Var(h(x)) = E[h(x)^2] - (E[h(x)])^2.",
    "example": "A deep, unpruned decision tree trained on different bootstrap samples of the same data can produce very different predictions for the same test point — that's high variance.",
    "source": "Ensemble"
  },
  {
    "term": "Bootstrap Sampling",
    "definition": "Given a dataset D with m examples, creating a new sample Dj of size m by drawing examples uniformly at random with replacement from D.",
    "example": "From a 10-row dataset, drawing 10 rows with replacement so that some original rows appear multiple times and others (about 37%) are left out.",
    "source": "Ensemble"
  },
  {
    "term": "Bagging (Bootstrap Aggregating)",
    "definition": "An ensemble method that creates k bootstrap samples from the training data, trains a base classifier on each sample, and combines their predictions by equal-weight majority vote.",
    "example": "sklearn's BaggingClassifier wraps a DecisionTreeClassifier, training many trees on bootstrap samples and voting on the final label.",
    "source": "Ensemble"
  },
  {
    "term": "Out-of-Bag (OOB) Score",
    "definition": "An internal validation estimate for bagging-style ensembles, computed by evaluating each training example only on the base models whose bootstrap sample did not include that example.",
    "example": "Setting oob_score=True in BaggingClassifier or RandomForestClassifier lets you estimate generalization performance without a separate holdout set.",
    "source": "Ensemble"
  },
  {
    "term": "Random Forest",
    "definition": "An ensemble of decision trees where each tree is trained on a bootstrap sample of the data and, at each split, considers only a random subset of features, decorrelating the trees beyond what plain bagging achieves.",
    "example": "RandomForestClassifier(n_estimators=10, max_features=1) trains 10 trees, each split considering only 1 random feature at a time.",
    "source": "Ensemble"
  },
  {
    "term": "AdaBoost (Adaptive Boosting)",
    "definition": "A boosting algorithm that iteratively trains weak classifiers, computing a weighted error rate each round, assigning each classifier a voting weight alpha_t = (1/2)ln((1-err_t)/err_t), and reweighting instances so misclassified ones get more weight in the next round.",
    "example": "If a weak classifier's weighted error rate is 1/3, its alpha_t = (1/2)ln(2) ≈ 0.347, and misclassified instances have their sampling weight increased for the next round.",
    "source": "Ensemble"
  },
  {
    "term": "SAMME vs SAMME.R",
    "definition": "Two scikit-learn implementations of multi-class AdaBoost: SAMME adapts based on errors in predicted class labels, while SAMME.R (Real) adapts based on predicted class probabilities and typically converges with fewer iterations.",
    "example": "Using AdaBoostClassifier(algorithm='SAMME.R') leverages probability estimates from each weak learner instead of hard label predictions.",
    "source": "Ensemble"
  },
  {
    "term": "Gradient Boosting",
    "definition": "An ensemble method (typically using decision tree regressors) that builds an additive model stage-by-stage, where each new tree h(x) = F_{m+1}(x) - F_m(x) is fit to the residual y - F_m(x) of the current ensemble.",
    "example": "After stage m predicts F_m(x), the next tree is trained to predict the leftover residual error y - F_m(x), and its output is added to improve the overall prediction.",
    "source": "Ensemble"
  },
  {
    "term": "Stacking",
    "definition": "An ensemble technique that combines predictions from multiple heterogeneous base models using a learned meta-model, typically via out-of-fold (k-fold) predictions used as new training features for the meta-model.",
    "example": "Train a logistic regression, random forest, and SVM as base models on k-1 folds each, collect their out-of-fold predictions as new features, then train a meta-model on those features.",
    "source": "Ensemble"
  },
  {
    "term": "Blending",
    "definition": "A simplified alternative to stacking that uses a single holdout validation split (instead of k-fold cross-validation) to generate meta-features for training a level-2 model.",
    "example": "Split training data into train/validation; fit base models on train, predict on validation and test; use validation predictions as features to train a meta-model that predicts on the test meta-features.",
    "source": "Ensemble"
  },
  {
    "term": "No Free Lunch Theorem",
    "definition": "The principle that no single machine learning algorithm is universally the most accurate across all possible problems; effort should instead go into obtaining base models that make diverse kinds of errors.",
    "example": "A random forest might outperform gradient boosting on one dataset but underperform it on another; no algorithm dominates in all cases.",
    "source": "Ensemble"
  },
  {
    "term": "Feature Engineering",
    "definition": "The process of transforming raw logged data (e.g., nested JSON/proto records) into numeric feature vectors suitable for input to a machine learning model.",
    "example": "Converting a raw impression log containing age, ip_address, and video_id into a numeric vector combining a real-valued age feature and a one-hot encoded video_id feature.",
    "source": "Ensemble"
  },
  {
    "term": "The Binning Trick",
    "definition": "A feature engineering technique that converts a continuous feature into several Boolean 'bin' features (each representing a value range), letting a linear model learn a different weight per bin.",
    "example": "Converting latitude into bins like LatitudeBin1 (32 < latitude <= 33) through LatitudeBin6 (37 < latitude <= 38) so the model can capture non-linear regional price effects.",
    "source": "Ensemble"
  },
  {
    "term": "Feature Cross",
    "definition": "A synthetic feature formed by combining (multiplying/conjoining) two or more existing features, e.g., [A x B], used to give linear models more expressive power to capture non-linear interactions.",
    "example": "[latitude x num_bedrooms] for housing price prediction, or [pos1 x pos2 x ... x pos9] for a Tic-Tac-Toe board predictor.",
    "source": "Ensemble"
  },
  {
    "term": "CART (Classification and Regression Trees)",
    "definition": "The greedy, binary-split tree-growing algorithm used by scikit-learn's DecisionTreeClassifier/DecisionTreeRegressor. At each node it picks the (feature, threshold) pair that most reduces impurity (Gini by default for classification, MSE for regression), recursing until a stopping condition (e.g. max_depth, min_samples_leaf) is met.",
    "example": "DecisionTreeClassifier(max_depth=3, random_state=2022).fit(X, y) on the Iris petal length/width features finds its first split at petal length = 2.45cm.",
    "source": "DecisionTree"
  },
  {
    "term": "min_samples_leaf",
    "definition": "A regularization hyperparameter that sets the minimum number of training samples a leaf node must contain; increasing it forces coarser, less overfit trees.",
    "example": "DecisionTreeClassifier(min_samples_leaf=4) on the noisy make_moons dataset produces a visibly smoother decision boundary than the unrestricted tree.",
    "source": "DecisionTree"
  },
  {
    "term": "Bagging vs Boosting",
    "definition": "Bagging trains estimators independently in parallel on random resamples to reduce variance (all votes weighted equally); boosting trains estimators sequentially, each correcting the previous ensemble's errors, primarily to reduce bias.",
    "example": "BaggingClassifier/RandomForestClassifier average independent trees, whereas AdaBoostClassifier/GradientBoostingClassifier chain trees where each depends on the residual/weights left by the last.",
    "source": "Ensemble"
  },
  {
    "term": "One-hot Encoding (feature)",
    "definition": "A technique for representing categorical/string features as a sparse binary vector with a single 1 at the index corresponding to the observed category and 0s elsewhere.",
    "example": "impression_video_id_feature = [0, ..., 0, 1, 0, ..., 0] where the 1 marks the position of video 'xyz789' among K unique videos.",
    "source": "Ensemble"
  }
]
