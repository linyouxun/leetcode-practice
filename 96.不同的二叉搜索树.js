/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var dp = [1, 1, 2];
  for (var i = 3; i <= n; i++) {
    var sum = 0;
    for (var j = 0; j < i; j++) {
      sum += dp[i - 1 - j] * dp[j];
    }
    dp[i] = sum;
  }
  return dp[n];
};
// @lc code=end
