// Q1 Fetch all users and print the complete data.
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
}
getUsers();


// Q2 — Print Only User Names 
async function getUsers() {
const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    data.forEach((user) => {
        console.log(user.name);
    });
}
getUsers();

// Q3 — Find User With ID 5
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    const user = data.find((user) => {
        return user.id === 5;
    });
    console.log("Name:", user.name);
    console.log("Email:", user.email);
}
getUsers();