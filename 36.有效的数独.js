/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (var i = 0; i < 9; i++) {
    var row = new Set();
    var col = new Set();
    var box = new Set();
    for (var j = 0; j < 9; j++) {
      var rowNum = board[i][j];
      var colNum = board[j][i];
      var boxNum =
        board[((j / 3) | 0) + ((i / 3) | 0) * 3][(j % 3) + (i % 3 | 0) * 3];
      if (rowNum != ".") {
        if (row.has(rowNum)) {
          return false;
        }
        row.add(rowNum);
      }
      if (colNum != ".") {
        if (col.has(colNum)) {
          return false;
        }
        col.add(colNum);
      }
      if (boxNum != ".") {
        if (box.has(boxNum)) {
          return false;
        }
        box.add(boxNum);
      }
    }
  }
  return true;
};
// @lc code=end
