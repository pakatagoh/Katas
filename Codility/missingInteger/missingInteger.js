const solution = (arr) => {
  const positiveNums = arr.filter((num) => num >= 1);

  if (positiveNums.length === 0) return 1;

  positiveNums.sort((a, b) => a - b);

  if (positiveNums[0] !== 1) return 1;
  for (let i = 0; i < positiveNums.length; i++) {
    if (positiveNums[i + 1] - positiveNums[i] > 1) {
      return positiveNums[i] + 1;
    }
  }
  return positiveNums[positiveNums.length - 1] + 1;
};

module.exports = { solution };
