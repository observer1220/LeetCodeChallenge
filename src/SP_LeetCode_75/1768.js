/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // 宣告一個空字串來存放合併後的結果
  let result = '';

  // 比較word1和word2的長度，取最大的長度作為迴圈的上限
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // 如果還沒超過word1的長度，將word1的第i個字元加入結果字串
    if (i < word1.length) result += word1[i];
    // 如果還沒超過word2的長度，將word2的第i個字元加入結果字串
    if (i < word2.length) result += word2[i];
  }
  // console.log('輸出合併後的結果到控制台', result);
  // 回傳合併後的結果
  return result;
};
// Output: "apbqcr"
var word1 = "ab", word2 = "pqrs"
mergeAlternately(word1, word2) 