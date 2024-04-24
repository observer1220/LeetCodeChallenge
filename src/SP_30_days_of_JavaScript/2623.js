/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize (fn) {
  // 創建一個空的物件 cache 來保存計算結果
  let cache = {};
  // 返回一個匿名函式，該函式接受任意數量的參數
  return function (...args) {
    // 將傳入的參數轉換為字串，作為 cache 的鍵
    const key = String(args);
    // 如果 cache 中已經存在該鍵，直接返回對應的值，避免重複計算
    if (key in cache) {
      return cache[key];
    }
    // 如果 cache 中不存在該鍵，則執行原始函式 fn 並將結果保存到 cache 中
    const result = fn(...args);
    cache[key] = result;
    // 返回原始函式的結果
    return result;
  }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */