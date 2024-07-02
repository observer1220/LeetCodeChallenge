var oddEvenList = function (head) {
  // 如果連結串列為空或只有一個節點，則直接返回頭節點
  if (head === null || head.next === null) return head;

  // 定義奇數節點和偶數節點的指標
  let odd = head;
  let even = head.next;
  let evenHead = even; // 保存偶數節點的頭節點，方便最後連接

  // 迴圈遍歷連結串列，並將奇數節點和偶數節點分開
  while (even !== null && even.next !== null) {
    odd.next = even.next; // 將奇數節點的 next 指向下一個奇數節點
    odd = odd.next; // 移動奇數指標
    even.next = odd.next; // 將偶數節點的 next 指向下一個偶數節點
    even = even.next; // 移動偶數指標
  }

  // 將「奇數節點」鏈接到「偶數節點」
  odd.next = evenHead;
  return head; // 返回重新排列後的頭節點
};
// Input = [1, 2, 3, 4, 5] => Output = [1, 3, 5, 2, 4]
// 備註：題目是將奇數項移到前面，偶數項移到後面，這裡是指項目而不是數字本身
