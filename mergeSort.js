// Merge Sort: Devide and Conquer Algorithm in JavaScript

let arr = [38, 27, 43, 3, 9, 82, 10];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // [38, 27, 43]
    const right = arr.slice(mid); // [3, 9, 82, 10]
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Unsorted Array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted Array:", sortedArray);

/*
Dry Run Table:
| Step | Left Array       | Right Array      | Merged Result          |
|------|------------------|------------------|------------------------|
| 1    | [38, 27, 43]     | [3, 9, 82, 10]   |                        |
| 2    | [38]             | [27, 43]         | [27, 38, 43]          |
| 3    | [3, 9]           | [82, 10]         | [3, 9, 10, 82]        |
| 4    | [27, 38, 43]     | [3, 9, 10, 82]   | [3, 9, 10, 27, 38, 43, 82] |
Time Complexity: O(n log n)
Space Complexity: O(n)
*/

