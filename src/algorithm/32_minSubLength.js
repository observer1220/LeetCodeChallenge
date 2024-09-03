function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  // 開始跑迴圈前，先定義退出迴圈的機制
  while (right < arr.length) {
    // 目前總和
    currentSum += arr[right];

    // 目前總和 > 目標總和
    while (currentSum >= sum) {
      // 目前長度
      let currentLengt = right - left + 1;

      // 最小長度 > 目前長度
      if (minLength > currentLengt) {
        minLength = currentLengt;
      }
      currentSum -= arr[left];
      left++;
    }

    right++;
  }

  return minLength;
}

console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
