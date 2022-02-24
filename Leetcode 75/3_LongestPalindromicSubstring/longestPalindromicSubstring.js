var longestPalindromeNaive = function (s) {
  // const subStrings = [];
  if (s.length === 0) return '';
  if (s.length === 1) return s;

  maxString = '';
  for (i = 0; i < s.length; i++) {
    for (j = i; j < s.length; j++) {
      // subStrings.push(s.substring(i, j + 1));
      const newSubstring = s.substring(i, j + 1);
      if (checkIfPalindrome(newSubstring)) {
        if (newSubstring.length > maxString.length) {
          maxString = newSubstring;
        }
      }
    }
  }

  return maxString;
};

function checkIfPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

const longestPalindrome = (s) => {
  if (s.length === 0) return '';
  if (s.length === 1) return s;

  if (s.length === 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }

  let maxString = s[0];

  const table = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    table[i][i] = true;
  }

  for (let start = s.length - 2; start >= 0; start--) {
    for (let end = start + 1; start < s.length; end++) {
      if (s[start] === s[end]) {
        if (end - start === 1 || table[start + 1][end - 1]) {
          table[start][end] = true;
          const newSubstring = s.substring(start, end + 1);
          if (newSubstring.length > maxString.length) {
            maxString = newSubstring;
          }
        }
      }
    }
  }
  console.log('table: ', table);

  return maxString;
};

const longestPalindromeExpand = (s) => {
  if (!s || s.length <= 1) {
    return s;
  }

  let longest = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

const expand = (str, begin, end) => {
  while (begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
    begin--;
    end++;
  }
  return str.substring(begin + 1, end);
};


// Manacher's Algorithm
// Gives O(n) time and O(n) space
// https://hackernoon.com/manachers-algorithm-explained-longest-palindromic-substring-22cb27a5e96f
