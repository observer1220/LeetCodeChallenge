let result = [];

function perm(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
  } else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      perm(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function swap(arr, n1, n2) {
  [arr[n1], arr[n2]] = [arr[n2], arr[n1]];
}

perm(["A", "B", "C"], 0);
console.log(result);
/** [
  [ 'A', 'B', 'C' ],
  [ 'A', 'C', 'B' ],
  [ 'B', 'A', 'C' ],
  [ 'B', 'C', 'A' ],
  [ 'C', 'B', 'A' ],
  [ 'C', 'A', 'B' ]
]*/
