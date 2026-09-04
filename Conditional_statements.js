// Q1 Create a variable age.  Write a program that: prints "Adult" if age is 18 or above, otherwise prints "Minor"
let age = 20;
if (age >= 18) 
{
    console.log("Adult");
} 
else 
{
    console.log("Minor");
}

// Create a variable marks. Write a program using if...else if...else:
//90 or above → "A+"    75–89 → "A"  //60–74 → "B"  //40–59 → "C"  //below 40 → "Fail"
let marks = 85;
if (marks >= 90)
{
    console.log("A+");
}
else if (marks >= 75)
{
    console.log("A");
}
else if (marks >= 60)
{
    console.log("B");       
}
else if (marks >= 40)
{
    console.log("C");
}
else
{
    console.log("Fail");
}

//Create: let username = "admin";  let password = "1234";   Write a program that checks:
//If username is "admin" and password is "1234" → print "Login successful"  //Otherwise → print "Invalid username or password"
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234")
{
    console.log("Login successful");
}
else
{
    console.log("Invalid username or password");
}
    