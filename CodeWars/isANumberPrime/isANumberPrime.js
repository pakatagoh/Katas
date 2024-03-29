const isPrime = num => {
  if (num === 0 || num === 1 || num < 0) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export default isPrime;
