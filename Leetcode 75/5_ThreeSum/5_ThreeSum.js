var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const result = [];

  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    for (j = i + 1; j < nums.length; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      for (k = j + 1; k < nums.length; k++) {
        if (k !== j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
};

var threeSumWithTwoSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const result = [];

  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    // const target = nums[i];
    const seen = {};

    // console.log('the initial i: ', i)
    for (j = i + 1; j < nums.length; j++) {
      const remainder = -nums[i] - nums[j];
      if (seen[remainder]) {
        result.push([nums[i], nums[j], remainder]);
        while (nums[j + 1] === nums[j] && j + 1 < nums.length) {
          j++;
        }
      }
      seen[nums[j]] = 1;
      // console.log('seen: ', seen)
    }
  }

  return result;
};

var threeSumWithRachetting = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  if (nums.length === 3) {
    if (
      nums.reduce((accum, current) => {
        return accum + current;
      }, 0) === 0
    ) {
      return [nums];
    }
  }
  const result = [];

  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      const total = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (total === 0) {
        result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
      }
      if (total <= 0) {
        leftIndex++;
        while (
          leftIndex < rightIndex &&
          nums[leftIndex] === nums[leftIndex - 1]
        ) {
          leftIndex++;
        }
      }
      if (total >= 0) {
        rightIndex--;
        while (
          leftIndex < rightIndex &&
          nums[rightIndex] === nums[rightIndex + 1]
        ) {
          rightIndex--;
        }
      }
    }
  }

  return result;
};
