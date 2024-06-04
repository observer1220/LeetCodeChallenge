/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = n.toString()
      .split('')
      .map(digit => Math.pow(Number(digit), 2))
      .reduce((acc, cur) => acc + cur, 0);
  }
  return n === 1
};
// Input: n = 19 Output: true
// Input: n = 2 Output: false
// Input: n = 7 Output: true
var n = 7
isHappy(n)

// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// 先前的解法
// for (let digit of n) stack.push(Math.pow(digit, 2));
// stack.map(item => happyNum += item);
// if (happyNum !== 1) {
//   return isHappy(happyNum);
// }
// return happyNum === 1 ? true : false;