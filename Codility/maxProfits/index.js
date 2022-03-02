function naive(prices) {
  let max = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max < 0 ? 0 : max;
}
console.log(naive([7, 1, 5, 3, 6, 4])); // 5
console.log(naive([7, 6, 4, 3, 1])); // 0

function efficient(prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let maxTemp = 0;
  let maxSoFar = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    maxTemp = Math.max(maxTemp, prices[i] - min);
    maxSoFar = Math.max(maxTemp, maxSoFar);

    min = Math.min(min, prices[i]);
  }

  return maxSoFar;
}

console.log(efficient([7, 1, 5, 3, 6, 4])); // 5
console.log(efficient([7, 6, 4, 3, 1])); // 0
