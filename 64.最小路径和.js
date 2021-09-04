/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var m = grid.length;
  var n = grid[0].length;
  var dp = Array.from({ length: m }, () => new Uint32Array(n));
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
