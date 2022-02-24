/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length * board[0].length < word.length) {
    return false;
  }
  // console.log('hello')

  let startPoints = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === word[0]) {
        startPoints.push([y, x]);
        if (word.length === 1) {
          return true;
        }
      }
    }
  }

  const dfs = (board, word, prevCellIndexes, nextWordCharIndex, visited) => {
    const currentCharToSearch = word[nextWordCharIndex];
    let validCellsToSearch = [];

    let newVisited = { ...visited };

    // const visitedKey = `${prevCellIndexes[0]}${prevCellIndexes[1]}`;

    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0: {
          const nextPossibleCellIndexes = [
            prevCellIndexes[0],
            prevCellIndexes[1] + 1,
          ];

          // console.log(visited[visitedKey])
          // console.log(!visited[visitedKey])
          if (nextPossibleCellIndexes[1] <= board[0].length - 1) {
            const visitedKey = `${nextPossibleCellIndexes[0]}${nextPossibleCellIndexes[1]}`;
            if (!visited[visitedKey]) {
              validCellsToSearch.push(nextPossibleCellIndexes);
            }
          }
          break;
        }
        case 1: {
          const nextPossibleCellIndexes = [
            prevCellIndexes[0] + 1,
            prevCellIndexes[1],
          ];
          if (nextPossibleCellIndexes[0] <= board.length - 1) {
            const visitedKey = `${nextPossibleCellIndexes[0]}${nextPossibleCellIndexes[1]}`;
            if (!visited[visitedKey]) {
              validCellsToSearch.push(nextPossibleCellIndexes);
            }
          }
          break;
        }
        case 2: {
          const nextPossibleCellIndexes = [
            prevCellIndexes[0],
            prevCellIndexes[1] - 1,
          ];
          if (nextPossibleCellIndexes[1] >= 0) {
            const visitedKey = `${nextPossibleCellIndexes[0]}${nextPossibleCellIndexes[1]}`;
            if (!visited[visitedKey]) {
              validCellsToSearch.push(nextPossibleCellIndexes);
            }
          }
          break;
        }

        case 3: {
          const nextPossibleCellIndexes = [
            prevCellIndexes[0] - 1,
            prevCellIndexes[1],
          ];
          if (nextPossibleCellIndexes[0] >= 0) {
            const visitedKey = `${nextPossibleCellIndexes[0]}${nextPossibleCellIndexes[1]}`;
            // if(nextWordCharIndex === 11) {
            //   console.log(nextWordCharIndex )
            //   console.log(nextPossibleCellIndexes)
            //   console.log(visitedKey)
            //   console.log(visited)
            // }
            if (!visited[visitedKey]) {
              validCellsToSearch.push(nextPossibleCellIndexes);
            }
          }
          break;
        }
        default:
          break;
      }
    }
    // console.log(validCellsToSearch)

    if (
      validCellsToSearch.length === 0 &&
      nextWordCharIndex <= word.length - 1
    ) {
      return false;
    }

    // console.log('validCellsToSearch: ', validCellsToSearch);
    // console.log('word: ', word);
    // console.log('nextWordCharIndex: ', nextWordCharIndex);
    // console.log('word[nextWordCharIndex]: ', word[nextWordCharIndex]);

    const filteredValidCellsToSearch = validCellsToSearch.filter(
      (cell) => board[cell[0]][cell[1]] === word[nextWordCharIndex]
    );
    // console.log('filteredValidCellsToSearch: ', filteredValidCellsToSearch);
    if (filteredValidCellsToSearch.length === 0) {
      return false;
    }

    if (nextWordCharIndex === word.length - 1) {
      return true;
    }

    for (let i = 0; i < filteredValidCellsToSearch.length; i++) {
      const newKey = `${filteredValidCellsToSearch[i][0]}${filteredValidCellsToSearch[i][1]}`;
      newVisited[newKey] =
        board[filteredValidCellsToSearch[i][0]][
          filteredValidCellsToSearch[i][1]
        ];
      const result = dfs(
        board,
        word,
        filteredValidCellsToSearch[i],
        nextWordCharIndex + 1,
        newVisited
      );

      if (result) {
        return true;
      } else {
        delete newVisited[newKey];
      }
    }
  };
  // console.log(startPoints)

  for (let i = 0; i < startPoints.length; i++) {
    const result = dfs(board, word, startPoints[i], 1, {
      [`${startPoints[i][0]}${startPoints[i][1]}`]: word[0],
    });
    if (result) return true;
  }
  // const result = dfs(board, word, startPoints[0], 1, {
  //   [`${startPoints[0][0]}${startPoints[0][1]}`]: word[0],
  // });

  // console.log(result)

  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'E', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCEFSADEESE'
  )
); // true

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
); // true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  )
); // true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
); // false

console.log(exist([['a', 'a']], 'a')); // true
console.log(
  exist(
    [
      ['C', 'A', 'A'],
      ['A', 'A', 'A'],
      ['B', 'C', 'D'],
    ],
    'AAB'
  )
); // true

var existCleaner = function (board, word) {
  if (board.length * board[0].length < word.length) {
    return false;
  }
  // console.log('hello')

  let startPoints = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === word[0]) {
        startPoints.push([y, x]);
        if (word.length === 1) {
          return true;
        }
      }
    }
  }

  let visited = {};

  const dfs = (y, x, targetWordIndex) => {
    if (targetWordIndex === word.length) {
      return true;
    }
    if (
      y < 0 ||
      x < 0 ||
      y > board.length - 1 ||
      x > board[0].length - 1 ||
      word[targetWordIndex] !== board[y][x] ||
      visited[`${y}${x}`]
    ) {
      return false;
    }
    visited[`${y}${x}`] = 1;
    const result =
      dfs(y - 1, x, targetWordIndex + 1) ||
      dfs(y + 1, x, targetWordIndex + 1) ||
      dfs(y, x - 1, targetWordIndex + 1) ||
      dfs(y, x + 1, targetWordIndex + 1);

    delete visited[`${y}${x}`];
    return result;
  };

  for (let i = 0; i < startPoints.length; i++) {
    const result = dfs(startPoints[i][0], startPoints[i][1], 0);
    if (result) return true;
  }

  return false;
};
