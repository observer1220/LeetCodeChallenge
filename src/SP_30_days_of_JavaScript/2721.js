/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  // 回傳一個新的 Promise 物件
  return new Promise((resolve, reject) => {
    // 建立一個與 functions 陣列相同長度的空陣列 results 用於存放函式執行的結果
    const results = new Array(functions.length);
    // 計數器，用於追蹤已經完成的函式數量
    let count = 0;

    // 使用 forEach 迴圈遍歷 functions 陣列中的每個函式
    functions.forEach((fn, idx) => {
      // 呼叫目前迴圈中的函式 fn，並執行其回傳的 Promise
      fn().then(val => {
        // 將函式執行的結果存入 results 陣列的相應位置
        results[idx] = val;
        count++; // 增加計數器
        // 如果計數器等於 functions 的長度，表示所有函式都已完成，此時解析 Promise 並回傳結果
        if (count === functions.length) resolve(results);
        // 如果函式執行過程中出現錯誤，則拒絕 Promise 並回傳錯誤原因
      }).catch(reason => reject(reason));
    })
  })
};

/**
 * 這個程式碼就像是一個人在參加一場派對，派對中有很多不同的活動，
 * 而這個人想要參加所有的活動並且收集每個活動的紀念品。
 * 每個活動都代表一個非同步的函數，而收集的紀念品就是這些函數的返回值。
 * 
 * 這個人一開始會拿一個空的袋子（Promise），然後進入派對（forEach 迴圈）
 * 開始參加各個活動（呼叫函數）。當每個活動結束後（函數 resolve），
 * 他會把紀念品（函數的返回值）放進袋子裡（results 陣列）。
 * 同時，他會記錄已經參加的活動數量（count 變數）。
 * 
 * 當他參加完所有活動後（count 等於 functions.length），
 * 他會離開派對（resolve 函數），並帶著他的袋子（裝滿了紀念品的 results 陣列）回家。
 * 如果在派對中有任何一個活動出了問題（函數 reject），
 * 他就會立刻離開派對並且不帶任何紀念品回家（reject 函數）。
 */