// Is power of two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true;

    if (n < 1 || (n % 2 !== 0)) return false;

    return isPowerOfTwo(n / 2);
};

// Example usage:
console.log(isPowerOfTwo(1));   // true
console.log(isPowerOfTwo(2));   // true
console.log(isPowerOfTwo(3));   // false
console.log(isPowerOfTwo(4));   // true

/*
Dry Run Table:
| n   | n == 1 | n < 1 || n % 2 !== 0 | isPowerOfTwo(n / 2) |
|-----|--------|----------------------|---------------------|
| 1   | true   | -                    | -                   |
| 2   | false  | false                | isPowerOfTwo(1)     |
| 3   | false  | true                 | -                   |
| 4   | false  | false                | isPowerOfTwo(2)     |
*/