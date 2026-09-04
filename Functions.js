// Q1 Create a function called checkNumber(number). It should check whether the number is even or odd and print the result.
function checkNumber(number) 
{
    if (number % 2 === 0)
    {
        console.log(number + " is even");
    }
    else
    {
        console.log(number + " is odd");
    }
}
checkNumber(7); 

// Q2 Create a function called: calculateDiscount(price, discount) It should calculate and return the final price after discount.
function calculateDiscount(price, discount)
{
    let finalPrice = price - (price * (discount / 100));
    return finalPrice;
}
console.log(calculateDiscount(100, 20));

// Q3 Create a function: checkResult(marks)
//It should:  Print "Pass" if marks are 40 or above  Print "Fail" if marks are below 40  Call the function with a marks value of your choice.
function checkResult(marks)
{
    if (marks >= 40)
    {
        console.log("Pass");
    }
    else
    {
        console.log("Fail");
    }
}
checkResult(35);