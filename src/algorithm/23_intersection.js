let array1 = [1, 3, 5, 6, 7, 9, 11, 13, 56, 77, 88, 78];
let array2 = [2, 3, 5, 7, 8, 78];

function intersection(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let counter = {};
  let result = [];

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }

  return result;
}

intersection(array1, array2);
