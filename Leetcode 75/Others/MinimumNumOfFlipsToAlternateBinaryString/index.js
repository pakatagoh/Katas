function solution(A) {
  if (A.length === 1) {
    return 0;
  }

  // const oneFlipSlice = A.slice(0)
  // const zeroFlipSlice = A.slice(0)

  let oneFlipDesired = 1;
  let flipCountOne = getFlipCount(A, oneFlipDesired);

  // for(let i = 0; i< oneFlipSlice.length; i++) {
  //   if(oneFlipSlice[i] !== oneFlipDesired) {
  //     oneFlipSlice[i] = oneFlipDesired
  //     flipCountOne+=1
  //   }

  //   if(oneFlipDesired === 1) {
  //     oneFlipDesired = 0
  //   } else {
  //     oneFlipDesired = 1
  //   }
  // }

  let zeroFlipDesired = 0;
  let flipCountZero = getFlipCount(A, zeroFlipDesired);

  console.log(A.length);
  console.log(flipCountOne);
  console.log(flipCountZero);

  // for(let i = 0; i< zeroFlipSlice.length; i++) {
  //   if(zeroFlipSlice[i] !== zeroFlipDesired) {
  //     zeroFlipSlice[i] = zeroFlipDesired
  //     flipCountZero+=1
  //   }

  //   if(zeroFlipDesired === 1) {
  //     zeroFlipDesired = 0
  //   } else {
  //     zeroFlipDesired = 1
  //   }
  // }

  return Math.min(flipCountOne, flipCountZero);
}

function getFlipCount(arr, initialDesired) {
  let flipCount = 0;
  let flipDesired = initialDesired;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== flipDesired) {
      // arr[i] = flipDesired
      flipCount += 1;
    }

    if (flipDesired === 1) {
      flipDesired = 0;
    } else {
      flipDesired = 1;
    }
  }

  return flipCount;
}

console.log(solution([0, 1, 0, 1, 1])); // 1
console.log(solution([0, 1, 0, 1, 0])); // 0
console.log(solution([0, 1, 1, 1, 0])); // 1
console.log(solution([1, 1, 0, 1, 1])); // 2
console.log(solution([0, 1, 1, 0])); // 2
console.log(solution([0])); // 0
console.log(solution([])); // 0
