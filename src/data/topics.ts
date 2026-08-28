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
  }
]
