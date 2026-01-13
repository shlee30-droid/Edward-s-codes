import { Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "systems-of-equations",
    title: "Systems of Equations",
    description:
      "Master Linear Algebra • 9 Interactive Lessons • Comprehensive Quizzes",
    sections: [
      {
        id: 1,
        title: "What Is a System of Equations?",
        content: "Introduction to systems of linear equations in two variables.",
        concepts: [
          "A system of equations is a set of two or more equations with the same variables.",
          "In middle school, we usually work with two equations in x and y.",
          "A solution of the system is a pair (x, y) that makes every equation true at the same time.",
          "Graphically, each equation is a line. The solution is the point where the lines intersect.",
        ],
        examples: [
          {
            heading: "Example 1: Checking a Solution",
            text: `Consider the system:
Equation 1: x + y = 5
Equation 2: x - y = 1

Check if (3, 2) is a solution.
Plug into equation 1: 3 + 2 = 5, which is true.
Plug into equation 2: 3 - 2 = 1, which is also true.
So (3, 2) is a solution of the system.`,
          },
          {
            heading: "Example 2: A Non-Solution",
            text: `Use the same system:
x + y = 5
x - y = 1

Check (4, 1).
Equation 1: 4 + 1 = 5, true.
Equation 2: 4 - 1 = 3, not 1, so it is false.
So (4, 1) is not a solution of the system.`,
          },
        ],
      },
      {
        id: 2,
        title: "Types of Solutions",
        content: "One solution, no solution, or infinitely many solutions.",
        concepts: [
          "A system can have one solution, no solution, or infinitely many solutions.",
          "One solution: the lines cross at exactly one point.",
          "No solution: the lines are parallel and never meet.",
          "Infinitely many solutions: the equations describe the same line.",
        ],
        examples: [
          {
            heading: "Example 1: One Solution",
            text: `System:
y = x + 1
y = -x + 5

The lines have different slopes, so they intersect at one point.
Solving gives x = 2 and y = 3.
Solution: (2, 3).`,
          },
          {
            heading: "Example 2: No Solution",
            text: `System:
y = 2x + 1
y = 2x + 5

The lines have the same slope (2) but different y-intercepts.
They are parallel. So the system has no solution.`,
          },
          {
            heading: "Example 3: Infinitely Many Solutions",
            text: `System:
y = 3x + 2
2y = 6x + 4

The second equation simplifies to y = 3x + 2, the same as the first.
So there are infinitely many solutions on that line.`,
          },
        ],
      },
      {
        id: 3,
        title: "Substitution Method: Basics",
        content:
          "Solving systems by substitution when one equation is solved for a variable.",
        concepts: [
          "Substitution works well when one equation already has a variable alone, like x = 3y + 1.",
          "Idea: solve one equation for a variable, substitute into the other equation, then solve.",
          "After finding one variable, substitute back to find the other.",
        ],
        examples: [
          {
            heading: "Example 1: Simple Substitution",
            text: `System:
x = 2y + 1
x + y = 10

Substitute x from the first into the second:
(2y + 1) + y = 10 gives 3y + 1 = 10.
Then 3y = 9, so y = 3 and x = 7.
Solution: (7, 3).`,
          },
          {
            heading: "Example 2: Rearranging First",
            text: `System:
x + y = 6
2x - y = 3

Solve the first equation for x: x = 6 - y.
Substitute into the second: 2(6 - y) - y = 3.
So 12 - 2y - y = 3, then 12 - 3y = 3, so -3y = -9, y = 3, x = 3.
Solution: (3, 3).`,
          },
        ],
      },
      {
        id: 4,
        title: "Substitution Method: Word Problems",
        content: "Using substitution to solve real-world systems.",
        concepts: [
          "Many word problems can be written as systems in x and y.",
          "Choose variables that represent quantities in the story.",
          "Translate sentences into equations, then use substitution.",
        ],
        examples: [
          {
            heading: "Example 1: Tickets Problem",
            text: `A movie theater sold 50 tickets in total.
Adult tickets cost 8 dollars, student tickets cost 5 dollars.
The total money collected was 340 dollars.

Let a be the number of adult tickets and s be the number of student tickets.
Equations:
a + s = 50
8a + 5s = 340

From a + s = 50, a = 50 - s.
Substitute: 8(50 - s) + 5s = 340.
So 400 - 8s + 5s = 340, then 400 - 3s = 340, so -3s = -60 and s = 20.
Then a = 30. So 30 adult tickets and 20 student tickets.`,
          },
        ],
      },
      {
        id: 5,
        title: "Elimination Method: Basics",
        content: "Solving systems by adding or subtracting equations.",
        concepts: [
          "Elimination means combining equations to remove one variable.",
          "We may add or subtract equations directly when coefficients line up.",
          "Sometimes we multiply one or both equations first to make coefficients match.",
        ],
        examples: [
          {
            heading: "Example 1: Direct Elimination",
            text: `System:
x + y = 8
x - y = 2

Add the equations:
(x + y) + (x - y) = 8 + 2, so 2x = 10, x = 5.
Substitute x = 5 into x + y = 8: 5 + y = 8, y = 3.
Solution: (5, 3).`,
          },
          {
            heading: "Example 2: Multiplying First",
            text: `System:
2x + 3y = 12
x + 2y = 7

Multiply the second equation by 2: 2x + 4y = 14.
Subtract from the first: (2x + 3y) - (2x + 4y) = 12 - 14.
-y = -2, so y = 2.
Then x + 2y = 7 becomes x + 4 = 7, so x = 3.
Solution: (3, 2).`,
          },
        ],
      },
      {
        id: 6,
        title: "Elimination Method: Word Problems",
        content: "Using elimination to solve real-world systems.",
        concepts: [
          "In some word problems, elimination is more natural than substitution.",
          "If coefficients already line up or can be lined up easily, elimination is efficient.",
          "We still translate the story into equations before solving.",
        ],
        examples: [
          {
            heading: "Example 1: Coins Problem",
            text: `A jar has quarters and dimes only.
There are 26 coins worth 4 dollars and 70 cents.

Let q be the number of quarters, d be the number of dimes.
Equations:
q + d = 26
25q + 10d = 470

Multiply the first equation by 10: 10q + 10d = 260.
Subtract from the second: 15q = 210, so q = 14 and d = 12.
There are 14 quarters and 12 dimes.`,
          },
        ],
      },
      {
        id: 7,
        title: "Graphing Systems of Equations",
        content: "Using graphs to see and estimate solutions.",
        concepts: [
          "Each equation in two variables represents a line on the coordinate plane.",
          "The solution of the system is where the lines cross.",
          "Graphing is useful for visual understanding and estimation.",
        ],
        examples: [
          {
            heading: "Example 1: Graph and Solve",
            text: `System:
y = 2x + 1
y = -x + 4

Graph both lines. The first has y-intercept 1 and slope 2.
The second has y-intercept 4 and slope -1.
Set 2x + 1 equal to -x + 4: 2x + 1 = -x + 4.
Then 3x = 3, so x = 1 and y = 3.
On a graph, the lines intersect at (1, 3).`,
          },
        ],
      },
      {
        id: 8,
        title: "Special Cases: No Solution and Many Solutions",
        content:
          "Recognizing when systems have no solution or infinitely many.",
        concepts: [
          "Solving can sometimes lead to a true statement like 0 = 0.",
          "This means infinitely many solutions.",
          "Sometimes we get a false statement like 0 = 5.",
          "This means no solution.",
        ],
        examples: [
          {
            heading: "Example 1: Infinitely Many Solutions",
            text: `System:
2x + 4y = 10
x + 2y = 5

Multiply the second equation by 2 to get 2x + 4y = 10.
The equations are the same, so there are infinitely many solutions on that line.`,
          },
          {
            heading: "Example 2: No Solution",
            text: `System:
2x + 4y = 10
2x + 4y = 6

Subtracting gives 0 = 4, which is impossible.
So there is no solution.`,
          },
        ],
      },
      {
        id: 9,
        title: "Choosing the Best Method",
        content:
          "Deciding when to use substitution, elimination, or graphing.",
        concepts: [
          "Substitution is good when a variable is easy to isolate.",
          "Elimination is good when coefficients can be lined up.",
          "Graphing is good for visual understanding and estimation.",
          "In word problems, first define variables clearly, then write equations.",
        ],
        examples: [
          {
            heading: "Example 1: Decide the Method",
            text: `System A:
y = 2x + 5
3x - y = 7
Substitution is easiest because y is already alone.

System B:
2x + 3y = 12
x - 3y = -6
Elimination is efficient because the y coefficients 3 and -3 line up.`,
          },
        ],
      },
    ],
    quizzes: [
      // Lesson 1 Quiz
      {
        id: "quiz-1",
        sectionId: 1,
        question: "Which of the following is a system of equations?",
        options: ["x + y = 5", "x + y = 5 and x - y = 1", "x = 3", "y > 2"],
        correctAnswer: 1,
        explanation:
          "A system has two or more equations with the same variables.",
      },
      {
        id: "quiz-2",
        sectionId: 1,
        question:
          "What is the solution of the system x + y = 5 and x - y = 1?",
        options: ["(4, 1)", "(3, 2)", "(2, 3)", "(5, 0)"],
        correctAnswer: 1,
        explanation: "Solving gives x = 3 and y = 2.",
      },
      {
        id: "quiz-3",
        sectionId: 1,
        question: "What does it mean for a pair (x, y) to be a solution?",
        options: [
          "It makes at least one equation true",
          "It makes exactly one equation false",
          "It makes every equation true at the same time",
          "It lies on the x-axis",
        ],
        correctAnswer: 2,
        explanation:
          "A solution must satisfy all equations simultaneously.",
      },
      {
        id: "quiz-4",
        sectionId: 1,
        question:
          "Which ordered pair is NOT a solution of x + y = 5 and x - y = 1?",
        options: ["(3, 2)", "(4, 1)", "(2, 3)", "(3, 2) again"],
        correctAnswer: 1,
        explanation:
          "Testing (4, 1): 4 + 1 = 5 ✓, but 4 - 1 = 3, not 1.",
      },
      {
        id: "quiz-5",
        sectionId: 1,
        question:
          "Graphically, a system in two variables is usually represented by:",
        options: [
          "Two points",
          "Two lines",
          "Two circles",
          "Two triangles",
        ],
        correctAnswer: 1,
        explanation: "Each linear equation graphs as a line.",
      },
      // Lesson 2 Quiz
      {
        id: "quiz-6",
        sectionId: 2,
        question:
          "If a system has exactly one solution, what do the lines do?",
        options: [
          "They are parallel",
          "They are the same line",
          "They intersect at one point",
          "They never exist",
        ],
        correctAnswer: 2,
        explanation:
          "One solution means the lines cross at exactly one point.",
      },
      {
        id: "quiz-7",
        sectionId: 2,
        question:
          "For the system y = 2x + 1 and y = 2x - 3, how many solutions are there?",
        options: ["One", "None", "Infinitely many", "Exactly two"],
        correctAnswer: 1,
        explanation:
          "Same slope, different intercepts means parallel lines.",
      },
      {
        id: "quiz-8",
        sectionId: 2,
        question:
          "For the system y = 3x + 2 and 2y = 6x + 4, how many solutions are there?",
        options: ["One", "None", "Infinitely many", "Exactly three"],
        correctAnswer: 2,
        explanation: "The equations represent the same line.",
      },
      {
        id: "quiz-9",
        sectionId: 2,
        question: "Parallel lines have:",
        options: [
          "Different slopes",
          "Same slope but different intercepts",
          "Same intercept",
          "No slope",
        ],
        correctAnswer: 1,
        explanation:
          "Parallel lines never meet because they have the same slope.",
      },
      {
        id: "quiz-10",
        sectionId: 2,
        question:
          "If two equations describe the same line, then the system has:",
        options: [
          "One solution",
          "No solution",
          "Infinitely many solutions",
          "Exactly two solutions",
        ],
        correctAnswer: 2,
        explanation:
          "Every point on the line is a solution.",
      },
      // Lesson 3 Quiz
      {
        id: "quiz-11",
        sectionId: 3,
        question: "Substitution works best when:",
        options: [
          "Both equations are in standard form",
          "One variable is already alone",
          "The slopes are equal",
          "The lines are parallel",
        ],
        correctAnswer: 1,
        explanation: "Substitution is easiest when a variable is isolated.",
      },
      {
        id: "quiz-12",
        sectionId: 3,
        question: "In substitution, you replace a variable with:",
        options: ["A number", "An expression", "A point", "A graph"],
        correctAnswer: 1,
        explanation:
          "You substitute one variable with an expression from another equation.",
      },
      {
        id: "quiz-13",
        sectionId: 3,
        question: "After solving for one variable, you:",
        options: [
          "Stop",
          "Guess the other variable",
          "Substitute back to find the other variable",
          "Erase your work",
        ],
        correctAnswer: 2,
        explanation: "Back-substitute to find the second variable.",
      },
      {
        id: "quiz-14",
        sectionId: 3,
        question: "System: x = 2y and x + y = 9. What is x?",
        options: ["3", "4", "6", "9"],
        correctAnswer: 2,
        explanation:
          "Substitute x = 2y into x + y = 9: 2y + y = 9, so 3y = 9, y = 3, x = 6.",
      },
      {
        id: "quiz-15",
        sectionId: 3,
        question:
          "System: x = y + 1 and x + y = 7. What is the solution?",
        options: ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
        correctAnswer: 1,
        explanation:
          "Substitute and solve: (y + 1) + y = 7, 2y = 6, y = 3, x = 4.",
      },
      // Lesson 4 Quiz
      {
        id: "quiz-16",
        sectionId: 4,
        question: "Word problems usually start by:",
        options: [
          "Solving equations",
          "Graphing",
          "Defining variables",
          "Guessing numbers",
        ],
        correctAnswer: 2,
        explanation:
          "First define what each variable represents.",
      },
      {
        id: "quiz-17",
        sectionId: 4,
        question:
          "Ticket problem variables a and s usually stand for:",
        options: [
          "Apples and strawberries",
          "Adults and students",
          "Angles and sides",
          "Area and speed",
        ],
        correctAnswer: 1,
        explanation: "Common context: adult and student tickets.",
      },
      {
        id: "quiz-18",
        sectionId: 4,
        question: "If a + s = 50 and a = 30, what is s?",
        options: ["10", "20", "30", "40"],
        correctAnswer: 1,
        explanation: "30 + s = 50, so s = 20.",
      },
      {
        id: "quiz-19",
        sectionId: 4,
        question: "In word problems, equations come from:",
        options: [
          "Random choices",
          "The story information",
          "The graph",
          "The calculator",
        ],
        correctAnswer: 1,
        explanation:
          "Translate the problem description into equations.",
      },
      {
        id: "quiz-20",
        sectionId: 4,
        question: "After solving a word problem, you should:",
        options: [
          "Ignore the units",
          "Check the solution in the context",
          "Change the variables",
          "Erase the work",
        ],
        correctAnswer: 1,
        explanation:
          "Always verify the answer makes sense in the original problem.",
      },
      // Lesson 5 Quiz
      {
        id: "quiz-21",
        sectionId: 5,
        question: "Elimination means:",
        options: [
          "Removing a variable by combining equations",
          "Graphing",
          "Guessing",
          "Using decimals",
        ],
        correctAnswer: 0,
        explanation:
          "Elimination removes a variable by adding/subtracting equations.",
      },
      {
        id: "quiz-22",
        sectionId: 5,
        question: "System: x + y = 8 and x - y = 2. What is x?",
        options: ["4", "5", "6", "2"],
        correctAnswer: 1,
        explanation: "Add the equations: 2x = 10, so x = 5.",
      },
      {
        id: "quiz-23",
        sectionId: 5,
        question:
          "To eliminate y in 2x + 3y = 12 and x - 2y = -1, we can:",
        options: [
          "Add directly",
          "Multiply the second equation by 3",
          "Multiply the first by 2",
          "Subtract first from second",
        ],
        correctAnswer: 1,
        explanation:
          "Multiply second by 3 to get 3x - 6y, then combine with first.",
      },
      {
        id: "quiz-24",
        sectionId: 5,
        question: "After elimination gives 5x = 10, x is:",
        options: ["1", "2", "3", "5"],
        correctAnswer: 1,
        explanation: "Divide both sides by 5: x = 2.",
      },
      {
        id: "quiz-25",
        sectionId: 5,
        question: "Elimination works well when:",
        options: [
          "Coefficients line up",
          "Only one equation",
          "No variables",
          "Points are given",
        ],
        correctAnswer: 0,
        explanation:
          "When coefficients match or can be made to match.",
      },
      // Lesson 6 Quiz
      {
        id: "quiz-26",
        sectionId: 6,
        question: "In the coin problem, q and d stand for:",
        options: [
          "Quarters and dimes",
          "Quarters and dollars",
          "Dollars and days",
          "Dimes and dollars",
        ],
        correctAnswer: 0,
        explanation: "Common variables for coin problems.",
      },
      {
        id: "quiz-27",
        sectionId: 6,
        question: "If q + d = 26 and q = 14, d =",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        explanation: "14 + d = 26, so d = 12.",
      },
      {
        id: "quiz-28",
        sectionId: 6,
        question: "Total value equation uses:",
        options: [
          "Just the number of coins",
          "Values of each coin",
          "Only quarters",
          "Only dimes",
        ],
        correctAnswer: 1,
        explanation:
          "Multiply quantity by value for each coin type.",
      },
      {
        id: "quiz-29",
        sectionId: 6,
        question: "Elimination in word problems helps to:",
        options: [
          "Hide information",
          "Remove a variable step by step",
          "Skip equations",
          "Avoid writing variables",
        ],
        correctAnswer: 1,
        explanation:
          "Systematically eliminate variables to solve.",
      },
      {
        id: "quiz-30",
        sectionId: 6,
        question: "After solving, you should:",
        options: [
          "Check that totals match the story",
          "Change the problem",
          "Erase equations",
          "Guess a new answer",
        ],
        correctAnswer: 0,
        explanation: "Verify your solution fits the problem context.",
      },
      // Lesson 7 Quiz
      {
        id: "quiz-31",
        sectionId: 7,
        question: "When graphing a system, the solution is:",
        options: [
          "Any point on a line",
          "The intersection point",
          "The origin",
          "Any x value",
        ],
        correctAnswer: 1,
        explanation: "The lines cross at the solution point.",
      },
      {
        id: "quiz-32",
        sectionId: 7,
        question:
          "System: y = 2x + 1 and y = -x + 4. The solution is:",
        options: ["(0, 1)", "(1, 3)", "(2, 5)", "(3, 7)"],
        correctAnswer: 1,
        explanation: "Set equations equal: 2x + 1 = -x + 4, x = 1, y = 3.",
      },
      {
        id: "quiz-33",
        sectionId: 7,
        question: "Graphing is especially useful to:",
        options: [
          "Approximate solutions",
          "Avoid equations",
          "Hide mistakes",
          "Count points",
        ],
        correctAnswer: 0,
        explanation: "Graphs give visual estimates of solutions.",
      },
      {
        id: "quiz-34",
        sectionId: 7,
        question: "If lines do not intersect, the system has:",
        options: [
          "One solution",
          "No solution",
          "Infinitely many solutions",
          "Two solutions",
        ],
        correctAnswer: 1,
        explanation: "Parallel lines never meet.",
      },
      {
        id: "quiz-35",
        sectionId: 7,
        question: "If lines overlap completely, there are:",
        options: [
          "No solutions",
          "One solution",
          "Infinitely many solutions",
          "Exactly two solutions",
        ],
        correctAnswer: 2,
        explanation: "Same line means infinite solutions.",
      },
      // Lesson 8 Quiz
      {
        id: "quiz-36",
        sectionId: 8,
        question:
          "A result 0 = 0 when solving a system means:",
        options: [
          "One solution",
          "No solution",
          "Infinitely many solutions",
          "An error",
        ],
        correctAnswer: 2,
        explanation:
          "True statement indicates infinitely many solutions.",
      },
      {
        id: "quiz-37",
        sectionId: 8,
        question: "A result 0 = 5 means:",
        options: [
          "One solution",
          "No solution",
          "Infinitely many solutions",
          "Two solutions",
        ],
        correctAnswer: 1,
        explanation: "False statement means no solution.",
      },
      {
        id: "quiz-38",
        sectionId: 8,
        question: "Two identical equations describe:",
        options: [
          "Parallel lines",
          "The same line",
          "Perpendicular lines",
          "Different lines",
        ],
        correctAnswer: 1,
        explanation: "Same equation = same line.",
      },
      {
        id: "quiz-39",
        sectionId: 8,
        question:
          "Two equations with same left side but different right sides describe:",
        options: [
          "Same line",
          "Parallel lines",
          "Perpendicular lines",
          "Random lines",
        ],
        correctAnswer: 1,
        explanation: "Parallel lines that never intersect.",
      },
      {
        id: "quiz-40",
        sectionId: 8,
        question: "Special cases appear when equations are:",
        options: [
          "Multiples or contradictions",
          "Random",
          "Nonlinear",
          "Vertical",
        ],
        correctAnswer: 0,
        explanation:
          "Multiples give infinite solutions, contradictions give none.",
      },
      // Lesson 9 Quiz
      {
        id: "quiz-46",
        sectionId: 9,
        question: "Substitution is best when:",
        options: [
          "Variables are hard to isolate",
          "One equation gives a variable easily",
          "Graphing is impossible",
          "No equations are given",
        ],
        correctAnswer: 1,
        explanation: "Use substitution when a variable is isolated.",
      },
      {
        id: "quiz-47",
        sectionId: 9,
        question: "Elimination is best when:",
        options: [
          "Coefficients can line up",
          "Graphs are needed",
          "Decimals appear",
          "There is only one equation",
        ],
        correctAnswer: 0,
        explanation: "Elimination works when coefficients match.",
      },
      {
        id: "quiz-48",
        sectionId: 9,
        question: "Graphing is good for:",
        options: [
          "Exact complicated fractions",
          "Visual understanding and estimation",
          "Hiding solutions",
          "Avoiding variables",
        ],
        correctAnswer: 1,
        explanation: "Graphing provides visual insight.",
      },
      {
        id: "quiz-49",
        sectionId: 9,
        question:
          "In word problems, the first step is usually:",
        options: [
          "Solve equations",
          "Draw graphs",
          "Define variables",
          "Write the answer",
        ],
        correctAnswer: 2,
        explanation: "Always start by defining variables.",
      },
      {
        id: "quiz-50",
        sectionId: 9,
        question: "After solving, you should:",
        options: [
          "Ignore units",
          "Check in the original problem",
          "Erase your work",
          "Change the question",
        ],
        correctAnswer: 1,
        explanation: "Verify the solution makes sense.",
      },
    ],
  },
];
