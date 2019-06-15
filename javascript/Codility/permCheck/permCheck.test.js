const { solution } = require('./permCheck');

describe('permCheck', () => {
  test('should return 1 for a input of [4,1,3,2]', () => {
    const input = [4, 1, 3, 2];

    expect(solution(input)).toBe(1);
  });

  test('should return 0 for a input of [4,1,3]', () => {
    const input = [4, 1, 3];

    expect(solution(input)).toBe(0);
  });

  test('should return 1 for a input of [1,2]', () => {
    const input = [1, 2];

    expect(solution(input)).toBe(1);
  });

  test('should return 0 for a input of [1,3]', () => {
    const input = [1, 3];

    expect(solution(input)).toBe(0);
  });

  test('should return 1 for a input of [1]', () => {
    const input = [1];

    expect(solution(input)).toBe(1);
  });
});
