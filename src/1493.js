/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0, right = 0;
  let zeroCount = 0;
  let maxLength = 0;

  // 右指針遍歷過 nums 陣列
  while (right < nums.length) {
    // 當右指針為零時，zeroCount + 1
    if (nums[right] === 0) zeroCount++;

    // 當zeroCount > 1時
    while (zeroCount > 1) {
      // 當左指針為零時，zeroCount - 1
      if (nums[left] === 0) zeroCount--;
      // 左指針 + 1
      left++;
    }

    // 注意這裡我們只更新maxLength，不減去1，這樣可以避免特殊情況的處理
    maxLength = Math.max(maxLength, right - left);

    // 解除while迴圈的條件，確保右指針持續 + 1
    right++;
  }

  // 由於題目要求至少刪除一個元素，我們需要檢查原始陣列中是否存在0
  if (maxLength === nums.length) maxLength--;

  return maxLength;
};
// Input: nums = [1, 1, 0, 1] Output: 3
// Input: nums = [0, 1, 1, 1, 0, 1, 1, 0, 1] Output: 5
// Input: nums = [1, 1, 1] Output: 2
var nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
longestSubarray(nums)