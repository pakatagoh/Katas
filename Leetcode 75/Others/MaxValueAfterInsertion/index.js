function solution(N) {
  const nstr = String(N);

  let max = -Infinity;
  const isNegative = N < 0;

  for (let i = isNegative ? 1 : 0; i <= nstr.length; i++) {
    const leftStr = nstr.slice(isNegative ? 1 : 0, i);
    const rightStr = nstr.slice(i);

    max = Math.max(
      parseInt(`${isNegative ? '-' : ''}${leftStr}5${rightStr}`),
      max
    );
  }

  return max;
}

console.log(solution(0));
console.log(solution(670));
console.log(solution(-9999));
console.log(solution(-3123));
console.log(solution(-316253));
