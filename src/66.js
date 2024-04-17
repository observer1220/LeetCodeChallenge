/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.join('')
  console.log(digits);
};
// [1, 2, 3] => [1, 2, 4]
// [4, 3, 2, 1] => [4, 3, 2, 2]
// [9] => [1, 0]
var digits = [1, 2, 3]
plusOne(digits)