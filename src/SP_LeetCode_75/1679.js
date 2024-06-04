/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0, right = nums.length - 1, count = 0;
  nums.sort((a, b) => a - b);

  while (left < right) {
    let sum = nums[left] + nums[right];

    // 排序前: [3, 1, 3, 4, 3] => 排序後: [4, 3, 3, 3, 1]
    // 排序後當總和小於k時，移動左側指針以確保「下次的總和」比「這次的總和」大
    if (sum < k) left++;
    else if (sum > k) right--;
    else {
      left++
      right--
      count++
    }
  }

  return count
};
// Input: nums = [1, 2, 3, 4], k = 5     Output: 2
// Input: nums = [3, 1, 3, 4, 3], k = 6  Output: 1
// Input: nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], k = 2 Output: 2
var nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], k = 2
maxOperations(nums, k)

// 1 2
// 1 3
// 1 4 => [2, 3]
// 2 3