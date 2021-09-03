/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   if (m === 1 || n === 1) return 1;
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// };

// var map = {};
// var uniquePaths = function (m, n) {
//   var res = 0;
//   if (map[`${m}_${n}`] !== undefined) {
//     return map[`${m}_${n}`];
//   }
//   if (m === 1 || n === 1) {
//     res = 1;
//   } else {
//     res = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
//   }
//   map[`${m}_${n}`] = res;
//   map[`${n}_${m}`] = res;
//   return res;
// };

var uniquePaths = function (m, n) {
  var dp = new Array(m);
  for (var i = 0; i < m; i++) {
    var arr = new Array(n);
    if (i === 0) {
      arr.fill(1);
    } else {
      arr.fill(0);
    }
    dp[i] = arr;
    dp[i][0] = 1;
  }
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// @lc code=end
