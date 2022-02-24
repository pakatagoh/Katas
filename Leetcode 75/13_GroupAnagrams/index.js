/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    return [strs];
  }

  const resultMap = {};
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split('').sort().join('');
    if (resultMap[sortedString] === undefined) {
      result.push([strs[i]]);
      resultMap[sortedString] = result.length - 1;
    } else {
      result[resultMap[sortedString]].push(strs[i]);
    }
  }

  console.log('resultMap:', resultMap);

  return result;
};
