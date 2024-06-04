/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let left = 0, right = 0; left < nums.length; left++) {
    if (nums[left] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      right++
    }
  }
  console.log(nums);
  return nums
};
// Input: nums = [0, 1, 0, 3, 12] Output: [1, 3, 12, 0, 0]
// Input: nums = [0] Output: [0]
// Input: nums = [0, 0, 1] Output: [1, 0, 0]
var nums = [0, 1, 0, 3, 12]
moveZeroes(nums)