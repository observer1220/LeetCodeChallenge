/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // avr 被初始化為負無窮大（-Infinity），用於儲存目前找到的最大平均值
  let avr = -Infinity;

  // acc 是累計值、cur 是當前元素、idx 是當前索引
  nums.reduce((acc, cur, idx) => {
    // 累加當前元素到窗口和
    acc += cur;

    // 檢查窗口是否達到長度 k，當 idx 大於或等於 k - 1 時，說明窗口已經包含了 k 個元素
    if (idx >= k - 1) {
      // 計算並更新最大平均值，avr為目前最大值，(acc / k)為新的平均值
      avr = Math.max(avr, acc / k);
      // 移動窗口，減去窗口的第一個元素：為實現滑動窗口，從當前和中減去窗口的第1個元素，使得下一次迭代可包含新元素
      acc -= nums[idx - k + 1];
    }

    // 返回最大平均值
    return acc;
  }, 0);

  console.log(avr);
  return avr;
};
// Input: nums = [1, 12, -5, -6, 50, 3], k = 4 Output: 12.75000
// Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Input: nums =[-1], k = 1 Output: -1.00000
var nums = [1, 12, -5, -6, 50, 3], k = 4
findMaxAverage(nums, k)

// let avr = -Infinity;
// let acc = 0, start = 0;
// for (let end = 0; end < nums.length; end++) {
//   acc += nums[end];
//   console.log(acc);

//   if ((end - start) + 1 === k) {
//     avr = Math.max(avr, acc / k);
//     acc -= nums[start];
//     start += 1;
//   }
// }
// console.log('AVR', avr);
// return avr;