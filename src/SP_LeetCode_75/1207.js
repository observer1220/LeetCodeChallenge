/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // 建立一個 Map 來存放每個數字出現的次數
  let countMap = new Map();

  // 統計每個數字出現的次數
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // 建立一個 Set 來存放每個數字出現的次數
  let occurrenceSet = new Set();

  // 檢查每個數字出現的次數是否有重複
  for (let count of countMap.values()) {
    if (occurrenceSet.has(count)) {
      // 若有重複的次數，則回傳 false
      return false;
    }

    // 將每個數字出現的次數加入 Set
    occurrenceSet.add(count);
  }

  // 若沒有重複的次數，則回傳 true
  return true;
};
// Input: arr = [1, 2, 2, 1, 1, 3] Output: true
var arr = [1, 2, 2, 1, 1, 3]
uniqueOccurrences(arr)

// 原本的解法: 錯誤
// var uniqueOccurrences = function (arr) {
//   let newMap = new Map();
//   let counter = 1;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       counter++;
//     } else {
//       counter = 1;
//     }
//     newMap.set(arr[i], counter);
//   }
//   console.log(newMap);
// };