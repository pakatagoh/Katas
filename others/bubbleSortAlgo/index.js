function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }

  return list;
}
console.log(bubbleSort([3, 1, 2, 3, 4, 5]));

function bubbleSortEfficient(list) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        swapped = true;
      }
    }
  }

  return list;
}

console.log(bubbleSortEfficient([3, 1, 2, 3, 4, 5]));
console.log(bubbleSortEfficient([5, 3, 2, 3, 4, 5]));
