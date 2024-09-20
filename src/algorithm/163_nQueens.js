let perfect = 0;
NQueens(5);
console.log("Number of Perfect Solutions is " + perfect);

function NQueens(n) {
  // 初始化棋盤
  let board = Array.from({ length: n }, () => Array(n).fill(null));

  // 檢查當前位置是否可以放置皇后
  function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) {
      if (board[row][i] === "Q") return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  // 回溯算法實現
  function solveNQUtil(board, col) {
    if (col >= n) {
      perfect++;
      console.log("Perfect");
      console.log(board);
      return true;
    }

    let res = false;
    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col)) {
        board[i][col] = "Q";
        res = solveNQUtil(board, col + 1) || res;
        board[i][col] = null; // backtrack
      }
    }

    return res;
  }

  solveNQUtil(board, 0);
}
