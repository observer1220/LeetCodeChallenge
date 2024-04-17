/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (nums1.length < 0 || nums2.length < 0) return false;

  while (nums1.length > m) {
    nums1.pop()
  }

  while (nums2.length > n) {
    nums1.pop()
  }

  nums2.map(ele => {
    nums1.push(ele)
  })

  nums1.sort((a, b) => a - b)

  console.log('Bad', nums1);
};
var nums1 = [1, 2, 3, 0, 0, 0]
var m = 3
var nums2 = [2, 5, 6]
var n = 3
merge(nums1, m, nums2, n)