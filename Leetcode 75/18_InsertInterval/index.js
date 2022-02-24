/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let result = [];
  let i = 0;
  while (i < intervals.length) {
    const currentInterval = intervals[i];
    if (newInterval[1] < currentInterval[0]) {
      result.push(newInterval);
      return [...result, ...intervals.splice(i)];
    }
    if (newInterval[0] > currentInterval[1]) {
      result.push(currentInterval);
      // if (i === intervals.length - 1) {
      //   return [...result, newInterval];
      // }
      i++;
      continue;
    }
    if (newInterval[0] <= currentInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], currentInterval[0]);
      newInterval[1] = Math.max(newInterval[1], currentInterval[1]);
      i++;
      continue;
    }
  }

  result.push(newInterval);

  return result;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2],[3,10],[12,16]]
