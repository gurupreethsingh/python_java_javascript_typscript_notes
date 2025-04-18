import os

# Step 1: Get the current path of the Python script
current_path = os.path.dirname(os.path.abspath(__file__))

# Step 2: Go up one level to reach the 'parent' directory
parent_path = os.path.dirname(current_path)

# Step 3: Navigate into the sibling 'javascript' folder from 'parent'
javascript_folder = os.path.join(parent_path, "javascript")

# Step 4: Target file path inside the 'javascript' folder
target_file_path = os.path.join(javascript_folder, "javascript_notes.txt")

my_notes = """

------------------------------------------------------------------------------
topic 5 : Functions in javascript
------------------------------------------------------------------------------
// function declaration and execution.

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


"""


# Append the notes to the file
with open(target_file_path, "a", encoding="utf-8") as myfile:
    myfile.write(my_notes)

myfile.close()