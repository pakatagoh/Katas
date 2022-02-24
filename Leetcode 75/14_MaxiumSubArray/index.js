/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev;
  let max;

  for (let i = 0; i < nums.length; i++) {
    if (prev === undefined) {
      prev = nums[i];
      max = nums[i];
    } else {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(prev, max);
    }
  }

  return max;
};

// kadane's algorithm
