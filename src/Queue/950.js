/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  var result = [];

  deck.sort((a, b) => a - b);
  // Initial[2, 3, 5, 7, 11, 13, 17] 依數字大小排序
  // Reorder[2, 13, 3, 11, 5, 17, 7] 目標排序

  // 當deck陣列有值時持續迴圈，deck.pop()使得deck陣列的長度逐漸縮短
  while (deck.length) {
    // 將deck陣列的最後一個值刪除，並將其新增至result陣列的開頭
    result.unshift(deck.pop());
    // 將result陣列的最後一個值刪除，並將其新增至result陣列的開頭
    result.unshift(result.pop())
  }
  // console.log('查閱迴圈結束後的Result', result);

  // 將result陣列的第一個值刪除，並將其新增至result陣列的最後一個元素
  result.push(result.shift());
  // console.log('Result陣列的最後調整', result);

  return result
};
// [1,1000]
var deck = [17, 13, 11, 2, 3, 5, 7]
deckRevealedIncreasing(deck)

// Initial
deck = [2, 3, 5, 7, 11, 13, 17]
result = []

// 1st
deck = [2, 3, 5, 7, 11, 13]
result = [17] => [17]

// 2nd
deck = [2, 3, 5, 7, 11]
result = [13, 17] => [17, 13]

// 3rd
deck = [2, 3, 5, 7]
result = [11, 17, 13] => [13, 11, 17]

// 4th
deck = [2, 3, 5]
result = [7, 13, 11, 17] => [17, 7, 13, 11]

// 5th
deck = [2, 3]
result = [5, 17, 7, 13, 11] => [11, 5, 17, 7, 13]

// 6th
deck = [2]
result = [3, 11, 5, 17, 7, 13] => [13, 3, 11, 5, 17, 7]

// 7th 最後一個迴圈
deck = []
result = [2, 13, 3, 11, 5, 17, 7] => [7, 2, 13, 3, 11, 5, 17]

// Reorder[2, 13, 3, 11, 5, 17, 7] 達成目標排序
result = [2, 13, 3, 11, 5, 17] => [2, 13, 3, 11, 5, 17, 7]