/**
 * @param {Function} fn
 * @return {Function}
 */
// 定義了一個名為 once 的變數，它是一個函式，接受一個參數 fn，代表要執行一次的函式
var once = function (fn) {
  // 創建一個變數 hasBeenCalled，用於追蹤函式是否已經被呼叫過，預設為 false
  let hasBeenCalled = false;
  // 創建一個變數 result，用於儲存函式執行後的結果
  let result;
  // 回傳一個匿名函式，接受任意數量的參數
  return function (...args) {
    // 如果函式尚未被呼叫過
    if (!hasBeenCalled) {
      // 執行傳入的函式 fn，並將結果儲存在 result 變數中
      // 要把任意數量的參數arg展開才能得到正確答案
      result = fn(...args);
      // 將 hasBeenCalled 設為 true，代表函式已經被呼叫過一次
      hasBeenCalled = true;
      // 回傳執行結果
      return result
    } else {
      // 如果函式已經被呼叫過，回傳 undefined
      return undefined
    }
  }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
