// Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const array = [10, 23, 45, 70, 11, 15];
const target = 70;
const result = linearSearch(array, target);
console.log(result); // Output: 3

/* 
Dry Run Table:
| Iteration | i | arr[i] | target | arr[i] === target | Action          |
|-----------|---|--------|--------|-------------------|-----------------|
| 1         | 0 | 10     | 70     | false             | Continue        |
| 2         | 1 | 23     | 70     | false             | Continue        |
| 3         | 2 | 45     | 70     | false             | Continue        |
| 4         | 3 | 70     | 70     | true              | Return index 3  |
| 5         | - | -      | -      | -                 | -               |
*/