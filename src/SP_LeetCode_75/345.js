/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelMap = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = s.split('');
  let start = 0, end = result.length - 1;

  while (start < end) {
    if (!vowelMap.has(result[start])) start++;
    if (!vowelMap.has(result[end])) end--;
    if (vowelMap.has(result[start]) && vowelMap.has(result[end])) {
      const temp = result[start];
      result[start] = result[end];
      result[end] = temp;
      start++
      end--
    }
  }

  return result.join('');
};
// Input: s = "hello" Output: "holle"
// Input: s = "leetcode" Output: "leotcede"
var s = "leetcode"
reverseVowels(s)