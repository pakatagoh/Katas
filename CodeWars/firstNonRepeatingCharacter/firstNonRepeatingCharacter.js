const firstNonRepeatingLetter = s => {
  const arrLetters = s.split('');
  const uniqueSet = new Set(arrLetters);
  let count;

  if (s.length === 1) {
    return s;
  } else if (uniqueSet.size === 1 || uniqueSet.size === 0) {
    return '';
  } else if (uniqueSet.size === 2) {
    const uniqueArr = Array.from(uniqueSet);
    if (uniqueArr[0].toLowerCase() === uniqueArr[1].toLowerCase()) return '';
  }

  for (let uniqueLetter of uniqueSet) {
    count = 0;
    for (let letter of arrLetters) {
      if (letter.toLowerCase() === uniqueLetter.toLowerCase()) count++;
    }
    if (count === 1) return uniqueLetter;
  }
  return '';
};

export default firstNonRepeatingLetter;
