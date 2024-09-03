let numbers = [
  9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60,
  68, 80, 87, 90, 98, 100, 103, 108, 109, 109, 116, 120, 120, 124, 127, 128,
  131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
  173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201,
  203, 204, 207, 213, 217, 222, 222, 222, 227, 228, 233, 235, 237, 239, 239,
  243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284,
  285, 295, 297, 298,
];

function binarySearch(arr, n) {
  let minPos = 0;
  let maxPos = numbers.length - 1;
  let step = 0;

  while (minPos <= maxPos) {
    let midPos = Math.floor((maxPos + minPos) / 2);
    console.log(
      "Find middle position at " + midPos + " is number " + arr[midPos]
    );

    step++;

    if (n > arr[midPos]) {
      minPos = midPos + 1;
    } else if (n < arr[midPos]) {
      maxPos = midPos - 1;
    } else if (n === arr[midPos]) {
      console.log(
        "Take " + step + " steps to find number " + n + " at position " + midPos
      );
      return midPos;
    }
  }

  console.log("Can't find number " + n);
  return -1;
}

binarySearch(numbers, 127);
