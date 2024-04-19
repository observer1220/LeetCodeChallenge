/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let rows = grid.length, cols = grid[0].length, island = 0;

  const markIsland = (row, col) => {
    // 檢查邊界條件以及是否為陸地
    // row < 0: 最上邊 || row >= rows: 最下邊 || col < 0: 最左邊 || col >= cols: 最右邊
    // grid[row][col] === "0" 將造訪過的陸地標記為0，當全部的土地都標記為0，代表這張圖的島嶼已經找完
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === "0") {
      return;
    }

    // 標記已訪問過的陸地
    grid[row][col] = "0";

    // 遞歸標記上下左右的陸地
    markIsland(row + 1, col); // 上
    markIsland(row - 1, col); // 下
    markIsland(row, col + 1); // 右
    markIsland(row, col - 1); // 左
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // console.log(`座標[${row}, ${col}]`, grid[row][col], grid[row][col - 1]);

      // 先找到陸地的位置，再透過陸地的上下左右是否為0，判斷這張圖有幾個島嶼
      if (grid[row][col] === "1") {
        // 可能是島嶼的最大值
        island++

        // 標記相鄰的陸地為已訪問
        markIsland(row, col);
      }
    }
  }

  console.log(`island:${island}`);
  return island
};

// 3
var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]
numIslands(grid)

/** Fact
 * 1. 0為水域、1為土地
 * 2. 1的周圍圍繞著0代表一個島嶼
 * 3. 判斷陣列中有多少島嶼?
 *
 * 解題
 * 1. 這張圖有七個1，代表島嶼的最大值為7
 * [rows-1]最上邊
 * [rows+1]最下邊
 * [cols-1]最左邊
 * [cols+1]最右邊
 *
 * [row-1]向上1格
 * [row+1]向下1格
 * [col-1]向左1格
 * [col+1]向右1格
 */