import type { Lab } from './types'

export const nbLab: Lab = {
  "id": "w1-naive-bayes",
  "week": "W1",
  "title": "CS610 Week 1 Lab: Naive Bayes — Gaussian NB on Toy/Iris/Occupancy Data and Multinomial NB on 20 Newsgroups",
  "overview": "This lab (01_naive_bayes.ipynb, 31 cells) builds intuition for Naive Bayes classifiers across four progressively realistic settings: a hand-made 10-point 2-D toy dataset, the Iris dataset (first two features), a room-occupancy sensor dataset (Temperature, Humidity, Light, CO2, HumidityRatio → Occupancy; 8,143 training rows), and a binary politics-vs-rest text task on 20 newsgroups. Along the way it exposes the fitted parameters (class_prior_, class_count_, theta_, var_), contrasts predictions made from the likelihood P(x|y) alone versus the posterior P(y|x) ∝ P(x|y)·P(y), visualizes decision surfaces with contour plots, and switches from GaussianNB (continuous features) to MultinomialNB (word counts), reaching 0.8866 test accuracy on the text task.",
  "steps": [
    {
      "title": "Toy data: fit GaussianNB on 10 hand-made 2-D points",
      "explanation": "The lab starts with a tiny, fully inspectable dataset: 10 two-dimensional points assigned to three classes (labels 0, 1, 2). GaussianNB is used because the features are continuous real numbers — Gaussian Naive Bayes models each feature, within each class, as a 1-D normal distribution. Fitting is just estimating per-class means and variances plus class frequencies, so with 10 points you can verify every learned number by hand.",
      "code": "import numpy as np\nfrom sklearn import naive_bayes\n\nx_train = np.array([[2.3, 3.0], [2.0, 2.0], [5.0, 3.0], [4.0, 4.0], [4.5, 3.2],\n                    [3.0, 4.0], [3.0, 2.8], [3.2, 3.5], [3.8, 3.5], [4.5, 2.5]])\ny_train = np.array([0, 1, 2, 2, 0, 1, 1, 1, 2, 2])\n\ngnb = naive_bayes.GaussianNB()\ngnb.fit(x_train, y_train)"
    },
    {
      "title": "Inspect the learned parameters: priors, counts, means, variances",
      "explanation": "Printing the fitted attributes shows exactly what 'training' a GaussianNB means. class_prior_ = [0.2 0.4 0.4] are the class frequencies P(y) (2, 4 and 4 of the 10 points, matching class_count_ = [2. 4. 4.]). theta_ is a 3×2 matrix of per-class feature MEANS (e.g. class 0 has mean [3.4, 3.1]) and var_ is the matching per-class feature VARIANCES (e.g. class 0: [1.21, 0.01]). These four arrays are the entire model — there are no weights or iterations.",
      "code": "print(gnb.class_prior_)   # [0.2 0.4 0.4]\nprint(gnb.class_count_)   # [2. 4. 4.]\nprint(gnb.theta_)         # [[3.4   3.1  ] [2.8   3.075] [4.325 3.25 ]]\nprint(gnb.var_)           # [[1.21     0.01    ] [0.22  0.566875] [0.216875 0.3125]]"
    },
    {
      "title": "Likelihood vs posterior: why the two predictions disagree",
      "explanation": "Four test points are scored two ways. First, the class-conditional likelihood P(x|y) is computed manually with scipy's multivariate_normal.pdf, using theta_ as the mean and np.diag(var_) as the covariance — the DIAGONAL covariance is the 'naive' conditional-independence assumption made explicit. Argmax over likelihood predicts [0 0 2 0], but gnb.predict (which uses the posterior P(y|x) ∝ P(x|y)·P(y)) predicts [1 1 2 2]. They differ because class 0 has a small prior (0.2 vs 0.4): e.g. for the first test point the likelihoods are [0.756, 0.448, 0.003] favouring class 0, but after multiplying by the priors (0.756·0.2 = 0.151 vs 0.448·0.4 = 0.179) and normalizing, the posteriors become [0.456, 0.541, 0.003], flipping the decision to class 1. The notebook also notes 'it does not make sense to do predictions on the training set, but this is for result visualization.'",
      "code": "from scipy.stats import multivariate_normal\nx_test = np.array([[2.8, 3.0], [3.5, 3.3], [4.4, 3.3], [3.8, 2.95]])\n\nx_test_likelihood = np.array([multivariate_normal.pdf(x_test, gnb.theta_[i], np.diag(gnb.var_[i])) for i in range(3)])\nprint(np.argmax(x_test_likelihood, axis=0))  # [0 0 2 0]  (likelihood only)\nprint(gnb.predict(x_test))                    # [1 1 2 2]  (posterior = likelihood x prior)\nprint(gnb.predict_proba(x_test))              # row 1: [0.456 0.541 0.003]"
    },
    {
      "title": "Visualize likelihood and posterior surfaces on a mesh grid",
      "explanation": "A helper my_linspace pads the feature range by 10% on each side, and a 200×200 meshgrid is built over the two features. For every mesh point the notebook computes both the likelihood of each class (mesh_likhd) and the posterior probability (mesh_proba via predict_proba), then draws a 2×3 grid of contourf plots — top row: likelihood contours per class (Reds/Greens/Blues colormaps); bottom row: posterior contours. Training points are dots, test points are 'x' markers. Comparing rows shows visually how multiplying by the prior reshapes the regions.",
      "code": "def my_linspace(min_value, max_value, steps):\n    diff = max_value - min_value\n    return np.linspace(min_value - 0.1*diff, max_value + 0.1*diff, steps)\n\nsteps = 200\nxx0, xx1 = np.meshgrid(my_linspace(...), my_linspace(...))\nmesh_data = np.c_[xx0.ravel(), xx1.ravel()]\nmesh_proba = gnb.predict_proba(mesh_data).reshape(steps, steps, 3)\nplt.contourf(xx0, xx1, mesh_proba[:,:,i], 20, cmap=contour_color[i], alpha=0.5)"
    },
    {
      "title": "Iris: GaussianNB on the first two features only",
      "explanation": "The same recipe is repeated on a real dataset. Only the first two Iris features are used (x[:,:2], i.e. sepal length and sepal width) so the result can still be plotted in 2-D. The printed parameters show class_prior_ = [0.333 0.333 0.333] and class_count_ = [50. 50. 50.] — Iris is perfectly balanced, so the priors are equal and the posterior ordering matches the likelihood ordering. A markdown cell asks 'What are the theta_ and var_ here?' — answer: the per-class means (e.g. class 0: [5.006, 3.428]) and variances of the two features (and notes var_ was renamed from sigma_ in newer sklearn versions).",
      "code": "iris = datasets.load_iris()\nx, y = iris.data, iris.target\ngnb = naive_bayes.GaussianNB()\ngnb.fit(x[:,:2], y)\nprint(gnb.class_prior_)  # [0.33333333 0.33333333 0.33333333]\nprint(gnb.class_count_)  # [50. 50. 50.]\nprint(gnb.theta_)        # [[5.006 3.428] [5.936 2.77 ] [6.588 2.974]]"
    },
    {
      "title": "Iris posterior contours and the reflection question",
      "explanation": "The mesh/contour visualization is repeated, this time plotting only the posterior probability of each class over the sepal-length/sepal-width plane, with all 150 points coloured red/green/blue. A markdown cell asks: 'Why isn't there a max function on mesh_proba?' — because the plot shows the full posterior probability surface for each class separately (one subplot per class), not just the winning class; taking argmax would collapse the soft probabilities into hard decision regions and hide how confident the model is near the boundaries.",
      "code": "mesh_proba = gnb.predict_proba(mesh_data).reshape(steps, steps, 3)\nfor i in range(3):\n    plt.subplot(1, 3, i+1)\n    plt.scatter(x[:,0], x[:,1], c=y_color)\n    plt.contourf(xx0, xx1, mesh_proba[:,:,i], 20, cmap=contour_color[i], alpha=0.5)"
    },
    {
      "title": "Occupancy data: load the sensor CSV and draw balanced pairplots",
      "explanation": "The room-occupancy dataset (datatraining.txt: 8,143 rows + header; columns date, Temperature, Humidity, Light, CO2, HumidityRatio, Occupancy) is loaded with pandas. Before modelling, the notebook builds a 200-row visualization sample: 100 rows where Occupancy == 1 (with random_state = 2022) concatenated with 100 rows where Occupancy == 0. A markdown cell asks 'Why do I sample the data? Why do I sample twice?' — sampling keeps the seaborn pairplot readable (8,143 points would overplot), and sampling once per class gives a BALANCED 100/100 picture even though the raw data is imbalanced. Two pairplots are drawn: a scatter version (markers 'o' and 's') and a KDE version, both hued by Occupancy, revealing which sensor pairs separate occupied from empty rooms.",
      "code": "occupancy_data_train = pd.read_csv('dataset/occupancy_data/datatraining.txt')\nsample = pd.concat([occupancy_data_train[occupancy_data_train['Occupancy'] == 1].sample(100, random_state=2022),\n                    occupancy_data_train[occupancy_data_train['Occupancy'] == 0].sample(100)])\nsns.pairplot(sample, hue='Occupancy', markers=['o', 's'])\nsns.pairplot(sample, hue='Occupancy', kind='kde')"
    },
    {
      "title": "Occupancy: fit GaussianNB on all five sensors and rank the features",
      "explanation": "The model is trained on the FULL training set (not the 200-row sample): columns 1:6 are the five sensor features and column 6 is the 0/1 Occupancy label. The printed theta_ shows occupied rooms (class 1) have higher means everywhere — e.g. Light jumps from ~27.8 (empty) to ~459.9 (occupied) and CO2 from ~490.3 to ~1037.7. The final line computes a scaled separation score (theta_[1] − theta_[0]) / var_[0] per feature, giving [1.616, 0.064, 0.054, 0.023, 6.299]: relative to class-0 variance, HumidityRatio (6.30) and Temperature (1.62) show the largest scaled mean shifts, while Light and CO2 — huge in raw units — are divided by their very large variances (~8,027 and ~23,381).",
      "code": "x_train = occupancy_data_train.iloc[:,1:6].values   # Temperature, Humidity, Light, CO2, HumidityRatio\ny_train = occupancy_data_train.iloc[:,6].values.astype(int)  # Occupancy\ngnb.fit(x_train, y_train)\nprint((gnb.theta_[1,:] - gnb.theta_[0,:]) / gnb.var_[0,:])\n# [1.61621537 0.06415104 0.05383025 0.02341175 6.29877301]"
    },
    {
      "title": "20 newsgroups: build a binary politics-vs-rest text task",
      "explanation": "The 20-newsgroups corpus is fetched with its built-in train/test split (subset='train' and subset='test', shuffle=True, random_state=2024) and with headers, footers and quotes removed so the model cannot cheat on metadata. The 20 original categories are collapsed to a binary target: any category whose name contains 'politics' maps to 1, everything else to 0. The printed counts reveal heavy class imbalance — training: 9,739 class-0 vs 1,575 class-1; test: 6,482 class-0 vs 1,050 class-1.",
      "code": "data_train = datasets.fetch_20newsgroups(subset='train', shuffle=True, random_state=2024, remove=('headers','footers','quotes'))\ndata_test  = datasets.fetch_20newsgroups(subset='test', ...)\ntarget_map[i] = 1 if 'politics' in categories[i] else 0\n# training: 9739 vs 1575;  test: 6482 vs 1050"
    },
    {
      "title": "Vectorize text and train MultinomialNB — accuracy 0.8866",
      "explanation": "Text is turned into word-count vectors with CountVectorizer(min_df=0.01, max_df=0.5, stop_words='english'): keep only words appearing in at least 1% of documents, drop words in more than 50% of documents, and drop English stop words — pruning both rare and uninformative-common terms. Crucially, fit_transform is called on training data but only transform on test data, so the test set is encoded with the vocabulary learned from training. Because features are now discrete counts, the notebook switches to MultinomialNB with alpha=0.01 (a small smoothing constant that prevents zero probabilities for words unseen in a class). Test accuracy: 0.8866171003717472 — note that always predicting class 0 would already score 6482/7532 ≈ 0.861 given the imbalance.",
      "code": "count_vectorizer = feature_extraction.text.CountVectorizer(min_df=0.01, max_df=0.5, stop_words='english')\nx_train = count_vectorizer.fit_transform(data_train.data)\nx_test  = count_vectorizer.transform(data_test.data)\nmnb = naive_bayes.MultinomialNB(alpha=0.01)\nmnb.fit(x_train, y_train)\nprint(metrics.accuracy_score(y_test, mnb.predict(x_test)))  # 0.8866171003717472"
    },
    {
      "title": "Which words scream 'politics'? Ranking feature_log_prob_ differences",
      "explanation": "To interpret the model, the notebook computes diff = mnb.feature_log_prob_[1,:] − mnb.feature_log_prob_[0,:] — the difference in log P(word|politics) vs log P(word|non-politics) — and sorts words by it. The top 20 politics-indicative words are dominated by geopolitics and gun-policy vocabulary: 'israeli' (5.16), 'guns' (3.65), 'israel' (3.62), 'gun' (3.52), 'weapons' (3.34), 'jews' (2.67), 'killed' (2.65), then 'population', 'crime', 'president', 'war', 'arms', 'military', 'army', 'police', 'country', 'mr', 'political', 'rights', 'citizens'. This shows Naive Bayes is directly interpretable: its learned per-class word probabilities ARE the explanation.",
      "code": "feature_names = count_vectorizer.get_feature_names_out()\ndiff = mnb.feature_log_prob_[1,:] - mnb.feature_log_prob_[0,:]\nnames_diff_sorted = sorted(name_diff.items(), key=lambda x: x[1], reverse=True)\n# top: ('israeli', 5.16), ('guns', 3.65), ('israel', 3.62), ('gun', 3.52), ('weapons', 3.34) ..."
    }
  ],
  "takeaways": [
    "Match the NB variant to the feature type: GaussianNB for continuous sensor/measurement features (toy, Iris, occupancy), MultinomialNB for discrete word counts (20 newsgroups).",
    "A fitted GaussianNB is fully described by four arrays: class_prior_ (class frequencies, e.g. [0.2 0.4 0.4] on the toy data), class_count_, theta_ (per-class feature means) and var_ (per-class feature variances).",
    "Prediction uses the posterior, not just the likelihood: P(y|x) ∝ P(x|y)·P(y). On the toy test set the likelihood argmax gives [0 0 2 0] but gnb.predict gives [1 1 2 2] because class 0's prior is only 0.2.",
    "The 'naive' assumption is conditional independence of features given the class — made explicit in the notebook by using np.diag(gnb.var_[i]) (a diagonal covariance) inside multivariate_normal.pdf.",
    "Balanced sampling (100 occupied + 100 empty rows) is done ONLY for the pairplot visualizations; the model itself is trained on all 8,143 occupancy rows.",
    "On the occupancy data, occupied rooms show higher means on every sensor (Light ~27.8 → ~459.9, CO2 ~490 → ~1038), and the scaled separation (theta_[1]−theta_[0])/var_[0] = [1.616, 0.064, 0.054, 0.023, 6.299] flags HumidityRatio and Temperature as most discriminative relative to their variance.",
    "For text: fit_transform the vectorizer on training data and only transform the test data; min_df=0.01 / max_df=0.5 / stop_words='english' prune rare and overly common words, and alpha=0.01 smoothing keeps unseen words from producing zero probabilities.",
    "Interpret accuracy against the class balance: 0.8866 on the politics task is only modestly above the ~0.861 majority-class baseline (6,482 of 7,532 test docs are class 0) — and MultinomialNB stays interpretable via feature_log_prob_ (top politics words: 'israeli', 'guns', 'israel', 'gun', 'weapons')."
  ]
}

export const regressionLab: Lab = {
  "id": "w2-regression",
  "week": "W2",
  "title": "CS610 Week 2 Lab: Regression — from LinearRegression to SGD",
  "overview": "This notebook walks through the full regression workflow in scikit-learn: loading tabular data with pandas, fitting simple and multiple linear regression, decomposing variance into SST/SSR/SSE to understand R², using a train/test split for honest evaluation, visualizing fitted lines and planes, turning linear regression into polynomial regression with PolynomialFeatures, demonstrating the bias-variance tradeoff experimentally, comparing Lasso (L1) and Ridge (L2) regularization across alphas, and finally contrasting closed-form solvers with SGDRegressor.",
  "steps": [
    {
      "title": "Load the data and shape the arrays",
      "explanation": "pandas reads the tab-separated house price file into a DataFrame. The double-bracket selection data_house[['size']] keeps x as a 2-D matrix, which sklearn requires; single brackets for y give a 1-D vector. Printing shapes confirms 100 rows: x is (100, 1) and y is (100,).",
      "code": "data_house = pd.read_csv('dataset/house_price.tsv', sep='\\t')\nx = data_house[['size']].values  # (100, 1)\ny = data_house['price'].values   # (100,)"
    },
    {
      "title": "Fit simple linear regression",
      "explanation": "linear_model.LinearRegression() declares the model and fit(x, y) learns the weights. coef_ is w₁ and intercept_ is w₀ in y = w₁x₁ + w₀. The output means: predicted price = 77.0077 × size + 9161.16.",
      "code": "regr = linear_model.LinearRegression()\nregr.fit(x, y)\n# Coefficients: [77.00769255]\n# Intercept: 9161.1588643422"
    },
    {
      "title": "Add a second feature (multiple regression)",
      "explanation": "Refitting with both size and Taxes changes the picture: the size coefficient drops from 77.01 to 34.07 because Taxes now explains part of what size alone was credited with. Coefficients are always conditional on the other features in the model.",
      "code": "x = data_house[['size', 'Taxes']].values\nregr.fit(x, y)\n# Coefficients: [34.06888701 32.12061364]\n# Intercept: 21115.050084267292"
    },
    {
      "title": "Decompose the variance: SST, SSR, SSE",
      "explanation": "Three sums of squares are computed by hand with numpy. SST (314,432,519,600) is the total variation of price around its mean; SSR (229,612,632,470.76) is what the predictions explain; SSE (84,819,887,129.24) is what remains. They satisfy SST = SSR + SSE exactly.",
      "code": "sst = np.sum((y - np.mean(y))**2)            # 314432519600.0\nssr = np.sum((regr.predict(x) - np.mean(y))**2)  # 229612632470.76\nsse = np.sum((regr.predict(x) - y)**2)        # 84819887129.24"
    },
    {
      "title": "Compute R² two ways",
      "explanation": "regr.score(x, y) and the manual ratio ssr/sst both give 0.7302, proving that sklearn's regression score IS R² = SSR/SST. The notebook then pointedly asks whether 0.73 is 'very good' and whether there is a problem — there is: it was measured on the training data.",
      "code": "regr.score(x, y)  # 0.730244545834062\nssr / sst         # 0.7302445458340622"
    },
    {
      "title": "Split into train and test for an honest score",
      "explanation": "train_test_split holds out 20% of the rows (with random_state=2022 fixed so bugs are reproducible; x and y are split with the same flags to keep rows paired). Retraining on the 80 training rows and scoring on the 20 unseen rows gives R² = 0.42 — far below the in-sample 0.73. This gap is the whole reason we evaluate on held-out data.",
      "code": "x_tr, x_te, y_tr, y_te = model_selection.train_test_split(\n    x, y, test_size=0.2, random_state=2022)\nregr.fit(x_tr, y_tr)\nregr.score(x_te, y_te)  # 0.42"
    },
    {
      "title": "More metrics: explained variance, MAE, MSE",
      "explanation": "sklearn.metrics offers alternatives to R². On the test predictions: explained variance = 0.4723 (slightly above R² = 0.42 because it ignores constant bias in the errors), MAE = 25,920.69 (average miss in price units), and MSE = 873,455,968.76 (squared units — hence the enormous number).",
      "code": "y_pred = regr.predict(x_te)\nmetrics.explained_variance_score(y_te, y_pred)  # 0.4723\nmetrics.mean_absolute_error(y_te, y_pred)       # 25920.69\nmetrics.mean_squared_error(y_te, y_pred)        # 873455968.76"
    },
    {
      "title": "Visualize the fit in 2-D and 3-D",
      "explanation": "On the diabetes dataset, a 1-feature model is drawn as a blue line over a red scatter by predicting on 200 evenly spaced x values. For 2 features, np.meshgrid builds a 40×40 grid, the model predicts on all 1600 grid points, and plot_surface renders the fitted PLANE over a 3-D scatter — visually confirming that a linear model in 2 features is a plane.",
      "code": "lx = np.arange(min(x), max(x), (max(x)-min(x))/200).reshape(200, 1)\nplt.plot(lx, regr.predict(lx))  # fitted line\n# 3-D: meshgrid -> predict on 40*40 grid -> ax.plot_surface(xx0, xx1, yy)"
    },
    {
      "title": "Polynomial regression recovers a known quadratic surface",
      "explanation": "Data is generated from a KNOWN quadratic: y = −24x₀² − 12x₁² − 15x₀x₁ + 70x₀ + 90x₁ + 100 + noise. PolynomialFeatures(2) expands (x₀, x₁) into 6 columns [1, x₀, x₁, x₀², x₀x₁, x₁²] (see powers_), and plain LinearRegression on those columns achieves test R² = 0.994592 with coefficients [0, 69.27, 93.05, −23.78, −15.11, −12.52] — almost exactly the true generator values. Polynomial regression is just linear regression on transformed features.",
      "code": "poly2 = preprocessing.PolynomialFeatures(2)\nx2 = poly2.fit_transform(x)   # 6 columns\nregr2.fit(x2_train, y2_train)\n# R^2: 0.994592; coefs ~ true values (70, 90, -24, -15, -12)"
    },
    {
      "title": "The intercept trick and degree-3 comparison",
      "explanation": "Because PolynomialFeatures adds a column of ones, the model with fit_intercept=True gives that column coefficient 0 and reports intercept 97.936; with fit_intercept=False the same 97.936 appears as the first coefficient and the intercept is 0 — equivalent parameterizations. Going to degree 3 adds four cubic columns but R² barely moves (0.994706 vs 0.994592) and the cubic coefficients are near zero (−0.254, −0.134, 0.008, 0.190): the model correctly detects the surface is quadratic.",
      "code": "linear_model.LinearRegression(fit_intercept=False).fit(x2_train, y2_train)\n# coef[0] = 97.9355 (was the intercept), intercept_ = 0.0\n# degree 3: R^2 = 0.994706, cubic coefs ~ 0"
    },
    {
      "title": "Bias-variance tradeoff, made visible",
      "explanation": "Two quadratic targets are generated so each model's average error is a 2-D point. Training on ONLY 10 points (test_size=190) and evaluating on 20 random 10-point test subsets, four models are compared: the constant mean (m1), linear (m2), degree-2 (m3), degree-4 (m4). The plots show m1's errors tightly clustered but far from the origin (high bias, low variance), m4's errors widely scattered around the origin (low bias, high variance), and m3 — the model matching the true function class — closest to the ideal: centered and compact.",
      "code": "x_tr, x_te, y_tr, y_te = train_test_split(x, y, test_size=190, random_state=2022)\n# m1: mean predictor | m2: linear | m3: poly deg 2 | m4: poly deg 4\n# plot mean error per test subset; blue x = bias, black x = origin"
    },
    {
      "title": "Lasso vs Ridge across alpha, then SGD",
      "explanation": "On the diabetes data (50/50 split), sweeping alpha over [1, 0.1, 0.01, 0.001]: Lasso scores 0.3528 → 0.4702 → 0.4628 → 0.4597 and Ridge 0.3749 → 0.4649 → 0.4609 → 0.4594, both peaking at alpha=0.1. At alpha=1 Lasso zeroes 7 of 10 coefficients (sparsity) while Ridge keeps all 10 non-zero. Finally, SGDRegressor with the same penalties and alpha=0.001 scores only 0.0818 (L1) and 0.0802 (L2) vs 0.3344/0.3343 for Lasso/Ridge — with a ConvergenceWarning: 200 iterations were not enough, so the iterative optimizer never reached the optimum the closed-form solvers found.",
      "code": "linear_model.Lasso(alpha=1).fit(x_tr, y_tr)   # 7 of 10 coefs exactly 0\nlinear_model.Ridge(alpha=1).fit(x_tr, y_tr)   # all 10 coefs non-zero\nlinear_model.SGDRegressor(tol=1e-4, max_iter=200, penalty='l1', alpha=0.001)\n# sgd_l1 score 0.0818 vs lasso 0.3344 -> ConvergenceWarning"
    }
  ],
  "takeaways": [
    "sklearn's regression pattern is always the same: construct the estimator, fit(x_train, y_train), then predict/score — and x must be 2-D (n_samples, n_features).",
    "R² = SSR/SST = 1 − SSE/SST, and SST = SSR + SSE; regr.score() computes exactly this (verified: 0.7302 both ways on the house data).",
    "Never trust an in-sample score: the house model's R² fell from 0.73 (training data) to 0.42 (held-out test set). Always split with a fixed random_state for reproducibility.",
    "MAE and MSE measure the same errors on different scales — MSE is in squared units and punishes outliers (MAE 25,921 vs MSE 873 million on the same predictions).",
    "Polynomial regression is linear regression on expanded features: PolynomialFeatures(2) on 2 features gives 6 columns, and the fitted coefficients recovered the true generator (69.3≈70, 93.1≈90, −23.8≈−24, −15.1≈−15, −12.5≈−12) with R² = 0.9946.",
    "Adding unnecessary complexity (degree 3) barely helped (0.9947 vs 0.9946) and its extra coefficients were ~0; with tiny training sets, high-degree models (degree 4 on 10 points) show high variance — the bias-variance tradeoff.",
    "Lasso (L1) drives coefficients exactly to zero (feature selection); Ridge (L2) only shrinks them. Tune alpha: both peaked at alpha=0.1 (Lasso 0.470, Ridge 0.465) on the diabetes data.",
    "SGD optimizes the same penalized objectives iteratively, but is approximate: with max_iter=200 it scored ~0.08 vs ~0.33 for the exact solvers and raised ConvergenceWarning — increase max_iter (and scale features) or prefer exact solvers on small data."
  ]
}

export const logisticLab: Lab = {
  "id": "w3-logistic",
  "week": "W3",
  "title": "CS610 Week 3 Lab: Logistic Regression — Exam Scores Walkthrough",
  "overview": "This notebook trains a logistic regression classifier on a two-feature exam-score dataset, evaluates it on a large held-out test set, visualizes the linear decision boundary, sweeps the regularization hyperparameter C to show the complexity/accuracy trade-off, and finishes by rendering class-probability contours and the 3D sigmoid surface.",
  "steps": [
    {
      "title": "Load the CSV into a NumPy array",
      "explanation": "np.loadtxt reads the raw comma-separated file into a numeric array. Each row is one student: two exam scores followed by a 0/1 class label.",
      "code": "import numpy as np\nfrom sklearn import linear_model\ndata = np.loadtxt('dataset/exam_score.csv', delimiter=',')"
    },
    {
      "title": "Separate features from the target",
      "explanation": "The target is the LAST (third) column. Features x are the first two columns; y is cast to int because classifiers expect integer class labels, not floats.",
      "code": "x = data[:, :2]\ny = data[:, 2].astype(int)"
    },
    {
      "title": "Split into train and test sets — note the unusual ratio",
      "explanation": "test_size=0.8 holds out 80% of the rows for testing and trains on only 20%. random_state=610 fixes the shuffle so everyone gets the identical split and identical numbers.",
      "code": "from sklearn import model_selection\nx_train, x_test, y_train, y_test = model_selection.train_test_split(\n    x, y, test_size=0.8, random_state=610)"
    },
    {
      "title": "Fit a logistic regression model",
      "explanation": "LogisticRegression with the lbfgs solver minimizes the regularized log-loss. With no C given, sklearn defaults to C=1 with an L2 penalty. After fit, coef_ holds the two weights and intercept_ the bias.",
      "code": "estimator = linear_model.LogisticRegression(solver='lbfgs')\nestimator.fit(x_train, y_train)  # -> LogisticRegression()"
    },
    {
      "title": "Predict on the test set and score accuracy",
      "explanation": "predict outputs hard 0/1 labels (probability thresholded at 0.5). accuracy_score compares them to the true labels: 0.8875 means 71 of the 80 test points are correct.",
      "code": "from sklearn import metrics\ny_pred = estimator.predict(x_test)\nprint('accuracy:', metrics.accuracy_score(y_test, y_pred))\n# accuracy: 0.8875"
    },
    {
      "title": "Plot the data and the linear decision boundary",
      "explanation": "Training points are circles, test points are '+' marks; red = class 0, green = class 1. The boundary is where w0*x0 + w1*x1 + b = 0, so the code solves for x0 = (-w1*x1 - b)/w0 at the min and max of feature x1 and draws the straight line between them. The boundary is a LINE: logistic regression is a linear classifier.",
      "code": "plt.plot((- estimator.coef_[0][1] * np.array((min(x_train[:,1]), max(x_train[:,1])))\n          - estimator.intercept_[0]) / estimator.coef_[0][0],\n         np.array((min(x_train[:,1]), max(x_train[:,1]))))"
    },
    {
      "title": "Sweep the regularization hyperparameter C",
      "explanation": "The loop refits the model at C = 0.0001, 0.01, 0.1, 1 and prints test accuracy plus 'model complexity' — the L2 norm of the weights, sqrt(w0^2 + w1^2). Smaller C = stronger regularization = smaller weights.",
      "code": "C = [0.0001, 0.01, 0.1, 1]\nfor i in range(4):\n    clf = linear_model.LogisticRegression(C=C[i])\n    clf.fit(x_train, y_train)\n    # C=0.0001: acc 0.8250, ||w|| 0.0136\n    # C=0.01:   acc 0.8625, ||w|| 0.1747\n    # C=0.1:    acc 0.8750, ||w|| 0.4019\n    # C=1:      acc 0.8875, ||w|| 0.7873"
    },
    {
      "title": "Interpret the sweep and the four-color plots",
      "explanation": "Both the weight norm and the test accuracy rise monotonically with C here: the most regularized model (C=0.0001) UNDERFITS and scores worst (0.825). The scatter colors encode color[true][pred]: blue and green are correct (0->0, 1->1); red (true 0 predicted 1) and yellow (true 1 predicted 0) are the errors, so you can see exactly which points each model gets wrong.",
      "code": "color = [['blue', 'red'], ['yellow', 'green']]  # [true][pred]"
    },
    {
      "title": "Build a probability mesh with a margin helper",
      "explanation": "my_linspace pads the axis range by 10% of the data spread on each side. A NEW model with very strong regularization (C=0.001) is fitted so probabilities change gradually across the plane — better for seeing contours. meshgrid creates a 200x200 grid; np.c_ flattens it into 40,000 (x0, x1) points; predict_proba returns two probabilities per point, reshaped to (200, 200, 2).",
      "code": "estimator = linear_model.LogisticRegression(solver='lbfgs', C=0.001)\nestimator.fit(x_train, y_train)\nxx0, xx1 = np.meshgrid(x0, x1)  # 200 x 200\nmesh_proba = estimator.predict_proba(np.c_[xx0.ravel(), xx1.ravel()]).reshape(200, 200, 2)"
    },
    {
      "title": "Draw class-probability contours",
      "explanation": "For each class, contourf shades 20 probability levels with a Reds or Greens colormap. np.maximum(proba, 0.5) clips values below 0.5 so each color only appears where that class is the predicted (more probable) one; the two shaded regions meet at the P = 0.5 boundary line.",
      "code": "for i in range(2):\n    plt.contourf(xx0, xx1, np.maximum(mesh_proba[:,:,i], 0.5), 20,\n                 cmap=[plt.cm.Reds, plt.cm.Greens][i], alpha=0.5)"
    },
    {
      "title": "Visualize P(y=1|x) as a 3D sigmoid surface",
      "explanation": "The 3D plot places every data point at height 0 or 1 (its true label) and draws mesh_proba[:,:,1] — the probability of class 1 — as a surface. It is an S-shaped ramp: flat near 0 on one side, flat near 1 on the other, crossing height 0.5 exactly above the 2D decision boundary line.",
      "code": "ax = fig.add_subplot(projection='3d')\nax.scatter(x[:,0], x[:,1], y, c=y_color)\nax.plot_surface(xx0, xx1, mesh_proba[:,:,1], alpha=0.2)"
    }
  ],
  "takeaways": [
    "Logistic regression is a LINEAR classifier: its decision boundary w₀x₀ + w₁x₁ + b = 0 is a straight line, even though the sigmoid output is nonlinear.",
    "The plotted boundary comes from solving P = 0.5 ⇔ wᵀx + b = 0 for one coordinate: x₀ = (−w₁·x₁ − b)/w₀.",
    "sklearn's C is the INVERSE regularization strength: C = 0.0001 shrank the weight norm to 0.0136, while C = 1 allowed it to grow to 0.787.",
    "On this dataset, stronger regularization hurt: test accuracy rose monotonically from 0.825 (C=0.0001) to 0.8875 (C=1) — over-regularizing causes underfitting.",
    "Model complexity can be summarized in one number, the L2 norm of the weights √(w₀² + w₁²) — exactly what the notebook prints for each C.",
    "predict gives hard labels (0.5 threshold); predict_proba gives per-class probabilities that sum to 1 — use the latter for contour/surface visualizations.",
    "The meshgrid + predict_proba + contourf pattern is the standard recipe for visualizing any 2-feature classifier's probability landscape.",
    "test_size=0.8 with random_state=610 trains on only 20% of the data but makes every number reproducible — always check which fraction is train vs test before interpreting accuracy."
  ]
}

export const labs: readonly Lab[] = [nbLab, regressionLab, logisticLab]
