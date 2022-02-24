/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // use a freqMap
  const freqMap = {};

  // loop to populate freqMap
  // {
  //   4: 6,
  //   2: 2,
  //   3: 1
  // }

  for (let i = 0; i < nums.length; i++) {
    if (!freqMap[nums[i]]) {
      freqMap[nums[i]] = 1;
    } else {
      freqMap[nums[i]]++;
    }
  }

  // console.log(freqMap)

  // create a bucket array []
  // for each of the items, create an array where the index is equal to the freq, and value is the num
  const bucket = [];
  for (let key in freqMap) {
    if (bucket[freqMap[key]]) {
      bucket[freqMap[key]].push(parseInt(key));
      continue;
    }
    bucket[freqMap[key]] = [parseInt(key)];
  }

  // console.log(bucket)

  const result = [];
  let index = bucket.length - 1;
  // loop through this new arr up to k
  while (result.length !== k) {
    if (bucket[index] !== undefined) {
      result.push(...bucket[index]);
    }
    index--;
  }

  return result;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
// console.log(topKFrequent([1], 1)); // [1]
// console.log(topKFrequent([-1, -1], 1)); // [-1]
// console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2], 2)); // [1]
