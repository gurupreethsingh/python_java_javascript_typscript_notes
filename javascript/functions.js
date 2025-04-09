// function declaration.

// 1. function without parameters.
function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

// call the function by its name.
add();

// 2 : functions with parameters.
function greet(name) {
  console.log(`hello ${name}`);
}

greet("ecoders");

// 3. functions with default values.
function greeting(name = "Ecoders") {
  console.log(`Hello ${name}`);
}

greeting();
greeting("rajesh");

// functions with return value.
function subtract(a, b) {
  return a - b;
}

var result = subtract(30, 20);
console.log(result);
//or call the function directly inside the console.log()
console.log(subtract(50, 25));

// 4 varaible declaration of a function.
var square = function (number) {
  return number * number;
};

console.log(square(5));

// 5 : arrow functions.
const addition = () => {
  var a = 20;
  var b = 30;
  console.log(a + b);
};
addition();

// const greetToday = (name) => {
//   console.log(`Hello ${name}`);
// };
// greetToday("ecoders");

// writing arrow functions in one line, if the function has only one line of execution.
const greetToday = (name) => `hello ${name}`;
console.log(greetToday("ecoders"));

// 5 iife functions ( Immediately Invoked Function Expression)
(function () {
  console.log("Hello Ecoders");
})();

// 6: async function.
async function fetchData() {
  return await fetch("http://localhost:3006/all-users");
}

// 7. callback functions :- function taking another function as the parameter.
// map() function

var numbers = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((eachnumber) => {
  return eachnumber * eachnumber;
});

console.log(squares);

// filter() function.: filters only the elements you want.
// fetch all even numbers from numbers.

const even = numbers.filter((eachnumber) => {
  return eachnumber % 2 == 0;
});

console.log(even);

const odd = numbers.filter((eachnumber) => {
  return eachnumber % 2 != 0;
});

console.log(odd);

const seven_multiples = numbers.filter((eachnumber) => {
  return eachnumber % 7 == 0;
});

console.log(seven_multiples);

// reduce() function
// find the sum of all the numbers from 1 to 10.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumofnumbers = nums.reduce((sum, eachnumber) => {
  return sum + eachnumber;
}, 0); //  0 here is the initial value of sum.

console.log(sumofnumbers);

// combine map + filter() + reduce() functions to solve one problem.
// find the sum of squares of all the even numbers from 1 to 10 .

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first find all the even nubers by usign the filter() function.
// then square each of the even nubmer by using map() function.
var result = numbers
  .filter((eachnumber) => eachnumber % 2 == 0)
  .map((eachnumber) => eachnumber * eachnumber)
  .reduce((sum, eachnumber) => sum + eachnumber, 0);

console.log(result);

// recursive functions.
// find the factorial of a number using recurssion.

// normal way without recurssion.

var factorial = 1;

var n = 5;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}
console.log(`The factorial of ${n} is ${factorial}`);

// using recursion.

function findfactorial(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * findfactorial(number - 1);
  }
}

console.log(`The factorial of ${n} is ${findfactorial(5)}`);
