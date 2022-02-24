/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  let cache = [1, 1];

  for (let i = n - 2; i >= 0; i--) {
    let temp = cache[0];
    let numWaysAtI = cache[0] + cache[1];

    cache = [numWaysAtI, temp];
  }

  return cache[0];
};

var climbStairsRecursion = function (n) {
  if (n === undefined) return 0;

  const recurs = (n, memo = {}) => {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 0;
    }

    if (memo[n]) return memo[n];

    const result = recurs(n - 1, memo) + recurs(n - 2, memo);
    memo[n] = result;

    return result;
  };

  return recurs(n);
};
