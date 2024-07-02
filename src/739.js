/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // 獲取溫度陣列的長度
  const n = temperatures.length;
  // 初始化一個空堆疊來存儲索引
  const stack = [];
  // 初始化結果陣列，所有元素預設為 0
  const result = new Array(n).fill(0);

  // 遍歷所有溫度
  for (let i = 0; i < n; i++) {
    // 當堆疊不為空且當前溫度大於堆疊頂部索引對應的溫度時
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      // 從堆疊頂部彈出索引
      const idx = stack.pop();
      // 計算當前索引和彈出索引之間的距離，並將其存儲在結果陣列中
      result[idx] = i - idx;
    }
    // 將當前索引推入堆疊
    stack.push(i);
  }

  // 返回結果陣列
  return result;
};
// Input:  [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(temperatures)


// 能解決 99% CASE，但效能不好
// var dailyTemperatures = function (temperatures) {
//   let stack = new Array(temperatures.length).fill(0);
//   let i = 0, j = 1;
//   while (i < temperatures.length) {
//     if (j >= temperatures.length) {
//       break;
//     }
//     if (temperatures[i] < temperatures[j]) {
//       stack[i] = j - i;
//       i++
//       j = i + 1;
//     } else {
//       j++
//     }
//   }
//   console.log(stack);
//   return stack
// };