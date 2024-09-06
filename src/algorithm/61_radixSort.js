function getMax(arr) {
  let mx = Math.abs(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i]) > mx) mx = Math.abs(arr[i]);
  }
  return mx;
}

function countSort(arr, exp) {
  const length = arr.length;
  let output = new Array(length).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.abs(arr[i]) / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(Math.abs(arr[i]) / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const maxNumber = getMax(arr);
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }
}

function sortArray(arr) {
  let negatives = arr.filter((num) => num < 0);
  let positive = arr.filter((num) => num >= 0);

  radixSort(positive);

  negatives = negatives.map((num) => -num);
  radixSort(negatives);
  negatives = negatives.map((num) => -num).reverse();

  return [...negatives, ...positive];
}

const arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
const arrInt = arr.map((num) => Math.round(num * 10000));
const sortedIntArr = sortArray(arrInt);
const sortedArr = sortedIntArr.map((num) => num / 10000);
console.log(sortedArr);
