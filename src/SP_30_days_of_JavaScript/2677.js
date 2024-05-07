/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// arr: 要被拆分的陣列, size: 子陣列大小
var chunk = function (arr, size) {
  // 建立一個新陣列來存放拆分後的子陣列
  let newArray = [], index = 0;
  // 使用 while 迴圈來遍歷原始陣列
  while (index < arr.length) {
    // 使用 slice 方法從原始陣列中截取一段長度為 size 的子陣列，並將其添加到新陣列中
    newArray.push(arr.slice(index, index + size))
    // 更新 index，移動到下一個子陣列的起始位置
    index += size
  }
  // 返回拆分後的新陣列
  return newArray
};
var arr = [1, 9, 6, 3, 2], size = 3
chunk(arr, size)

// 0 <= 0 1 2
// 1 <= 4 5