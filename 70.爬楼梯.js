/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var list = [0, 1, 2];
  for (var i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list[n];
};
// @lc code=end
