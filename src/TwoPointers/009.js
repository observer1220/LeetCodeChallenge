/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();

  if (0 > Number(x)) {          // 1.負數 = false
    return false
  } else if (x.length === 1) {  // 2.個位數(0~9) = true
    return true
  } else if (x.length === 2) {  // 3.二位數(兩者相等) = true
    if (x[0] === x[1]) {
      return true
    } else {
      return false
    }
  } else if (x.length > 2) {    // 4.三位數以上
    let leftIdx = 0, rightIdx = x.length - 1;

    while (leftIdx < rightIdx) {
      if (x[leftIdx] !== x[rightIdx]) {
        return false
      } else {
        leftIdx++
        rightIdx--
      }
    }
    return true
  }
};
// 121 => true
// 12121 => true
// 1000021 => false
var x = 12121
isPalindrome(x)