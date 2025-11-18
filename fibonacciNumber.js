// Fibonacci Number
// 1. Recursion
// 2. Itrative

// 1. Recursion
function fibonacciRecursion(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log(fibonacciRecursion(6)); // Output: 8

/*
Dry Run Table for fibonacciRecursion(6):
| Call Stack Level | n | Return Value |
|------------------|---|--------------|
|        0         | 6 |      8       |
|        1         | 5 |      5       |
|        2         | 4 |      3       |
|        3         | 3 |      2       |
|        4         | 2 |      1       |
|        5         | 1 |      1       |
|        6         | 0 |      0       |
*/

// 2. Iterative
function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1, fib;
    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}
console.log(fibonacciIterative(6)); // Output: 8

/*
Dry Run Table for fibonacciIterative(6):
| i | a | b | fib |
|---|---|---|-----|
| 0 | 0 | 1 |     |
| 1 | 0 | 1 |     |
| 2 | 1 | 1 |  1  |
| 3 | 1 | 2 |  2  |
| 4 | 2 | 3 |  3  |
| 5 | 3 | 5 |  5  |
| 6 | 5 | 8 |  8  |
At the end of the loop, fib = 8, which is the 6th Fibonacci number.
*/
