const solution = (arr) => {
  if (arr.length === 3) return arr[0] * arr[1] * arr[2];

  const arrCopy = arr.slice();

  const sortedArr = arrCopy.sort((a, b) => b - a);

  // const sortDesc = (arr) => {
  //   if (arr.length === 0 || arr.length === 1) return arr;
  //   const pivotValue = arr[arr.length - 1];
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] <= pivotValue) {
  //       rightArr.push(arr[i]);
  //       continue;
  //     }
  //     leftArr.push(arr[i]);
  //   }

  //   return [...sortDesc(leftArr), pivotValue, ...sortDesc(rightArr)];
  // };

  // const sortedArr = sortDesc(arrCopy);
  if (sortedArr[0] < 0) return sortedArr[0] * sortedArr[1] * sortedArr[2];
  const multiBottomTwo =
    sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
  const multiTopTwoThree = sortedArr[1] * sortedArr[2];
  const multiplier =
    multiBottomTwo > multiTopTwoThree ? multiBottomTwo : multiTopTwoThree;
  return sortedArr[0] * multiplier;
};

module.exports = { solution };
