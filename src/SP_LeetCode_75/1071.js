/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 定義一個函式來計算兩個數字的最大公因數
const gcdOfStrings = function (str1, str2) {
  // 檢查兩個字串是否可以交錯拼接成相同的字串，若不行則代表沒有最大公因數，回傳空字串
  if (str1 + str2 !== str2 + str1) return "";

  // 定義一個遞迴函式用來計算最大公因數
  const gcd = (a, b) => {
    if (b === 0) return a; // 若其中一數字為0，則回傳另一數字
    return gcd(b, a % b);  // 否則遞迴呼叫gcd函式，將b與a除以b的餘數作為新的參數
  };

  // 回傳str1的從索引0到最大公因數的子字串
  return str1.substring(0, gcd(str1.length, str2.length));
};
var str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX", str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX" // Output: "ABC"
gcdOfStrings(str1, str2)
