/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let answer = 0;
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)

  console.log(arr);

  // 陣列長度/2 => 有餘數為單數，無餘數為雙數
  if (arr.length % 2 === 1) {
    answer = arr[Math.floor(arr.length / 2)]
    return answer
  } else {
    // 陣列中間的兩個數字
    let first = arr[Math.floor(arr.length / 2)];
    let second = arr[Math.floor(arr.length / 2) - 1];

    answer = (first + second) / 2;

    if (answer < 0)
      answer = 0
    return answer
  }
};
var nums1 = [2, 2, 4, 4]
var nums2 = [2, 2, 4, 4]
findMedianSortedArrays(nums1, nums2)