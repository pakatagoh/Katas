const solution = (X, Y, D) => {
  if (X === Y) return 0;

  const difference = Y - X;
  const jumps = Math.floor(difference / D);

  if (difference % D !== 0) {
    return jumps + 1;
  }

  return jumps;
};

module.exports = { solution };
