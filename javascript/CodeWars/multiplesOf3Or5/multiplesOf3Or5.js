const solution = number => {
  let sum = 0;

  for (let i = 3; i < number; i++) {
    if (i % 15 === 0) {
      sum = sum + i;
    } else if (i % 3 === 0) {
      sum = sum + i;
    } else if (i % 5 === 0) {
      sum = sum + i;
    }
  }

  return sum;
};

export default solution;
