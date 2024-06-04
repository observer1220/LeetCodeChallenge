/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // // left 和 right 是兩個指針，用來表示滑動窗口的左右邊界
  let left = 0, right = 0;

  // 當 right 指針小於 nums 長度時，進行迴圈，直到 right 指針到達 nums 長度
  while (right < nums.length) {
    // 若 nums[right] 為 0，則 k - 1
    if (nums[right] === 0) k--;
    // k < 0 代表0的數量超過k，則需要移動 left 指針，直到 k >= 0
    if (k < 0) {
      // 若 nums[left] 為 0，則 k + 1
      if (nums[left] === 0) k++;
      left++;
    }
    right++
  }

  // right - left 為窗口的大小，即為最長連續 1 的長度
  return right - left;
};
// Input: nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2 Output: 6
// Input: nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3 Output: 10
var nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
longestOnes(nums, k)