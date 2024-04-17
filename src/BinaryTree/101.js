/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return symmetryChk(root.left, root.right);
};

const symmetryChk = function (leftNode, rightNode) {
  // console.log(leftNode, rightNode);
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  if (leftNode.val !== rightNode.val) return false;

  return (symmetryChk(leftNode.left, rightNode.right) && symmetryChk(leftNode.right, rightNode.left));
};

// [1, 2, 2, 3, 4, 4, 3]
// [1, 2, 2, null, 3, null, 3]
const root = [1, 2, 2, 3, 4, 4, 3]
isSymmetric(root)

// Question
// 1. Why root.left and root.right has value? 
// The first time it run the value is undefined and second time should be the same!