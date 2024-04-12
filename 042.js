/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0, r = height.length - 1;
  let lMax = 0, rMax = 0, rainCounter = 0;

  // 當左指標小於右指標
  while (l < r) {
    // lMax 代表左邊最高的柱子，Math.max(目前最大值, 移動的左側柱子)取兩者中較大的值
    lMax = Math.max(lMax, height[l]);
    // console.log('LEFT', lMax, height[l], Math.max(lMax, height[l]));

    // 當前柱子高度小於左邊最高的柱子
    if (height[l] < lMax) {
      // 儲水量 = 左邊最高的柱子 - 當前柱子高度
      rainCounter += lMax - height[l];
    }

    // rMax 代表右邊最高的柱子，Math.max(目前最大值, 移動的右側柱子)取兩者中較大的值
    rMax = Math.max(rMax, height[r]);
    // console.log('RIGHT', rMax, height[r], Math.max(rMax, height[r]));

    // 當前柱子高度小於右邊最高的柱子
    if (height[r] < rMax) {
      // 儲水量 = 右邊最高的柱子 - 當前柱子高度
      rainCounter += rMax - height[r];
    }
    // console.log('lMax', lMax, 'rMax', rMax);

    // 當左邊柱子較矮時，左指標往右移動，反之右指標往左移動
    height[l] < height[r] ? l++ : r--;
    // console.log('---------------');
  }

  // console.log('rainCounter', rainCounter);
  return rainCounter
};
// [4,2,0,3,2,5]
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // Output: 6
trap(height)

/** 
 * [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] 海拔
 * [0, 0, 1, 0, 1, 2, 1, 0, 0, 1, 0, 0] 積水處
 * 
 * 特性
 * 1. 第一格跟最後一格沒辦法儲水
 * 2. 前後格高於中間的窪地才可以儲存水
 * 3. 至高點本身沒辦法儲水
 *
 * 策略
 * 1. 先找到至高點，再從至高點與兩側的關係下手
 * 2. 該格能儲存多少水，取決於前後最高點-最低點的值
 * 3. 如何找到下一個最高點
 */