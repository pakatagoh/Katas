const { solution } = require('./frogJumps');

describe('frogJumps', () => {
  test('should return 3 jumps for inputs of (10,85,30)', () => {
    expect(solution(10, 85, 30)).toBe(3);
  });

  test('should return 0 jumps for inputs of (10,10,30)', () => {
    expect(solution(10, 10, 30)).toBe(0);
  });

  test('should return 9 jumps for inputs of (1,10,1)', () => {
    expect(solution(1, 10, 1)).toBe(9);
  });

  test('should return 999 jumps for inputs of (1,1000,1)', () => {
    expect(solution(1, 1000, 1)).toBe(999);
  });
});
