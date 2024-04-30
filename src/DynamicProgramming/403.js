/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  // 用 Map 紀錄每個石頭可以跳的距離
  const dp = new Map()
  // 初始化每個石頭的跳躍距離
  stones.forEach(item => dp.set(item, new Set()))
  // 起始石頭可以跳 0 格
  dp.get(0).add(0)

  // 遍歷每個石頭
  for (let stone of stones) {
    // 遍歷每個石頭可以跳的距離
    for (let jump of dp.get(stone)) {
      console.log('stone:', stone, 'jump:', jump);
      // console.log('dp:', dp);
      // 遍歷每個跳躍距離
      for (let jumpDistance of [jump - 1, jump, jump + 1]) {
        // 如果跳躍距離大於 0 且下一個石頭存在
        if (jumpDistance > 0 && dp.has(stone + jumpDistance))
          // 將下一個石頭的跳躍距離加入
          dp.get(stone + jumpDistance).add(jumpDistance)
      }
    }
  }

  console.log(dp.get(stones[stones.length - 1]).size > 0);
  // 最後一個石頭的跳躍距離大於 0 代表可以跳到
  return dp.get(stones[stones.length - 1]).size > 0
};
// [0,1,2,3,4,8,9,11]
var stones = [0, 1, 3, 5, 6, 8, 12, 17]
canCross(stones)

// [0, 1, 3, 5, 6, 8, 12, 17] => true
// 0=>1, [-1, 0, 1], k=1，第1格只能跳1格，所以只有1種走法
// 1=>3, [0, 1, 2], k=2，
// 3=>5, [1, 2, 3], k=2
// 5=>6, [2, 3, 4], k=1
// 6=>8, [3, 4, 5], k=2
// 8=>12, [4, 5, 6], k=4
// 12=>17, [5, 6, 7], k=5

// [3, 4, 5], 
// k=2, k=3，有2種走法，Pass上一格 k=3 後面才能正常跑完)