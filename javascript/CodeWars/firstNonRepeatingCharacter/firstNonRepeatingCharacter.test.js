import firstNonRepeatingLetter from './firstNonRepeatingCharacter';

describe('Get the first non repeating letter, be it upper or lower case', () => {
  test("the string 'a' should return a", () => {
    expect(firstNonRepeatingLetter('a')).toBe('a');
  });
  test("the string 'stress' should return t", () => {
    expect(firstNonRepeatingLetter('stress')).toBe('t');
  });
  test("the string 'moonmen' should return e", () => {
    expect(firstNonRepeatingLetter('moonmen')).toBe('e');
  });
  test("the string 'sTreSS' should return T", () => {
    expect(firstNonRepeatingLetter('sTreSS')).toBe('T');
  });

  test('empty string should return and empty string', () => {
    expect(firstNonRepeatingLetter('')).toBe('');
  });

  test('repeated letters should return empty string', () => {
    expect(firstNonRepeatingLetter('sssssss')).toBe('');
  });

  test('repeated letters with upper and lower case should return empty string', () => {
    expect(firstNonRepeatingLetter('ssSSSssss')).toBe('');
  });
  test('repeated letters with upper and lower case should return empty string', () => {
    expect(firstNonRepeatingLetter('ssSSSssssCCCCCCcccc')).toBe('');
  });

  test('repeated letters with upper and lower case should return empty string', () => {
    expect(firstNonRepeatingLetter('ssSSSsssscccc')).toBe('');
  });
});
