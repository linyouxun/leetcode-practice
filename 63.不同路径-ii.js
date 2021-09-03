/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var dp = new Array(m);
  for (var i = 0; i < m; i++) {
    var arr = new Array(n);
    arr.fill(0);
    dp[i] = arr;
  }
  for (var i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      break;
    }
  }
  for (var i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 0) {
      dp[0][i] = 1;
    } else {
      break;
    }
  }
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
