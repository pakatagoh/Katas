const { solution } = require('./cyclicRotation');

describe('cyclicRotation', () => {
  test('should return [3,4,1,2] given rotation of 2 of [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    const numRotation = 2;

    expect(solution(input, numRotation)).toEqual([3, 4, 1, 2]);
  });

  test('should return [1,2,3,4] given rotation of 0 of [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    const numRotation = 0;

    expect(solution(input, numRotation)).toEqual([1, 2, 3, 4]);
  });

  test('should return [1,2,3,4] given rotation of 4 of [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    const numRotation = 4;

    expect(solution(input, numRotation)).toEqual([1, 2, 3, 4]);
  });

  test('should return [3,4,1,2] given rotation of 6 of [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    const numRotation = 6;

    expect(solution(input, numRotation)).toEqual([3, 4, 1, 2]);
  });

  test('should return [0,0,0] given rotation of 1 of [0,0,0]', () => {
    const input = [0, 0, 0];
    const numRotation = 1;

    expect(solution(input, numRotation)).toEqual([0, 0, 0]);
  });
});
