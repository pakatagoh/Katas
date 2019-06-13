function solution(N) {
  const binary = convertToBinary(N);
  let max = 0;
  let currentMax = 0;
  let startIndex = binary.length - 1;

  for (let i = startIndex; i >= 0; i--) {
    if (binary[i] === '1') {
      startIndex = i;
      break;
    }
  }

  for (let j = startIndex - 1; j >= 0; j--) {
    if (binary[j] === '0') {
      currentMax += 1;
      continue;
    }

    if (currentMax > max) {
      max = currentMax;
      currentMax = 0;
    }

    if (binary[j] === '1') {
      currentMax = 0;
    }
  }

  return max;
}

function convertToBinary(N) {
  return N.toString(2);
}

module.exports = { solution };
