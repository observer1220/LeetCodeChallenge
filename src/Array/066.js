/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let stack = []
  let num = (BigInt(digits.join('')) + BigInt(1)).toString()
  console.log('num', num);
  for (let i = 0; i < num.length; i++) {
    stack.push(num[i])
  }
  console.log(stack);
  return stack
};
// [1, 2, 3] => [1, 2, 4]
// [4, 3, 2, 1] => [4, 3, 2, 2]
// [9] => [1, 0]
var digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
plusOne(digits)