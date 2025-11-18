// Sum of all elements in an array

function sumOfArray(arr, n) {
    if (n <= 0) return 0; // base case
    return arr[n - 1] + sumOfArray(arr, n - 1); // recursive case
}

const array = [1, 2, 3, 4, 5];
console.log(sumOfArray(array, array.length)); // Output: 15
/*
Dry Run Table for sumOfArray([1, 2, 3, 4, 5], 5):
| Call Stack               | Current n | Current Element | Return Value               |
|--------------------------|------------|------------------|----------------------------|
| sumOfArray([1,2,3,4,5],5) | 5          | 5                | 5 + sumOfArray(...,4)     |
| sumOfArray([1,2,3,4,5],4) | 4          | 4                | 4 + sumOfArray(...,3)     |
| sumOfArray([1,2,3,4,5],3) | 3          | 3                | 3 + sumOfArray(...,2)     |
| sumOfArray([1,2,3,4,5],2) | 2          | 2                | 2 + sumOfArray(...,1)     |
| sumOfArray([1,2,3,4,5],1) | 1          | 1                | 1 + sumOfArray(...,0)     |
| sumOfArray([1,2,3,4,5],0) | 0          | -                | 0                          |
|--------------------------|------------|------------------|----------------------------|
| Final Return             |            |                  | 15                         |
*/