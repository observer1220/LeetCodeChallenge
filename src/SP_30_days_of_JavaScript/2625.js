/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let ans = [];
  if (n === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      // 使用遞迴來處理多層次的陣列
      ans.push(...flat(element, n - 1))
    } else {
      ans.push(element);
    }
  }

  return ans
};
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 2
flat(arr, n);