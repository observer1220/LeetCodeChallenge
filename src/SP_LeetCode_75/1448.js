var goodNodes = function (root) {
  // 用於計數“好”節點的變數
  let good = 0;

  // 定義一個遞迴函數，用於遍歷二元樹
  const traverse = (node, max) => {
    // 如果節點為空，則返回
    if (!node) return;

    // 如果當前節點的值大於等於從根到該節點路徑上的所有節點值中的最大值
    if (node.val >= max) {
      // 增加“好”節點的計數
      good++;
      // 更新路徑上的最大值為當前節點的值
      max = node.val;
    }

    // 遞迴遍歷左子樹，並將當前最大值傳遞下去
    traverse(node.left, max);
    // 遞迴遍歷右子樹，並將當前最大值傳遞下去
    traverse(node.right, max);
  }

  // 從根節點開始遍歷，初始最大值設置為根節點的值
  traverse(root, root.val);
  // 返回“好”節點的總數
  return good;
};
