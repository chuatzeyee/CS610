import type { Session } from './types'

export const sessions: readonly Session[] = [
  {
    "id": "intro",
    "title": "Lecture 1A — Introduction to Machine Learning",
    "subtitle": "01_introduction.pdf",
    "topics": [
      {
        "id": "what-is-machine-learning",
        "title": "What is Machine Learning?",
        "sections": [
          {
            "heading": "Analytics maturity: why ML matters (Gartner 2014)",
            "points": [
              "Gartner's analytics ladder goes Data → Decision → Action through four analytics levels: Descriptive ('What happened?'), Diagnostic ('Why did it happen?'), Predictive ('What will happen?'), and Prescriptive ('What should I do?').",
              "Prescriptive analytics splits into Decision Support and Decision Automation; as you move down the ladder from descriptive to prescriptive, the amount of Human Input shrinks and automation grows.",
              "Source cited on the slide: gartner.com press release 2014-10-21, 'advanced analytics is a top business priority'."
            ]
          },
          {
            "heading": "Traditional programming vs machine learning",
            "points": [
              "Traditional Programming: Data + Program → Computer → Output (the human writes the program).",
              "Machine Learning: Data + Output → Computer → Model (the computer produces the program/model from examples).",
              "The learned Model is then plugged back in as the Program: Data + Model(Program) → Computer → Output — this loop is how ML 'automates automation'."
            ]
          },
          {
            "heading": "Formal definitions of learning",
            "points": [
              "Herbert Simon: 'Learning is any process by which a system improves performance from experience.'",
              "Tom M. Mitchell: 'A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.'",
              "A well-defined machine learning task is the triple <T, P, E> (task, performance measure, experience)."
            ]
          },
          {
            "heading": "Three worked <T, P, E> examples",
            "points": [
              "Checkers (Arthur Samuel, 1952) — T: playing checker games; P: percentage of games won against an arbitrary opponent; E: playing practice games against many people or itself.",
              "Automated email spam filtering — T: categorize email messages as spam or legitimate; P: percentage of email messages correctly classified; E: database of emails with human-given labels.",
              "Handwritten recognition — T: recognizing hand-written words; P: percentage of words correctly classified; E: database of images of handwritten words with human labels."
            ]
          }
        ]
      },
      {
        "id": "why-study-and-applications",
        "title": "Why Study ML and Its Applications",
        "sections": [
          {
            "heading": "Why study machine learning",
            "points": [
              "Four slide reasons: automating automation; getting computers to program themselves; writing software is the bottleneck; let the data do the work instead!",
              "Why ML has blossomed: recent progress in algorithm and theory; growing flood of online data and big data; computational power is increasing rapidly; growing industry in data science and AI."
            ]
          },
          {
            "heading": "Two main applications of machine learning",
            "points": [
              "(1) Data mining, or data science, or statistics — use historical data to improve decisions, e.g., medical records → medical knowledge.",
              "(2) Software applications that are too complex to code by hand — image classification, speech recognition, automatic recommender systems, autonomous driving.",
              "'Too complex to code by hand' examples shown: image retrieval using text or images (Google 'dogs in snow'), a navigation system with countdown timer display at traffic lights ('let the data do the job!'), visual object recognition (person/dog/chair; 'Person on Bike'), image tagging/captioning (ChatGPT caption: 'Home chef adventures: Two pizzas, one stove, and a glass of wine for company!'), and a self-driving car (The Verge)."
            ]
          },
          {
            "heading": "Typical data mining tasks with learned rules",
            "points": [
              "Diagnose diabetes — learned rules: if fasting blood sugar > 126 mg/dL then the patient may be at risk; if over 45 years old AND family history of diabetes then more likely to be diagnosed; if obese (BMI > 30) AND increased thirst AND frequent urination then flag for further testing/possible diagnosis.",
              "Credit risk analysis — learned rules: IF Other-Delinquent-Account > 2 AND Number-Delinquent-Billing-Cycles > 1 THEN Profitable-Customer? = no; IF Other-Delinquent-Account = 0 AND (Income > $30K OR Years-of-Credit > 3) THEN Profitable-Customer? = yes."
            ]
          },
          {
            "heading": "More applications and relevant disciplines",
            "points": [
              "More ML applications: information retrieval & web search, e-commerce, finance, robotics, social networks, computational biology, mechanical engineering, and many more.",
              "Relevant disciplines: artificial intelligence; data mining/data science; statistics, particularly Bayesian statistics; information theory; optimization theory; computational complexity theory; neurobiology; psychology."
            ]
          }
        ]
      },
      {
        "id": "ml-framework-and-components",
        "title": "General Framework and the Three Components",
        "sections": [
          {
            "heading": "A general framework: statistics + optimization",
            "points": [
              "Machine Learning = Statistics + Optimization.",
              "Statistics contributes Mathematical Modeling; Optimization contributes Finding Optimal Parameters."
            ]
          },
          {
            "heading": "ML in a nutshell: three components of every algorithm",
            "points": [
              "Every machine learning algorithm has three components: Representation, Evaluation, and Optimization.",
              "Representation choices listed: decision trees; sets of rules / logic programs; instances; graphical models (Bayes/Markov nets); neural networks; support vector machines; model ensembles."
            ]
          },
          {
            "heading": "Evaluation and optimization options",
            "points": [
              "Evaluation measures listed: accuracy; precision and recall; squared error; likelihood; posterior probability; cost/utility; margin; entropy; K-L divergence.",
              "Optimization families with slide examples: combinatorial optimization (e.g., greedy search); convex optimization (e.g., gradient descent); constrained optimization (e.g., linear programming)."
            ]
          }
        ]
      },
      {
        "id": "types-of-ml-and-supervised-learning",
        "title": "Types of ML and Supervised Learning",
        "sections": [
          {
            "heading": "Four types of machine learning",
            "points": [
              "Supervised (inductive) learning — training data includes desired outputs.",
              "Unsupervised learning — training data does not include desired outputs.",
              "Semi-supervised learning — training data includes a few desired outputs.",
              "Reinforcement learning — rewards from a sequence of actions."
            ]
          },
          {
            "heading": "Input, output, and dataset notation",
            "points": [
              "Generally, x stands for input and y stands for output; feature columns are X1, X2, X3, X4 with label column Y.",
              "A dataset is expressed as D = {(xᵢ, yᵢ)}ᵢ₌₁ⁿ = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}."
            ]
          },
          {
            "heading": "Supervised learning setup",
            "points": [
              "Given (input, correct output), predict (input, ?): learn a hypothesis h(x) ≈ f(x) where the unknown target function f gives y = f(x).",
              "Classification = discrete output; Regression = continuous output.",
              "Binary classification: input x, find y in {-1, +1} — e.g., spam email filtering with two classes: '+' = spam emails, '-' = normal/non-spam emails.",
              "Multi-class classification: input x, find y in {1, ..., k} — e.g., digit recognition mapping each image x to one of ten digits [0, ..., 9]."
            ]
          },
          {
            "heading": "Regression",
            "points": [
              "Regression: given input x, find y in real-valued space ℝ (or ℝᵈ).",
              "Linear regression assumes linear dependence — slide example: Y = a + b·X, body weight from height: wgt = 80 + 2·(hgt).",
              "Nonlinear regression — slide example: time series forecasting (Microsoft stock time series forecast)."
            ]
          }
        ]
      },
      {
        "id": "unsupervised-learning-tasks",
        "title": "Unsupervised Learning Tasks",
        "sections": [
          {
            "heading": "Setup and the four task families",
            "points": [
              "Unsupervised learning: given (input, ~~correct output~~) — the correct output is struck out — predict (input, ?): no labels are available.",
              "Clustering — find a set of prototypes representing the data.",
              "Dimension reduction / principal components — find a subspace representing the data.",
              "Independent components / dictionary learning — find a (small) set of factors for observation.",
              "Novelty/anomaly detection — find the odd one out."
            ]
          },
          {
            "heading": "Clustering and dimension reduction details",
            "points": [
              "Clustering applications listed: marketing segmentation, group of insurance interests, web news, pictures, city-planning, etc.; illustrated by turning 'original unclustered data' into 'clustered data' with three colored clusters.",
              "Principal Component Analysis (PCA): maps the original data space (e.g., Gene 1/Gene 2/Gene 3 axes) into a component space spanned by PC 1 and PC 2.",
              "Nonlinear embedding: illustrated by the swiss-roll figure — high-dim distribution → high-dim samples → estimated manifold."
            ]
          },
          {
            "heading": "Novelty / anomaly detection",
            "points": [
              "Novelty detection = identification of new or unknown patterns; two approaches on the slide: parametric approach and non-parametric approach.",
              "Illustrated by Bodesheim (2012): a training set of bear images defines the current model, and a test sample x* is checked with 'Is this an example of a novel category?'; also a scatter plot with two red outlier points far from the main point cloud."
            ]
          }
        ]
      },
      {
        "id": "interaction-modes-and-model-paradigms",
        "title": "Interaction Modes and Model Paradigms",
        "sections": [
          {
            "heading": "Learning by interacting with the environment",
            "points": [
              "Batch learning: observe training data (x₁, y₁) ... (xₙ, yₙ), then deploy.",
              "Online learning: sequential — observe x₁, predict f(x₁), observe x₂, ...; e.g., stock market forecasting.",
              "Active learning: query y for x, improve model, pick new x; e.g., ask questions in class.",
              "Reinforcement learning: take an action, environment responds, take new action; e.g., play chess, drive a car."
            ]
          },
          {
            "heading": "Reinforcement learning loop and applications",
            "points": [
              "RL loop — Repeat: take an action; environment reacts; observe stuff; update model.",
              "Applications: game playing, self-driving cars, autonomous plane flight."
            ]
          },
          {
            "heading": "Discriminative vs. generative (supervised learning)",
            "points": [
              "Discriminative: estimate y|x directly; often better convergence + simpler solutions; only care about estimating the conditional probabilities; very good when the underlying distribution of data is really complicated (e.g., texts, images, movies). Picture: a decision boundary separating the two classes, with the test point judged by distance to the boundary.",
              "Generative: estimate the joint distribution over (x, y), then use conditional probability to infer y|x, i.e., model observations (x, y) first, then infer p(y|x); often more intuitive; easier to add prior knowledge about data; good for missing variables and better diagnostics. Picture: one distribution 'blob' fit per class."
            ]
          },
          {
            "heading": "Shallow learning vs deep learning",
            "points": [
              "(a) Linear models: a single sum unit Σ directly on the input features produces f(x).",
              "(b) Non-linear models with shallow architecture: one layer of kernel units K(x₁,x), ..., K(xᵢ,x), ..., K(xₙ,x) feeding a sum Σ to give f(x).",
              "(c) Non-linear model with deep architecture: many stacked layers of units between input and the final Σ producing f(x)."
            ]
          }
        ]
      },
      {
        "id": "course-overview",
        "title": "Course Overview and Practical Issues",
        "sections": [
          {
            "heading": "What CS610 will cover",
            "points": [
              "Supervised learning topics: Bayesian learning, regression, logistic regression, decision trees, ensemble models, neural networks, deep learning, generative models.",
              "Unsupervised learning topics: dimensionality reduction, clustering, embedding, representation learning.",
              "Breadth and depth: Applied Machine Learning branches into Clustering and Classifier I / II / III; assessment via Assignments and a Project."
            ]
          },
          {
            "heading": "Learning philosophy: connecting the dots",
            "points": [
              "Four points: (1) knowledge is available online; (2) learning is about connecting knowledge together; (3) 'My slides are mine, to become yours, you must learn how to connect them'; (4) ask whenever you're lost.",
              "Course style: no spoon-feeding; get your hands dirty."
            ]
          },
          {
            "heading": "Practical issues on machine learning",
            "points": [
              "Understanding domain, prior knowledge, and goals.",
              "Data integration, selection, cleaning, pre-processing, etc.",
              "Learning models and model comparison; interpreting results.",
              "Consolidating and deploying discovered knowledge; applying discovered knowledge to practical problems."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bayes",
    "title": "Lecture 1B — Bayesian Learning & Naive Bayes",
    "subtitle": "01_bayesian_learning.pdf",
    "topics": [
      {
        "id": "statistics-and-maximum-likelihood",
        "title": "Statistics Revised: Fitting a Distribution by Maximum Likelihood",
        "sections": [
          {
            "heading": "The basic assumption of statistics",
            "points": [
              "The slides open with the basic assumption of statistics: 'Data represent a population or a process.'",
              "A population is a structure described by a statistical distribution; a process is a collection of random variables that evolve over time or space.",
              "Motivating example: assume 4 independent observations {3.0, 4.0, 5.0, 12.0} are generated from a normal distribution. The fitted parameters are μ = (1/n)·Σxᵢ = 6.0 and σ² = (1/n)·Σ(xᵢ − μ)² = 12.5."
            ]
          },
          {
            "heading": "Why this particular distribution?",
            "points": [
              "There are many normal distributions, each defined by a mu and a sigma. The slides compare N₁ = N(μ = 6.0, σ² = 12.5) against N₂ = N(μ = 5.0, σ² = 16.0).",
              "Using scipy, the product of densities of {3.0, 4.0, 5.0, 12.0} under N₁ is ≈ 2.194e-05, while under N₂ it is ≈ 1.830e-05.",
              "N₁ is chosen because the likelihood of observing {3.0, 4.0, 5.0, 12.0} is the highest among all normal distributions: p(D = {3.0, 4.0, 5.0, 12.0} | N₁) > p(D | all other normal distributions)."
            ]
          },
          {
            "heading": "Textbook statistics generalised",
            "points": [
              "Given observations {x₁, x₂, ..., xₙ}, calculate μ_opt = (1/n)·Σxᵢ and σ²_opt = (1/n)·Σ(xᵢ − μ)² to obtain N_opt = N(μ_opt, σ²_opt).",
              "In other words: p(D|N_opt) ≥ p(D|N) for all N in the set of all possible normal distributions.",
              "Generally: p(D|h_opt) ≥ p(D|h) for all h in the set of all possible hypotheses — this is the maximum likelihood idea. The slide then asks: 'However, is this assumption correct?'",
              "Real-life example motivating priors: Observation D = fever 39.0°C. What caused it — Flu (h₁)? Pneumonia (h₂)? Tetanus (h₃)? Comparing only likelihoods p(D|h₁), p(D|h₂), p(D|h₃) ignores how common each disease is, which motivates Bayes theorem."
            ]
          }
        ]
      },
      {
        "id": "bayes-theorem-prior-likelihood-posterior",
        "title": "Bayes Theorem: Prior, Likelihood, Posterior, Evidence",
        "sections": [
          {
            "heading": "Bayes Theorem / Rule",
            "points": [
              "Posterior ∝ Likelihood × Prior. Formally: p(h|D) = p(D|h)·p(h) / p(D). (Thomas Bayes, 1702–1761.)",
              "P(h) = prior probability of hypothesis h (Prior).",
              "P(D) = prior probability of training data D (Evidence).",
              "P(h|D) = conditional probability of h given D (Posterior).",
              "P(D|h) = conditional probability of D given h (Likelihood)."
            ]
          },
          {
            "heading": "Worked example: Meningitis and stiff neck",
            "points": [
              "Given: a doctor knows that meningitis causes stiff neck 50% of the time, i.e. P(S|M) = 0.5.",
              "Prior probability of any patient having meningitis is 1/50,000; prior probability of any patient having stiff neck is 1/20.",
              "Question: if a patient has the stiff neck symptom, what is the probability he/she has meningitis? P(M|S) = P(S|M)·P(M) / P(S) = (0.5 × 1/50,000) / (1/20) = 0.00001 / 0.05 = 0.0002.",
              "Interpretation: even though meningitis causes stiff neck half the time, the posterior is tiny (1 in 5,000) because the prior P(M) = 1/50,000 is so small."
            ]
          }
        ]
      },
      {
        "id": "map-vs-mle",
        "title": "Maximum A Posterior (MAP) vs Maximum Likelihood Estimation (MLE)",
        "sections": [
          {
            "heading": "Maximum A Posterior (MAP)",
            "points": [
              "MAP finds the most probable hypothesis given the training data by maximizing the posterior probability: h_MAP = argmax over h∈H of p(h|D) = argmax p(D|h)·p(h) / p(D) = argmax p(D|h)·p(h).",
              "p(D) is dropped because it is the same for every hypothesis; the prior p(h) 'encodes the knowledge/preference'.",
              "Procedure: for each hypothesis h in H, calculate the posterior p(h|D) ∝ p(D|h)·p(h); output the hypothesis h with the highest posterior probability.",
              "Choosing p(h) reflects our prior knowledge about the learning task."
            ]
          },
          {
            "heading": "MLE and its relation to MAP",
            "points": [
              "MLE finds a hypothesis h that maximizes the likelihood of the training data: h_MLE = argmax over h∈H of p(D|h).",
              "For a uniform prior, i.e. p(h) = p(h′) for all h, h′ ∈ H, MLE coincides with MAP, since p(h|D) ∝ p(D|h)·p(h)."
            ]
          },
          {
            "heading": "Hypotheses in classification",
            "points": [
              "In classification, hypotheses are: 'xᵢ belongs to class j', where j = 1, 2, ..., k.",
              "For each instance xᵢ, calculate p(C₁|xᵢ), p(C₂|xᵢ), ..., p(C_k|xᵢ) — how likely xᵢ belongs to each class — then classify xᵢ to Cᵢ = argmax over C of p(C|xᵢ).",
              "The posterior is calculated using Bayes theorem: p(C_k|xᵢ) ∝ p(xᵢ|C_k) × p(C_k), where p(C_k) is the class prior and p(xᵢ|C_k) is the class-conditional density."
            ]
          }
        ]
      },
      {
        "id": "probabilistic-generative-models",
        "title": "Probabilistic Generative Models with Gaussian Class-Conditional Densities",
        "sections": [
          {
            "heading": "Setup and Gaussian class-conditional densities",
            "points": [
              "Given training data sampled from K classes: D = {(xᵢ, yᵢ)}, 1 ≤ i ≤ n, yᵢ ∈ {1, 2, ..., K}. Classify instance xᵢ via p(y = k|xᵢ) = p(C_k|xᵢ) ∝ p(xᵢ|C_k)·p(C_k).",
              "p(xᵢ|C_k) is the likelihood of observing xᵢ generated from the distribution describing class C_k — it is the probability density function of class C_k.",
              "The Gaussian distribution is the most commonly used distribution for describing continuous data: p(xᵢ|C_k) = N(xᵢ|μ_k, Σ_k) = 1/((2π)^(d/2)·|Σ_k|^(1/2)) · exp(−½·(xᵢ−μ_k)ᵀ·Σ_k⁻¹·(xᵢ−μ_k)), with xᵢ ∈ ℝᵈ, μ_k ∈ ℝᵈ, and Σ_k a positive semi-definite d×d matrix.",
              "Normal-distribution facts shown: 68% of data within 1 standard deviation, 95% within 2, 99.7% within 3."
            ]
          },
          {
            "heading": "Training: closed-form parameter estimation",
            "points": [
              "Classification decision by MAP: k* = argmax over 1≤k≤K of p(xᵢ|C_k)·p(C_k). The key is to estimate the parameters μ_k, Σ_k, and p(C_k).",
              "Closed-form solutions using the indicator δ(yᵢ, k) = 1 if yᵢ = k, else 0: μ_k = Σᵢ δ(yᵢ,k)·xᵢ / Σᵢ δ(yᵢ,k); Σ_k = Σᵢ δ(yᵢ,k)·(xᵢ−μ_k)(xᵢ−μ_k)ᵀ / Σᵢ δ(yᵢ,k); p(C_k) = (1/n)·Σᵢ δ(yᵢ,k) — all calculated from the xᵢ with yᵢ = k.",
              "Slide 18 example: 10 training points (X₁, X₂, Y with Y ∈ {0,1,2}) are used to estimate μ₀,Σ₀,p(C₀); μ₁,Σ₁,p(C₁); μ₂,Σ₂,p(C₂). At inference, e.g. x₁₁ = (2.8, 3.0): likelihoods P(x|C₀)=0.756, P(x|C₁)=0.448, P(x|C₂)=0.003, but posteriors P(C₀|x)=0.456, P(C₁|x)=0.541, P(C₂|x)=0.003 — the class priors flip the decision from C₀ (highest likelihood) to C₁ (highest posterior)."
            ]
          },
          {
            "heading": "Curse of dimensionality and covariance singularity",
            "points": [
              "One challenge of learning with high-dimensional data is insufficient data samples.",
              "Suppose 5 samples/objects is considered enough in 1-D. Then: 1D needs 5 points, 2D needs 25 points, 3D needs 125 points, 10D needs 9,765,625 points (5^10).",
              "Singularity of the covariance matrix: data size too small for high-dimensional data makes Σ_k singular (its inverse appears in the Gaussian density). Solution: diagonalize the covariance matrix."
            ]
          }
        ]
      },
      {
        "id": "naive-bayes-classifier",
        "title": "Naive Bayes: Conditional Independence, Discrete Estimation, and Play Tennis",
        "sections": [
          {
            "heading": "The Naive Bayes approximation",
            "points": [
              "It is hard to estimate p(xᵢ|C_k) for high-dimension data xᵢ.",
              "Conditional Independence assumption: all attributes are conditionally independent (given the class).",
              "Naive Bayes approximation: p(xᵢ|C_k) ≈ Π over j=1..d of p(x_{i,j}|C_k) — each factor is a distribution of a 1D Gaussian in the continuous case.",
              "Gaussian Naive Bayes: p(xᵢ|C_k) = N(xᵢ|μ_k, Σ_k) ≈ Π p(x_{i,j}|μ_{k,j}, σ_{k,j}), which is equivalent to diagonalizing the covariance matrix.",
              "Naive Bayes (NB) Classifier: C_NB = argmax over C_k of p(C_k)·Π over j=1..d of p(x_{i,j}|C_k)."
            ]
          },
          {
            "heading": "Parameter estimation for discrete values",
            "points": [
              "For discrete-valued inputs: p(j-th dimension = v|C_k) = Σᵢ δ(x_{i,j}, v)·δ(yᵢ, k) / Σᵢ δ(yᵢ, k), where δ(x_{i,j}, v) = 1 if x_{i,j} = v, else 0 — i.e. count the fraction of class-k samples whose j-th attribute equals v.",
              "Each class is represented by multiple discrete probability distributions: one distribution per dimension, and each outcome is paired with a probability.",
              "Car example — Class C₁: P(color=white)=0.4, P(color=black)=0.3, P(color=grey)=0.3; P(type=compact)=0.5, P(type=MPV)=0.1, P(type=saloon)=0.3, P(type=SUV)=0.1; P(fuel=petrol)=0.9, P(fuel=diesel)=0.1.",
              "Car example — Class C₂: P(color=white)=0.1, P(color=black)=0.8, P(color=grey)=0.1; P(type=compact)=0.1, P(type=MPV)=0.2, P(type=saloon)=0.6, P(type=SUV)=0.1; P(fuel=petrol)=0.8, P(fuel=diesel)=0.2."
            ]
          },
          {
            "heading": "Worked example: 'Play Tennis or Not'",
            "points": [
              "Task: based on the 14-day table (Outlook, Temperature, Humidity, Wind, Play Tennis), classify the test sample x = (Outl=Sunny, Temp=Cool, Hum=High, Wind=Strong) using h_NB = argmax over h∈[yes,no] of P(h)·Π P(a_t|h).",
              "From the table: 9 Yes days and 5 No days, so P(yes) = 9/14 and P(no) = 5/14.",
              "Yes-side conditionals: P(sunny|yes) = 2/9, P(cool|yes) = 3/9, P(high|yes) = 3/9, P(strong|yes) = 3/9. Product with prior: (9/14)·(2/9)·(3/9)·(3/9)·(3/9) ≈ 0.0053.",
              "No-side conditionals: P(sunny|no) = 3/5, P(cool|no) = 1/5, P(high|no) = 4/5, P(strong|no) = 3/5. Product with prior: (5/14)·(3/5)·(1/5)·(4/5)·(3/5) ≈ 0.0206.",
              "Since 0.0206 > 0.0053, naive Bayes predicts Play Tennis = No for this sample."
            ]
          },
          {
            "heading": "The independence assumption: pros and cons",
            "points": [
              "Makes computation possible; yields optimal classifiers when satisfied; fairly good empirical results.",
              "But it is seldom satisfied in practice, as attributes (variables) are often correlated.",
              "Attempts to overcome this limitation: Bayesian networks, that combine Bayesian reasoning with causal relationships between attributes.",
              "sklearn usage (Iris example): gnb = naive_bayes.GaussianNB(); gnb.fit(x[:, :2], y); inspect gnb.class_prior_, gnb.class_count_, gnb.theta_, gnb.var_; predict with gnb.predict / gnb.predict_proba. Exercise: build the classifier for class 0 and class 1 only (iris.data[:100]) and ask whether the parameters stay the same, and why."
            ]
          }
        ]
      },
      {
        "id": "multinomial-naive-bayes-and-smoothing",
        "title": "Multinomial Naive Bayes, Bag-of-Words, and Laplace Smoothing",
        "sections": [
          {
            "heading": "Multinomial distribution",
            "points": [
              "In Multinomial Naive Bayes, p(xᵢ|C_k) in p(C_k|xᵢ) ∝ p(xᵢ|C_k)·p(C_k) follows a multinomial distribution (versus a Gaussian distribution in Gaussian NB).",
              "The multinomial distribution is a generalization of the binomial distribution. Flip a coin — binomial: with P(H)=0.6 and P(T)=0.4, P(H,H)=0.36, P(H,T)=P(T,H)=0.24, P(T,T)=0.16.",
              "Throw a dice — multinomial: with P(1)=0.5 and P(2)=P(3)=P(4)=P(5)=P(6)=0.1: an ordered sequence P(6,1,1,2) = 0.1×0.5×0.5×0.1 = 0.0025, and P(2,1,6,1) is the same 0.0025 — the order does not change the product.",
              "For the unordered bag of counts P({1:2, 2:1, 3:0, 4:0, 5:0, 6:1}) = 4!/(2!·1!·1!) × 0.5²×0.1×0.1 = 12 × 0.0025 = 0.03."
            ]
          },
          {
            "heading": "Bag-of-words model",
            "points": [
              "A sentence can be considered as a sequence of words generated from a multinomial distribution one by one: 'To be, or not to be, that is the question.' → P(to)·P(be)·P(or)·...·P(question).",
              "A sentence can also be considered as a bag (multi-set) of words, generated from a multinomial distribution regardless of the order: both 'To be, or not to be, that is the question.' and 'That is to be the question, or not to be.' give the same bag P({be:2, is:1, not:1, or:1, question:1, that:1, the:1, to:2}).",
              "Given a fixed vocabulary of d distinct words w₁..w_d, represent sentence i as xᵢ = (x_{i,1}, ..., x_{i,d}) where x_{i,d} is the number of times word w_d appears.",
              "Density: p(xᵢ|C_k) = (x_{i,1}+x_{i,2}+...+x_{i,d})! / (x_{i,1}!·x_{i,2}!·...·x_{i,d}!) × p_{k,1}^{x_{i,1}}·p_{k,2}^{x_{i,2}}·...·p_{k,d}^{x_{i,d}}, where p_{k,j} = p(w_j|C_k) is the probability that word w_j appears in class C_k.",
              "Because the multinomial coefficient is the same for all classes, p(C_k|xᵢ) ∝ p_{k,1}^{x_{i,1}}·p_{k,2}^{x_{i,2}}·...·p_{k,d}^{x_{i,d}}·p(C_k)."
            ]
          },
          {
            "heading": "Parameter estimation and Laplace smoothing",
            "points": [
              "Estimate p_{k,j} by simply counting frequencies in the data: create a mega-document for each class k by concatenating all the docs in the class, then compute the frequency of w in the mega-document: p_{k,j} = p(w_j|C_k) = count(w_j, C_k) / Σ_w count(w, C_k).",
              "Problem: what if there is a new word (e.g., chatGPT) in a test document which never appears in the training data? Then for all C_k, p('new_word'|C_k) = 0, which zeroes out the whole product p(xᵢ|C_k) = Π p(x_{i,j}|C_k).",
              "Smoothing to avoid zero probabilities (add-one/Laplace): p_{k,j} = (count(w_j, C_k) + 1) / (Σ over w∈V of count(w, C_k) + |V|), where V is the vocabulary, i.e. the set of all words.",
              "With smoothing, the slide gives for a new word: for all C_k, p('new_word'|C_k) = 1/|V|."
            ]
          },
          {
            "heading": "20 Newsgroups example (sklearn)",
            "points": [
              "Text preprocessing: CountVectorizer(min_df=0.01, max_df=0.5, stop_words='english'); x_train = fit_transform on training docs; x_test = transform on test docs. Classes: categories containing 'politics' mapped to 1, all others to 0.",
              "Discussion questions on the slide: What are stop words? Why do we set minimum and maximum document frequency (min_df, max_df)?",
              "Model: mnb = naive_bayes.MultinomialNB(alpha=0.01), where alpha is the smoothing parameter; fit on (x_train, y_train), predict on x_test, evaluate with metrics.f1_score.",
              "feature_log_prob_[k][j] is the log probability on each feature j — which is word w_j — given class k. The most distinctive features are found by sorting the difference mnb.feature_log_prob_[1,:] − mnb.feature_log_prob_[0,:]."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1a_condprob",
    "title": "Probability and Conditional Probability",
    "subtitle": "01a_conditional_prob.pdf",
    "topics": [
      {
        "id": "set-theory-and-probability",
        "title": "Set Theory, Sample Spaces, and Random Variables",
        "sections": [
          {
            "heading": "Sample space and events",
            "points": [
              "The sample space (S) is the set of all possible outcomes (w) of an experiment or random trial.",
              "An event (E) is a subset of the sample space.",
              "Example (tossing two coins): the sample space is {HH, HT, TH, TT}.",
              "{HH, HT, TH} is an event, i.e., at least one of the coins is head.",
              "{HT, TH} is also an event, i.e., exactly one of the coins is head."
            ]
          },
          {
            "heading": "Random variables and probability",
            "points": [
              "A random variable is a variable which takes a set of possible values, with each value mapping to an event.",
              "Probability is the likelihood of a random variable taking on one possible value or a set of possible values.",
              "Example (tossing two coins): let random variable X be the number of heads that appear while tossing two coins; X=1 maps to the event {HT, TH}.",
              "From the four equally likely outcomes {HH, HT, TH, TT}: Pr(X=1) = 1/2 and Pr(X>=1) = 3/4."
            ]
          }
        ]
      },
      {
        "id": "probability-axioms",
        "title": "Probability Axioms and Their Consequences",
        "sections": [
          {
            "heading": "The axioms",
            "points": [
              "Every probability is bounded: 0 <= P(E) <= 1 for all events E that are subsets of S.",
              "The whole sample space has probability 1 and the empty set has probability 0: P(S) = 1 and P(∅) = 0.",
              "The inclusion-exclusion (union) rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B); the intersection is subtracted so it is not double-counted (illustrated with the Venn diagram of A, B, A ∩ B, A ∪ B inside S)."
            ]
          },
          {
            "heading": "Consequences of the axioms",
            "points": [
              "Complement rule: P(Ā) = 1 − P(A), i.e., the probability that A does not happen is one minus the probability it happens.",
              "Partition (splitting) rule: P(A) = P(A ∩ B) + P(A ∩ B̄), i.e., event A can be split into the part that overlaps B and the part that overlaps not-B."
            ]
          }
        ]
      },
      {
        "id": "conditional-probability-and-independence",
        "title": "Conditional Probability and Independence",
        "sections": [
          {
            "heading": "Conditional probability",
            "points": [
              "Definition: conditional probability is a measure of the probability of an event given that (by assumption, presumption, assertion or evidence) another event has occurred.",
              "More formally: given two events A and B with P(B) > 0, the conditional probability of A given B is defined as P(A|B) = P(A,B) / P(B).",
              "The condition P(B) > 0 is required because you cannot condition on an event that has zero probability (division by zero).",
              "Slide example 1 (tossing two coins): knowing one of the coins is head, what is the probability of having 2 heads? Using the formula: P(HH | at least one head) = (1/4) / (3/4) = 1/3.",
              "Slide example 2 (daily standup): knowing Rob is on leave, what is the probability of having a standup meeting longer than 30 minutes?"
            ]
          },
          {
            "heading": "Independence",
            "points": [
              "Definition: two events are independent if knowing the outcome of one provides no useful information about the outcome of the other.",
              "More formally, independence means P(A|B) = P(A) — conditioning on B does not change the probability of A.",
              "Slide example 1 (tossing two coins): given the first coin is head, the probability that the second is also head is unchanged (1/2) — the coins are independent.",
              "Slide example 2 (rolling two dice): given the first die is 5, the probability that the second is larger than 3 is unchanged (3/6 = 1/2) — the dice are independent.",
              "The slide's Venn picture for independence draws A and B in two separate copies of S, emphasising that neither event constrains the other."
            ]
          }
        ]
      },
      {
        "id": "marginal-and-joint-distributions",
        "title": "Marginal and Joint Distributions",
        "sections": [
          {
            "heading": "Definitions and rules",
            "points": [
              "Marginal distribution: the probability distribution of a subset of the collection of random variables.",
              "Joint distribution: the probability distribution of multiple random variables together, written P(X,Y).",
              "Product rule: P(X,Y) = P(X|Y) P(Y) — a joint probability factors into a conditional times a marginal.",
              "Sum rule: P(X) = Σ_Y P(X,Y) — marginalise (sum) the joint distribution over the other variable to get a marginal."
            ]
          },
          {
            "heading": "Worked example: two random variables (the 32nds table)",
            "points": [
              "The slides give a joint table P(X,Y) over X in {x1, x2, x3, x4} and Y in {y1, y2, y3, y4} with all entries in 32nds.",
              "Row y1: 4/32, 2/32, 1/32, 1/32; row y2: 2/32, 4/32, 1/32, 1/32; row y3: 2/32, 2/32, 2/32, 2/32; row y4: 8/32, 0, 0, 0.",
              "Marginal P(Y): summing each row gives P(Y=y1) = P(Y=y2) = P(Y=y3) = P(Y=y4) = 8/32 (i.e., 1/4 each).",
              "Marginal P(X): summing each column gives P(X=x1) = 16/32, P(X=x2) = 8/32, P(X=x3) = 4/32, P(X=x4) = 4/32; all marginals sum to 1.",
              "(Note: slide 8's column header 'x1, x1, x3, x4' is a typo; slide 9 corrects it to x1, x2, x3, x4.)"
            ]
          },
          {
            "heading": "Law of total probability and conditioning from the table",
            "points": [
              "Total probability for X: P(X=x) = Σᵢ P(Y=yᵢ) P(X=x | Y=yᵢ).",
              "Total probability for Y: P(Y=y) = Σᵢ P(X=xᵢ) P(Y=y | X=xᵢ).",
              "Conditional probability from the table: P(Y=y1 | X=x1) = P(Y=y1, X=x1) / P(X=x1) = (4/32) / (16/32) = 1/4."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1a_linalg",
    "title": "Linear Algebra for Machine Learning",
    "subtitle": "01b_linear_algebra.pdf",
    "topics": [
      {
        "id": "projection-and-dot-product",
        "title": "Projection and the Dot Product",
        "sections": [
          {
            "heading": "The deck's motivating example",
            "points": [
              "The lecture connects three ideas in a triangle: Projection, Distance, and Normal Distribution — each concept links to the other two.",
              "Given w = (2, 1) and three vectors x₁ = (0, 3), x₂ = (1, 1), x₃ = (2, −1), the slide asks: what is w·x for each?",
              "Surprisingly, all three dot products are equal: w·x₁ = w·x₂ = w·x₃ = 3 (check: 2·0+1·3 = 3, 2·1+1·1 = 3, 2·2+1·(−1) = 3).",
              "The geometric explanation: w·x is where x projects on vector w, so w·x = 3 describes ALL vectors x that project onto w at the same point.",
              "In the slide's figure, x₁, x₂ and x₃ all lie on one dotted line that crosses w at a right angle — that line is the set of points with equal projection."
            ]
          },
          {
            "heading": "Hyperplanes of equal projection",
            "points": [
              "In a d-dimensional space, all vectors with the same projection on vector w form a (d−1)-dimensional orthogonal subspace, called a hyperplane.",
              "In 3D space, these equal-projection sets are planes (the slide shows several parallel planes stacked along the direction of w).",
              "The slide poses the key question: is the distance between the two hyperplanes w·x = 0 and w·x = 1 equal to 1? The answer is no unless |w| = 1 — the true gap is 1/|w|, which motivates normalizing w."
            ]
          }
        ]
      },
      {
        "id": "distance-and-unit-vectors",
        "title": "Distance on Projected Space and Unit Vectors",
        "sections": [
          {
            "heading": "When does the projected value equal a distance?",
            "points": [
              "The projected value w·x represents an actual distance if and only if w is a unit vector, i.e., |w| = 1.",
              "For w = (2, 1), |w| = √5, so w normalizes to the unit vector ŵ = (2√5/5, √5/5) — that is, each component of w divided by √5.",
              "Using the unit vector, the true distance of the projection is ŵ·x₁ = ŵ·x₂ = ŵ·x₃ = 3√5/5 (which is 3/√5 ≈ 1.342), not 3.",
              "The slide then previews the statistics link: project a set of vectors x onto a vector w, and suppose we find a Gaussian distribution centered at 2 with variance 1 — the deck asks 'What does this mean?', setting up the normal-distribution half of the lecture."
            ]
          },
          {
            "heading": "Projection with two unit vectors (orthonormal basis)",
            "points": [
              "An orthonormal basis is a set of unit vectors which are mutually orthogonal; in 2D this means |e₁| = 1, |e₂| = 1 and e₁·e₂ = 0.",
              "Stacking the basis vectors as columns defines an orthogonal matrix Q = [e₁ e₂] = [[cos θ, −sin θ], [sin θ, cos θ]], where θ is the angle between e₁ and the horizontal axis.",
              "The new coordinate of a point x in the rotated basis is z = (e₁ᵀx, e₂ᵀx) = Qᵀx — each coordinate is just the projection of x onto one basis vector.",
              "For a whole dataset X whose rows are x₁ᵀ, x₂ᵀ, …, xₙᵀ, the transformed dataset is Z = XQ (row form of z = Qᵀx applied to every point)."
            ]
          }
        ]
      },
      {
        "id": "normal-distributions",
        "title": "Normal Distributions in 1D and 2D",
        "sections": [
          {
            "heading": "1D normal (Gaussian) distributions",
            "points": [
              "The slide shows four 1D Gaussians: μ = 0 with σ² = 0.2 (tall, narrow), μ = 0 with σ² = 1.0 (the standard normal), μ = 0 with σ² = 5.0 (short, wide), and μ = −2 with σ² = 0.5 (shifted left).",
              "The empirical rule from the second figure: 68% of the data lie within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations.",
              "The deck then asks: what about normal distributions in 2D?"
            ]
          },
          {
            "heading": "Probability contours in 2D",
            "points": [
              "A bivariate normal distribution with correlation rho = 0.5 has elliptical probability contours (the slide shows both the 3D density surface and the 2D contour plot).",
              "Puzzle from the slide: points A and B sit on the same probability contour, so their probabilities are the same — even though A seems much nearer to the center in ordinary Euclidean terms.",
              "The resolution is that distance in a correlated Gaussian must be measured along the ellipse's own axes and scales, not with raw Euclidean distance."
            ]
          },
          {
            "heading": "Translation, rotation and scaling",
            "points": [
              "The slide transforms the elliptical contours in three steps: Translation (move the center to the origin), Rotation (align the ellipse axes with the coordinate axes), and Scaling (stretch each axis so the contours become circles).",
              "After all three transformations, A and B are having the same distance from the center — matching the fact that they had equal probability density."
            ]
          }
        ]
      },
      {
        "id": "matrix-transformations",
        "title": "Piecing Together: Matrix Transformations and Working Backwards",
        "sections": [
          {
            "heading": "Piecing together the intuition",
            "points": [
              "Translation is easy: multi-dimensional data are translated just like 1-D data (subtract the mean).",
              "Rotations are projections on a new orthonormal basis, which is a set of orthogonal unit vectors.",
              "After rotation, the dimensions are independent; after scaling, the probability contours are all round.",
              "If two points are equi-distant from the center after rotation and scaling, they will have the same probability density; further from the center means lower probability.",
              "The crucial gap the deck highlights: how to identify the orthonormal basis?"
            ]
          },
          {
            "heading": "The three transformations as matrix operations",
            "points": [
              "Translation: Ẍ is formed by subtracting the mean row x̄ᵀ from every row of X, i.e., row i of Ẍ is xᵢᵀ − x̄ᵀ.",
              "Rotation: Z = ẌQ projects the centered data onto the orthonormal basis in Q.",
              "Scaling: V = ZΛ⁻¹ where Λ is a diagonal matrix with entries λ₁, …, λ_d, so multiplying by Λ⁻¹ divides coordinate j by λⱼ (the slide labels λ₁ and λ₂ as the semi-axis lengths of the ellipse).",
              "After all three steps, V follows the standard normal distribution in 2D."
            ]
          },
          {
            "heading": "Working backwards to find Q and Λ",
            "points": [
              "Because V is standard normal, VᵀV = nI — the variance-covariance matrix of a standard normal distribution should be the identity.",
              "Substituting V = ZΛ⁻¹ = ẌQΛ⁻¹ gives VᵀV = Λ⁻¹QᵀẌᵀẌQΛ⁻¹ = nI.",
              "Rearranging: (1/n)ẌᵀẌ = QΛ²Qᵀ, using Q⁻¹ = Qᵀ since Q is an orthogonal matrix.",
              "Therefore, to find Q and Λ, use eigendecomposition (into pairs of eigenvalue and eigenvector) on the variance-covariance matrix Σ = (1/n)ẌᵀẌ."
            ]
          }
        ]
      },
      {
        "id": "mahalanobis-and-pca",
        "title": "Mahalanobis Distance and Principal Component Analysis",
        "sections": [
          {
            "heading": "Mahalanobis distance",
            "points": [
              "Mahalanobis distance is distance in a multivariate normal distribution: in the final transformed space, the distance from a point v to the center is √(vᵀv), which is the standard Euclidean distance.",
              "Since vᵀ = ẍᵀQΛ⁻¹ = (xᵀ − x̄ᵀ)QΛ⁻¹, expanding gives √(vᵀv) = √((xᵀ − x̄ᵀ)QΛ⁻²Qᵀ(x − x̄)) = √((xᵀ − x̄ᵀ)Σ⁻¹(x − x̄)).",
              "This closed form — Euclidean distance after undoing translation, rotation and scaling — is the Mahalanobis distance."
            ]
          },
          {
            "heading": "Multivariate normal density",
            "points": [
              "Multivariate normal density function: p(x|μ, Σ) = 1/√((2π)^d |Σ|) · exp(−½ (xᵀ − μᵀ) Σ⁻¹ (x − μ)) — the exponent is minus half the squared Mahalanobis distance.",
              "The slide asks you to compare with the 1D normal density p(x|μ, σ) = 1/(σ√(2π)) · exp(−½((x − μ)/σ)²): |Σ| generalizes σ², Σ⁻¹ generalizes 1/σ², and (x−μ)/σ generalizes the whitening transform."
            ]
          },
          {
            "heading": "The PCA algorithm (5 steps)",
            "points": [
              "PCA takes input X and a number k << d.",
              "Step 1: Compute the mean x̄ = (1/n) Σᵢ₌₁ⁿ xᵢ.",
              "Step 2: Obtain the matrix Ẍ by subtracting x̄ from each row of X.",
              "Step 3: Compute the variance-covariance matrix Σ ← (1/n) ẌᵀẌ (note: divide by n, not n−1, in this deck's convention).",
              "Step 4: {λᵢ, eᵢ} for i = 1…d are the pairs of eigenvalue and eigenvector of Σ, sorted so λ₁ ≥ λ₂ ≥ … ≥ λₙ.",
              "Step 5: Select the top-k eigenvectors {e₁, e₂, …, e_k} as the principal components."
            ]
          }
        ]
      },
      {
        "id": "other-ml-applications",
        "title": "Other Applications in Machine Learning",
        "sections": [
          {
            "heading": "Where this linear algebra shows up",
            "points": [
              "Linear models: the score is sometimes w·x and sometimes w·x + b — to be explained in the next lesson.",
              "Gaussian Naïve Bayes classifiers use the (1D) normal density per feature.",
              "Gaussian Mixture Models use the multivariate normal density with Mahalanobis distance inside the exponent.",
              "Truncated SVD is similar to PCA as a dimensionality-reduction technique."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1a_infotheory",
    "title": "Information Theory",
    "subtitle": "01c_info_theory.pdf",
    "topics": [
      {
        "id": "logarithm-and-gestures",
        "title": "Logarithm: Counting Gestures to Describe an Outcome",
        "sections": [
          {
            "heading": "The ball-in-a-bag game (slide 4)",
            "points": [
              "Setup: pick one ball from an opaque bag with 4 balls; the question is 'What color is the picked ball?', given that the color counts are known in advance.",
              "Case 1 — all 4 balls are black: there is nothing to communicate ('Why ask?'), because the answer is certain; this corresponds to log₂ 1 = 0 gestures.",
              "Case 2 — two balls are red and two are blue: one gesture suffices (e.g. 'blink your left eye' to signal red); this corresponds to log₂ 2 = 1 gesture.",
              "Case 3 — four distinct colors (light-red, dark-red, light-blue, dark-blue): two gestures are needed (e.g. 'blink your left AND your right eye'); this corresponds to log₂ 4 = 2 gestures.",
              "The number of binary gestures needed to identify one of k equally likely outcomes is log₂ k."
            ]
          },
          {
            "heading": "Scaling up: fingers as bits (slide 5)",
            "points": [
              "If there are 8 colors distributed evenly, you need 3 fingers (binary signals) to tell what color it is; 16 colors need 4 fingers; ...; 4096 colors need 12 fingers.",
              "The lower the probability of picking one color, the more gestures are needed to describe that color.",
              "This motivates asking: log₂ probability = ? The slide computes log₂(1/8) = −3, log₂(1/16) = −4, and log₂(1/4096) = −12.",
              "So for an outcome with probability p, the description length is −log₂ p gestures (the negative sign flips the negative logarithm of a fraction into a positive count)."
            ]
          }
        ]
      },
      {
        "id": "uncertainty-and-expected-uncertainty",
        "title": "Uncertainty and Expected Uncertainty",
        "sections": [
          {
            "heading": "Quantifying uncertainty of one outcome (slide 6)",
            "points": [
              "Uncertainty = the number of gestures needed to describe the outcome; more uncertain = more gestures needed.",
              "Uncertainty is quantified as −log₂(probability) = −log(probability).",
              "Convention on this deck (boxed note): if the base is not specified, log means log₂ throughout the course.",
              "Aggregation example with three ball colors: Pr(Red Ball) = 1/2 → 'blink your left eye' (1 gesture); Pr(Blue Ball) = 1/4 → 'blink right eye then left' (2 gestures); Pr(Green Ball) = 1/4 → 'blink right eye twice' (2 gestures)."
            ]
          },
          {
            "heading": "Expected uncertainty (slide 7)",
            "points": [
              "On expectation, the number of gestures needed for the Red/Blue/Green example is (1/2)×1 + (1/4)×2 + (1/4)×2 = 1.5 gestures.",
              "Recall that the uncertainty of a single outcome is −log(prob), and each outcome's gesture count equals its uncertainty (−log₂(1/2)=1, −log₂(1/4)=2).",
              "Expected uncertainty = −p₁ log p₁ − p₂ log p₂ − ... − pₙ log pₙ = −Σᵢ₌₁ⁿ pᵢ log pᵢ, where pᵢ is the probability of outcome i.",
              "Expected uncertainty is a probability-weighted average of per-outcome uncertainties — this is exactly what will be named entropy."
            ]
          }
        ]
      },
      {
        "id": "entropy",
        "title": "Entropy: Definition, Binary Case, Multinomial Case",
        "sections": [
          {
            "heading": "Formal definition (slide 8)",
            "points": [
              "Entropy = Expected Uncertainty = −Σ pᵢ log pᵢ.",
              "More formally: X is a random variable; {x₁, x₂, ..., xₙ} are the outcomes of X; pᵢ = Pr(X = xᵢ) is the probability that X = xᵢ.",
              "Entropy: H(X) = −Σᵢ₌₁ⁿ pᵢ log pᵢ (with log base 2 by the deck's convention, so entropy is measured in bits/gestures)."
            ]
          },
          {
            "heading": "Binary case (slide 9)",
            "points": [
              "In the binary case: H(X) = −p₀ log p₀ − p₁ log p₁, where p₀ = Pr(X=0) is the probability X does not happen, p₁ = Pr(X=1) is the probability X happens, and p₀ + p₁ = 1.",
              "When p₀ = 1 or p₁ = 1, X is totally certain, thus H(X) = 0.",
              "When p₀ = p₁ = 0.5, X is most uncertain, thus H(X) = 1.",
              "The slide shows the binary entropy curve (from en.wikipedia.org/wiki/Entropy_(information_theory)): an inverted-U over Pr(X=1) from 0 to 1, peaking at H(X)=1 when Pr(X=1)=0.5 and hitting 0 at both ends."
            ]
          },
          {
            "heading": "Multinomial case and maximum entropy (slide 10)",
            "points": [
              "It is more uncertain to throw a die than flip a coin: H(die) = 6 × (−(1/6) log (1/6)) = log 6 > log 2 = H(coin).",
              "Discussion question posed on the slide: is it possible to have a die with LOWER entropy than a coin? (Yes — a sufficiently biased die, e.g. one that almost always shows the same face, can have entropy below 1 bit.)",
              "Entropy generalizes well in the multinomial case.",
              "The maximum entropy is log n, where n is the number of outcomes — achieved by the uniform distribution."
            ]
          }
        ]
      },
      {
        "id": "conditional-entropy-and-mutual-information",
        "title": "Conditional Entropy and Mutual Information",
        "sections": [
          {
            "heading": "Two-bag example (slide 11)",
            "points": [
              "Setup: an opaque red bag contains two balls (one light-red, one dark-red); another opaque blue bag contains two balls (one light-blue, one dark-blue).",
              "Question: what is the uncertainty of the ball's color GIVEN it is known from which bag the ball is picked?",
              "Conditional Entropy H(X|Y) is the amount of uncertainty of variable X conditioned on variable Y.",
              "In this example, either bag will give an entropy of 1 (two equally likely shades within each bag), thus the conditional entropy is 1."
            ]
          },
          {
            "heading": "Conditional entropy formula and extremes (slide 12)",
            "points": [
              "Entropy restated: H(X) = −Σ_{xᵢ} p(X=xᵢ) log p(X=xᵢ).",
              "Conditional Entropy is the remaining uncertainty when the other variable is known: H(X|Y) = Σ_{yⱼ} p(Y=yⱼ) H(X|Y=yⱼ) — a probability-weighted average of the entropy within each value of Y.",
              "If Y determines X, the conditional entropy of X given Y is 0.",
              "If X and Y are independent, the conditional entropy is the same as the original entropy: H(X|Y) = H(X).",
              "The slide shows the Venn diagram (from en.wikipedia.org/wiki/conditional_entropy): H(X) and H(Y) as overlapping circles, with H(X|Y) and H(Y|X) as the non-overlapping parts, I(X;Y) as the overlap, and H(X,Y) as the union; it then asks in red: 'what is the information Y provides about X?'"
            ]
          },
          {
            "heading": "Mutual information (slides 13-14)",
            "points": [
              "Information is the 'potential' to resolve uncertainty.",
              "Mutual Information I(X;Y) is how much uncertainty can be resolved by the other variable — the overlap region in the Venn diagram.",
              "If X determines Y: H(Y) = I(X;Y). If Y determines X: H(X) = I(X;Y).",
              "If X and Y are independent, I(X;Y) = 0, and equivalently the conditional entropy equals the original entropy.",
              "Implicit from the Venn diagram: I(X;Y) = H(X) − H(X|Y) = H(Y) − H(Y|X), i.e. information gained about X by observing Y."
            ]
          }
        ]
      },
      {
        "id": "cross-entropy-and-kl-divergence",
        "title": "Cross Entropy, KL Divergence, and Entropy in ML",
        "sections": [
          {
            "heading": "Coding-scheme example (slides 15-16)",
            "points": [
              "Cross entropy measures the difference between two distributions on the same set of event space.",
              "Setup: five possible outcomes 1, 2, 3, 4, 5 with MY estimated probability distribution q = (0.5, 0.125, 0.125, 0.125, 0.125).",
              "An optimal coding scheme for q assigns codes: outcome 1 → '0' (1 bit), outcomes 2,3,4,5 → '100', '101', '110', '111' (3 bits each).",
              "Under q, the expected number of bits is 0.5×1 + 0.125×3 + 0.125×3 + 0.125×3 + 0.125×3 = 2, which is the same as the entropy H(q).",
              "However, if the ACTUAL distribution is p = (0.25, 0.25, 0.25, 0.125, 0.125), the expected bits using q's code become 0.25×1 + 0.25×3 + 0.25×3 + 0.125×3 + 0.125×3 = 2.5.",
              "If there were a coding scheme optimized for p instead, the expected number of bits would be H(p) = −Σ pᵢ log(pᵢ) = 2.25."
            ]
          },
          {
            "heading": "Cross entropy definition and KL divergence (slides 17-18)",
            "points": [
              "Cross Entropy is the uncertainty of distribution p when using a coding scheme optimized for distribution q: H(p, q) = −𝔼ₚ log q.",
              "If p and q are the same, then H(p, q) = H(p); otherwise it is expected that H(p, q) > H(p).",
              "In the running example, H(p, q) = 2.5 > H(p) = 2.25.",
              "In general, the better q approximates p, the closer the gap H(p, q) − H(p); this gap is in fact the KL-divergence.",
              "The other name for Kullback-Leibler divergence is relative entropy: D_KL(p‖q) = H(p, q) − H(p). In the example D_KL = 2.5 − 2.25 = 0.25.",
              "Slide 18 visualizes this on a probability simplex with p = (0.5, 0.3, 0.2): contours represent values of H(p, q) with a fixed p, and D_KL(p‖q) is the difference between the two values H(p, q) and H(p)."
            ]
          },
          {
            "heading": "Cross entropy as a classification loss (slide 19)",
            "points": [
              "Cross Entropy is a common loss function for multi-class classification.",
              "q is the model's estimated probability for all classes, e.g. q = (0.125, 0.5, 0.25, 0.125) for classes 1, 2, 3, 4.",
              "If the true label is 1, i.e. p = (1, 0, 0, 0): H(p,q) = −log₂ 0.125 = 3. If the true label is 2, i.e. p = (0, 1, 0, 0): H(p,q) = −log₂ 0.5 = 1. If the true label is 3, i.e. p = (0, 0, 1, 0): H(p,q) = −log₂ 0.25 = 2.",
              "There is a higher penalty for lower probability predicted on the true label.",
              "Aggregating across all predictions gives a measure on the entire prediction (the total/average cross-entropy loss)."
            ]
          },
          {
            "heading": "Where entropy shows up in machine learning (slide 20)",
            "points": [
              "Decision Trees (entropy/information gain used for choosing splits).",
              "Mutual Information (e.g. feature relevance).",
              "Cross entropy — a common loss function for multiclass classification.",
              "Other distance metrics and measures, especially on discrete variable space."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2_regression",
    "title": "Week 2: Regression",
    "subtitle": "02_regression.pdf",
    "topics": [
      {
        "id": "supervised-learning-and-regression-setup",
        "title": "Supervised Learning and the Regression Setup",
        "sections": [
          {
            "heading": "Motivating example: wedding ang pow",
            "points": [
              "The deck opens with a table of wedding ang pow rates: 3-star Dinner Weekday = 120, 3-star Lunch Weekend = 140, 4-star Lunch Weekend = 150, 4-star Dinner Weekend = 180, 5-star Lunch Weekend = 190, 5-star Dinner Weekend = 240, 5-star Dinner Weekday = 200.",
              "The prediction question posed: how much should I prepare for a wedding dinner held at a 4-star hotel on a weekday? This combination is NOT in the table, so we must learn a function from the observed data to predict an unseen case.",
              "This illustrates the core regression task: predict a numeric value (the rate) from input attributes (hotel star level, lunch/dinner, weekday/weekend)."
            ]
          },
          {
            "heading": "Supervised learning framework",
            "points": [
              "Supervised learning assumes an unknown function f mapping input x to output y = f(x); we learn a hypothesis h(x) that approximates f(x), written h(x) ≈ f(x).",
              "Classification produces discrete output: binary classification maps input x to y in {-1, +1}; multi-class classification maps input x to y in {1, ..., k}.",
              "Regression produces continuous output: given input x, find y in real-valued space ℝ (or ℝᵈ).",
              "The slide shows a scatter plot of x (roughly 800-2700) against y (roughly 170-500) as a typical regression dataset."
            ]
          },
          {
            "heading": "A learning problem: three design decisions",
            "points": [
              "Every learning problem involves three components: Representation (linear? non-linear? trees? neural networks?), Evaluation, and Optimization.",
              "For a fitted line h(x), the residual for point i is h(xᵢ) − yᵢ = ŷᵢ − yᵢ, drawn as vertical red dotted segments between the points and the line.",
              "The slide writes the sum of residuals as Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ] = Σᵢ₌₁ⁿ (ŷᵢ − yᵢ), motivating the need for a proper (squared) error measure since raw residuals can cancel."
            ]
          }
        ]
      },
      {
        "id": "linear-regression",
        "title": "Linear Regression: Formulation, Multivariable Form, and Optimization",
        "sections": [
          {
            "heading": "Formulation of simple linear regression",
            "points": [
              "Hypothesis: h(x) = w₁x + w₀, with parameters w₀ (intercept) and w₁ (slope).",
              "Cost function: Mean Squared Error (MSE), J(w₀, w₁) = (1/n) Σᵢ₌₁ⁿ [h(xᵢ) − yᵢ]². Note the deck divides by n (not n−1, and no 1/2 factor).",
              "Goal: min over w₀, w₁ of J(w₀, w₁) — choose the parameters that minimize the mean squared error."
            ]
          },
          {
            "heading": "Simple linear regression example (house prices)",
            "points": [
              "Example dataset: Size in feet² (x) vs Price ($) in 1000's (y): (2104, 460), (1416, 232), (1534, 315), (852, 178), ...",
              "x is called the input variable or explanatory variable; y is the output variable or target variable.",
              "In code: data_house = pd.read_csv('dataset/house_price.tsv', sep='\\t'); x = data_house[['size']].values; y = data_house['price'].values; then from sklearn import linear_model; regr = linear_model.LinearRegression(); regr.fit(x, y)."
            ]
          },
          {
            "heading": "Multivariable linear regression",
            "points": [
              "The house example is extended to multiple features: Size (feet²), Number of bedrooms, Number of floors, Age of home (years) → Price ($1000). E.g. row 1: 2104, 5 bedrooms, 1 floor, 45 years, price 460.",
              "Notation: m = number of features (variables); xᵢ = input (features) of the iᵗʰ training example; xᵢⱼ = value of feature j in the iᵗʰ training example.",
              "Hypothesis becomes h(x) = w₀ + w₁x₁ + w₂x₂ + ... + wₘxₘ for x ∈ ℝᵐ.",
              "For convenience of notation, define x₀ = 1; then h(x) = Σⱼ₌₀ᵐ wⱼxⱼ = w·x = wᵀx, with x ∈ ℝᵐ⁺¹ and w ∈ ℝᵐ⁺¹ — the intercept is absorbed as the weight on the constant feature x₀."
            ]
          },
          {
            "heading": "MSE in matrix form",
            "points": [
              "J(w) = (1/n) Σᵢ₌₁ⁿ (wᵀxᵢ − yᵢ)² = (1/n)(Xw − y)ᵀ(Xw − y).",
              "Dimensions: X is n × (m+1) (each row i is xᵢ₀, xᵢ₁, ..., xᵢₘ with xᵢ₀ = 1), w is (m+1) × 1, and y is n × 1; the first row of Xw − y is wᵀx₁ − y₁.",
              "Model parameters in sklearn are the Coefficients and the Intercept: after regr.fit(x, y), print regr.coef_ and regr.intercept_. Choosing w₀, w₁ is, in short, model.fit(x, y)."
            ]
          },
          {
            "heading": "Optimization: closed-form / analytical solution (marked Optional)",
            "points": [
              "For simple linear regression, set partial derivatives to zero: ∂J/∂w₀ = (2/n) Σᵢ₌₁ⁿ (w₀ + w₁xᵢ − yᵢ) = 0 and ∂J/∂w₁ = (2/n) Σᵢ₌₁ⁿ xᵢ(w₀ + w₁xᵢ − yᵢ) = 0.",
              "Solving gives closed forms: w₀ = [Σxᵢ² Σyᵢ − Σxᵢ Σxᵢyᵢ] / [n Σxᵢ² − (Σxᵢ)²] and w₁ = [n Σxᵢyᵢ − Σxᵢ Σyᵢ] / [n Σxᵢ² − (Σxᵢ)²].",
              "For multivariable regression: ∇J(w) = XᵀXw − Xᵀy; setting it to zero gives the normal equation XᵀXw = Xᵀy.",
              "Analytical solution: w = ((XᵀX)⁻¹Xᵀ)y = X†y, where X† = (XᵀX)⁻¹Xᵀ is the pseudo-inverse.",
              "The slide explicitly notes in red: 'These formulae are not important, for you to understand the complexity of analytical solutions only' — the exam point is understanding WHY iterative methods like gradient descent are used instead.",
              "A visualization slide fits sklearn LinearRegression on the diabetes dataset (feature column 2) and plots the red scatter with the fitted blue line using plt.scatter and regr.predict over np.arange(min(x), max(x), (max(x)-min(x))/200)."
            ]
          }
        ]
      },
      {
        "id": "polynomial-regression",
        "title": "Polynomial Regression and Hypothesis Space",
        "sections": [
          {
            "heading": "Hypothesis space",
            "points": [
              "Linear models h(x) = Σⱼ₌₀ᵐ wⱼxⱼ = wᵀx admit infinite possible hypotheses — any choice of coefficient vector w gives a possible hypothesis.",
              "Polynomial models: h(x) = ax² + bx + c can be written as (a b)(x², x)ᵀ + c — i.e., a LINEAR model over the transformed features (x², x).",
              "Two-variable quadratic example from the slide: h(x) = ax₁² + bx₁x₂ + cx₂² + dx₁ + ex₂ + f.",
              "Key idea: map each explanatory variable to a higher order space, then fit a linear model in the higher order space — polynomial regression is linear regression on expanded features."
            ]
          },
          {
            "heading": "Polynomial models in sklearn",
            "points": [
              "Use from sklearn import preprocessing; poly2 = preprocessing.PolynomialFeatures(2); x2 = poly2.fit_transform(x) to create degree-2 features.",
              "Split data with model_selection.train_test_split(x2, y, test_size=0.2, random_state=2019), fit LinearRegression on x2_train, y2_train.",
              "Evaluate with regr2.score(x2_test, y2_test) which prints the R² score; inspect regr2.coef_ and poly2.powers_ to see which power combination each coefficient belongs to."
            ]
          },
          {
            "heading": "Regression without intercept",
            "points": [
              "If there exists a constant term in the feature expansion, the coefficient of the constant term is actually the intercept.",
              "A no-intercept model can be achieved by polynomial models: use linear_model.LinearRegression(fit_intercept=False) so no separate intercept is fitted (the constant feature's coefficient plays that role).",
              "The slide compares printing Coefficients/Intercept for the model with intercept (regr2) versus with no intercept (regr2_no_intercept)."
            ]
          }
        ]
      },
      {
        "id": "gradient-descent",
        "title": "Gradient Descent",
        "sections": [
          {
            "heading": "Idea and algorithm",
            "points": [
              "Given some objective function J(w₀, w₁), we aim to optimize min over w₀, w₁ of J(w₀, w₁).",
              "Steps: start with some w₀, w₁; keep changing w₀, w₁ to reduce J(w₀, w₁) until we hopefully end up at a minimum.",
              "General gradient descent algorithm: initialize wⱼ for all j = 0, 1, ...; repeat until convergence { wⱼ ← wⱼ − α · ∂J(w)/∂wⱼ } where α is the learning rate.",
              "CRITICAL detail highlighted on the slide: update w₀, w₁, ..., wⱼ SIMULTANEOUSLY — compute all partial derivatives at the current point before updating any parameter.",
              "Two 3D surface plots of J(w₀, w₁) show that starting from different initial points, gradient descent can walk down into DIFFERENT valleys (different minima)."
            ]
          },
          {
            "heading": "Convex vs non-convex functions",
            "points": [
              "A real-valued function f is convex if f(tx₁ + (1−t)x₂) ≤ t·f(x₁) + (1−t)·f(x₂) for all x₁, x₂ and t ∈ [0, 1] — the function lies BELOW the linear interpolation from x₁ to x₂.",
              "Convex implies that all local minima are global minima, so gradient descent cannot get stuck in a bad valley.",
              "For a non-convex function, gradient descent may stop at a local minimum instead of the global minimum: 'The final solution is sensitive to initialization.'"
            ]
          },
          {
            "heading": "Mini-batch gradient descent",
            "points": [
              "Evaluating the sum of the gradient over all n examples may be expensive.",
              "To save the cost at each iteration, mini-batch gradient descent samples a SUBSET of the summand gradients: w = w − α∇w J(w) = w − α∇w Σᵢ₌₁ⁿ j(w; xᵢ, yᵢ) becomes w = w − α∇w Σᵢ₌₁ᵏ j(w; xᵢ, yᵢ) with k < n sampled examples.",
              "The slide poses the question: What is Stochastic Gradient Descent? (SGD is the extreme case: batch of k = 1 example per update.)"
            ]
          },
          {
            "heading": "Convergence and learning rate",
            "points": [
              "The convergence curve plots min J(w) against the number of iterations (0 to 400), decreasing and flattening out.",
              "Deck's convergence criterion: declare convergence if J(w) decreases by less than 10⁻³ in one iteration.",
              "For sufficiently small α, J(w) should decrease on EVERY iteration; but if α is too small, gradient descent can be slow to converge.",
              "If α is too large, J(w) may not decrease on every iteration and may not converge — the slide's three pictures label the cases 'too small constant' (many tiny steps), 'too large' (overshooting, divergence), and 'Just nice'."
            ]
          }
        ]
      },
      {
        "id": "regularization-bias-variance",
        "title": "Bias-Variance, Overfitting, and Regularization",
        "sections": [
          {
            "heading": "Understanding bias and variance",
            "points": [
              "Error in regression: y − ŷ = f(x) − h(x); Sum of Squared Residues: SSᵣₑₛ = Σᵢ (ŷᵢ − yᵢ)².",
              "Bias: an error from erroneous assumptions in the learning algorithm. Variance: an error from the small fluctuation of datasets.",
              "Decomposition: 𝔼[(f(x) − h(x))²] = Bias²(h(x)) + Var(h(x)) + σ², where Bias(h(x)) = 𝔼[h(x)] − f(x) and Var(h(x)) = 𝔼[(h(x))²] − (𝔼[h(x)])².",
              "The dartboard picture shows the four combinations: low bias + low variance (tight cluster on bullseye), low bias + high variance (spread around bullseye), high bias + low variance (tight cluster off-center), high bias + high variance (spread and off-center)."
            ]
          },
          {
            "heading": "Overfitting vs underfitting and model complexity",
            "points": [
              "House-price example with three fits: w₀ + w₁x (straight line, underfits), w₀ + w₁x + w₂x² (good fit), and w₀ + w₁x + w₂x² + w₃x³ + w₄x⁴ (wiggly curve, overfits).",
              "Overfitting: if we have too many features (complicated predictor), the learned hypothesis may fit the training set very well, but fails to generalize to new examples (predict prices on new examples).",
              "The model-complexity plot shows Empirical Error (training error, red) decreasing monotonically with complexity while True Error (green) is U-shaped: the regions are labelled underfitting → Best model → overfitting.",
              "Empirical error (training error) is no longer a good indicator of true error once we overfit. Example axis: regression with polynomials of order k = 0, 1, 2, ...; higher degree → higher complexity."
            ]
          },
          {
            "heading": "Occam's Razor and how to address overfitting",
            "points": [
              "Occam's Razor — William of Ockham (1285–1347), Principle of Parsimony: 'One should not increase, beyond what is necessary, the number of entities required to explain anything.' Alternatively, seek the simplest explanation.",
              "Remedy 1 — Reduce number of features: manually select which features to keep, or use model selection algorithms.",
              "Remedy 2 — Regularization: incorporate model complexity into optimization, penalize complex models using prior knowledge; keep ALL the features but reduce the magnitude/values of model parameters; works well when we have a lot of features, each of which contributes a bit to the prediction."
            ]
          },
          {
            "heading": "Regularization framework and practice",
            "points": [
              "Regularized learning framework: h* = arg min over h ∈ ℋ of {J(h) + C(h)}, where C(h) is the cost of model / model complexity.",
              "In practice, instead of minimizing J(w; X, y) alone, minimize C·J(w; X, y) + ‖w‖, or equivalently J(w; X, y) + α·‖w‖.",
              "‖w‖ represents the complexity of the model. Large C: trade off model complexity for better performance; Small C: trade off performance for less model complexity.",
              "In linear models, ‖w‖ is often the L₁-norm or L₂-norm of the model parameter w. The slide names Regularized Linear Regression 'rigid regression' (i.e., ridge regression).",
              "The L1 vs L2 picture: L1's constraint region is a diamond (corners on the axes, so the optimum w* often lands on an axis → sparse weights), L2's is a circle (w* is pulled toward the origin but rarely exactly zero)."
            ]
          },
          {
            "heading": "Ridge, Lasso, and Elastic Net",
            "points": [
              "Ridge: min over w of {J(w) + α‖w‖₂²}, where ‖w‖₂ = √(Σⱼ₌₁ᵈ wⱼ²).",
              "Lasso: min over w of {J(w) + α‖w‖₁}, where ‖w‖₁ = Σⱼ₌₁ᵈ |wⱼ|.",
              "Elastic Net: min over w of {J(w) + λ₁‖w‖₁ + λ₂‖w‖₂} — combines both penalties with separate weights λ₁ and λ₂."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w3_logistic",
    "title": "Logistic Regression",
    "subtitle": "03_logistic_regression.pdf",
    "topics": [
      {
        "id": "recap-bias-variance",
        "title": "Recap: Bias and Variance (W2 bridge)",
        "sections": [
          {
            "heading": "Recap of regression and regularization (slide 2)",
            "points": [
              "Week 2 covered regression via three components: model representation, objective function, and optimization.",
              "Regularization recap: underfitting means high bias (a better model is expected); overfitting means high variance (the model fails to generalize).",
              "Output space taxonomy: y ∈ Y where Y ⊆ ℝ is regression, Y ⇔ {+1, −1} is binary classification, and Y ⇔ {1, 2, …, K} is multi-class classification."
            ]
          },
          {
            "heading": "Bias-variance decomposition (slide 3)",
            "points": [
              "Error in regression is y − ŷ = f(x) − h(x), and the Sum of Squared Residues is SS_res = Σᵢ(ŷᵢ − yᵢ)².",
              "Expected squared error decomposes as E[(f(x) − h(x))²] = Bias²(h(x)) + Var(h(x)) + σ², where σ² is irreducible noise.",
              "Bias(h(x)) = E[h(x)] − f(x): an error from erroneous assumptions in the learning algorithm.",
              "Var(h(x)) = E[(h(x))²] − (E[h(x)])²: an error from the small fluctuation of datasets."
            ]
          },
          {
            "heading": "Bias-variance tradeoff dartboard (slide 4)",
            "points": [
              "The dartboard picture (from scott.fortmann-roe.com/docs/BiasVariance.html) shows four regimes: low bias + low variance hits tightly clustered on the bullseye; low bias + high variance scattered around the bullseye; high bias + low variance tightly clustered off-target; high bias + high variance scattered and off-target."
            ]
          }
        ]
      },
      {
        "id": "from-regression-to-classification",
        "title": "From Regression to Classification",
        "sections": [
          {
            "heading": "Binary classification setup (slide 6)",
            "points": [
              "Binary classification examples: email spam vs. not spam, and online transaction fraud vs. not fraud.",
              "Machine learning is to learn a function h : X → Y from data.",
              "Label convention in this deck: y = 1 is the positive class (e.g. spam, fraud) and y = −1 is the negative class (e.g. not spam, not fraud) — note ±1, not 0/1."
            ]
          },
          {
            "heading": "Thresholding a regression model (slide 7)",
            "points": [
              "A binary classifier can be built from a regression model by thresholding: y = 1 if wᵀx > 0, and y = −1 otherwise.",
              "The slide plots positive samples (circles) at y = 1 and negative samples (crosses) at y = −1 with a fitted regression line crossing between them."
            ]
          },
          {
            "heading": "Why MSE is a poor objective for classification (slide 8)",
            "points": [
              "Candidate objective: keep MSE, J(w) = (1/n) Σᵢ₌₁ⁿ (wᵀxᵢ − yᵢ)².",
              "Problem posed by the slide: 'Does error matter much when |wᵀx| > 1?' — MSE penalizes confidently correct predictions (|wᵀx| far beyond the ±1 targets) even though the classification is already right.",
              "The plots contrast a straight regression fit against an S-shaped fit that flattens at ±1, motivating a squashing function instead of a raw linear output."
            ]
          }
        ]
      },
      {
        "id": "logistic-regression-model",
        "title": "Logistic Regression: Odds, Sigmoid, Decision Boundary, Objective",
        "sections": [
          {
            "heading": "Modeling the odds (slide 9)",
            "points": [
              "Odds = Wins : Losses; in binary classification Odds = p(1|xᵢ)/p(−1|xᵢ).",
              "Slide's odds↔probability table: odds 1:1 → 50% success / 50% failure; 3:1 → 75% / 25%; 1:4 → 20% / 80%; 99:1 → 99% / 1%.",
              "If xᵢ is a positive sample (yᵢ = 1), the odds p(1|xᵢ)/p(−1|xᵢ) should be very large; if negative (yᵢ = −1), the odds should be very small.",
              "Model: p(1|xᵢ)/p(−1|xᵢ) = e^(wᵀxᵢ), equivalently ln[p(1|xᵢ)/p(−1|xᵢ)] = wᵀxᵢ — the log-odds (natural log) is linear in x."
            ]
          },
          {
            "heading": "The logistic/sigmoid function (slides 10-11)",
            "points": [
              "Solving the odds model gives p(1|xᵢ) = 1/(1 + e^(−wᵀxᵢ)) = σ(wᵀxᵢ), where σ(x) = 1/(1 + e^(−x)) is the logistic/sigmoid function.",
              "Model representation pipeline: xᵢ → (regression) → wᵀxᵢ → (logistic function) → σ(wᵀxᵢ).",
              "Sigmoid properties (marked Optional): value range from 0 to 1; steeper slope around 0 and saturated at the two ends; σ(−x) = 1 − σ(x); dσ/dx = σ(x)[1 − σ(x)]."
            ]
          },
          {
            "heading": "Decision boundary is linear (slide 12)",
            "points": [
              "Decision is made by comparing probabilities: predict positive when p(1|xᵢ) > p(−1|xᵢ), i.e. when the odds p(1|xᵢ)/p(−1|xᵢ) > 1.",
              "The decision boundary is where the odds equal 1, which is exactly wᵀx = 0 — so the decision boundary is linear.",
              "Classification rule: y = 1 if wᵀx > 0, y = −1 otherwise; the slide notes 'this threshold is tunable' (the 0 can be shifted)."
            ]
          },
          {
            "heading": "Objective: maximize p(yᵢ|xᵢ) in one compact form (slide 13)",
            "points": [
              "For a positive sample (yᵢ = 1) we want p(1|xᵢ)/p(−1|xᵢ) very large; for a negative sample (yᵢ = −1) the slide flips it: p(−1|xᵢ)/p(1|xᵢ) should be very large — so in both cases p(yᵢ|xᵢ) should be maximized.",
              "Since p(1|xᵢ) + p(−1|xᵢ) = 1, when yᵢ = −1: p(yᵢ|xᵢ) = 1 − p(1|xᵢ) = e^(−wᵀxᵢ)/(1 + e^(−wᵀxᵢ)) = 1/(1 + e^(wᵀxᵢ)) = σ(yᵢwᵀxᵢ), and the same form holds when yᵢ = 1.",
              "Compact per-sample likelihood: p(yᵢ|xᵢ; w) = σ(yᵢwᵀxᵢ) = 1/(1 + e^(−yᵢwᵀxᵢ)) — the yᵢ ∈ {+1, −1} label multiplies the score inside the sigmoid.",
              "Slide aside: 'Just assume I'm correct, you can check after class.'"
            ]
          }
        ]
      },
      {
        "id": "mle-optimization-examples",
        "title": "MLE, Gradient Descent, and Worked Examples",
        "sections": [
          {
            "heading": "Maximum likelihood estimation (slides 14-15)",
            "points": [
              "Given training data D = {(x₁,y₁), …, (xₙ,yₙ)}, find w* that maximizes the likelihood p(D|w) = Πᵢ₌₁ⁿ p(yᵢ|xᵢ; w).",
              "In practice we maximize the log likelihood ln p(D|w) = Σᵢ₌₁ⁿ ln p(yᵢ|xᵢ; w); the slide poses 'Why not MAP?' as a discussion point.",
              "MLE w* = arg max_w Σᵢ ln p(yᵢ|xᵢ) is equivalent to minimizing the logistic loss: w* = arg min_w L(w) = arg min_w Σᵢ₌₁ⁿ ln(1 + e^(−yᵢwᵀxᵢ)).",
              "The objective function is convex, so a local optimum is the global optimum; the slide plots the two branches y = ln(1 + eˣ) and y = ln(1 + e^(−x))."
            ]
          },
          {
            "heading": "Optimization by gradient descent (slide 16)",
            "points": [
              "Convex objective gives global optima, but there is no closed-form solution, so gradient descent is used.",
              "Gradient descent produces a sequence w_t with L(w_t) → L(w*): the loss slowly approaches the minimum value L(w*).",
              "Update rule: w_{t+1} = w_t − η_t ∇L(w_t).",
              "Gradient: ∇L(w) = Σᵢ₌₁ⁿ [−yᵢxᵢ e^(−yᵢwᵀxᵢ)] / [1 + e^(−yᵢwᵀxᵢ)] = −Σᵢ₌₁ⁿ yᵢxᵢ[1 − p(yᵢ|xᵢ)] — each sample's pull is weighted by 1 minus the probability the model currently assigns its true label."
            ]
          },
          {
            "heading": "Worked example: heart disease vs. age group (slides 17-19)",
            "points": [
              "Input feature x is the age group id (categorical, 1-8): 1: 25-29, 2: 30-34, 3: 35-39, 4: 40-44, 5: 45-49, 6: 50-54, 7: 55-59, 8: 60-64; output y = 1 means heart disease diagnosed, y = −1 means no heart disease.",
              "One-dimensional model with bias: p(yᵢ|xᵢ; θ) = 1/(1 + e^(−yᵢ(wxᵢ+b))), with parameters θ = {w, b}.",
              "Log likelihood over grouped counts: L(D) = Σᵢ₌₁⁸ [nᵢ(y=1) ln p(1|x=i) + nᵢ(y=−1) ln p(−1|x=i)] = Σᵢ₌₁⁸ [nᵢ(y=1) ln 1/(1+e^(−wi−b)) + nᵢ(y=−1) ln 1/(1+e^(wi+b))], where nᵢ(y=1) is the number of people diagnosed with heart disease in age group i and nᵢ(y=−1) the number without.",
              "MLE solution: w* = 0.58, b* = −3.34.",
              "Decision boundary logic: wx + b < 0 → p(+|x) < p(−|x); wx + b > 0 → p(+|x) > p(−|x); wx + b = 0 is the decision boundary, giving x* = 5.78, i.e. around 51 years old — 'an older person is more likely to have heart disease.'"
            ]
          },
          {
            "heading": "Exercise: admission with sklearn (slides 20-23)",
            "points": [
              "Admission dataset: each row has two exam scores (columns 1 and 2) and a Boolean 3rd column, 1 if admitted and 0 if rejected; task is to build a logistic regression model, visualize the class boundary for different values of hyperparameter C, and visualize the probability contours if time permits.",
              "Code: load with np.loadtxt('dataset/exam_score.csv', delimiter=','), x = data[:, :2], y = data[:, 2].astype(int); split with model_selection.train_test_split(x, y, test_size=0.2, random_state=610).",
              "Fit with estimator = linear_model.LogisticRegression(solver='lbfgs'); estimator.fit(x_train, y_train); y_pred = estimator.predict(x_test).",
              "The boundary line is plotted from the fitted parameters: x-coords = (−coef_[0][1]·[min, max of x_train[:,1]] − intercept_[0]) / coef_[0][0], i.e. solving w₀x₀ + w₁x₁ + b = 0.",
              "Slide 21 shows the fitted linear decision boundary separating admitted (green) from rejected (red) on the exam-score plane; slide 23 shows probabilistic contours — a white uncertain band along the boundary fading to solid red/green regions of confident prediction."
            ]
          }
        ]
      },
      {
        "id": "multiclass-classification-softmax",
        "title": "Multiclass Classification and SoftMax",
        "sections": [
          {
            "heading": "Multiclass problems and One-vs-All",
            "points": [
              "Multiclass classification assigns one of K>2 labels; slide examples: Weather (Cloudy, Rain, Snow), Fruit (Apple, Orange, Peach), Email tagging (Work, Ad, Friends).",
              "Binary classification separates two classes with one decision boundary; multiclass (e.g., circles, triangles, squares) needs a different strategy.",
              "One-vs-All (One-vs-Rest): train one logistic regression classifier w_k for each class k to predict p(y=1|x_i; w_k), treating class k as positive and all other classes as negative.",
              "Prediction rule: k* = arg max_k p(y=1|x_i; w_k) — pick the class whose classifier gives the highest probability.",
              "For 3 classes the slide shows 3 separate binary boundaries: circles-vs-rest, triangles-vs-rest, squares-vs-rest."
            ]
          },
          {
            "heading": "Extending the logistic function to SoftMax",
            "points": [
              "Binary logistic regression models the odds ratio: p(1|x_i)/p(-1|x_i) = e^(w^T x_i), equivalently ln[p(1|x_i)/p(-1|x_i)] = w^T x_i (natural log).",
              "Since p(1|x_i) + p(-1|x_i) = 1, solving gives p(1|x_i) = 1/(1+e^(-w^T x_i)) and p(-1|x_i) = e^(-w^T x_i)/(1+e^(-w^T x_i)) — the logistic function is reached from this ratio.",
              "For 4 classes, set p(1|x_i) : p(2|x_i) : p(3|x_i) : p(4|x_i) = e^(w_1^T x_i) : e^(w_2^T x_i) : e^(w_3^T x_i) : e^(w_4^T x_i); with the constraint that the four probabilities sum to 1, this yields p(k|x_i) = e^(w_k^T x_i) / (e^(w_1^T x_i)+e^(w_2^T x_i)+e^(w_3^T x_i)+e^(w_4^T x_i)) — the SoftMax function.",
              "General SoftMax: p(y=k|x) = e^(w_k^T x) / Σ_j e^(w_j^T x), for k = 1, 2, ..., K; each class k gets its own weight vector w_k.",
              "SoftMax exaggerates differences: the slide's bar chart shows raw scores (values up to about 4.5) mapped to a probability distribution where the largest score dominates (one bar near 0.9, the rest near 0)."
            ]
          },
          {
            "heading": "Objective function: MLE and cross entropy",
            "points": [
              "Maximum Likelihood Estimate (MLE): find the best parameters that maximize the likelihood of the observed (training) data: ln p(D|w) = Σᵢ₌₁ⁿ ln p(yᵢ|xᵢ; w).",
              "For multiclass, the objective is to optimize cross entropy: L(W) = -Σᵢ₌₁ⁿ Σₖ₌₁ᴷ δ(yᵢ,k) ln p(y=k|xᵢ; W), where δ(yᵢ,k)=1 if yᵢ=k and 0 otherwise.",
              "The indicator δ corresponds to one-hot encoding of the label: slide example for digit class 6 shows actual probabilities [0,0,0,0,0,0,1,0,0,0] vs computed probabilities [.02,.01,.01,.02,.01,.02,.77,.01,.09,.04] — only the true-class probability (0.77) enters the loss.",
              "Cross entropy example table (4 samples, 4 classes): label 4 with p=(0.01,0.01,0.33,0.65); label 2 with p=(0.55,0.12,0.31,0.02); label 1 with p=(0.96,0.01,0.02,0.01); label 3 with p=(0.01,0.02,0.37,0.60). Loss = -[ln 0.65 + ln 0.12 + ln 0.96 + ln 0.37] ≈ 0.431 + 2.120 + 0.041 + 0.994 ≈ 3.59.",
              "Confidently correct predictions (0.96) contribute almost nothing to the loss; wrong or unconfident true-class probabilities (0.12) dominate it."
            ]
          }
        ]
      },
      {
        "id": "classification-evaluation-metrics",
        "title": "Evaluation: Confusion Matrix, Accuracy, Precision, Recall",
        "sections": [
          {
            "heading": "Confusion matrix and accuracy",
            "points": [
              "Confusion matrix layout (rows = actual, columns = predicted): Positive Label row has TP (Predicted Positive) and FN (Predicted Negative); Negative Label row has FP (Predicted Positive) and TN (Predicted Negative).",
              "Accuracy = Correct Predictions / Total # of Samples = (TP + TN)/(TP + FP + TN + FN)."
            ]
          },
          {
            "heading": "Precision and recall",
            "points": [
              "Precision = TP/(TP+FP): how precise is the positive prediction? (denominator is the predicted-positive column).",
              "Recall = TP/(TP+FN): how many positive cases are detected? (denominator is the positive-label row).",
              "Admission worked example: TP=27, FN=4, FP=1, TN=18. Accuracy = (27+18)/(27+4+1+18) = 45/50 = 0.9; Precision = 27/(27+1) = 0.964; Recall = 27/(27+4) = 0.871."
            ]
          },
          {
            "heading": "Why accuracy fails and choosing between precision and recall",
            "points": [
              "Accuracy does not perform well for imbalanced data sets: high accuracy can be achieved by classifying every transaction as non-fraud.",
              "Precision and recall give more insights; under non-trivial situations precision and recall cannot be optimized at the same time, and which one to optimize depends on the use case.",
              "Slide discussion prompts: give a use case where precision must be high but recall can be low, and a use case where recall must be high but precision can be low; how do we choose?",
              "Mean-of-precision-and-recall exercise with three classifiers on 50 samples (20 positive, 30 negative): Classifier A has TP=8, FN=12, FP=2, TN=28 (Prec=0.8, Rec=0.4); Classifier B has TP=14, FN=6, FP=9, TN=21 (Prec≈0.609, Rec=0.7); Classifier C has TP=19, FN=1, FP=25, TN=5 (Prec≈0.432, Rec=0.95). Question posed: which mean better captures both precision and recall?"
            ]
          },
          {
            "heading": "F1 and F-beta scores",
            "points": [
              "F1 score is the harmonic mean of precision and recall: F₁ = ((Precision⁻¹ + Recall⁻¹)/2)⁻¹ = 2·Precision·Recall/(Precision + Recall).",
              "F_β generalizes it: F_β = ((Precision⁻¹ + β²·Recall⁻¹)/(1+β²))⁻¹ = (1+β²)·Precision·Recall/(β²·Precision + Recall).",
              "Larger beta ⇒ Recall is more important than precision; smaller beta ⇒ Precision is more important than recall. Slide question: can you tune the parameter β?"
            ]
          }
        ]
      },
      {
        "id": "threshold-roc-auc",
        "title": "Decision Threshold, ROC Curve and AUC",
        "sections": [
          {
            "heading": "Tunable decision threshold",
            "points": [
              "The binary decision rule is y = 1 if w^T x > 0, y = -1 otherwise; the slide highlights that this threshold 0 is tunable, which trades off precision against recall.",
              "The precision-recall curve (from towardsdatascience) shows precision falling from about 1.0 toward 0.4 as recall increases from 0 to 1.",
              "Threshold exercise table: 8 examples with labels (1,0,0,1,0,1,1,0) and probabilities p(1|x) = (0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2); students compute precision and recall at each threshold. There are 4 true positives in total, so e.g. thresholding above 0.55 predicts 4 positives of which 2 are correct: Precision = 2/4 = 0.5, Recall = 2/4 = 0.5."
            ]
          },
          {
            "heading": "ROC curve",
            "points": [
              "The Receiver Operation Characteristic (ROC) illustrates the diagnostic ability of a binary classifier as its discrimination threshold varies.",
              "ROC plots true positive rate (TPR) against the false positive rate (FPR) at various thresholds; equivalently it plots TPR(T) versus FPR(T) parametrically with threshold T as the varying parameter.",
              "FPR = FP/(FP+TN) is the Probability of False Alarm; TPR = TP/(TP+FN) is the Probability of Detection (same formula as recall).",
              "The best possible prediction method yields a point in the upper left corner (0,1), also called perfect classification; a random guess gives a point along the diagonal.",
              "In the ROC-space slide, points above the diagonal (A, C') are better than random and points below (C) are worse; moving toward the upper-left is 'Better', toward lower-right is 'Worse'."
            ]
          },
          {
            "heading": "Area under the curve (AUC)",
            "points": [
              "Area Under Curve (AUC) is the area under the ROC curve; in the slide figure AUC(A) > AUC(B), so Classifier A is better than Classifier B.",
              "AUC equals the probability that the classifier will rank a randomly chosen positive example higher than a randomly chosen negative example.",
              "AUC is one of the most widely used metrics for evaluation of binary classification problems."
            ]
          }
        ]
      }
    ]
  }
,
  {
    "id": "w4_decision_tree",
    "title": "Decision Trees",
    "subtitle": "04_decision_tree.pdf",
    "topics": [
      {
        "id": "dt-basics",
        "title": "Decision Tree Fundamentals",
        "sections": [
          {
            "heading": "What is a Decision Tree",
            "points": [
              "A decision tree is a decision-support tool that uses a tree-like graph or model of decisions and their possible consequences.",
              "Terminology: Root Node (entire population/sample), Decision Node (splits further), Leaf/Terminal Node (no further split, outputs a label), Splitting (dividing a node into sub-nodes), Branch/Sub-Tree (a section of the tree with a node and its descendants).",
              "Example: 'Should I accept a new job offer?' splits on salary ≥ $50,000, then commute time > 1 hour, then free coffee, ending at accept/decline leaves.",
              "Example: 'Should I do exercise today?' splits on whether exercise happened yesterday, then whether junk food was eaten today."
            ]
          },
          {
            "heading": "Decision Trees as Supervised Learning",
            "points": [
              "Formalization: input x ∈ X ⊆ R^m; output y ∈ Y (regression: y ⊆ R, binary classification: y ∈ {+1,-1}, multi-class: y ∈ {1,...,K}); unknown target function f: X→Y; training data D={(x1,y1),...,(xn,yn)}; hypothesis space H; output hypothesis h: X→Y with h ≈ f.",
              "Each instance x is a feature vector, e.g., <humidity=low, wind=weak, outlook=rain, temp=hot>; each hypothesis is a decision tree that sorts x to a leaf and assigns its class Y.",
              "The Play Tennis dataset (14 examples with Outlook, Temp, Humidity, Windy → Play yes/no) is the running worked example throughout the lecture.",
              "Decision trees are non-linear classifiers: they can separate positive and negative samples that are not linearly separable, because splits are combined hierarchically rather than via a single hyperplane."
            ]
          }
        ]
      },
      {
        "id": "id3-algorithm",
        "title": "Building Decision Trees: The ID3 Algorithm",
        "sections": [
          {
            "heading": "Greedy Top-Down Construction",
            "points": [
              "General recursive algorithm: (1) pick the 'best' attribute A to partition the data, (2) create a child for each value of A, (3) group data by child, (4) if a child's data is perfectly classified stop, else recurse on that child's data with step 1.",
              "We can always build *some* tree for a dataset by picking any unused feature at each level and branching recursively, but starting with a poorly-chosen feature can lead to a large, complex tree.",
              "Finding the smallest (optimal) decision tree is intractable (NP-hard), so ID3 (Iterative Dichotomiser 3) instead uses a simple greedy heuristic that tends to find small trees without guaranteeing the best one.",
              "ID3 performs a top-down, greedy search through the hypothesis space, choosing the locally 'best' attribute at each split using a purity-based measure.",
              "General principle: prefer short/simple trees over larger, complex ones, since a simple consistent hypothesis is more likely to generalize (a form of Occam's razor)."
            ]
          }
        ]
      },
      {
        "id": "entropy-information-gain",
        "title": "Entropy and Information Gain",
        "sections": [
          {
            "heading": "Entropy as Expected Uncertainty",
            "points": [
              "Entropy characterizes the (im)purity of a collection of samples: H(X) = -Σ p_i log p_i, where p_i = Pr(X=x_i).",
              "Binary case: H(X) = -p0 log p0 - p1 log p1, with p0+p1=1. H(X)=0 when p0 or p1 = 1 (totally certain); H(X)=1 when p0=p1=0.5 (most uncertain) — the entropy curve peaks at 1 for p=0.5.",
              "Information gain measures how well an attribute separates samples according to the target classification; it is built on top of entropy."
            ]
          },
          {
            "heading": "Conditional Entropy and Mutual Information",
            "points": [
              "Conditional entropy H(Y|X) = Σ p(X=x_i) H(Y|X=x_i) is the remaining uncertainty in Y once X is known.",
              "If X determines Y, H(Y|X)=0. If X and Y are independent, H(Y|X)=H(Y) (X reveals nothing about Y).",
              "Mutual information I(X;Y) measures how much uncertainty about Y is resolved by knowing X; if X determines Y, H(Y)=I(X;Y); if X,Y independent, I(X;Y)=0.",
              "Information Gain = Mutual Information = H(Y) - H(Y|X): this is exactly the quantity ID3 maximizes when choosing a split attribute."
            ]
          },
          {
            "heading": "Worked Example: Play Tennis",
            "points": [
              "Target Y=[9+,5-] over 14 examples: H(Y) = -(9/14)log(9/14) - (5/14)log(5/14) = 0.940.",
              "Splitting on Humidity: H(Y|Humidity=high)=0.985 (7 examples), H(Y|Humidity=normal)=0.592 (7 examples) → H(Y|Humidity)=0.5(0.985)+0.5(0.592)=0.788, so IG(Y;Humidity)=0.940-0.788=0.152.",
              "Splitting on Outlook: H(Y|Outlook=sunny)=0.971 (5 ex.), H(Y|Outlook=overcast)=0 (4 ex.), H(Y|Outlook=rainy)=0.971 (5 ex.) → H(Y|Outlook)=(5/14)(0.971)+(4/14)(0)+(5/14)(0.971)=0.694, so IG(Y;Outlook)=0.940-0.694=0.247.",
              "Since IG(Outlook)=0.247 > IG(Humidity)=0.152, 'Outlook' is chosen as the root split; ID3 then recurses on each Outlook branch (e.g., {Y|Outlook=sunny}=[2+,3-] is split further, next on Humidity)."
            ]
          }
        ]
      },
      {
        "id": "splitting-criteria",
        "title": "Alternative Splitting Criteria",
        "sections": [
          {
            "heading": "Gini Impurity (used by CART)",
            "points": [
              "Gini(S) = Σ_i (|S_i|/|S|)(1-|S_i|/|S|) = 1 - Σ_i (|S_i|/|S|)^2, where S_i is the subset of S with class label i.",
              "Intuition: the probability that a randomly chosen element would be incorrectly labeled if it were randomly labeled according to the distribution of labels in the set.",
              "Worked example: a node with 5 of one class and 5 of another has Gini(S)=1-(1/2)^2-(1/2)^2=1/2. Splitting at x=1.5 gives a left child (all one class, 4/10 of data) with Gini=0 and a right child (1 vs 5, 6/10 of data) with Gini=1-(1/6)^2-(5/6)^2=5/18. GiniGain = 1/2 - (0.4×0 + 0.6×5/18) = 1/2 - 1/6 = 1/3.",
              "The 'best' attribute is chosen by maximizing Gini information gain (analogous to entropy-based information gain)."
            ]
          },
          {
            "heading": "Gain Ratio for Many-Valued Attributes",
            "points": [
              "An attribute with many distinct values (e.g., 'date' with 500 values) can appear to have unfairly high information gain versus a low-cardinality attribute (e.g., 'gender' with 2 values), because it can create many near-pure, tiny subsets.",
              "SplitInfo(S,A) = -Σ_i (|S_i|/|S|) log(|S_i|/|S|) measures the entropy of the attribute's own value distribution.",
              "GainRatio(S,A) = InfoGain(S,A) / SplitInfo(S,A) = I(class;A)/H(A); this penalizes attributes with many distinct values, correcting the bias of raw information gain.",
              "Example: identifier-like attributes (e.g., 'Name' or 'Last log in' IP address) would be perfectly discriminating under raw ID3 but generalize terribly — Gain Ratio (or excluding such attributes) avoids selecting them."
            ]
          },
          {
            "heading": "Variance Reduction for Regression Trees",
            "points": [
              "When the target variable is continuous (regression rather than classification), splits are chosen by variance reduction instead of entropy/Gini: VarianceReduction(S,A) = Var(S) - Σ_i (|S_i|/|S|) Var(S_i).",
              "This plays the same role for regression trees that information gain or Gini gain plays for classification trees — pick the split that most reduces the spread of the target within child nodes."
            ]
          }
        ]
      },
      {
        "id": "continuous-attributes",
        "title": "Handling Continuous-Valued Attributes",
        "sections": [
          {
            "heading": "Discretizing and Thresholding",
            "points": [
              "Real-valued attributes can be pre-discretized into ranges (e.g., big/medium/small), or handled directly by choosing a threshold θ and splitting into A<θ vs A≥θ.",
              "Example: speeds [0, 0.02, 0.04, 3.56, 0.45, 0.20, 0.95, 0.79, 4.43, 2.45] can be split by 'speed < 1?' into {0,0.02,0.04,0.45,0.95,0.79} vs {3.56,4.43,2.45}.",
              "Algorithm: for each continuous feature A, sort examples by value of A; for each adjacent pair (x_i, x_{i+1}) in the sorted list whose class labels differ, propose threshold θ = midpoint(x_i, x_{i+1}); the information gain of each such threshold split is computed and compared just like a discrete split.",
              "Worked example (Temp): sorted values 64(+) 65(-) 68(+) 69(+) 70(+) 71(-) 72(-) 72(+) 75(+) 75(+) 80(-) 81(+) 83(+) 85(-) yield candidate thresholds 64.5, 66.5, 70.5, 72, 77.5, 80.5, 84 — only at points where the class label changes."
            ]
          }
        ]
      },
      {
        "id": "overfitting-pruning",
        "title": "Overfitting and Pruning",
        "sections": [
          {
            "heading": "Overfitting in Decision Trees",
            "points": [
              "Growing the full tree (splitting until every leaf is pure) is not always a good idea: adding a single noisy training example (e.g., sunny, hot, normal, true, no) can force extra splits that hurt generalization.",
              "As tree size (number of nodes) increases, training accuracy keeps rising toward ~1.0 while test accuracy plateaus and then degrades — the classic overfitting curve.",
              "Multiple trees can fit the training data equally well; the general principle is to prefer the simplest hypothesis that fits the data."
            ]
          },
          {
            "heading": "How to Avoid Overfitting",
            "points": [
              "1) Pre-pruning via stopping criteria: minimum samples required to split a node, minimum samples required for a terminal leaf, maximum tree depth, etc.",
              "2) Post-pruning via reduced-error pruning: split data into training and test/validation sets, build a full tree on training data, then repeatedly and greedily remove whichever split most improves test-set accuracy, stopping when further pruning is harmful.",
              "3) Ensemble methods (e.g., Random Forest) combine many trees to reduce variance — covered in the next lecture."
            ]
          }
        ]
      },
      {
        "id": "dt-pros-cons",
        "title": "Prediction, Strengths, and Weaknesses",
        "sections": [
          {
            "heading": "Prediction When Leaves Are Impure",
            "points": [
              "Leaves are not always perfectly pure/homogeneous (e.g., using only 'Outlook' to build the tree leaves {Y|Outlook=sunny}=[2+,3-] and {Y|Outlook=rainy}=[3+,2-] mixed).",
              "At such leaves, the tree classifies by majority vote: {Outlook=sunny} predicts 'no' (3 of 5 negative), {Outlook=overcast} predicts 'yes' (4 of 4 positive), {Outlook=rainy} predicts 'yes' (3 of 5 positive)."
            ]
          },
          {
            "heading": "Pros and Cons",
            "points": [
              "Pros: easy to understand/interpret; useful for data exploration and feature selection; requires less data cleaning (fairly robust to scale and missing values); handles both numerical and categorical data; non-parametric (no assumption about data distribution or classifier structure); naturally handles multi-class problems.",
              "Cons: overfitting is a major practical difficulty; not ideal for continuous variables since discretizing them during splitting loses information."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4_ensemble",
    "title": "Hyperparameter Tuning, Ensemble Learning (Bagging, Boosting & Stacking) & Feature Engineering",
    "subtitle": "04_ensemble.pdf",
    "topics": [
      {
        "id": "hyperparameter-tuning",
        "title": "Hyperparameter Tuning",
        "sections": [
          {
            "heading": "What are hyperparameters",
            "points": [
              "Parameters not learned through the typical ML training process are hyperparameters (e.g., regularization weight, depth of a tree).",
              "Hyperparameter tuning is the process of searching for the ideal model architecture governed by these hyperparameters."
            ]
          },
          {
            "heading": "Grid Search",
            "points": [
              "Picks out a grid of hyperparameter values, evaluates every combination, and returns the winner.",
              "Exhaustively evaluates all combinations based on cross validation.",
              "Example: number of leaves in a decision tree could be a grid of 10, 20, 30, ..., 100.",
              "Regularization parameters commonly use an exponential scale: 1e-5, 1e-4, 1e-3, ..., 1.",
              "In sklearn, GridSearchCV takes a parameter grid dict and a cross-validation splitter (e.g., StratifiedKFold), then exposes best_score_ and best_params_ after fit."
            ]
          },
          {
            "heading": "Random Search",
            "points": [
              "Instead of searching the entire grid, random search evaluates only a random sample of points on the grid.",
              "Each setting is sampled from a distribution over possible values, making it much cheaper than grid search.",
              "Bergstra and Bengio: if at least 5% of the points on the grid yield a close-to-optimal solution, random search with 60 trials will find that region with high probability."
            ]
          },
          {
            "heading": "Bayesian Optimization (Optional)",
            "points": [
              "Picks a few hyperparameter settings, evaluates their quality, then decides where to sample next.",
              "Pseudo-algorithm: build a surrogate probability model of the objective function; find hyperparameters that perform best on the surrogate; apply them to the true objective function; update the surrogate with the new results; repeat until max iterations or time budget is reached."
            ]
          },
          {
            "heading": "Overfitting of Hyperparameter Tuning",
            "points": [
              "Evaluating candidate architectures on the test set causes 'data leakage' — the model architecture ends up fitted to the test data.",
              "A validation dataset lets you evaluate the model on data different from what it was trained on, to select the best architecture.",
              "Splitting into three sets (train/validation/test) drastically reduces the samples available for learning, and results can depend on the particular random train/validation split.",
              "Cross-validation is recommended for a more trustable estimate while making full use of the training data.",
              "Cross-validation is a resampling procedure used to evaluate ML models on a limited data sample."
            ]
          },
          {
            "heading": "Cross Validation",
            "points": [
              "Divide the entire dataset into k folds; for k iterations, train on k-1 folds and evaluate on the remaining fold; average the k scores as the overall performance estimate.",
              "Plain KFold can produce folds with skewed class ratios or sequential class ordering.",
              "StratifiedKFold maintains the class ratio in each fold and prevents classes from appearing in contiguous blocks."
            ]
          }
        ]
      },
      {
        "id": "ensemble-learning-intro",
        "title": "Ensemble Learning: Motivation",
        "sections": [
          {
            "heading": "Basic Idea",
            "points": [
              "Intuition: 'Unity is strength' — combine multiple classifiers into one hopefully better classifier, like combining independent expert opinions.",
              "Instead of learning one model, learn several (on Data1, Data2, ..., Data m) and combine their outputs via a model combiner into a final model.",
              "Typically improves accuracy, often by a lot."
            ]
          },
          {
            "heading": "Simple Ensemble: Voting",
            "points": [
              "Hard voting (majority class label) vs. soft voting (average predicted probabilities).",
              "Unweighted voting (equal weight per classifier) vs. weighted voting (more weight to better classifiers)."
            ]
          },
          {
            "heading": "Why Ensemble? Bias-Variance Motivation",
            "points": [
              "Ensembles help by reducing bias and reducing variance.",
              "Setup: training set D = {(x1,y1),...,(xn,yn)}, true relationship y = f(x) + epsilon with epsilon ~ N(0, sigma_y^2), and model's best guess h(x).",
              "Expected squared error on an unseen sample x decomposes as: E[(f(x) - h(x))^2] = Bias^2(h(x)) + Var(h(x)) + sigma^2, where Bias(h(x)) = E[h(x)] - f(x) and Var(h(x)) = E[h(x)^2] - (E[h(x)])^2.",
              "The expectation ranges over different choices of the training set D.",
              "Bias: difference between the average prediction of the model and the correct value being predicted.",
              "Variance: variability of the model's prediction for a given data point, i.e., the spread of predictions."
            ]
          },
          {
            "heading": "Reducing Bias via Voting",
            "points": [
              "Example: 25 independent classifiers, each with error rate epsilon = 0.35.",
              "Probability the ensemble (majority vote) is wrong, i.e., 13 or more of the 25 classifiers misclassify, is sum_{i=13}^{25} C(25,i) * eps^i * (1-eps)^(25-i) ≈ 0.06 — much lower than the 0.35 error rate of a single classifier.",
              "This illustrates why majority voting works: combining many independent, better-than-random classifiers drives the ensemble's error down."
            ]
          },
          {
            "heading": "Reducing Variance via Averaging",
            "points": [
              "Given n independent models M1, ..., Mn each with the same variance sigma^2, the ensemble formed by averaging them, M* = (1/n) * sum(Mi), has Var(M*) = sigma^2 / n.",
              "Averaging independent models shrinks variance by a factor of n, which is the statistical basis for why bagging-style averaging reduces overfitting/instability."
            ]
          }
        ]
      },
      {
        "id": "bagging-and-random-forest",
        "title": "Bagging and Random Forest",
        "sections": [
          {
            "heading": "Three Camps of Ensemble Methods",
            "points": [
              "Bagging (Bootstrap AGGregatING): 'averaging' classifiers.",
              "Boosting: incrementally 'adding' classifiers.",
              "Stacking: combining predictions from previous models using another model."
            ]
          },
          {
            "heading": "Bootstrap Sampling",
            "points": [
              "Given a set D containing m training examples, create Dj by drawing m examples at random with replacement from D.",
              "Probability a given sample is NOT selected into Dj is (1 - 1/m)^m, which converges to about 1/e ≈ 0.368 for large m.",
              "So each bootstrap sample contains on average 1 - (1 - 1/m)^m ≈ 63% distinct data samples from D (the rest are duplicates)."
            ]
          },
          {
            "heading": "Bagging Algorithm",
            "points": [
              "Create k bootstrap samples D1, D2, ..., Dk from the original data (sampling with replacement, so some original indices repeat and others are omitted in each round).",
              "Train a distinct base classifier hj on each Dj; the hj are usually weaker learners of the same type.",
              "Classify a new instance x by classifier vote with equal weights across h1...hk.",
              "In sklearn: ensemble.BaggingClassifier(tree.DecisionTreeClassifier(), max_samples=0.5, max_features=1, oob_score=True, random_state=2023).fit(x_train, y_train) — oob_score=True enables out-of-bag evaluation using the ~37% of samples not drawn into each bootstrap."
            ]
          },
          {
            "heading": "Random Forest",
            "points": [
              "A 'forest' is a collection of decision trees; decision trees recursively partition samples on an attribute value based on Gini coefficient or information gain until a stopping criterion is met.",
              "Random Forest is a collection of random trees — randomness comes both from bootstrap sampling of training rows (like bagging) and from restricting each split to a random subset of features (max_features).",
              "In sklearn: ensemble.RandomForestClassifier(n_estimators=10, max_features=1, oob_score=True, random_state=2023).fit(x_train, y_train).",
              "Key difference from plain tree bagging: Random Forest additionally randomizes the subset of features considered at each split, not just the bootstrap sample of rows, further decorrelating the trees."
            ]
          },
          {
            "heading": "Limitations of Bagging",
            "points": [
              "Inefficient bootstrap sampling: every example has an equal chance of being sampled, with no distinction between 'easy' and 'difficult' examples.",
              "Inefficient model combination: each classifier gets a constant (equal) weight, with no distinction between accurate and inaccurate classifiers."
            ]
          },
          {
            "heading": "Improving the Efficiency of Bagging",
            "points": [
              "Better sampling strategy: focus on examples that are difficult to classify -> leads to Boosting.",
              "Better combination strategy: give accurate models larger weights, or use another ML model to combine results -> leads to Stacking."
            ]
          }
        ]
      },
      {
        "id": "boosting",
        "title": "Boosting (AdaBoost & Gradient Boosting)",
        "sections": [
          {
            "heading": "Boosting: Intuition",
            "points": [
              "Boosting trains classifiers sequentially, where each new classifier focuses on the instances the previous ones got wrong.",
              "Each classifier is trained on a re-weighted/re-sampled version of the training data emphasizing previously misclassified points.",
              "Final prediction combines all sequential classifiers (Classifier1 + Classifier2 + Classifier3 + ...) rather than averaging independent models like bagging."
            ]
          },
          {
            "heading": "AdaBoost: Adaptive Boosting",
            "points": [
              "For each iteration t = 1..K: compute the weighted error rate err_t = sum of weights of misclassified instances / sum of all weights.",
              "Compute alpha_t = (1/2) ln((1 - err_t) / err_t), the voting weight/importance of classifier t.",
              "Update instance weights: increase weight for misclassified instances, decrease weight for correctly classified instances, then renormalize so weights sum to 1.",
              "Final prediction is a weighted vote: H(x) = sign(sum_t alpha_t * h_t(x))."
            ]
          },
          {
            "heading": "Boosting: Worked Example",
            "points": [
              "Instances that are wrongly classified get their weight increased; correctly classified instances get their weight decreased.",
              "Example: instance 4 is hard to classify, so its weight increases across rounds and it gets resampled more often (appearing 8, then 4, then 10 times across boosting rounds in the example table).",
              "The AdaBoost example trace shows weights D0 -> D1 -> D2 evolving as each weak learner h1, h2, ... is trained and instances are resampled and reweighted.",
              "Example shown: alpha_t = (1/2) ln 2, which corresponds to a weighted error rate of 1/3 for that weak learner."
            ]
          },
          {
            "heading": "AdaBoost Implementations: SAMME vs SAMME.R",
            "points": [
              "scikit-learn provides two implementations: SAMME (Stagewise Additive Modeling using a Multi-class Exponential loss function) and SAMME.R (Real).",
              "SAMME adapts based on errors in the predicted class labels (discrete predictions).",
              "SAMME.R adapts based on the predicted class probabilities (real-valued), typically converging faster and achieving lower test error with fewer boosting iterations."
            ]
          },
          {
            "heading": "Gradient Boosting",
            "points": [
              "Applicable to both regression and classification, but more commonly used for regression.",
              "Base estimator is typically a Decision Tree Regressor.",
              "At each stage m, gradient boosting looks for h(x) = F_{m+1}(x) - F_m(x), where F_{m+1}(x) is a better estimator of y than F_m(x).",
              "Gradient boosting fits h(x) to the residual y - F_m(x) at each stage, i.e., each new tree corrects the errors of the current ensemble.",
              "In the lecture's comparison example, gradient boosting was not as good as AdaBoost for that particular dataset."
            ]
          }
        ]
      },
      {
        "id": "stacking-blending",
        "title": "Stacking, Blending & Ensemble Pitfalls",
        "sections": [
          {
            "heading": "Stacking",
            "points": [
              "Stacking often combines heterogeneous weak learners (different learning algorithms), whereas bagging and boosting mainly combine homogeneous weak learners.",
              "Stacking learns to combine base models using a meta-model, whereas bagging and boosting combine weak learners via deterministic algorithms.",
              "Procedure: 1) split train set into k parts; 2) train a base model on k-1 parts, predict on the held-out kth part (repeated for each fold) to create new 'meta' features; 3) fit the base model on the whole training set and predict on the test set to create test meta-features.",
              "Steps 2-3 are repeated for each additional base model, producing multiple sets of meta-features for train and test.",
              "The out-of-fold predictions on the train set become features to train a new meta-model, which is then used to make final predictions on the test meta-features."
            ]
          },
          {
            "heading": "Stacking Variation",
            "points": [
              "A variation: instead of retraining the base model on the whole training dataset in step 3, simply average the predictions from one base model across the different folds/folders."
            ]
          },
          {
            "heading": "Blending",
            "points": [
              "Blending differs from stacking in that it does not use cross-validation.",
              "Procedure: 1) split train set into training and validation sets; 2) fit models on the training set and predict on both validation and test sets; 3) use the validation set and its predictions as features to build a new level-2 model; 4) this model makes final predictions on the test dataset's meta-features."
            ]
          },
          {
            "heading": "Ensemble Pitfalls",
            "points": [
              "Exponentially increasing training times and computational requirements as more models/stages are added.",
              "Increased demand on infrastructure to maintain and update multiple models.",
              "Greater chance of data leakage between models or stages across the whole training pipeline."
            ]
          },
          {
            "heading": "In a Nutshell",
            "points": [
              "No Free Lunch Theorem: there is no single algorithm that is always the most accurate across all problems.",
              "Effort should focus on obtaining base models that make different kinds of errors, rather than obtaining individually highly accurate base models.",
              "Base/weak learners only need to be more accurate than random guessing.",
              "Feature engineering matters a great deal, and iterative experimentation/tuning is essential."
            ]
          }
        ]
      },
      {
        "id": "feature-engineering",
        "title": "Feature Engineering",
        "sections": [
          {
            "heading": "From Data to Features",
            "points": [
              "Raw logs data (e.g., nested JSON/proto with user_info, impression details) does not arrive as ready-made feature vectors.",
              "Feature engineering is the process of transforming raw data (user_info, ip_address, watch_history, impression fields) into numeric feature vectors usable by ML models.",
              "Example (YouTube impression): real-valued fields like age can be copied directly into the feature vector, e.g., age_feature = [42.0].",
              "String/categorical fields (e.g., video_id) are converted using one-hot encoding: a vector of length K (number of unique videos) with a 1 at the position for the observed value and 0s elsewhere."
            ]
          },
          {
            "heading": "Properties of Good Features",
            "points": [
              "Feature values should appear with non-zero value more than just a small handful of times in the dataset (avoid overly rare/sparse features like a unique device_id).",
              "Feature names should clearly describe the value's meaning and indicate the unit of measurement where appropriate (e.g., price_usd rather than feature_7).",
              "Features shouldn't take on 'magic' values (e.g., watch_time = -1.0 to mean undefined); instead use an additional boolean feature such as watch_time_is_defined.",
              "The definition of a feature shouldn't change over time; be wary of depending on other ML systems whose outputs (e.g., inferred_city_cluster_id) might change/drift.",
              "Feature distributions should not have crazy outliers (e.g., 50 rooms per person); consider capping/clipping to a reasonable max.",
              "Ideally, transform all features to a similar range, such as (-1, 1) or (0, 5)."
            ]
          },
          {
            "heading": "Location Example & The Binning Trick",
            "points": [
              "Location (e.g., latitude) is known to be an important factor in house prices, but fitting a single linear coefficient to latitude implies a misleading global trend (e.g., 'as you go north, houses get cheaper').",
              "The Binning Trick: create several Boolean bins from a continuous feature (e.g., LatitudeBin1: 32 < latitude <= 33, LatitudeBin6: 37 < latitude <= 38), each becoming its own new feature.",
              "Binning allows a linear model to fit a different value/weight for each bin, capturing non-linear/localized effects."
            ]
          },
          {
            "heading": "Good Habits: Know Your Data",
            "points": [
              "Visualize: plot histograms, rank feature values from most to least common.",
              "Debug: check for duplicate examples, missing values, outliers, and whether data agrees with dashboards; compare training and validation data distributions.",
              "Monitor: track feature quantiles and the number of examples over time."
            ]
          },
          {
            "heading": "Feature Crosses",
            "points": [
              "Using non-linear features in a linear model: instead of trying to find a complex rule directly, define a new derived feature and use it in the linear model.",
              "Feature crosses define templates of the form [A x B], and can be extended to more variables, e.g., [A x B x C x D x E].",
              "When A and B are Boolean features (such as bins), the resulting crosses can be extremely sparse.",
              "Examples: housing price predictor uses [latitude x num_bedrooms]; search ranking uses [words in query x words in snippet]; Tic-Tac-Toe predictor uses [pos1 x pos2 x ... x pos9].",
              "Why feature crosses: linear learners scale well to massive data but have limited expressivity without crosses; feature crosses + massive data is an efficient strategy for learning highly complex models (neural nets provide another such strategy)."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w6_cnn",
    "title": "Convolutional Neural Networks",
    "subtitle": "06_cnn.pdf",
    "topics": [
      {
        "id": "w6-fnn-limitations-for-images",
        "title": "Why Plain FNNs Struggle with Images (and the CNN Pipeline)",
        "sections": [
          {
            "heading": "Feeding images into a fully connected network",
            "points": [
              "An image (e.g. a handwritten 8) can be flattened into a vector of pixels and fed into a feedforward neural network (FNN) with several fully connected hidden layers (slide p.3).",
              "This approach 'sort of works', reaching roughly 50+% accuracy on the slide's example, but it has serious drawbacks (slide p.3).",
              "Drawback 1: too many parameters. Every input pixel connects to every hidden neuron, so e.g. a 32 x 32 x 3 image gives 3,072 weights for EACH neuron in the first hidden layer, and this multiplies by the number of neurons.",
              "Drawback 2: no notion of spatial position. The same object part (e.g. the dog's nose in two shifted photos) lands on different input pixels, so different parts of different images mean completely different things to the network (slide p.4).",
              "In an FNN the weights attached to two different input pixels (shown red and green on slide p.4) are independent, so a pattern learned at one location is not reused at another location; the network must relearn it everywhere."
            ]
          },
          {
            "heading": "What a CNN looks like",
            "points": [
              "A typical CNN pipeline (slide p.5, from Geron's Hands-on ML): Input, Convolution, Pooling, Convolution, Pooling, then Fully connected layers producing the output.",
              "Convolution layers produce stacks of feature maps; pooling layers shrink their spatial size; the final fully connected layers perform the classification.",
              "Each neuron in convolutional layer 1 looks only at a small local patch (receptive field) of the input layer, and each neuron in convolutional layer 2 looks at a small patch of layer 1, so deeper layers see progressively larger regions of the image (slide p.5 figure).",
              "This hierarchical, local connectivity is what lets CNNs build up from simple local features (edges) to larger structures, unlike an FNN that connects everything to everything."
            ]
          }
        ]
      },
      {
        "id": "w6-spatial-filtering-basics",
        "title": "Fundamentals and Mechanics of Spatial Filtering",
        "sections": [
          {
            "heading": "What a filter is",
            "points": [
              "Spatial filtering is introduced as an image enhancement technique (slide p.6).",
              "The term 'filter' is borrowed from signal processing (frequency domain), where filtering means accepting or rejecting certain frequency components.",
              "Filters are also called masks, kernels, templates or windows.",
              "Spatial filters are more versatile than their signal-processing counterparts, and the spatial domain permits non-linear filtering (slide p.6)."
            ]
          },
          {
            "heading": "Mechanics: neighbourhood + operation",
            "points": [
              "A spatial filter consists of (1) a neighbourhood, a rectangular region such as the 3 x 3 neighbourhood of pixel (x, y), and (2) a pre-defined operation on the pixels contained in that neighbourhood (slide p.7).",
              "Filtering means visiting each pixel in the image and performing the localized operation there; the operation may be linear or non-linear.",
              "For a 3 x 3 linear filter the response is g(x, y) = sum over i = -1..1, j = -1..1 of w(i, j) f(x+i, y+j): each filter coefficient multiplies the image pixel under it and the products are summed (slide p.8).",
              "Generally, for a (2a+1) x (2b+1) filter, g(x, y) = sum over i = -a..a, j = -b..b of w(i, j) f(x+i, y+j) (slide p.8).",
              "The centre coefficient w(0,0) sits on f(x, y); for example w(-1,-1) multiplies f(x-1, y-1) and w(1,1) multiplies f(x+1, y+1)."
            ]
          }
        ]
      },
      {
        "id": "w6-smoothing-filters",
        "title": "Smoothing (Averaging / Lowpass) Filters",
        "sections": [
          {
            "heading": "Purpose of smoothing",
            "points": [
              "Blurring (averaging) removes small details from the image to enable extraction of large regions, and removes gaps between lines or curves (slide p.9).",
              "Noise reduction works by repeated addition and averaging, which reduces 'sharp' intensity transitions in the image.",
              "Good: smoothing removes random noise. Bad: it can also smudge actual edges in the image (slide p.9)."
            ]
          },
          {
            "heading": "Smoothing linear filters and examples",
            "points": [
              "The output of a smoothing linear spatial filter is the average value of the neighbourhood of the current pixel; these are also called averaging filters or lowpass filters (slide p.10).",
              "Box filter: (1/9) x [[1,1,1],[1,1,1],[1,1,1]], giving R = (1/9) sum x_ij, the plain mean of the 3 x 3 neighbourhood. Example: a patch with values 10, 20, ..., 90 gives R = 50.",
              "Weighted average filter: (1/16) x [[1,2,1],[2,4,2],[1,2,1]], which weights the centre most and the corners least; the slide labels it as giving a 'more smoothed effect' (slide p.10).",
              "Both kernels' coefficients sum to 1 after normalisation, so a region of constant intensity is left unchanged.",
              "Effect of box filter size (slide p.11): the test image filtered with 3x3, 5x5, 9x9, 15x15 and 35x35 box filters becomes progressively blurrier; at 35x35 small shapes and fine text are almost completely smeared out. Larger kernel = stronger blur."
            ]
          }
        ]
      },
      {
        "id": "w6-sharpening-filters",
        "title": "Sharpening Filters and the Laplacian",
        "sections": [
          {
            "heading": "Idea of sharpening",
            "points": [
              "Sharpening highlights transitions in intensity, the opposite behaviour to averaging/blur filters (slide p.12).",
              "Mathematically, averaging is analogous to integration while sharpening is analogous to spatial differentiation.",
              "Sharpening enhances edges and other discontinuities (including noise) and de-emphasises areas with slowly varying intensities.",
              "A sharpening filter is therefore a high-pass filter (in contrast to the lowpass smoothing filters)."
            ]
          },
          {
            "heading": "Laplacian kernel on the moon image",
            "points": [
              "The Laplacian kernel is [[0,1,0],[1,-4,1],[0,1,0]]; its coefficients sum to 0, so flat regions give response 0 and only intensity changes (edges) produce non-zero output (slide p.13).",
              "Applied to the 'North pole of the moon' image, the Laplacian output is mostly dark with bright crater rims and edges, i.e. an edge map (slide p.13).",
              "Because the raw Laplacian output contains negative values, the slide rescales it for display: filtered -= Min(filtered); filtered *= (255 / Max(filtered)), giving a grey image where edges stand out (slide p.14).",
              "Sharpened image = original minus the Laplacian-filtered image (with this negative-centre Laplacian): subtracting the edge map from the original gives a visibly crisper moon (slide p.14).",
              "Worked example: on patch [[5,5,5],[5,9,5],[5,5,5]] the Laplacian gives 4 x 5 - 4 x 9 = -16; on a constant patch it gives 0."
            ]
          },
          {
            "heading": "Other sharpening kernels (room image)",
            "points": [
              "Kernel [[0,-1,0],[-1,5,-1],[0,-1,0]] (slide p.15) equals the identity minus the Laplacian, so it directly outputs a sharpened image; its coefficients sum to 1, preserving overall brightness. The result was then histogram-equalized to show detail.",
              "On patch [[5,5,5],[5,9,5],[5,5,5]] the 5-centre kernel gives 5 x 9 - 4 x 5 = 25, amplifying the bright centre relative to its neighbours.",
              "Kernel [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]] (slide p.16) also uses the diagonal neighbours; its coefficients sum to 0 so it outputs an edge map (mostly black image with white outlines of the window, frame and lamp), which after histogram equalization shows edges plus lots of amplified noise.",
              "Rule of thumb from these examples: coefficients summing to 0 give an edge/detail map; summing to 1 give a sharpened version of the original image."
            ]
          }
        ]
      },
      {
        "id": "w6-convolution-mechanics",
        "title": "Convolution in 1D and 2D: Kernel, Stride and Padding",
        "sections": [
          {
            "heading": "1D convolution",
            "points": [
              "Instead of a fully connected layer where each output uses a separate weight for every input (sum w_j x_j with w_1..w_7), convolution uses a small shared weight vector (w1, w2, w3) that slides along the input (slide p.17).",
              "Slide example: input (zero-padded) [0, 1, 2, -1, 1, -3, 0] with kernel (w1, w2, w3) = (1, 0, -1).",
              "With stride 1 the output is [-2, 2, 1, 2, 1]; e.g. first output = 0x1 + 1x0 + 2x(-1) = -2, second = 1x1 + 2x0 + (-1)x(-1) = 2.",
              "'You may also choose to jump by 2 every time': with stride 2 the output is [-2, 1, 1] (slide p.17-18).",
              "The (1, 0, -1) kernel computes a difference between neighbours, i.e. a simple derivative / edge detector, linking back to sharpening as differentiation."
            ]
          },
          {
            "heading": "Hyperparameters: kernel size, padding, stride",
            "points": [
              "Kernel/filter size: the size of the filter (slide p.18).",
              "Padding: adding additional pixels at the outer border of the image (the 1D example uses padding 1, the zeros at each end).",
              "Stride: controls how the filter shifts and slides over the image (stride 1 vs stride 2 in the 1D example).",
              "In practice it is common to zero-pad the border (slide p.26)."
            ]
          },
          {
            "heading": "2D convolution and local receptive fields",
            "points": [
              "In 2D, a hidden neuron connects only to a small local patch of input neurons (e.g. 5 x 5) using a weight matrix w11..w55 (slide p.19, MNIST digits example).",
              "Sliding that same 5 x 5 weight matrix across the input produces the whole first hidden layer: each hidden neuron corresponds to one position of the window (slide p.20).",
              "Worked example (slide p.21): zero-padded image patch [[0,0,0],[0,105,102],[0,103,99]] with kernel [[0,-1,0],[-1,5,-1],[0,-1,0]] gives 105x5 - 102 - 103 = 320 for the first output cell, with horizontal and vertical strides = 1.",
              "Note the slide's operation does not flip the kernel; it multiplies element-wise and sums (what deep learning calls convolution)."
            ]
          }
        ]
      },
      {
        "id": "w6-feature-map-sizes",
        "title": "Feature Map Sizes, Channels and Multiple Filters",
        "sections": [
          {
            "heading": "Output size examples (7 x 7 image, 3 x 3 kernel)",
            "points": [
              "Stride 1, no padding: the window fits in positions 1..5 along each axis, so the output feature map is 5 x 5 (slides p.22-23).",
              "Stride 2, no padding: the window lands at positions 1, 3, 5, so the output feature map is 3 x 3 (slides p.24-25).",
              "Stride 1 with zero padding of size 1 (padded image 9 x 9): output is (7 + 2 - 3)/1 + 1 = 7, so 7 x 7, the same size as the input (slide p.26 asks this as a question).",
              "General formula: output = (N + 2P - F)/S + 1, with N input size, F filter size, P padding, S stride."
            ]
          },
          {
            "heading": "Channels and depth",
            "points": [
              "Colour digital images are made of pixels, and pixels are combinations of primary colours (slide p.27).",
              "A channel is the grayscale image of the same size as the colour image made of just one primary colour; a standard camera image has 3 channels (R, G, B), while a grayscale image has 1 channel.",
              "A 32 x 32 x 3 image has height 32, width 32, depth 3 (slide p.27).",
              "Filters are typically defined in 2D (e.g. 5 x 5) but usually extend the full depth of the input volume, so a filter on a 32 x 32 x 3 image is 5 x 5 x 3 (slide p.28)."
            ]
          },
          {
            "heading": "Convolution layer computation and hyperparameters",
            "points": [
              "Convolving the filter with the image means sliding over the image spatially and computing dot products (slide p.28).",
              "Each output value is the dot product of the 5 x 5 x 3 filter with a 5 x 5 x 3 chunk of the image plus a bias: w^T x + b, which involves 75 weights plus 1 bias (slide p.29).",
              "An activation function is usually applied afterwards: sigma(w^T x + b) (slide p.29).",
              "Multiple filters can be applied in one convolution layer, so the typical hyperparameters of a conv layer are: kernel/filter size, number of filters, padding and stride (slide p.28)."
            ]
          },
          {
            "heading": "Feature (activation) maps",
            "points": [
              "The result of one convolution operation is called a feature map or activation map (slide p.30).",
              "Convolving (sliding) a 5 x 5 x 3 filter over all spatial locations of a 32 x 32 x 3 image (stride 1, no padding) gives a 28 x 28 x 1 activation map, since 32 - 5 + 1 = 28.",
              "Adding one more 5 x 5 x 3 filter gives a second 28 x 28 activation map (slide p.31); each filter produces its own map, so K filters give an output of depth K (e.g. 2 filters give 28 x 28 x 2).",
              "Each filter's weights are shared across all spatial positions, which is exactly what fixes the FNN problem on slide p.4: the same pattern detector is applied everywhere in the image."
            ]
          }
        ]
      },
      {
        "id": "w6-multiple-feature-maps-and-output-size",
        "title": "Multiple Feature Maps, Stacked Convolutions and Output-Size Exercises",
        "sections": [
          {
            "heading": "Multiple filters give multiple feature maps (slide p.32-33)",
            "points": [
              "A single convolution layer can apply many filters; each filter produces its own feature map (activation map), so the layer output has as many feature maps (depth channels) as there are filters.",
              "Slide p.32 example: a 32×32×3 input passed through a convolution layer with 6 filters gives 6 activation maps of size 28×28, i.e. a 28×28×6 output volume. 32 to 28 is consistent with 5×5 filters, stride 1 and no padding: (32 − 5)/1 + 1 = 28.",
              "Each filter spans the full depth of its input, so a 5×5 filter on a 3-channel input has 5×5×3 = 75 weights plus 1 bias; 6 such filters have 6 × 76 = 456 parameters.",
              "Slide p.33 (Geron figure): convolutions are stacked. Convolutional layer 1 reads the Red/Green/Blue input channels and outputs several maps; convolutional layer 2 then reads ALL maps of layer 1 within its local receptive field, so each neuron in layer 2 combines features across every map below.",
              "Why it matters: each filter learns to detect one kind of pattern (e.g. a horizontal or vertical line in the figure), and stacking layers lets later layers compose these into more complex features."
            ]
          },
          {
            "heading": "Output-size exercises (slide p.34)",
            "points": [
              "Output size per spatial dimension = (N − F + 2P)/S + 1, where N is the input size, F the filter size, P the padding and S the stride; the output depth equals the number of filters (input depth does not carry over).",
              "Case One: image 256×256×1, 3×3 filters, 10 filters, stride 3, pad 1. Width/height = (256 − 3 + 2×1)/3 + 1 = 255/3 + 1 = 86, so the output is 86×86×10.",
              "Case Two: image 4096×1024×3, 15×5 filters, 20 filters, stride 5×3, pad 7×2. Height = (4096 − 15 + 2×7)/5 + 1 = 4095/5 + 1 = 820; width = (1024 − 5 + 2×2)/3 + 1 = 1023/3 + 1 = 342; output is 820×342×20.",
              "Case Two shows that filter size, stride and padding can differ per dimension: apply the formula separately to each spatial axis with that axis's own F, S and P.",
              "The 3 input channels in Case Two do not appear in the output depth: each 15×5 filter is really 15×5×3 and collapses all channels into one map, so depth = number of filters = 20."
            ]
          }
        ]
      },
      {
        "id": "w6-pooling",
        "title": "Pooling and Max-Pooling",
        "sections": [
          {
            "heading": "What pooling is (slide p.35)",
            "points": [
              "A pooling function replaces the output of the net at a certain location with a summary statistic of the nearby outputs (e.g. the maximum); it is a form of non-linear down-sampling.",
              "Worked example on a 4×4 single depth slice [[1,0,2,3],[4,6,6,8],[3,1,1,0],[1,2,2,4]] with 2×2 windows and stride 2 (four non-overlapping quadrants).",
              "Max pooling takes the largest value in each quadrant: top-left max(1,0,4,6) = 6, top-right max(2,3,6,8) = 8, bottom-left max(3,1,1,2) = 3, bottom-right max(1,0,2,4) = 4, giving [[6,8],[3,4]].",
              "Average pooling takes the mean of each quadrant: (1+0+4+6)/4 = 2.75, (2+3+6+8)/4 = 4.75, (3+1+1+2)/4 = 1.75, (1+0+2+4)/4 = 1.75, giving [[2.75,4.75],[1.75,1.75]].",
              "Pooling has no learnable weights and operates on each depth slice independently, so it reduces width and height but keeps the number of feature maps."
            ]
          },
          {
            "heading": "Max-pooling properties (slide p.36-37)",
            "points": [
              "Max-pooling partitions the input into a set of NON-OVERLAPPING rectangles and outputs the maximum value for each sub-region.",
              "It makes the representation approximately invariant to small translations of the input: if a feature shifts slightly within its pooling window the maximum is unchanged.",
              "Invariance to local translation is useful when we care more about WHETHER a feature is present than exactly WHERE it is.",
              "By eliminating non-maximal values it reduces computation for upper layers; because it also adds robustness to position, max-pooling is described as a \"smart\" way of reducing the dimensionality of intermediate representations.",
              "Slide p.37 figure: a 24×24 grid of hidden neurons (output of one feature map) is pooled with 2×2 regions into a 12×12 grid of max-pooling units; each 2×2 block maps to one unit."
            ]
          }
        ]
      },
      {
        "id": "w6-simple-cnn-and-lenet",
        "title": "Putting It Together: Simple CNN and LeNet",
        "sections": [
          {
            "heading": "Convolution + max-pooling + fully connected (slide p.38-40)",
            "points": [
              "Slide p.38: 28×28 input neurons are convolved with 3 filters to give a first hidden layer of 3×24×24 neurons (three feature maps). 28 to 24 is consistent with a 5×5 receptive field, stride 1, no padding: 28 − 5 + 1 = 24.",
              "Slide p.39: max-pooling is applied to each of the three feature maps separately, halving each 24×24 map to 12×12, giving 3×12×12 neurons.",
              "Slide p.40 (simple CNN): 28×28 input, convolution layer (3×24×24), max-pooling layer (3×12×12), then a fully-connected output layer of 10 neurons (one per class).",
              "The fully-connected layer connects every one of the 3×12×12 = 432 pooled neurons to every output neuron."
            ]
          },
          {
            "heading": "LeNet (LeCun et al., 1998) (slide p.41-42)",
            "points": [
              "LeNet is drawn as a Feature Extraction part (convolution and sub-sampling layers) followed by a Classifier part (fully connected MLP).",
              "Its sequence is convolution layer, sub-sampling (pooling) layer, convolution layer, sub-sampling layer, fully connected MLP; the figure labels 4 feature maps after the first stages and 6 feature maps after the later ones.",
              "Conv layer + pooling layer form a stacked building block that is repeated, then followed by fully connected layers.",
              "Lower layers alternate between convolution and max-pooling; upper layers are fully connected and correspond to a traditional neural network (hidden layer + logistic regression).",
              "The input to the first fully-connected layer is the set of ALL feature maps at the layer below (flattened)."
            ]
          },
          {
            "heading": "What the layers learn (slide p.44-45)",
            "points": [
              "Zeiler and Fergus (2013) visualisation with VGG-16: Conv1_1 filters show low-level features (edges, colour blobs), Conv3_2 shows mid-level features (textures, patterns), Conv5_3 shows high-level features (object-part-like structures).",
              "The hierarchy is Low-level features, Mid-level features, High-level features, then a linearly separable classifier at the end.",
              "Slide p.45 shows the Deep Visualization Toolbox video, where individual conv5 units respond to faces in the input."
            ]
          }
        ]
      },
      {
        "id": "w6-why-cnn-works",
        "title": "Why CNNs Work So Well",
        "sections": [
          {
            "heading": "Local receptive fields (slide p.46)",
            "points": [
              "CNNs exploit the spatial structure of data with local receptive fields, so each neuron focuses on a small, local region of the image at a time.",
              "Local connectivity suits images because neighbouring pixels usually contain related or correlated information.",
              "By sharing weights across regions, CNNs efficiently learn local patterns and capture hierarchical representations."
            ]
          },
          {
            "heading": "Parameter sharing (slide p.47)",
            "points": [
              "The same set of weights (a filter) is applied to many spatial locations in the input.",
              "This drastically reduces the number of trainable parameters compared to fully connected networks.",
              "Fewer parameters make CNNs more computationally efficient and less prone to overfitting."
            ]
          },
          {
            "heading": "Translation invariance (slide p.48)",
            "points": [
              "CNNs exhibit a degree of translation invariance: they can recognise patterns regardless of their location in the image.",
              "This property comes from weight sharing together with pooling layers that down-sample the spatial dimensions.",
              "By learning local features and then aggregating them, CNNs become robust to small spatial translations, so they suit tasks where the precise location of a pattern is not crucial."
            ]
          }
        ]
      },
      {
        "id": "w6-cnn-architecture-evolution",
        "title": "Evolution of CNN Architectures (ImageNet, AlexNet, VGG, GoogLeNet, ResNet)",
        "sections": [
          {
            "heading": "ImageNet and ILSVRC (slide p.50-52, 59-60)",
            "points": [
              "ImageNet is a large visual database for object recognition research with more than 14 million hand-annotated images.",
              "The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) evaluates algorithms for object detection and image classification at large scale.",
              "Fine-grained classes make the task hard: slide p.52 contrasts a Czechoslovakian Wolfdog with a Siberian Husky, which look very similar.",
              "ImageNet-2012 error rates (slide p.59): AlexNet 2012 16.4%, Clarifai 2013 11.2%, VGG-16 2014 7.4%, GoogLeNet-19 2014 6.7%, ResNet-152 2015 3.57%, Human 5%. ResNet-152 was the first in the chart to beat the human error rate.",
              "Slide p.60 (paperswithcode): top-5 accuracy rose from about 74% (SIFT + FVs, 2011) to about 85% with AlexNet, then past 90% (SPPNet), around 95% with ResNet-152 (60M parameters), and close to 99% by 2020-2021 (FixResNeXt-101 32x48d)."
            ]
          },
          {
            "heading": "AlexNet (2012) and VGGNet (2014) (slide p.53-54)",
            "points": [
              "AlexNet (Krizhevsky, Sutskever, Hinton, 2012) was the first work to popularise CNNs in computer vision.",
              "Its architecture is very similar to LeNet but deeper and bigger, and it stacked convolutional layers directly on top of each other; previously a single CONV layer was always immediately followed by a POOL layer.",
              "AlexNet figure: 224×224×3 input, 11×11 filters with stride 4 giving 55×55×96, max pooling, 5×5 conv to 27×27×256, max pooling, three 3×3 conv layers at 13×13 (384, 384, 256 maps), max pooling, two dense layers of 4096, then the output layer. AlexNet has about 60M parameters (slide p.55).",
              "VGGNet (Simonyan and Zisserman, 2014) showed that network DEPTH is a critical component for good performance; it was considered very deep at the time.",
              "VGG-16 figure: 224×224×3 to 224×224×64, then 112×112×128, 56×56×256, 28×28×512, 14×14×512 and 7×7×512 after successive max-poolings (each halves width and height), then fully connected layers 1×1×4096, 1×1×4096, 1×1×1000 and softmax. Blocks are convolution+ReLU stacks separated by max pooling."
            ]
          },
          {
            "heading": "GoogLeNet / Inception (2014) (slide p.55-57)",
            "points": [
              "GoogLeNet (Szegedy et al., Google, 2014) introduced the Inception module and cut parameters dramatically: about 4M versus about 60M for AlexNet (15 times fewer).",
              "An Inception module applies 1×1, 3×3 and 5×5 convolutions plus 3×3 max pooling in parallel on the previous activations and concatenates the outputs along depth (DepthConcat), so it extracts features at different scales.",
              "1×1 convolutions reduce the input channel depth before the expensive 3×3 and 5×5 convolutions, and after the max-pool branch.",
              "Operation count example (slide p.56): a direct 5×5 conv with 48 filters on 14×14×480 needs 14×14×48 × 5×5×480 = 112,896,000 (about 112.9M) multiplications. With a 1×1 bottleneck to 16 channels: 14×14×16 × 480 = 1,505,280 plus 14×14×48 × 5×5×16 = 3,763,200, total 5,268,480 (about 5.3M), about 21 times fewer.",
              "GoogLeNet uses average pooling instead of fully connected layers at the top, removing many parameters that do not seem to matter much. Slide p.57: an FC layer from 7×7×1024 to 1024 needs 7×7×1024×1024 = 51,380,224 weights, while global average pooling reduces each 7×7 map to a single value (1×1×1024) with no weights.",
              "The full GoogLeNet diagram also has auxiliary losses (side softmax classifiers) attached to intermediate layers."
            ]
          },
          {
            "heading": "ResNet (2015) (slide p.58)",
            "points": [
              "ResNet (Kaiming He et al.) won ILSVRC 2015; it features skip connections and heavy use of batch normalization.",
              "Inside a residual block, the intermediate layers learn a residual function F(x) with reference to the block input x; the block outputs F(x) + x via an identity shortcut, followed by ReLU.",
              "Block structure: x goes to weight layer, ReLU, weight layer to give F(x); the identity x is added; then ReLU.",
              "ResNets are the default choice for using ConvNets in practice (the slide strikes out the older claim that they are \"by far state of the art\").",
              "The figure compares a residual network with a plain network of the same depth: identical stacks of 3×3 conv layers (64, 128, 256, 512 channels), the residual version adding curved skip connections every two layers."
            ]
          }
        ]
      },
      {
        "id": "w6-layer-patterns",
        "title": "CNN Layer Patterns and Keras Examples",
        "sections": [
          {
            "heading": "Keras examples (slide p.61-62)",
            "points": [
              "model_4, (Convolution + Max-Pooling) × 2 + one dense layer + 10 outputs: Conv2D(32, 5×5, ReLU), MaxPooling2D(2×2), Dropout(0.2), Conv2D(64, 5×5, ReLU), MaxPooling2D(2×2), Dropout(0.2), Flatten, Dense(128, ReLU), Dropout(0.2), Dense(10, softmax).",
              "model_5, Convolution × 2 + Max-Pooling + one dense layer + output: Conv2D(32, 3×3, ReLU), Conv2D(64, 3×3, ReLU), MaxPooling2D(2×2), Dropout(0.2), Flatten, Dense(128, ReLU), Dropout(0.2), Dense(num_classes, softmax).",
              "Both are compiled with categorical cross-entropy loss, SGD optimizer and accuracy metric, trained with model.fit(batch_size, epochs, validation_data) and evaluated with model.evaluate to print test loss and accuracy.",
              "Worked shapes for model_4 assuming a 28×28×1 input (img_rows and img_cols are not given on the slide): conv 5×5 gives 24×24×32 (5×5×1×32 + 32 = 832 params), pool gives 12×12×32, conv 5×5 gives 8×8×64 (5×5×32×64 + 64 = 51,264 params), pool gives 4×4×64 = 1,024 flattened, Dense(128) has 1,024×128 + 128 = 131,200 params, Dense(10) has 1,290.",
              "Worked shapes for model_5 with 28×28×1 input: 26×26×32 (320 params), 24×24×64 (18,496 params), pool 12×12×64 = 9,216 flattened, Dense(128) has 1,179,776 params. Only one pooling layer leaves a large flattened vector, so the dense layer dominates the parameter count."
            ]
          },
          {
            "heading": "General ConvNet pattern (slide p.63)",
            "points": [
              "The most common ConvNet stacks a few CONV-RELU layers, follows them with POOL layers, and repeats until the image has been merged spatially to a small size; then it transitions to fully-connected layers.",
              "Template: INPUT -> [[CONV -> RELU]*N -> POOL?]*M -> [FC -> RELU]*K -> FC, where * means repetition and POOL? is an optional pooling layer.",
              "Constraints: N >= 0 and usually N <= 3; M >= 0; K >= 0 and usually K < 3.",
              "Example: INPUT -> [CONV -> RELU -> CONV -> RELU -> POOL]*3 -> [FC -> RELU]*2 -> FC, i.e. N = 2, M = 3, K = 2. It has 6 conv layers, 3 pooling layers and 3 FC layers.",
              "The final FC layer has no ReLU because it produces the class scores (e.g. fed to softmax)."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w7_attention",
    "title": "Sequence Models, Attention & Transformers",
    "subtitle": "07_attention.pdf",
    "topics": [
      {
        "id": "w7-three-network-types-and-problem-shapes",
        "title": "Three Major Network Types and Sequence Problem Shapes",
        "sections": [
          {
            "heading": "FNN vs CNN vs RNN (slides p.3-4)",
            "points": [
              "The lecture opens by contrasting the three major neural network families: the Feedforward / Fully Connected Neural Network (FNN), the Convolutional Neural Network (CNN, illustrated with LeNet-5: 32x32 input, C1 6@28x28, S2 6@14x14, C3 16@10x10, S4 16@5x5, C5 120, F6 84, output 10) and the Recurrent Neural Network (RNN, illustrated with a bidirectional chain of cells A and A').",
              "Rule of thumb from the slides: FNN suits tabular / structured data; CNN suits image data or any problem that requires extracting local features; RNN suits sequence data such as time series, translation and audio.",
              "These pairings are NOT strict: it is possible to solve a sequence problem with a pure FNN and still achieve state-of-the-art results, and CNNs also work well on sequence data because sequences usually involve local properties (slide p.4).",
              "Why it matters: in an exam justification question, the choice of architecture should be argued from the structure of the data (tabular, spatially local, or temporally ordered), while acknowledging that alternatives can also work."
            ]
          },
          {
            "heading": "Input/output configurations (slides p.5-9)",
            "points": [
              "Five configurations are shown (figure from Geron, Hands-on ML): one to one, one to many, many to one, many to many with a delay (encoder then decoder), and many to many synchronised (one output per input step).",
              "One to many: a single input produces a sequence of outputs. Example: image captioning, input = image, output = caption (slide p.6).",
              "Many to one: a sequence of inputs produces a single output at the last step. Example: spam filtering, input = words in an email, output = spam or not spam (slide p.7).",
              "Many to many (delayed / sequence-to-sequence): the whole input sequence is read before outputs are produced. Example: translation, input = Spanish, output = Mandarin; input and output lengths can differ (slide p.8).",
              "Many to many (synchronised): one output per input time step. Example: speech recognition, input = windowed audio, output = sequence of letters (slide p.9).",
              "One to one is the ordinary non-sequential case (a standard feedforward mapping from one input to one output)."
            ]
          }
        ]
      },
      {
        "id": "w7-why-sequence-models-bag-of-words",
        "title": "Why Sequence Models: Limits of Bag-of-Words",
        "sections": [
          {
            "heading": "Feeding sentences to a normal neural network (slides p.11-13)",
            "points": [
              "RNNs are a family of neural networks (typically) for processing sequential data such as time series, text and audio (slide p.11).",
              "An RNN looks very much like a feedforward network except that it also has connections pointing backward (the figure shows each hidden neuron with a self-loop, versus the FNN with no loops).",
              "The most effective sequence models used in practice are gated RNNs, for example long short-term memory (LSTM) networks (slide p.11).",
              "Problem with a plain FNN on text: sentences have variable length ('do you like apple and fruit juice ?' has 8 tokens, 'so many pretty birds' has 4), but an FNN needs a fixed-size input vector (slide p.12).",
              "A common workaround is Embedding followed by Aggregation into a fixed-length vector that is fed to the FNN; the slide notes this is essentially the bag-of-words approach (slide p.13)."
            ]
          },
          {
            "heading": "Bag-of-words representation (slide p.14)",
            "points": [
              "Bag of words represents a document as a vector of word counts over a vocabulary, ignoring order.",
              "Worked example: document 'Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.'",
              "With dimensions (give, man, fish, feed, day, teach, lifetime) the count vector is (1, 2, 2, 2, 1, 1, 1); stop words such as 'a', 'and', 'you', 'him', 'for', 'to' are not used as dimensions in the example.",
              "'man', 'fish' and 'feed' each appear twice (once in each sentence), while 'give', 'day', 'teach' and 'lifetime' appear once."
            ]
          },
          {
            "heading": "Pros and cons of bag-of-words (slide p.15)",
            "points": [
              "Pro: allows variable-length data to be fed into a typical feedforward network.",
              "Pro: variable-length features can easily be combined with fixed-length features.",
              "Pro: widespread empirical success.",
              "Con: destroys the structure of the input, e.g. 'The cat sat on the mat' is not the same as the multiset {cat, sat, the, the, mat, on}; word order is lost.",
              "Con: words are all independent, so synonyms are ignored.",
              "Con: high dimensionality and sparsity.",
              "The latter two cons (independence / synonyms and high dimensionality / sparsity) are solved by word embeddings such as Word2Vec; the first con (lost order) motivates using neural networks that capture the sequential structure of words, i.e. RNNs."
            ]
          }
        ]
      },
      {
        "id": "w7-rnn-fundamentals",
        "title": "Recurrent Neural Network Fundamentals",
        "sections": [
          {
            "heading": "Two-dimensional view and the simplest RNN (slides p.16-17)",
            "points": [
              "When inputs are associated with time (e.g. images become video), networks must encode the time dimension and features must also be associated with time; the figure shows a grid with depth (layers) on the vertical axis and time on the horizontal axis, with arrows flowing both upward and forward in time (slide p.16).",
              "The simplest possible RNN has one neuron that receives inputs, produces an output, and sends that output back to itself (slide p.17).",
              "Simplest RNN equation: y(t) = σ(wᵀ x(t) + y(t-1) + b); unrolled through time it becomes a chain of copies of the same neuron with inputs x(0), x(1), x(2), x(3).",
              "Unrolling (unfolding) the network through time turns the loop into a feedforward-looking chain, one copy per time step, all sharing the same weights."
            ]
          },
          {
            "heading": "A full RNN layer (slide p.18)",
            "points": [
              "One RNN layer consists of multiple neurons; every neuron receives both the input vector x(t) and the output vector from the previous time step y(t-1).",
              "Layer equation: y(t) = σ(W_xᵀ x(t) + W_yᵀ y(t-1) + b), with W_x the input weights and W_y the recurrent weights.",
              "y(t-1) is a function of x(t-1) and y(t-2), which is a function of x(t-2) and y(t-3), and so on.",
              "Therefore y(t-1) (and y(t)) is a function of all the inputs since time t = 0, which is what gives an RNN its memory."
            ]
          },
          {
            "heading": "Memory cells and the RNN cell abstraction (slides p.19-20)",
            "points": [
              "Because the output at step t depends on all previous inputs, a recurrent neuron has a form of memory (slide p.19).",
              "Memory cell (or simply cell): the practical building component of an RNN that preserves some state across time steps.",
              "A cell keeps state h(t-1), takes input x(t), produces output y(t) and updates its preserved state to h(t): h(t) = σ(W_xᵀ x(t) + W_hᵀ h(t-1) + b) and y(t) = W_yᵀ h(t) + b_y.",
              "Interface: output, end_state = rnn_cell(input, start_state); the start state h(t-1) and end state h(t) must have the same dimension (slide p.20).",
              "Each cell (time step) is identical and they share weights, so training an RNN really means training a single cell that is used repeatedly; this keeps the parameter count independent of sequence length."
            ]
          },
          {
            "heading": "Deep RNNs (slide p.21)",
            "points": [
              "It is common to stack multiple layers of cells, giving a deep RNN; each layer's output sequence becomes the input sequence of the layer above.",
              "The figure shows three stacked cells per time step, unrolled over X(0) ... X(t), producing outputs Y(0) ... Y(t).",
              "Commonly used cell types: Vanilla RNN, GRU and LSTM."
            ]
          }
        ]
      },
      {
        "id": "w7-vanilla-rnn",
        "title": "Vanilla RNN: Equations, tanh and a Worked Example",
        "sections": [
          {
            "heading": "Vanilla RNN equations (slides p.23-24)",
            "points": [
              "The vanilla RNN is the simplest cell: a single block A that takes x(t) and h(t-1), and whose hidden state is passed to the next step (unrolled diagram from colah's blog, slide p.23).",
              "Hidden state: h(t) = tanh(W_xᵀ x(t) + W_hᵀ h(t-1) + b). Output: y(t) = W_yᵀ h(t) + b_y (slide p.24).",
              "Inside the cell there is a single tanh layer applied to the combination of x(t) and h(t-1); the y layer is omitted from the diagram.",
              "Parameter count for input dimension d and hidden size n (excluding the output layer): W_x has d·n, W_h has n·n and b has n, so d·n + n² + n; e.g. d = 10, n = 20 gives 200 + 400 + 20 = 620 parameters, regardless of sequence length because weights are shared."
            ]
          },
          {
            "heading": "Hyperbolic tangent (slide p.25)",
            "points": [
              "tanh(x) = sinh(x)/cosh(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ) = (e²ˣ - 1)/(e²ˣ + 1) = (1 - e⁻²ˣ)/(1 + e⁻²ˣ), with range (-1, 1).",
              "tanh is a rescaled sigmoid: tanh(x) = 2·σ(2x) - 1 (e.g. tanh(0) = 2·0.5 - 1 = 0).",
              "Sigmoid and tanh are almost the same shape; sigmoid ranges over (0, 1) and passes through 0.5 at x = 0, whereas tanh ranges over (-1, 1) and passes through 0 at x = 0 with a steeper slope.",
              "Use tanh when desired outputs are expected to range between -1 and 1; tanh makes the convergence of RNNs faster."
            ]
          },
          {
            "heading": "Character-level example 'hello' (slide p.26)",
            "points": [
              "Vocabulary {h, e, l, o} with one-hot inputs of size 4; input characters 'h', 'e', 'l', 'l' and target characters 'e', 'l', 'l', 'o' (predict the next character).",
              "The hidden layer has 3 units; hidden states shown are (0.3, -0.1, 0.9), (1.0, 0.3, 0.1), (0.1, -0.5, -0.3), (-0.3, 0.9, 0.7), connected by W_hh, with W_xh from input to hidden and W_hy from hidden to output.",
              "Output scores (4 per step): step 1 (1.0, 2.2, -3.0, 4.1), step 2 (0.5, 0.3, -1.0, 1.2), step 3 (0.1, 0.5, 1.9, -1.1), step 4 (0.2, -1.5, -0.1, 2.2); the green number in each column is the score of the correct target.",
              "Taking argmax, steps 3 and 4 are correct (1.9 for 'l', 2.2 for 'o') but steps 1 and 2 are wrong (4.1 for 'o' instead of 2.2 for 'e'; 1.2 for 'o' instead of -1.0 for 'l'), so training should raise the green scores.",
              "The cell maintains a state h whose value h(t) updates with time; h(t) takes both input x(t) and previous state h(t-1), and y(t) is computed from h(t).",
              "Parameter count for this toy model: W_xh 4x3 = 12, W_hh 3x3 = 9, b 3, W_hy 3x4 = 12, b_y 4, total 40."
            ]
          }
        ]
      },
      {
        "id": "w7-rnn-training-gradients",
        "title": "Training RNNs: Loss, BPTT and Vanishing/Exploding Gradients",
        "sections": [
          {
            "heading": "Loss and back-propagation through time (slides p.27-28)",
            "points": [
              "In the unrolled network each time step t produces y(t), which is compared with a target t(t) to give a per-step loss L(t) (slide p.27).",
              "The total loss aggregates the per-step losses across all time steps (the figure on slide p.28 shows every output connected to a single Loss box).",
              "Back-propagation through time (BPTT): the forward pass runs left to right through time, then gradients flow right to left (red arrow) back through every unrolled time step.",
              "Because the same weights are shared across steps, the gradient for each weight is accumulated from all time steps."
            ]
          },
          {
            "heading": "Vanilla RNN gradient flow (slides p.29-30)",
            "points": [
              "The vanilla update can be rewritten by stacking: h_t = tanh(W_hᵀ h(t-1) + W_xᵀ x(t)) = tanh([W_hᵀ W_xᵀ] [h(t-1); x(t)]) = tanh(Wᵀ [h(t-1); x(t)]), i.e. one matrix W applied to the stacked vector.",
              "Diagram: h(t-1) and x(t) are stacked, multiplied by W, passed through tanh to give h(t).",
              "Backpropagation from h(t) to h(t-1) passes back through tanh and multiplies by W (or a related matrix) (slide p.30)."
            ]
          },
          {
            "heading": "Vanishing and exploding gradients (slide p.31)",
            "points": [
              "Computing the gradient with respect to h_0 across a chain h_0, h_1, h_2, h_3, h_4 involves many factors of W and repeated tanh.",
              "If the largest singular value of W is > 1, gradients explode; remedy: gradient clipping, i.e. scale the gradient if its norm is too big.",
              "If the largest singular value is < 1, gradients vanish; remedy: change the RNN architecture.",
              "Illustration of the repeated multiplication: over 50 steps a factor of 1.1 grows to about 1.1⁵⁰ ≈ 117, while a factor of 0.9 shrinks to about 0.9⁵⁰ ≈ 0.005.",
              "Consequence: long chain connections between inputs and outputs that are far apart are difficult to learn (long-range dependencies).",
              "A solution is long short-term memory (LSTM) cells."
            ]
          }
        ]
      },
      {
        "id": "w7-lstm",
        "title": "LSTM: Long Short-Term Memory Networks",
        "sections": [
          {
            "heading": "Architecture and gates (slides p.33-35)",
            "points": [
              "An LSTM cell (diagram from Christopher Olah, Understanding LSTM Networks) carries two states between steps: the cell state C (top line) and the hidden state h (bottom line); it contains four neural network layers (three σ, one tanh) plus pointwise operations (x, +, tanh). Legend: neural network layer, pointwise operation, vector transfer, concatenate, copy.",
              "Gate: an element-wise sigmoid followed by element-wise multiplication; it is differentiable and therefore trainable, and σ(·) ∈ [0, 1] decides how much information to let through (0 = block, 1 = pass) (slide p.34).",
              "Cell state as a 'conveyor belt': it runs straight through the chain with only minor linear interactions (one multiply, one add), and the LSTM can 'add' or 'remove' information to it via gates (slide p.35).",
              "Why it matters: the additive cell-state path lets information and gradients travel over long distances, addressing the vanishing-gradient / long-dependency problem of vanilla RNNs."
            ]
          },
          {
            "heading": "Gate equations (slides p.36-39)",
            "points": [
              "Forget gate: f_t = σ(W_f · [h_(t-1), x_t] + b_f), computed from the concatenation of previous hidden state and current input (slide p.36).",
              "Input gate: i_t = σ(W_i · [h_(t-1), x_t] + b_i); candidate state: C̃_t = tanh(W_C · [h_(t-1), x_t] + b_C) (slide p.37).",
              "Cell state update: C_t = f_t * C_(t-1) + i_t * C̃_t (element-wise), i.e. keep the fraction f_t of the old memory and add the fraction i_t of the new candidate (slide p.38).",
              "Output gate: o_t = σ(W_o · [h_(t-1), x_t] + b_o); hidden state: h_t = o_t * tanh(C_t) (slide p.39).",
              "Worked example: f = 0.5, C_(t-1) = 2, i = 0.8, C̃ = 0.5 gives C_t = 1.0 + 0.4 = 1.4; with o = 0.9, h_t = 0.9 · tanh(1.4) ≈ 0.797.",
              "Since there are four weight matrices each acting on [h, x], an LSTM with input size d and hidden size n has 4·(n·(n + d) + n) parameters, four times a vanilla RNN cell; e.g. d = 10, n = 20 gives 2480 versus 620."
            ]
          },
          {
            "heading": "Role of each gate (slide p.40)",
            "points": [
              "Forget gate: controls which parts of the long-term state should be erased.",
              "Input gate: controls which parts of the candidates should be added to the long-term state.",
              "Output gate: controls which parts of the long-term state should be read and output at this time step, both to h(t) and y(t).",
              "The long-term state is C_t; the short-term state / output is h_t."
            ]
          }
        ]
      },
      {
        "id": "w7-why-attention",
        "title": "Motivation for Attention: Are All Words Equal?",
        "sections": [
          {
            "heading": "Not all context is equally relevant",
            "points": [
              "The lecture opens the Self-Attention segment with the paper 'Attention Is All You Need' (Vaswani et al., NeurIPS 2017), whose core equation is Attention(Q, K, V) = softmax(QKᵀ / √d_k) V (slide p.43).",
              "Word sense depends on selected context words: in 'The animal drank water from the river bank' vs 'The employee opened a new account at the city bank', you resolve 'bank' by paying attention to words like 'river'/'water' or 'account'/'employee' (slide p.44).",
              "In 'Milo is very cute, and he is a dog', the word 'he' relates strongly to 'Milo' and 'dog' (more relevant) and only weakly to 'very' and 'cute' (less relevant) (slide p.46).",
              "The same idea applies in vision: image-captioning attention maps (Xu et al., arXiv 1502.03044) light up the region of the image matching the underlined word, e.g. the frisbee, the dog, the stop sign or the trees (slide p.45).",
              "A machine-translation attention matrix (English 'The agreement on the European Economic Area was signed in August 1992.' to French) is mostly diagonal, but shows reordering: 'zone économique européenne' attends to 'Area Economic European' in reversed order (slide p.47)."
            ]
          },
          {
            "heading": "From average to weighted average",
            "points": [
              "Statisticians handle 'not equal' importance by replacing a plain average with a weighted average (slide p.48).",
              "Worked example: Milo = 0.1 x very + 0.3 x cute + 0.6 x dog, where 0.1, 0.3, 0.6 are attention scores (weights) and the word vectors are the values (slide p.48).",
              "Numerically, first component: 0.1(0.01) + 0.3(0.11) + 0.6(0.23) = 0.172, reported as 0.17; last component: 0.1(0.02) + 0.3(0.18) + 0.6(0.06) = 0.092, reported as 0.09 (slide p.48).",
              "The attention weights are calculated from queries and keys; the vectors being averaged are the values. This separation of roles (Q, K, V) is the basis of self-attention.",
              "Why it matters: the output representation of a word becomes a context-dependent mixture of other words' information, rather than a fixed embedding."
            ]
          }
        ]
      },
      {
        "id": "w7-qkv-self-attention",
        "title": "Self-Attention: Queries, Keys and Values",
        "sections": [
          {
            "heading": "Queries and keys",
            "points": [
              "Plain similarity between two words is the dot product of their embeddings: similarity(word_i, word_j) = w_iᵀ w_j = w_jᵀ w_i, with 512-dimensional embeddings in the example 'Singapore (word_i) is one of the best locations (word_j) for conferences' (slide p.49).",
              "Learned projections W^Q, W^K (each 512 x 3 in the toy example) turn the embedding into a 3-dimensional query q_j and key k_i; each row of W^Q / W^K is one learned 'question' or 'feature' (rows illustrated as 'not this / no, no / yes, it is' for queries and '-who?- / -what?- / -where?-' for keys) (slide p.49).",
              "The query transforms a word embedding into 'the context I am looking for'; the key transforms a word embedding into its 'local context', i.e. what it offers to be matched (slide p.49).",
              "Score: q_jᵀ k_i = ((W^Q)ᵀ w_j)ᵀ ((W^K)ᵀ w_i) = w_jᵀ W^Q (W^K)ᵀ w_i. Compared with plain w_jᵀ w_i, the learned matrix W^Q(W^K)ᵀ makes the similarity asymmetric and task-specific (slide p.51).",
              "For a 300-word paragraph, stack queries into Q (300 rows q_1ᵀ ... q_300ᵀ) and keys into K; QKᵀ is a 300 x 300 matrix whose entry q_jᵀ k_i is the attention of word_i when generating word_j (slide p.51).",
              "Analogy (Chinese medical hall drawers, slide p.50): the labels on drawers act as keys, what you ask for is the query, and the contents of the drawer you open are the values."
            ]
          },
          {
            "heading": "Values and the output",
            "points": [
              "Values are transformed input vectors: v_i = (W^V)ᵀ w_i with rows w_1^V ... w_{d_v}^V, giving d_v-dimensional values stacked into V (300 rows) (slide p.52).",
              "Output of word j is a weighted average of the values of all words: o_j = Σ_{i=1}^{300} (q_jᵀ k_i) v_i, where the weight of word i is the attention weight, proportional to q_jᵀ k_i (slide p.52).",
              "Softmax converts raw attention scores q_jᵀ k_i into attention weights that are positive and sum to 1 (slide p.52).",
              "In matrix form this is exactly Attention(Q, K, V) = softmax(QKᵀ / √d_k) V (slide p.52, citing arXiv 1706.03762)."
            ]
          },
          {
            "heading": "Self-attention as a layer",
            "points": [
              "Word embeddings go into a self-attention block, which outputs one vector per word 'with context information'; each output vector then passes through a fully connected (FC) layer to produce output words (slide p.53).",
              "Layers can be stacked: self-attention, then per-position FC, whose outputs are the input vectors for the next self-attention layer, then FC again (slides p.54, p.69).",
              "Self-attention maps a sequence a¹..a⁴ to b¹..b⁴; every output bⁱ is connected to (considers) every input, as shown by the fully connected dotted lines (slide p.70)."
            ]
          }
        ]
      },
      {
        "id": "w7-sa-vs-cnn",
        "title": "Self-Attention vs CNN",
        "sections": [
          {
            "heading": "Images as vector sets",
            "points": [
              "An image can be considered a vector set: a 5 x 10 RGB image has 3 channels, and the 3 channel values at each pixel form one vector (slide p.55).",
              "So self-attention can be applied to images by treating each pixel (vector) as a token, just as words are tokens in text."
            ]
          },
          {
            "heading": "Receptive field comparison",
            "points": [
              "CNN is self-attention that can only attend within a fixed receptive field (e.g. a 3 x 3 window around the pixel), so CNN is a simplified self-attention (slide p.56).",
              "Self-attention is a CNN with a learnable receptive field: a pixel can attend to any other pixel anywhere in the image, and which ones it attends to is learned (slide p.56).",
              "Set relationship: the class of CNN functions is drawn as a subset inside the class of self-attention functions (Cordonnier, Loukas, Jaggi 2019, 'On the relationship between self-attention and convolutional layers') (slide p.56).",
              "Implication: self-attention is the more flexible (complex) model; CNN's restriction acts as a built-in inductive bias."
            ]
          }
        ]
      },
      {
        "id": "w7-encoder-decoder",
        "title": "Encoder-Decoder Architectures and Encoder-Decoder Attention",
        "sections": [
          {
            "heading": "Encoder-decoder idea",
            "points": [
              "The encoder converts the input into an abstracted representation called the code; the decoder decodes the code to regenerate the input or to produce output in a different domain (slide p.58).",
              "Many practical problems fit the encoder-decoder formulation: translation, captioning, speech-to-text and audio generation (slide p.58).",
              "FNN-based encoder-decoder: 784-unit input, Hidden 1 = 100 units, Hidden 2 = 30 units (the codings), Hidden 3 = 100 units, 784-unit output giving reconstructions (slide p.59).",
              "CNN-based encoder-decoder (ECRU road-scene segmentation): convolutional encoder (Conv + BN + ELU, 3x3 kernels, stride 1, padding 1; 2x2 max pooling, stride 2) and convolutional decoder (upsampling using pooling indices, De-Conv + BN + PReLU) ending in softmax over 11 classes; input is an RGB image, output a segmentation map (slide p.60).",
              "RNN-based encoder-decoder (seq2seq): embedded English 'He loved to eat .' is read by the encoder RNN into a single state S; the decoder RNN starts from S with input NULL, then feeds back its previous word to emit 'Er liebte zu essen .' through a softmax (slide p.61)."
            ]
          },
          {
            "heading": "Attention between encoder and decoder",
            "points": [
              "Without attention there is one source summary: all source information passes through one final encoder state s, a bottleneck (slide p.62).",
              "With attention there is a new read at each output step: the decoder query q_t (before prediction) attends over the contextual encoder states h_1..h_4 to form a context vector c_t = Σ_i α_{t,i} h_i (slide p.62).",
              "Example 'I live in Singapore.' to Chinese: weights for 我 are (I 0.80, live 0.05, in 0.05, Singapore 0.10); for 住在 (0.05, 0.55, 0.35, 0.05); for 新加坡 (0.05, 0.10, 0.05, 0.80). Each row sums to 1 (slide p.62).",
              "Hence c_2 = 0.05 h_I + 0.55 h_live + 0.35 h_in + 0.05 h_Singapore: '住在' (live in) mixes mainly 'live' and 'in' (slide p.62).",
              "Key message: different predictions use different mixtures of the same source states (slide p.62)."
            ]
          }
        ]
      },
      {
        "id": "w7-autoencoders",
        "title": "Autoencoders: Standard, Denoising and Variational",
        "sections": [
          {
            "heading": "Autoencoder",
            "points": [
              "Autoencoders learn to copy their inputs to their outputs using an encoder-decoder structure (slide p.63).",
              "They learn dense representations of the input, called latent representations or codings, without any supervision (unsupervised) (slide p.63).",
              "Codings typically have much lower dimensionality than the input (e.g. 784 to 30 units), making autoencoders useful for dimensionality reduction (slide p.63).",
              "Toy example on the slide: an 8-input, 8-output network with a tiny hidden layer reproduces one-hot inputs (10000000 to 10000000, etc.), so the hidden layer must learn a compact code for 8 distinct patterns (slide p.63).",
              "Parameter count of the 784-100-30-100-784 stacked autoencoder: weights 78,400 + 3,000 + 3,000 + 78,400 = 162,800 plus biases 100 + 30 + 100 + 784 = 1,014, total 163,814."
            ]
          },
          {
            "heading": "Denoising autoencoder",
            "points": [
              "To force the autoencoder to learn useful features, add noise to its inputs and train it to recover the original, noise-free inputs (slide p.64).",
              "Two ways shown: add Gaussian noise to the input, or apply dropout to the input layer, before Hidden 1 (slide p.64).",
              "Why it matters: the network cannot simply copy the input (identity), so it must capture the underlying structure of the data."
            ]
          },
          {
            "heading": "Variational autoencoder (VAE)",
            "points": [
              "Instead of producing a coding directly, the encoder outputs a mean coding μ and a standard deviation σ (slide p.65).",
              "The actual coding is sampled randomly from a Gaussian with mean μ and standard deviation σ; in the diagram, Gaussian noise is multiplied by σ and added to μ (coding = μ + σ x noise) (slide p.65).",
              "The decoder then decodes the sampled coding normally (Hidden 4, Hidden 5, Output) (slide p.65).",
              "Training-instance walk-through: encoder produces μ and σ, a coding is sampled (not exactly located at μ), the coding is decoded, and the final output resembles the training instance (slide p.66).",
              "Contrast: a standard autoencoder maps an input to one deterministic coding; a VAE maps it to a distribution in coding space, which makes the model probabilistic/generative."
            ]
          }
        ]
      },
      {
        "id": "w7-transformer-self-attention-mechanics",
        "title": "The Transformer and Self-Attention Step by Step",
        "sections": [
          {
            "heading": "Transformer overview",
            "points": [
              "Components to be covered: encoder, decoder, self-attention, multi-head self-attention, positional encoding, masked self-attention and cross attention (slide p.68).",
              "Architecture figure: encoder (N x) = [Multi-Head Attention, Add & Norm, Feed Forward, Add & Norm]; input = input embedding + positional encoding (slide p.68).",
              "Decoder (N x) = [Masked Multi-Head Attention, Add & Norm, Multi-Head Attention over encoder outputs (cross attention), Add & Norm, Feed Forward, Add & Norm]; input = output embedding (outputs shifted right) + positional encoding; then Linear and Softmax give output probabilities (slide p.68)."
            ]
          },
          {
            "heading": "Computing one output b¹",
            "points": [
              "Goal: find the relevance α between a¹ and each other vector in the sequence (slide p.71).",
              "Two ways to compute α: dot-product, α = q · k with q = W^q(input), k = W^k(input); or additive, where W^q and W^k outputs are added, passed through tanh, then multiplied by W to give α. Dot-product is the one used (highlighted) (slide p.72).",
              "q¹ = W^q a¹ is the query; kⁱ = W^k aⁱ are the keys; attention scores α_{1←i} = q¹ · kⁱ, including α_{1←1} = q¹ · k¹ with itself (slides p.73-74).",
              "Softmax over the scores gives attention weights α'_{1←i} = exp(α_{1←i}) / Σ_j exp(α_{1←j}) (slide p.74).",
              "Values vⁱ = W^v aⁱ; output b¹ = Σ_i α'_{1←i} vⁱ, the weighted sum by attention weights (slide p.75).",
              "b², b³, b⁴ are computed the same way using q², q³, q⁴, e.g. b² = Σ_i α'_{2←i} vⁱ; all outputs can be computed in parallel, unlike an RNN (slides p.76-77)."
            ]
          },
          {
            "heading": "Matrix form",
            "points": [
              "Stack inputs as columns I = [a¹ a² a³ a⁴]; then [q¹..q⁴] = W^q I = Qᵀ, [k¹..k⁴] = W^k I = Kᵀ, [v¹..v⁴] = W^v I = Vᵀ. Only W^q, W^k, W^v are learned (slide p.78).",
              "Row of scores for query 1: [α_{1←1} α_{1←2} α_{1←3} α_{1←4}] = q¹ᵀ [k¹ k² k³ k⁴] (slide p.79).",
              "All scores at once: A = QKᵀ, a 4 x 4 matrix with row i holding query i's scores against every key (slide p.80).",
              "A' is obtained by (1) scaling by 1/√d_k and (2) row-wise softmax, so each row of A' sums to 1 (slide p.80).",
              "Output then is A'V, which is exactly softmax(QKᵀ/√d_k)V. Cost: with n tokens, A has n x n entries (16 for 4 tokens; 90,000 for 300 words)."
            ]
          }
        ]
      },
      {
        "id": "w7-self-attention-matrix-form",
        "title": "Self-Attention in Matrix Form and a Worked Example",
        "sections": [
          {
            "heading": "From scores to outputs (slides p.79-82)",
            "points": [
              "For query q^1, the raw attention scores are dot products with every key: α(1 from j) = q^1 · k^j for j = 1..4; stacking all queries gives the raw score matrix A = QKᵀ, where row i holds query i's scores against all keys (slide p.80).",
              "The raw matrix A is turned into the attention matrix A' in two steps: (1) scale every entry by 1/√d_k, then (2) apply a row-wise softmax so each row of A' sums to 1 (slide p.80).",
              "Each output is a weighted sum of value vectors: b^1 = Σ_j α'(1 from j) v^j; in matrix form O = A'V = softmax(QKᵀ/√d_k)V, so row i of O is token i's contextualised output (slide p.81).",
              "The slides justify the scaling: √d_k is the standard deviation of the raw attention scores, so dividing by √d_k is a standard normalisation that keeps scores from growing with the key dimension (slide p.81).",
              "Summary (slide p.82): Q = W^q I, K = W^k I, V = W^v I, where I is the input; A = QKᵀ, A' = normalised A (the 'Attention Matrix'), and O = A'V. The only parameters to be learned are W^q, W^k and W^v; everything else is computed."
            ]
          },
          {
            "heading": "Worked example: two tokens, one head, d_k = 2 (slide p.83)",
            "points": [
              "Row convention: each token occupies one row of X. Here X = W_Q = W_K = I (2x2 identity) and W_V = [[2,0],[0,4]], so Q = XW_Q = X, K = XW_K = X, and V = XW_V = [[2,0],[0,4]].",
              "Scaled scores: S = QKᵀ/√d_k = I/√2 = [[0.7071, 0],[0, 0.7071]], because each token's query matches only its own key.",
              "Row softmax: e^0.7071/(e^0.7071 + e^0) ≈ 0.67, so A' ≈ [[0.67, 0.33],[0.33, 0.67]]; each token attends about two-thirds to itself and one-third to the other token.",
              "Mix the values: O = A'V ≈ [[0.67x2, 0.33x4],[0.33x2, 0.67x4]] = [[1.34, 1.32],[0.66, 2.68]]. Each output row is a blend of both value rows, weighted by that row of A'.",
              "Exam tip: the steps are always project (Q, K, V), score and scale (QKᵀ/√d_k), row-softmax, then multiply by V; dimension check: (n x d_k)(d_k x n) gives an n x n attention matrix, times (n x d_v) gives an n x d_v output."
            ]
          }
        ]
      },
      {
        "id": "w7-multi-head-add-norm",
        "title": "Multi-Head Self-Attention and Add & Norm",
        "sections": [
          {
            "heading": "Multi-head self-attention (slides p.84-86)",
            "points": [
              "Each input a^i is first projected to q^i = W^q a^i (and likewise k^i, v^i); with 2 heads, each is then split into head-specific versions, e.g. q^(i,1) = W^(q,1) q^i and q^(i,2) = W^(q,2) q^i, and similarly for keys and values (slide p.84).",
              "Head 1 only uses head-1 vectors: q^(i,1) is dotted with k^(i,1) and k^(j,1), and the weights multiply v^(i,1) and v^(j,1) to give b^(i,1); head 2 does the same independently with the ,2 vectors to give b^(i,2) (slides p.84-85).",
              "The head outputs are concatenated and mixed by a learned output matrix: b^i = W^O [b^(i,1); b^(i,2)] (slide p.86).",
              "Why it matters: different heads can capture different kinds of relationships between tokens in parallel, and the heads are computed simultaneously, which is part of why transformers are fast (slide p.106 lists multi-head attention under parallelism)."
            ]
          },
          {
            "heading": "Add: residual connection (slide p.87)",
            "points": [
              "Each sub-layer (multi-head attention, feed-forward) in an encoder block is wrapped as 'Add & Norm'; the block is repeated N times (Nx in the diagram).",
              "Add is a residual connection: the output is F(x) + x, where F(x) is the sub-layer and x is the identity shortcut, the same idea as ResNet's weight layer, relu, weight layer plus identity.",
              "Self-attention is applied on residuals, and the shortcut helps prevent the vanishing gradient problem because gradients can flow directly through the identity path.",
              "On slide p.88 this is drawn as the self-attention output b plus the original input a, giving a + b, which is then passed into the norm."
            ]
          },
          {
            "heading": "Norm: layer normalisation (slides p.87-88)",
            "points": [
              "Layer Normalisation normalises each element of a single vector using the mean m and standard deviation σ computed across all K elements of that same vector: x'_i = (x_i − m)/σ (slide p.88, arXiv 1607.06450).",
              "Contrast with batch norm: layer norm uses statistics of one vector (one token), not statistics across a batch, so it works per token regardless of batch size.",
              "Purpose given on the slide: stabilise activations and prevent Internal Covariate Shift (ICS).",
              "Example: x = [1, 2, 3, 4] has m = 2.5 and σ ≈ 1.118, so x' ≈ [−1.34, −0.45, 0.45, 1.34]; scaling x to [2, 4, 6, 8] gives the same x', showing layer norm removes the vector's scale and shift."
            ]
          }
        ]
      },
      {
        "id": "w7-positional-encoding-bert",
        "title": "Positional Encoding and Encoder-Only Transformers (BERT)",
        "sections": [
          {
            "heading": "Sinusoidal positional encoding (slide p.89)",
            "points": [
              "Input to the Transformer = word embedding + positional encoding, because self-attention by itself does not take care of positional information (it treats the input as an unordered set).",
              "One unique positional vector is hand-crafted for each position, and it must have the same length (d_model) as the word embeddings so the two can be added.",
              "For 0 ≤ i < d_model/2: PE(pos, 2i) = sin(pos / 10000^(i/(d_model/2))) and PE(pos, 2i+1) = cos(pos / 10000^(i/(d_model/2))); each i gives one (sin, cos) pair.",
              "Worked example with d_model = 4: there are two (sin, cos) pairs; i = 0 gives exponent 0 (divisor 10000^0 = 1) and i = 1 gives exponent 0.5 (divisor 10000^0.5 = 100).",
              "For pos = 1: PE = [sin(1), cos(1), sin(0.01), cos(0.01)] ≈ [0.84, 0.54, 0.01, 1.00]. Low dimensions vary quickly with position; higher dimensions vary slowly."
            ]
          },
          {
            "heading": "BERT: encoder-only transformer (slides p.90-91)",
            "points": [
              "The transformer can be used without the decoder: this is BERT, Bidirectional Encoder Representations from Transformers (arXiv 1810.04805).",
              "Each BERT input token is the sum of three embeddings: word embedding, segment embedding and positional embedding, giving one vector per token.",
              "BERT learns a sequence of contextualised vectors, one per input token, each encoded with the contextual information from the whole sentence; this can be seen as 'feature extraction'.",
              "BERT is paired with different downstream decoders/heads per task (slide p.91): sentence-pair or single-sentence classification uses the [CLS] output C to predict a class label (e.g. MNLI, QQP, RTE, SWAG); question answering (SQuAD v1.1) predicts start/end spans over the paragraph tokens from a [CLS] Question [SEP] Paragraph input; single-sentence tagging (CoNLL-2003 NER) predicts a label (e.g. O, B-PER) for every token."
            ]
          }
        ]
      },
      {
        "id": "w7-transformer-decoder",
        "title": "The Full Transformer: Autoregressive Decoder, Masking and Cross Attention",
        "sections": [
          {
            "heading": "Architecture overview and shifted-right inputs (slides p.92-93)",
            "points": [
              "The full Transformer combines: encoder, decoder, self-attention, multi-head self-attention, positional encoding, masked self-attention and cross attention (slide p.92).",
              "Encoder block (xN): multi-head attention then Add & Norm, feed-forward then Add & Norm. Decoder block (xN): masked multi-head attention plus Add & Norm, multi-head (cross) attention over the encoder output plus Add & Norm, feed-forward plus Add & Norm, then a final Linear layer and Softmax giving output probabilities.",
              "The decoder input is the output sequence 'shifted right': as in Seq2Seq (Sutskever et al., 2014), the encoder reads A, B, C, and the decoder is fed <EOS>, W, X, Y, Z while predicting W, X, Y, Z, <EOS>, i.e. each position receives the previous target token as input."
            ]
          },
          {
            "heading": "Autoregressive decoding and the stop token (slides p.94-102)",
            "points": [
              "Example task: speech recognition of the audio 'long short term memory'. The encoder turns audio frames into vectors; the decoder starts from a special START token.",
              "At each step the decoder outputs a softmax distribution over a vocabulary of size V (common characters/words), e.g. short 0.02, long 0.08, term 0.01, memory 0.01, and the max ('long') is chosen (slide p.94).",
              "Autoregressive: each chosen output is fed back as the next decoder input, so START gives 'long', then 'long' gives 'short', 'short' gives 'term', 'term' gives 'memory' (slides p.95-96).",
              "Without a way to stop, the decoder never stops (it would continue with 'cell' after 'memory', slide p.100); the fix is to add an END (stop) token to the vocabulary, so the softmax is over V words plus END, and generation stops when END is the max (slides p.101-102)."
            ]
          },
          {
            "heading": "Masked self-attention (slides p.97-99)",
            "points": [
              "In ordinary self-attention every output b^i looks at all inputs a^1..a^4 (slide p.98).",
              "In masked self-attention, b^2 may only use q^2 with k^1, k^2 and v^1, v^2; positions 3 and 4 are blocked, so token i can only attend to tokens at positions ≤ i (slide p.99).",
              "Why masked: think about how the decoder works. It produces tokens one at a time, so when generating position i the later tokens do not exist yet; the mask makes training consistent with this left-to-right generation.",
              "Counting example: for 4 tokens, a causal mask keeps 4 + 3 + 2 + 1 = 10 of the 16 attention weights and blocks the other 6."
            ]
          },
          {
            "heading": "Cross attention (slides p.103-105)",
            "points": [
              "Cross attention is the decoder's middle multi-head attention block; it connects the decoder to the encoder output.",
              "Keys and values come from the encoder outputs a^1, a^2, a^3 (k^i, v^i), while the query q comes from the decoder's masked self-attention output for the current position.",
              "Weights α'_1, α'_2, α'_3 are computed from q and each k^i, and the result v = Σ α'_i v^i is passed through an FC (feed-forward) layer (slide p.104).",
              "At the next step, the decoder input is START plus 'long'; its new query q' attends again over the same encoder keys/values to produce v' (slide p.105)."
            ]
          }
        ]
      },
      {
        "id": "w7-self-attention-vs-rnn",
        "title": "Self-Attention vs RNN and Linear Attention (Optional)",
        "sections": [
          {
            "heading": "Why transformers beat RNNs (slides p.106-108)",
            "points": [
              "Faster through parallelism: the transformer reads all word embeddings at once and uses multi-head attention, rather than processing tokens one by one (slide p.106).",
              "Long-term relationships: every token can attend directly to every other token, so distance in the sequence does not weaken the connection (slide p.106 poses 'How does it memorise long-term relationship?').",
              "Comparison table (slide p.107): inference, self-attention's compute and memory grow with sequence length, while an RNN's are fixed; training, self-attention is easy to parallelise, while an RNN is 'difficult to parallelise?' (questioned, citing 'Transformers are RNNs', arXiv 2006.16236).",
              "Vanilla RNN recap (slide p.108): h(t) = tanh(W_xᵀ x(t) + W_hᵀ h(t−1) + b) and y(t) = W_yᵀ h(t) + b_y; the example is a character model taking 'h','e','l','l' as one-hot inputs to predict 'e','l','l','o'."
            ]
          },
          {
            "heading": "From a generalised RNN to linear attention (optional, slides p.109-114)",
            "points": [
              "Generalised RNN: H(t) = r(t)(H(t−1)) + f(t)(x(t)) and y(t) = g(t)(H(t)), where H is a memory cell (a moving window) and y is the output observed at each time step (slide p.109).",
              "With H(0) = 0, unrolling gives nested recursion, e.g. H(3) = r(3)(r(2)(f(1)(x(1))) + f(2)(x(2))) + f(3)(x(3)); each H(t) needs H(t−1), so there is no parallelism (slides p.110-111).",
              "Removing r (make it the identity) gives H(t) = H(t−1) + f(t)(x(t)) = f(1)(x(1)) + ... + f(t)(x(t)), a plain sum that can be computed in parallel (slide p.112).",
              "Let f(t)(x(t)) = D(t) (a square matrix) and g(t)(H(t)) = H(t) q(t) with q(t) = W^Q x(t); then y(t) = D(1)q(t) + ... + D(t)q(t) (slide p.113).",
              "Let D(t) = v(t) k(t)ᵀ be rank-1, with v(t) = W^V x(t) and k(t) = W^K x(t): y(t) = Σ_{s ≤ t} v(s) k(s)ᵀ q(t). This is self-attention without softmax, called linear attention, and it is causal (only s ≤ t), like masked self-attention (slide p.114)."
            ]
          },
          {
            "heading": "Linear attention models, Mamba and throughput (optional, slides p.115-117)",
            "points": [
              "Many modern models share the recurrence S_t = S_(t−1) + v_t k_tᵀ with read-out o_t = S_t q_t (linear attention); variants add decay or gating, e.g. RetNet S_t = γ S_(t−1) + v_t k_tᵀ and Mamba-2 S_t = γ_t S_(t−1) + v_t k_tᵀ (table from arXiv 2406.06484; RetNet, Mamba and Mamba-2 are highlighted).",
              "Perplexity PP = exp(−(1/N) Σ log P(w_i | w_1..w_(i−1))) is the exponential of the average negative log-likelihood of the true next token; it measures a probabilistic model's uncertainty (lower is better). FLOPs (floating point operations) measure computational complexity (slide p.116).",
              "Scaling-law plots on The Pile (sequence lengths 2048 and 8192) show perplexity falling with FLOPs for Hyena, RWKV, Transformer, RetNet, H3++, Transformer++ and Mamba, with Mamba among the lowest perplexity, matching or beating Transformer++ (slide p.116, arXiv 2312.00752).",
              "Inference throughput on an A100 80GB with prompt length 2048 (slide p.117): Mamba 1.4B rises from 140 tokens/s at batch 1 to 1814 at batch 128; Transformer 1.3B reaches 364 at batch 32 then runs out of memory (OOM) from batch 64; Transformer 6.7B is OOM from batch 32; Mamba 6.9B reaches 515 at batch 128. This reflects that a recurrent state has fixed memory while attention memory grows with sequence length."
            ]
          }
        ]
      },
      {
        "id": "w7-vit-and-lab",
        "title": "Vision Transformer and the Annotated Transformer Notebook",
        "sections": [
          {
            "heading": "Vision Transformer, ViT (slide p.118)",
            "points": [
              "'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale' (arXiv 2010.11929) applies attention to images by treating image patches as tokens.",
              "The image is split into patches (9 in the figure), each patch is flattened and passed through a linear projection, and a position embedding is added (Patch + Position Embedding).",
              "An extra learnable [class] embedding (position 0) is prepended, so the figure's encoder input is 9 + 1 = 10 tokens; the encoder output for the class token goes to an MLP head that predicts the class (e.g. bird, ball, car).",
              "The ViT Transformer Encoder block (repeated L times) is: Norm, Multi-Head Attention, residual add, then Norm, MLP, residual add; note the Norm is applied before each sub-layer here, unlike the 'Add & Norm' after each sub-layer in the original transformer diagram."
            ]
          },
          {
            "heading": "Lab: AnnotatedTransformer.ipynb",
            "points": [
              "The Week 7 notebook contains only the setup cells for the Harvard 'Annotated Transformer': pip installs (torchdata 0.3.0, torchtext 0.12, spacy 3.2, altair, GPUtil, plus German and English spaCy models for translation) and PyTorch imports (nn, log_softmax, pad, LambdaLR learning-rate scheduler, DataLoader, DistributedDataParallel), so it is a starting point for implementing the encoder-decoder transformer covered in these slides."
            ]
          }
        ]
      }
    ]
  }
]
