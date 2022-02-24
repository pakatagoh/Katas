const { solution } = require('./triangle');

describe('Triangle', () => {
  test('should return 1 given [10,2,5,1,8,20]', () => {
    const input = [10, 2, 5, 1, 8, 20];

    expect(solution(input)).toBe(1);
  });
});
