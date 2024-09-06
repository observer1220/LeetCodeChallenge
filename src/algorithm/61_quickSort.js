function partition(array, startIdx, endIdx) {
  const pivot = array[endIdx];
  let smallerElementIdx = startIdx - 1;

  for (let currentIdx = startIdx; currentIdx < endIdx; currentIdx++) {
    if (array[currentIdx] <= pivot) {
      smallerElementIdx++;
      // Swap array[smallerElementIdx] and array[currentIdx]
      [array[smallerElementIdx], array[currentIdx]] = [
        array[currentIdx],
        array[smallerElementIdx],
      ];
    }
  }
  // Swap array[smallerElementIdx + 1] and array[endIdx]
  [array[smallerElementIdx + 1], array[endIdx]] = [
    array[endIdx],
    array[smallerElementIdx + 1],
  ];

  return smallerElementIdx + 1;
}

function quickSort(array, startIdx, endIdx) {
  if (startIdx < endIdx) {
    const pivotIdx = partition(array, startIdx, endIdx);
    quickSort(array, startIdx, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, endIdx);
  }
}

let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
