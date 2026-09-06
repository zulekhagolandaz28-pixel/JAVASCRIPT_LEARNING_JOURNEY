//Q1 Create an async function called welcome. Inside it, return:
//Welcome to JavaScript. Call the function and use .then() to print the returned message.
async function welcome() {
    return "Welcome to JavaScript";
}
welcome().then((message) => {
    console.log(message);
});

//Q2 Create a Promise that resolves with:  Data received successfully
//Create an async function called getData. Use await to get the Promise's result and print it.
const dataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received successfully");
    }, 1000);
});
async function getData() {
    const result = await dataPromise;
    console.log(result);
}
getData();

// Q3 Create a Promise that uses setTimeout() and resolves after 2 seconds with:  Student data loaded
//Create an async function and use await to wait for the Promise.  Print the result after it resolves.
const studentDataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Student data loaded");
    }, 2000);
});
async function getStudentData() {
    const result = await studentDataPromise;
    console.log(result);
}
getStudentData();

//Q4 Create two Promises: First resolves with "User data loaded". Second resolves with "Course data loaded"
//Create an async function that uses await for both Promises and prints both results.
const userDataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User data loaded");
    }, 1000);
});
const courseDataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Course data loaded");
    }, 1500);
});
async function getBothData() {
    const userData = await userDataPromise;
    const courseData = await courseDataPromise;
    console.log(userData);
    console.log(courseData);
}
getBothData();