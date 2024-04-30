/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim().split(' ')
  return s.pop().length
};
var s = "   fly me   to   the moon  "
lengthOfLastWord(s)