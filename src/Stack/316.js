/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let stack = [];
  let seen = new Set();
  let lastVal = {};

  // 為s字串中的每個key賦值，當key相同時，位置在後面的value會直接取代前面的value
  for (let i = 0; i < s.length; i++) {
    lastVal[s[i]] = i;
  }
  // console.log('lastVal', lastVal);

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    // 當seen沒看過c時
    if (!seen.has(c)) {
      // 當陣列長度有值 && stack陣列中的最後一個元素有值 && i < lastVal[stack陣列中的最後一個元素]
      while (stack.length && c < stack[stack.length - 1] && i < lastVal[stack[stack.length - 1]]) {
        // 刪除seen物件中，stack陣列的最後一個值
        seen.delete(stack.pop());
      }
      // 將s字串中的字母加入seen物件與stack陣列中
      seen.add(c);
      stack.push(c);
    }
  }
  console.log('seen', seen);   // { 'a', 'c', 'd', 'b' }
  console.log('stack', stack); // [ 'a', 'c', 'd', 'b' ]
  return stack.join('')
};
// Input: s = "bcabc"    => Output: "abc"
// Input: s = "cbacdcbc" => Output: "acdb"
var s = "cbacdcbc"
removeDuplicateLetters(s)

/** 概念說明
 * 每個字母都有一個值，其位置即代表它的值
 * 字母c分別在0、3、7，因為7是這3個數字中的最大值，因此c=7
 * 字母b分別在1、6，因此b=6
 * ...以此類推
 */

// 2024/04/09 Kent第一次解，因Lexicographically Smaller問題卡關
// var removeDuplicateLetters = function (s) {
//   var newString = '';
//   var newMap = new Map();
//   var ss = s.split('').sort()
//   console.log(ss);

//   for (i = 0; i < ss.length; i++) {
//     newMap.set(ss[i], ss[i])
//   }
//   console.log('newMap', newMap);
//   newMap.forEach(ele => {
//     newString += ele
//   })
//   console.log(newString);
//   return newString
// };