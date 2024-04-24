/** Function Composition 複合函數
 * @param {Function[]} functions
 * @return {Function}
 */
// 定義一個名為 compose 的函式，接受一個 functions 參數，表示要組合的函式陣列
var compose = function (functions) {
  // 如果函式陣列為空，回傳一個恆等函式，接受任何輸入並返回該輸入本身的函式
  if (functions.length === 0) {
    return function (x) { return x };
  } else {
    // 否則，回傳一個組合後的函式，該函式按照 functions 陣列中函式的順序執行，並將結果傳遞給下一個函式
    return function (x) {
      // 初始化結果為最後一個函式在輸入 x 上的執行結果
      var result = functions[functions.length - 1](x);
      // 從倒數第二個函式開始，向前依序執行每個函式，並將前一個函式的執行結果作為下一個函式的輸入
      for (let i = functions.length - 2; i >= 0; i--) {
        result = functions[i](result);
      }
      // 返回最終結果
      return result;
    }
  }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */