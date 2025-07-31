// Function with parameter and return type
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameter
function greet(name: string, msg?: string): string {
  return `Hello, ${name}! ${msg ?? ""}`;
}

// Default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Arrow function with types
const subtract = (a: number, b: number): number => a - b;

// Function type alias
type MathOp = (x: number, y: number) => number;
const divide: MathOp = (x, y) => x / y;

// -----------------------------
// Interview Problems & Explanations
// -----------------------------

/*
Problem 1: Write a function that takes a string or number and returns its length (number for string, digit count for number).
Explain how TypeScript helps you handle multiple types safely.
*/

function getLength(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.toString().length;
  }
}

/*
Explanation:
- The parameter is typed as 'string | number' (union type).
- TypeScript forces you to handle both cases, reducing runtime errors.
- Type guards (typeof) ensure safe access to properties.
*/

// Usage:
console.log(getLength("hello")); // 5
console.log(getLength(12345));   // 5

/*
Problem 2: Write a function that takes a callback and two numbers, and returns the result of the callback.
Show how to type the callback for safety.
*/

function operate(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}

// Usage:
console.log(operate(10, 5, add));      // 15
console.log(operate(10, 5, subtract)); // 5

/*
Explanation:
- The 'op' parameter is explicitly typed as a function taking two numbers and returning a number.
- TypeScript ensures only valid callbacks are passed, preventing bugs.
*/

/*
Problem 3: Write a function with a rest parameter that sums any number of numbers.
Explain how TypeScript types rest parameters.
*/

function sumAll(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

// Usage:
console.log(sumAll(1, 2, 3, 4)); // 10

/*
Explanation:
- Rest parameter '...nums: number[]' ensures only numbers are accepted.
- TypeScript checks the types for all arguments.
*/

// -----------------------------
// More Interview Questions
// -----------------------------

/*
Q1: What is the difference between function declaration and function expression in TypeScript?
A: Both can be typed, but expressions (like arrow functions) can use type aliases for more flexibility.

Q2: How does TypeScript help with higher-order functions?
A: By typing function parameters and return types, TypeScript ensures correct usage and prevents passing invalid functions.

Q3: How do you type a function that returns another function?
A: Use nested function types, e.g., () => () => number.

Example:
const makeAdder = (x: number): ((y: number) => number) => {
  return (y: number) => x + y;
};
*/

// -----------------------------
// Summary Explanation
// -----------------------------

/*
TypeScript's function typing:
- Prevents passing wrong argument types.
- Ensures correct return types.
- Makes code self-documenting and easier to refactor.
- Catches errors at compile time, improving reliability.
*/