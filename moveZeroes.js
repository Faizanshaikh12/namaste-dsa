/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++
        }
    }

    // Fill all the remaning elements to zero
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Example usage:
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]


/*
Dry Run Table:
| i | nums[i] | x | nums after iteration          |
|---|---------|---|-------------------------------|
| 0 |    0    | 0 | [0, 1, 0, 3, 12]             |
| 1 |    1    | 1 | [1, 1, 0, 3, 12]             |
| 2 |    0    | 1 | [1, 1, 0, 3, 12]             |
| 3 |    3    | 2 | [1, 3, 0, 3, 12]             |
| 4 |   12    | 3 | [1, 3, 12, 3, 12]            |
|   |         |   | After filling zeros:          |
|   |         |   | [1, 3, 12, 0, 0]             |
*/