class MyStack {
  constructor () {
    this.q = [];
  }

  push (x) {
    this.q.push(...x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop () {
    return this.q.shift();
  }

  top () {
    return this.q[0];
  }

  empty () {
    return this.q.length === 0;
  }
}

var x = ["MyStack", "push", "push", "top", "pop", "empty"];
var obj = new MyStack()

obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()

console.log('POP', param_2);
console.log('TOP', param_3);
console.log('EMPTY', param_4);

/** 
 * INPUT
 * ["MyStack","push","push","top","pop","empty"]
 * [[],[1],[2],[],[],[]] // ← 看不懂這一行
 * 
 * OUTPUT
 * [null, null, null, 2, 2, false]
*/