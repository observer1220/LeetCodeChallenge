/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      // console.log('row', row);

      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      // console.log('col', col);

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
      // console.log('box', box);
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board);

/** Rules
 * 1. Each row must contain the digits 1 - 9 without repetition.
 * 2. Each column must contain the digits 1 - 9 without repetition.
 * 3. Each of the nine 3 x 3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.
 */

// 整個數獨棋盤共有81格，第一組3x3的座標編號00、01、02、10、11、12、20、21、22
// board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

Math.floor(0 / 3) // 0
Math.floor(1 / 3) // 0
Math.floor(2 / 3) // 0
Math.floor(3 / 3) // 1
Math.floor(4 / 3) // 1
Math.floor(5 / 3) // 1
Math.floor(6 / 3) // 2
Math.floor(7 / 3) // 2
Math.floor(8 / 3) // 2

0 % 3 // 0
1 % 3 // 1
2 % 3 // 2
3 % 3 // 0
4 % 3 // 1
5 % 3 // 2
6 % 3 // 0
7 % 3 // 1
8 % 3 // 2