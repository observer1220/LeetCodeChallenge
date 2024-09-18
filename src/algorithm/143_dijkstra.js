class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.edges = [];
    this.distanceFromStartNode = Infinity;
    this.previous = null;
  }

  addEdges(edge) {
    this.edges.push(edge);
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

// 建立節點
let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");

// 建立連結
A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));

class MinHeap {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      index > 0 &&
      this.values[index].distanceFromStartNode <
        this.values[parentIndex].distanceFromStartNode
    ) {
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.minHeapify(0);
    }
    return min;
  }

  minHeapify(index) {
    let smallest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (
      left < this.values.length &&
      this.values[left].distanceFromStartNode <
        this.values[smallest].distanceFromStartNode
    ) {
      smallest = left;
    }

    if (
      right < this.values.length &&
      this.values[right].distanceFromStartNode <
        this.values[smallest].distanceFromStartNode
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.values[index], this.values[smallest]] = [
        this.values[smallest],
        this.values[index],
      ];
      this.minHeapify(smallest);
    }
  }

  decreasePriority(node) {
    const index = this.values.indexOf(node);
    if (index !== -1) {
      this.bubbleUp(index);
    }
  }
}

function Dijkstra(startNode) {
  const minHeap = new MinHeap();
  startNode.distanceFromStartNode = 0;

  minHeap.enqueue(A);
  minHeap.enqueue(B);
  minHeap.enqueue(C);
  minHeap.enqueue(D);
  minHeap.enqueue(E);
  minHeap.enqueue(F);

  while (minHeap.values.length > 0) {
    const currentNode = minHeap.dequeue();
    currentNode.visited = true;

    currentNode.edges.forEach((edge) => {
      const neighbor = edge.node;
      if (!neighbor.visited) {
        const newDistance = currentNode.distanceFromStartNode + edge.weight;
        if (newDistance < neighbor.distanceFromStartNode) {
          neighbor.distanceFromStartNode = newDistance;
          neighbor.previous = currentNode;
          minHeap.decreasePriority(neighbor);
        }
      }
    });
  }
}

Dijkstra(E);

console.log(
  "Distance from Start Node:",
  A.distanceFromStartNode,
  "and Previous Node:",
  A.previous ? A.previous.value : null
);
console.log(
  "Distance from Start Node:",
  B.distanceFromStartNode,
  "and Previous Node:",
  B.previous ? B.previous.value : null
);
console.log(
  "Distance from Start Node:",
  C.distanceFromStartNode,
  "and Previous Node:",
  C.previous ? C.previous.value : null
);
console.log(
  "Distance from Start Node:",
  D.distanceFromStartNode,
  "and Previous Node:",
  D.previous ? D.previous.value : null
);
console.log(
  "Distance from Start Node:",
  E.distanceFromStartNode,
  "and Previous Node:",
  E.previous ? E.previous.value : null
);
console.log(
  "Distance from Start Node:",
  F.distanceFromStartNode,
  "and Previous Node:",
  F.previous ? F.previous.value : null
);
