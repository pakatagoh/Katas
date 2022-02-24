const solution = (arr, X) => {
  let sum = (X * (X + 1)) / 2;
  const numTracker = {};
  for (let i = 0; i < arr.length; i++) {
    if (numTracker[arr[i]]) continue;
    if (arr[i] <= X) numTracker[arr[i]] = 1;
    sum -= arr[i];
    if (sum === 0) return i;
  }
  return -1;
};

module.exports = { solution };
