let table1;
let table2;
let result = "";
let x = "ABCD";
let y = "ABC";

LCS(x, y);
printLCS(x.length, y.length);
console.log(result);

function LCS(str1, str2) {
  let m = str1.length;
  let n = str2.length;
  table1 = [];
  table2 = [];

  for (let i = 0; i <= m; i++) {
    table1.push([]);
    table1[i][0] = 0;
    for (let k = 1; k <= n; k++) {
      table1[i].push(null);
    }
  }

  for (let j = 0; j <= n; j++) {
    table1[0][j] = 0;
  }

  // console.log(table1);
  /** [
  [ 0, 0, 0, 0 ],
  [ 0, null, null, null ],
  [ 0, null, null, null ],
  [ 0, null, null, null ],
  [ 0, null, null, null ]
  ] */

  // TABLE2
  for (let i = 0; i <= m; i++) {
    table2.push([]);
    for (let k = 0; k <= n; k++) {
      table2[i].push(null);
    }
  }
  // console.log(table2);
  /** [
  [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ]
  ] */

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        table1[i][j] = 1 + table1[i - 1][j - 1];
        table2[i][j] = "↖";
      } else if (table1[i - 1][j] >= table1[i][j - 1]) {
        table1[i][j] = table1[i - 1][j];
        table2[i][j] = "↑";
      } else {
        table1[i][j] = table1[i][j - 1];
        table2[i][j] = "←";
      }
    }
  }
  // console.log(table1);
  /** [
  [ 0, 0, 0, 0 ],
  [ 0, 1, 1, 1 ],
  [ 0, 1, 2, 2 ],
  [ 0, 1, 2, 3 ],
  [ 0, 1, 2, 3 ]
  ] */

  // console.log(table2);
  /** [
  [ null, null, null, null ],
  [ null, '↖', '←', '←' ],
  [ null, '↑', '↖', '←' ],
  [ null, '↑', '↑', '↖' ],
  [ null, '↑', '↑', '↑' ]
  ] */
}

function printLCS(i, j) {
  if (i === 0 || j === 0) {
    return;
  }

  if (table2[i][j] === "↖") {
    printLCS(i - 1, j - 1);
    result += x[i - 1];
  } else if (table2[i][j] === "↑") {
    printLCS(i - 1, j);
  } else {
    printLCS(i, j - 1);
  }
}
