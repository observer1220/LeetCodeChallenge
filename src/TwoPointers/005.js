/**
 * @param {string}
 * @return {string}
 */
// 雙指針法
var longestPalindrome = function (s) {
  let longestLeft = 0, longestRight = 0; // 最長左索引, 最長右索引
  if (s.length < 1) return false;

  for (let i = 0; i < s.length; i++) {
    // [i, i + 1] => [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
    for (let j of [i, i + 1]) {
      for (
        let curLeftIndex = i, curRightIndex = j;                 // i為左指針，j為右指針
        s[curLeftIndex] && s[curLeftIndex] === s[curRightIndex]; // 檢查對稱性，當左指針存在 && 左指針 === 右指針
        curLeftIndex--, curRightIndex++                          // 左指針-1, 右指針+1
      ) {
        if (
          (curRightIndex - curLeftIndex + 1) > // 這是目前擴展迴文子串的長度
          (longestRight - longestLeft + 1)     // 這是目前最長迴文子串的長度
        ) {
          longestLeft = curLeftIndex;
          longestRight = curRightIndex;
        }
      }
    }
  }
  // 回傳字串，從最長左索引到最長右索引+1
  return s.substring(longestLeft, longestRight + 1);
};
// "babad" => "bab" || "aba"
// "cbbd" => "bb"
var s = "babad"
longestPalindrome(s)

// 中心擴展法
// var longestPalindrome = function (s) {
//   if (s.length < 1) return "";
//   let start = 0, end = 0;

//   for (let i = 0; i < s.length; i++) {
//     let len1 = expandAroundCenter(s, i, i);     // 以單個字符為中心擴展
//     let len2 = expandAroundCenter(s, i, i + 1); // 以兩個字符為中心擴展
//     let len = Math.max(len1, len2);             // 取最大長度

//     // 當長度大於之前的長度
//     if (len > end - start) {
//       // 計算新的左右索引
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }

//   return s.substring(start, end + 1);
// };

// function expandAroundCenter (s, left, right) {
//   // 當左側索引>0 && 右側索引<字串長度 && 左側字符===右側字符
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;  // 左側索引-1
//     right++; // 右側索引+1
//   }
//   return right - left - 1;  // 右側索引-左側索引-1
// }
