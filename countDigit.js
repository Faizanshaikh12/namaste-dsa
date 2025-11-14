// -- Summary --
// This code counts the number of digits in a given integer by repeatedly dividing the number by 10 until it reaches zero.

// -- Code Implementation --

let count = 0;
let number = 12345678901234567890; // Example number

while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits:", count);

