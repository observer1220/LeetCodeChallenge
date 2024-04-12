import { createLinkedListFromArray } from "./tools/utils.js";
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // console.log('list1', list1);
  // console.log('list2', list2);

  // 定義Recursion的退出條件
  if (!list1) return list2;
  if (!list2) return list1;

  // 修改list1、list2的next
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};

var list1 = createLinkedListFromArray([1, 2, 4]);
var list2 = createLinkedListFromArray([1, 3, 4]);
mergeTwoLists(list1, list2)

/** 遞迴算法的重點
 * 1. 需不斷調用自身方法
 * 2. 需定義退出條件
 */