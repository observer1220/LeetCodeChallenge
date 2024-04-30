/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  // 呼叫傳入的函式 fn，並傳遞引數陣列 args
  fn(...args)

  // 設置一個間隔為 t 毫秒的定時器，以重複執行函式 fn，並傳遞引數陣列 args
  const timer = setInterval(() => {
    fn(...args)
  }, t)

  // 定義一個函式 cancelFn，用於取消定時器
  const cancelFn = () => {
    clearInterval(timer)
  }

  // 回傳 cancelFn 函式，以便稍後取消定時器
  return cancelFn
};