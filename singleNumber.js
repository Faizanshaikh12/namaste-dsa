/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1
var singleNumber = function(nums) {
    let numCount = {};
    for (let i=0; i<nums.length; i++) {
        if (numCount[nums[i]] === undefined) {
            numCount[nums[i]] = 1;
        } else {
            numCount[nums[i]] += 1;
        }
    }
    for (let key in numCount) {
        if (numCount[key] === 1) {
            return parseInt(key);
        }
    }
};

// // solution 2 (using XOR)
// var singleNumber = function(nums) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result = result ^ nums[i];
//     }
//     return result;
// };

// // Solution 3
// var singleNumber = function(nums) {
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i += 2) {
//         if (nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
// };

// Example usage:
console.log(singleNumber([4,1,2,1,2,1,1])); // Output: 4
console.log(singleNumber([2,2,1]));     // Output: 1
console.log(singleNumber([1]));         // Output: 1


/*
Dry Run Table:
| Iteration | nums[i] | numCount (after update)       |
|-----------|---------|-------------------------------|
| 0         | 4       | { '4': 1 }                    |
| 1         | 1       | { '1': 1, '4': 1 }            |
| 2         | 2       | { '1': 1, '2': 1, '4': 1 }    |
| 3         | 1       | { '1': 2, '2': 1, '4': 1 }    |
| 4         | 2       | { '1': 2, '2': 2, '4': 1 }    |
| 5         | 1       | { '1': 3, '2': 2, '4': 1 }    |
| 6         | 1       | { '1': 4, '2': 2, '4': 1 }    |
| Final Check|         | '4' has count 1, return 4     |
*/