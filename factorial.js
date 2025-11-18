// Factorial function using recursion

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120

/*
Dry Run Table for factorial(5):
| Call          | n | Return Value |
|---------------|---|--------------|
| factorial(1)  | 1 | 1            |
| factorial(2)  | 2 | 2 * 1 = 2    |
| factorial(3)  | 3 | 3 * 2 = 6    |
| factorial(4)  | 4 | 4 * 6 = 24   |
| factorial(5)  | 5 | 5 * 24 = 120 |
*/