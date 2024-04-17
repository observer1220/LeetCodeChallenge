/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  console.log(nums);
}
var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;
removeElement(nums, val)