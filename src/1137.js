/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let memo = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
  }
  return memo[n]
};
// Input: n = 4  => Output: 4
// Input: n = 25 => Output: 1389537
var n = 25;
tribonacci(n)

/**
 * T0 = 0
 * T1 = 1
 * T2 = 1
 * T3 = 0 + 1 + 1 = 2
 * T4 = 1 + 1 + 2 = 4
 * Tn + 3 = Tn + Tn + 1 + Tn + 2
 * n >= 0
 */

/** 第一次的解法，後來發現用陣列更簡潔...
 * let newMap = new Map();
 * for (let i = 0; i < n + 1; i++) {
 * if (i === 0) newMap.set(`T${i}`, 0);
 * else if (i === 1 || i === 2) newMap.set(`T${i}`, 1);
 * else if (i > 2)
 * newMap.set(`T${i}`, newMap.get(`T${i - 3}`) + newMap.get(`T${i - 2}`) + newMap.get(`T${i - 1}`))
 * }
 * return newMap.get(`T${n}`)
 */