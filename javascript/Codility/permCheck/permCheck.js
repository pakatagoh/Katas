const solution = (arr) => {
  if (arr.length === 1) return 1;

  const sortedArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] !== 1) {
      return 0;
    }
  }
  return 1;
};

module.exports = { solution };
