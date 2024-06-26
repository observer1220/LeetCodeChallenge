/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 加總 nums 陣列的所有數字
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  // 設置左側總和起始值
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 設置右側總和 = 陣列總和 - 左側總和 - 目前的值
    let rightSum = totalSum - leftSum - nums[i];

    // 當左側總和 等於 右側總和 返回目前索引
    if (leftSum === rightSum) {
      return i;
    }

    // 左側總和 = 目前的值持續加總
    leftSum += nums[i];
  }

  // 不符合上述邏輯時，返回-1
  return -1
};
// Input: nums = [1, 7, 3, 6, 5, 6] Output: 3
// Input: nums = [1, 2, 3]          Output: -1
// Input: nums = [2, 1, -1]         Output: 0
var nums = [2, 1, -1]
pivotIndex(nums)

// 原本的作法: 未完成...
// var pivotIndex = function (nums) {
//   let left = 0, right = nums.length - 1;
//   let leftSum = nums[left], rightSum = nums[right];
//   while (left < right) {
//     console.log(leftSum, rightSum);
//     if (leftSum < rightSum) {
//       left++;
//       leftSum += nums[left];
//     } else if (leftSum > rightSum) {
//       right--
//       rightSum += nums[right];
//     } else if (leftSum === rightSum) {
//       console.log(Number.isInteger((left + right) / 2) ? (left + right) / 2 : -1);
//       return Number.isInteger((left + right) / 2) ? (left + right) / 2 : -1
//     }
//   }
// };