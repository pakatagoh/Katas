const solution = (arr) => {
  if (arr.length < 3) {
    return 0;
  }

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] + arr[i - 1] > arr[i]) {
      return 1;
    }
  }

  return 0;
};

module.exports = { solution };
