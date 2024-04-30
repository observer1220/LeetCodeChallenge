/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  // 返回一個異步函式，接受任意數量的參數
  return async function (...args) {
    // 創建一個原始函式 fn 的 promise
    const originPromise = fn(...args);
    // 創建一個時間限制的 promise，當時間超過 t 毫秒時拒絕該 promise，並拋出 'Time Limit Exceeded'
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
    // 返回一個新的 promise，以原始函式的 promise 和時間限制的 promise 作為競爭對象，返回先解析或拒絕的那個 promise
    return Promise.race([originPromise, timeoutPromise]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */