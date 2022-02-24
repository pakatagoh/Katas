const solution = (arr) => {
  const numCars = arr.length;
  let zeroes = 0;
  let passes = 0;

  for (let i = 0; i < numCars; i++) {
    if (arr[i] === 0) {
      zeroes++;
    } else {
      passes += zeroes;
    }
    if (passes > 1000000000) {
      passes = -1;
      break;
    }
  }
  return passes;
};

module.exports = { solution };
