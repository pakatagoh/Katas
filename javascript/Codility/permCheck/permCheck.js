const solution = (arr) => {
  let sum = (arr.length * (arr.length + 1)) / 2;

  const numTracker = {};
  for (let i = 0; i < arr.length; i++) {
    if (numTracker[arr[i]]) return 0;
    numTracker[arr[i]] = 1;
    sum -= arr[i];
  }
  return sum !== 0 ? 0 : 1;
};

module.exports = { solution };
