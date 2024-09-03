function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let tempAvg = (arr[left] + arr[right]) / 2;

    if (tempAvg > avg) {
      right--;
    } else if (tempAvg < avg) {
      left++;
    } else if (tempAvg === avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }

  return result.length;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
