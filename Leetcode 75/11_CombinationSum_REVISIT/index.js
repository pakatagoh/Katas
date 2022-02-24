/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const dfs = (i, currentCandidates, sum) => {
    if (sum === target) {
      result.push([...currentCandidates]);
      return;
    }
    if (sum > target || i > candidates.length - 1) {
      return;
    }

    currentCandidates.push(candidates[i]);

    dfs(i, currentCandidates, sum + candidates[i]);
    currentCandidates.pop();
    dfs(i + 1, currentCandidates, sum);
  };

  dfs(0, [], 0);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
