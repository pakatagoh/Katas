/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }

  let lowercaseArr = s.toLowerCase().split('');

  const filtered = lowercaseArr.filter((item) => item.match(/[0-9a-zA-Z]/));

  console.log(filtered.join(''));

  if (filtered.length === 0) {
    return true;
  }

  if (filtered.length % 2 === 0) {
    // even
    // [a,b,b,a] // left 2
    let right = Math.floor(filtered.length / 2);
    let left = right - 1;

    while (right < filtered.length && left >= 0) {
      if (filtered[left] === filtered[right]) {
        right++;
        left--;
      } else {
        return false;
      }
    }

    return true;
  } else {
    // odd
    // [a,b,c,b,a] // left 2
    let right = Math.floor(filtered.length / 2);
    let left = right;

    while (right < filtered.length && left >= 0) {
      if (filtered[left] === filtered[right]) {
        right++;
        left--;
      } else {
        return false;
      }
    }

    return true;
  }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('ab'));
console.log(isPalindrome('ab_a'));

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeEfficient = function (s) {
  if (s.length === 1) {
    return true;
  }
  const testerRegex = /[a-z0-9]/;

  // odd
  // [a,b,c,b,a] // left 2 right 2

  // even
  // [a,b,c,c,,b,a] // left 2 right 3
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const lowercasedLeft = s[left].toLowerCase();
    const lowercasedRight = s[right].toLowerCase();

    if (!lowercasedLeft.match(testerRegex)) {
      left++;
      continue;
    }
    if (!lowercasedRight.match(testerRegex)) {
      right--;
      continue;
    }

    if (lowercasedLeft === lowercasedRight) {
      right--;
      left++;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindromeEfficient('A man, a plan, a canal: Panama'));
console.log(isPalindromeEfficient('A man, a plan, a canal: Panama'));
console.log(isPalindromeEfficient('ab'));
console.log(isPalindromeEfficient('ab_a'));
