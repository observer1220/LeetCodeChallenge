/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let test;
  for (let i = 0; i < flowerbed.length; i++) {
    let prevPos = flowerbed[i - 1], curPos = flowerbed[i], nextPos = flowerbed[i + 1];
    if (curPos === 0 && (nextPos === 0 || nextPos === undefined) && prevPos != 1) {
      flowerbed[i] = 1;
      n--;
    }

    // 檢查目前位置與下個位置的值是否相同
    if (curPos === nextPos) test = false;
    else test = true;
  }
  return test && n <= 0 ? true : false;
};
// Input: [1, 0, 0, 0, 0, 1], n = 2 Output: false
// Input: [1, 0, 1, 0, 1, 0, 1], n = 0 Output: true
// Input: [1, 0, 1, 0, 1, 0, 1], n = 1 Output: false
// Input: [0, 0, 1, 0, 1], n = 1 Output: true
// Input: [1, 0, 0, 0, 1, 0, 0], n = 2 Output: true
// Input: [1], n = 0 Output: true
// Input: [0], n = 1 Output: true
// Input: [0, 0, 1, 0, 0], n = 1 Output: true
var flowerbed = [0, 0, 1, 0, 0], n = 1
canPlaceFlowers(flowerbed, n)