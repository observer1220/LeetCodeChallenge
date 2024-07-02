var reverseList = function (head) {
  // 如果鏈表為空或只有一個節點，直接返回head
  if (head === null || head.next === null) return head;

  // 遞歸地反轉剩下的鏈表
  var res = reverseList(head.next);

  // 將當前節點連接到下一個節點的後面
  head.next.next = head;

  // 將當前節點的next設為null，避免形成環
  head.next = null;

  // 返回新的頭節點
  return res;
};
