/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var len = nums.length,
    next = 0,
    cur = -1;
  for (var i = 0; next < nums.length; i++) {
    if (i > cur) {
      cur = next;
    }
    next = Math.max(next, i + nums[i]);
    if (next < i + 1) {
      break;
    }
  }
  return next >= nums.length - 1;
};
// @lc code=end
