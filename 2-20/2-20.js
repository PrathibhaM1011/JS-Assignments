// 1. Definition and Comparison:
// An arrow function in JavaScript is a more concise way to write function expressions, introduced in ES6. Unlike traditional functions, arrow functions do not have their own this binding; instead, they inherit this from the surrounding lexical scope. Additionally, arrow functions do not have an arguments object. They are commonly used for short, simple functions, especially in callbacks and functional programming.

// Traditional function syntax:


function funcName(params) {
    // function body
}
// Arrow function syntax:


const funcName = (params) => {
    // function body
};


// 2. Basic Conversion:
// Convert the given function into an arrow function:

const add = (a, b) => a + b;


// 3. Implicit Return:
// Rewriting the function using an implicit return:

const square = n => n * n;
// Here, the {} and return keyword are omitted because the function consists of a single expression.

// 4. Single Parameter Syntax:
// When an arrow function takes exactly one parameter, parentheses around the parameter can be omitted.


// const double = n => n * 2;
// However, parentheses are required when there are no parameters, multiple parameters, or default values, like


const example = (n = 5) => n * 2;


// 5. Concise Body vs. Block Body:
// Using a concise body with an implicit return:

const cube = n => n * n * n;

// Using a block body with an explicit return


const cube = (n) => {
    return n * n * n;
};

// The concise body is shorter but only works when the function contains a single expression. The block body is needed when multiple statements exist.

// 6. Multiple Parameters and Parentheses:
// When an arrow function has multiple parameters, parentheses are required

const subtract = (a, b) => a - b;


// 7. No Parameters Arrow Function:
// An arrow function without parameters must use empty parentheses

const greet = () => "Hello, World!";

// This function always returns "Hello, World!".