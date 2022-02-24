import solution from './multiplesOf3Or5';

describe('Sum all the natural numbers below a given input number that are multiples of 3 or 5', () => {
  test('input of 10 should return 23', () => {
    expect(solution(10)).toBe(23);
  });
  test('input of 16 should return 60', () => {
    expect(solution(16)).toBe(60);
  });
  test('input of 31 should return 225', () => {
    expect(solution(31)).toBe(225);
  });
});
