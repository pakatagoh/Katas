/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateNaive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

var containsDuplicateEfficient = function (nums) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]] !== undefined) {
      return true;
    } else {
      seen[nums[i]] = true;
    }
  }

  return false;
};
