// Insertation Sort Algorithm in JavaScript

let arr = [1,7,3,9,4,2,6,5,8];

function insertionSort(array) {
    let n = array.length;
    console.log("Starting Insertion Sort...", array);
    for (let i = 1; i < n; i++) {
        let curr = array[i];
        let prevIndex = i - 1;
        console.log(`Pass ${i}: Inserting ${curr}`);
        while (prevIndex >= 0 && array[prevIndex] > curr) {
            console.log(`${array[prevIndex]} > ${curr}, shifting ${array[prevIndex]} to the right`);
            array[prevIndex + 1] = array[prevIndex];
            prevIndex--;
        }
        console.log(`Placing ${curr} at position ${prevIndex + 1}`);
        array[prevIndex + 1] = curr;
    }
}

// Example usage
console.log("Unsorted array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", arr);

/*
Dry Run Table:
Time Complexity: O(n^2)
Space Complexity: O(1)
| Pass | i | curr | prevIndex | array[prevIndex] | Condition                          | Array State                  |
|------|---|------|-----------|------------------|------------------------------------|------------------------------|
| 1    | 1 | 7    | 0         | 1                | false                              | [1, 7, 3, 9, 4, 2, 6, 5, 8]  |
| 2    | 2 | 3    | 1         | 7                | true                               | [1, 7, 7, 9, 4, 2, 6, 5, 8]  |
| 2    | 2 | 3    | 0         | 1                | false                              | [1, 3, 7, 9, 4, 2, 6, 5, 8]  |
| 3    | 3 | 9    | 2         | 7                | false                              | [1, 3, 7, 9, 4, 2, 6, 5, 8]  |
| 4    | 4 | 4    | 3         | 9                | true                               | [1, 3, 7, 9, 9, 2, 6, 5, 8]  |
| 4    | 4 | 4    | 2         | 7                | true                               | [1, 3, 7, 7, 9, 2, 6, 5, 8]  |
| 4    | 4 | 4    | 1         | 3                | false                              | [1, 3, 4, 7, 9, 2, 6, 5, 8]  |
| 5    | 5 | 2    | 4         | 9                | true                               | [1, 3, 4, 7, 9, 9, 6, 5, 8]  |
| 5    | 5 | 2    | 3         | 7                | true                               | [1, 3, 4, 7, 7, 9, 6, 5, 8]  |
| 5    | 5 | 2    | 2         | 4                | true                               | [1, 3, 4, 4, 7, 9, 6, 5, 8]  |
| 5    | 5 | 2    | 1         | 3                | false                              | [1, 2, 3, 4, 7, 9, 6, 5, 8]  |
| 6    | 6 | 6    | 5         | 9                | true                               | [1, 2, 3, 4, 7, 9, 9, 5, 8]  |
| 6    | 6 | 6    | 4         | 7                | true                               | [1, 2, 3, 4, 7, 7, 9, 5, 8]  |
| 6    | 6 | 6    | 3         | 4                | false                              | [1, 2, 3, 4, 6, 7, 9, 5, 8]  |
| 7    | 7 | 5    | 6         | 9                | true                               | [1, 2, 3, 4, 6, 7, 9, 9, 8]  |
| 7    | 7 | 5    | 5         | 7                | true                               | [1, 2, 3, 4, 6, 7, 7, 9, 8]  |
| 7    | 7 | 5    | 4         | 6                | true                               | [1, 2, 3, 4, 6, 6, 7, 9, 8]  |
| 7    | 7 | 5    | 3         | 4                | false                              | [1, 2, 3, 4, 5, 6, 7, 9, 8]  |
| 8    | 8 | 8    | 7         | 9                | true                               | [1, 2, 3, 4, 5, 6, 7, 9, 9]  |
| 8    | 8 | 8    | 6         | 7                | false                              | [1, 2, 3, 4, 5, 6, 7, 8, 9]  |
*/