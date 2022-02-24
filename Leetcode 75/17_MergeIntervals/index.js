/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let latest = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    // if laatest and current index overlap,
    // latest is the new overlap result
    // result last index gets replaced with new overlap result

    // else
    // push current index into result
    // latest is current index

    const currentIndex = intervals[i];
    // 1,3 latest
    // 2,6 current

    // 1,4 latest
    // 4,5 current

    if (
      latest[1] <= currentIndex[1] &&
      latest[1] >= currentIndex[0] &&
      currentIndex[0] <= latest[1] &&
      currentIndex[0] >= latest[0]
    ) {
      const combined = [latest[0], currentIndex[1]];
      latest = combined;
      result.pop();
      result.push(combined);
    } else if (
      latest[0] <= currentIndex[1] &&
      latest[0] <= currentIndex[0] &&
      latest[1] >= currentIndex[1] &&
      latest[1] >= currentIndex[0]
    ) {
      const combined = [latest[0], latest[1]];
      latest = combined;
      result.pop();
      result.push(combined);
    } else {
      result.push(currentIndex);
      latest = currentIndex;
    }
  }
  return result;
};

const mergeWithBetterCondition = () => {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let latest = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    // if laatest and current index overlap,
    // latest is the new overlap result
    // result last index gets replaced with new overlap result

    // else
    // push current index into result
    // latest is current index

    const currentIndex = intervals[i];
    // 1,3 latest
    // 2,6 current

    // 1,4 latest
    // 4,5 current

    if (currentIndex[0] <= latest[1]) {
      const combined = [latest[0], Math.max(currentIndex[1], latest[1])];
      latest = combined;
      result.pop();
      result.push(combined);
    } else {
      result.push(currentIndex);
      latest = currentIndex;
    }
  }
  return result;
};
