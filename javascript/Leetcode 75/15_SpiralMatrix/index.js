/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;

  let top = 0;
  let bottom = matrix.length - 1;

  const visited = { '00': matrix[0][0] };
  const result = [matrix[0][0]];

  let current = [top, left];
  let orientation = 'right';
  let isEnd = false;
  while (!isEnd) {
    switch (orientation) {
      case 'right': {
        const [y, x] = current;
        const xPosition = x + 1;
        if (xPosition <= right && visited[`${y}${xPosition}`] === undefined) {
          result.push(matrix[y][xPosition]);
          visited[`${y}${xPosition}`] = matrix[y][xPosition];
          current = [y, xPosition];
        } else {
          const yPosition = y + 1;
          if (
            yPosition <= bottom &&
            visited[`${yPosition}${x}`] === undefined
          ) {
            result.push(matrix[yPosition][x]);
            visited[`${yPosition}${x}`] = matrix[yPosition][x];
            current = [yPosition, x];
            orientation = 'down';
            // console.log('current:', current)
          } else {
            isEnd = true;
          }
        }

        break;
      }

      case 'down': {
        const [y, x] = current;
        const yPosition = y + 1;
        if (yPosition <= bottom && visited[`${yPosition}${x}`] === undefined) {
          result.push(matrix[yPosition][x]);
          visited[`${yPosition}${x}`] = matrix[yPosition][x];
          current = [yPosition, x];
        } else {
          const xPosition = x - 1;
          if (xPosition >= left && visited[`${y}${xPosition}`] === undefined) {
            result.push(matrix[y][xPosition]);
            visited[`${y}${xPosition}`] = matrix[y][xPosition];
            current = [y, xPosition];
            orientation = 'left';
          } else {
            isEnd = true;
          }
        }
        break;
      }

      case 'left': {
        const [y, x] = current;
        const xPosition = x - 1;
        if (xPosition >= left && visited[`${y}${xPosition}`] === undefined) {
          result.push(matrix[y][xPosition]);
          visited[`${y}${xPosition}`] = matrix[y][xPosition];
          current = [y, xPosition];
        } else {
          const yPosition = y - 1;
          if (yPosition >= top && visited[`${yPosition}${x}`] === undefined) {
            result.push(matrix[yPosition][x]);
            visited[`${yPosition}${x}`] = matrix[yPosition][x];
            current = [yPosition, x];
            orientation = 'up';
          } else {
            isEnd = true;
          }
        }
        break;
      }

      case 'up': {
        const [y, x] = current;
        const yPosition = y - 1;
        if (matrix[yPosition][x] === matrix[top][left]) {
          const xPosition = x + 1;
          if (visited[`${y}${xPosition}`] !== undefined) {
            isEnd = true;
            break;
          } else {
            result.push(matrix[y][xPosition]);
            visited[`${y}${xPosition}`] = matrix[y][xPosition];
            current = [y, xPosition];
            left = left + 1;
            right = right - 1;
            top = top + 1;
            bottom = bottom - 1;
            orientation = 'right';
          }
        } else {
          result.push(matrix[yPosition][x]);
          visited[`${yPosition}${x}`] = matrix[yPosition][x];
          current = [yPosition, x];
        }

        break;
      }

      default:
        break;
    }
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(
  spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
console.log(spiralOrder([[1]]));

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

const spiralOrderWithReverse = (matrix) => {
  const result = [];
  while (matrix.length) {
    const nums = matrix.shift();
    result.push(...nums);

    for (let i = 0; i < matrix.length; i++) {
      const val = matrix[i].pop();

      if (val !== undefined) {
        result.push(val);
        matrix[i].reverse();
      }
    }

    matrix.reverse();
  }

  return result;
};
