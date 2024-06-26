/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // 步驟1：檢查兩個字符串的長度是否相等，如果不相等則返回false
  if (word1.length !== word2.length) return false;

  // 步驟2：計算每個字符串中字符的頻率
  let freq1 = {}, freq2 = {};
  for (let char of word1) freq1[char] = (freq1[char] || 0) + 1;
  for (let char of word2) freq2[char] = (freq2[char] || 0) + 1;
  console.log('步驟2', freq1, freq2);

  // 步驟3：檢查兩個字符串中的字符集合是否相同
  let set1 = new Set(Object.keys(freq1));
  let set2 = new Set(Object.keys(freq2));
  console.log('步驟3', set1, 'set2', set2);

  for (let char of set1) {
    if (!set2.has(char)) return false;
  }

  // 步驟4：檢查字符的頻率是否可以通過重新排列匹配
  let sortedFreq1 = Object.values(freq1).sort((a, b) => a - b);
  let sortedFreq2 = Object.values(freq2).sort((a, b) => a - b);
  console.log('步驟4', sortedFreq1, sortedFreq2);

  for (let i = 0; i < sortedFreq1.length; i++) {
    if (sortedFreq1[i] !== sortedFreq2[i]) return false;
  }

  return true;
};
// Input: word1 = "abc", word2 = "bca"        Output: true
// Input: word1 = "a", word2 = "aa"           Output: false
// Input: word1 = "cabbba", word2 = "abbccc"  Output: true
// Input: word1 = "cabbba", word2 = "aabbss"  Output: false
// Input: word1 = "abbbzcf", word2 = "babzzcz" Output: false
var word1 = "cabbba", word2 = "aabbss"
closeStrings(word1, word2)

/**
 * Operation 1: Swap any two existing characters.
 * For example, abcde -> aecdb
 *
 * Operation 2: Transform every occurrence of one existing character into another existing character,
 * and do the same with the other character.
 * For example, aacabb -> bbcbaa(all a's turn into b's, and all b's turn into a's)
 */

// 原本的解法不夠完整
// if (word1.length !== word2.length) return false;
// let newSet1 = new Set(word1);
// let newSet2 = new Set(word2)
// for (let char of word1) {
//   if (!newSet2.has(char)) return false;
// }
// for (let char of word2) {
//   if (!newSet1.has(char)) return false;
// }
// return true