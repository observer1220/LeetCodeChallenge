function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {
      let currentLength = right - left + 1;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      currentSum -= arr[left];
      left++;
    }
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 100));
