import { Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "fractions",
    title: "Fractions: Concept & Operations",
    description: "Master Fractions • 5 Interactive Lessons • Practice Quizzes",
    sections: [
      {
        id: 1,
        title: "Understanding Fractions",
        content:
          "Learn numerator, denominator, proper, improper, and mixed fractions.",
        concepts: [
          "A fraction represents part of a whole as numerator/denominator.",
          "The numerator is the top number (part), the denominator is the bottom number (whole).",
          "Proper fractions have numerator < denominator; improper have numerator >= denominator.",
          "Mixed numbers combine a whole number and a proper fraction.",
          "Fractions can be simplified by dividing top and bottom by their GCD.",
        ],
        examples: [
          {
            heading: "Example: Identify Parts",
            text: `In 3/4, 3 is numerator and 4 is denominator; it is a proper fraction.
In 7/4, it is improper; as a mixed number it is 1 3/4.`,
          },
          {
            heading: "Example: Simplify",
            text: `12/16 simplifies by GCD 4 to 3/4. 10/15 simplifies by GCD 5 to 2/3.`,
          },
        ],
      },
      {
        id: 2,
        title: "Adding Fractions",
        content:
          "Add fractions with same denominator and different denominators using common look.",
        concepts: [
          "To add same-denominator fractions, add numerators and keep denominator.",
          "To add different denominators, find least common denominator (LCD).",
          "Convert each fraction to equivalent fractions with the LCD, add numerators.",
          "Simplify the result and convert improper answers to mixed numbers if needed.",
        ],
        examples: [
          {
            heading: "Example: Same Denominator",
            text: `1/6 + 2/6 = 3/6 = 1/2.`,
          },
          {
            heading: "Example: Different Denominators",
            text: `2/3 + 1/4 -> LCD 12, 8/12 + 3/12 = 11/12.`,
          },
        ],
      },
      {
        id: 3,
        title: "Subtracting Fractions",
        content:
          "Subtract fractions using equivalent denominators and simplify the result.",
        concepts: [
          "For same denominators, subtract numerators and keep denominator.",
          "For different denominators, convert to LCD before subtracting.",
          "If result is negative, keep sign and simplify absolute value.",
          "Mixed numbers may be borrowed from whole part before subtraction.",
        ],
        examples: [
          {
            heading: "Example: Same Denominator",
            text: `5/8 - 2/8 = 3/8.`,
          },
          {
            heading: "Example: Different Denominators",
            text: `3/4 - 1/6 -> LCD 12, 9/12 - 2/12 = 7/12.`,
          },
        ],
      },
      {
        id: 4,
        title: "Multiplying Fractions",
        content:
          "Multiply numerators and denominators, simplify before or after multiplication.",
        concepts: [
          "Multiply fractions by multiplying the numerators and denominators.",
          "Simplify by cross-canceling before multiplying to keep numbers smaller.",
          "Multiply a fraction by a whole number by treating whole as /1.",
          "If product is improper, convert to mixed number.",
        ],
        examples: [
          {
            heading: "Example: Fraction × Fraction",
            text: `2/5 × 3/4 = 6/20 = 3/10.`,
          },
          {
            heading: "Example: Fraction × Whole Number",
            text: `3/7 × 5 = 15/7 = 2 1/7.`,
          },
        ],
      },
      {
        id: 5,
        title: "Dividing Fractions",
        content:
          "Use the reciprocal (invert second fraction) and multiply; simplify the answer.",
        concepts: [
          "To divide by a fraction, multiply by its reciprocal (flip numerator and denominator).",
          "First convert whole numbers to fractions (n/1) when needed.",
          "After multiplication, simplify and convert improper fraction as needed.",
          "Dividing by 1 gives the same fraction; dividing by same fraction gives 1.",
        ],
        examples: [
          {
            heading: "Example: Fraction ÷ Fraction",
            text: `3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8.`,
          },
          {
            heading: "Example: Whole Number ÷ Fraction",
            text: `4 ÷ 2/3 = 4/1 × 3/2 = 12/2 = 6.`,
          },
        ],
      },
    ],
    quizzes: [
      { id: "quiz-1", sectionId: 1, question: "Which fraction is proper?", options: ["5/4", "6/6", "3/5", "7/3"], correctAnswer: 2, explanation: "Proper fractions have numerator less than denominator." },
      { id: "quiz-2", sectionId: 1, question: "What is simplest form of 8/12?", options: ["2/3", "4/6", "8/12", "3/4"], correctAnswer: 0, explanation: "Divide numerator and denominator by GCD 4." },
      { id: "quiz-3", sectionId: 1, question: "Convert 9/4 to a mixed number.", options: ["2 1/4", "1 1/4", "2 3/4", "3 1/4"], correctAnswer: 1, explanation: "9/4 = 2 whole + 1/4, so 2 1/4." },
      { id: "quiz-4", sectionId: 1, question: "In 7/8, denominator indicates...", options: ["Parts needed", "Parts you have", "Sum of parts", "Whole number"], correctAnswer: 0, explanation: "Denominator is total equal parts in the whole." },
      { id: "quiz-5", sectionId: 1, question: "Which is equivalent to 2/3?", options: ["4/6", "3/5", "5/7", "1/2"], correctAnswer: 0, explanation: "Multiply top and bottom by 2." },
      { id: "quiz-6", sectionId: 2, question: "2/9 + 3/9 =", options: ["5/9", "1/2", "2/3", "1"], correctAnswer: 0, explanation: "Same denominator: add numerators 2+3=5." },
      { id: "quiz-7", sectionId: 2, question: "1/2 + 1/3 =", options: ["5/6", "2/5", "1/5", "3/4"], correctAnswer: 0, explanation: "LCD 6: 3/6 + 2/6 = 5/6." },
      { id: "quiz-8", sectionId: 2, question: "3/4 + 2/8 simplifies to", options: ["1", "7/8", "1 1/8", "5/6"], correctAnswer: 0, explanation: "2/8=1/4, 3/4+1/4=1." },
      { id: "quiz-9", sectionId: 2, question: "3/5 + 1/10 =", options: ["7/10", "4/15", "3/10", "2/5"], correctAnswer: 0, explanation: "LCD 10: 6/10 + 1/10 = 7/10." },
      { id: "quiz-10", sectionId: 2, question: "Add: 1 2/3 + 2 1/4 =", options: ["3 11/12", "4 5/12", "3 1/12", "4"], correctAnswer: 0, explanation: "Convert to improper: 5/3+9/4=20/12+27/12=47/12=3 11/12." },
      { id: "quiz-11", sectionId: 3, question: "5/6 - 2/6 =", options: ["3/6", "1/2", "2/3", "1/3"], correctAnswer: 1, explanation: "Subtract numerators: 3/6=1/2." },
      { id: "quiz-12", sectionId: 3, question: "3/4 - 1/2 =", options: ["1/4", "1/2", "2/4", "3/5"], correctAnswer: 0, explanation: "LCD 4: 3/4 - 2/4 = 1/4." },
      { id: "quiz-13", sectionId: 3, question: "2 1/2 - 1 3/4 =", options: ["3/4", "2/4", "1 3/4", "5/4"], correctAnswer: 0, explanation: "Convert: 5/2 - 7/4 = 10/4 - 7/4 = 3/4." },
      { id: "quiz-14", sectionId: 3, question: "7/8 - 3/8 =", options: ["1/2", "4/8", "5/8", "3/4"], correctAnswer: 0, explanation: "7/8 - 3/8 = 4/8 = 1/2." },
      { id: "quiz-15", sectionId: 3, question: "Which is correct: 4/5 - 2/3 =", options: ["2/15", "6/15", "8/15", "1/15"], correctAnswer: 0, explanation: "LCD 15: 12/15 - 10/15 = 2/15." },
      { id: "quiz-16", sectionId: 4, question: "2/3 × 3/5 =", options: ["2/5", "6/15", "1", "3/8"], correctAnswer: 0, explanation: "Multiply across: 6/15 = 2/5." },
      { id: "quiz-17", sectionId: 4, question: "4/7 × 7/2 =", options: ["2", "28/14", "4/2", "7/2"], correctAnswer: 0, explanation: "Cancel 7: 4/1×1/2=2." },
      { id: "quiz-18", sectionId: 4, question: "3/4 × 8 =", options: ["6", "2", "3/2", "8"], correctAnswer: 0, explanation: "8/1×3/4=24/4=6." },
      { id: "quiz-19", sectionId: 4, question: "(5/6) × (12/15) simplified =", options: ["2/3", "1/2", "3/5", "4/5"], correctAnswer: 0, explanation: "5/6×12/15=60/90=2/3." },
      { id: "quiz-20", sectionId: 4, question: "1 1/2 × 2/3 =", options: ["1", "1/2", "2", "3/4"], correctAnswer: 0, explanation: "1 1/2 × 2/3 = 3/2 × 2/3 = 1." },
      { id: "quiz-21", sectionId: 5, question: "3/4 ÷ 1/2 =", options: ["3/2", "1/2", "3/8", "2"], correctAnswer: 0, explanation: "Multiply by reciprocal: 3/4×2/1=3/2." },
      { id: "quiz-22", sectionId: 5, question: "5 ÷ 2/3 =", options: ["7 1/2", "3 2/3", "8", "2 1/2"], correctAnswer: 0, explanation: "5/1×3/2=15/2=7 1/2." },
      { id: "quiz-23", sectionId: 5, question: "2/5 ÷ 4/7 =", options: ["7/10", "14/20", "5/8", "7/2"], correctAnswer: 0, explanation: "2/5×7/4=14/20=7/10." },
      { id: "quiz-24", sectionId: 5, question: "6/7 ÷ 3 =", options: ["2/7", "18/7", "6/21", "3/7"], correctAnswer: 0, explanation: "6/7×1/3=6/21=2/7." },
      { id: "quiz-25", sectionId: 5, question: "1/3 ÷ 2/9 =", options: ["3/2", "1/6", "2/27", "3"], correctAnswer: 0, explanation: "1/3×9/2=9/6=3/2." },
    ],
  },
  {
    id: "derivatives",
    title: "Derivatives: Rates of Change",
    description: "Calculus Fundamentals • 5 Interactive Lessons • Practice Quizzes",
    sections: [
      {
        id: 1,
        title: "Understanding Derivatives",
        content:
          "Learn what derivatives represent, instantaneous rate of change, and slope concepts.",
        concepts: [
          "A derivative measures how fast a function is changing at a specific point.",
          "Geometrically, the derivative is the slope of the tangent line to a curve.",
          "Instantaneous rate of change is the derivative at one moment in time.",
          "The derivative of a function f at x is written as f'(x) or df/dx.",
          "Derivatives help us understand velocity, acceleration, and optimization problems.",
        ],
        examples: [
          {
            heading: "Example: Slope Interpretation",
            text: `If f(x) = x², the derivative f'(x) = 2x. At x=3, f'(3)=6, meaning the slope is 6.`,
          },
          {
            heading: "Example: Real World",
            text: `If position is s(t) = 5t, velocity (derivative) is v(t) = 5 units per time.`,
          },
        ],
      },
      {
        id: 2,
        title: "Power Rule & Basic Rules",
        content:
          "Apply power rule, constant rule, sum rule, and product rule for derivatives.",
        concepts: [
          "Power Rule: d/dx[x^n] = n·x^(n-1).",
          "Constant Rule: d/dx[c] = 0 (derivative of constant is zero).",
          "Sum Rule: d/dx[f+g] = f'(x) + g'(x).",
          "Product Rule: d/dx[f·g] = f'·g + f·g'.",
          "Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x).",
        ],
        examples: [
          {
            heading: "Example: Power Rule",
            text: `d/dx[x³] = 3x². d/dx[x⁴] = 4x³.`,
          },
          {
            heading: "Example: Sum Rule",
            text: `d/dx[x² + 3x] = 2x + 3.`,
          },
        ],
      },
      {
        id: 3,
        title: "Trigonometric & Exponential Derivatives",
        content:
          "Find derivatives of sin, cos, tan, e^x, and logarithmic functions.",
        concepts: [
          "d/dx[sin(x)] = cos(x).",
          "d/dx[cos(x)] = -sin(x).",
          "d/dx[tan(x)] = sec²(x).",
          "d/dx[e^x] = e^x.",
          "d/dx[ln(x)] = 1/x.",
        ],
        examples: [
          {
            heading: "Example: Trig Functions",
            text: `d/dx[sin(x) + cos(x)] = cos(x) - sin(x).`,
          },
          {
            heading: "Example: Exponential",
            text: `d/dx[e^(3x)] = 3e^(3x) (using chain rule).`,
          },
        ],
      },
      {
        id: 4,
        title: "Critical Points & Optimization",
        content:
          "Find critical points where derivative is zero and use for maxima/minima.",
        concepts: [
          "Critical points occur where f'(x) = 0 or f'(x) is undefined.",
          "Local maximum: f'(x) changes from positive to negative.",
          "Local minimum: f'(x) changes from negative to positive.",
          "Second derivative test: if f''(x) > 0, it's a minimum; if f''(x) < 0, it's a maximum.",
          "Applications: maximizing profit, minimizing cost, optimizing volume.",
        ],
        examples: [
          {
            heading: "Example: Find Critical Points",
            text: `f(x) = x² - 4x. f'(x) = 2x - 4 = 0 gives x = 2 (critical point).`,
          },
          {
            heading: "Example: Optimization",
            text: `f(x) = -x² + 6x. f'(x) = -2x + 6 = 0 gives x = 3 (maximum at x=3).`,
          },
        ],
      },
      {
        id: 5,
        title: "Applications of Derivatives",
        content:
          "Use derivatives for velocity, acceleration, related rates, and curve sketching.",
        concepts: [
          "Velocity is the derivative of position: v = ds/dt.",
          "Acceleration is the derivative of velocity: a = dv/dt.",
          "Related rates: use chain rule to find how variables change together.",
          "Curve sketching: use derivatives to find critical points, inflection points, and behavior.",
          "L'Hôpital's Rule: lim[f/g] = lim[f'/g'] for indeterminate forms.",
        ],
        examples: [
          {
            heading: "Example: Velocity & Acceleration",
            text: `If s(t) = 2t³, then v(t) = 6t² and a(t) = 12t.`,
          },
          {
            heading: "Example: Related Rates",
            text: `If volume V = x³ and dx/dt = 2, find dV/dt. Answer: dV/dt = 3x²·2 = 6x².`,
          },
        ],
      },
    ],
    quizzes: [
      { id: "deriv-quiz-1", sectionId: 1, question: "The derivative represents the ___ of a curve.", options: ["Height", "Slope of tangent line", "Area under curve", "Y-intercept"], correctAnswer: 1, explanation: "Derivative is the slope of the tangent line at a point." },
      { id: "deriv-quiz-2", sectionId: 1, question: "If f(x) = x², what is f'(x)?", options: ["x", "2x", "x/2", "1"], correctAnswer: 1, explanation: "Using power rule: d/dx[x²] = 2x." },
      { id: "deriv-quiz-3", sectionId: 1, question: "Velocity is the derivative of ___.", options: ["Acceleration", "Position", "Time", "Distance"], correctAnswer: 1, explanation: "Velocity v = ds/dt (derivative of position with respect to time)." },
      { id: "deriv-quiz-4", sectionId: 1, question: "What is d/dx[5]?", options: ["5", "0", "5x", "1"], correctAnswer: 1, explanation: "Derivative of a constant is zero." },
      { id: "deriv-quiz-5", sectionId: 1, question: "The notation f'(x) means ___.", options: ["f times x", "Derivative of f", "f equals x", "Inverse of f"], correctAnswer: 1, explanation: "f'(x) is the standard notation for the derivative of f." },
      { id: "deriv-quiz-6", sectionId: 2, question: "d/dx[x⁴] =", options: ["4x³", "x⁵", "4x⁴", "x⁴"], correctAnswer: 0, explanation: "Power rule: n·x^(n-1) = 4·x³." },
      { id: "deriv-quiz-7", sectionId: 2, question: "d/dx[x³ + 2x] =", options: ["3x² + 2", "3x² + 2x", "x³ + 2", "3x + 2"], correctAnswer: 0, explanation: "Sum rule: d/dx[x³] + d/dx[2x] = 3x² + 2." },
      { id: "deriv-quiz-8", sectionId: 2, question: "d/dx[3x⁵] =", options: ["3x⁴", "15x⁴", "3x⁵", "5x⁴"], correctAnswer: 1, explanation: "Constant multiple: 3·5x⁴ = 15x⁴." },
      { id: "deriv-quiz-9", sectionId: 2, question: "Using product rule, d/dx[x·sin(x)] =", options: ["x·cos(x) + sin(x)", "cos(x)", "x·sin(x)", "sin(x) + cos(x)"], correctAnswer: 0, explanation: "f'g + fg': 1·sin(x) + x·cos(x)." },
      { id: "deriv-quiz-10", sectionId: 2, question: "d/dx[x² - 4x + 1] =", options: ["2x - 4", "x - 4", "2x + 1", "x² - 4"], correctAnswer: 0, explanation: "2x - 4 + 0 = 2x - 4." },
      { id: "deriv-quiz-11", sectionId: 3, question: "d/dx[sin(x)] =", options: ["cos(x)", "-cos(x)", "sin(x)", "tan(x)"], correctAnswer: 0, explanation: "Derivative of sin(x) is cos(x)." },
      { id: "deriv-quiz-12", sectionId: 3, question: "d/dx[e^x] =", options: ["e^(x-1)", "e^x", "x·e^(x-1)", "1"], correctAnswer: 1, explanation: "The derivative of e^x is e^x." },
      { id: "deriv-quiz-13", sectionId: 3, question: "d/dx[ln(x)] =", options: ["1", "1/x", "x", "ln(x)"], correctAnswer: 1, explanation: "Derivative of natural log is 1/x." },
      { id: "deriv-quiz-14", sectionId: 3, question: "d/dx[cos(x)] =", options: ["sin(x)", "-sin(x)", "cos(x)", "tan(x)"], correctAnswer: 1, explanation: "Derivative of cos(x) is -sin(x)." },
      { id: "deriv-quiz-15", sectionId: 3, question: "d/dx[e^(2x)] using chain rule =", options: ["e^(2x)", "2e^(2x)", "e^(2x)/2", "2xe^(2x)"], correctAnswer: 1, explanation: "Chain rule: 2·e^(2x)." },
      { id: "deriv-quiz-16", sectionId: 4, question: "Critical points occur where ___.", options: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = 1"], correctAnswer: 1, explanation: "Critical points are where f'(x) = 0 or undefined." },
      { id: "deriv-quiz-17", sectionId: 4, question: "For f(x) = x², the critical point is at ___.", options: ["x = 0", "x = 1", "x = 2", "No critical point"], correctAnswer: 0, explanation: "f'(x) = 2x = 0 gives x = 0." },
      { id: "deriv-quiz-18", sectionId: 4, question: "At a local maximum, f'(x) changes from ___.", options: ["Negative to positive", "Positive to negative", "Zero to positive", "Positive to zero"], correctAnswer: 1, explanation: "f'(x) > 0 before max, then f'(x) < 0 after." },
      { id: "deriv-quiz-19", sectionId: 4, question: "If f''(x) > 0 at critical point, it's a ___.", options: ["Maximum", "Minimum", "Inflection point", "Discontinuity"], correctAnswer: 1, explanation: "Positive second derivative indicates a local minimum." },
      { id: "deriv-quiz-20", sectionId: 4, question: "Find critical point of f(x) = x² - 6x + 5.", options: ["x = 3", "x = 6", "x = 1", "x = 5"], correctAnswer: 0, explanation: "f'(x) = 2x - 6 = 0 gives x = 3." },
      { id: "deriv-quiz-21", sectionId: 5, question: "Acceleration is the derivative of ___.", options: ["Position", "Distance", "Velocity", "Speed"], correctAnswer: 2, explanation: "Acceleration a = dv/dt (derivative of velocity)." },
      { id: "deriv-quiz-22", sectionId: 5, question: "If s(t) = t³, find velocity v(t).", options: ["3t²", "t²", "3t", "t³"], correctAnswer: 0, explanation: "v = ds/dt = 3t²." },
      { id: "deriv-quiz-23", sectionId: 5, question: "Related rates use the ___ rule.", options: ["Product", "Quotient", "Chain", "Power"], correctAnswer: 2, explanation: "Chain rule allows us to find how variables change together." },
      { id: "deriv-quiz-24", sectionId: 5, question: "Curve sketching uses derivatives to find ___.", options: ["Area", "Critical points & behavior", "Perimeter", "Volume"], correctAnswer: 1, explanation: "Derivatives help identify critical points, maxima, minima, and behavior." },
      { id: "deriv-quiz-25", sectionId: 5, question: "d/dt[2t³] at t=2 equals ___.", options: ["12", "24", "48", "8"], correctAnswer: 2, explanation: "d/dt[2t³] = 6t², at t=2: 6·4 = 24." },
    ],
  },
  {
    id: "integrals",
    title: "Integrals: Accumulation & Area",
    description: "Calculus Integration • 5 Interactive Lessons • Practice Quizzes",
    sections: [
      {
        id: 1,
        title: "Understanding Integrals",
        content:
          "Learn what integrals represent, accumulation, and the relationship with derivatives.",
        concepts: [
          "An integral measures the accumulation of a quantity over an interval.",
          "Geometrically, an integral is the area under a curve.",
          "Indefinite integral is the antiderivative: ∫f(x)dx = F(x) + C.",
          "Definite integral gives the net area between x=a and x=b: ∫[a,b]f(x)dx.",
          "The Fundamental Theorem of Calculus links derivatives and integrals.",
        ],
        examples: [
          {
            heading: "Example: Area Under Curve",
            text: `∫[0,2] x dx represents area under y=x from x=0 to x=2.`,
          },
          {
            heading: "Example: Indefinite Integral",
            text: `∫ 2x dx = x² + C (antiderivative of 2x).`,
          },
        ],
      },
      {
        id: 2,
        title: "Power Rule & Basic Integration",
        content:
          "Apply power rule, constant rule, sum rule to find antiderivatives.",
        concepts: [
          "Power Rule: ∫ x^n dx = x^(n+1)/(n+1) + C (n ≠ -1).",
          "Constant Rule: ∫ c dx = cx + C.",
          "Sum Rule: ∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx.",
          "Constant Multiple: ∫ c·f(x)dx = c·∫f(x)dx.",
          "The constant of integration C is essential for indefinite integrals.",
        ],
        examples: [
          {
            heading: "Example: Power Rule",
            text: `∫ x³ dx = x⁴/4 + C.`,
          },
          {
            heading: "Example: Sum Rule",
            text: `∫ (x² + 3x) dx = x³/3 + 3x²/2 + C.`,
          },
        ],
      },
      {
        id: 3,
        title: "Trigonometric & Exponential Integrals",
        content:
          "Find antiderivatives of sin, cos, e^x, and logarithmic functions.",
        concepts: [
          "∫ sin(x) dx = -cos(x) + C.",
          "∫ cos(x) dx = sin(x) + C.",
          "∫ e^x dx = e^x + C.",
          "∫ 1/x dx = ln|x| + C.",
          "∫ 1/(1+x²) dx = arctan(x) + C.",
        ],
        examples: [
          {
            heading: "Example: Trig Functions",
            text: `∫ sin(x) dx = -cos(x) + C.`,
          },
          {
            heading: "Example: Exponential",
            text: `∫ e^x dx = e^x + C.`,
          },
        ],
      },
      {
        id: 4,
        title: "Definite Integrals & The Fundamental Theorem",
        content:
          "Evaluate definite integrals and apply the Fundamental Theorem of Calculus.",
        concepts: [
          "Definite integral: ∫[a,b]f(x)dx = F(b) - F(a), where F is antiderivative.",
          "Fundamental Theorem: d/dx[∫[a,x]f(t)dt] = f(x).",
          "Net area: definite integral can be negative if region is below x-axis.",
          "Properties: ∫[a,b] = -∫[b,a], ∫[a,a] = 0.",
          "Linearity: ∫[a,b][c·f + d·g] = c∫[a,b]f + d∫[a,b]g.",
        ],
        examples: [
          {
            heading: "Example: Definite Integral",
            text: `∫[0,2] x dx = [x²/2] from 0 to 2 = 2 - 0 = 2.`,
          },
          {
            heading: "Example: Fundamental Theorem",
            text: `∫[1,3] (2x) dx = [x²] from 1 to 3 = 9 - 1 = 8.`,
          },
        ],
      },
      {
        id: 5,
        title: "Applications of Integrals",
        content:
          "Use integrals to find areas, volumes, work, and other accumulated quantities.",
        concepts: [
          "Area between curves: ∫[a,b][f(x) - g(x)]dx.",
          "Volume of revolution: V = π∫[a,b][f(x)]² dx (disk method).",
          "Work: W = ∫ F(x) dx over displacement.",
          "Average value: f_avg = 1/(b-a)·∫[a,b]f(x)dx.",
          "Applications: physics (displacement, work), economics (consumer surplus), probability.",
        ],
        examples: [
          {
            heading: "Example: Area Between Curves",
            text: `Area between y=x² and y=x from x=0 to x=1: ∫[0,1](x - x²)dx = 1/2 - 1/3 = 1/6.`,
          },
          {
            heading: "Example: Average Value",
            text: `Average of f(x)=x² on [0,2]: 1/2·∫[0,2]x² dx = 1/2·8/3 = 4/3.`,
          },
        ],
      },
    ],
    quizzes: [
      { id: "integ-quiz-1", sectionId: 1, question: "An integral represents the ___ under a curve.", options: ["Slope", "Height", "Area", "Length"], correctAnswer: 2, explanation: "Integral is the area under the curve." },
      { id: "integ-quiz-2", sectionId: 1, question: "The antiderivative of 2x is ___.", options: ["x", "2", "x²", "2x²"], correctAnswer: 2, explanation: "∫ 2x dx = x² + C." },
      { id: "integ-quiz-3", sectionId: 1, question: "What does the constant C represent?", options: ["A specific area", "Constant of integration", "A coefficient", "The derivative"], correctAnswer: 1, explanation: "C is the constant of integration in indefinite integrals." },
      { id: "integ-quiz-4", sectionId: 1, question: "The Fundamental Theorem of Calculus relates ___ and ___.", options: ["Area and perimeter", "Derivatives and integrals", "Sine and cosine", "Exponentials and logarithms"], correctAnswer: 1, explanation: "FTC links derivatives and integrals as inverses." },
      { id: "integ-quiz-5", sectionId: 1, question: "∫[a,a]f(x)dx equals ___.", options: ["f(a)", "1", "0", "-1"], correctAnswer: 2, explanation: "Integral from a point to itself is zero." },
      { id: "integ-quiz-6", sectionId: 2, question: "∫ x² dx =", options: ["x³ + C", "x³/3 + C", "2x + C", "x + C"], correctAnswer: 1, explanation: "Power rule: x^(n+1)/(n+1) + C = x³/3 + C." },
      { id: "integ-quiz-7", sectionId: 2, question: "∫ 5 dx =", options: ["5x + C", "5 + C", "1 + C", "x + C"], correctAnswer: 0, explanation: "Constant rule: ∫ c dx = cx + C = 5x + C." },
      { id: "integ-quiz-8", sectionId: 2, question: "∫ (x + 3) dx =", options: ["x² + 3x + C", "x²/2 + 3x + C", "x + 3x + C", "x²/2 + 3 + C"], correctAnswer: 1, explanation: "Sum rule: ∫ x dx + ∫ 3 dx = x²/2 + 3x + C." },
      { id: "integ-quiz-9", sectionId: 2, question: "∫ 4x³ dx =", options: ["4x⁴ + C", "x⁴ + C", "x⁴ + C", "12x² + C"], correctAnswer: 0, explanation: "Constant multiple: 4·(x⁴/4) + C = x⁴ + C." },
      { id: "integ-quiz-10", sectionId: 2, question: "∫ (2x² - x) dx =", options: ["2x³/3 - x²/2 + C", "2x³ - x² + C", "x³ - x² + C", "4x - 1 + C"], correctAnswer: 0, explanation: "2·x³/3 - x²/2 + C." },
      { id: "integ-quiz-11", sectionId: 3, question: "∫ cos(x) dx =", options: ["-sin(x) + C", "sin(x) + C", "cos(x) + C", "sec(x) + C"], correctAnswer: 1, explanation: "Antiderivative of cos is sin." },
      { id: "integ-quiz-12", sectionId: 3, question: "∫ e^x dx =", options: ["e^(x+1) + C", "e^x + C", "xe^(x-1) + C", "1 + C"], correctAnswer: 1, explanation: "Antiderivative of e^x is e^x." },
      { id: "integ-quiz-13", sectionId: 3, question: "∫ 1/x dx =", options: ["x²/2 + C", "ln|x| + C", "1 + C", "-1/x + C"], correctAnswer: 1, explanation: "Antiderivative of 1/x is ln|x|." },
      { id: "integ-quiz-14", sectionId: 3, question: "∫ sin(x) dx =", options: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "tan(x) + C"], correctAnswer: 1, explanation: "Antiderivative of sin is -cos." },
      { id: "integ-quiz-15", sectionId: 3, question: "∫ 3e^x dx =", options: ["3e^x + C", "e^x + C", "3e^(x+1) + C", "xe^x + C"], correctAnswer: 0, explanation: "Constant multiple: 3·e^x + C." },
      { id: "integ-quiz-16", sectionId: 4, question: "∫[0,2] 2x dx =", options: ["2", "4", "1", "6"], correctAnswer: 1, explanation: "[x²] from 0 to 2 = 4 - 0 = 4." },
      { id: "integ-quiz-17", sectionId: 4, question: "∫[1,3] 1 dx =", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "[x] from 1 to 3 = 3 - 1 = 2." },
      { id: "integ-quiz-18", sectionId: 4, question: "∫[0,1] x² dx =", options: ["1/2", "1/3", "1", "2/3"], correctAnswer: 1, explanation: "[x³/3] from 0 to 1 = 1/3 - 0 = 1/3." },
      { id: "integ-quiz-19", sectionId: 4, question: "∫[a,b]f(x)dx = -∫[b,a]f(x)dx is a property: ___.", options: ["Commutative", "Reversal", "Associative", "Distributive"], correctAnswer: 1, explanation: "Reversing limits changes sign (reversal property)." },
      { id: "integ-quiz-20", sectionId: 4, question: "∫[1,2] (3x²) dx =", options: ["4", "5", "7", "7"], correctAnswer: 2, explanation: "[x³] from 1 to 2 = 8 - 1 = 7." },
      { id: "integ-quiz-21", sectionId: 5, question: "Area between y=x and y=x² from x=0 to x=1: ___.", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: 0, explanation: "∫[0,1](x - x²)dx = 1/2 - 1/3 = 1/6." },
      { id: "integ-quiz-22", sectionId: 5, question: "Average value of f on [a,b] is ___.", options: ["f(a)+f(b)/2", "1/(b-a)·∫[a,b]f", "∫[a,b]f", "f(b)-f(a)"], correctAnswer: 1, explanation: "Average = 1/(b-a)·∫[a,b]f(x)dx." },
      { id: "integ-quiz-23", sectionId: 5, question: "Volume by disk method uses ___.", options: ["V = ∫A·dx", "V = π∫[f(x)]² dx", "V = 2π∫xf dx", "V = 1/3·bh"], correctAnswer: 1, explanation: "Disk method: V = π∫[a,b][f(x)]² dx." },
      { id: "integ-quiz-24", sectionId: 5, question: "Work integral is W = ___.", options: ["∫[a,b]v dx", "∫[a,b]F(x)dx", "∫[a,b]ma dx", "∫[a,b]1/x dx"], correctAnswer: 1, explanation: "Work W = ∫ F(x) dx over displacement." },
      { id: "integ-quiz-25", sectionId: 5, question: "Average value of f(x)=x on [0,2]: ___.", options: ["1/2", "1", "3/2", "2"], correctAnswer: 1, explanation: "1/2·∫[0,2]x dx = 1/2·2 = 1." },
    ],
  },
];
