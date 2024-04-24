/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;
  if (nums.length === 0) result = init;
  for (let i = 0; i < nums.length; i++) {
    if (init === 0) {
      result += fn(init, nums[i]);
    } else {
      result = fn(result, nums[i]);
    }
  }
  return result
};