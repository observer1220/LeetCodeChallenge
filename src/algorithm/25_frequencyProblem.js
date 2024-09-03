let string_1 = "aabc",
  string_2 = "abac";

function intersection(str1, str2) {
  let arr1 = str1.split(""),
    arr2 = str2.split("");

  let counter1 = {},
    counter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  return JSON.stringify(counter1) === JSON.stringify(counter2) ? true : false;
}

console.log(intersection(string_1, string_2));
