/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
};

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));

/*
Dry Run Table:
| i | nums[i] | val | nums         | x | Action               |
|---|---------|-----|--------------|---|----------------------|
| 0 |    3    |  3  | [3, 2, 2, 3] | 0 | nums[0] == val      |
| 1 |    2    |  3  | [3, 2, 2, 3] | 0 | nums[1] != val      |
|   |         |     | [2, 2, 2, 3] | 1 | nums[0] = nums[1]; x++ |
| 2 |    2    |  3  | [2, 2, 2, 3] | 1 | nums[2] != val      |
|   |         |     | [2, 2, 2, 3] | 2 | nums[1] = nums[2]; x++ |
| 3 |    3    |  3  | [2, 2, 2, 3] | 2 | nums[3] == val      |
|   |         |     |              |   |                      |
Final Result: 2
*/