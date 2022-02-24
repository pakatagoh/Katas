const solution = (arr) => {
  var right = arr.slice(1).reduce(function(prev, cur) {
    return prev + cur;
  });
  var left = arr[0];
  var diff = Math.abs(left - right);
  for (var i = 1; i < arr.length - 1; i++) {
    left += arr[i];
    right -= arr[i];
    var currentDiff = Math.abs(left - right);
    if (currentDiff < diff) {
      diff = currentDiff;
    }
  }
  return diff;
};

module.exports = { solution };
