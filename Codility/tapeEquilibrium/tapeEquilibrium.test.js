const { solution } = require('./tapeEquilibrium');

describe('Tape Equilibrium', () => {
  test('should return  1 ', () => {
    const input = [3, 1, 2, 4, 3];
    expect(solution(input)).toBe(1);
  });
});
