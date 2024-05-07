/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  // 建立一個空物件，用於存放分組後的結果
  let ans = {};

  // 遍歷陣列中的每個元素
  for (let obj of this) {
    // 根據傳入的函式 fn 將元素分組，取得分組的鍵值
    let key = fn(obj);
    // 如果 ans 中不存在該鍵值，則初始化為一個空陣列
    ans[key] ||= [];
    // 將元素加入對應鍵值的陣列中
    ans[key].push(obj)
  }

  // 回傳分組後的結果
  return ans
};
