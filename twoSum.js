/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function (nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      console.log('numMap[complement]', numMap[complement]);
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }
  return [];
};
const nums = [2, 7, 11, 15]
const target = 9
twoSum(nums, target)