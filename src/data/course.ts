import type { CourseInfo } from './types'

export const course: CourseInfo = {
  "courseTitle": "CS610 Applied Machine Learning",
  "instructor": "YANG Xiaoyan (xyyang@smu.edu.sg)",
  "assessments": [
    {
      "component": "Attendance & participation",
      "weight": "10%",
      "detail": "Class attendance 5% (sign attendance on eLearn between 6:50pm and 9pm; email the instructor one day before if you will be absent) + Class participation 5% (prepare your name tent; ask thoughtful questions and give concise answers)."
    },
    {
      "component": "Assignments",
      "weight": "25%",
      "detail": "Two assignments, each worth 12.5%. Problem solving with machine learning techniques; write code in Python 3 in Jupyter notebook (.ipynb format). Code must run correctly; write concise code (no unnecessary variables/functions) and concise answers for explanation questions."
    },
    {
      "component": "Exam",
      "weight": "35%",
      "detail": "7:30pm on 13th Nov, Friday. No coding, no MCQ. Cheat sheet allowed: 1 A4 page, double-sided. Question styles: calculation, comparison, explanation and justification."
    },
    {
      "component": "Course Project",
      "weight": "30%",
      "detail": "Project group of 4 to 5 students. Breakdown: Proposal 3% (proposal slides, 8 slides max, submitted by end of week 6 / due in Week 7), Final presentation 13% (final oral presentation in Wk 10, 18 minutes per group), Final report 14% (Wk 11, 8 pages max). Workload should be evenly distributed; peer evaluation at the end of the term. Evaluation criteria: ability to reveal business problem (originality, applicability, extendibility), ability to apply ML techniques, justification of ML models, clarity/completeness/accuracy of report, good writing and proper references, innovation for inventing new methodology encouraged."
    }
  ],
  "schedule": [
    {
      "week": "Week 1 (28 Aug)",
      "topic": "Introduction and Naïve Bayes Classifiers"
    },
    {
      "week": "Week 2 (4 Sep)",
      "topic": "Regression and Regularization",
      "note": "Assignment 1 out"
    },
    {
      "week": "Week 3 (11 Sep)",
      "topic": "Logistic Regression and Performance Measures"
    },
    {
      "week": "Week 4 (18 Sep)",
      "topic": "Decision Trees and Ensemble Learning",
      "note": "Form project teams (in class of Week 4; submit names)"
    },
    {
      "week": "Week 5 (25 Sep)",
      "topic": "Neural Networks & Deep Learning",
      "note": "Assignment 1 in (due)"
    },
    {
      "week": "Week 6 (2 Oct)",
      "topic": "Convolutional Neural Network",
      "note": "Assignment 2 out"
    },
    {
      "week": "Recess week",
      "topic": "Recess week (no class)"
    },
    {
      "week": "Week 7 (16 Oct)",
      "topic": "Attention Models and Transformers",
      "note": "Project proposal due end-of-week (proposal slides by end of week 6, 8 slides max, 3%)"
    },
    {
      "week": "Week 8 (23 Oct)",
      "topic": "Introduction to Generative AI"
    },
    {
      "week": "Week 9 (30 Oct)",
      "topic": "Unsupervised Learning",
      "note": "Assignment 2 in (due)"
    },
    {
      "week": "Week 10 (6 Nov)",
      "topic": "Project Presentation",
      "note": "Final oral presentation, 13%, 18 minutes per group"
    },
    {
      "week": "Exam week (13 Nov)",
      "topic": "Exam",
      "note": "Exam at 7:30pm on 13th Nov, Friday (35%); final project report (14%, 8 pages max) due end-of-week"
    }
  ],
  "textbooks": [
    "Hands-on Machine Learning with Scikit-Learn & Tensorflow by Aurelien Geron",
    "Pattern Recognition and Machine Learning by Christopher M. Bishop",
    "Deep Learning by Ian Goodfellow, Yoshua Bengio and Aaron Courville",
    "Note: Students are not required to buy textbooks!"
  ],
  "notes": [
    "Plagiarism policy: plagiarism includes copy-paste from other classmates/seniors or from online resources. Plagiarism in assignments results in 0 marks + warning letter. Discussions among classmates are OK at model level ('You may want to try model XYZ') but NOT allowed at implementation level ('Multiply the two arrays together, you'll get the answer').",
    "Generative AI policy: you are NOT allowed to use GenAI for coding purposes. Think independently before searching for references or asking GenAI. When using GenAI, record your actions (which tool and prompt used, which lines changed and why).",
    "Academic integrity: all acts of academic dishonesty (plagiarism, cheating, fabrication, facilitation, unauthorized possession of exam questions, tampering with others' work) are serious offences; penalties range from zero marks for the component assessment to expulsion. When in doubt, consult the instructors — see the SMU Code of Academic Integrity.",
    "Prerequisites: Computational Thinking with Python (previously Python Programming and Data Analysis) and Statistical Thinking for Data Science. You should be able to code in Python + read documentation, articulate using probabilities and statistics, and know Linear Algebra and Calculus (will explain as we progress).",
    "Tools used: scikit-learn is the main programming package; other packages include numpy, scipy, pandas, matplotlib, keras, pytorch. Assignments are written in Python 3 in Jupyter notebooks (.ipynb).",
    "Course positioning: core course for both AI track and DSA track students; other tracks encouraged (Machine Learning + Business/Finance/Economics/Engineering/Science). Related follow-on courses: Deep Learning for Visual Recognition, NLP for Smart Assistants, Recommender Systems, Intro to Reinforcement Learning, Machine Learning Engineering (deployment), GenAI with LLMs, Prompt Engineering.",
    "Class format/expectations: evening classes (attendance signed on eLearn between 6:50pm and 9pm). Past student comments note the course is very difficult but very useful, heavy on mathematics, with lots of content requiring self-learning outside class hours and difficult (but practical) assignments.",
    "Project timeline: Wk 1-3 form groups of 4 or 5 members; Wk 4 submit names; Wk 4-6 research and confirm project topic and scope; Wk 7 submit proposal slides by end of week 6 (8 slides max, 3%); Wk 10 final oral presentation (13%, 18 minutes per group); Wk 11 final report (14%, 8 pages max). Start early!!"
  ]
}
