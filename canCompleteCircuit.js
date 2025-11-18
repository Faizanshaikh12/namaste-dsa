/**There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.**/

var canCompleteCircuit = function (gas, cost) {
    let currGain = 0;
    let totalGain = 0;
    let ans = 0;

    for (let i = 0; i < gas.length; i++) {
        gain = gas[i] - cost[i];
        currGain = currGain + gain;
        totalGain = totalGain + gain;
        if (currGain < 0) {
            ans = i + 1;
            currGain = 0;
        }
    }

    return totalGain >= 0 ? ans : -1;

};

// Example Usage
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); // Output: 3
// Example Usage Nagative Case
const gas1 = [2, 3, 4];
const cost1 = [3, 4, 3];
console.log(canCompleteCircuit(gas1, cost1)); // Output: -1

/*
Dry Run Table:
| i | gas[i] | cost[i] | gain (gas[i]-cost[i]) | currGain | totalGain | ans |
|---|--------|---------|-----------------------|----------|-----------|-----|
| 0 |   1    |    3    |          -2           |    0     |    -2     |  1  |
| 1 |   2    |    4    |          -2           |    0     |    -4     |  2  |
| 2 |   3    |    5    |          -2           |    0     |    -6     |  3  |
| 3 |   4    |    1    |          +3           |    3     |    -3     |  3  |
| 4 |   5    |    2    |          +3           |    6     |     0     |  3  |
Final Output: Since totalGain (0) >= 0, return ans (3)

Nagative Case Dry Run Table:
| i | gas[i] | cost[i] | gain (gas[i]-cost[i]) | currGain | totalGain | ans |
|---|--------|---------|-----------------------|----------|-----------|-----|
| 0 |   2    |    3    |          -1           |    0     |    -1     |  1  |
| 1 |   3    |    4    |          -1           |    0     |    -2     |  2  |
| 2 |   4    |    3    |          +1           |    1     |    -1     |  2  |
Final Output: Since totalGain (-1) < 0, return -1
*/
/*
Time Complexity: O(n) - We traverse the gas and cost arrays once.
Space Complexity: O(1) - We use a constant amount of extra space.
*/