/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = [];
  for (let char of s) {
    if (char !== '*') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  console.log(stack.join(''));
  return stack.join('');
};
// Input: s = "leet**cod*e" Output: "lecoe"
var s = "leet**cod*e"
removeStars(s)