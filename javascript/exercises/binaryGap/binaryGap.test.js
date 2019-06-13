const { solution } = require('./binaryGap');

describe('solution function', () => {
  test('should return 5 for an input of 1041', () => {
    expect(solution(1041)).toBe(5);
  });

  test('should return 3 for an input of 561892', () => {
    expect(solution(561892)).toBe(3);
  });

  test('should return 0 for an input of 32', () => {
    expect(solution(32)).toBe(0);
  });

  test('should return 4 for an input of 74901729', () => {
    expect(solution(74901729)).toBe(4);
  });

  test('should return 5 for an input of 1376796946', () => {
    expect(solution(1376796946)).toBe(5);
  });
});
