/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rows = grid.map(row => row.join());
  const columns = grid[0].map((_, colIdx) => grid.map(row => row[colIdx]).join());
  let count = 0;

  for (let row of rows) {
    for (let column of columns) {
      if (row === column) count++;
    }
  }

  return count;
};
var grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
equalPairs(grid)

// Input: grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]] Output: 1
// Explanation: There is 1 equal row and column
// pair: - (Row 2, Column 1): [2, 7, 7]

// 無解
// let i = 0, j = 0;
// let column = [];
// console.log(grid[0].length - 1);
// while (j < grid[grid[0].length] - 1) {
//   i++
//   j++
//   column.push([grid[i][j], grid[i][j], grid[i][j]])
// }
// console.log(grid[0][0], grid[1][0], grid[2][0]);
// console.log(grid[0][1], grid[1][1], grid[2][1]);
// console.log(grid[0][2], grid[1][2], grid[2][2]);