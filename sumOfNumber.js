// Sum of Numbers from 1 to N using Recursion

function sum(num) {
    if (num === 0) return 0; // base case
    return num + sum(num - 1); // recursive case
}

console.log(sum(5)); // Output: 15

/*
Dry Run Table for sum(5):
| Call Stack      | Current num | Return Value |
|-----------------|--------------|--------------|
| sum(5)          | 5            | 5 + sum(4)   |
| sum(4)          | 4            | 4 + sum(3)   |
| sum(3)          | 3            | 3 + sum(2)   |
| sum(2)          | 2            | 2 + sum(1)   |
| sum(1)          | 1            | 1 + sum(0)   |
| sum(0)          | 0            | 0            |
|-----------------|--------------|--------------|
| Final Return    |              | 15           |
*/