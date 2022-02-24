/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const seen = {};

  for (let i = 0; i < numbers.length; i++) {
    const remainder = target - numbers[i];
    if (seen[remainder] !== undefined) {
      return [seen[remainder] + 1, i + 1];
    }

    seen[numbers[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
