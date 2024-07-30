var pairSum = function (head) {
  // 如果鏈表為空或只有一個節點，直接返回 head
  if (head === null || head.next === null) return head;

  // 使用堆疊存儲鏈表中的值
  let stack = [];

  // 遍歷鏈表並將每個節點的值推入堆疊
  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }

  // 初始化 max 變量來記錄最大值
  let max = 0;

  // 遍歷堆疊中的每個值，計算對應位置的值和，並更新最大值
  for (let i = 0; i < stack.length; i++) {
    max = Math.max(max, stack[i] + stack[stack.length - 1 - i]);
  }

  // 返回找到的最大對和
  return max;
};
