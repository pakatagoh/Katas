/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestBruteForce = function (nums, target) {
  nums.sort((a, b) => a - b);

  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  let closestLeft = -Infinity;
  let closestRight = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k !== j + 1 && nums[k] === nums[k - 1]) continue;
        const sum = nums[i] + nums[j] + nums[k];
        if (sum < target) {
          if (sum > closestLeft) {
            closestLeft = sum;
          }
          continue;
        }
        if (sum > target) {
          if (sum < closestRight) {
            closestRight = sum;
          }
          continue;
        }

        return target;
      }
    }
  }

  const diffWithClosestLeftAndTarget = target - closestLeft;
  const diffWithClosestRightAndTarget = closestRight - target;

  if (diffWithClosestLeftAndTarget < diffWithClosestRightAndTarget) {
    return closestLeft;
  } else {
    return closestRight;
  }
};

var threeSumClosestNSquareTime = function (nums, target) {
  nums.sort((a, b) => a - b);

  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  // let closestLeft = -Infinity;
  // let closestRight = Infinity;
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (
        closest === Infinity ||
        Math.abs(target - sum) < Math.abs(target - closest)
      ) {
        closest = sum;
      }

      if (closest === target) return target;

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return closest;
};

var threeSumClosestNSquareWithLoopingIfSameAsPrevious = function (
  nums,
  target
) {
  nums.sort((a, b) => a - b);

  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (
        closest === Infinity ||
        Math.abs(target - sum) < Math.abs(target - closest)
      ) {
        closest = sum;
      }

      if (closest === target) return target;

      if (sum > target) {
        k--;
        while (nums[k] === nums[k + 1] && k > j) {
          k--;
        }
      } else {
        j++;
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return closest;
};

console.log(threeSumClosestBruteForce([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosestBruteForce([0, 0, 0], 1)); // 0
