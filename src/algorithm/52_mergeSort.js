function merge(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let midPos = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, midPos);
    let rightArr = arr.slice(midPos, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}
console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));
