/**
 * Reverse Integer
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let isNegative = x < 0;
    x = Math.abs(x);
    let reversed = 0;
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    if (isNegative) reversed = -reversed;
    // Handle 32-bit signed integer overflow
    if (reversed < -2147483648 || reversed > 2147483647) return 0;
    return reversed;
};

// Example usage:
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0