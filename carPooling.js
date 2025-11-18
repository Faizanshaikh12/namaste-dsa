/*There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.*/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let loc = Array(1001).fill(0);
    
    for (let i = 0; i < trips.length; i++) {
        let [passengers, from, to] = trips[i];
        loc[from] += passengers;
        loc[to] -= passengers;
    }

    let usedCapacity = 0;
    for (let i = 0; i < 1001; i++) {
        usedCapacity = usedCapacity + loc[i];
        if (usedCapacity > capacity) {
            return false;
        }
    }
    return true;
};

// Example usage:
const trips = [[2,1,5],[3,3,7]];
const capacity = 4;
console.log(carPooling(trips, capacity)); // Output: false
// Example usage:
const trips2 = [[2,1,5],[3,3,7]];
const capacity2 = 5;
console.log(carPooling(trips2, capacity2)); // Output: true
/* Dry Run Table:
| Location (km) | Passengers Change | Used Capacity |
|---------------|-------------------|---------------|
|      0        |         0         |       0       |
|      1        |        +2         |       2       |
|      2        |         0         |       2       |
|      3        |        +3         |       5       |
|      4        |         0         |       5       |
|      5        |        -2         |       3       |
|      6        |         0         |       3       |
|      7        |        -3         |       0       |
*/
// Time Complexity: O(N + M) where N is the number of trips and M is the range of locations (1001 in this case).
// Space Complexity: O(M) for the loc array.