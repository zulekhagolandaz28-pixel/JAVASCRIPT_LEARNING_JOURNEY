// Q1 Create: let numbers = [10, 20, 30]; Using the spread operator:
// Create a new array called newNumbers.  Copy all elements from numbers.  Add 40 and 50.  Print newNumbers
let numbers = [10, 20, 30];
let newNumbers = [...numbers, 40, 50];
console.log(newNumbers);

// Q2 Create two arrays: let frontend = ["HTML", "CSS"];  let programming = ["Python", "JavaScript"];
//Using the spread operator, create a new array called skills containing all four values. Print skills.
let frontend = ["HTML", "CSS"];  
let programming = ["Python", "JavaScript"];
let skills = [...frontend, ...programming];
console.log(skills);

// Q3 Create: let user = {
//    name: "Zulekha",
//    age: 20,
//    city: "Pune"
// };
// Using the spread operator: Create a new object called updatedUser. Change the age to 21. Keep the other properties unchanged. Print updatedUser
let user = {
    name: "Zulekha",
    age: 20,
    city: "Pune"
};
let updatedUser = { ...user, age: 21 };
console.log(updatedUser);

// Q4 Create: let product = {
//    name: "Laptop",
//    price: 50000
// };
//Using spread:  Create updatedProduct. Keep the existing properties. Add brand: "Dell". Print the new object.
let product = {
    name: "Laptop",
    price: 50000
};
let updatedProduct = { ...product, brand: "Dell" };
console.log(updatedProduct);
