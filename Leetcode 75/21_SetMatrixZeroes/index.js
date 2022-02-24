/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroPositions = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        zeroPositions.push([y, x]);
      }
    }
  }

  for (let i = 0; i < zeroPositions.length; i++) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[zeroPositions[i][0]][x] = 0;
    }
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][zeroPositions[i][1]] = 0;
    }
  }

  return matrix;
};

var setZeroesConstantSpace = function (matrix) {
  let isTopRowZero = false;
  let isLeftColumnZero = false;

  for (let x = 0; x < matrix[0].length; x++) {
    if (matrix[0][x] === 0) {
      isTopRowZero = true;
    }
  } // m
  for (let y = 0; y < matrix.length; y++) {
    if (matrix[y][0] === 0) {
      isLeftColumnZero = true;
    }
  } // n

  for (let x = 1; x < matrix[0].length; x++) {
    for (let y = 1; y < matrix.length; y++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0;
        matrix[y][0] = 0;
      }
    }
  } // m x n

  for (let x = 1; x < matrix[0].length; x++) {
    if (matrix[0][x] === 0) {
      for (let y = 1; y < matrix.length; y++) {
        matrix[y][x] = 0;
      }
    }
  } // m x n
  for (let y = 1; y < matrix.length; y++) {
    if (matrix[y][0] === 0) {
      for (let x = 1; x < matrix[0].length; x++) {
        matrix[y][x] = 0;
      }
    }
  } // m x n

  if (isLeftColumnZero) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][0] = 0;
    } // n
  }
  if (isTopRowZero) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[0][x] = 0;
    } // m
  }

  return matrix;
};

var setZeroesConstantSpaceV2 = function (matrix) {
  let isTopRowZero = false;
  // let isLeftColumnZero = false;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0;
        if (y > 0) {
          matrix[y][0] = 0;
        } else {
          isTopRowZero = true;
        }
      }
    }
  }

  for (let x = 1; x < matrix[0].length; x++) {
    for (let y = 1; y < matrix.length; y++) {
      if (matrix[0][x] === 0 || matrix[y][0] === 0) {
        matrix[y][x] = 0;
      }
    }
  } // m x n

  if (matrix[0][0] === 0) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][0] = 0;
    }
  }

  if (isTopRowZero) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[0][x] = 0;
    } // m
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
//  [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
//  ]

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1],
// ];
