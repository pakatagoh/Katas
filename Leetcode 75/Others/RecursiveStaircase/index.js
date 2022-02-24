// num ways to reach the top given that you can only take 1 step at a time
const numWays = () => {
  if (target === 1) {
    return 1;
  }
  if (target === 2) {
    return 2;
  }

  let currentWays = 0;

  let prevTwo = [1, 2];

  for (i = 2; i < target; i++) {
    currentWays = prevTwo[0] + prevTwo[1];
    prevTwo[0] = prevTwo[1];
    prevTwo[1] = currentWays;
  }

  return currentWays;
};

// Fibonacci

// num ways to reach the top give that you can only take 1,3 or 5 steps at a time

const numWaysModifiedNotEfficient = (target, steps) => {
  if (target === 0) {
    return 1;
  }

  let total = 0;

  for (let i = 0; i < steps.length; i++) {
    if (target - steps[i] >= 0) {
      total = total + numWaysModifiedNotEfficient(target - steps[i], steps);
    }
  }

  return total;
};

console.log(numWaysModifiedNotEfficient(5, [1, 3, 5]));

const numWaysModifiedEfficient = (target, steps) => {
  if (target === 0) {
    return 1;
  }

  let prevWays = { 0: 1 };

  for (let i = 1; i <= target; i++) {
    let total = 0;
    for (let j = 0; j < steps.length; j++) {
      if (i - steps[j] >= 0) {
        total = total + prevWays[i - steps[j]];
        prevWays[i] = total;
      }
    }
    prevWays[i] = total;
  }

  return prevWays[target];
};

console.log(numWaysModifiedEfficient(5, [1, 3, 5]));

const numWaysModifiedEfficientV2 = (target, steps) => {
  if (target === 0) {
    return 1;
  }

  let prevWays = [1];

  for (let i = 1; i <= target; i++) {
    let total = 0;
    for (let j = 0; j < steps.length; j++) {
      if (i - steps[j] >= 0) {
        console.log(prevWays);
        total = total + prevWays[i - steps[j]];
        prevWays[i] = total;
      } else {
        prevWays[i] = 0;
      }
    }
    prevWays[i] = total;
  }

  return prevWays[target];
};

console.log(numWaysModifiedEfficient(5, [1, 3, 5]));

// nums ways to get to step n if can take up to m steps at a time
const numWaysUptoMSteps = (n, m) => {
  let stairs = [1];

  for (let i = 1; i <= n; i++) {
    const newStairsNum = stairs.reduce((accum, current) => accum + current, 0);
    stairs.push(newStairsNum);

    if (stairs.length > m) {
      stairs.shift();
    }
  }

  return stairs[stairs.length - 1];
};

console.log(numWaysModifiedEfficient(5, 2));
