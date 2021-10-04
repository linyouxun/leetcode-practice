/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var q = [];
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    if (q[0] < i - k + 1) {
      q.shift();
    }
    q.push(i);
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
};
// @lc code=end
