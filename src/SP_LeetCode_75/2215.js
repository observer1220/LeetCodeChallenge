/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let t1 = new Set(nums1), t2 = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (t2.has(nums1[i])) t2.delete(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (t1.has(nums2[i])) t1.delete(nums2[i]);
  }

  return [[...t1], [...t2]]
};
// Input: nums1 = [1, 2, 3], nums2 = [2, 4, 6] Output: [[1, 3], [4, 6]]
var nums1 = [1, 2, 3], nums2 = [2, 4, 6]
findDifference(nums1, nums2)