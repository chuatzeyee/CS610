export interface ExamPart {
  label: string
  marks: number
  prompt: string
  answer: readonly string[]
}

export interface ExamQuestion {
  id: string
  number: number
  topic: string
  weeks: string
  marks: number
  intro?: string
  figure?: { src: string; caption: string }
  parts: readonly ExamPart[]
  examTips?: readonly string[]
}

export const examFormat = {
  title: 'Sample exam (CS610 sample paper)',
  facts: [
    ['Duration', '2 hours'],
    ['Questions', '7 questions, answer all'],
    ['Total', '70 marks'],
    ['Materials', 'Closed book; one A4 cheat sheet, both sides, printed or handwritten (instructor update 11 Nov), collected at the end'],
    ['Calculator', 'Scientific calculator allowed (no graphical or programmable)'],
    ['Style', 'Written answers: calculations, comparisons, explanations and justifications; no coding, no MCQ'],
    ['Real exam', 'Fri 13 Nov 2026, 7:30pm, 35% of the course grade'],
  ] as const,
  strategy: [
    'Marks per minute: 70 marks in 120 minutes is about 1.7 minutes per mark. A 15-mark question deserves about 25 minutes, a 5-mark one about 8.',
    'Show working on every calculation. Most marks are for the method, so write the formula, substitute the numbers, then give the result.',
    'For "explain" or "justify" questions, state the claim, give the reason, and back it with a formula or a small example.',
    'Put on the cheat sheet: the formulas from the portal\'s Math Trainer formula bank, conv output size and parameter counts, entropy and Gini, precision/recall/F1/TPR/FPR, k-means steps, Gaussian (naive) Bayes estimates, bootstrap 1 - 1/e.',
  ],
}

export const examQuestions: readonly ExamQuestion[] = [
  {
    id: 'q1',
    number: 1,
    topic: 'Validation and cross-validation',
    weeks: 'W2, W4',
    marks: 10,
    parts: [
      {
        label: '1a',
        marks: 5,
        prompt: 'Why do we need to split a part of data and use it as validation data? Do we split the validation data from the training set or the test set?',
        answer: [
          'Purpose: we need data the model has not been trained on to choose between models and hyperparameters (e.g. alpha in Ridge, tree depth, number of epochs, threshold) and to detect overfitting. Training error is optimistically biased, so it cannot be used for these choices.',
          'Why not the test set: if we tuned on the test set, the test score would no longer be an unbiased estimate of performance on unseen data. Choosing the model that looks best on the test set leaks test information into the model (data leakage), so the reported score is too optimistic.',
          'So the data is split three ways: training (fit the parameters), validation (select models and hyperparameters), test (touched once at the end to report performance).',
          'Answer to the second question: the validation set is split from the training set. The test set stays untouched.',
        ],
      },
      {
        label: '1b',
        marks: 5,
        prompt: 'What is the difference between validation and cross-validation?',
        answer: [
          'Validation (hold-out): one fixed split of the training data into a training part and a validation part. Fit once, score once. It is cheap, but the estimate depends on which samples happened to land in the validation set (high variance), and the validation samples are never used for training.',
          'k-fold cross-validation: split the training data into k folds; train k times, each time validating on a different fold and training on the other k - 1; average the k scores (often reported as mean and standard deviation).',
          'Differences: in cross-validation every sample is used for validation exactly once and for training k - 1 times, so the estimate is more reliable (lower variance) and makes better use of limited data. The cost is k times the training time.',
          'Variants to mention: stratified k-fold keeps the class proportions in each fold (important for imbalanced classes); with time-ordered data, use time-series splits so the validation fold is always later than the training fold.',
        ],
      },
    ],
  },
  {
    id: 'q2',
    number: 2,
    topic: 'Gaussian naive Bayes parameters',
    weeks: 'W1',
    marks: 10,
    intro: 'Two classes in the 10-point dataset. Round dots are class 0 and crosses are class 1. Applying a Gaussian naive Bayes classifier, find the mean and the variance-covariance matrix of each class.',
    figure: { src: 'exam/q2_points.png', caption: 'Class 0 (dots): A(-1, 4), B(1, 5), D(2, 2), E(2, 7), G(4, 4). Class 1 (crosses): C(1, 3), F(3, 5), H(4, 2), J(3, 0), K(6, 3). Coordinates read from the exam figure.' },
    parts: [
      {
        label: '2',
        marks: 10,
        prompt: 'Give mu0, Sigma0, mu1 and Sigma1.',
        answer: [
          'Class 0 mean: x = (-1 + 1 + 2 + 2 + 4) / 5 = 1.6; y = (4 + 5 + 2 + 7 + 4) / 5 = 4.4. So mu0 = (1.6, 4.4).',
          'Class 0 variances (maximum likelihood, divide by n = 5, as in the Week 1 lecture): x deviations -2.6, -0.6, 0.4, 0.4, 2.4 give squares 6.76 + 0.36 + 0.16 + 0.16 + 5.76 = 13.2, so var(x) = 13.2 / 5 = 2.64. y deviations -0.4, 0.6, -2.4, 2.6, -0.4 give 0.16 + 0.36 + 5.76 + 6.76 + 0.16 = 13.2, so var(y) = 2.64.',
          'Class 1 mean: x = (1 + 3 + 4 + 3 + 6) / 5 = 3.4; y = (3 + 5 + 2 + 0 + 3) / 5 = 2.6. So mu1 = (3.4, 2.6).',
          'Class 1 variances: x deviations -2.4, -0.4, 0.6, -0.4, 2.6 give 5.76 + 0.16 + 0.36 + 0.16 + 6.76 = 13.2, so var(x) = 2.64; y deviations 0.4, 2.4, -0.6, -2.6, 0.4 give 13.2 again, so var(y) = 2.64.',
          'Naive Bayes assumes the features are conditionally independent given the class, so the off-diagonal covariances are 0: Sigma0 = Sigma1 = [2.64, 0; 0, 2.64].',
          'Note: if you used the unbiased estimate (divide by n - 1 = 4) you get 3.3 on the diagonal; state which convention you use. A full (non-naive) Gaussian classifier would have off-diagonal covariance -0.04 in both classes, which the naive model sets to 0.',
        ],
      },
    ],
    examTips: ['Write the mean and variance formulas first, then a table of deviations: it earns method marks even if one number slips.'],
  },
  {
    id: 'q3',
    number: 3,
    topic: 'Softmax vs binary logistic regression',
    weeks: 'W3',
    marks: 10,
    intro: 'K-class logistic regression learns (w_j, beta_j) for each class and uses p(j | x) = exp(w_j . x + beta_j) / sum over j\' of exp(w_j\' . x + beta_j\'), so it has K x (d + 1) parameters. For K = 2 a binary logistic regression has only d + 1 parameters, p(1 | x) = 1 / (1 + exp(-w . x - beta)).',
    parts: [
      {
        label: '3',
        marks: 10,
        prompt: 'Explain why d + 1 parameters are sufficient to model binary logistic classification.',
        answer: [
          'With K = 2: p(1 | x) = exp(w1 . x + beta1) / (exp(w1 . x + beta1) + exp(w2 . x + beta2)).',
          'Divide the numerator and denominator by exp(w1 . x + beta1): p(1 | x) = 1 / (1 + exp((w2 - w1) . x + (beta2 - beta1))) = 1 / (1 + exp(-w . x - beta)) with w = w1 - w2 and beta = beta1 - beta2.',
          'So the probability depends only on the differences w1 - w2 and beta1 - beta2, which is exactly the binary logistic model with d + 1 parameters; p(2 | x) = 1 - p(1 | x) needs nothing extra.',
          'Why the 2(d + 1) version is redundant: adding the same vector c and constant b to both classes, (w1 + c, beta1 + b) and (w2 + c, beta2 + b), multiplies numerator and denominator by the same factor exp(c . x + b) and leaves every probability unchanged (softmax is invariant to shifting all scores equally). The parameters are not identifiable, so one class can be fixed at (0, 0) as a reference.',
          'In general K-class softmax needs only (K - 1)(d + 1) free parameters for the same reason; K = 2 gives d + 1.',
        ],
      },
    ],
  },
  {
    id: 'q4',
    number: 4,
    topic: 'Bootstrap sampling',
    weeks: 'W4',
    marks: 5,
    parts: [
      {
        label: '4',
        marks: 5,
        prompt: 'Given a dataset of size n, calculate the expected probability of a sample being selected in a bootstrap sample of size n. (Hint: 1 - 1/e = 63.2%.)',
        answer: [
          'A bootstrap sample draws n times with replacement. In one draw a particular sample is not picked with probability 1 - 1/n.',
          'The draws are independent, so it is never picked in n draws with probability (1 - 1/n)^n.',
          'So P(selected at least once) = 1 - (1 - 1/n)^n.',
          'As n grows, (1 - 1/n)^n tends to 1/e (about 0.368), so P(selected) tends to 1 - 1/e, about 63.2%. Check: n = 10 gives 0.651, n = 100 gives 0.634, n = 1000 gives 0.632.',
          'Consequence: each bootstrap sample contains about 63.2% of the distinct original samples; the remaining 36.8% are out-of-bag and can be used to estimate the error of a bagged model (OOB score).',
        ],
      },
    ],
  },
  {
    id: 'q5',
    number: 5,
    topic: 'CNN output sizes and parameters',
    weeks: 'W6',
    marks: 15,
    intro: 'Two conv + 2x2 max-pool pairs on p x p RGB images (p a multiple of 4), padding 0, stride 1. Correct: conv1 has f1 filters of s1 x s1, conv2 has f2 filters of s2 x s2, with f1, f2 > 10, s1 f1 = s2 f2, s2 < s1 << p, and s1, s2 leave remainder 1 when divided by 4. Larry swapped the kernel sizes: conv1 uses s2 x s2, conv2 uses s1 x s1.',
    parts: [
      {
        label: '5',
        marks: 15,
        prompt: 'For each quantity, say whether it increases, decreases, stays the same or is undetermined, with derivations: (1) output size after the first max-pool, (2) after the second max-pool, (3) parameters of conv1, (4) parameters of conv2, (5) total parameters of the two conv layers.',
        answer: [
          'Size rule (padding 0, stride 1): a k x k conv maps n to n - k + 1; a 2x2 non-overlapping pool halves it.',
          '(1) Correct: (p - s1 + 1) / 2. Swapped: (p - s2 + 1) / 2. Since s2 < s1, the swapped size is larger: INCREASE (by (s1 - s2) / 2).',
          '(2) Correct: ((p - s1 + 1)/2 - s2 + 1) / 2 = (p - s1 - 2 s2 + 3) / 4. Swapped: (p - s2 - 2 s1 + 3) / 4. Swapped minus correct = (s2 - s1) / 4 < 0: DECREASE. The larger kernel now acts on the smaller (already pooled) map, where each pixel of kernel reach costs twice as much input width.',
          '(3) Conv1 sees 3 input channels. Correct: f1 (3 s1^2 + 1). Swapped: f1 (3 s2^2 + 1). s2 < s1, so DECREASE.',
          '(4) Conv2 sees f1 input channels. Correct: f2 (f1 s2^2 + 1). Swapped: f2 (f1 s1^2 + 1). s1 > s2, so INCREASE.',
          '(5) Swapped minus correct = 3 f1 (s2^2 - s1^2) + f1 f2 (s1^2 - s2^2) = f1 (s1^2 - s2^2)(f2 - 3). The biases cancel. Since s1 > s2 and f2 > 10 > 3, this is positive: INCREASE. Intuition: the expensive large kernel moved to the layer with f1 > 10 input channels instead of 3.',
          'Answer table: (1) increase, (2) decrease, (3) decrease, (4) increase, (5) increase. The condition s1 f1 = s2 f2 is not needed for these signs, and the signs are the same whether or not biases are counted (the bias terms f1 and f2 do not change when only kernel sizes swap).',
        ],
      },
    ],
    examTips: ['Write each quantity as a formula for both configurations and subtract; the sign of the difference is the answer and earns the derivation marks.'],
  },
  {
    id: 'q6',
    number: 6,
    topic: 'ROC curve',
    weeks: 'W3',
    marks: 10,
    intro: 'Confusion matrices at three thresholds (rows: labelled positive / negative; columns: predicted positive / negative). t = 0.2: TP 2, FN 18, FP 13, TN 67. t = 0.5: TP 5, FN 15, FP 30, TN 50. t = 0.8: TP 8, FN 12, FP 37, TN 43. There are 20 positives and 80 negatives.',
    figure: { src: 'exam/q6_roc.png', caption: 'Red: the ROC points from the three matrices, all below the diagonal. Green: the same classifier with its decisions inverted.' },
    parts: [
      {
        label: '6a',
        marks: 5,
        prompt: 'Plot the ROC curve from the three confusion matrices.',
        answer: [
          'TPR = TP / (TP + FN) = TP / 20; FPR = FP / (FP + TN) = FP / 80.',
          't = 0.2: TPR = 2/20 = 0.10, FPR = 13/80 = 0.1625. t = 0.5: TPR = 5/20 = 0.25, FPR = 30/80 = 0.375. t = 0.8: TPR = 8/20 = 0.40, FPR = 37/80 = 0.4625.',
          'Plot FPR on the x-axis and TPR on the y-axis, add the end points (0, 0) and (1, 1), and join them: (0, 0), (0.1625, 0.10), (0.375, 0.25), (0.4625, 0.40), (1, 1). Draw the diagonal for reference.',
        ],
      },
      {
        label: '6b',
        marks: 5,
        prompt: 'What is the major problem with the ROC curve? Propose a way to fix this problem.',
        answer: [
          'Problem: every point lies below the diagonal (TPR < FPR at each threshold), so the classifier is worse than random guessing (AUC below 0.5). The thresholds also behave backwards: a higher threshold should predict fewer positives, but here it predicts more (15, 35, then 45 predicted positives), which suggests the scores are inverted, i.e. higher scores mean "more likely negative".',
          'Fix: invert the classifier, i.e. swap its positive and negative decisions (equivalently use 1 - score, or flip the comparison with the threshold). Each point (FPR, TPR) becomes (1 - FPR, 1 - TPR): (0.8375, 0.90), (0.625, 0.75), (0.5375, 0.60), all above the diagonal. This is the C to C\' reflection in the Week 3 ROC-space slide, and the new AUC equals 1 minus the old one.',
          'Also worth adding: with only 20 positives against 80 negatives, ROC can look optimistic for imbalanced data because FPR divides by the large number of negatives; a precision-recall curve (or average precision) is more informative in that case.',
        ],
      },
    ],
  },
  {
    id: 'q7',
    number: 7,
    topic: 'k-means by hand',
    weeks: 'W9',
    marks: 10,
    intro: 'k-means with Euclidean distance on 10 points, initial centres at A and K. Round to 3 decimal places.',
    figure: { src: 'exam/q7_points.png', caption: 'A(2, 8), B(5, 5), C(6, 4), D(4, 11), E(8, 2), F(6, 13), G(10, 4), H(8, 11), J(9, 10), K(12, 7). Coordinates read from the exam figure.' },
    parts: [
      {
        label: '7 iteration 1',
        marks: 4,
        prompt: 'Iteration 1: assignment step, then update step.',
        answer: [
          'Distances to A(2, 8) and K(12, 7): B 4.243 vs 7.280, C 5.657 vs 6.708, D 3.606 vs 8.944, E 8.485 vs 6.403, F 6.403 vs 8.485, G 8.944 vs 3.606, H 6.708 vs 5.657, J 7.280 vs 4.243.',
          'Assignment: C_A = {A, B, C, D, F}, C_K = {E, G, H, J, K}.',
          'Update: centre of C_A = ((2 + 5 + 6 + 4 + 6)/5, (8 + 5 + 4 + 11 + 13)/5) = (4.6, 8.2); centre of C_K = ((8 + 10 + 8 + 9 + 12)/5, (2 + 4 + 11 + 10 + 7)/5) = (9.4, 6.8).',
        ],
      },
      {
        label: '7 iteration 2',
        marks: 4,
        prompt: 'Iteration 2: assignment step, then update step.',
        answer: [
          'Distances to (4.6, 8.2) and (9.4, 6.8): A 2.608 vs 7.497, B 3.225 vs 4.754, C 4.427 vs 4.405, D 2.864 vs 6.841, E 7.071 vs 5.000, F 5.000 vs 7.071, G 6.841 vs 2.864, H 4.405 vs 4.427, J 4.754 vs 3.225, K 7.497 vs 2.608.',
          'Watch the close calls: C is 4.405 from the second centre and 4.427 from the first, so C moves to C_K; H is the mirror case and moves to C_A.',
          'Assignment: C_A = {A, B, D, F, H}, C_K = {C, E, G, J, K}.',
          'Update: centre of C_A = ((2 + 5 + 4 + 6 + 8)/5, (8 + 5 + 11 + 13 + 11)/5) = (5.0, 9.6); centre of C_K = ((6 + 8 + 10 + 9 + 12)/5, (4 + 2 + 4 + 10 + 7)/5) = (9.0, 5.4).',
        ],
      },
      {
        label: '7 converged?',
        marks: 2,
        prompt: 'Has the k-means algorithm converged?',
        answer: [
          'No. The assignments changed between iteration 1 and 2 (C and H swapped clusters) and the centres moved (from (4.6, 8.2) and (9.4, 6.8) to (5.0, 9.6) and (9.0, 5.4)). k-means has converged only when an assignment step leaves every point where it was, so the centres no longer move.',
          'For reference: it needs one more change (iteration 3 moves B to C_K and J to C_A, centres (5.8, 10.6) and (8.2, 4.4)) and is stable from iteration 4.',
        ],
      },
    ],
    examTips: ['Tabulate distances to both centres for every point; with near-ties like C and H, three decimal places decide the answer.'],
  },
]
