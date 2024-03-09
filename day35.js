var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));