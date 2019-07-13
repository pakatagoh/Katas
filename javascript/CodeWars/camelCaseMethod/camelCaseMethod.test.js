import String from './camelCaseMethod';

describe('', () => {
  test('all small case letters with a space in between. no spaces at the ends', () => {
    expect('hello case'.camelCase()).toBe('HelloCase');
  });
  test('all small letters test 3 words', () => {
    expect('camel case method'.camelCase()).toBe('CamelCaseMethod');
  });

  test('all small letters with a white space at the front', () => {
    expect(' camel case word'.camelCase()).toBe('CamelCaseWord');
  });
  test('empty string should return empty string', () => {
    expect(''.camelCase()).toBe('');
  });
});
