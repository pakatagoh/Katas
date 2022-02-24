var twoSumNaive = (nums, target) => {
  for(let i =0; i < nums.length-1; i++ ) {
    for(let j =i + 1; j < nums.length; i++ ) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
};
