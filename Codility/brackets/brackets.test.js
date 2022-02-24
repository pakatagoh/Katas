const { solution } = require('./brackets');

describe('Brackets', () => {
  test('should return 0 if length of string is odd', () => {
    const input = '{{}}]';
    expect(solution(input)).toBe(0);
  });

  test('should return 1 if string is empty', () => {
    const input = '';
    expect(solution(input)).toBe(1);
  });

  test('should return 1 if string is [{()()}]', () => {
    const input = '[{()()}]';
    expect(solution(input)).toBe(1);
  });

  test('should return 0 if string is ([)()]', () => {
    const input = '([)()]';
    expect(solution(input)).toBe(0);
  });

  test('should return 0 if string is {{{{', () => {
    const input = '{{{{';
    expect(solution(input)).toBe(0);
  });
});
