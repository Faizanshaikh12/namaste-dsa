// Bubble sort implementation in JavaScript

let arr = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap array[j] and array[j+1] without using a temporary variable
                [array[j], array[j + 1]] = swap(array[j], array[j + 1]);
            }
        }
    }
    return array;
}

// Swapping two numbers without using a temporary variable
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

console.log("Unsorted array:", arr);
let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);

/*
Dry Run Table:
Time Complexity: O(n^2)
Space Complexity: O(1)
| Pass | i | j | array[j]  | array[j+1]  | Condition                          | Array State                  |
|------|---|---|-----------|-------------|------------------------------------|------------------------------|
| 1    | 0 | 0 | 64        | 34          | true                               | [34, 64, 25, 12, 22, 11, 90] |
| 1    | 0 | 1 | 64        | 25          | true                               | [34, 25, 64, 12, 22, 11, 90] |
| 1    | 0 | 2 | 64        | 12          | true                               | [34, 25, 12, 64, 22, 11, 90] |
| 1    | 0 | 3 | 64        | 22          | true                               | [34, 25, 12, 22, 64, 11, 90] |
| 1    | 0 | 4 | 64        | 11          | true                               | [34, 25, 12, 22, 11, 64, 90] |
| 1    | 0 | 5 | 64        | 90          | false                              | [34, 25, 12, 22, 11, 64, 90] |
| 2    | 1 | 0 | 34        | 25          | true                               | [25, 34, 12, 22, 11, 64, 90] |
| 2    | 1 | 1 | 34        | 12          | true                               | [25, 12, 34, 22, 11, 64, 90] |
| 2    | 1 | 2 | 34        | 22          | true                               | [25, 12, 22, 34, 11, 64, 90] |
| 2    | 1 | 3 | 34        | 11          | true                               | [25, 12, 22, 11, 34, 64, 90] |
| 2    | 1 | 4 | 34        | 64          | false                              | [25, 12, 22, 11, 34, 64, 90] |
| 3    | 2 | 0 | 25        | 12          | true                               | [12, 25, 22, 11, 34, 64, 90] |
| 3    | 2 | 1 | 25        | 22          | true                               | [12, 22, 25, 11, 34, 64, 90] |
| 3    | 2 | 2 | 25        | 11          | true                               | [12, 22, 11, 25, 34, 64, 90] |
| 3    | 2 | 3 | 25        | 34          | false                              | [12, 22, 11, 25, 34, 64, 90] |
| 4    | 3 | 0 | 12        | 22          | false                              | [12, 22, 11, 25, 34, 64, 90] |
| 4    | 3 | 1 | 22        | 11          | true                               | [12, 11, 22, 25, 34, 64, 90] |
| 4    | 3 | 2 | 22        | 25          | false                              | [12, 11, 22, 25, 34, 64, 90] |
| 5    | 4 | 0 | 12        | 11          | true                               | [11, 12, 22, 25, 34, 64, 90] |
| 5    | 4 | 1 | 12        | 22          | false                              | [11, 12, 22, 25, 34, 64, 90] |
| 6    | 5 | 0 | 11        | 12          | false                              | [11, 12, 22, 25, 34, 64, 90] |
*/