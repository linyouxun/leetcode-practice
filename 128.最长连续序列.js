/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var s = new Set();
  for (var i = 0; i < nums.length; i++) {
    s.add(nums[i]);
  }
  var max = 0;
  for (var num of s) {
    if (s.has(num - 1)) continue;
    var curCount = 1;
    while (s.has(num + 1)) {
      curCount++;
      num++;
    }
    max = Math.max(max, curCount);
  }
  return max;
};
// @lc code=end
