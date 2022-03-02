const maxSubArrBruteForce = (nums) => {
  // let currentSum = 0
  let maxSoFar = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    // console.log('sum:', sum)
    maxSoFar = Math.max(sum, maxSoFar);
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(sum + nums[j])
      sum = sum + nums[j];
      maxSoFar = Math.max(sum, maxSoFar);
    }
  }

  return maxSoFar;
};

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
