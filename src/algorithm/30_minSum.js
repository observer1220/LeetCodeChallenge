function minSum(arr, size) {
  let minValue = Infinity;

  if (size > arr.length) return;

  for (let i = 0; i <= arr.length - size; i++) {
    let tempMin = 0;
    for (let j = i; j < i + size; j++) {
      tempMin += arr[j];
    }

    if (minValue > tempMin) {
      minValue = tempMin;
    }
  }

  return minValue;
}

minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28
