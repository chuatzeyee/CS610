export interface KahootQuestion {
  id: string
  set: string
  question: string
  options: readonly string[]
  answerIndex: number
  explanation: string
  ref?: string
}

export interface KahootSet {
  id: string
  title: string
  blurb: string
}

export const kahootSets: readonly KahootSet[] = [
  {
    id: "w1",
    title: "Week 1: ML basics & Bayes",
    blurb: "Quick-fire traps and mental maths on the ML landscape, Bayes theorem, MLE vs MAP, Gaussian classifiers, naive Bayes, Laplace smoothing and the Week 1 naive Bayes lab.",
  },
  {
    id: "w1a",
    title: "Week 1a: Probability, linear algebra & information",
    blurb: "Traps and quick calculations on conditional probability, projections, Mahalanobis distance, PCA, entropy, cross-entropy, KL divergence and mutual information.",
  },
  {
    id: "w2",
    title: "Week 2: Regression & regularisation",
    blurb: "Quick-fire checks on MSE/RMSE/R2, polynomial features, gradient descent, bias-variance and Ridge/Lasso, plus the regression lab.",
  },
  {
    id: "w3",
    title: "Week 3: Logistic regression & metrics",
    blurb: "Odds, sigmoid, decision boundary, softmax, confusion-matrix metrics, thresholds and ROC/AUC, plus the logistic lab.",
  },
  {
    id: 'instructor-dt',
    title: 'Instructor Kahoot: Decision Trees',
    blurb: 'The 5 decision-tree questions played in class, with the answers and worked entropy from the instructor note (Week 5 folder).',
  },
  {
    id: "w4",
    title: "Week 4: Trees & ensembles",
    blurb: "Gini, gain ratio, thresholds, pruning, grid/random search, CV splitters, OOB, random forest, AdaBoost, gradient boosting, stacking and feature engineering.",
  },
  {
    id: 'instructor',
    title: 'Instructor Kahoot: Ensembles & NN',
    blurb: 'The 9 questions played in class, with the answers and explanations from the instructor note (Week 6 folder).',
  },
  {
    id: "w5",
    title: "Week 5: Neural networks",
    blurb: "Activations, MLP parameter counts, output-layer gradients, gradient descent variants, dropout, early stopping, initialisation and vanishing/exploding gradients.",
  },
  {
    id: 'cnn',
    title: 'CNN Lecture',
    blurb: 'Convolution, filters, padding, stride, pooling, parameter counts and classic architectures from 06_cnn.pdf.',
  },
  {
    id: 'cnn-lab',
    title: 'CNN & Filter Labs',
    blurb: 'Quick-fire questions on the Week 6 notebooks: Keras MNIST models and the numpy image-filter lab.',
  },
  {
    id: "w7",
    title: "Week 7: Attention & Transformers",
    blurb: "Quick-fire checks on RNNs, LSTM gates, seq2seq, self-attention, masking, multi-head attention, BERT and ViT.",
  },
  {
    id: 'genai',
    title: 'Week 8: Generative AI',
    blurb: 'GANs, the LLM training pipeline (pre-training, instruction tuning, RLHF), diffusion models, Stable Diffusion and FID, from 08_genAI.pdf.',
  },
]

const instructorDt: KahootQuestion[] = [
  {
    id: 'kdt1',
    set: 'instructor-dt',
    question: 'Temperature is in the input table but absent from the decision tree. Is that an error?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'A tree need not use every feature: each node picks the split with the largest impurity reduction. Temperature may be redundant with another feature, beaten by better splits, cut off by max_depth / min_samples_leaf / pruning, or (in a random forest) never considered at some nodes.',
    ref: 'DT Kahoot note Q1',
  },
  {
    id: 'kdt2',
    set: 'instructor-dt',
    question: 'A feature was used near the root. Can it be used again farther down the tree?',
    options: ['Yes', 'No'],
    answerIndex: 0,
    explanation: 'Features can be reused, especially continuous ones with different thresholds. E.g. Age ≤ 30 → low risk; otherwise Age ≤ 60 → medium risk, else high risk.',
    ref: 'DT Kahoot note Q2',
  },
  {
    id: 'kdt3',
    set: 'instructor-dt',
    question: 'A split creates child nodes with the same class proportions as the parent. Does it reduce entropy?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'IG = H(parent) − Σ (n_k/n)·H(child_k). Parent 60+/40− has H(0.6) ≈ 0.971; children 30+/20− each also have H ≈ 0.971, weighted 0.5·0.971 + 0.5·0.971 = 0.971, so IG = 0.',
    ref: 'DT Kahoot note Q3',
  },
  {
    id: 'kdt4',
    set: 'instructor-dt',
    question: 'Can more splitting always make every training row correct?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'Not with conflicting rows: two rows with identical features but different labels always land in the same leaf, which can predict only one label.',
    ref: 'DT Kahoot note Q4',
  },
  {
    id: 'kdt5',
    set: 'instructor-dt',
    question: 'Does a node with 90+/10− have higher entropy than a node with 8+/2−?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'H(0.9) = −0.9log₂0.9 − 0.1log₂0.1 ≈ 0.469 and H(0.8) ≈ 0.722. The 8+/2− node is less pure, so it has the higher entropy; node size does not matter, only proportions.',
    ref: 'DT Kahoot note Q5',
  },
]

const instructor: KahootQuestion[] = [
  {
    id: 'ki1',
    set: 'instructor',
    question: 'If independent voters are each correct only 45% of the time, does a larger majority vote necessarily help?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'Majority voting only helps when each voter beats random guessing. With p = 0.45 < 0.5 each voter is more likely wrong than right, so adding voters makes the majority more confidently wrong. p > 0.5: more voters help; p = 0.5: no improvement; p < 0.5: worse.',
    ref: 'Kahoot note Q1',
  },
  {
    id: 'ki2',
    set: 'instructor',
    question: 'Which statement best describes bagging?',
    options: [
      'Models are trained sequentially to correct previous errors',
      'Models are trained independently on different sampled datasets',
      'Only the best model is kept',
      'Each model uses the full dataset without sampling',
    ],
    answerIndex: 1,
    explanation: 'Bagging draws bootstrap datasets D1..DM from D with replacement and trains a separate model on each, independently and in parallel. Predictions are combined by majority vote (classification) or averaging (regression). Sequential error-correction is boosting.',
    ref: 'Kahoot note Q2',
  },
  {
    id: 'ki3',
    set: 'instructor',
    question: 'Can two bootstrap samples share observations?',
    options: ['Yes', 'No'],
    answerIndex: 0,
    explanation: 'Bootstrap samples are drawn with replacement, so they need not be disjoint. From D = {A,B,C,D,E}, D1 = {A,A,C,D,E} and D2 = {A,B,B,D,E} share A, D and E.',
    ref: 'Kahoot note Q3',
  },
  {
    id: 'ki4',
    set: 'instructor',
    question: 'In boosting, are models usually trained independently?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'Boosting trains sequentially (f1 → f2 → f3 …): each learner depends on the previous ones and focuses on the current ensemble\'s errors, e.g. AdaBoost up-weights misclassified examples. Bagging is the one trained independently.',
    ref: 'Kahoot note Q4',
  },
  {
    id: 'ki5',
    set: 'instructor',
    question: 'Can decision trees be used as base learners in both bagging and boosting?',
    options: ['Yes', 'No'],
    answerIndex: 0,
    explanation: 'Trees are the most common base learner in both: bagging trains many trees independently on bootstrap samples (e.g. Random Forest); boosting trains trees sequentially so later trees improve the current ensemble.',
    ref: 'Kahoot note Q5',
  },
  {
    id: 'ki6',
    set: 'instructor',
    question: 'Which quantities change during ordinary neural-network training?',
    options: ['The weights', 'The inputs', 'The activation functions'],
    answerIndex: 0,
    explanation: 'Training learns the trainable parameters (weights w and bias b) via updates like w ← w − η ∂L/∂w. Inputs are the fixed training data, and activations (ReLU, sigmoid) are fixed architecture choices.',
    ref: 'Kahoot note Q6',
  },
  {
    id: 'ki7',
    set: 'instructor',
    question: 'If the true binary label is 1, which prediction gives the smallest cross-entropy?',
    options: ['0.9', '0.6', '0.05'],
    answerIndex: 0,
    explanation: 'With y = 1, L = −log(p). −log(0.9) ≈ 0.105 < −log(0.6) ≈ 0.511 < −log(0.05) ≈ 2.996, so the prediction closest to 1 has the smallest loss.',
    ref: 'Kahoot note Q7',
  },
  {
    id: 'ki8',
    set: 'instructor',
    question: 'With 100 examples and batches of 20, how many parameter updates happen in one epoch?',
    options: ['1', '5', '20', '100'],
    answerIndex: 1,
    explanation: 'One epoch = one full pass over the data = 100 / 20 = 5 batches, and one update per batch gives 5 updates. Batch = subset used for one update; iteration = one update; epoch = one full pass.',
    ref: 'Kahoot note Q8',
  },
  {
    id: 'ki9',
    set: 'instructor',
    question: 'If you add 5 to every raw score (logit) before softmax, do the softmax probabilities change?',
    options: ['Yes', 'No'],
    answerIndex: 1,
    explanation: 'e^(z_k + c) = e^(z_k)·e^c, and the common factor e^c cancels between numerator and denominator. Softmax depends only on differences between logits: [1,2,3] and [6,7,8] give identical probabilities.',
    ref: 'Kahoot note Q9',
  },
]

const week6: KahootQuestion[] = [
  {
    "id": "k-cnn-1",
    "set": "cnn",
    "question": "7x7 image, 3x3 kernel, stride 1, no padding. Output size?",
    "options": [
      "7x7",
      "5x5",
      "4x4",
      "3x3"
    ],
    "answerIndex": 1,
    "explanation": "(7 - 3)/1 + 1 = 5, so 5 x 5.",
    "ref": "06_cnn.pdf p. 23"
  },
  {
    "id": "k-cnn-2",
    "set": "cnn",
    "question": "7x7 image, 3x3 kernel, stride 2, no padding. Output size?",
    "options": [
      "3x3",
      "5x5",
      "2x2",
      "4x4"
    ],
    "answerIndex": 0,
    "explanation": "(7 - 3)/2 + 1 = 3, so 3 x 3.",
    "ref": "06_cnn.pdf p. 25"
  },
  {
    "id": "k-cnn-3",
    "set": "cnn",
    "question": "7x7 image, 3x3 kernel, stride 1, zero padding 1. Output size?",
    "options": [
      "5x5",
      "9x9",
      "8x8",
      "7x7"
    ],
    "answerIndex": 3,
    "explanation": "(7 + 2 - 3)/1 + 1 = 7; padding 1 keeps the size the same.",
    "ref": "06_cnn.pdf p. 26"
  },
  {
    "id": "k-cnn-4",
    "set": "cnn",
    "question": "32x32x3 image, one 5x5x3 filter, stride 1, no padding. Activation map?",
    "options": [
      "28x28x3",
      "32x32x1",
      "28x28x1",
      "27x27x1"
    ],
    "answerIndex": 2,
    "explanation": "32 - 5 + 1 = 28, and one filter spanning all 3 channels gives depth 1.",
    "ref": "06_cnn.pdf p. 30"
  },
  {
    "id": "k-cnn-5",
    "set": "cnn",
    "question": "Add a second 5x5x3 filter on the 32x32x3 image. Output depth?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "Each filter gives one activation map, so 2 filters give depth 2 (28x28x2).",
    "ref": "06_cnn.pdf p. 31"
  },
  {
    "id": "k-cnn-6",
    "set": "cnn",
    "question": "How many weights are in a 5x5x3 filter (no bias)?",
    "options": [
      "25",
      "15",
      "76",
      "75"
    ],
    "answerIndex": 3,
    "explanation": "5 x 5 x 3 = 75; adding the bias would make 76.",
    "ref": "06_cnn.pdf p. 29"
  },
  {
    "id": "k-cnn-7",
    "set": "cnn",
    "question": "Box filter (1/9)*ones(3,3) on values 10,20,...,90. Output?",
    "options": [
      "50",
      "450",
      "45",
      "90"
    ],
    "answerIndex": 0,
    "explanation": "Sum is 450, divided by 9 gives the mean 50.",
    "ref": "06_cnn.pdf p. 10"
  },
  {
    "id": "k-cnn-8",
    "set": "cnn",
    "question": "Averaging/smoothing filters are also known as...",
    "options": [
      "High-pass filters",
      "Lowpass filters",
      "Laplacian filters",
      "Stride filters"
    ],
    "answerIndex": 1,
    "explanation": "Smoothing linear filters are called averaging or lowpass filters.",
    "ref": "06_cnn.pdf p. 10"
  },
  {
    "id": "k-cnn-9",
    "set": "cnn",
    "question": "Sharpening is analogous to spatial differentiation.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Averaging is like integration; sharpening is like spatial differentiation.",
    "ref": "06_cnn.pdf p. 12"
  },
  {
    "id": "k-cnn-10",
    "set": "cnn",
    "question": "A larger box filter (e.g. 35x35) gives LESS blur than a 3x3 one.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.11 shows blur increasing with box size; 35x35 almost smears out the text.",
    "ref": "06_cnn.pdf p. 11"
  },
  {
    "id": "k-cnn-11",
    "set": "cnn",
    "question": "What do the Laplacian kernel's coefficients sum to?",
    "options": [
      "1",
      "-4",
      "0",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "4 x 1 + (-4) = 0, so flat regions give zero response.",
    "ref": "06_cnn.pdf p. 13"
  },
  {
    "id": "k-cnn-12",
    "set": "cnn",
    "question": "Kernel [[0,-1,0],[-1,5,-1],[0,-1,0]]: coefficients sum to?",
    "options": [
      "0",
      "5",
      "-1",
      "1"
    ],
    "answerIndex": 3,
    "explanation": "5 - 4 = 1, so it keeps brightness and outputs a sharpened image.",
    "ref": "06_cnn.pdf p. 15"
  },
  {
    "id": "k-cnn-13",
    "set": "cnn",
    "question": "1D input [0,1,2,-1,1,-3,0], kernel (1,0,-1), stride 1: first output?",
    "options": [
      "-2",
      "2",
      "0",
      "1"
    ],
    "answerIndex": 0,
    "explanation": "0x1 + 1x0 + 2x(-1) = -2.",
    "ref": "06_cnn.pdf p. 17"
  },
  {
    "id": "k-cnn-14",
    "set": "cnn",
    "question": "Same 1D example with stride 2: how many outputs?",
    "options": [
      "5",
      "3",
      "4",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "(7 - 3)/2 + 1 = 3 outputs: [-2, 1, 1].",
    "ref": "06_cnn.pdf p. 18"
  },
  {
    "id": "k-cnn-15",
    "set": "cnn",
    "question": "Slide p.21 conv: 105x5 - 102 - 103 equals?",
    "options": [
      "525",
      "300",
      "320",
      "310"
    ],
    "answerIndex": 2,
    "explanation": "525 - 205 = 320, the first output cell.",
    "ref": "06_cnn.pdf p. 21"
  },
  {
    "id": "k-cnn-16",
    "set": "cnn",
    "question": "A grayscale image has how many channels?",
    "options": [
      "3",
      "0",
      "4",
      "1"
    ],
    "answerIndex": 3,
    "explanation": "Grayscale has 1 channel; a standard RGB camera image has 3.",
    "ref": "06_cnn.pdf p. 27"
  },
  {
    "id": "k-cnn-17",
    "set": "cnn",
    "question": "Number of filters is a hyperparameter of a convolution layer.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Kernel size, number of filters, padding and stride are the typical hyperparameters.",
    "ref": "06_cnn.pdf p. 28"
  },
  {
    "id": "k-cnn-18",
    "set": "cnn",
    "question": "Another name for the output of one convolution operation?",
    "options": [
      "Receptive field",
      "Activation map",
      "Kernel",
      "Padding"
    ],
    "answerIndex": 1,
    "explanation": "The result is called a feature map or activation map.",
    "ref": "06_cnn.pdf p. 30"
  },
  {
    "id": "k-cnn-19",
    "set": "cnn",
    "question": "Output size: 256×256×1 image, 10 filters 3×3, stride 3, pad 1?",
    "options": [
      "86×86×10",
      "85×85×10",
      "254×254×10",
      "86×86×1"
    ],
    "answerIndex": 0,
    "explanation": "(256 − 3 + 2)/3 + 1 = 86; depth = 10 filters.",
    "ref": "06_cnn.pdf slide 34"
  },
  {
    "id": "k-cnn-20",
    "set": "cnn",
    "question": "Case Two (4096×1024×3, 15×5 kernel, stride 5×3, pad 7×2): output height?",
    "options": [
      "819",
      "4096",
      "820",
      "816"
    ],
    "answerIndex": 2,
    "explanation": "(4096 − 15 + 14)/5 + 1 = 4095/5 + 1 = 820.",
    "ref": "06_cnn.pdf slide 34"
  },
  {
    "id": "k-cnn-21",
    "set": "cnn",
    "question": "Case Two output depth with 20 filters on a 3-channel image?",
    "options": [
      "3",
      "60",
      "23",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "Output depth equals the number of filters; each filter collapses all 3 input channels into one map.",
    "ref": "06_cnn.pdf slide 34"
  },
  {
    "id": "k-cnn-22",
    "set": "cnn",
    "question": "2×2 max pool of the quadrant [2,3;6,8] gives?",
    "options": [
      "4.75",
      "8",
      "19",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "Max pooling keeps the largest value, 8. 4.75 would be average pooling.",
    "ref": "06_cnn.pdf slide 35"
  },
  {
    "id": "k-cnn-23",
    "set": "cnn",
    "question": "2×2 average pool of the quadrant [1,0;4,6] gives?",
    "options": [
      "2.75",
      "6",
      "11",
      "3"
    ],
    "answerIndex": 0,
    "explanation": "(1 + 0 + 4 + 6)/4 = 11/4 = 2.75.",
    "ref": "06_cnn.pdf slide 35"
  },
  {
    "id": "k-cnn-24",
    "set": "cnn",
    "question": "Max-pooling has learnable weights that are updated by backprop.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Pooling is a fixed summary statistic (max) with no weights; it only down-samples.",
    "ref": "06_cnn.pdf slide 35-36"
  },
  {
    "id": "k-cnn-25",
    "set": "cnn",
    "question": "Max-pooling partitions the input into overlapping or non-overlapping rectangles?",
    "options": [
      "Overlapping",
      "Non-overlapping"
    ],
    "answerIndex": 1,
    "explanation": "The slide underlines non-overlapping: each sub-region outputs its maximum.",
    "ref": "06_cnn.pdf slide 36"
  },
  {
    "id": "k-cnn-26",
    "set": "cnn",
    "question": "3×24×24 feature maps after 2×2 max pooling become?",
    "options": [
      "1×12×12",
      "3×22×22",
      "3×12×12",
      "6×12×12"
    ],
    "answerIndex": 2,
    "explanation": "Pooling halves each map's width and height and keeps the 3 maps.",
    "ref": "06_cnn.pdf slide 39"
  },
  {
    "id": "k-cnn-27",
    "set": "cnn",
    "question": "In LeNet, the upper fully connected layers act like a hidden layer plus...?",
    "options": [
      "k-means",
      "Logistic regression",
      "A decision tree",
      "PCA"
    ],
    "answerIndex": 1,
    "explanation": "Upper layers correspond to a traditional neural network: hidden layer + logistic regression.",
    "ref": "06_cnn.pdf slide 42"
  },
  {
    "id": "k-cnn-28",
    "set": "cnn",
    "question": "Which CNN property means the same filter weights are reused at every location?",
    "options": [
      "Parameter sharing",
      "Dropout",
      "Padding",
      "Batch normalization"
    ],
    "answerIndex": 0,
    "explanation": "Parameter sharing applies the same weights across all spatial positions, cutting parameters and overfitting.",
    "ref": "06_cnn.pdf slide 47"
  },
  {
    "id": "k-cnn-29",
    "set": "cnn",
    "question": "Which CNN was the first to popularise CNNs in computer vision (2012)?",
    "options": [
      "LeNet",
      "VGGNet",
      "ResNet",
      "AlexNet"
    ],
    "answerIndex": 3,
    "explanation": "AlexNet by Krizhevsky, Sutskever and Hinton (2012) popularised CNNs in vision.",
    "ref": "06_cnn.pdf slide 53"
  },
  {
    "id": "k-cnn-30",
    "set": "cnn",
    "question": "VGGNet's key lesson: what is critical for good performance?",
    "options": [
      "Network depth",
      "Large 11×11 filters",
      "Skip connections",
      "Fewer parameters"
    ],
    "answerIndex": 0,
    "explanation": "VGGNet showed network depth is a critical component of performance.",
    "ref": "06_cnn.pdf slide 54"
  },
  {
    "id": "k-cnn-31",
    "set": "cnn",
    "question": "Parameters: GoogLeNet vs AlexNet?",
    "options": [
      "60M vs 4M",
      "4M vs 60M",
      "4M vs 138M",
      "25M vs 60M"
    ],
    "answerIndex": 1,
    "explanation": "The Inception module cut parameters to about 4M versus AlexNet's 60M.",
    "ref": "06_cnn.pdf slide 55"
  },
  {
    "id": "k-cnn-32",
    "set": "cnn",
    "question": "Direct 5×5×48 conv on 14×14×480 needs about how many multiplications?",
    "options": [
      "5.3M",
      "1.5M",
      "112.9M",
      "3.8M"
    ],
    "answerIndex": 2,
    "explanation": "14×14×48 × 5×5×480 = 112,896,000. With a 1×1 bottleneck it drops to about 5.3M.",
    "ref": "06_cnn.pdf slide 56"
  },
  {
    "id": "k-cnn-33",
    "set": "cnn",
    "question": "Global average pooling turns 7×7×1024 into?",
    "options": [
      "7×7×1",
      "1×1×49",
      "1×1×1024",
      "49×1024"
    ],
    "answerIndex": 2,
    "explanation": "Each 7×7 map is averaged to one value, giving 1×1×1024 with no weights.",
    "ref": "06_cnn.pdf slide 57"
  },
  {
    "id": "k-cnn-34",
    "set": "cnn",
    "question": "ResNet blocks output F(x) + x via an identity skip connection.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Layers learn the residual F(x) and the shortcut adds the input x back.",
    "ref": "06_cnn.pdf slide 58"
  },
  {
    "id": "k-cnn-35",
    "set": "cnn",
    "question": "ImageNet-2012 error rate of ResNet-152 (2015) in the lecture chart?",
    "options": [
      "5%",
      "6.7%",
      "16.4%",
      "3.57%"
    ],
    "answerIndex": 3,
    "explanation": "ResNet-152 reached 3.57%, below the 5% human error; 6.7% was GoogLeNet and 16.4% AlexNet.",
    "ref": "06_cnn.pdf slide 59"
  },
  {
    "id": "k-cnn-36",
    "set": "cnn",
    "question": "In [[CONV->RELU]*N -> POOL?]*M -> [FC->RELU]*K -> FC, K is usually...?",
    "options": [
      "K < 3",
      "K > 5",
      "K = 0 always",
      "K ≥ 10"
    ],
    "answerIndex": 0,
    "explanation": "K ≥ 0 and usually K < 3; similarly N is usually ≤ 3.",
    "ref": "06_cnn.pdf slide 63"
  },
  {
    "id": "k-cnn-lab-1",
    "set": "cnn-lab",
    "question": "How many parameters does Dense(10) on 784 inputs (Model 1) have?",
    "options": [
      "784",
      "7,840",
      "7,850",
      "8,634"
    ],
    "answerIndex": 2,
    "explanation": "784 x 10 weights + 10 biases = 7,850, matching the summary. 7,840 forgets the biases.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-2",
    "set": "cnn-lab",
    "question": "Conv2D(32, 5x5), no padding, on a 28x28x1 image. Output shape?",
    "options": [
      "28 x 28 x 32",
      "24 x 24 x 32",
      "26 x 26 x 32",
      "24 x 24 x 1"
    ],
    "answerIndex": 1,
    "explanation": "Valid convolution gives 28 - 5 + 1 = 24 per side, with one channel per filter: 24 x 24 x 32.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-3",
    "set": "cnn-lab",
    "question": "Which MNIST model scored the highest test accuracy?",
    "options": [
      "2 x 512 MLP",
      "Softmax only",
      "Conv 3x3 x2 + pool",
      "(Conv 5x5 + pool) x 2"
    ],
    "answerIndex": 3,
    "explanation": "Model 4, (conv + maxpool) x 2, reached 0.9787, ahead of Model 5 (0.9722) and the 2 x 512 MLP (0.9473).",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-4",
    "set": "cnn-lab",
    "question": "Model 5 has ~6.5x more parameters than Model 4, so it scored higher.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Model 5 (1,199,882 params) scored 0.9722, below Model 4 (184,586 params) at 0.9787.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-5",
    "set": "cnn-lab",
    "question": "Params of Conv2D(64, 3x3) applied to a 32-channel input?",
    "options": [
      "18,496",
      "18,432",
      "640",
      "576"
    ],
    "answerIndex": 0,
    "explanation": "3 x 3 x 32 x 64 + 64 biases = 18,496, matching Model 5's summary. 18,432 omits the biases.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-6",
    "set": "cnn-lab",
    "question": "In Model 4, how many values come out of Flatten (input is 4x4x64)?",
    "options": [
      "9,216",
      "256",
      "1,024",
      "4,096"
    ],
    "answerIndex": 2,
    "explanation": "4 x 4 x 64 = 1,024. Model 5 pools only once, so its Flatten outputs 12 x 12 x 64 = 9,216.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-7",
    "set": "cnn-lab",
    "question": "Dropout(0.2) layers add trainable parameters to the model.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Dropout shows 0 parameters in every summary; it only randomly zeroes 20% of activations during training.",
    "ref": "06_cnn.ipynb"
  },
  {
    "id": "k-cnn-lab-8",
    "set": "cnn-lab",
    "question": "Weights of the edge filter [[0,-1,0],[-1,4,-1],[0,-1,0]] sum to?",
    "options": [
      "4",
      "1",
      "-4",
      "0"
    ],
    "answerIndex": 3,
    "explanation": "4 - 1 - 1 - 1 - 1 = 0, so flat regions map to 0 (black) and only intensity changes light up.",
    "ref": "06_filter.ipynb"
  },
  {
    "id": "k-cnn-lab-9",
    "set": "cnn-lab",
    "question": "A 10x10 blur slides (no padding) over a 512x768 image. Output size?",
    "options": [
      "503 x 759",
      "502 x 758",
      "512 x 768",
      "51 x 76"
    ],
    "answerIndex": 0,
    "explanation": "n - k + 1: 512 - 10 + 1 = 503 and 768 - 10 + 1 = 759.",
    "ref": "06_filter.ipynb"
  },
  {
    "id": "k-cnn-lab-10",
    "set": "cnn-lab",
    "question": "5x5x3 patch tensordot a 5x5x4 filter bank: values per pixel?",
    "options": [
      "4",
      "12",
      "3",
      "75"
    ],
    "answerIndex": 1,
    "explanation": "Summing over the 5 x 5 spatial axes leaves 3 channels x 4 filters = 12 values, stored in the 12-channel output.",
    "ref": "06_filter.ipynb"
  }
]

const week8: KahootQuestion[] = [
  {
    "id": "k-genai-1",
    "set": "genai",
    "question": "In a GAN, which network is trained to fool the other?",
    "options": [
      "Discriminator",
      "Generator",
      "Encoder",
      "Classifier head"
    ],
    "answerIndex": 1,
    "explanation": "The generator creates fake samples and is trained to fool the discriminator (slide p.7).",
    "ref": "08_genAI.pdf slide 7"
  },
  {
    "id": "k-genai-2",
    "set": "genai",
    "question": "True or False: the GAN discriminator is trained as a real-vs-fake binary classifier with supervised learning.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.7: the discriminator uses traditional supervised learning to split inputs into two classes, real or fake.",
    "ref": "08_genAI.pdf slide 7"
  },
  {
    "id": "k-genai-3",
    "set": "genai",
    "question": "What does the GAN generator want D(G(z)) to be close to?",
    "options": [
      "0",
      "0.5",
      "1",
      "-1"
    ],
    "answerIndex": 2,
    "explanation": "G tries to make D(G(z)) near 1 so its fakes are judged real, while D tries to push it to 0 (slide p.10).",
    "ref": "08_genAI.pdf slide 10"
  },
  {
    "id": "k-genai-4",
    "set": "genai",
    "question": "GAN step 1 fixes which network and updates the other?",
    "options": [
      "Fix D, update G",
      "Fix G, update D",
      "Fix both",
      "Update both together"
    ],
    "answerIndex": 1,
    "explanation": "Step 1: fix G and take a gradient step to maximize the objective over D. Step 2 then fixes D and updates G (slide p.11).",
    "ref": "08_genAI.pdf slide 11"
  },
  {
    "id": "k-genai-5",
    "set": "genai",
    "question": "D outputs 0.5 for both a real and a fake image. ln D(x) + ln(1 - D(G(z))) = ?",
    "options": [
      "0",
      "-0.693",
      "-1.386",
      "-2.0"
    ],
    "answerIndex": 2,
    "explanation": "ln 0.5 + ln 0.5 = -0.693 × 2 = -1.386.",
    "ref": "08_genAI.pdf slide 10"
  },
  {
    "id": "k-genai-6",
    "set": "genai",
    "question": "Turning zebras into horses without paired photos is done by which model?",
    "options": [
      "StackGAN",
      "GPT-3",
      "CycleGAN",
      "Flan-PaLM"
    ],
    "answerIndex": 2,
    "explanation": "CycleGAN performs unpaired image-to-image translation (zebra/horse, summer/winter, Monet/Van Gogh styles) (slides p.12-13).",
    "ref": "08_genAI.pdf slide 12"
  },
  {
    "id": "k-genai-7",
    "set": "genai",
    "question": "Pre-training an LLM on web text with next-word prediction is which kind of learning?",
    "options": [
      "Supervised",
      "Self-supervised",
      "Reinforcement",
      "Unsupervised clustering"
    ],
    "answerIndex": 1,
    "explanation": "Labels (next words) come from the text itself with minimal manual effort, so it is self-supervised (slide p.20).",
    "ref": "08_genAI.pdf slide 20"
  },
  {
    "id": "k-genai-8",
    "set": "genai",
    "question": "How many next-word pairs come from the 5-word text 'a transformer is a deep'?",
    "options": [
      "5",
      "4",
      "10",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "N words give N - 1 pairs: 'a' to 'transformer', ..., 'a transformer is a' to 'deep' (slide p.20).",
    "ref": "08_genAI.pdf slide 20"
  },
  {
    "id": "k-genai-9",
    "set": "genai",
    "question": "How many parameters does GPT-3 (2020) have?",
    "options": [
      "117 million",
      "1542 million",
      "175 billion",
      "540 billion"
    ],
    "answerIndex": 2,
    "explanation": "GPT-3 has 175B parameters trained on 580GB (300B tokens); 117M is GPT-1 and 1542M is GPT-2 (slide p.21).",
    "ref": "08_genAI.pdf slide 21"
  },
  {
    "id": "k-genai-10",
    "set": "genai",
    "question": "True or False: making a pre-trained LLM bigger fixes its failure to follow instructions.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "PaLM 540B still just generates more questions; the fix is instruction fine-tuning, not size (slides p.24-25).",
    "ref": "08_genAI.pdf slide 24"
  },
  {
    "id": "k-genai-11",
    "set": "genai",
    "question": "sqrt(x) = cube root of y, x = 4. What is y squared (Flan-PaLM's answer)?",
    "options": [
      "16",
      "8",
      "64",
      "256"
    ],
    "answerIndex": 2,
    "explanation": "sqrt 4 = 2, so y = 2³ = 8 and y² = 64; 8 is y itself (slide p.30).",
    "ref": "08_genAI.pdf slide 30"
  },
  {
    "id": "k-genai-12",
    "set": "genai",
    "question": "Key to successful instruction fine-tuning is initializing from what?",
    "options": [
      "Random weights",
      "Stage 1 pre-trained parameters",
      "A GAN generator",
      "RLHF reward model"
    ],
    "answerIndex": 1,
    "explanation": "Stage 1 parameters are the initialization, so fine-tuned weights stay close and keep world knowledge (slides p.29, p.31).",
    "ref": "08_genAI.pdf slide 29"
  },
  {
    "id": "k-genai-13",
    "set": "genai",
    "question": "In RLHF, the model only cares about the final response, not each intermediate token prediction.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Slide p.35 contrasts this with instruction fine-tuning, which assumes correct tokens imply a correct sentence.",
    "ref": "08_genAI.pdf p. 35"
  },
  {
    "id": "k-genai-14",
    "set": "genai",
    "question": "What does a reward model output for a (question, answer) pair?",
    "options": [
      "A next token",
      "A single scalar score",
      "A ranked list",
      "An image"
    ],
    "answerIndex": 1,
    "explanation": "The reward model maps input text to a scalar reward that mimics human preference.",
    "ref": "08_genAI.pdf p. 43"
  },
  {
    "id": "k-genai-15",
    "set": "genai",
    "question": "Reward model scores answers 10, 3 and 5. Which answer is returned?",
    "options": [
      "The one scoring 3",
      "The one scoring 5",
      "The one scoring 10",
      "All three"
    ],
    "answerIndex": 2,
    "explanation": "Only the answer with the highest score (answer1, score 10) is returned.",
    "ref": "08_genAI.pdf p. 38"
  },
  {
    "id": "k-genai-16",
    "set": "genai",
    "question": "A labeler ranks 4 outputs. How many pairwise comparisons is that?",
    "options": [
      "3",
      "4",
      "6",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "C(4,2) = 4 × 3 / 2 = 6 pairs, the normaliser in the reward model loss.",
    "ref": "08_genAI.pdf p. 37"
  },
  {
    "id": "k-genai-17",
    "set": "genai",
    "question": "Which RL algorithm does ChatGPT step 3 use to update the policy?",
    "options": [
      "Q-learning",
      "PPO",
      "REINFORCE only",
      "Gradient boosting"
    ],
    "answerIndex": 1,
    "explanation": "Step 3 optimises the policy against the reward model with Proximal Policy Optimization.",
    "ref": "08_genAI.pdf p. 41"
  },
  {
    "id": "k-genai-18",
    "set": "genai",
    "question": "In RLHF's RL formulation, the policy is...",
    "options": [
      "The reward model",
      "The human labeler",
      "The KL penalty",
      "The language model"
    ],
    "answerIndex": 3,
    "explanation": "Policy = LM, action = tokens, state = input tokens, reward = RM plus prediction shift penalty.",
    "ref": "08_genAI.pdf p. 44"
  },
  {
    "id": "k-genai-19",
    "set": "genai",
    "question": "Rewards 1, 2, 3 with γ = 0.5. Total discounted reward R(τ)?",
    "options": [
      "6",
      "2.75",
      "3.5",
      "1.75"
    ],
    "answerIndex": 1,
    "explanation": "1 + 0.5 × 2 + 0.25 × 3 = 2.75.",
    "ref": "08_genAI.pdf p. 45"
  },
  {
    "id": "k-genai-20",
    "set": "genai",
    "question": "Learning a game by watching others play is called...",
    "options": [
      "On-policy learning",
      "Off-policy learning",
      "Self-supervised learning",
      "Distillation"
    ],
    "answerIndex": 1,
    "explanation": "Off-policy = learn from others' play; on-policy = learn by playing yourself.",
    "ref": "08_genAI.pdf p. 46"
  },
  {
    "id": "k-genai-21",
    "set": "genai",
    "question": "In distillation, the student model is larger than the teacher.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "The student is smaller, with fewer parameters, lower memory and faster inference.",
    "ref": "08_genAI.pdf p. 49"
  },
  {
    "id": "k-genai-22",
    "set": "genai",
    "question": "In MoE, which component picks the experts to activate?",
    "options": [
      "Gating network / router",
      "RMSNorm",
      "Output head",
      "KV cache"
    ],
    "answerIndex": 0,
    "explanation": "A gating network selects a small relevant subset of experts; only they process the input.",
    "ref": "08_genAI.pdf p. 51"
  },
  {
    "id": "k-genai-23",
    "set": "genai",
    "question": "Pixel-by-pixel generation of a 256 × 256 image takes how many steps?",
    "options": [
      "512",
      "65,536",
      "1,000",
      "256"
    ],
    "answerIndex": 1,
    "explanation": "256 × 256 = 65,536 pixels, one sequential step each, which is why it is slow.",
    "ref": "08_genAI.pdf p. 56"
  },
  {
    "id": "k-genai-24",
    "set": "genai",
    "question": "A diffusion noise predictor is trained to predict the clean image directly.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "It predicts the added noise (ground truth from the forward process); that noise is subtracted from the input.",
    "ref": "08_genAI.pdf p. 65"
  },
  {
    "id": "k-genai-25",
    "set": "genai",
    "question": "In DDPM training, the timestep t is drawn from which distribution?",
    "options": [
      "N(0, I)",
      "Always t = T",
      "Uniform({1, ..., T})",
      "Bernoulli(0.5)"
    ],
    "answerIndex": 2,
    "explanation": "Algorithm 1 line 3 samples t ~ Uniform({1, ..., T}) so the model learns all noise levels (slide p.67).",
    "ref": "08_genAI.pdf p. 67"
  },
  {
    "id": "k-genai-26",
    "set": "genai",
    "question": "If ᾱ_t = 0.36, what weight multiplies x₀ in the noisy image?",
    "options": [
      "0.36",
      "0.64",
      "0.8",
      "0.6"
    ],
    "answerIndex": 3,
    "explanation": "The weight is √ᾱ_t = √0.36 = 0.6; the noise weight is √0.64 = 0.8 (slide p.68).",
    "ref": "08_genAI.pdf p. 68"
  },
  {
    "id": "k-genai-27",
    "set": "genai",
    "question": "True or False: ᾱ₁, ᾱ₂, ..., ᾱ_T get larger as t increases.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "The slide marks the sequence as getting smaller, so later steps keep less of the clean image (slide p.68).",
    "ref": "08_genAI.pdf p. 68"
  },
  {
    "id": "k-genai-28",
    "set": "genai",
    "question": "In DDPM sampling, at which step is z set to 0 (no noise added)?",
    "options": [
      "t = 1",
      "t = T",
      "Every even step",
      "Never"
    ],
    "answerIndex": 0,
    "explanation": "Algorithm 2 draws z ~ N(0, I) only if t > 1; at t = 1, z = 0 so x₀ is returned clean (slide p.67).",
    "ref": "08_genAI.pdf p. 67"
  },
  {
    "id": "k-genai-29",
    "set": "genai",
    "question": "Diffusion sampling without adding noise at each step gives...?",
    "options": [
      "Sharper images",
      "Faster training",
      "Exactly the training images",
      "Blurry, similar blobs"
    ],
    "answerIndex": 3,
    "explanation": "The 'Without Noise' grid on slide p.74 shows blurry blobs; sampling is needed for detail and diversity.",
    "ref": "08_genAI.pdf p. 74"
  },
  {
    "id": "k-genai-30",
    "set": "genai",
    "question": "Beam search with b = 32 on the unicorn prompt mainly suffered from...?",
    "options": [
      "Incoherent nonsense",
      "Repetitive loops",
      "Too many END tokens",
      "Grammar errors only"
    ],
    "answerIndex": 1,
    "explanation": "It repeated 'Universidad Nacional Autónoma de México'; incoherence was the problem of pure sampling (slide p.73).",
    "ref": "08_genAI.pdf p. 73"
  },
  {
    "id": "k-genai-31",
    "set": "genai",
    "question": "True or False: FID, lower is better.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "FID is the Fréchet distance between Gaussians of real and generated image features; smaller means closer to real (slide p.82).",
    "ref": "08_genAI.pdf p. 82"
  },
  {
    "id": "k-genai-32",
    "set": "genai",
    "question": "1-D FID: real N(0, var 1), generated N(2, var 4). d_F² = ?",
    "options": [
      "3",
      "4",
      "5",
      "7"
    ],
    "answerIndex": 2,
    "explanation": "(0 − 2)² + (1 + 4 − 2√4) = 4 + 1 = 5 (formula on slide p.81).",
    "ref": "08_genAI.pdf p. 81"
  },
  {
    "id": "k-genai-33",
    "set": "genai",
    "question": "How many image-text pairs was CLIP trained on?",
    "options": [
      "1 million",
      "400 million",
      "14 million",
      "5 billion"
    ],
    "answerIndex": 1,
    "explanation": "Slide p.83 states CLIP was trained using 400 million image-text pairs; 1 M is the ImageNet figure from p.75.",
    "ref": "08_genAI.pdf p. 83"
  },
  {
    "id": "k-genai-34",
    "set": "genai",
    "question": "Saharia et al.: scaling which part improved FID vs CLIP score most?",
    "options": [
      "U-Net size",
      "Batch size",
      "Decoder size",
      "Text encoder size"
    ],
    "answerIndex": 3,
    "explanation": "T5-Small to T5-XXL clearly improves the curve, while 300M to 2B U-Nets nearly overlap (slide p.84).",
    "ref": "08_genAI.pdf p. 84"
  },
  {
    "id": "k-genai-35",
    "set": "genai",
    "question": "Auto-encoder: 512×512×3 image to 64×64×4 latent. Compression factor?",
    "options": [
      "48",
      "16",
      "64",
      "192"
    ],
    "answerIndex": 0,
    "explanation": "786,432 / 16,384 = 48; 64 counts only the 8 × 8 spatial shrink and ignores channels 3 to 4 (h × w × c, slide p.91).",
    "ref": "08_genAI.pdf p. 91"
  },
  {
    "id": "k-genai-36",
    "set": "genai",
    "question": "In LDM cross-attention, K and V come from...?",
    "options": [
      "The noisy latent z_t",
      "The decoder output",
      "The encoded condition τ_θ(y)",
      "Random noise"
    ],
    "answerIndex": 2,
    "explanation": "K = W_K τ_θ(y) and V = W_V τ_θ(y); only Q comes from the latent φᵢ(z_t) (slide p.93).",
    "ref": "08_genAI.pdf p. 93"
  }
]

const review: KahootQuestion[] = [
  {
    "id": "k-w1-1",
    "set": "w1",
    "question": "Spam filter in Mitchell's <T, P, E>: 'percentage of emails correctly classified' is which part?",
    "options": [
      "Performance measure P",
      "Task T",
      "Experience E"
    ],
    "answerIndex": 0,
    "explanation": "P is how performance is measured. T is categorising emails as spam or legitimate, and E is the labelled email database.",
    "ref": "01_introduction.pdf, Mitchell definition"
  },
  {
    "id": "k-w1-2",
    "set": "w1",
    "question": "Training data includes desired outputs for only a few examples. Is this unsupervised learning?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "A few desired outputs makes it semi-supervised learning. Unsupervised learning has no desired outputs at all.",
    "ref": "01_introduction.pdf, types of ML"
  },
  {
    "id": "k-w1-3",
    "set": "w1",
    "question": "Predicting a person's body weight (a real number) from height is which task?",
    "options": [
      "Binary classification",
      "Clustering",
      "Regression",
      "Multi-class classification"
    ],
    "answerIndex": 2,
    "explanation": "A continuous output means regression (slide example wgt = 80 + 2*hgt). Classification needs a discrete output, and clustering has no labels.",
    "ref": "01_introduction.pdf, regression"
  },
  {
    "id": "k-w1-4",
    "set": "w1",
    "question": "Does a generative classifier estimate p(y|x) directly, without modelling x?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "A generative model fits the joint p(x, y) (a blob per class) and then infers p(y|x) with Bayes rule. Estimating p(y|x) directly is what a discriminative model does.",
    "ref": "01_introduction.pdf, discriminative vs generative"
  },
  {
    "id": "k-w1-5",
    "set": "w1",
    "question": "Which interaction mode lets the learner pick an x and query its label y?",
    "options": [
      "Batch learning",
      "Online learning",
      "Reinforcement learning",
      "Active learning"
    ],
    "answerIndex": 3,
    "explanation": "Active learning queries y for chosen x and then improves the model (like asking questions in class). Online learning only receives the next x in sequence.",
    "ref": "01_introduction.pdf, interaction modes"
  },
  {
    "id": "k-w1-6",
    "set": "w1",
    "question": "P(D|h) = 0.8, P(h) = 0.01, P(D) = 0.04. What is the posterior P(h|D)?",
    "options": [
      "0.2",
      "0.008",
      "0.32",
      "0.8"
    ],
    "answerIndex": 0,
    "explanation": "P(h|D) = 0.8 x 0.01 / 0.04 = 0.2. Answering 0.8 confuses the likelihood with the posterior.",
    "ref": "01_bayesian_learning.pdf, Bayes theorem"
  },
  {
    "id": "k-w1-7",
    "set": "w1",
    "question": "Meningitis causes stiff neck 50% of the time. Is P(meningitis | stiff neck) also about 50%?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "With P(M) = 1/50,000 and P(S) = 1/20, P(M|S) = 0.5 x (1/50,000) / (1/20) = 0.0002. The tiny prior dominates, so P(S|M) and P(M|S) are very different.",
    "ref": "01_bayesian_learning.pdf, meningitis example"
  },
  {
    "id": "k-w1-8",
    "set": "w1",
    "question": "With a uniform prior over all hypotheses, MAP and MLE pick the same hypothesis.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "MAP maximises p(D|h)p(h). If p(h) is the same constant for every h, it does not change the argmax, so MAP reduces to MLE.",
    "ref": "01_bayesian_learning.pdf, MAP vs MLE"
  },
  {
    "id": "k-w1-9",
    "set": "w1",
    "question": "To find h_MAP, must you compute the evidence p(D)?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "p(D) is the same for every hypothesis, so h_MAP = argmax p(D|h)p(h). You only need p(D) to get normalised posterior values, not to rank hypotheses.",
    "ref": "01_bayesian_learning.pdf, MAP"
  },
  {
    "id": "k-w1-10",
    "set": "w1",
    "question": "MLE variance (divide by n) of the data {1, 3, 5, 7}?",
    "options": [
      "4",
      "6.67",
      "5",
      "20"
    ],
    "answerIndex": 2,
    "explanation": "Mean is 4, squared deviations are 9+1+1+9 = 20, and 20/4 = 5. Dividing by n-1 gives 6.67, but the MLE uses 1/n.",
    "ref": "01_bayesian_learning.pdf, MLE for a normal"
  },
  {
    "id": "k-w1-11",
    "set": "w1",
    "question": "If 5 samples are enough in 1-D, how many are needed to cover 4-D equally densely?",
    "options": [
      "20",
      "125",
      "1024",
      "625"
    ],
    "answerIndex": 3,
    "explanation": "The requirement grows as 5^d, so 5^4 = 625. Multiplying 5 by 4 (20) is the linear trap; the curse of dimensionality is exponential.",
    "ref": "01_bayesian_learning.pdf, curse of dimensionality"
  },
  {
    "id": "k-w1-12",
    "set": "w1",
    "question": "Too few samples make the class covariance matrix singular. The slide's fix?",
    "options": [
      "Diagonalize the covariance",
      "Add more classes",
      "Use a uniform prior",
      "Drop the class prior"
    ],
    "answerIndex": 0,
    "explanation": "Keeping only the diagonal (per-feature variances) avoids inverting a singular full matrix. This is exactly the naive Bayes conditional-independence assumption.",
    "ref": "01_bayesian_learning.pdf, covariance singularity"
  },
  {
    "id": "k-w1-13",
    "set": "w1",
    "question": "Does the class with the highest likelihood P(x|C) always win in a Bayes classifier?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "The decision uses P(x|C)P(C). In the lab, class 0 had likelihood 0.756 vs 0.448, but priors 0.2 vs 0.4 flipped the posterior to class 1 (0.541 vs 0.456).",
    "ref": "Week 1 lab, toy GaussianNB"
  },
  {
    "id": "k-w1-14",
    "set": "w1",
    "question": "Car class C1: prior 0.5, P(white|C1) = 0.4, P(petrol|C1) = 0.9. Unnormalised NB score for a white petrol car?",
    "options": [
      "0.36",
      "0.45",
      "0.18",
      "1.8"
    ],
    "answerIndex": 2,
    "explanation": "Naive Bayes multiplies prior and per-feature likelihoods: 0.5 x 0.4 x 0.9 = 0.18. Forgetting the prior gives 0.36.",
    "ref": "01_bayesian_learning.pdf, car example"
  },
  {
    "id": "k-w1-15",
    "set": "w1",
    "question": "Naive Bayes assumes the features are independent of each other, ignoring the class.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "The assumption is conditional independence given the class, so p(x|C) is the product of p(x_j|C). Features may still be correlated overall.",
    "ref": "01_bayesian_learning.pdf, naive Bayes"
  },
  {
    "id": "k-w1-16",
    "set": "w1",
    "question": "Without smoothing, can one unseen test word make P(x|C_k) zero for every class?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 0,
    "explanation": "An unseen word has count 0 in every class, so p(word|C_k) = 0 and the whole product collapses to 0. Laplace (add-one) smoothing prevents this.",
    "ref": "01_bayesian_learning.pdf, Laplace smoothing"
  },
  {
    "id": "k-w1-17",
    "set": "w1",
    "question": "Add-one smoothing: word count 0 in class k, 90 words in class k, |V| = 10. p(word|C_k)?",
    "options": [
      "0.01",
      "0",
      "0.011",
      "0.1"
    ],
    "answerIndex": 0,
    "explanation": "(0 + 1) / (90 + 10) = 1/100 = 0.01. Forgetting to add |V| to the denominator gives 1/90 = 0.011.",
    "ref": "01_bayesian_learning.pdf, Laplace smoothing"
  },
  {
    "id": "k-w1-18",
    "set": "w1",
    "question": "Die with P(1) = 0.5, other faces 0.1 each. Is P(6,1,1,2) different from P(2,1,6,1)?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Both are 0.1 x 0.5 x 0.5 x 0.1 = 0.0025. Order does not change the product, which is why a sentence can be treated as a bag of words.",
    "ref": "01_bayesian_learning.pdf, multinomial distribution"
  },
  {
    "id": "k-w1-19",
    "set": "w1",
    "question": "Coin with P(H) = 0.6, flipped twice. Probability of exactly one head?",
    "options": [
      "0.24",
      "0.36",
      "0.48",
      "0.6"
    ],
    "answerIndex": 2,
    "explanation": "HT and TH each have probability 0.6 x 0.4 = 0.24, so the total is 0.48. Answering 0.24 counts only one ordering.",
    "ref": "01_bayesian_learning.pdf, binomial coin example"
  },
  {
    "id": "k-w1-20",
    "set": "w1",
    "question": "In the Week 1 lab, the occupancy GaussianNB was trained only on the 200-row balanced sample.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "The 100 + 100 balanced sample was only used to draw readable pairplots. The model was fitted on all 8,143 training rows.",
    "ref": "Week 1 lab, occupancy data"
  },
  {
    "id": "k-w1a-1",
    "set": "w1a",
    "question": "Two fair coins. Given at least one is heads, what is P(both heads)?",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1/3"
    ],
    "answerIndex": 3,
    "explanation": "P(HH | at least one H) = (1/4) / (3/4) = 1/3. Answering 1/2 wrongly treats it as 'the other coin is heads'.",
    "ref": "01a_conditional_prob.pdf, conditional probability"
  },
  {
    "id": "k-w1a-2",
    "set": "w1a",
    "question": "If events A and B are independent, must P(A and B) be 0?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Independence means P(A|B) = P(A), so P(A and B) = P(A)P(B), which is usually non-zero. P(A and B) = 0 describes mutually exclusive events, and those are dependent whenever both have non-zero probability.",
    "ref": "01a_conditional_prob.pdf, independence"
  },
  {
    "id": "k-w1a-3",
    "set": "w1a",
    "question": "P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. What is P(A or B)?",
    "options": [
      "0.7",
      "0.9",
      "0.2",
      "1.1"
    ],
    "answerIndex": 0,
    "explanation": "Inclusion-exclusion: 0.5 + 0.4 - 0.2 = 0.7. Just adding (0.9) double-counts the overlap.",
    "ref": "01a_conditional_prob.pdf, axioms"
  },
  {
    "id": "k-w1a-4",
    "set": "w1a",
    "question": "Joint table row Y = y4 is (8/32, 0, 0, 0) over x1..x4. What is P(X = x1 | Y = y4)?",
    "options": [
      "8/32",
      "1/4",
      "1",
      "1/2"
    ],
    "answerIndex": 2,
    "explanation": "P(x1|y4) = (8/32) / P(y4) = (8/32) / (8/32) = 1. The trap is reporting the joint 8/32 instead of dividing by the marginal.",
    "ref": "01a_conditional_prob.pdf, 32nds table"
  },
  {
    "id": "k-w1a-5",
    "set": "w1a",
    "question": "w = (3, 4). A point x has w.x = 10. True distance of its projection along w?",
    "options": [
      "10",
      "2.5",
      "50",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "|w| = 5, so the distance is w.x / |w| = 10/5 = 2. w.x is a distance only when w is a unit vector.",
    "ref": "01b_linear_algebra.pdf, unit vectors"
  },
  {
    "id": "k-w1a-6",
    "set": "w1a",
    "question": "Is the gap between hyperplanes w.x = 0 and w.x = 1 always equal to 1?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "The gap is 1/|w|, which equals 1 only when |w| = 1. This is why w is normalised to a unit vector.",
    "ref": "01b_linear_algebra.pdf, hyperplanes"
  },
  {
    "id": "k-w1a-7",
    "set": "w1a",
    "question": "Two points on the same contour of a correlated 2-D Gaussian always have equal Euclidean distance to the mean.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "They have equal Mahalanobis distance, not Euclidean distance. Only after translation, rotation and scaling do they become equidistant.",
    "ref": "01b_linear_algebra.pdf, Mahalanobis distance"
  },
  {
    "id": "k-w1a-8",
    "set": "w1a",
    "question": "In PCA, the principal components are...",
    "options": [
      "Top eigenvectors of the covariance",
      "Rows of the data matrix",
      "Smallest-eigenvalue eigenvectors",
      "The class means"
    ],
    "answerIndex": 0,
    "explanation": "PCA centres the data, forms Sigma = (1/n) X^T X, and keeps the eigenvectors with the largest eigenvalues. Smallest-eigenvalue directions carry the least variance.",
    "ref": "01b_linear_algebra.pdf, PCA algorithm"
  },
  {
    "id": "k-w1a-9",
    "set": "w1a",
    "question": "8 equally likely ball colours. Entropy in bits?",
    "options": [
      "1",
      "2",
      "3",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "Uniform over n outcomes gives log2(n) = log2(8) = 3 bits, i.e. 3 fingers. 8 is the number of outcomes, not the bits.",
    "ref": "01c_info_theory.pdf, entropy"
  },
  {
    "id": "k-w1a-10",
    "set": "w1a",
    "question": "Entropy of a ball with P(red) = 1/2, P(blue) = 1/4, P(green) = 1/4?",
    "options": [
      "1.5",
      "1",
      "1.58",
      "2"
    ],
    "answerIndex": 0,
    "explanation": "(1/2)(1) + (1/4)(2) + (1/4)(2) = 1.5 bits. 1.58 = log2(3) would only hold if the three colours were equally likely.",
    "ref": "01c_info_theory.pdf, expected uncertainty"
  },
  {
    "id": "k-w1a-11",
    "set": "w1a",
    "question": "Can a 6-sided die have lower entropy than a fair coin?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 0,
    "explanation": "A fair die has log2(6) bits, but a biased die (e.g. 0.95 on one face, 0.01 on the others) has about 0.40 bits, below the coin's 1 bit.",
    "ref": "01c_info_theory.pdf, multinomial entropy"
  },
  {
    "id": "k-w1a-12",
    "set": "w1a",
    "question": "Model gives the true class probability 0.25. Cross-entropy loss (log base 2)?",
    "options": [
      "0.25",
      "1",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "With a one-hot p, H(p, q) = -log2(0.25) = 2. Lower probability on the true class gives a higher penalty.",
    "ref": "01c_info_theory.pdf, cross entropy as loss"
  },
  {
    "id": "k-w1a-13",
    "set": "w1a",
    "question": "H(p, q) = 2.5 bits and H(p) = 2.25 bits. What is D_KL(p || q)?",
    "options": [
      "0.9",
      "1.11",
      "4.75",
      "0.25"
    ],
    "answerIndex": 3,
    "explanation": "KL divergence is the gap H(p, q) - H(p) = 2.5 - 2.25 = 0.25. It is a difference, not a ratio or a sum.",
    "ref": "01c_info_theory.pdf, KL divergence"
  },
  {
    "id": "k-w1a-14",
    "set": "w1a",
    "question": "If X and Y are independent, is the mutual information I(X;Y) equal to H(X)?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Independence gives I(X;Y) = 0 because H(X|Y) = H(X). I(X;Y) = H(X) holds when Y fully determines X.",
    "ref": "01c_info_theory.pdf, mutual information"
  },
  {
    "id": "k-w2-1",
    "set": "w2",
    "question": "Residuals are 1, -1, 2, -2. What is the MSE?",
    "options": [
      "0",
      "1.5",
      "10",
      "2.5"
    ],
    "answerIndex": 3,
    "explanation": "MSE = (1+1+4+4)/4 = 2.5. Answering 0 means you summed raw residuals, which cancel; that is why the error is squared.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-2",
    "set": "w2",
    "question": "Residuals are 3, -3, 3, -3. What is the RMSE?",
    "options": [
      "3",
      "0",
      "9",
      "12"
    ],
    "answerIndex": 0,
    "explanation": "MSE = 36/4 = 9 and RMSE = sqrt(9) = 3, back in the units of y. 9 is the MSE, not the RMSE.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-3",
    "set": "w2",
    "question": "100 houses, 4 features, plus the x0 = 1 column. Shape of X in the normal equation?",
    "options": [
      "4 x 100",
      "100 x 4",
      "100 x 5",
      "5 x 5"
    ],
    "answerIndex": 2,
    "explanation": "X is n x (m+1): one row per example and one column per feature plus the constant x0 = 1 that absorbs the intercept.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-4",
    "set": "w2",
    "question": "SST = 200 and SSE = 50. What is R2?",
    "options": [
      "0.25",
      "0.75",
      "0.5",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "R2 = 1 - SSE/SST = 1 - 50/200 = 0.75. 0.25 is SSE/SST, the unexplained fraction.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-5",
    "set": "w2",
    "question": "The house model scored R2 = 0.73 on its training data. Will its test R2 be about the same?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. In the lab the same model scored only 0.42 on the held-out 20%; in-sample R2 is optimistic, so always score on a test split.",
    "ref": "Week 2 lab"
  },
  {
    "id": "k-w2-6",
    "set": "w2",
    "question": "PolynomialFeatures(2) on 2 input features gives how many columns (bias included)?",
    "options": [
      "4",
      "5",
      "9",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "Columns are 1, x0, x1, x0^2, x0*x1, x1^2 = 6. Forgetting the bias column or the cross term gives 5 or 4.",
    "ref": "Week 2 lab"
  },
  {
    "id": "k-w2-7",
    "set": "w2",
    "question": "Polynomial regression fits a curved line. Is it still a linear model?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 0,
    "explanation": "Yes. It is linear in the weights: expand x to (x, x^2, ...) and fit ordinary linear regression on the new features.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-8",
    "set": "w2",
    "question": "Gradient descent: w = 5, learning rate 0.1, dJ/dw = 20. New w?",
    "options": [
      "3",
      "7",
      "4.9",
      "25"
    ],
    "answerIndex": 0,
    "explanation": "w <- w - alpha * gradient = 5 - 0.1*20 = 3. Answering 7 means you moved uphill (added the gradient).",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-9",
    "set": "w2",
    "question": "If the learning rate is too large, gradient descent simply converges more slowly.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. A too-large alpha overshoots, J may not decrease every iteration and can diverge. Slow convergence is the too-small alpha problem.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-10",
    "set": "w2",
    "question": "You may update w0 first, then use the new w0 to compute the gradient for w1.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. All parameters must be updated simultaneously, using partial derivatives computed at the same current point.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-11",
    "set": "w2",
    "question": "The linear regression MSE cost is convex. Can gradient descent get stuck in a bad local minimum?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. For a convex function every local minimum is a global minimum; sensitivity to initialization only matters for non-convex costs.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-12",
    "set": "w2",
    "question": "Mini-batch gradient descent with a batch of just 1 example is called...?",
    "options": [
      "Batch gradient descent",
      "Normal equation",
      "Stochastic gradient descent",
      "Newton's method"
    ],
    "answerIndex": 2,
    "explanation": "SGD is the extreme case k = 1 of sampling a subset of the summand gradients each update.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-13",
    "set": "w2",
    "question": "Why prefer gradient descent over w = (XtX)^-1 Xt y on big problems?",
    "options": [
      "The normal equation gives wrong answers",
      "Inverting XtX is costly with many features",
      "Gradient descent is always exact",
      "The normal equation needs a learning rate"
    ],
    "answerIndex": 1,
    "explanation": "The closed form is exact but needs a matrix inverse that is expensive for many features; the slide says the formulae only show that complexity.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-14",
    "set": "w2",
    "question": "Training error keeps falling as polynomial degree rises. Does true (test) error keep falling too?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. Training error falls monotonically but true error is U-shaped: past the best model, extra complexity overfits.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-15",
    "set": "w2",
    "question": "The lab's constant mean predictor (m1) shows which error pattern?",
    "options": [
      "Low bias, low variance",
      "Low bias, high variance",
      "High bias, high variance",
      "High bias, low variance"
    ],
    "answerIndex": 3,
    "explanation": "Its errors were tightly clustered but far from the origin: consistent yet systematically wrong. The degree-4 model was the high-variance one.",
    "ref": "Week 2 lab"
  },
  {
    "id": "k-w2-16",
    "set": "w2",
    "question": "Which regulariser can set coefficients exactly to zero?",
    "options": [
      "Lasso (L1)",
      "Ridge (L2)",
      "Neither",
      "Plain least squares"
    ],
    "answerIndex": 0,
    "explanation": "Lasso's diamond-shaped constraint has corners on the axes; at alpha = 1 it zeroed 7 of 10 diabetes coefficients while Ridge kept all 10 non-zero.",
    "ref": "Week 2 lab"
  },
  {
    "id": "k-w2-17",
    "set": "w2",
    "question": "w = (3, -4). What is the L1 norm ||w||1?",
    "options": [
      "-1",
      "5",
      "7",
      "25"
    ],
    "answerIndex": 2,
    "explanation": "L1 = |3| + |-4| = 7. 5 is the L2 norm and 25 is the squared L2 norm used by Ridge; -1 forgets the absolute value.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w2-18",
    "set": "w2",
    "question": "Raising alpha in Ridge or Lasso gives a more complex model.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. Larger alpha penalises ||w|| more, shrinking weights toward zero: a simpler model with more bias and less variance.",
    "ref": "Week 2 regression"
  },
  {
    "id": "k-w3-1",
    "set": "w3",
    "question": "A model gives p(positive) = 0.8. What are the odds?",
    "options": [
      "0.8",
      "1.25",
      "0.25",
      "4"
    ],
    "answerIndex": 3,
    "explanation": "Odds = p/(1-p) = 0.8/0.2 = 4, i.e. 4:1. 0.25 is the odds of the negative class.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-2",
    "set": "w3",
    "question": "sigmoid(2) is about 0.88. What is sigmoid(-2)?",
    "options": [
      "0.12",
      "-0.88",
      "0.5",
      "0.88"
    ],
    "answerIndex": 0,
    "explanation": "sigmoid(-x) = 1 - sigmoid(x) = 1 - 0.88 = 0.12. The sigmoid is never negative.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-3",
    "set": "w3",
    "question": "The sigmoid output is non-linear. Is logistic regression's decision boundary non-linear?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. The boundary is where the odds equal 1, i.e. wTx = 0, which is a straight line (hyperplane).",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-4",
    "set": "w3",
    "question": "1-D logistic regression with w = 2, b = -6. At what x is the decision boundary?",
    "options": [
      "-3",
      "0",
      "3",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "The boundary is wx + b = 0, so 2x - 6 = 0 gives x = 3, where p = 0.5.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-5",
    "set": "w3",
    "question": "Like linear regression, the logistic loss has a closed-form solution.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. The logistic loss is convex but has no closed form, so it is minimised with gradient descent.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-6",
    "set": "w3",
    "question": "Why is MSE a poor objective for classification with labels +1/-1?",
    "options": [
      "It cannot be minimised",
      "It penalises confidently correct predictions",
      "It ignores wrong predictions",
      "It only works for K > 2 classes"
    ],
    "answerIndex": 1,
    "explanation": "A correct prediction with |wTx| far beyond 1 still incurs large squared error, so MSE punishes being confidently right.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-7",
    "set": "w3",
    "question": "Softmax over four classes with scores [3, 3, 3, 3]. Probability of class 1?",
    "options": [
      "0",
      "0.75",
      "3",
      "0.25"
    ],
    "answerIndex": 3,
    "explanation": "Equal scores give equal exponentials, so each class gets 1/4 = 0.25 regardless of the score value.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-8",
    "set": "w3",
    "question": "One-vs-All on a 4-class problem trains how many binary classifiers?",
    "options": [
      "4",
      "1",
      "3",
      "6"
    ],
    "answerIndex": 0,
    "explanation": "One classifier per class (class k vs the rest), then predict the class with the highest probability. 6 would be one-vs-one pairs.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-9",
    "set": "w3",
    "question": "TP = 6, FP = 2, FN = 4, TN = 8. Precision?",
    "options": [
      "0.6",
      "0.7",
      "0.75",
      "0.8"
    ],
    "answerIndex": 2,
    "explanation": "Precision = TP/(TP+FP) = 6/8 = 0.75. 0.6 is the recall, 0.7 the accuracy.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-10",
    "set": "w3",
    "question": "TP = 6, FP = 2, FN = 4, TN = 8. Recall?",
    "options": [
      "0.7",
      "0.6",
      "0.75",
      "0.8"
    ],
    "answerIndex": 1,
    "explanation": "Recall = TP/(TP+FN) = 6/10 = 0.6. Using FP in the denominator gives the precision 0.75 instead.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-11",
    "set": "w3",
    "question": "Precision = 0.6 and recall = 0.4. What is F1?",
    "options": [
      "0.24",
      "0.4",
      "0.5",
      "0.48"
    ],
    "answerIndex": 3,
    "explanation": "F1 = 2PR/(P+R) = 2*0.24/1.0 = 0.48. The arithmetic mean 0.5 is wrong because F1 is the harmonic mean.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-12",
    "set": "w3",
    "question": "99% of transactions are legitimate. Does 99% accuracy show a good fraud detector?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. Predicting 'not fraud' for everything already scores 99% with zero recall; use precision and recall on imbalanced data.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-13",
    "set": "w3",
    "question": "Raise the decision threshold from 0.5 to 0.9. Does recall usually go up?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. Fewer samples are predicted positive, so recall falls or stays the same while precision typically rises.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-14",
    "set": "w3",
    "question": "Which ROC point represents perfect classification?",
    "options": [
      "(0, 1)",
      "(0, 0)",
      "(1, 1)",
      "(1, 0)"
    ],
    "answerIndex": 0,
    "explanation": "ROC plots TPR (y) against FPR (x); perfect is FPR = 0 and TPR = 1, the upper-left corner.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-15",
    "set": "w3",
    "question": "A classifier has ROC AUC = 0.5. This means it is...",
    "options": [
      "Perfect",
      "Always wrong",
      "No better than random guessing",
      "Highly precise"
    ],
    "answerIndex": 2,
    "explanation": "AUC is the chance a random positive is ranked above a random negative; 0.5 is a coin flip, i.e. the diagonal.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-16",
    "set": "w3",
    "question": "The true positive rate (TPR) on an ROC curve is the same formula as recall.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "True. TPR = TP/(TP+FN), the probability of detection, which is exactly recall. FPR = FP/(FP+TN) is the other axis.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w3-17",
    "set": "w3",
    "question": "In sklearn LogisticRegression, a smaller C means weaker regularisation.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. C is the inverse strength: C = 0.0001 shrank ||w|| to 0.0136 and underfit (accuracy 0.825 vs 0.8875 at C = 1).",
    "ref": "Week 3 lab"
  },
  {
    "id": "k-w3-18",
    "set": "w3",
    "question": "A larger beta in F-beta makes precision more important than recall.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. Larger beta weights recall more; smaller beta favours precision.",
    "ref": "Week 3 logistic"
  },
  {
    "id": "k-w4-1",
    "set": "w4",
    "question": "Gini impurity of a node with 5 positives and 5 negatives?",
    "options": [
      "0.25",
      "1.0",
      "0.5"
    ],
    "answerIndex": 2,
    "explanation": "Gini = 1 - 0.5^2 - 0.5^2 = 0.5, the maximum for two classes. 1.0 is the entropy of a 50/50 node, not its Gini.",
    "ref": "Week 4 decision trees (Gini example)"
  },
  {
    "id": "k-w4-2",
    "set": "w4",
    "question": "An ID column has 8 unique values over 8 rows. Its SplitInfo (log base 2)?",
    "options": [
      "3",
      "1",
      "2",
      "8"
    ],
    "answerIndex": 0,
    "explanation": "SplitInfo = -8 x (1/8) log2(1/8) = log2 8 = 3. Dividing its IG of 0.954 by 3 gives a gain ratio of only about 0.32.",
    "ref": "Week 4 decision trees lab (gain ratio)"
  },
  {
    "id": "k-w4-3",
    "set": "w4",
    "question": "Raw information gain favours attributes with many distinct values, such as an ID column.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Many values create many tiny, near-pure subsets, so IG looks high. That is exactly why gain ratio divides by SplitInfo.",
    "ref": "Week 4 decision trees (gain ratio)"
  },
  {
    "id": "k-w4-4",
    "set": "w4",
    "question": "Is ID3 guaranteed to find the smallest tree that fits the training data?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Finding the smallest tree is NP-hard. ID3 is a greedy top-down search that picks the locally best attribute, so it tends to find small trees but gives no guarantee.",
    "ref": "Week 4 decision trees (ID3)"
  },
  {
    "id": "k-w4-5",
    "set": "w4",
    "question": "For a regression tree (continuous target), splits are chosen by...",
    "options": [
      "Information gain",
      "Gini gain",
      "Gain ratio",
      "Variance reduction"
    ],
    "answerIndex": 3,
    "explanation": "With a continuous target, the split that most reduces Var(S) - sum (|Si|/|S|) Var(Si) is picked. Entropy, Gini and gain ratio need class labels.",
    "ref": "Week 4 decision trees (regression trees)"
  },
  {
    "id": "k-w4-6",
    "set": "w4",
    "question": "Sorted values 10(+), 20(+), 30(-), 40(-). Candidate threshold(s) for the split?",
    "options": [
      "15",
      "25",
      "35",
      "All three midpoints"
    ],
    "answerIndex": 1,
    "explanation": "Thresholds are proposed only at midpoints where the class label changes, here between 20(+) and 30(-), so 25.",
    "ref": "Week 4 decision trees (continuous attributes)"
  },
  {
    "id": "k-w4-7",
    "set": "w4",
    "question": "Raising min_samples_leaf from 1 to 10 makes a tree less likely to overfit.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "A larger min_samples_leaf is a pre-pruning constraint: every leaf must hold more rows, so the tree is smaller and smoother. In the lab, min_samples_leaf=10 turned the jagged regression-tree steps into broader, smoother ones. It does not add capacity.",
    "ref": "Week 4 decision trees lab (regularised trees)"
  },
  {
    "id": "k-w4-8",
    "set": "w4",
    "question": "Is it fine to pick hyperparameters by comparing test-set accuracy, if you never train on the test set?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Choosing the architecture on the test set is data leakage: the model choice becomes fitted to the test data. Use a validation set or cross-validation.",
    "ref": "Week 4 ensembles (validation)"
  },
  {
    "id": "k-w4-9",
    "set": "w4",
    "question": "GridSearchCV: 4 max_depth values x 2 criteria, 5-fold CV. How many CV fits (ignore refit)?",
    "options": [
      "40",
      "8",
      "13",
      "45"
    ],
    "answerIndex": 0,
    "explanation": "4 x 2 = 8 combinations, each trained once per fold: 8 x 5 = 40 fits. The final refit on all data would make 41, not 45.",
    "ref": "Week 4 ensembles (grid search)"
  },
  {
    "id": "k-w4-10",
    "set": "w4",
    "question": "Random search with 60 trials usually finds a top-5% region of the grid.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Bergstra and Bengio: P(miss) = 0.95^60 is about 0.05, so roughly 95% of the time at least one trial lands in the top 5%.",
    "ref": "Week 4 ensembles (random search)"
  },
  {
    "id": "k-w4-11",
    "set": "w4",
    "question": "Plain KFold always keeps the same class ratio in every fold.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "KFold can give skewed or contiguous class blocks, especially on ordered data. StratifiedKFold is the one that preserves the class ratio.",
    "ref": "Week 4 ensembles (cross-validation)"
  },
  {
    "id": "k-w4-12",
    "set": "w4",
    "question": "With a large bootstrap sample, about what fraction of rows are out-of-bag?",
    "options": [
      "10%",
      "50%",
      "37%",
      "63%"
    ],
    "answerIndex": 2,
    "explanation": "P(row never drawn) = (1 - 1/m)^m, which tends to 1/e = 0.368. 63% is the fraction of distinct rows that ARE in the bag; OOB rows give oob_score.",
    "ref": "Week 4 ensembles (bagging)"
  },
  {
    "id": "k-w4-13",
    "set": "w4",
    "question": "Average 4 independent models, each with variance 8. Variance of the average?",
    "options": [
      "4",
      "8",
      "32",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "Var of the mean of n independent models is sigma^2 / n = 8 / 4 = 2. Averaging cuts variance; it does not keep it at 8.",
    "ref": "Week 4 ensembles (variance reduction)"
  },
  {
    "id": "k-w4-14",
    "set": "w4",
    "question": "What does a random forest add on top of bagged trees?",
    "options": [
      "Random feature subset per split",
      "Sequential reweighting",
      "A meta-model",
      "Pruning every tree"
    ],
    "answerIndex": 0,
    "explanation": "RF = bootstrap rows plus a random subset of features (max_features) at each split, which decorrelates the trees. Reweighting is boosting; a meta-model is stacking.",
    "ref": "Week 4 ensembles (random forest)"
  },
  {
    "id": "k-w4-15",
    "set": "w4",
    "question": "AdaBoost: a weak learner has weighted error 0.5. Its vote weight alpha is...",
    "options": [
      "0.5",
      "0",
      "1",
      "ln 2"
    ],
    "answerIndex": 1,
    "explanation": "alpha = 0.5 ln((1 - 0.5)/0.5) = 0.5 ln 1 = 0. A coin-flip learner gets no say in the weighted vote.",
    "ref": "Week 4 ensembles (AdaBoost)"
  },
  {
    "id": "k-w4-16",
    "set": "w4",
    "question": "In gradient boosting, each new tree is fit to...",
    "options": [
      "A fresh bootstrap sample",
      "Out-of-fold predictions",
      "The current residuals",
      "A random feature subset"
    ],
    "answerIndex": 2,
    "explanation": "Each stage fits h(x) to y - F_m(x), the residual (negative gradient) of the current ensemble. Out-of-fold predictions are stacking.",
    "ref": "Week 4 ensembles (gradient boosting)"
  },
  {
    "id": "k-w4-17",
    "set": "w4",
    "question": "Blending builds its meta-features with k-fold cross-validation, just like stacking.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Blending uses a single hold-out validation split instead; stacking uses out-of-fold (cross-validated) predictions as meta-features.",
    "ref": "Week 4 ensembles (stacking vs blending)"
  },
  {
    "id": "k-w4-18",
    "set": "w4",
    "question": "Is watch_time = -1 a good way to encode 'undefined' in a feature?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Avoid magic values; the model treats -1 as a real number. Add a boolean such as watch_time_is_defined instead.",
    "ref": "Week 4 ensembles (feature engineering)"
  },
  {
    "id": "k-w5-1",
    "set": "w5",
    "question": "Do 3 stacked linear layers with no activation give a non-linear model?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "A composition of linear maps is still linear, so it collapses to one layer. A non-linear activation after each hidden layer is needed.",
    "ref": "Week 5 neural networks (multilayer)"
  },
  {
    "id": "k-w5-2",
    "set": "w5",
    "question": "MLP: 4 inputs, 3 hidden, 2 outputs, with biases. Total weights?",
    "options": [
      "14",
      "20",
      "26",
      "23"
    ],
    "answerIndex": 3,
    "explanation": "m(d+1) + k(m+1) = 3 x 5 + 2 x 4 = 15 + 8 = 23. Forgetting biases gives 12 + 6 = 18.",
    "ref": "Week 5 neural networks (parameter count)"
  },
  {
    "id": "k-w5-3",
    "set": "w5",
    "question": "Leaky ReLU with slope a = 0.1. Output for input -3?",
    "options": [
      "0",
      "-3",
      "-0.3",
      "0.3"
    ],
    "answerIndex": 2,
    "explanation": "For x < 0, leaky ReLU returns a x = 0.1 x (-3) = -0.3. Plain ReLU would return 0.",
    "ref": "Week 5 neural networks (activations)"
  },
  {
    "id": "k-w5-4",
    "set": "w5",
    "question": "Which activation was proposed to fix the 'dying ReLU' problem?",
    "options": [
      "Leaky ReLU",
      "Sigmoid",
      "Step",
      "Identity"
    ],
    "answerIndex": 0,
    "explanation": "Leaky ReLU keeps a small slope for negative inputs, so the gradient is never exactly zero and neurons can recover.",
    "ref": "Week 5 neural networks (activations)"
  },
  {
    "id": "k-w5-5",
    "set": "w5",
    "question": "The perceptron's step activation is smooth, so gradient descent works on it directly.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "The step function is not smooth (zero gradient almost everywhere), which is why the differentiable logistic unit is used for gradient training.",
    "ref": "Week 5 neural networks (perceptron)"
  },
  {
    "id": "k-w5-6",
    "set": "w5",
    "question": "Sigmoid output + binary cross-entropy: y = 1, y_hat = 0.8. dJ/dv at the output?",
    "options": [
      "0.2",
      "-1.25",
      "-0.2",
      "0.16"
    ],
    "answerIndex": 2,
    "explanation": "With the matching sigmoid + cross-entropy pair, dJ/dv = y_hat - y = 0.8 - 1 = -0.2. The y_hat(1 - y_hat) terms cancel.",
    "ref": "Week 5 neural networks (output-layer gradient)"
  },
  {
    "id": "k-w5-7",
    "set": "w5",
    "question": "w = 1, dJ/dw = -2, learning rate 0.1. New w after one GD step?",
    "options": [
      "0.8",
      "-1",
      "3",
      "1.2"
    ],
    "answerIndex": 3,
    "explanation": "w <- w - eta x grad = 1 - 0.1 x (-2) = 1.2. A negative gradient means increasing w reduces the loss.",
    "ref": "Week 5 neural networks (gradient descent)"
  },
  {
    "id": "k-w5-8",
    "set": "w5",
    "question": "Which gradient descent variant has the noisiest, most zig-zag path?",
    "options": [
      "Stochastic GD",
      "Batch GD",
      "Mini-batch GD"
    ],
    "answerIndex": 0,
    "explanation": "SGD estimates the gradient from one sample, so it is fastest per step but rough. Batch GD uses all data for a smooth path; mini-batch is the compromise.",
    "ref": "Week 5 neural networks (SGD vs batch)"
  },
  {
    "id": "k-w5-9",
    "set": "w5",
    "question": "Within one mini-batch, every sample's gradient is computed with the same old weights.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "Gradients are accumulated with the old W and the weights are replaced only at the end of the mini-batch.",
    "ref": "Week 5 neural networks (training loop)"
  },
  {
    "id": "k-w5-10",
    "set": "w5",
    "question": "Lecture convention (no rescaling in training): drop rate 0.2. At test time, scale pre-activations by...",
    "options": [
      "0.2",
      "1.25",
      "0.8",
      "1 (no change)"
    ],
    "answerIndex": 2,
    "explanation": "All units are active at test time, so the slides discount pre-activations by alpha = 1 - drop rate = 0.8 (or push alpha into W). Keras-style inverted dropout instead scales by 1.25 during training, which is not the lecture's version.",
    "ref": "Week 5 neural networks (dropout)"
  },
  {
    "id": "k-w5-11",
    "set": "w5",
    "question": "At test time, dropout still randomly switches off neurons.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Dropout is applied only during training. At test time all neurons are used, with the alpha scaling correction.",
    "ref": "Week 5 neural networks (dropout)"
  },
  {
    "id": "k-w5-12",
    "set": "w5",
    "question": "Early stopping halts training when...",
    "options": [
      "Training loss reaches 0",
      "Learning rate hits 0",
      "Weights stop changing",
      "Validation error starts rising"
    ],
    "answerIndex": 3,
    "explanation": "Stop at the minimum of the validation curve; beyond it the model overfits even though training error keeps falling.",
    "ref": "Week 5 neural networks (early stopping)"
  },
  {
    "id": "k-w5-13",
    "set": "w5",
    "question": "Should initial weights be large to avoid vanishing gradients?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "Too large leads to exploding gradients (and saturated sigmoids); too small leads to vanishing. Use small, scaled schemes such as Xavier or He.",
    "ref": "Week 5 neural networks (initialisation)"
  },
  {
    "id": "k-w5-14",
    "set": "w5",
    "question": "Each sigmoid derivative is at most 0.25. Max product of the two derivatives across 2 sigmoid layers?",
    "options": [
      "0.0625",
      "0.5",
      "0.25",
      "0"
    ],
    "answerIndex": 0,
    "explanation": "0.25 x 0.25 = 0.0625, and it shrinks further with each layer. That repeated multiplication is the vanishing gradient problem.",
    "ref": "Week 5 neural networks (vanishing gradients)"
  },
  {
    "id": "k-w5-15",
    "set": "w5",
    "question": "Which heuristic directly guards against exploding gradients?",
    "options": [
      "Gradient clipping",
      "Dropout",
      "Data augmentation",
      "Early stopping"
    ],
    "answerIndex": 0,
    "explanation": "Gradient clipping caps the gradient size. Proper initialisation and normalisation are the remedies listed for vanishing gradients.",
    "ref": "Week 5 neural networks (training challenges)"
  },
  {
    "id": "k-w5-16",
    "set": "w5",
    "question": "Which initialisation scales Xavier by sqrt(2) for ReLU layers?",
    "options": [
      "LSUV",
      "Zero init",
      "Uniform(0,1)",
      "He"
    ],
    "answerIndex": 3,
    "explanation": "He initialisation is the ReLU variant (Xavier x sqrt 2). Zero init makes all units identical and breaks learning.",
    "ref": "Week 5 neural networks (initialisation)"
  },
  {
    "id": "k-w5-17",
    "set": "w5",
    "question": "Feature scaling has no effect on gradient descent for neural networks.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "Roughly zero-centred features in a range like [-1, 1] help gradient descent converge and avoid the NaN trap.",
    "ref": "Week 5 neural networks (normalisation)"
  },
  {
    "id": "k-w7-1",
    "set": "w7",
    "question": "An RNN is run on sequences of length 100 instead of 10. Does it need more weights?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. Every time step reuses the same cell and weights, so the parameter count does not depend on sequence length.",
    "ref": "07_attention.pdf p.20"
  },
  {
    "id": "k-w7-2",
    "set": "w7",
    "question": "Vanilla RNN cell, input size 5, hidden size 10 (no output layer). How many parameters?",
    "options": [
      "110",
      "150",
      "160",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "W_x is 5x10 = 50, W_h is 10x10 = 100, bias 10, so 160. Forgetting the recurrent W_h (n x n) gives the trap answer 60.",
    "ref": "07_attention.pdf p.24"
  },
  {
    "id": "k-w7-3",
    "set": "w7",
    "question": "An LSTM layer with the same sizes (input 5, hidden 10) has how many parameters?",
    "options": [
      "640",
      "160",
      "320",
      "480"
    ],
    "answerIndex": 0,
    "explanation": "An LSTM has four weight blocks (forget, input, candidate, output), each the size of a vanilla cell: 4 x 160 = 640.",
    "ref": "07_attention.pdf p.36-39"
  },
  {
    "id": "k-w7-4",
    "set": "w7",
    "question": "Gradient clipping is the lecture's remedy for VANISHING gradients in RNNs.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. Clipping rescales gradients that are too large, which fixes exploding gradients. Vanishing gradients need an architecture change such as LSTM.",
    "ref": "07_attention.pdf p.31"
  },
  {
    "id": "k-w7-5",
    "set": "w7",
    "question": "Which LSTM gate decides what to erase from the cell state?",
    "options": [
      "Input gate",
      "Output gate",
      "Forget gate",
      "Candidate tanh layer"
    ],
    "answerIndex": 2,
    "explanation": "The forget gate f_t multiplies C_(t-1) element-wise; values near 0 erase memory. The input gate controls what is added, the output gate what is read out.",
    "ref": "07_attention.pdf p.36, p.40"
  },
  {
    "id": "k-w7-6",
    "set": "w7",
    "question": "LSTM: f = 0.5, C_prev = 4, i = 1, candidate = 0.5. New cell state C_t?",
    "options": [
      "4.5",
      "2.5",
      "2.0",
      "1.0"
    ],
    "answerIndex": 1,
    "explanation": "C_t = f x C_prev + i x candidate = 0.5 x 4 + 1 x 0.5 = 2.5. The update is additive, which is why gradients survive along the cell state.",
    "ref": "07_attention.pdf p.38"
  },
  {
    "id": "k-w7-7",
    "set": "w7",
    "question": "Bag of words: do 'dog bites man' and 'man bites dog' get the same vector?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 0,
    "explanation": "Yes. Bag of words only counts words and throws away order, so both sentences give the same count vector. That lost structure motivates RNNs.",
    "ref": "07_attention.pdf p.15"
  },
  {
    "id": "k-w7-8",
    "set": "w7",
    "question": "Spam filtering (email words in, spam/not spam out) is which sequence configuration?",
    "options": [
      "One to many",
      "Many to one",
      "Many to many (synced)",
      "One to one"
    ],
    "answerIndex": 1,
    "explanation": "A whole sequence of words produces a single label at the end, so it is many to one. Image captioning is one to many.",
    "ref": "07_attention.pdf p.7"
  },
  {
    "id": "k-w7-9",
    "set": "w7",
    "question": "In a seq2seq RNN without attention, what is the bottleneck?",
    "options": [
      "Size of the output vocabulary",
      "Number of decoder layers",
      "One final encoder state holds the whole source",
      "The softmax at each step"
    ],
    "answerIndex": 2,
    "explanation": "All source information must pass through a single final encoder state. Attention fixes this by letting each decoder step read all encoder states.",
    "ref": "07_attention.pdf p.62"
  },
  {
    "id": "k-w7-10",
    "set": "w7",
    "question": "The score q_j.k_i always equals q_i.k_j, so attention scores are symmetric.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. The score is w_j^T W^Q (W^K)^T w_i, and W^Q differs from W^K, so the learned similarity is asymmetric, unlike a plain dot product of embeddings.",
    "ref": "07_attention.pdf p.51"
  },
  {
    "id": "k-w7-11",
    "set": "w7",
    "question": "Two keys get equal scores. Values v1 = [2,0], v2 = [0,4]. Attention output?",
    "options": [
      "[2, 4]",
      "[1, 1]",
      "[2, 0]",
      "[1, 2]"
    ],
    "answerIndex": 3,
    "explanation": "Equal scores give softmax weights 0.5 and 0.5, so the output is 0.5[2,0] + 0.5[0,4] = [1, 2]. Weights sum to 1, so it is an average, not a sum.",
    "ref": "07_attention.pdf p.75"
  },
  {
    "id": "k-w7-12",
    "set": "w7",
    "question": "Why are the raw scores QK^T divided by sqrt(d_k)?",
    "options": [
      "To make each row sum to 1",
      "Stop scores growing with d_k and saturating softmax",
      "To add position information",
      "To cut the number of parameters"
    ],
    "answerIndex": 1,
    "explanation": "sqrt(d_k) is the standard deviation of the raw scores, so dividing normalises them as d_k grows. Making rows sum to 1 is the softmax's job, not the scaling.",
    "ref": "07_attention.pdf p.80-81"
  },
  {
    "id": "k-w7-13",
    "set": "w7",
    "question": "Self-attention over 10 tokens. How many entries are in the attention matrix?",
    "options": [
      "10",
      "20",
      "45",
      "100"
    ],
    "answerIndex": 3,
    "explanation": "A = QK^T is n x n, so 10 x 10 = 100. This quadratic growth is why attention memory grows with sequence length.",
    "ref": "07_attention.pdf p.80"
  },
  {
    "id": "k-w7-14",
    "set": "w7",
    "question": "Causal mask on 5 tokens: how many of the 25 attention weights are kept?",
    "options": [
      "15",
      "10",
      "20",
      "25"
    ],
    "answerIndex": 0,
    "explanation": "Token i sees positions 1..i, so 1 + 2 + 3 + 4 + 5 = 15 kept and 10 blocked. 10 is the number masked out, not kept.",
    "ref": "07_attention.pdf p.99"
  },
  {
    "id": "k-w7-15",
    "set": "w7",
    "question": "In masked self-attention, can token 3 attend to token 2?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 0,
    "explanation": "Yes. Token i attends to all positions up to and including i; only later positions are blocked, since the decoder generates left to right.",
    "ref": "07_attention.pdf p.99"
  },
  {
    "id": "k-w7-16",
    "set": "w7",
    "question": "Without positional encoding, does self-attention know the word order?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. Self-attention treats the inputs as an unordered set; positional encodings are added to the embeddings to inject order.",
    "ref": "07_attention.pdf p.89"
  },
  {
    "id": "k-w7-17",
    "set": "w7",
    "question": "Sinusoidal positional encoding with d_model = 4. What is PE at pos = 0?",
    "options": [
      "[0, 0, 0, 0]",
      "[0, 1, 0, 1]",
      "[1, 0, 1, 0]",
      "[1, 1, 1, 1]"
    ],
    "answerIndex": 1,
    "explanation": "Even dimensions use sin(0) = 0 and odd dimensions use cos(0) = 1, giving [0, 1, 0, 1]. It is not all zeros because of the cosine terms.",
    "ref": "07_attention.pdf p.89"
  },
  {
    "id": "k-w7-18",
    "set": "w7",
    "question": "Multi-head attention: how are the head outputs combined?",
    "options": [
      "Averaged",
      "Max-pooled",
      "Concatenated, then multiplied by W^O",
      "Only the best head is kept"
    ],
    "answerIndex": 2,
    "explanation": "b^i = W^O [b^(i,1); b^(i,2)]: the heads are stacked and mixed by a learned output matrix, so every head contributes.",
    "ref": "07_attention.pdf p.86"
  },
  {
    "id": "k-w7-19",
    "set": "w7",
    "question": "In the decoder's cross-attention, the queries come from the encoder output.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 1,
    "explanation": "False. Keys and values come from the encoder output; the query comes from the decoder's masked self-attention output.",
    "ref": "07_attention.pdf p.103-104"
  },
  {
    "id": "k-w7-20",
    "set": "w7",
    "question": "Layer norm gives the same output for [1,2,3,4] and [2,4,6,8].",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "True. Each vector is normalised by its own mean and std, so both become about [-1.34, -0.45, 0.45, 1.34]. It uses one vector's statistics, not the batch's.",
    "ref": "07_attention.pdf p.88"
  },
  {
    "id": "k-w7-21",
    "set": "w7",
    "question": "Is BERT a left-to-right, decoder-only model like GPT?",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndex": 1,
    "explanation": "No. BERT is an encoder-only, bidirectional model that outputs contextual vectors for every token. GPT is the decoder-only, next-word-prediction style.",
    "ref": "07_attention.pdf p.90; Week 8 GPT"
  },
  {
    "id": "k-w7-22",
    "set": "w7",
    "question": "An autoregressive decoder keeps generating forever. What is the fix?",
    "options": [
      "Add an END token to the vocabulary",
      "Remove the positional encoding",
      "Use more attention heads",
      "Divide scores by sqrt(d_k)"
    ],
    "answerIndex": 0,
    "explanation": "The softmax runs over the vocabulary plus an END token, and generation stops when END is chosen. The other options do not tell the decoder when to stop.",
    "ref": "07_attention.pdf p.100-102"
  },
  {
    "id": "k-w7-23",
    "set": "w7",
    "question": "ViT: 64x64 image, 16x16 patches, plus a [class] token. How many input tokens?",
    "options": [
      "16",
      "5",
      "17",
      "257"
    ],
    "answerIndex": 2,
    "explanation": "64/16 = 4 patches per side, so 4 x 4 = 16 patches, plus 1 class token = 17. Forgetting the class token gives 16.",
    "ref": "07_attention.pdf p.118"
  },
  {
    "id": "k-w7-24",
    "set": "w7",
    "question": "Per the lecture, a CNN is self-attention restricted to a fixed receptive field.",
    "options": [
      "True",
      "False"
    ],
    "answerIndex": 0,
    "explanation": "True. CNN functions are a subset of self-attention functions; self-attention is like a CNN with a learnable receptive field.",
    "ref": "07_attention.pdf p.56"
  },
  {
    "id": "k-w7-25",
    "set": "w7",
    "question": "Optional: linear attention (RetNet/Mamba family) is self-attention without which part?",
    "options": [
      "The values V",
      "The softmax",
      "The queries Q",
      "The keys K"
    ],
    "answerIndex": 1,
    "explanation": "y(t) = sum over s <= t of v(s) k(s)^T q(t) keeps Q, K and V but drops the softmax, which allows a fixed-size recurrent state.",
    "ref": "07_attention.pdf p.114-115"
  }
]

export const kahootQuestions: readonly KahootQuestion[] = [...instructorDt, ...instructor, ...week6, ...week8, ...review]
