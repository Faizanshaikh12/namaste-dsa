/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        if (prices[i] < min) {
            min = prices[i];
        }

    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

/*
Dry Run Table:
i | prices[i] | min | prices[i]-min | maxProfit
----------------------------------------------------------
0 |     7     |  7  |      0        |     0
1 |     1     |  1  |      0        |     0
2 |     5     |  1  |      4        |     4
3 |     3     |  1  |      2        |     4
4 |     6     |  1  |      5        |     5
5 |     4     |  1  |      3        |     5
----------------------------------------------------------
Final maxProfit = 5
*/