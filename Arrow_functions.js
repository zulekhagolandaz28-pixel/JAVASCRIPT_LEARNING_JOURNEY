// Q1 Create an arrow function called square that takes a number and returns its square. Call it with 8 and print the result.
const square = (num) => num * num;
console.log(square(8));

// Q2 Create an arrow function called greetUser that takes name and city.  It should return:  Hello Zulekha from Pune
//Call the function and print the returned value.
const greetUser = (name, city) => `Hello ${name} from ${city}`;
console.log(greetUser("Zulekha", "Pune"));

//Q3 Create an arrow function: calculateTotal(price, quantity) It should return the total price.
const calculateTotal = (price, quantity) => price * quantity;
console.log(calculateTotal(50, 3));     
