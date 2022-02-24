/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  let slider = nums.length - 2;
  let currentIndex = nums.length - 1;
  while (slider >= 0) {
    const requiredAmount = currentIndex - slider;
    if (nums[slider] < requiredAmount) {
      slider--;
    } else {
      if (slider === 0) {
        return true;
      }
      currentIndex = slider;
      slider = slider - 1;
    }
  }

  return false;
};
