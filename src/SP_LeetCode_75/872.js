var leafSimilar = function (root1, root2) {
  // 定義一個輔助函數，用於收集二叉樹的葉節點值
  const collectLeafValues = (root, leafValues) => {
    if (!root) return; // 如果節點為空，返回
    if (!root.left && !root.right) leafValues.push(root.val); // 如果是葉節點，將其值添加到葉節點值數組中

    collectLeafValues(root.left, leafValues); // 遞迴處理左子樹
    collectLeafValues(root.right, leafValues); // 遞迴處理右子樹
  }

  // 初始化兩個數組，用於存儲兩棵樹的葉節點值
  const leafValues1 = [], leafValues2 = [];
  collectLeafValues(root1, leafValues1); // 收集第一棵樹的葉節點值
  collectLeafValues(root2, leafValues2); // 收集第二棵樹的葉節點值

  // 如果兩個葉節點值數組的長度不同，則直接返回 false
  if (leafValues1.length !== leafValues2.length) return false;

  // 比較兩個葉節點值數組中的每個元素，如果有不相同的，則返回 false
  for (let i = 0; i < leafValues1.length; i++) {
    if (leafValues1[i] !== leafValues2[i]) return false;
  }
  // 如果所有葉節點值都相同，返回 true
  return true;
};
