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
]
