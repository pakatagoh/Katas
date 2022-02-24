const digPow = (n, p) => {
  const calc = n
    .toString()
    .split('')
    .reduce((accum, currentVal, index) => {
      return accum + Math.pow(Number(currentVal), p + index);
    }, 0);

  return calc % n === 0 ? calc / n : -1;
};

export default digPow;
