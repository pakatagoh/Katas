const reverseString = (word) => {
  let reversedString = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedString = `${reversedString}${word[i]}`;
  }

  return reversedString;
};

const splitString = (sentence) => {
  const stringArr = [];
  let word = '';
  let i = 0;
  while (i < sentence.length) {
    if (sentence[i] === ' ') {
      stringArr.push(word);
      word = '';
      i += 1;
      continue;
    }
    word = `${word}${sentence[i]}`;

    if (i === sentence.length - 1) {
      stringArr.push(word);
    }
    i += 1;
  }
  return stringArr;
};

const reverseArray = (array) => {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
};

const combineArrayIntoString = (array) => {
  let result = '';

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result = array[i];
      continue;
    }
    result = `${result} ${array[i]}`;
  }

  return result;
};

const reverseWordsInSentence = (sentence) => {
  const reversedString = reverseString(sentence);
  const arrayReversedWords = splitString(reversedString);
  const reversedArrayOfReversedWords = reverseArray(arrayReversedWords);
  const result = combineArrayIntoString(reversedArrayOfReversedWords);
  return result;
};

module.exports = {
  reverseString,
  splitString,
  reverseArray,
  combineArrayIntoString,
  reverseWordsInSentence,
};
