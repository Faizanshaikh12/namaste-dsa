// Find Second Largest Number in an Array
function secondLargest(arr) {

    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [1,3,5,7,9,9,7,5,3,1];

let result = secondLargest(arr);

console.log("Result: ", result)

/* Dry Run
Array: [1,3,5,7,9]
| Iteration | Current Element | firstLargest | secondLargest |
|-----------|-----------------|---------------|----------------|
|     0     |        1        |      1        |     -Infinity   |
|     1     |        3        |      3        |       1        |
|     2     |        5        |      5        |       3        |
|     3     |        7        |      7        |       5        |
|     4     |        9        |      9        |       7        |
Final Result: 7
*/

/* Corner Cases
- Array is empty
- Array has only one element
- Array has all elements the same
- Array has negative numbers
*/