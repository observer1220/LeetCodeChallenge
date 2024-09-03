function maxSum(arr, size) {
  let maxValue = -Infinity;

  if (size > arr.length) return;

  for (let i = 0; i <= arr.length - size; i++) {
    let tempMax = 0;
    for (let j = i; j < i + size; j++) {
      tempMax += arr[j];
    }

    if (tempMax > maxValue) {
      maxValue = tempMax;
    }
  }

  return maxValue;
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
