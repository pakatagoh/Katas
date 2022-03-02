/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b); // O(nums1log nums1)
  nums2.sort((a, b) => a - b); // O(nums2log nums2)

  const result = [];

  let foundIndex = -1;

  // O(nums2 * nums1)
  for (let j = 0; j < nums2.length; j++) {
    for (let i = 0; i < nums1.length; i++) {
      const startIndex = foundIndex + 1;
      if (nums2[j] === nums1[i + startIndex]) {
        result.push(nums2[j]);
        // result.push(nums1[i + startIndex])
        foundIndex = i;
        break;
      }
    }
  }

  return result;
};
