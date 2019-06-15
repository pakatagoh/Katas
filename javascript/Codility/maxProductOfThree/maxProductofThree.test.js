const { solution } = require('./maxProductOfThree');

describe('max product of three', () => {
  test('should return 60 for an input of [-3,1,2,-2,5,6]', () => {
    const input = [-3, 1, 2, -2, 5, 6];
    expect(solution(input)).toBe(60);
  });

  test('should return 125 for an input of [-5,5,-5,4]', () => {
    const input = [-5, 5, -5, 4];
    expect(solution(input)).toBe(125);
  });

  test('should return -120 for an input of [-5, -6, -4, -7, -10]', () => {
    const input = [-5, -6, -4, -7, -10];
    expect(solution(input)).toBe(-120);
  });
});
