/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0, k = 0;

  if (!s) return true;
  while (k < s.length && t[i]) {
    if (t[i] === s[k]) {
      i++
      k++
    } else {
      i++
    }
  }

  if (k === s.length) return true
  return false
};
// Input: s = "abc", t = "ahbgdc" Output: true
// Input: s = "axc", t = "ahbgdc" Output: false
// Input: s = "b", t = "abc"
var s = "b", t = "abc"
console.log(isSubsequence(s, t));
