import { uniqueInOrder } from './uniqueInOrder';

describe('Unique in order', () => {
  test('split uniquely with using input as uppercase string of letters', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'A',
      'B'
    ]);
  });
  test('split uniquely with using input as uppercase and lowercase string of letters', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
  });

  test('split uniquely with using input as array of numbers', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
//
