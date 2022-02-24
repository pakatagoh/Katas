const { solution } = require('./passingCars');

describe('Passing Cars', () => {
  test('should return 5 if input is [0,1,0,1,1]', () => {
    const input = [0, 1, 0, 1, 1];
    expect(solution(input)).toBe(5);
  });

  test('should return 5 if input is [1,0,0,1,1]', () => {
    const input = [1, 0, 0, 1, 1];
    expect(solution(input)).toBe(4);
  });

  test('should return 0 if input is [1]', () => {
    const input = [1];
    expect(solution(input)).toBe(0);
  });
});
