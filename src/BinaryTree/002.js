import { createLinkedListFromArray } from "../tools/utils.js";
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 先創建一個節點，因為需要用它來做指向
  let headNode = new ListNode();

  // 跟踪當前節點，以便我們可以輕鬆地在末尾添加新節點
  let curNode = headNode;

  // 根據上一次迴圈結果，取得1或是0的值
  let carry = 0;

  // while (l1 != null || l2 != null || carry != 0)
  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      // 如果總和是2位數，將carry=1帶到下一次迴圈
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    // 將新的節點代入解答中
    curNode.next = new ListNode(sum);

    // 推進當前的節點
    curNode = curNode.next;
  }

  return headNode.next;
};
var l1 = createLinkedListFromArray([2, 4, 3])
var l2 = createLinkedListFromArray([5, 6, 4])
addTwoNumbers(l1, l2)

function ListNode (val, next) {
  val = (val === undefined ? 0 : val)
  next = (next === undefined ? null : next)
}

/**
 * sum => 
 *  2 + 5 = 7
 *  4 + 6 => 10 => 0
 *  3 + 4 = 1 + 7 => 8
 */



/**
 * Example 1
 * Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
 * Output: [7, 0, 8]
 * 
 * Example 2
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3
 * Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
 * Output: [8, 9, 9, 9, 0, 0, 0, 1]
 */
