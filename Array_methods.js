// Q1 Create this array: let subjects = ["Python", "JavaScript", "DBMS", "DSA"]; Use forEach() to print each subject like:
//I am learning (Subject)
let subjects = ["Python", "JavaScript", "DBMS", "DSA"];
subjects.forEach(function(subject) 
{
    console.log("I am learning " + subject);
});

// Q2 Create: let numbers = [5, 10, 15, 20, 25]; Use map() to create a new array containing the square of each number. Print the new array.
let numbers = [5, 10, 15, 20, 25];
let squares = numbers.map(function(number) 
{
    return number * number;
});
console.log(squares);

// Q3 Create: let prices = [100, 250, 500, 750, 1000, 1500]; Use filter() to create a new array containing only prices greater than 500. Print the new array.
let prices = [100, 250, 500, 750, 1000, 1500];
let filteredPrices = prices.filter(function(price)
{
    return price > 500;
});
console.log(filteredPrices);

// Q4 Create: let marks = [35, 42, 55, 68, 75]; Use find() to find the first mark greater than or equal to 60. Print the result.
let marks = [35, 42, 55, 68, 75];
let firstMark = marks.find(function(mark) {
    return mark >= 60;
});
console.log(firstMark);

