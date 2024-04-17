class ListNode {
  constructor (val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function createLinkedListFromArray (arr) {
  let head = null;
  let current = null;

  for (let val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  return head;
}

