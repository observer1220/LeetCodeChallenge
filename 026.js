/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
    }
  }
  return nums.length
};
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums)

// 陣列方法比較好理解，但雙指針方法比較有效率
// var removeDuplicates = function (nums) {
//   for (let i = nums.length - 1; i > 0; i--) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1)
//     }
//   }
//   return nums.length
// };

// 雙指針方法比較有效率，k值正確，但nums陣列會被汙染[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
// var removeDuplicates = function (nums) {
//   let k = 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   console.log('nums', nums);
//   return k;
// };