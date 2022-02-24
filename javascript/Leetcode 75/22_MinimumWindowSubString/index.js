/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return '';

  const haveMap = {};
  const needMap = {};

  let haveCount = 0;
  let needCount = 0;

  for (let i = 0; i < t.length; i++) {
    if (!needMap[t[i]]) {
      needMap[t[i]] = 1;
      haveMap[t[i]] = 0;
      needCount += 1;
    } else {
      needMap[t[i]] = needMap[t[i]] + 1;
    }
  }

  let minIndexes = [];
  let minLength = null;
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const currentChar = s[rightIndex];

    if (haveMap[currentChar] !== undefined) {
      haveMap[currentChar] += 1;
      if (haveMap[currentChar] === needMap[currentChar]) {
        haveCount = haveCount + 1;
        while (haveCount === needCount) {
          const currentLength = rightIndex - leftIndex + 1;
          if (minLength === null || currentLength < minLength) {
            minLength = currentLength;
            minIndexes = [leftIndex, rightIndex];
          }
          // remove leftIndex
          const leftIndexChar = s[leftIndex];
          if (haveMap[leftIndexChar]) {
            haveMap[leftIndexChar] = haveMap[leftIndexChar] - 1;
            if (haveMap[leftIndexChar] < needMap[leftIndexChar]) {
              haveCount = haveCount - 1;
            }
          }
          leftIndex++;
        }
      }
    }
  }

  if (minIndexes.length === 0) return '';

  let resultString = '';
  for (let i = minIndexes[0]; i <= minIndexes[1]; i++) {
    resultString = resultString + s[i];
  }
  return resultString;
};

// console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
// console.log(minWindow('a', 'a')); // "a"
// console.log(minWindow('a', 'aa')); // ""
console.log(minWindow('aa', 'aa')); // "aa"
