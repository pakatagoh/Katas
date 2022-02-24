/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix;
  }

  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {
      temp = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = temp;
    }

    left++;
    right--;
  }

  return matrix;
};

// 1,2,3,4
// 4,5,6,8
// 7,8,9,2
// 3,1,4,7
