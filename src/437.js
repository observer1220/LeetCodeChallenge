var pathSum = function (root, targetSum) {
  let output = 0;
  const map = new Map();
  map.set(0, 1); // 初始化 map，表示從根節點到當前節點的路徑和為 0 的條數為 1

  // 定義遞歸函數 traverse，參數包括當前節點 root 和從根節點到當前節點的路徑和 pathSum
  const traverse = (root, pathSum) => {
    if (!root) return; // 如果當前節點為空，直接返回

    pathSum += root.val; // 更新路徑和，加上當前節點的值

    // 如果 map 中存在路徑和為 pathSum - targetSum 的記錄，則將其值加到 output 中
    if (map.has(pathSum - targetSum)) {
      output += map.get(pathSum - targetSum);
    }

    // 更新 map，將當前路徑和的計數加一
    map.set(pathSum, (map.get(pathSum) || 0) + 1);

    // 遞歸處理左子樹和右子樹
    traverse(root.left, pathSum);
    traverse(root.right, pathSum);

    // 回退操作，當前節點處理完畢後，將對應的路徑和的計數減一
    map.set(pathSum, map.get(pathSum) - 1);
  };

  // 呼叫遞歸函數開始計算
  traverse(root, 0);

  // 返回符合條件的路徑數量
  return output;
};
