const { solution } = require('./frogRiverOne');

describe('frogRiverOne', () => {
  test('should return 6s for X = 5 and array = [1,3,1,4,2,3,5,4]', () => {
    const X = 5;
    const arr = [1, 3, 1, 4, 2, 3, 5, 4];

    expect(solution(arr, X)).toBe(6);
  });

  test('should return -1 for X = 10 and array = [1,3,1,4,2,3,5,4]', () => {
    const X = 10;
    const arr = [1, 3, 1, 4, 2, 3, 5, 4];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return -1 for X = 5 and array = [1,3]', () => {
    const X = 5;
    const arr = [1, 3];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return -1 for X = 5 and array = [1,1000]', () => {
    const X = 5;
    const arr = [1, 1000];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return 1 for X = 1 and array = [1]', () => {
    const X = 1;
    const arr = [1];

    expect(solution(arr, X)).toBe(0);
  });

  test('should return -1 for X = 2 and array = [1]', () => {
    const X = 2;
    const arr = [2];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return -1 for X = 1 and array = [2]', () => {
    const X = 1;
    const arr = [2];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return -1 for X = 5 and array = [1,1000,3,4]', () => {
    const X = 5;
    const arr = [1, 1000, 3, 4];

    expect(solution(arr, X)).toBe(-1);
  });

  test('should return 1 for X = 1 and array = [1,1000,3,4]', () => {
    const X = 1;
    const arr = [1, 1000, 3, 4];

    expect(solution(arr, X)).toBe(0);
  });
});
