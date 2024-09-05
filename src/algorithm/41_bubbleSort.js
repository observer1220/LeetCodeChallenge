function bubbleSort(array) {
  let len = array.length;

  while (len > 1) {
    let swapping = false;
    len--;

    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapping = true;
      }
    }
    if (!swapping) {
      break;
    }
  }
  console.log(array);
  return array;
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}

bubbleSort(test);
