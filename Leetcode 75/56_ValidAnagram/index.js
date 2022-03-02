/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sCache = {};

  if (t.length !== s.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (sCache[s[i]] !== undefined) {
      sCache[s[i]] += 1;
    } else {
      sCache[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (sCache[t[j]] !== undefined) {
      sCache[t[j]] -= 1;
      if (sCache[t[j]] === 0) {
        delete sCache[t[j]];
      }
    } else {
      return false;
    }
  }

  const remainingCacheLength = Object.entries(sCache).length;

  return remainingCacheLength === 0;
};
