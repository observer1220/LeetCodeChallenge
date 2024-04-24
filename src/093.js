/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // 創建一個空的陣列 stack 來儲存合法的 IP 位址
  const stack = [];

  // 定義一個名為 permute 的遞迴函式，用於生成可能的 IP 位址組合
  const permute = (arr, str) => {
    // 如果 arr 的長度為 3，表示已經有了三個數字，可以組成一個 IP 位址
    if (arr.length === 3) {
      // 如果剩餘的字符串 str 是一個合法的 IP 段，則將 arr 和 str 組合後推送到 stack 中
      if (isValid(str)) stack.push([...arr, str]);
      return;
    }

    // 以 1 到 3 的長度遍歷可能的 IP 段
    for (let i = 1; i < 4; i++) {
      // 從頭部取出長度為 i 的子字符串，限制 subStr 的長度為 1~3 位數
      let subStr = str.slice(0, i);
      // 如果子字符串不合法，則跳過當前迭代
      if (!isValid(subStr)) continue;
      // 遞迴調用 permute 函式，將子字符串加入 arr，並截取剩餘的字符串
      permute([...arr, subStr], str.slice(i));
    }
  }

  // 定義一個名為 isValid 的函式，用於檢查 IP 段是否合法
  const isValid = (str) => {
    // 如果數字大於 255 或者長度為 0，則返回 false
    if (Number(str) > 255 || !str.length) return false;
    // 如果長度大於等於 2 且第一個字符為 '0'，則返回 false
    if (str.length >= 2 && str[0] === '0') return false;
    // 否則返回 true，表示該 IP 段合法
    return true;
  }

  // 調用 permute 函式，傳入空的 arr 和字符串 s
  permute([], s);
  // 返回 stack 中每個組合，以點分隔的字符串形式組成的陣列
  // console.log(stack.map(x => x.join('.')));
  return stack.map(x => x.join('.'));
};
// Input: "25525511135" => Output: ["255.255.11.135", "255.255.111.35"]
// Input: "0000" => Output: ["0.0.0.0"]
// Input: "101023" => Output: ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]
var s = "25525511135"
restoreIpAddresses(s)

/**
 * 1. 每一個整數需介於 0~255 之間
 * 2. 數字開頭不能有0
 * 3. 不能有數字以外的符號
 * 4. 每個字串包含3個句號分割
 */