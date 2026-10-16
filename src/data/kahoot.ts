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
    id: 'instructor-dt',
    title: 'Instructor Kahoot: Decision Trees',
    blurb: 'The 5 decision-tree questions played in class, with the answers and worked entropy from the instructor note (Week 5 folder).',
  },
  {
    id: 'instructor',
    title: 'Instructor Kahoot: Ensembles & NN',
    blurb: 'The 9 questions played in class, with the answers and explanations from the instructor note (Week 6 folder).',
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

export const kahootQuestions: readonly KahootQuestion[] = [...instructorDt, ...instructor, ...week6]
