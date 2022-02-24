const {
  reverseString,
  splitString,
  reverseArray,
  combineArrayIntoString,
  reverseWordsInSentence,
} = require('./reverseWordsInSentence');

describe('reverse a string', () => {
  test('should reverse the word hello to olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should reverse the word hello world to dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});

describe('split a string into an array of its words', () => {
  test('should return an array of words given an input of hello world', () => {
    expect(splitString('dlrow olleh')).toEqual(['dlrow', 'olleh']);
  });
});

describe('reverse an array', () => {
  test('should reverse the order of an array', () => {
    expect(reverseArray(['d', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('combine an array', () => {
  test('should combine and array into a string', () => {
    expect(combineArrayIntoString(['hello', 'world', 'pakata', 'goh'])).toBe(
      'hello world pakata goh'
    );
  });
});

describe('reverse words in a sentence', () => {
  test('should return olleh dlrow given an input of hello world', () => {
    expect(reverseWordsInSentence('hello world')).toBe('olleh dlrow');
  });

  test('should return olleh dlrow atakap hog given an input of hello world pakata goh', () => {
    expect(reverseWordsInSentence('hello world pakata goh')).toBe(
      'olleh dlrow atakap hog'
    );
  });
});
