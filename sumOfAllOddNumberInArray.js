// Sum of all odd numbers in an array
function sumOfOddNumbers(arr, n) {
    if (n <= 0) return 0; // base case
    const currentElement = arr[n - 1];
    if (currentElement % 2 !== 0) {
        return currentElement + sumOfOddNumbers(arr, n - 1); // include odd number
    } else {
        return sumOfOddNumbers(arr, n - 1); // skip even number
    }
}
const array = [1, 2, 3, 4, 5];
console.log(sumOfOddNumbers(array, array.length)); // Output: 9

/*
Dry Run Table for sumOfOddNumbers([1, 2, 3, 4, 5], 5):
| Call Stack                     | Current n | Current Element | Is Odd? | Return Value                     |
|--------------------------------|------------|------------------|---------|----------------------------------|
| sumOfOddNumbers([1,2,3,4,5],5) | 5          | 5                | Yes     | 5 + sumOfOddNumbers(...,4)      |
| sumOfOddNumbers([1,2,3,4,5],4) | 4          | 4                | No      | sumOfOddNumbers(...,3)          |
| sumOfOddNumbers([1,2,3,4,5],3) | 3          | 3                | Yes     | 3 + sumOfOddNumbers(...,2)      |
| sumOfOddNumbers([1,2,3,4,5],2) | 2          | 2                | No      | sumOfOddNumbers(...,1)          |
| sumOfOddNumbers([1,2,3,4,5],1) | 1          | 1                | Yes     | 1 + sumOfOddNumbers(...,0)      |
| sumOfOddNumbers([1,2,3,4,5],0) | 0          | -                | -       | 0                                |
|--------------------------------|------------|------------------|---------|----------------------------------|
| Final Return                   |            |                  |         | 9                                |
*/