const solution = (arr) => {
  const numList = arr.reduce((accum, currentVal) => {
    if (!accum[currentVal]) {
      accum[currentVal] = 1;
      return accum;
    }

    accum[currentVal] += 1;

    return accum;
  }, {});

  const oddOneOut = Object.entries(numList).find(([key, value]) => {
    return value % 2 !== 0;
  });

  return Number(oddOneOut[0]);
};

module.exports = { solution };
