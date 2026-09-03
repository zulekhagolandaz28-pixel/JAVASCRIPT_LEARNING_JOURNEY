// Q1. Create an object containing your information and print its properties.
let student = {
    name: "Zulekha",
    age: 20,
    course: "BSc Computer Science",
    city: "Pune"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);

// Q2. Create an array containing 5 programming languages.
//Print the first language.
//Print the last language.
//Change the third language.
//Add one more language using push().
let languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log(languages[0]); 
console.log(languages[languages.length - 1]);
languages[2] = "C#";
console.log(languages);
languages.push("Go");
console.log(languages);

// Q3. Create a function called calculateArea that accepts length and width and returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10));