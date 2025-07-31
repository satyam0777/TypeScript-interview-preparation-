// Number, String, Boolean
let age: number = 22;
let username: string = "Satyam";
let isStudent: boolean = true;

// Array
let scores: number[] = [90, 85, 88];
let names: Array<string> = ["Amit", "Rahul"];

// Tuple
let person: [string, number] = ["Satyam", 22];

// Object Type
let user: { name: string; age: number } = { name: "Satyam", age: 22 };

// Any (avoid in real projects)
let randomValue: any = "Hello";

// Null & Undefined
let nothing: null = null;
let notAssigned: undefined = undefined;

// -----------------------------
// Interview Problem & Explanation
// -----------------------------

/*
Problem: Write a function that takes an array of numbers and returns an object with the min, max, and average values.
Explain how TypeScript's type system helps prevent bugs in this function.
*/

function analyzeScores(scores: number[]): { min: number; max: number; avg: number } {
  let min = Math.min(...scores);
  let max = Math.max(...scores);
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return { min, max, avg };
}

// Usage example:
const result = analyzeScores([90, 85, 88]);
console.log(result); // { min: 85, max: 90, avg: 87.666... }

/*
Explanation:
- The parameter 'scores' is typed as 'number[]', so TypeScript will show an error if you pass a string array or any other type.
- The return type is explicitly defined as an object with min, max, and avg as numbers.
- This prevents mistakes like returning a string or missing a property.
- TypeScript's static typing catches errors at compile time, making your code safer and easier to debug.
*/