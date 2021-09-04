/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var dp = new Array(n);
  for (var i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }

  var index = n - 1,
    x = 0,
    y = 0,
    len = n * n;
  if (n % 2 === 1) {
    dp[((n - 1) / 2) | 0][[((n - 1) / 2) | 0]] = n * n;
    len -= 1;
  }
  for (var i = 0; i < len; ) {
    for (var j = 0; j < index && i < len; j++, y++, i++) {
      dp[x][y] = i + 1;
    }
    for (var j = 0; j < index && i < len; j++, x++, i++) {
      dp[x][y] = i + 1;
    }
    for (var j = 0; j < index && i < len; j++, y--, i++) {
      dp[x][y] = i + 1;
    }
    for (var j = 0; j < index && i < len; j++, x--, i++) {
      dp[x][y] = i + 1;
    }
    index -= 2;
    x += 1;
    y += 1;
  }
  return dp;
};
// @lc code=end
