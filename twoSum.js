var twoSum = function (nums, target) {
    const map = {}; // store index -> value

    console.log("Map initialized:", map);

    for (let i = 0; i < nums.length; i++) {
        console.log(`Iteration ${i}: current number = ${nums[i]}`);
        let diff = target - nums[i];
        console.log(`Looking for complement: ${diff}`);

        if (map[diff] !== undefined) {
            console.log(`Found complement ${diff} in map at index ${map[diff]}`);
            return [map[diff], i]
        }

        console.log(`Storing ${nums[i]} at index ${i} in map`);

        map[nums[i]] = i

        console.log("Updated map state:", map);
    }
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 7));    // [1,2]