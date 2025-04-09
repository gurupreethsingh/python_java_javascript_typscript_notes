// 1. Function without parameters
function add() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}
add();
// 2. Function with parameters
function greet(name) {
    console.log("hello ".concat(name));
}
greet("ecoders");
// 3. Function with default parameter
function greeting(name) {
    if (name === void 0) { name = "Ecoders"; }
    console.log("Hello ".concat(name));
}
greeting();
greeting("rajesh");
// 4. Function with return value
function subtract(a, b) {
    return a - b;
}
var result = subtract(30, 20);
console.log(result);
console.log(subtract(50, 25));
// 5. Variable function expression
var square = function (number) {
    return number * number;
};
console.log(square(5));
// 6. Arrow functions
var addition = function () {
    var a = 20;
    var b = 30;
    console.log(a + b);
};
addition();
var greetToday = function (name) { return "hello ".concat(name); };
console.log(greetToday("ecoders"));
// 7. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Hello Ecoders");
})();
// 8. Async function
// async function fetchData(): Promise<Response> {
//       return await fetch("http://localhost:3006/all-users");
// }
// 9. Callback functions with map
var numbers = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];
var squares = numbers.map(function (eachnumber) {
    return eachnumber * eachnumber;
});
console.log(squares);
// filter(): even numbers
var even = numbers.filter(function (eachnumber) {
    return eachnumber % 2 === 0;
});
console.log(even);
// odd numbers
var odd = numbers.filter(function (eachnumber) {
    return eachnumber % 2 !== 0;
});
console.log(odd);
// multiples of 7
var seven_multiples = numbers.filter(function (eachnumber) {
    return eachnumber % 7 === 0;
});
console.log(seven_multiples);
// reduce(): sum from 1 to 10
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumofnumbers = nums.reduce(function (sum, eachnumber) {
    return sum + eachnumber;
}, 0);
console.log(sumofnumbers);
// Combined map + filter + reduce
var combinedResult = numbers
    .filter(function (eachnumber) { return eachnumber % 2 === 0; })
    .map(function (eachnumber) { return eachnumber * eachnumber; })
    .reduce(function (sum, eachnumber) { return sum + eachnumber; }, 0);
console.log(combinedResult);
