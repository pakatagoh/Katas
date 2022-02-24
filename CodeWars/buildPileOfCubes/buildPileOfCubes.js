const findNb = m => {
  let sum = 0;
  let n;
  for (n = 1; sum < m; n++) {
    sum = 0;
    for (let i = 0; i < n; i++) {
      sum = sum + Math.pow(n - i, 3);
    }
  }

  return sum !== m ? -1 : n - 1;
};

findNb(36);

export default findNb;
