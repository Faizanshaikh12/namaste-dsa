/**
 * @param {number[]} nums
 * @return {number}
 * []
 */
let nums = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log("Before I", i, nums[i]);
        console.log("Before X", x, nums[x]);
        
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
        console.log("After I", i, nums[i]);
        console.log("After X", x, nums[x]);
    }
    return x+1;
};

const k = removeDuplicates(nums);
console.log("Input:", nums);
console.log("Length after removing duplicates:", k);
console.log("Array after removing duplicates:", nums.slice(0, k));


/* 
Dry Run Table
i | nums[i] | x | nums[x] | Condition (nums[i] > nums[x]) | Action Taken         | Updated x | Updated nums[x]
-------------------------------------------------------------------------------------------
0 |    0    | 0 |    0    |            false              | No action            |     0     |      0
1 |    0    | 0 |    0    |            false              | No action            |     0     |      0
2 |    1    | 0 |    0    |            true               | x = x + 1; nums[x] = nums[i] |     1     |      1
3 |    1    | 1 |    1    |            false              | No action            |     1     |      1
4 |    1    | 1 |    1    |            false              | No action            |     1     |      1
5 |    2    | 1 |    1    |            true               | x = x + 1; nums[x] = nums[i] |     2     |      2
6 |    2    | 2 |    2    |            false              | No action            |     2     |      2
7 |    3    | 2 |    2    |            true               | x = x + 1; nums[x] = nums[i] |     3     |      3
8 |    3    | 3 |    3    |            false              | No action            |     3     |      3
9 |    4    | 3 |    3    |            true               | x = x + 1; nums[x] = nums[i] |     4     |      4
-------------------------------------------------------------------------------------------
Final Value of x: 4
*/