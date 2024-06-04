/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let writeIndex = 0;
  let i = 0;

  while (i < chars.length) {
    let curChar = chars[i];
    let charLength = 0;

    // 統計當前字符的數量
    while (chars[i] === curChar) {
      charLength++;
      i++;
    }

    // 寫入當前字符
    chars[writeIndex++] = curChar;

    // 寫入數量，如果大於1
    if (charLength > 1) {
      const countStr = charLength.toString();
      for (let j = 0; j < countStr.length; j++) {
        chars[writeIndex++] = countStr[j];
      }
    }
  }

  // 處理完成後截斷數組，確保數組大小是最終壓縮後的大小
  chars.length = writeIndex;
  console.log(chars);
  return writeIndex;
};
// Input: ["a", "a", "b", "b", "c", "c", "c"] Output: ["a", "2", "b", "2", "c", "3"]
// Input: ["a"] Output: ["a"]
// Input: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"] Output: ["a", "b", "1", "2"]
var chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
compress(chars)


/** 原本的作法，可以得出正確答案，但系統不接受
let result = []

for (let i = 0; i < chars.length;) {
  let curChar = chars[i];
  let count = 0;
  while (curChar === chars[i]) {
    count++
    i++
  }
  result.push(curChar, count === 1 ? '' : `${count}`)
  result = result.filter(item => item !== '')
  result.map((item, idx) => {
    if (item.length >= 2) {
      result.splice(idx, 1)
      result.push(...item.split(''))
      console.log('RESULT', result);
      return result
    }
  })
}
 */