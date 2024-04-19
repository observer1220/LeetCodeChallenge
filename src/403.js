/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const dp = new Map()
  stones.forEach(item => dp.set(item, new Set()))
  dp.get(0).add(0)

  for (let stone of stones) {
    for (let jump of dp.get(stone)) {
      for (let jumpDistance of [jump - 1, jump, jump + 1]) {
        if (jumpDistance > 0 && dp.has(stone + jumpDistance))
          dp.get(stone + jumpDistance).add(jumpDistance)
      }
    }
  }

  console.log(dp.get(stones[stones.length - 1]).size > 0);
  return dp.get(stones[stones.length - 1]).size > 0
};
var stones = [0, 1, 3, 5, 6, 8, 12, 17]
canCross(stones)

// [0, 1, 3, 5, 6, 8, 12, 17] => true
// 0=>1, k=1
// 1=>3, k=2
// 3=>5, k=2
// 5=>6,       k=1 (跳這格符合k-1原則，但會導致8=>12失敗)
// 6=>8,  k=3  k=2 (Pass上一格 k=3 後面才能正常跑完)
// 8=>12, k=4
// 12=>17, k=5

// [0, 1, 2, 3, 4, 8, 9, 11] => false
// 0=>1, k=1
// 1=>2, k=1
// 2=>3, k=1
// 3=>4, k=1
// 4=>8, k=4 (失敗)
// 8=>9, k=1
// 9=>11, k=2

// [0, 1, 2], [1, 2, 3], [2, 3, 4]