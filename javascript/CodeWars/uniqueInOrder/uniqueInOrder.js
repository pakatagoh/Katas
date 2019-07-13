export const uniqueInOrder = iterable => {
  const newArr =
    typeof iterable === 'string' ? iterable.split('') : iterable.slice();

  const finalArr = [];

  newArr.forEach(el => {
    if (finalArr[finalArr.length - 1] !== el) {
      finalArr.push(el);
    }
  });

  return finalArr;
};
