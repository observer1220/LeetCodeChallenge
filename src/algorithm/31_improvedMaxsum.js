function maxSum(arr, size) {
  let maxValue = 0;
  let tempValue = maxValue;

  if (size > arr.length) return;

  // 先加總第一個窗的值
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  // 第二個窗的位置，在第一個窗的後面一格
  for (let j = size; j < arr.length; j++) {
    // 第一個窗的總值，加上後面一格的值，並扣除第一個窗的第一格
    tempValue = tempValue + arr[j] - arr[j - size];

    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }

  return maxValue;
}
maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 35
