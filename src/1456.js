/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  // 建立母音集合，判斷是否為母音 
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const isVowel = (char) => vowels.has(char);

  let maxVowelsCount = 0;
  let currentVowelsCount = 0;

  // 初始化窗口，i必須小於k，因為k是窗戶的寬度
  for (let i = 0; i < k; i++) {
    // 如果該字串為母音，則currentVowelsCount + 1
    if (isVowel(s[i])) currentVowelsCount++;
  }

  // 更新母音最大值
  maxVowelsCount = currentVowelsCount;

  // 由左至右滑動窗口
  for (let i = k; i < s.length; i++) {
    // 如果該字串為母音，則currentVowelsCount + 1
    if (isVowel(s[i])) currentVowelsCount++;
    // 如果窗口左邊的字串為母音，則currentVowelsCount - 1
    if (isVowel(s[i - k])) currentVowelsCount--;

    // 更新母音最大值，取最大值
    maxVowelsCount = Math.max(maxVowelsCount, currentVowelsCount);
  }

  return maxVowelsCount;
};
var s = "leetcode", k = 3
maxVowels(s, k)
// ['a', 'b', 'c']
// ['b', 'c', 'i']
// ['c', 'i', 'i']


// Input: s = "abciiidef", k = 3 Output: 3
// Explanation: The substring "iii" contains 3 vowel letters

// Input: s = "aeiou", k = 2 Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Input: s = "leetcode", k = 3 Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.