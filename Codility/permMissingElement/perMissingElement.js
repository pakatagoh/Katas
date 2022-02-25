const solution = (arr) => {
  // write your code in JavaScript (Node.js 4.0.0)
  var size = arr.length;
  var sum = ((size + 1) * (size + 2)) / 2;
  for (i = 0; i < size; i++) {
    sum -= arr[i];
  }
  return sum;
};

module.exports = { solution };

// mathematical formula for sum of consecutive integers from 1 to n is (n+1)*(n+2)/2
