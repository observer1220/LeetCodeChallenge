/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stack = []
  let limitValue = Math.pow(2, 31)

  // 不能直接處理數字，因此將數字轉為字串
  x = x.toString()

  // 透過FOR迴圈將字串內的數字，依序放到stack陣列
  for (let i = 0; i < x.length; i++) {
    stack.push(x[i])
  }

  // 當陣列的第一個元素為減號時，將它獨立取出並放到stack陣列的第一位
  if (stack[0] === '-') {
    stack.push(stack.shift())
  }

  // 將其餘的數字反轉後放入stack陣列
  stack.push(stack.reverse())

  // 若數字的第一位為0，則刪除它
  if (stack.length && stack[0] === "0") {
    stack.shift()
  }

  // 將陣列裡的數字合併為字串，並轉為數字型別
  let answer = Number(stack.join(''));

  // 若答案超過2^32次方則回傳數字0，若否則回傳答案
  return Math.abs(answer) > limitValue ? 0 : answer
};

var x = 1563847412
reverse(x)