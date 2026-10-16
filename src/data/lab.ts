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

export const dtLab: Lab = {
  "id": "w4-decision-tree",
  "week": "W4",
  "title": "CS610 Week 4 Lab: Decision Trees — Classification, Regression, and Splitting Criteria (Iris + Toy Data)",
  "overview": "This lab builds intuition for how CART-style decision trees grow. It trains a DecisionTreeClassifier on the Iris petal length/width features and visualizes its axis-aligned decision boundaries and class-probability outputs, contrasts unrestricted vs. regularized trees on noisy make_moons data, fits DecisionTreeRegressor models to a noisy quadratic dataset to show piecewise-constant regression predictions and overfitting control via min_samples_leaf, then manually recomputes the entropy, information gain, Gini impurity, split information, and gain ratio that a tree-growing algorithm uses internally to pick splits, using both the Iris-like A1/A2 attributes and a small 8-row toy dataset (Name/Height/Cap-color).",
  "steps": [
    {
      "title": "Import core libraries",
      "explanation": "Set up numpy and matplotlib for numerical work and plotting throughout the notebook.",
      "code": "import numpy as np\nimport matplotlib.pyplot as plt"
    },
    {
      "title": "Load Iris and train a depth-3 classification tree",
      "explanation": "Use only the petal length and width features (columns 2:) and fit a CART classifier capped at depth 3 for interpretability.",
      "code": "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\n\niris = load_iris()\nX = iris.data[:, 2:] # use only petal length and width\ny = iris.target\n\ntree_clf_depth_3 = DecisionTreeClassifier(max_depth=3, random_state=2022)\ntree_clf_depth_3.fit(X, y)"
    },
    {
      "title": "Export the tree structure with export_graphviz",
      "explanation": "Write a Graphviz .dot file describing the learned tree (feature thresholds, class distributions per node) for visualization/rendering to PNG.",
      "code": "from sklearn.tree import export_graphviz\n\nexport_graphviz(\n        tree_clf_depth_3,\n        out_file='iris_tree_depth_3.dot',\n        feature_names=iris.feature_names[2:],\n        class_names=iris.target_names,\n        rounded=True,\n        filled=True\n    )"
    },
    {
      "title": "Plot the axis-aligned decision boundary",
      "explanation": "A helper function meshes the feature space, predicts a class per grid cell, and overlays the true points; annotated split lines show the tree's actual thresholds at petal length=2.45, petal width=1.75, and petal length=4.95/4.85.",
      "code": "from matplotlib.colors import ListedColormap\n\ndef plot_decision_boundary(clf, X, y, axes=[0, 7.5, 0, 3], plot_iris=True):\n    x1s = np.linspace(axes[0], axes[1], 100)\n    x2s = np.linspace(axes[2], axes[3], 100)\n    x1, x2 = np.meshgrid(x1s, x2s)\n    X_new = np.c_[x1.ravel(), x2.ravel()]\n    y_pred = clf.predict(X_new).reshape(x1.shape)\n    custom_cmap = ListedColormap(['#fafab0','#9898ff','#a0faa0'])\n    \n    plt.contourf(x1, x2, y_pred, alpha=0.3, cmap=custom_cmap)\n\n   \n    plt.plot(X[:, 0][y==0], X[:, 1][y==0], 'yo', label=f'{iris.target_names[0]}')\n    plt.plot(X[:, 0][y==1], X[:, 1][y==1], 'bs', label=f'{iris.target_names[1]}')\n    plt.plot(X[:, 0][y==2], X[:, 1][y==2], 'g^', label=f'{iris.target_names[2]}')\n    plt.axis(axes)\n     \n    if plot_iris:\n        plt.xlabel(\"Petal length\", fontsize=14)\n        plt.ylabel(\"Petal width\", fontsize=14)\n        plt.legend(loc=\"lower right\", fontsize=12)\n    else:\n        plt.xlabel(\"X\", fontsize=14)\n        plt.ylabel(\"Y\", fontsize=14)\n\nplt.figure(figsize=(11, 5))\nplot_decision_boundary(tree_clf_depth_3, X, y)\n\n# Plot the decision boundaries\nplt.plot([2.45, 2.45], [0, 3], \"r-\", linewidth=2)\nplt.plot([2.45, 7.5], [1.75, 1.75], \"b--\", linewidth=2)\nplt.plot([4.95, 4.95], [0, 1.75], \"k:\", linewidth=2)\nplt.plot([4.85, 4.85], [1.75, 3], \"k:\", linewidth=2)\n\nplt.text(1.40, 1.0, \"Depth=0\", fontsize=15)\nplt.text(3.2, 1.80, \"Depth=1\", fontsize=13)\nplt.text(4.05, 0.5, \"(Depth=2)\", fontsize=11)\nplt.show()"
    },
    {
      "title": "Predict class probabilities for a new sample",
      "explanation": "For an unseen flower with petal length=5, width=1.5, the tree returns the class distribution of the leaf it lands in.",
      "code": "tree_clf_depth_3.predict_proba([[5, 1.5]])\n# array([[0.        , 0.33333333, 0.66666667]])\n\ntree_clf_depth_3.predict([[5, 1.5]])\n# array([2])"
    },
    {
      "title": "Compare unrestricted vs. regularized trees on noisy moons data",
      "explanation": "Fit one tree with no stopping constraints and one with min_samples_leaf=4 on make_moons(noise=0.25) to visually contrast overfitting vs. a smoother boundary.",
      "code": "from sklearn.datasets import make_moons\nXm, ym = make_moons(n_samples=100, noise=0.25, random_state=2022)\n\ndeep_tree_clf1 = DecisionTreeClassifier(random_state=2022)\ndeep_tree_clf2 = DecisionTreeClassifier(min_samples_leaf=4, random_state=2022)\ndeep_tree_clf1.fit(Xm, ym)\ndeep_tree_clf2.fit(Xm, ym)\n\nplt.figure(figsize=(16, 8))\nplt.subplot(121)\nplot_decision_boundary(deep_tree_clf1, Xm, ym, axes=[-1.5, 2.5, -1, 1.5], plot_iris=False)\nplt.title(\"No restrictions\", fontsize=16)\nplt.subplot(122)\nplot_decision_boundary(deep_tree_clf2, Xm, ym, axes=[-1.5, 2.5, -1, 1.5], plot_iris=False)\nplt.title(\"min_samples_leaf = {}\".format(deep_tree_clf2.min_samples_leaf), fontsize=14)\n\nplt.show()"
    },
    {
      "title": "Build a noisy quadratic dataset for regression",
      "explanation": "Generate 200 random points and a quadratic target y = 4*(x-0.5)^2 plus Gaussian noise, to demonstrate DecisionTreeRegressor.",
      "code": "np.random.seed(2022)\nm = 200\nX = np.random.rand(m, 1)\ny = 4 * (X - 0.5) ** 2\ny = y + np.random.randn(m, 1) / 10"
    },
    {
      "title": "Fit a depth-2 regression tree",
      "explanation": "DecisionTreeRegressor splits on MSE reduction instead of entropy/Gini, producing a piecewise-constant prediction function.",
      "code": "from sklearn.tree import DecisionTreeRegressor\n\ntree_reg = DecisionTreeRegressor(max_depth=2, random_state=2022)\ntree_reg.fit(X, y)"
    },
    {
      "title": "Compare depth-2 vs. depth-3 regression trees",
      "explanation": "Plot both trees' step-function predictions against the training data and the true split thresholds (e.g. 0.144, 0.057, 0.828 for depth 2; finer splits at 0.02, 0.096, 0.293, 0.918 for depth 3) to see how added depth refines the fit.",
      "code": "## from sklearn.tree import DecisionTreeRegressor\n\ntree_reg1 = DecisionTreeRegressor(random_state=2022, max_depth=2)\ntree_reg2 = DecisionTreeRegressor(random_state=2022, max_depth=3)\ntree_reg1.fit(X, y)\ntree_reg2.fit(X, y)\n\ndef plot_regression_predictions(tree_reg, X, y, axes=[0, 1, -0.2, 1], ylabel=\"$y$\"):\n    x1 = np.linspace(axes[0], axes[1], 500).reshape(-1, 1)\n    y_pred = tree_reg.predict(x1)\n    plt.axis(axes)\n    plt.xlabel(\"$x_1$\", fontsize=18)\n    if ylabel:\n        plt.ylabel(ylabel, fontsize=18, rotation=0)\n    plt.plot(X, y, \"b.\")\n    plt.plot(x1, y_pred, \"r.-\", linewidth=2, label=r\"$\\hat{y}$\")\n\nplt.figure(figsize=(16, 7))\nplt.subplot(121)\nplot_regression_predictions(tree_reg1, X, y)\n\nfor split, style in ((0.144, \"k-\"), (0.057, \"k--\"), (0.828, \"k--\")):\n    plt.plot([split, split], [-0.2, 1], style, linewidth=2)\n    \nplt.text(0.15, 0.65, \"Depth=0\", fontsize=15)\nplt.text(0.01, 0.2, \"Depth=1\", fontsize=13)\nplt.text(0.75, 0.8, \"Depth=1\", fontsize=13)\n\nplt.legend(loc=\"upper center\", fontsize=18)\nplt.title(\"max_depth=2\", fontsize=14)\n\nplt.subplot(122)\nplot_regression_predictions(tree_reg2, X, y, ylabel=None)\n\nfor split, style in ((0.144, \"k-\"), (0.057, \"k--\"), (0.828, \"k--\")):\n    plt.plot([split, split], [-0.2, 1], style, linewidth=2)\n    \nfor split in (0.02, 0.096, 0.293, 0.918):\n    plt.plot([split, split], [-0.2, 1], \"k:\", linewidth=1)\n    \nplt.text(0.3, 0.5, \"Depth=2\", fontsize=13)\nplt.title(\"max_depth=3\", fontsize=14)\nplt.show()"
    },
    {
      "title": "Show overfitting control with min_samples_leaf on regression trees",
      "explanation": "An unrestricted regression tree memorizes noise (jagged steps); requiring min_samples_leaf=10 forces broader, smoother leaves.",
      "code": "tree_reg1 = DecisionTreeRegressor(random_state=2022)\ntree_reg2 = DecisionTreeRegressor(random_state=2022, min_samples_leaf=10)\ntree_reg1.fit(X, y)\ntree_reg2.fit(X, y)\n\nx1 = np.linspace(0, 1, 500).reshape(-1, 1)\ny_pred1 = tree_reg1.predict(x1)\ny_pred2 = tree_reg2.predict(x1)"
    },
    {
      "title": "Compute root entropy and information gain by hand (attribute A1)",
      "explanation": "Manually recreate what the tree-growing algorithm computes internally: entropy of the parent (29 vs 35 out of 64) and the weighted entropy after splitting on A1 (26 samples: 21/5, and 38 samples: 8/30), then their difference is the information gain.",
      "code": "from scipy.stats import entropy\n\nH_29_35 = entropy([29/64, 35/64], base=2)          # 0.9936507116910405\n\nH_A1 = 26/(26+38) * entropy([21/26, 5/26], base=2) + 38/(26+38) * entropy([8/38, 30/38], base=2)\n# H_A1 = 0.7277758431480987\n\nIG_A1 = H_29_35 - H_A1   # 0.26587486854294173"
    },
    {
      "title": "Compute information gain for a second attribute (A2) and compare",
      "explanation": "Repeat the entropy/IG calculation for attribute A2 (51 samples: 18/33, and 13 samples: 11/2) and compare IG_A1 vs IG_A2 to decide which attribute is the better root split.",
      "code": "H_A2 = 51/(51+13) * entropy([18/51, 33/51], base=2) + 13/(51+13) * entropy([11/13, 2/13], base=2)\n# H_A2 = 0.8722188282278065\n\nIG_A2 = H_29_35 - H_A2\n\nIG_A1, IG_A2\n# (0.26587486854294173, 0.12143188346323397)  -> A1 is the stronger split"
    },
    {
      "title": "Plot the Gini impurity curve",
      "explanation": "Define gini(p) = 1 - p^2 - (1-p)^2 and plot it over p in [0, 1] to see it peak at p=0.5 (maximum impurity) and hit 0 at the pure endpoints.",
      "code": "x = np.arange(0, 1.1, 0.05)\n\ndef gini(p):\n    return 1 - p*p - (1-p)*(1-p)\n\ny = list(map(gini, x))\nplt.plot(x, y)\nplt.show()"
    },
    {
      "title": "Compute entropy, information gain, split information, and gain ratio on a toy dataset",
      "explanation": "For an 8-row toy dataset (5 positive / 3 negative) with attributes Name (8 unique values), Height, and Cap-color, compute each attribute's information gain, then normalize by split information to get gain ratio -- showing why Name (a unique-ID-like attribute with IG=0.9544) is NOT chosen once cardinality bias is corrected.",
      "code": "H_s = entropy([5/8, 3/8], base=2)                      # 0.954434002924965\nH_s_Name = 0                                            # each of 8 unique names is a pure singleton leaf\nH_s_Height = (5/8)*entropy([1/5,4/5], base=2) + (3/8)*entropy([1/3,2/3], base=2)   # 0.795565997075035\nH_s_cap = 0 + 0 + 3/8*entropy([1/3,2/3], base=2)        # 0.34436093777043353\n\nIG_Name = H_s - H_s_Name       # 0.954434002924965\nIG_Height = H_s - H_s_Height   # 0.1588680058499301\nIG_cap = H_s - H_s_cap         # 0.6100730651545315\n\nSI_Name = entropy([1/8]*8, base=2)                     # 3.0\nSI_Height = entropy([5/8, 3/8], base=2)                # 0.954434002924965\nSI_cap = entropy([3/8, 3/8, 2/8], base=2)              # 1.561278124459133\n\nGR_Name = IG_Name / SI_Name       # 0.318144667641655\nGR_Height = IG_Height / SI_Height # 0.1664525837963255\nGR_cap = IG_cap / SI_cap          # 0.39075233015634325\n\nGR_Name, GR_Height, GR_cap  # cap-color has the best gain ratio despite Name having the best raw info gain"
    }
  ],
  "takeaways": [
    "CART grows binary, axis-aligned trees by greedily choosing the (feature, threshold) that most reduces impurity (Gini by default) at each node.",
    "predict_proba returns the class distribution of the training samples in the leaf reached by an input; predict just takes the argmax of that distribution.",
    "Regularization hyperparameters like max_depth and min_samples_leaf trade off fit-to-training-noise against generalization -- unrestricted trees overfit both classification (moons) and regression (quadratic) data.",
    "DecisionTreeRegressor produces piecewise-constant predictions (a step function), with each leaf predicting the mean target of its training samples.",
    "Entropy H(S) = -sum(p_i*log2(p_i)) measures node impurity; Information Gain IG(S,A) = H(S) - H(S|A) measures how much a split on A reduces that impurity, and the attribute with the highest IG (e.g. A1 at 0.2659 over A2 at 0.1214) is preferred by ID3.",
    "Gini impurity, 1 - p^2 - (1-p)^2, is CART's default alternative to entropy: same shape, cheaper to compute, peaks at 0.5 for a balanced binary node.",
    "Raw information gain is biased toward high-cardinality attributes (a unique 'Name' column gets IG=0.9544, the maximum possible); Gain Ratio = IG / SplitInfo corrects this, here favoring Cap-color (0.391) over Name (0.318) and Height (0.166)."
  ]
}

export const ensembleLab: Lab = {
  "id": "w4-ensemble",
  "week": "W4",
  "title": "CS610 Week 4 Lab: Ensemble Learning — Bagging, Random Forests, AdaBoost, and Gradient Boosting",
  "overview": "This lab (04_ensemble.ipynb) first revisits cross-validation and grid search on a 2D nonlinear binary classification dataset, then builds up four ensemble strategies on the same data/train-test split: Bagging, Random Forest, AdaBoost (SAMME and SAMME.R), and Gradient Boosting. For each ensemble it visualizes every base estimator's individual decision boundary alongside the combined ensemble's boundary, making the bias/variance tradeoffs of bagging-style vs boosting-style ensembles directly visible.",
  "steps": [
    {
      "title": "Load the nonlinear dataset",
      "explanation": "Loads a 2-feature, binary-label synthetic dataset used throughout the notebook for both the cross-validation/grid-search warm-up and the ensemble experiments.",
      "code": "import numpy as np\nfrom sklearn import linear_model, tree, model_selection\nimport matplotlib.pyplot as plt\n\n# Load the dataset\ndata = np.loadtxt('dataset/nonlinear.txt', delimiter = ',')\nx = data[:,:2]\ny = data[:,2].astype(int)"
    },
    {
      "title": "Compare KFold vs StratifiedKFold (with and without shuffle)",
      "explanation": "Builds three 10-fold splitters -- plain KFold, StratifiedKFold, and StratifiedKFold with shuffle=True -- and plots each fold's train/test points to show how unshuffled folds can land on very different, non-representative regions of the data.",
      "code": "kf  = [\n    model_selection.KFold(n_splits=10),\n    model_selection.StratifiedKFold(n_splits=10),\n    model_selection.StratifiedKFold(n_splits=10, shuffle=True, random_state=2022)]\n\ncolor = ['blue', 'red']\nfor i in range(3):\n    print('**using ' + (i > 0 and 'Stratified' or '') + 'KFold' + (i == 2 and ' with shuffle' or ''))\n    plt.figure(figsize = (25, 10))\n    counter = 1\n    for train_index, test_index in kf[i].split(x, y):\n        plt.subplot(2, 5, counter)\n        counter += 1\n        x_train = x[train_index,:]\n        x_test = x[test_index,:]\n        y_train_color = [color[i] for i in y[train_index]]\n        y_test_color = [color[i] for i in y[test_index]]\n        plt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\n        plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n    \n    plt.show()"
    },
    {
      "title": "Cross-validate 6 classifiers across all 3 CV strategies",
      "explanation": "Fits Logistic Regression at C=1,10,100 and a Decision Tree at max_depth=2,3,4, running cross_val_score under each of the 3 CV splitters and printing per-fold scores plus mean/std. This is where the notebook demonstrates that unshuffled KFold/StratifiedKFold gives unstable (high-std) accuracy estimates on this ordered dataset, while shuffled StratifiedKFold gives tight, reliable estimates.",
      "code": "clf, desc = [], []\n\nfor c in [1, 10, 100]:\n    clf.append(linear_model.LogisticRegression(C=c, solver='liblinear'))\n    desc.append('Logistic Regression with C = ' + str(c))\n\nfor d in [2, 3, 4]:\n    clf.append(tree.DecisionTreeClassifier(criterion='entropy', max_depth=d))\n    desc.append('Decision Tree with depth = ' + str(d))\n\nfor i in range(6):\n    print('-' * len(desc[i]))\n    print(desc[i])\n    print('-' * len(desc[i]))\n    for j in range(3):\n        print('**using ' + (j > 0 and 'Stratified' or '') + 'KFold' + (j == 2 and ' with shuffle' or ''))\n        score = model_selection.cross_val_score(clf[i], x, y, cv=kf[j])\n        score_format = list(map(lambda x: round(x, 3), score))\n        # pred = model_selection.cross_val_predict(clf[i], x, y, cv=kf[j])\n        print('        score:', score_format)\n        print('        mean: %.3f, standard deviation: %.3f' % (np.mean(score), np.std(score)))"
    },
    {
      "title": "Grid search Decision Tree hyperparameters",
      "explanation": "Runs GridSearchCV over two parameter grids (varying max_depth with min_samples_split=5, and varying min_samples_split with max_depth=3) using the shuffled StratifiedKFold as the CV strategy, finding the single best-performing configuration.",
      "code": "color = ['blue', 'red']\ny_color = [color[i] for i in y]\n\nparameters = [\n    {'criterion': ['gini', 'entropy'], 'splitter': ['best', 'random'], 'max_depth': [2, 3, 4, 5], 'min_samples_split': [5]},\n    {'criterion': ['gini', 'entropy'], 'splitter': ['best', 'random'], 'max_depth': [3], 'min_samples_split': [3, 5, 7, 9]}]\n\nclf = model_selection.GridSearchCV(\n    tree.DecisionTreeClassifier(), parameters, cv=model_selection.StratifiedKFold(n_splits=10, shuffle=True, random_state=2022))\nclf.fit(x, y)\nprint('best score:', clf.best_score_)\nprint('best parameters: ', clf.best_params_)"
    },
    {
      "title": "Visualize the grid-search winner's decision boundary",
      "explanation": "Builds a fine mesh grid over the feature space and plots the best_estimator_'s predicted-probability contours together with the raw data points, giving a visual sanity check on the tuned tree.",
      "code": "steps = 200\nx0 = my_linspace(min(x[:,0]), max(x[:,0]), steps)\nx1 = my_linspace(min(x[:,1]), max(x[:,1]), steps)\nxx0, xx1 = np.meshgrid(x0, x1)\nmesh_data = np.c_[xx0.ravel(), xx1.ravel()]\nmesh_deci = clf.best_estimator_.predict_proba(mesh_data).reshape(steps, steps, 2)\n\nplt.figure(figsize = (12, 12))\nplt.contourf(xx0, xx1, mesh_deci[:,:,0], 40, cmap = plt.cm.RdBu, alpha = 0.3)\nplt.scatter(x[:,0], x[:,1], c=y_color)\nplt.show()"
    },
    {
      "title": "Set up train/test split and mesh grid for the ensemble section",
      "explanation": "Switches to the ensemble module (sklearn.ensemble) and creates a single train/test split (80/20) plus a reusable mesh grid that every subsequent ensemble (bagging, random forest, AdaBoost, gradient boosting) will be evaluated and visualized on.",
      "code": "import numpy as np\nfrom sklearn import tree, ensemble, model_selection, metrics\nimport matplotlib.pyplot as plt\n\ndef my_linspace (min_value, max_value, steps):\n    diff = max_value - min_value\n    return np.linspace (min_value - 0.1 * diff, max_value + 0.1 * diff, steps)\n\nx_train, x_test, y_train, y_test = model_selection.train_test_split(x, y, test_size=0.2, random_state=2022)\n\ncolor = ['blue', 'red']\ny_train_color = [color[i] for i in y_train]\ny_test_color = [color[i] for i in y_test]\n\nsteps = 200\nx0 = my_linspace(min(x[:,0]), max(x[:,0]), steps)\nx1 = my_linspace(min(x[:,1]), max(x[:,1]), steps)\nxx0, xx1 = np.meshgrid(x0, x1)\nmesh_data = np.c_[xx0.ravel(), xx1.ravel()]"
    },
    {
      "title": "Bagging: train and visualize each bootstrap-sampled tree",
      "explanation": "Trains a BaggingClassifier of decision trees, each on 50% of samples (max_samples=0.5) and 1 feature at a time (max_features=1), with oob_score enabled. Plots each of the ensemble's base estimators' decision surfaces plus its individual test accuracy.",
      "code": "bagging = ensemble.BaggingClassifier(tree.DecisionTreeClassifier(), max_samples=0.5, max_features=1, oob_score=True, random_state = 2022)\nbagging.fit(x_train, y_train)\n\nplt.figure(figsize = (25, 10))\nfor i in range(bagging.n_estimators):\n    plt.subplot(2, 5, i+1)\n    mesh_prob = bagging.estimators_[i].predict_proba(mesh_data[:,bagging.estimators_features_[i]]).reshape(steps, steps, 2)\n    plt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\n    plt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\n    plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n    plt.text(0, 1, round(bagging.estimators_[i].score(x_test[:,bagging.estimators_features_[i]], y_test), 3))\n\nplt.show()"
    },
    {
      "title": "Bagging: visualize the combined ensemble boundary",
      "explanation": "Uses the fitted BaggingClassifier's aggregated predict_proba (averaging all base trees) to draw one combined decision boundary and prints its overall test-set score.",
      "code": "plt.figure(figsize = (12, 12))\nmesh_prob = bagging.predict_proba(mesh_data).reshape(steps, steps, 2)\nplt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\nplt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\nplt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\nplt.text(0, 1, round(bagging.score(x_test, y_test), 3))\nplt.show()"
    },
    {
      "title": "Random Forest: train and visualize each tree",
      "explanation": "Trains a RandomForestClassifier with 20 trees, each restricted to considering only 1 feature per split (max_features=1), and visualizes all 20 individual tree boundaries -- the extreme feature restriction makes each tree noisier and more different from its peers than in the bagging step.",
      "code": "rforest = ensemble.RandomForestClassifier(n_estimators=20, max_features=1, oob_score=True, random_state=2022)\nrforest.fit(x_train, y_train)\n\nplt.figure(figsize = (25, 20))\nfor i in range(rforest.n_estimators):\n    plt.subplot(4, 5, i+1)\n    mesh_prob = rforest.estimators_[i].predict_proba(mesh_data).reshape(steps, steps, 2)\n    plt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\n    plt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\n    plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n    plt.text(0, 1, round(rforest.estimators_[i].score(x_test, y_test), 3))\n\nplt.show()"
    },
    {
      "title": "Random Forest: visualize the combined ensemble boundary",
      "explanation": "Averages all 20 trees' predicted probabilities into one smoother decision boundary and prints the forest's overall test accuracy for comparison against the single-tree and bagging results.",
      "code": "plt.figure(figsize = (12, 12))\nmesh_prob = rforest.predict_proba(mesh_data).reshape(steps, steps, 2)\nplt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\nplt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\nplt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\nplt.text(0, 1, round(rforest.score(x_test, y_test),3))\nplt.show()"
    },
    {
      "title": "AdaBoost: fit SAMME and SAMME.R, track sample weights and staged scores",
      "explanation": "Fits two AdaBoostClassifiers (base learner: depth-2 decision tree, 10 estimators) using the discrete 'SAMME' and probability-based 'SAMME.R' algorithms. Recomputes each round's sample weights via the private _boost method to visualize which points get up-weighted, and records staged_score to track training accuracy round-by-round. Then plots each round's weak learner boundary (point size scaled by current sample weight) and the final combined boundary for each algorithm.",
      "code": "adaboost = [\n    ensemble.AdaBoostClassifier(tree.DecisionTreeClassifier(max_depth=2), n_estimators=10, algorithm='SAMME', random_state=2022),\n    ensemble.AdaBoostClassifier(tree.DecisionTreeClassifier(max_depth=2), n_estimators=10, algorithm='SAMME.R', random_state=2022)]\n\nstaged_score = [0.0] * 2\nsample_weight = np.zeros((2, 10, x_train.shape[0]))\nsample_weight[:, 0, :] = 1.0 / x_train.shape[0]\n\nfor i in range(2):\n    adaboost[i].fit(x_train, y_train)\n    staged_score[i] = [j for j in adaboost[i].staged_score(x_train, y_train)]\n    for j in range(adaboost[i].n_estimators):\n        sample_weight[i][j], _, _ = adaboost[i]._boost(\n            j, x_train, y_train, sample_weight[i][max(0,j-1)], random_state=2022)\n    sample_weight_sum = np.sum(sample_weight[i][j])\n    sample_weight[i][j] /= sample_weight_sum\n\nfor i in range(2):\n    plt.figure(figsize = (25, 10))\n    for j in range(adaboost[i].n_estimators):\n        plt.subplot(2, 5, j+1)\n        mesh_prob = adaboost[i].estimators_[j].predict_proba(mesh_data).reshape(steps, steps, 2)\n        plt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\n        plt.scatter(x_train[:,0], x_train[:,1], s=[np.maximum(20, 20 * sample_weight[i,j,:] * x_train.shape[0])], c=y_train_color)\n        plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n        plt.text(0, 1, round(adaboost[i].estimators_[j].score(x_test, y_test), 3))\n        plt.text(0, 0.38, staged_score[i][j])\n    \n    plt.show()\n    \n    plt.figure(figsize = (12, 12))\n    mesh_prob = adaboost[i].predict_proba(mesh_data).reshape(steps, steps, 2)\n    plt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\n    plt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\n    plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n    plt.text(0, 1, round(adaboost[i].score(x_test, y_test),3))\n    plt.show()"
    },
    {
      "title": "Gradient Boosting: fit, inspect staged predictions, and visualize each residual-fitting tree",
      "explanation": "Fits a GradientBoostingClassifier (10 estimators) and uses staged_predict to get the ensemble's training predictions after each boosting round, showing training accuracy climbing as trees are added. Each round's individual regression tree (estimators_[i][0]) is plotted with its own decision surface and standalone test accuracy, then the final combined ensemble boundary is drawn using the full model's predict_proba.",
      "code": "gboost = ensemble.GradientBoostingClassifier(n_estimators=10, random_state=2022)\ngboost.fit(x_train, y_train)\nstaged_pred = [i for i in gboost.staged_predict(x_train)]\n\nplt.figure(figsize = (25, 10))\nfor i in range(gboost.n_estimators):\n    plt.subplot(2, 5, i+1)\n    mesh_prob = gboost.estimators_[i][0].predict(mesh_data).reshape(steps, steps)\n    plt.contourf(xx0, xx1, -mesh_prob[:,:], 10, cmap=plt.cm.RdBu, alpha=0.3)\n    plt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\n    plt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\n    plt.text(0, 1, round(metrics.accuracy_score(y_test, gboost.estimators_[i][0].predict(x_test) > 0), 3))\n    plt.text(0, 0.38, round(metrics.accuracy_score(y_train, staged_pred[i]),3))\n\nplt.show()\n\nplt.figure(figsize = (12, 12))\nmesh_prob = gboost.predict_proba(mesh_data).reshape(steps, steps, 2)\nplt.contourf(xx0, xx1, mesh_prob[:,:,0], 10, cmap=plt.cm.RdBu, alpha=0.3)\nplt.scatter(x_train[:,0], x_train[:,1], c=y_train_color)\nplt.scatter(x_test[:,0], x_test[:,1], c=y_test_color, marker='+')\nplt.text(0, 1, round(gboost.score(x_test, y_test), 3))\nplt.show()"
    }
  ],
  "takeaways": [
    "Unshuffled KFold/StratifiedKFold on an ordered dataset can produce wildly unstable per-fold accuracy (std as high as 0.27 for logistic regression); shuffling before splitting (StratifiedKFold(shuffle=True)) collapses that std to under 0.05 without changing the mean much.",
    "GridSearchCV paired with a shuffled StratifiedKFold found the best single decision tree (gini, max_depth=5, min_samples_split=5, splitter='best') at accuracy 0.859, a ceiling the later ensembles can be compared against.",
    "Bagging trains independent estimators on bootstrap-resampled rows (and optionally random feature subsets), then averages predictions to reduce variance; oob_score=True gets a free validation estimate from the ~36.8% of rows excluded from each bootstrap draw.",
    "Random Forest is bagging + per-split random feature selection; forcing max_features=1 in the notebook makes each of the 20 trees rely on a different single feature at each split, decorrelating them more than plain bagging does.",
    "AdaBoost reweights training samples after every weak learner based on its errors; SAMME.R uses predicted probabilities (not just hard labels) for these updates, generally producing smoother weight/boundary evolution than discrete SAMME.",
    "Gradient Boosting fits each new tree to the residual/negative gradient of the current ensemble's loss; staged_predict/staged_score confirm training accuracy improves monotonically as more of the 10 trees are added.",
    "Across all four ensembles, the per-base-estimator plots (each with its own text-annotated accuracy) consistently score lower individually than the combined ensemble boundary plotted right after -- the core empirical argument for ensembling.",
    "Bagging-family methods (Bagging, Random Forest) primarily fight variance via averaging independent-ish learners; boosting-family methods (AdaBoost, Gradient Boosting) primarily fight bias via sequential error-correction."
  ]
}

export const w6CnnMnistLab: Lab = {
  "id": "w6-cnn-mnist",
  "week": "W6",
  "title": "CS610 Week 6 Lab: From Softmax to CNNs on MNIST (Keras, five architectures)",
  "overview": "This lab (06_cnn.ipynb) trains five Keras models on MNIST handwritten digits (60,000 training / 10,000 test images, 28 x 28 grayscale) under an identical recipe (SGD, categorical cross-entropy, batch size 100, 10 epochs) so that only the architecture changes. It moves from a softmax-only linear classifier (7,850 parameters, 0.9024 test accuracy), through one- and two-hidden-layer MLPs of 512 ReLU units with dropout (0.9318 and 0.9473), to two CNNs: (conv 5x5 + maxpool) x 2 with 184,586 parameters, the best at 0.9787, and conv 3x3 x 2 + one maxpool with 1,199,882 parameters at 0.9722. Every layer's parameter count and output shape is derived below and checked against model.summary(), showing why weight sharing and pooling beat simply adding parameters.",
  "steps": [
    {
      "title": "Set up: imports, hyperparameters and a first look at MNIST",
      "explanation": "The lab uses Keras' Sequential API with the layer types needed for every model in the notebook: Dense, Conv2D, MaxPooling2D, Dropout and Flatten. Three hyperparameters are fixed once and reused by all five models so the comparison is fair: batch_size = 100, num_classes = 10 and epochs = 10. mnist.load_data() returns the standard split of 60,000 training and 10,000 test images of handwritten digits (28 x 28 grayscale). The first 16 training images are shown in a 4 x 4 grid as a sanity check of what the models will see.",
      "code": "batch_size = 100\nnum_classes = 10\nepochs = 10\n\n(x_train, y_train), (x_test, y_test) = mnist.load_data()\n\nplt.figure(figsize = (18, 18))\nfor i in range(16):\n    plt.subplot(4, 4, i + 1)\n    plt.imshow(x_train[i], cmap=plt.get_cmap('gray'))"
    },
    {
      "title": "Preprocess: flatten to 784, scale to [0, 1], one-hot the labels",
      "explanation": "The first three models are fully connected, so each 28 x 28 image is reshaped into a flat vector of 28 x 28 = 784 pixel values (shapes become (60000, 784) and (10000, 784)). Pixels are cast to float32 and divided by 255 so inputs lie in [0, 1], which keeps the initial activations and gradients in a sensible range for SGD. Labels are converted with to_categorical into 10-dimensional one-hot vectors because the loss used later is categorical_crossentropy, which compares a one-hot target with a 10-way softmax output. The cell prints '60000 train samples' and '10000 test samples'.",
      "code": "x_train = x_train.reshape(60000, 784)\nx_test = x_test.reshape(10000, 784)\nx_train = x_train.astype('float32')\nx_test = x_test.astype('float32')\nx_train /= 255\nx_test /= 255\n\ny_train = keras.utils.to_categorical(y_train, num_classes)\ny_test = keras.utils.to_categorical(y_test, num_classes)"
    },
    {
      "title": "Model 1: a softmax layer straight on the 784 pixels (7,850 parameters)",
      "explanation": "The baseline is the simplest possible classifier: one Dense layer of 10 softmax units on the raw pixels, which is multinomial logistic regression. Its parameter count is 784 inputs x 10 units + 10 biases = 7,850, exactly matching model.summary() (output shape (None, 10), Total params: 7,850). Every pixel connects directly to every class score, so the model can only learn one linear template per digit; it has no hidden features and no notion of spatial neighbourhood.",
      "code": "model_1 = Sequential()\nmodel_1.add(Dense(10, activation='softmax', input_shape=(784,)))\nmodel_1.summary()\n# dense (Dense)  (None, 10)  7850   ->  Total params: 7,850"
    },
    {
      "title": "Train and evaluate Model 1: test accuracy 0.9024",
      "explanation": "All five models are compiled identically: categorical_crossentropy loss, plain SGD optimizer (default settings) and accuracy as the metric, then fit for 10 epochs with batch_size 100, i.e. 60,000 / 100 = 600 gradient steps per epoch (the '600/600' in the log). Note that validation_data=(x_test, y_test), so the 'val_accuracy' printed each epoch is really test accuracy. Model 1 climbs from val_accuracy 0.8453 after epoch 1 to 0.9024 after epoch 10; model.evaluate reports Test loss 0.3614 and Test accuracy 0.9024. Roughly 90% is what a purely linear model on pixels can reach here.",
      "code": "model_1.compile(loss=keras.losses.categorical_crossentropy, optimizer=keras.optimizers.SGD(), metrics=['accuracy'])\nrun = model_1.fit(x_train, y_train, batch_size=batch_size, epochs=epochs, verbose=1, validation_data=(x_test, y_test))\nscore = model_1.evaluate(x_test, y_test, verbose=0)\n# Test loss: 0.36144229769706726\n# Test accuracy: 0.902400016784668"
    },
    {
      "title": "Model 2: one hidden layer of 512 ReLU units with Dropout(0.2)",
      "explanation": "Adding a hidden layer lets the network learn non-linear features before classifying. Parameter counts: Dense(512) on 784 inputs = 784 x 512 + 512 = 401,920; Dropout has 0 parameters (it only randomly zeroes 20% of activations during training to reduce overfitting); the output Dense(10) on 512 inputs = 512 x 10 + 10 = 5,130. Total 401,920 + 5,130 = 407,050, matching the summary. Almost all (about 98.7%) of the weights sit in the first layer because every one of the 784 pixels connects to every hidden unit. Trained with the same recipe, test accuracy rises to 0.9318 (test loss 0.2406).",
      "code": "model_2 = Sequential()\nmodel_2.add(Dense(512, activation='relu', input_shape=(784,)))\nmodel_2.add(Dropout(0.2))\nmodel_2.add(Dense(10, activation='softmax'))\n# dense_1 401920 | dropout 0 | dense_2 5130  ->  Total params: 407,050\n# Test accuracy: 0.9318000078201294"
    },
    {
      "title": "Model 3: two hidden layers of 512 (669,706 parameters)",
      "explanation": "A second 512-unit hidden layer (again followed by Dropout(0.2)) is inserted to test whether depth helps a fully connected network. The new layer has 512 x 512 + 512 = 262,656 parameters, so the total is 401,920 + 262,656 + 5,130 = 669,706, matching the summary. Test accuracy improves again to 0.9473 (test loss 0.1834), but each epoch is slower (about 4 to 7 s versus 2 s for Model 2). The network still treats the image as an unordered list of 784 numbers, so it must learn the same stroke pattern separately at every location.",
      "code": "model_3 = Sequential()\nmodel_3.add(Dense(512, activation='relu', input_shape=(784,)))\nmodel_3.add(Dropout(0.2))\nmodel_3.add(Dense(512, activation='relu'))\nmodel_3.add(Dropout(0.2))\nmodel_3.add(Dense(10, activation='softmax'))\n# 401920 + 262656 + 5130 = 669,706\n# Test accuracy: 0.9473000168800354"
    },
    {
      "title": "Reshape back to 28 x 28 x 1 images for the CNNs",
      "explanation": "Convolutional layers need the spatial layout that the Dense models threw away. The flat 784-vectors are reshaped to (samples, 28, 28, 1): height 28, width 28 and a single channel because MNIST is grayscale (channels-last format, as Keras expects by default). The already-scaled [0, 1] values and one-hot labels are reused unchanged, so any accuracy difference below comes from the architecture alone.",
      "code": "img_rows, img_cols = 28, 28\nx_train = x_train.reshape(x_train.shape[0], img_rows, img_cols, 1)\nx_test = x_test.reshape(x_test.shape[0], img_rows, img_cols, 1)"
    },
    {
      "title": "Model 4 architecture: (Conv 5x5 + MaxPool 2x2) x 2, then Dense(128)",
      "explanation": "Model 4 stacks two convolution and max-pooling blocks. With no padding ('valid') and stride 1, a k x k convolution shrinks each side by k - 1, and a 2 x 2 max-pool halves it. Shapes: 28 x 28 x 1, then Conv2D(32, 5x5) gives 24 x 24 x 32 (28 - 5 + 1 = 24), then MaxPooling gives 12 x 12 x 32, then Conv2D(64, 5x5) gives 8 x 8 x 64 (12 - 5 + 1 = 8), then MaxPooling gives 4 x 4 x 64, then Flatten gives 4 x 4 x 64 = 1,024, then Dense(128), then Dense(10). Dropout(0.2) follows each pooling layer and the 128-unit layer. All these shapes match the summary.",
      "code": "model_4 = Sequential()\nmodel_4.add(Conv2D(32, kernel_size=(5, 5), activation='relu', input_shape=(img_rows, img_cols, 1)))\nmodel_4.add(MaxPooling2D(pool_size=(2, 2)))\nmodel_4.add(Dropout(0.2))\nmodel_4.add(Conv2D(64, kernel_size=(5, 5), activation='relu'))\nmodel_4.add(MaxPooling2D(pool_size=(2, 2)))\nmodel_4.add(Dropout(0.2))\nmodel_4.add(Flatten())\nmodel_4.add(Dense(128, activation='relu'))\nmodel_4.add(Dropout(0.2))\nmodel_4.add(Dense(10, activation='softmax'))"
    },
    {
      "title": "Model 4 parameters (184,586) and the best test accuracy, 0.9787",
      "explanation": "A Conv2D layer has (k x k x C_in) weights per filter plus one bias per filter, independent of image size, because each filter's weights are shared across all positions. Conv1: 5 x 5 x 1 x 32 + 32 = 832. Conv2: 5 x 5 x 32 x 64 + 64 = 51,264. Dense(128) on the 1,024 flattened values: 1,024 x 128 + 128 = 131,200. Output: 128 x 10 + 10 = 1,290. MaxPooling, Dropout and Flatten have 0. Total 832 + 51,264 + 131,200 + 1,290 = 184,586, matching the summary. That is fewer than half the weights of Model 2 (407,050), yet Model 4 reaches Test accuracy 0.9787 (test loss 0.0665), the best in the notebook. Weight sharing and pooling build in the assumption that a stroke means the same thing wherever it appears. The cost is compute: about 25 to 32 s per epoch versus 1 to 2 s for the Dense models.",
      "code": "model_4.compile(loss=keras.losses.categorical_crossentropy, optimizer=keras.optimizers.SGD(), metrics=['accuracy'])\nrun = model_4.fit(x_train, y_train, batch_size=batch_size, epochs=epochs, verbose=1, validation_data=(x_test, y_test))\n# conv2d 832 | conv2d_1 51264 | dense_6 131200 | dense_7 1290 -> Total params: 184,586\n# Test loss: 0.06647618114948273\n# Test accuracy: 0.9786999821662903"
    },
    {
      "title": "Model 5 architecture: two 3x3 convs back to back, then one MaxPool",
      "explanation": "Model 5 changes the layout: two Conv2D layers with smaller 3 x 3 kernels come first, and only one 2 x 2 max-pool follows. Shapes: 28 x 28 x 1, then Conv2D(32, 3x3) gives 26 x 26 x 32, then Conv2D(64, 3x3) gives 24 x 24 x 64, then MaxPooling gives 12 x 12 x 64, then Dropout(0.2), then Flatten gives 12 x 12 x 64 = 9,216, then Dense(128), then Dropout(0.2), then Dense(num_classes = 10). Because there is only one pooling step, the feature map entering the dense layer is 9 times larger than in Model 4 (9,216 vs 1,024 values).",
      "code": "model_5 = Sequential()\nmodel_5.add(Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(img_rows, img_cols, 1)))\nmodel_5.add(Conv2D(64, kernel_size=(3, 3), activation='relu'))\nmodel_5.add(MaxPooling2D(pool_size=(2, 2)))\nmodel_5.add(Dropout(0.2))\nmodel_5.add(Flatten())\nmodel_5.add(Dense(128, activation='relu'))\nmodel_5.add(Dropout(0.2))\nmodel_5.add(Dense(num_classes, activation='softmax'))"
    },
    {
      "title": "Model 5 parameters (1,199,882) and test accuracy 0.9722",
      "explanation": "Conv1: 3 x 3 x 1 x 32 + 32 = 320. Conv2: 3 x 3 x 32 x 64 + 64 = 18,496. Dense(128) on 9,216 inputs: 9,216 x 128 + 128 = 1,179,776. Output: 128 x 10 + 10 = 1,290. Total 320 + 18,496 + 1,179,776 + 1,290 = 1,199,882, matching the summary. The convolutions themselves are cheap (18,816 parameters together); about 98.3% of the model lives in the single dense layer, purely because the feature map was pooled only once. Despite having about 6.5 times as many parameters as Model 4, Model 5 scores slightly lower: Test accuracy 0.9722 (test loss 0.0883) versus 0.9787, and it is slower (about 39 to 45 s per epoch). More parameters did not buy more accuracy; downsampling before the dense layer mattered more.",
      "code": "model_5.compile(loss=keras.losses.categorical_crossentropy, optimizer=keras.optimizers.SGD(), metrics=['accuracy'])\nrun = model_5.fit(x_train, y_train, batch_size=batch_size, epochs=epochs, verbose=1, validation_data=(x_test, y_test))\n# conv2d_2 320 | conv2d_3 18496 | dense_8 1179776 | dense_9 1290 -> Total params: 1,199,882\n# Test loss: 0.08834558725357056\n# Test accuracy: 0.9721999764442444"
    },
    {
      "title": "Compare all five models side by side",
      "explanation": "Test accuracy / total parameters after 10 epochs of SGD: Model 1 (softmax only) 0.9024 / 7,850; Model 2 (1 x 512) 0.9318 / 407,050; Model 3 (2 x 512) 0.9473 / 669,706; Model 4 ((conv 5x5 + pool) x 2) 0.9787 / 184,586; Model 5 (conv 3x3 x 2 + pool) 0.9722 / 1,199,882. Going from the linear model to the best CNN cuts the error rate from about 9.8% to about 2.1%. Also notice that in the training logs the epoch 'accuracy' is often below 'val_accuracy' (e.g. Model 4 epoch 10: 0.9613 vs 0.9787): the training figure is averaged over the epoch while the weights are still improving and is measured with dropout switched on, whereas validation uses the full network at the end of the epoch.",
      "code": "# model    test_acc  total_params\n# model_1  0.9024    7,850\n# model_2  0.9318    407,050\n# model_3  0.9473    669,706\n# model_4  0.9787    184,586\n# model_5  0.9722    1,199,882"
    }
  ],
  "takeaways": [
    "Dense parameters = inputs x units + units (bias); Conv2D parameters = k x k x C_in x filters + filters. Pooling, Dropout and Flatten have 0 parameters.",
    "Verified totals: Model 1 = 7,850; Model 2 = 407,050; Model 3 = 669,706; Model 4 = 184,586; Model 5 = 1,199,882.",
    "Valid (no padding) convolution with stride 1 gives output side n - k + 1 (28 to 24 for 5x5, 28 to 26 for 3x3); 2x2 max-pooling halves each side (24 to 12, 8 to 4).",
    "Best test accuracy: Model 4, (conv 5x5 + maxpool) x 2, at 0.9787 with only 184,586 parameters. The MLPs top out at 0.9473 (Model 3) and the softmax-only baseline at 0.9024.",
    "Parameter count is not accuracy: Model 5 has about 6.5 times the parameters of Model 4 (98.3% of them in one Dense layer fed by a 9,216-value flatten) yet scores lower, 0.9722.",
    "Convolutional weights are shared across positions, so their count does not depend on image size; the expensive part of a CNN is usually the first Dense layer after Flatten, which is controlled by how much pooling happens first.",
    "Data must be shaped for the model: (N, 784) flat vectors for Dense models, (N, 28, 28, 1) images for Conv2D. Pixels are scaled by 1/255 and labels one-hot encoded for categorical_crossentropy.",
    "The notebook passes the test set as validation_data, so the per-epoch val_accuracy is test accuracy; it is used here only for monitoring, not for model selection."
  ]
}

export const w6ImageFiltersLab: Lab = {
  "id": "w6-image-filters",
  "week": "W6",
  "title": "CS610 Week 6 Lab: Hand-Coded Image Filters and a Convolution Filter Bank in NumPy",
  "overview": "This lab (06_filter.ipynb) opens up the convolution operation using only NumPy on a 512 x 768 RGB photo of macaws at Jurong Bird Park. It first shows that an image is a (height, width, 3) array of red, green and blue channels, then applies five hand-crafted kernels (10 x 10 blur, 20 x 20 diagonal motion blur, 3 x 3 edge detection, sharpen and emboss) with an explicit sliding-window loop, no padding and clipping to [0, 1]. Finally it stacks four 5 x 5 filters into a 5 x 5 x 4 bank and applies them all at once with np.tensordot, producing a 508 x 764 x 12 output that is displayed as four RGB feature maps, a hands-on preview of what a convolutional layer computes.",
  "steps": [
    {
      "title": "Load the macaw photo as a NumPy array",
      "explanation": "The second notebook shows what a convolution filter actually does, using plain NumPy instead of Keras so every multiply-and-add is visible. matplotlib.image.imread loads the photo of macaws at Singapore's Jurong Bird Park into an array img_orig, and plt.imshow displays it. A colour image is just a 3-D array of numbers, which is exactly the input format a CNN layer consumes.",
      "code": "import numpy as np\nimport matplotlib.pyplot as plt\nimport matplotlib.image as mpimg\n\nimg_orig = mpimg.imread('dataset/Macaws_at_Singapore_Jurong_Bird_Park_768x512.png')\nplt.imshow(img_orig)"
    },
    {
      "title": "An image is three stacked channels: shape (512, 768, 3)",
      "explanation": "As the notebook's markdown explains, each image has 3 layers: values for red, green and blue, so each pixel is described by 3 numbers at the same position. An empty array with the same height and width and 3 channels is created, and its shape prints as (512, 768, 3): 512 rows (height), 768 columns (width), 3 channels. This (height, width, channels) layout is the same channels-last layout used for the 28 x 28 x 1 MNIST tensors in the CNN lab.",
      "code": "img_filtered = np.zeros((img_orig.shape[0], img_orig.shape[1], 3))\nimg_filtered.shape\n# (512, 768, 3)"
    },
    {
      "title": "Isolate the red channel",
      "explanation": "Only channel 0 (red) is copied from the original into the all-zero array, leaving green and blue at 0. The displayed result is the picture rendered purely in shades of red: bright where the original had a strong red component (such as the red macaw feathers) and dark elsewhere. This shows that each channel is a separate 2-D grid of intensities, which is why the filters below are applied channel by channel.",
      "code": "img_filtered[:,:,0] = img_orig[:,:,0]\nplt.imshow(img_filtered)"
    },
    {
      "title": "Define five hand-crafted kernels",
      "explanation": "Five 2-D kernels are defined. blur: a 10 x 10 matrix of 1/100, so each output is the mean of a 10 x 10 neighbourhood. motion: np.identity(20) / 20, which averages 20 pixels along the main diagonal and smears the image in one diagonal direction like camera shake. edge_detection: [[0,-1,0],[-1,4,-1],[0,-1,0]], centre minus its four neighbours. sharpen: the same but with 5 in the centre. emboss: [[-1,-1,0],[-1,0,1],[0,1,1]], negative on the top-left and positive on the bottom-right. These are the kind of patterns a CNN learns automatically in its first layer; here they are written by hand.",
      "code": "blur_filter = np.ones((10, 10)) / 100\nmotion_filter = np.identity(20) / 20\nedge_detection_filter = np.array([[0, -1, 0], [-1, 4, -1], [0, -1, 0]])\nsharpen_filter = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])\nemboss_filter = np.array([[-1, -1,  0], [-1,  0,  1], [0,  1,  1]])"
    },
    {
      "title": "Copy each 2-D kernel into all 3 channels",
      "explanation": "For each kernel a (size, size, 3) array is built by copying the same 2-D kernel into each of the 3 colour channels. This lets one element-wise multiplication with a (size, size, 3) image patch apply the identical filter to red, green and blue at the same time, so the output keeps its colour.",
      "code": "for i in range(len(all_filter)):\n    filter_size = all_filter[i].shape[0]\n    filter = np.empty((filter_size, filter_size, 3))\n    for j in range(3):\n        filter[:,:,j] = all_filter[i]"
    },
    {
      "title": "Slide the window: a hand-written valid convolution",
      "explanation": "Two nested loops move the kernel over every position where it fits entirely inside the image (no padding, stride 1). At each (j, k) the patch img_orig[j:j+f, k:k+f, :] is multiplied element-wise by the kernel and summed over axes (0, 1), the two spatial axes, giving one value per channel. Because the window must fit, the output is (512 - f + 1) x (768 - f + 1): 503 x 759 for the 10 x 10 blur, 493 x 749 for the 20 x 20 motion filter, and 510 x 766 for the 3 x 3 kernels. This is the same n - k + 1 shrinkage seen in the Keras summaries (28 to 24 for a 5 x 5 Conv2D).",
      "code": "img_filtered = np.empty((img_orig.shape[0] - filter_size + 1, img_orig.shape[1] - filter_size + 1, 3))\nfor j in range(0, img_orig.shape[0] - filter_size + 1):\n    for k in range(0, img_orig.shape[1] -filter_size + 1):\n        img_filtered[j, k, :] = np.minimum(np.maximum(\n            np.sum(img_orig[j:j+filter_size, k:k+filter_size, :] * filter,\n                   axis=(0,1)), 0.0), 1.0)"
    },
    {
      "title": "Clip results to [0, 1] before display",
      "explanation": "The weighted sums can fall outside the valid pixel range: the edge, sharpen and emboss kernels contain negative weights, and sharpen can push bright pixels above 1. np.maximum(..., 0.0) followed by np.minimum(..., 1.0) clips every value into [0, 1], the float range imshow expects. The clipping plays a role similar to an activation function: for example, with edge detection all negative responses become 0 (black).",
      "code": "np.minimum(np.maximum(np.sum(patch * filter, axis=(0,1)), 0.0), 1.0)"
    },
    {
      "title": "Reading the five outputs: smoothing vs differencing kernels",
      "explanation": "The weights of blur, motion and sharpen each sum to 1, so in a flat region of constant colour the output equals the input and overall brightness is preserved; blur and motion average neighbours (all-positive weights), softening detail or streaking it diagonally. Edge detection and emboss weights sum to 0, so any flat region maps to 0 (black) and only places where intensity changes respond: edge detection highlights outlines such as the feathers' borders, and emboss responds to intensity changes along the top-left to bottom-right diagonal, giving a relief-like look. Sharpen = original + edge response (centre 5 = 1 + 4), so it adds the edges back onto the image and makes it crisper.",
      "code": "filter_name = ['blur', 'motion', 'edge_detection', 'sharpen', 'emboss']\n# sums of weights: blur 1, motion 1, edge_detection 0, sharpen 1, emboss 0"
    },
    {
      "title": "Build a 5 x 5 x 4 filter bank",
      "explanation": "Next, four filters are stacked into one tensor conv of shape (5, 5, 4), like the kernel of a convolutional layer with 4 filters. Slice 0 is a 5 x 5 blur (all 1/25). Slices 1 and 2 are the 3 x 3 edge-detection and sharpen kernels padded with a border of zeros to 5 x 5, so all filters share one size. Slice 3 is a larger 5 x 5 emboss kernel (-1 above the anti-diagonal, 0 on it, +1 below; its weights also sum to 0).",
      "code": "filter_width = 5\nconv = np.zeros((filter_width, filter_width, 4))\nconv[:, :, 0] = np.ones((5, 5)) / 25 # blur_filter\nconv[:, :, 1] = np.array([[0, 0, 0, 0, 0], [0, 0, -1, 0, 0], [0, -1, 4, -1, 0], [0, 0, -1, 0, 0], [0, 0, 0, 0, 0]]) # edge_detection_filter\nconv[:, :, 2] = np.array([[0, 0, 0, 0, 0], [0, 0, -1, 0, 0], [0, -1, 5, -1, 0], [0, 0, -1, 0, 0], [0, 0, 0, 0, 0]]) # sharpen_filter\nconv[:, :, 3] = np.array([[-1, -1, -1, -1, 0], [-1, -1, -1, 0, 1], [-1, -1, 0, 1, 1], [-1, 0, 1, 1, 1], [0, 1, 1, 1, 1]]) # emboss_filter"
    },
    {
      "title": "Apply all four filters at once with np.tensordot",
      "explanation": "At each position the 5 x 5 x 3 image patch is contracted with the 5 x 5 x 4 bank using np.tensordot(..., axes=[(0,1), (0,1)]): multiply and sum over the two spatial axes of both tensors. What remains are the patch's channel axis (3) and the bank's filter axis (4), so each position yields 3 x 4 = 12 numbers, one per (colour channel, filter) pair. The output array is (512 - 5 + 1) x (768 - 5 + 1) x 12 = 508 x 764 x 12. One tensor operation replaces four separate filtering loops, which is how a convolutional layer evaluates all of its filters in parallel.",
      "code": "img_filtered = np.empty((img_orig.shape[0] - filter_width + 1, img_orig.shape[1] - filter_width + 1, 12))\nfor i in range(0, img_orig.shape[0] - filter_width + 1):\n    for j in range(0, img_orig.shape[1] -filter_width + 1):\n        img_filtered[i, j, :] = np.minimum(np.maximum(\n            np.tensordot(img_orig[i:i+filter_width, j:j+filter_width, :], conv, axes=[(0,1), (0,1)]).flatten('F'),\n            0.0), 1.0)"
    },
    {
      "title": "Why flatten('F'), and how the 12 channels are laid out",
      "explanation": "The notebook's markdown calls the tensordot result a 4 x 3 matrix, but NumPy places the remaining axes of the first argument first, so the result is actually 3 x 4 (rows = R, G, B; columns = the 4 filters), which is confirmed by running it. flatten('F') reads column by column, so the 12-vector is [filter 0: R, G, B, filter 1: R, G, B, filter 2: R, G, B, filter 3: R, G, B]. That ordering is what makes the display step work: img_filtered[:, :, 3*i:3*i+3] picks out a 3-channel RGB image for filter i.",
      "code": "# tensordot(5x5x3 patch, 5x5x4 conv, axes=[(0,1),(0,1)]).shape -> (3, 4)\n# .flatten('F') -> [f0_R, f0_G, f0_B, f1_R, f1_G, f1_B, f2_R, ..., f3_B]  (12 values)"
    },
    {
      "title": "Display the four filtered images in a 2 x 2 grid",
      "explanation": "Each consecutive group of 3 output channels is shown as one RGB image in a 2 x 2 subplot grid: blur (top-left), edge detection (top-right), sharpen (bottom-left) and 5 x 5 emboss (bottom-right). This is effectively a picture of the 4 feature maps a 4-filter convolutional layer would produce. One difference from a Keras Conv2D: here each filter is applied to each colour channel separately (giving 4 x 3 = 12 maps), whereas Conv2D kernels span all input channels and sum over them, giving one map per filter. That is why Conv2D's parameter count includes C_in (e.g. 5 x 5 x 1 x 32 + 32 = 832 in the CNN lab).",
      "code": "plt.figure(figsize=(18, 12))\nfor i in range(4):\n    plt.subplot(2, 2, i+1)\n    plt.imshow(img_filtered[:, :, 3*i:3*i+3])\nplt.show()"
    }
  ],
  "takeaways": [
    "A colour image is a (height, width, 3) array; the macaw photo is (512, 768, 3), and each channel is its own 2-D intensity grid.",
    "Convolution here = slide a k x k window, multiply element-wise with the kernel, sum over the spatial axes. With no padding and stride 1 the output side is n - k + 1 (e.g. 512 x 768 with a 10 x 10 blur gives 503 x 759).",
    "Kernels whose weights sum to 1 (blur, motion, sharpen) keep flat regions unchanged; kernels whose weights sum to 0 (edge detection, emboss) send flat regions to 0 and respond only to changes in intensity.",
    "Sharpen = identity + edge detection: centre 5 = 1 + 4 with the same -1 neighbours.",
    "Outputs are clipped to [0, 1] with np.maximum / np.minimum because negative or above-1 responses are not displayable; for edge detection this zeroes all negative responses.",
    "Smaller kernels can be zero-padded to a common size (3 x 3 to 5 x 5) so a whole bank stacks into one tensor of shape (5, 5, 4), like a conv layer's kernel.",
    "np.tensordot over axes (0,1) applies all filters to a patch at once; for a 5 x 5 x 3 patch and a 5 x 5 x 4 bank the result is 3 x 4 (not 4 x 3 as the markdown says), and flatten('F') groups it by filter into RGB triples.",
    "These hand-designed filters (blur, edges, sharpen, emboss) are the kind of features a CNN's first convolutional layer learns automatically from data instead of being written by hand."
  ]
}

export const labs: readonly Lab[] = [nbLab, regressionLab, logisticLab, dtLab, ensembleLab, w6CnnMnistLab, w6ImageFiltersLab]
