function solution(A, K) {
  if (A.length === K || K === 0) {
    return A;
  }

  for (let i = 0; i < K; i++) {
    let lastElement = A[A.length - 1];
    A.unshift(lastElement);
    A.pop();
  }
  return A;
}
module.exports = { solution };
