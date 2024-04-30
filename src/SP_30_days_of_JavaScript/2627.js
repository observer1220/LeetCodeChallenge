/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  // 宣告一個 timer 變數用於存儲定時器的引用
  let timer;
  // 回傳一個函式，此函式會在每次呼叫時執行
  return function (...args) {
    // 每次呼叫時先清除之前的定時器
    clearTimeout(timer)
    // 設置新的定時器，以延遲執行 fn 函式
    timer = setTimeout(() => {
      // 延遲時間過後執行 fn 函式，並傳入所有的參數
      fn(...args)
    }, t)
  }
};

/** 什麼是防抖函式？
 * 以Google搜尋功能為例，使用者停止輸入文字後，間隔一段時間才會觸發API
 * https://www.explainthis.io/zh-hant/swe/debounce
 */