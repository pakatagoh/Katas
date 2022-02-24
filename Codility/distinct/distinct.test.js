const { solution } = require('./distinct');

describe('Distinct', () => {
  test('should return 3 for an input of [2,1,1,2,3,1]', () => {
    const input = [2, 1, 1, 2, 3, 1];
    expect(solution(input)).toBe(3);
  });

  test('should return 0 for an input of []', () => {
    const input = [];
    expect(solution(input)).toBe(0);
  });

  test('should return 1 for an input of [1]', () => {
    const input = [1];
    expect(solution(input)).toBe(1);
  });
});
