/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const baseChar = s[i];
    const charMap = {};
    charMap[baseChar] = 1;
    for (left = i - 1; left >= 0; left--) {
      const leftChar = s[left];
      if (!charMap[leftChar]) {
        charMap[leftChar] = 1;
      } else {
        break;
      }
    }
    for (right = i + 1; right < s.length; right++) {
      const rightChar = s[right];
      if (!charMap[rightChar]) {
        charMap[rightChar] = 1;
      } else {
        break;
      }
    }

    if (Object.keys(charMap).length > longest) {
      longest = Object.keys(charMap).length;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

var lengthOfLongestSubstringModified = function (s) {
  var max = 0,
    current_string = '',
    i,
    char,
    pos;

  for (i = 0; i < s.length; i += 1) {
    char = s.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) {
      current_string = current_string.substr(pos + 1);
    }
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
};

// console.log(lengthOfLongestSubstringModified('abcabcbb'));
console.log(lengthOfLongestSubstringModified('pwwkew'));
// console.log(lengthOfLongestSubstringModified("tmmzuxt"));
// console.log(lengthOfLongestSubstringModified("au"));
// console.log(lengthOfLongestSubstringModified("aabaab!bb"));
