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
];
