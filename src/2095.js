/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  // 如果鏈表為空或只有一個節點，返回 null
  if (!head || !head.next) return null;

  // 初始化快慢指針和前驅指針
  let slow = head;
  let fast = head;
  let prev = null;

  // 快慢指針遍歷鏈表
  while (fast && fast.next) {
    prev = slow; // 保存慢指針的前一個節點
    slow = slow.next; // 慢指針前進一步
    fast = fast.next.next; // 快指針前進兩步
  }

  // 此時，slow指向中間節點，prev指向中間節點的前一個節點
  prev.next = slow.next; // 刪除中間節點，將前驅指針的 next 指向中間節點的下一個節點

  // 返回修改後的鏈表
  return head;
};