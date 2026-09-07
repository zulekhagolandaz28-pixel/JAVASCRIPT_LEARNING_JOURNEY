// Q1: Try to print a variable called studentName that has not been created.
// Use try...catch so that instead of stopping with an error,  the program prints "Student name not found".
try 
{
    console.log(studentName);
} 
catch (error) 
{
    console.log("Student name not found");
}

// Q2: Create an async function called getUsers(). Use try to fetch users from JSONPlaceholder.
// Convert the response to JSON and print the users. If an error occurs, use catch to print "Failed to load users".
async function getUsers() 
{
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);

    } 
    catch (error) 
    {
        console.log("Failed to load users");
    }
}
getUsers();