// Q1Write a program that prints: Start, End, Hello after 3 seconds. Use setTimeout() for the delayed message.
console.log("Start");
setTimeout(() => {
    console.log("Hello");
}, 3000);
console.log("End");

// Q2 Create a program that: Prints "Program started". Uses setTimeout() to print "Processing..." after 2 seconds. Immediately prints "Program finished"
console.log("Program started");
setTimeout(() => {
    console.log("Processing...");
}, 2000);
console.log("Program finished");

// Q3 Create two setTimeout() functions: First prints "First task" after 1 second. Second prints "Second task" after 3 seconds. Also print "Main program" immediately.
console.log("Main program");
setTimeout(() => {
    console.log("First task");
}, 1000);
setTimeout(() => {
    console.log("Second task");
}, 3000);
