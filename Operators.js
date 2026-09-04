// Q1 Create two variables a = 20 and b = 5. Write a program to print:
//addition    //subtraction  //multiplication  //division  //remainder
let a = 20;
let b = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Remainder: " + (a % b));

// Q2 Create a variable age. Write a program that checks whether the person is 18 or older and stores the result in a variable called isAdult. Print the result.
let age = 20;
let isAdult = age >= 18;
console.log("Is adult: " + isAdult);

// Q3 Create:  let marks = 75;  let attendance = 80;  //Write a program to check whether the student is eligible for the exam.
//Condition:  //Marks should be 40 or more  //Attendance should be 75 or more  //Use a logical operator and print the result.
let marks = 75;
let attendance = 80;
let isEligible = marks >= 40 && attendance >= 75;
console.log("Is eligible for exam: " + isEligible);
