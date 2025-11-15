/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
};
// Example usage:
let arr = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(arr)); // Output: 3

/*
Dry Run Table:
| i | nums[i] | currentCount | maxCount | Explanation                      |
|---|---------|--------------|----------|----------------------------------|
| 0 |    1    |      1       |    1     | Found a 1, increment currentCount|
| 1 |    1    |      2       |    2     | Found another 1, increment again |
| 2 |    0    |      0       |    2     | Found a 0, reset currentCount    |
| 3 |    1    |      1       |    2     | Found a 1, increment currentCount|
| 4 |    1    |      2       |    2     | Found another 1, increment again |
| 5 |    1    |      3       |    3     | Found another 1, increment again |
|   |         |              |          | Final maxCount is 3              |
*/