/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log('DIFF', diff);

    if (numMap.has(diff)) {
      console.log('GET', [i, numMap.get(diff)]);
      return [i, numMap.get(diff)]
    }
    console.log('SET', numMap.set(nums[i], i));
    numMap.set(nums[i], i)
  }
};

const nums = [1, 3, 53, 72, 52, 34, 33, 61, 78, 2, 72, 111, 15];
const target = 144;
twoSum(nums, target);