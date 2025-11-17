// Recursion in JavaScript
// ----------------
// - A function that calls itself to solve a smaller instance of the same problem
// - Consists of a base case and a recursive case
// - Useful for problems that can be broken down into smaller, similar subproblems

// Tow parts of recursion:
// -------------------------------
// 1. Base Case: The condition under which the recursion stops
// 2. Recursive Case: The part where the function calls itself with a modified argument

// Real Life Examples:
// ---------------------
// 1. Queue of people waiting for a movie ticket
// 2. Comment threads on social media platforms
// 3. Organizational hierarchy in a company

// Common Mistakes in Recursion:
// -------------------------------
// 1. Missing Base Case: Stack overflow due to infinite recursion
// 2. Not Simplifying the Problem: Ensure each recursive call works towards the base case
// 3. Too deep Recursion: Can lead to performance issues and stack overflow errors
// 4. Keeping in mind the time complexity of recursive solutions

// Example of a simple recursive function that prints numbers from num down to 1
function fun(num) {
    if (num === 0) return; // base case to stop recursion
    console.log(num);
    fun(num - 1);
}

fun(5);

// Example of print numbers from 1 to n using recursion
function printNumbers(n) {
    if (n === 0) return; // base case
    printNumbers(n - 1); // recursive call
    console.log(n); // print after the recursive call to get ascending order
}
printNumbers(5);