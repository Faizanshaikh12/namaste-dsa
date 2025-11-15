/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Solution using Two Pointers
// var merge = function (nums1, m, nums2, n) {
//     let nums1Copy = nums1.slice(0, m);
//     let p1 = 0;
//     let p2 = 0;

//     for (let i = 0; i < m + n; i++) {
//         if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//             nums1[i] = nums1Copy[p1];
//             p1++;
//         } else {
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }
// };

// Optimized Solution using Two Pointers from the end
var merge = function (nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        console.log(`i: ${i}, p1: ${p1}, p2: ${p2}, nums1: ${nums1}`);
        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            console.log(`Placing nums1[${p1}] = ${nums1[p1]} at nums1[${i}]`, nums1);
            p1--;
        } else {
            nums1[i] = nums2[p2];
            console.log(`Placing nums2[${p2}] = ${nums2[p2]} at nums1[${i}]`, nums1);
            p2--
        }
    }

};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

/*
Dry Run Table:
Example1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
| i | p1 | p2 | nums1Copy   | nums2 | nums1               |
|---|----|----|--------------|-------|---------------------|
| 0 | 0  | 0  | [1,2,3]     | [2,5,6]| [1,2,3,0,0,0]      |
| 1 | 1  | 0  | [1,2,3]     | [2,5,6]| [1,2,3,0,0,0]      |
| 2 | 1  | 1  | [1,2,3]     | [2,5,6]| [1,2,2,0,0,0]      |
| 3 | 2  | 1  | [1,2,3]     | [2,5,6]| [1,2,2,3,0,0]      |
| 4 | 3  | 1  | [1,2,3]     | [2,5,6]| [1,2,2,3,5,0]      |
| 5 | 3  | 2  | [1,2,3]     | [2,5,6]| [1,2,2,3,5,6]      |

Example2: nums1 = [1], m = 1, nums2 = [2], n = 1
| i | p1 | p2 | nums1Copy | nums2 | nums1           |
|---|----|----|------------|-------|-----------------|
| 0 | 0  | 0  | [1]        | [2]   | [1]             |
| 1 | 1  | 0  | [1]        | [2]   | [1, 2]         |

Example3: nums1 = [2, 0], m = 1, nums2 = [1], n = 1
| i | p1 | p2 | nums1Copy | nums2 | nums1           |
|---|----|----|------------|-------|-----------------|
| 0 | 0  | 0  | [2]        | [1]   | [1]             |
| 1 | 0  | 1  | [2]        | [1]   | [1, 2]         |

Second Solution Dry Run Table:
Example1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
| i | p1 | p2 | nums1               | nums2 |
|---|----|----|---------------------|-------|
| 5 | 2  | 2  | [1,2,3,0,0,6]      | [2,5,6]|
| 4 | 2  | 1  | [1,2,3,0,5,6]      | [2,5,6]|
| 3 | 2  | 0  | [1,2,3,3,5,6]      | [2,5,6]|
| 2 | 1  | 0  | [1,2,2,3,5,6]      | [2,5,6]|
| 1 | 1  | -1 | [1,2,2,3,5,6]      | [2,5,6]|
*/
