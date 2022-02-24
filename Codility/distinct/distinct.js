const solution = (arr) => {
  const tracker = arr.reduce((accum, currentVal) => {
    if (accum[currentVal]) {
      accum[currentVal]++;
    } else {
      accum[currentVal] = 1;
    }
    return accum;
  }, {});

  return Object.values(tracker).length;
};

module.exports = { solution };
