/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let curNum = 0;
  let curStr = '';

  for (let c of s) {
    if (c === '[') {
      // 把當前的數字和字串推入棧中，並重置當前數字和字串
      stack.push(curStr);
      stack.push(curNum);
      curStr = '';
      curNum = 0;
    } else if (c === ']') {
      // 當遇到 ']' 時，從棧中彈出數字和之前的字串，並重複當前字串
      let num = stack.pop();
      let prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(num);
    } else if (!isNaN(c)) {
      // 當c是數字時
      curNum = parseInt(curNum.toString() + c);
    } else {
      // 當c是英文字母時
      curStr += c;
    }
  }
  console.log(curStr);
  return curStr;
};
// Input: s = "3[a]2[bc]" Output: "aaabcbc"
var s = "3[a]2[bc]"
decodeString(s)