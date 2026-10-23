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

export const kahootQuestions: readonly KahootQuestion[] = [...instructorDt, ...instructor, ...week6, ...week8]
