/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // 將輸入的字串 s 拆解成一個字元陣列
  const arr = s.split('')

  // 迴圈，每次跳過 k*2 個元素，因為每次要處理 k 個元素
  for (let i = 0; i < arr.length; i += k * 2) {
    // 設置左右指針，左指針初始為 i，右指針初始為 i + k - 1
    let left = i;
    let right = i + k - 1;

    // 使用 while 迴圈進行部分字串的反轉，左指針小於右指針時執行
    while (left < right) {
      // 如果右指針超出字串範圍，將右指針左移
      if (arr[right] === undefined) {
        right--;
        continue;
      }

      // 交換左右指針所指的字元
      [arr[left], arr[right]] = [arr[right], arr[left]];

      // 左指針右移，右指針左移
      left++
      right--
    }
  }

  // 將字元陣列重新組合成字串後回傳
  return arr.join('')
};
// "abcdefg" => "bacdfeg"
var s = "abcdefg", k = 2
reverseStr(s, k)

// k = 2 => ba
// 2k = 4 => fe
