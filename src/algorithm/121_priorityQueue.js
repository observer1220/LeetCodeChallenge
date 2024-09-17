class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    // check if the priority queue is empty
    if (this.values.length === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      // swap parent and child
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    } else if (this.values.length === 1) {
      let removedNode = this.values.pop();
      return removedNode;
    }

    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removedNode = this.values.pop();

    this.maxHeapify(0);

    return removedNode;
  }

  maxHeapify(i) {
    let largest;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (
      left <= this.values.length - 1 &&
      this.values[left].priority > this.values[i].priority
    ) {
      largest = left;
    } else {
      largest = i;
    }

    if (
      right <= this.values.length - 1 &&
      this.values[right].priority > this.values[largest].priority
    ) {
      largest = right;
    }

    if (largest !== i) {
      // swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Learn Java", 2);
pq.enqueue("Learn Python", 7);
pq.enqueue("Buy Textbooks", 8);
pq.enqueue("Watch Netflix", 12);
pq.enqueue("Pay Bills", 15);

while (pq.values.length >= 1) {
  let task = pq.dequeue();
  console.log(task.value + ", " + task.priority);
}
