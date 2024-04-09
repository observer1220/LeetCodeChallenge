/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // console.log('p', JSON.stringify(p));
  // console.log('q', JSON.stringify(q));
  // console.log(JSON.stringify(p) == JSON.stringify(q));
  return JSON.stringify(p) === JSON.stringify(q)
};

// Input: p = [1, 2, 3], q = [1, 2, 3]
// Input: p = [1, 2],    q = [1, null, 2]
// Input: p = [1, 2, 1], q = [1, 1, 2]

const p = [1, 2, 3];
const q = [1, 2, 3];
isSameTree(p, q)

// 一開始想把root, right, left分開來比對，但後來發現即使陣列的內容相同，pTree也無法等於qTree
// 後來發現把陣列轉為字串後，兩者就可以直接做比對了...