import { createLinkedListFromArray } from "../../tools/utils.js";
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
*/
var removeElements = function (head, val) {
  // console.log('params', head);
  if (!head) return head
  head.next = removeElements(head.next, val)

  if (head.val === val) {
    // 只回傳head.next，不回傳head.val，即代表刪除
    return head.next
  } else {
    return head
  }
};

var head = createLinkedListFromArray([1, 2, 6, 3, 4, 5, 6])
var val = 6;
removeElements(head, val)