/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  var stack = [];

  for (let n of num) {
    // 當stack陣列非空陣列 && 當數字小於stack陣列的最後一個數字時 && 當k不為0時
    while (stack.length && n < stack[stack.length - 1] && k) {
      stack.pop()
      k--
    }
    // 把num字串裡的數字，逐一放到stack陣列中
    stack.push(n)
  }

  // 截取剩餘的k值
  while (k) {
    stack.pop()
    k--
  }

  // 當陣列的第一個值為0時刪除它
  while (stack.length && stack[0] === '0') {
    stack.shift();
  }

  return !stack.length ? '0' : stack.join('')
};

var num = "9"
var k = "1"
removeKdigits(num, k)
