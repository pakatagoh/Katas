/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// solution based on understanding that everytime you split an array, 1 side is ALWAYS sorted.
var search = function (nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((rightIndex + leftIndex) / 2);

    if (nums[midIndex] === target) return midIndex;
    // check if is in left array
    if (nums[leftIndex] <= nums[midIndex]) {
      if (nums[leftIndex] <= target && target <= nums[midIndex]) {
        // target is in the leftIndex
        rightIndex = midIndex - 1;
      } else {
        // target is in the rightIndex
        leftIndex = midIndex + 1;
      }
    } else {
      if (nums[midIndex] <= target && target <= nums[rightIndex]) {
        // target is in the rightIndex
        leftIndex = midIndex + 1;
      } else {
        // target is in the left
        rightIndex = midIndex - 1;
      }
    }
  }

  return -1;
};
