const { solution } = require('./oddArrayOccurrences');

describe('oddArrayOccurrences', () => {
  test('should return 7 if 7 is the only unpaired item and it occurs only once', () => {
    const input = [9, 3, 9, 3, 9, 7, 9];

    expect(solution(input)).toBe(7);
  });

  test('should return 9 if is the only unpaired item and it has 3 occurrences', () => {
    const input = [9, 3, 9, 3, 9, 7, 7];

    expect(solution(input)).toBe(9);
  });
});
