const solution = (arr) => {
  if (arr.length === 1) return 1;

  let sum = (arr.length * (arr.length + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }
  return sum < 0 ? 0 : 1;
};

module.exports = { solution };
