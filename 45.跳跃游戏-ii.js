/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 * [2,3,1,1,4]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (N) {
//   let len = N.length - 1,
//     curr = -1,
//     next = 0,
//     ans = 0;
//   for (let i = 0; next < len; i++) {
//     if (i > curr) {
//       ans++;
//       curr = next;
//     }
//     next = Math.max(next, N[i] + i);
//   }
//   return ans;
// };
var jump = function (N) {
  var dp = new Array(N.length);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (var i = 1; i < N.length; i++) {
    for (var j = 0; j < N[i - 1]; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i - 1] + 1);
    }
  }
  return dp[N.length - 1];
};
// @lc code=end
