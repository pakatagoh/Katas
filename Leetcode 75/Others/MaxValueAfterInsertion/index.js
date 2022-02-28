function solution(n, x) {
  const nstr = String(n);

  // let max = -Infinity;
  const isNegative = n[0] === '-';

  // console.log('isNegative: ', isNegative)

  // console.log('nstr', nstr);

  for (let i = isNegative ? 1 : 0; i < nstr.length; i++) {
    // const leftStr = nstr.slice(isNegative ? 1 : 0, i);
    // const rightStr = nstr.slice(i);
    if (isNegative) {
      if (parseInt(nstr[i]) <= x) {
        // console.log('heloo')
        continue;
      } else {
        return `-${nstr.slice(1, i)}${x}${nstr.slice(i)}`;
      }
    } else {
      if (parseInt(nstr[i]) >= x) {
        continue;
      } else {
        return `${nstr.slice(0, i)}${x}${nstr.slice(i)}`;
      }
    }

    // max = Math.max(
    //   parseInt(`${isNegative ? '-' : ''}${leftStr}${x}${rightStr}`),
    //   max
    // );
  }

  // console.log('max: ', max)

  if (isNegative) {
    return `-${nstr.slice(1)}${x}`;
  } else {
    return `${nstr.slice(0)}${x}`;
  }
}

console.log(solution('0', 5)); // 50
console.log(solution('566', 5)); // 5665
console.log(solution('670', 5)); // 6750
console.log(solution('-9999', 5)); // -59999
console.log(solution('-3123', 5)); // -31235
console.log(solution('-316253', 5)); // -3156253
console.log(solution('-316253', 5)); // -3156253
console.log(solution('962942516613939', 3)); // 9632942516613939

function solutionWithNumbers(N, x) {
  const nstr = String(N);

  // let max = -Infinity;
  const isNegative = N < 0;

  // console.log('isNegative: ', isNegative)

  // console.log('nstr', nstr);

  let strSlice = '';

  for (let i = isNegative ? 1 : 0; i < nstr.length; i++) {
    // const leftStr = nstr.slice(isNegative ? 1 : 0, i);
    // const rightStr = nstr.slice(i);
    if (isNegative) {
      if (parseInt(nstr[i]) <= x) {
        // console.log('heloo')
        strSlice = `${strSlice}${nstr[i]}`;
        continue;
      } else {
        return `-${strSlice}${x}${nstr.slice(i)}`;
      }
    } else {
      if (parseInt(nstr[i]) >= x) {
        strSlice = `${strSlice}${nstr[i]}`;
        continue;
      } else {
        return `${strSlice}${x}${nstr.slice(i)}`;
      }
    }

    // max = Math.max(
    //   parseInt(`${isNegative ? '-' : ''}${leftStr}${x}${rightStr}`),
    //   max
    // );
  }

  // console.log('max: ', max)
  if (isNegative) {
    return parseInt(`-${strSlice}${x}`);
  } else {
    return parseInt(`${strSlice}${x}`);
  }
}

console.log(solution(0, 5)); // 50
console.log(solution(566, 5)); // 5665
console.log(solution(670, 5)); // 6750
console.log(solution(-9999, 5)); // -59999
console.log(solution(-3123, 5)); // -31235
console.log(solution(-316253, 5)); // -3156253
console.log(solution(-8000, 5)); // -58000
console.log(solution(8000, 5)); // 85000
