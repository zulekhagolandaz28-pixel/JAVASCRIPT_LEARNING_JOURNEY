// Q1  Select the <h1> using its id and change the text
const heading = document.getElementById("heading");
heading.textContent = "Welcome to My Website";

// Q2 Select the button and add a click event
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Button was clicked!");
});

// Q3 When the button is clicked, change the heading
button.addEventListener("click", () => {
    heading.textContent = "Welcome Zulekha!";
});

// Q4 Select the input and add an input event
const inputField = document.getElementById("nameInput");
inputField.addEventListener("input", (event) => {
    console.log(event.target.value);
});