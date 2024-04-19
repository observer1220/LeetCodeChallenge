/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let
    rows = grid.length,
    cols = grid[0].length,
    perimeter = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // console.log(`目前座標[${row}, ${col}]: ${grid[row][col]}`);

      // 只有在偵測到陸地時才計算周長，grid[row][col] === 1 陸地 0 水域
      if (grid[row][col] === 1) {
        if (row === 0 || grid[row - 1][col] === 0) perimeter++;        // 上方或第一列為水域
        if (col === 0 || grid[row][col - 1] === 0) perimeter++;        // 左方或第一行為水域
        if (row === rows - 1 || grid[row + 1][col] === 0) perimeter++; // 下方或最後一列為水域
        if (col === cols - 1 || grid[row][col + 1] === 0) perimeter++; // 右方或最後一行為水域
      }
    }
  };
  console.log(`perimeter: ${perimeter}`);
  return perimeter
}
var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]
islandPerimeter(grid)

// 0100 => 3
// 1110 => 6
// 0100 => 2
// 1100 => 5

// 座標
// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
/**
 * 1. 當1的旁邊為0或沒有數字時，總數+1
 * 2. 檢查每個數字上下左右的關係
 * 3. 當數字為零時，不需檢查
 */


