const { solution } = require('./perMissingElement');

describe('perMissingElement', () => {
  test('should return 4 if missing element is 4', () => {
    const input = [1, 2, 3, 5];

    expect(solution(input)).toBe(4);
  });

  test('should return 6 if missing element is 6', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

    expect(solution(input)).toBe(9);
  });

  test('should return 3 if missing element is 3', () => {
    const input = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];

    expect(solution(input)).toBe(3);
  });

  test('should return 2 if missing element is 2', () => {
    const input = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    expect(solution(input)).toBe(2);
  });

  test('should return 10 if missing element is 10', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

    expect(solution(input)).toBe(10);
  });

  test('should return 4 if input is [2,3,1,5]', () => {
    const input = [2, 3, 1, 5];

    expect(solution(input)).toBe(4);
  });

  test('should return 1 if input is [2,3,4]', () => {
    const input = [2, 3, 4];

    expect(solution(input)).toBe(1);
  });
});
