const solution = (S, P, Q) => {
  let dna = '';
  const ans = [];

  for (let i = 0; i < P.length; i++) {
    dna = S.slice(P[i], Q[i] + 1);

    if (dna.indexOf('A') !== -1) {
      ans.push(1);
      continue;
    }
    if (dna.indexOf('C') !== -1) {
      ans.push(2);
      continue;
    }
    if (dna.indexOf('G') !== -1) {
      ans.push(3);
      continue;
    }
    ans.push(4);
  }

  return ans;
};

module.exports = { solution };
