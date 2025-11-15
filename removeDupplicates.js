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
