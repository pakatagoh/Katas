const { solution } = require('./maxCounters');

describe('maxCounters', () => {
  test('should return [3,2,2,4,2] if input N =5 and A=[3,4,4,6,1,4,4]', () => {
    const N = 5;
    const arr = [3, 4, 4, 6, 1, 4, 4];
    const expected = [3, 2, 2, 4, 2];
    expect(solution(N, arr)).toEqual(expected);
  });

  test('should return [1] if input N =1 and A=[1]', () => {
    const N = 1;
    const arr = [1];
    const expected = [1];
    expect(solution(N, arr)).toEqual(expected);
  });

  test('should return [0] if input N =1 and A=[2]', () => {
    const N = 1;
    const arr = [2];
    const expected = [0];
    expect(solution(N, arr)).toEqual(expected);
  });

  test('should return [2,2,3] if input N =3 and A=[1,4,2,4,3]', () => {
    const N = 3;
    const arr = [1, 4, 2, 4, 3];
    const expected = [2, 2, 3];
    expect(solution(N, arr)).toEqual(expected);
  });

  test('should return [6,6,6] if input N =3 and A=[2,1,2,3,2,1,2,4,1,1,1,4,2,4,3,3,3,2,4]', () => {
    const N = 3;
    const arr = [2, 1, 2, 3, 2, 1, 2, 4, 1, 1, 1, 4, 2, 4, 3, 3, 3, 2, 4];
    const expected = [11, 11, 11];
    expect(solution(N, arr)).toEqual(expected);
  });
});
