/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  for (let i = 0; i < m; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        matrix[i].push(1);
        continue;
      }
      if (j === 0) {
        matrix[i].push(1);
        continue;
      }
      matrix[i].push(null);
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
    }
  }

  console.log(matrix);

  return matrix[m - 1][n - 1];
};

var uniquePathsShortHand = function (m, n) {
  const dp = new Array(m).fill(1);
  console.log('dp: ', dp);
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < dp.length; j++) {
      dp[j] += dp[j - 1];
      console.log(dp);
    }
  }
  console.log(dp);
  return dp[dp.length - 1];
  let matrix = [];
};
