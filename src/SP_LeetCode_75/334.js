/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 當陣列長度小於3，直接返回false
  if (nums.length < 3) return false;

  // firstNum 為 nums 陣列中的第1個元素, maxNum 為 JavaScript 中的最大數值
  let firstNum = nums[0], maxNum = Number.MAX_VALUE;

  // 遍歷 nums 陣列中的每個元素
  for (const curNum of nums) {
    // 若 curNum 大於 maxNum，則返回 true，這表示找到了一個比 maxNum 還大的數
    if (curNum > maxNum) return true;
    // 若 curNum 大於 firstNum，則將 firstNum 設為當前的 num
    if (curNum > firstNum) maxNum = curNum;
    // 若 curNum 小於 firstNum，則將 firstNum 設為當前的 num
    else firstNum = curNum;
  }
  // 遍歷完所有的數都沒有返回 true，則返回 false
  return false
};
var nums = [20, 100, 10, 12, 5, 13]
console.log(increasingTriplet(nums));

// Example 1:
// Input: nums = [1, 2, 3, 4, 5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5, 4, 3, 2, 1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2, 1, 5, 0, 4, 6]
// Output: true
// Explanation: The triplet(3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// 此解法僅能滿足連續數組
// for (let i = 0, j = i + 1, k = j + 1; i < nums.length; i++) {
//   if (nums[i] <= nums[j] && nums[j] <= nums[k]) {
//     return true
//   }
// }
// return false