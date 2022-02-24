import isPrime from './isANumberPrime';

describe('is a number prime?', () => {
  test('0 is not a prime', () => {
    expect(isPrime(0)).toBe(false);
  });

  test('1 is not a prime', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('2 is a prime', () => {
    expect(isPrime(2)).toBe(true);
  });
});
