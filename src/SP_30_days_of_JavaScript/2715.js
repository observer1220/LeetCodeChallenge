/**
 * @param {Function} fn: 要執行的函式
 * @param {Array} args: 要傳遞給 fn 的參數，以陣列形式傳遞
 * @param {number} t: 要延遲多少時間後執行 fn，以毫秒為單位
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  // 定義一個內部函式 cancelFn，用於取消計時器
  const cancelFn = () => {
    // 清除先前設定的計時器
    clearTimeout(timer)
  };

  // 設定一個計時器，在 t 毫秒後執行指定的函式 fn
  const timer = setTimeout(() => {
    // 執行 fn，並傳遞 args 陣列中的參數
    fn(...args);
  }, t);

  // 回傳取消計時器的函式 cancelFn
  return cancelFn
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */