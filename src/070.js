/** 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let firstStep = 0, secondStep = 1, totalStep = 0;

  if (n < 2) {
    return 1
  }

  for (let i = 2; i <= n; i++) {
    totalStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = totalStep;
  }

  return totalStep
};
var n = 1
climbStairs(n)

// 費波納契數列
// if n = 2 => 2
// 1 step + 1 step
// 2 steps

// if n = 3 => 3
// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step

// if n = 4 => 5
// 1 + 1 + 1 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 1 + 2 + 1
// 2 + 2

// if n = 5 => 8
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 2 + 1 + 1 + 1
// 1 + 2 + 1 + 1
// 1 + 1 + 2 + 1
// 2 + 2 + 1
// 2 + 1 + 2
// 1 + 2 + 2