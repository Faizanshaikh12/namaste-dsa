/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    console.log(totalSum);

    let paritialSum = 0;
    for (let i=0; i < n; i++) {
        console.log(paritialSum);
        console.log(nums[i]);
        paritialSum += nums[i];
        console.log(paritialSum);
    }
    return totalSum - paritialSum;
};

// Example usage:
//console.log(missingNumber([3,0,1])); // Output: 2
//console.log(missingNumber([0,1]));   // Output: 2
//console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
console.log(missingNumber([4,0,2,1,5]));     // Output: 3


/*
Dry Run Table:
| i | nums[i] | paritialSum | totalSum | totalSum - paritialSum |
|---|---------|--------------|----------|------------------------|
| 0 |    4    |      0       |    15    |          15            |
| 1 |    0    |      4       |    15    |          11            |
| 2 |    2    |      4       |    15    |          11            |
| 3 |    1    |      6       |    15    |          9             |
| 4 |    5    |      7       |    15    |          8             |
|Final Result: 3
*/