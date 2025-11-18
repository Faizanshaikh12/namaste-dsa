// Selection Sort Algorithm Implementation

let arr = [7, 3, 9, 5, 2];

function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            console.log(`Comparing array[${j}] (${array[j]}) with array[${minIndex}] (${array[minIndex]})`);
            if (array[j] < array[minIndex]) {
                console.log(`New minimum found at index ${j} (${array[j]})`);
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        console.log(`Array after iteration ${i + 1}:`, array);
    }
    return array;
}
console.log("Original Array:", arr);
let sortedArr = selectionSort(arr);
console.log("Sorted Array:", sortedArr);

/*
Dry Run Table:
| Iteration | i | j | minIndex | Array State         |
|-----------|---|---|----------|---------------------|
| 1         | 0 | 1 | 1        | [7, 3, 9, 5, 2]     |
|           |   | 2 | 1        | [7, 3, 9, 5, 2]     |
|           |   | 3 | 1        | [7, 3, 9, 5, 2]     |
|           |   | 4 | 4        | [7, 3, 9, 5, 2]     |
|           |   |   |          | [2, 3, 9, 5, 7]     |
| 2         | 1 | 2 | 1        | [2, 3, 9, 5, 7]     |
|           |   | 3 | 1        | [2, 3, 9, 5, 7]     |
|           |   | 4 | 1        | [2, 3, 9, 5, 7]     |
|           |   |   |          | [2, 3, 9, 5, 7]     |
| 3         | 2 | 3 | 3        | [2, 3, 9, 5, 7]     |
|           |   | 4 | 3        | [2, 3, 9, 5, 7]     |
|           |   |   |          | [2, 3, 5, 9, 7]     |
| 4         | 3 | 4 | 4        | [2, 3, 5, 9, 7]     |
|           |   |   |          | [2, 3, 5, 7, 9]     |
*/