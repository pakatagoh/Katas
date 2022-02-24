const { solution } = require('./missingInteger');

describe('Missing Integer', () => {
  test('should return 5 given the input [1, 3, 6, 4, 1, 2]', () => {
    const input = [1, 3, 6, 4, 1, 2];
    expect(solution(input)).toBe(5);
  });

  test('should return 1 given the input [-1000,-10]', () => {
    const input = [-1000, -10];
    expect(solution(input)).toBe(1);
  });

  test('should return 5 given the input [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    expect(solution(input)).toBe(5);
  });

  test('should return 1 given the input [-99,-2,-4,2,3,4]', () => {
    const input = [-99, -2, -4, 2, 3, 4];
    expect(solution(input)).toBe(1);
  });
});
