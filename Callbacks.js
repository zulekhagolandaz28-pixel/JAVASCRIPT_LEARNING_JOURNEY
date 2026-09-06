// Q1 Create a function: processName(name, callback). The function should pass name to the callback.
// Then create a callback that prints: Hello, Zulekha
function processName(name, callback) {
    callback(name);
}
const printHello = (name) => {
    console.log(`Hello, ${name}`);
};
processName("Zulekha", printHello);

// Q2 Create: calculate(a, b, operation). The function should use the operation callback to calculate the result.
//Call it three times: Addition, Subtraction, Multiplication. Use arrow functions as callbacks.
function calculate(a, b, operation) {
    return operation(a, b);
}
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
console.log(calculate(5, 3, addition)); // 8
console.log(calculate(5, 3, subtraction)); // 2
console.log(calculate(5, 3, multiplication)); // 15

// Q3 Create: checkStudent(marks, callback). If marks are 40 or above, call the callback with "Pass". Otherwise, call the callback with "Fail".
// Then create a callback that prints: Student result: Pass or Student result: Fail
function checkStudent(marks, callback) {
    if (marks >= 40) {
        callback("Pass");
    } else {
        callback("Fail");
    }
}
const printResult = (result) => {
    console.log(`Student result: ${result}`);
};
checkStudent(45, printResult); 
checkStudent(35, printResult); 