/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var m = board.length;
  var n = board[0].length;
  var dp = new Array(m);
  for (var i = 0; i < m; i++) {
    dp[i] = new Array(n);
    dp[i].fill(0);
  }
  function check(board, x, y, index, word) {
    if (board[x][y] === word[index] && dp[x][y] === 0) {
      if (index + 1 === word.length) return true;
      dp[x][y] = 1;
      var up = false,
        right = false,
        down = false,
        left = false;
      // 上
      if (x > 0) {
        up = check(board, x - 1, y, index + 1, word, dp);
      }
      // 右
      if (y < n - 1) {
        right = check(board, x, y + 1, index + 1, word, dp);
      }
      // 下
      if (x < m - 1) {
        down = check(board, x + 1, y, index + 1, word, dp);
      }
      // 左
      if (y > 0) {
        left = check(board, x, y - 1, index + 1, word, dp);
      }
      dp[x][y] = 0;
      return up || right || down || left;
    }
    return false;
  }
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (check(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

// @lc code=end
