import { createLinkedListFromArray } from "../tools/utils.js";
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 本地端環境root.right會出錯，直接在LeetCode解題比較方便
var maxDepth = function (root) {
  if (root == null) return 0;
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
};
// [1,null,2] => 2
// [3, 9, 20, null, null, 15, 7] => 3
var root = createLinkedListFromArray([3, 9, 20, null, null, 15, 7])
maxDepth(root)

// 1 => 1  => 1
// 3 => 2  => 1 + 2
// 7 => 3  => 1 + 2 + 4
// 15 => 4 => 1 + 2 + 4 + 8
// 31 => 5 => 1 + 2 + 4 + 8 + 16

// 1
// 1 1
// 11 11
// 1111 1111
// 11111111 11111111

function TreeNode (val, left, right) {
  val = (val === undefined ? 0 : val)
  left = (left === undefined ? null : left)
  right = (right === undefined ? null : right)
}

/**
 * 1. 算出節點總數
 * 2. 透過公式算出二元樹的深度
 */
