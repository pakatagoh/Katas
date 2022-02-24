/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.startsWith('0')) {
    return 0;
  }

  const mapping = {};
  for (let i = 1; i <= 26; i++) {
    const charCodeBeforeA = 'A'.charCodeAt(0) - 1;
    mapping[`${i}`] = String.fromCharCode(charCodeBeforeA + i);
  }

  let cache = { [s.length]: 1 };

  const dfs = (currentIndex) => {
    if (cache[currentIndex]) {
      return cache[currentIndex];
    }

    if (s[currentIndex] === '0') return 0;

    let res = dfs(currentIndex + 1);
    if (
      currentIndex + 1 < s.length &&
      (s[currentIndex] === '1' ||
        (s[currentIndex] === '2' &&
          ['0', '1', '2', '3', '4', '5', '6'].includes(s[currentIndex + 1])))
    ) {
      res += dfs(currentIndex + 2);
    }

    cache[currentIndex] = res;
    return res;
  };

  return dfs(0);
};

//  console.log(numDecodings('1'));
console.log(numDecodings('27'));
console.log(numDecodings('1210621'));
console.log(numDecodings('12')); // 2, "12" could be decoded as "AB" (1 2) or "L" (12).
console.log(numDecodings('226')); // 3, "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
//  console.log(numDecodings('06')); // 0, "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
// console.log(numDecodings('012')); // 0,

var numDecodingsLoop = function (s) {
  if (s.startsWith('0')) {
    return 0;
  }

  let cache = { [s.length]: 1 };

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      cache[i] = 0;
    } else {
      cache[i] = cache[i + 1];
    }

    if (
      i + 1 < s.length &&
      (s[i] === '1' ||
        (s[i] === '2' &&
          ['0', '1', '2', '3', '4', '5', '6'].includes(s[i + 1])))
    ) {
      cache[i] += cache[i + 2];
    }
  }
  return cache[0];
};
