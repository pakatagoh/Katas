var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const x = j - i;
      const y = Math.min(height[i], height[j]);
      const area = x * y;
      if (area > max) {
        max = area;
      }
    }
  }

  return max;
};

const maxAreaV2 = (height) => {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let max = 0;
  while (leftIndex < rightIndex) {
    const y = Math.min(height[leftIndex], height[rightIndex]);
    max = Math.max(max, (rightIndex - leftIndex) * y);
    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
      while (height[leftIndex] <= y && leftIndex < rightIndex) {
        leftIndex++;
      }
    } else {
      rightIndex--;
      while (height[rightIndex] <= y && leftIndex < rightIndex) {
        rightIndex--;
      }
    }
  }
  return max;
};
