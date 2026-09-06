//Q1 Create a Promise that: Stores a variable success = true. If successful, calls resolve() with "Login successful". If not successful, calls reject() with "Login failed"
//Handle the result using .then() and .catch().
const loginPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});
loginPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

//Q2 Create a Promise that checks a number is even or odd. If even, resolve with "Even number". If odd, reject with "Odd number". Handle the result using .then() and .catch().
const numberCheckPromise = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) {
        resolve("Even number");
    } else {
        reject("Odd number");
    }   
});
numberCheckPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

//Q3 — Create a Promise that uses setTimeout(). After 3 seconds, resolve with: Data loaded successfully. Use .then() to print the result.
const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded successfully");
    }, 3000);
});
delayedPromise
    .then((result) => {
        console.log(result);
    });

//Q4 Create: let marks = 75; Create a Promise that: Resolves with "Student passed" if marks are 40 or above. Rejects with "Student failed" otherwise. Handle both cases using .then() and .catch().
let marks = 75;
const marksPromise = new Promise((resolve, reject) => {
    if (marks >= 40) {      
        resolve("Student passed");
    } else {
        reject("Student failed");
    }
});
marksPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });