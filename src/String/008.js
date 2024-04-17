/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const resp = parseInt(s) || 0;
  const limit = Math.pow(2, 31);
  if (resp > limit - 1) return limit - 1;
  else if (resp < -1 * limit) return -1 * limit;
  return resp
}
var s = "-91283472332"
myAtoi(s)

/** parseInt()的特性
 * 1. 可自動清除字串前後的空白字元"   -42" => "-42"
 * 2. 可將帶有小數點的字串化為整數"3.14159" => "3"
 * 2. 將數字開頭字母結尾的字串轉為純數"4193 with words" => "4193"
 * 3. 無法處理字母開頭數字結尾的字串"words and 987" => NaN
 * 4. 正負值錯亂的字串"-+12"" => NaN
 */

