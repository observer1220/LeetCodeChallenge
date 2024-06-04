/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').filter(w => w !== '').reverse().join(' ');
};
// Input: s = "the sky is blue"  Output: "blue is sky the"
// Input: s = "  hello world  "  Output: "world hello"
// Input: s = "a good   example" Output: "example good a"
var s = "a good   example"
reverseWords(s)