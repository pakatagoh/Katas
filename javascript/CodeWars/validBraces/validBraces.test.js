import validBraces from './validBraces';

describe('Valid braces test should have every brace be correct in pairs', () => {
  test('"(){}[]" should return true', () => {
    expect(validBraces('(){}[]')).toBe(true);
  });
  test('"([{}])" should return true', () => {
    expect(validBraces('([{}])')).toBe(true);
  });
  test('"(}"  should return false', () => {
    expect(validBraces('(}')).toBe(false);
  });
  test('"[(])" should return false', () => {
    expect(validBraces('[(])')).toBe(false);
  });
  test('"[({})](]" should return false', () => {
    expect(validBraces('[({})](]')).toBe(false);
  });
  test('"{[({})]([])}" should return true', () => {
    expect(validBraces('{[({})]([])}')).toBe(true);
  });
  test('"{[({{}})]([[]])}" should return true', () => {
    expect(validBraces('{[({{}})]([[]])}')).toBe(true);
  });
  test('"}](){}" should return false', () => {
    expect(validBraces('}](){}')).toBe(false);
  });
  test('"}" should return false', () => {
    expect(validBraces('}')).toBe(false);
  });
});
