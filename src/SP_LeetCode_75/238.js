/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 陣列長度
  const n = nums.length;

  // 前綴乘積、後綴乘積
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);

  // 計算前綴乘積
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
    // console.log(`prefix_${i}`, prefix[i]);
  }

  // 計算後綴乘積
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
    // console.log(`suffix_${i}`, suffix[i]);
  }

  const answer = [];
  // 計算答案
  for (let i = 0; i < n; i++) {
    // console.log(`answer_${i}`, prefix[i], suffix[i]);
    answer[i] = prefix[i] * suffix[i];
  }

  // console.log(answer);
  return answer;
};
// Input: nums = [1, 2, 3, 4] Output: [24, 12, 8, 6]
// Input: nums = [-1, 1, 0, -3, 3] Output: [0, 0, 9, 0, 0]
var nums = [1, 2, 3, 4]
productExceptSelf(nums)

/** 
 * answer[0] 1 * 24 = 24
 * answer[1] 1 * 12 = 12
 * answer[2] 2 * 4  = 8
 * answer[3] 6 * 1  = 6
 */