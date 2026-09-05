// Q1 Q1 Create: let colors = ["Red", "Blue", "Green", "Yellow"];
//Use array destructuring to store: Red in color1  Green in color3  Yellow in color4
//Print all three.
let colors = ["Red", "Blue", "Green", "Yellow"];
let [first, , third, fourth] = colors;
console.log("color1: " + first);
console.log("color3: " + third);
console.log("color4: " + fourth);

// Q2 Create: let student = {
//    name: "Aisha",
//    age: 21,
//    course: "Computer Science",
//    city: "Pune"
// };
//Use object destructuring to extract name, course, and city. Print them.
 let student = {
    name: "Aisha",
    age: 21,
    course: "Computer Science",
    city: "Pune"
};
let {name, course, city} = student;
console.log(name);
console.log(course);
console.log(city);

// Q3 Create: let user = {
//    username: "Zulekha",
//    email: "zulekha@gmail.com",
//    age: 20
// };
// Use object destructuring to extract all three properties.
let user = {
    username: "Zulekha",
    email: "zulekha@gmail.com",
    age: 20
};
let {username, email, age} = user;
console.log("Username: " + username);
console.log("Email: " + email);
console.log("Age: " + age);