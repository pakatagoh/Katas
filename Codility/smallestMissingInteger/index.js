// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // A >= 1

  // [1,3,6,4,1,2]

  // if all negative numbers, return 1

  // should sort?
  // loop through each item and keep track of a min?

  A.sort((a, b) => a - b);

  if (A[A.length - 1] <= 0) {
    return 1;
  }
  if (A[0] >= 2) {
    return 1;
  }

  if (A.length === 1) {
    if (A[0] >= 2) {
      return 1;
    } else {
      return 2;
    }
  }

  let min = A[A.length - 1] + 1;

  let start = null;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      start = i;
      break;
    }
  }

  if (A[start] >= 2) {
    return 1;
  }

  for (let i = start; i < A.length - 1; i++) {
    if (i + 1 > A.length - 1) {
      return A[A.length - 1] + 1;
    }
    if (A[i + 1] - A[i] <= 1) {
      continue;
    } else {
      return A[i] + 1;
    }
  }

  return min;
}

function betterSolution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 1;
  // let's keep track of what we find
  const found = {};

  // loop through the given array
  for (let i = 0; i < A.length; i++) {
    // if we have a positive integer that we haven't found before
    if (A[i] > 0 && !found[A[i]]) {
      // record the fact that we found it
      found[A[i]] = true;
    }
  }

  // crawl through what we found starting at 1
  Object.entries(found).forEach(([key, bool]) => {
    // console.log(parseInt(key))
    if (parseInt(key) === result) result++;
  });

  // return the smallest positive number that we couldn't find.
  return result;
}
