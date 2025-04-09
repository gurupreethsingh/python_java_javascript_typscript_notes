// 1. Function without parameters
function add(): void {
      const a: number = 10;
      const b: number = 20;
      console.log(a + b);
}
add();

// 2. Function with parameters
function greet(name: string): void {
      console.log(`hello ${name}`);
}
greet("ecoders");

// 3. Function with default parameter
function greeting(name: string = "Ecoders"): void {
      console.log(`Hello ${name}`);
}
greeting();
greeting("rajesh");

// 4. Function with return value
function subtract(a: number, b: number): number {
      return a - b;
}
let result: number = subtract(30, 20);
console.log(result);
console.log(subtract(50, 25));

// 5. Variable function expression
const square = function (number: number): number {
      return number * number;
};
console.log(square(5));

// 6. Arrow functions
const addition = (): void => {
      const a: number = 20;
      const b: number = 30;
      console.log(a + b);
};
addition();

const greetToday = (name: string): string => `hello ${name}`;
console.log(greetToday("ecoders"));

// 7. IIFE (Immediately Invoked Function Expression)
(function (): void {
      console.log("Hello Ecoders");
})();

// 8. Async function
// async function fetchData(): Promise<Response> {
//       return await fetch("http://localhost:3006/all-users");
// }

// 9. Callback functions with map
const numbers: number[] = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];

const squares: number[] = numbers.map((eachnumber: number): number => {
      return eachnumber * eachnumber;
});
console.log(squares);

// filter(): even numbers
const even: number[] = numbers.filter((eachnumber: number): boolean => {
      return eachnumber % 2 === 0;
});
console.log(even);

// odd numbers
const odd: number[] = numbers.filter((eachnumber: number): boolean => {
      return eachnumber % 2 !== 0;
});
console.log(odd);

// multiples of 7
const seven_multiples: number[] = numbers.filter((eachnumber: number): boolean => {
      return eachnumber % 7 === 0;
});
console.log(seven_multiples);

// reduce(): sum from 1 to 10
const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumofnumbers: number = nums.reduce((sum: number, eachnumber: number): number => {
      return sum + eachnumber;
}, 0);
console.log(sumofnumbers);

// Combined map + filter + reduce
const combinedResult: number = numbers
      .filter((eachnumber: number): boolean => eachnumber % 2 === 0)
      .map((eachnumber: number): number => eachnumber * eachnumber)
      .reduce((sum: number, eachnumber: number): number => sum + eachnumber, 0);
console.log(combinedResult);
