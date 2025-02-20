// first question//


function processNumbers(a, b, callback) {
    return callback(a, b);
}

var result = processNumbers(3, 4, function(x, y) {
    return x + y;
});

console.log("Sum:", result);

// second question//

function greet(callback) {
    return callback("Alice");
}

var result = greet(function(name) {
    return "Hello, " + name + "!";
});

console.log(result);

// third question//

function calculate(a, b, callback) {
    return callback(a, b);
}

var result = calculate(10, 5, function(x, y) {
    return x - y;
});

console.log("Difference:", result);


