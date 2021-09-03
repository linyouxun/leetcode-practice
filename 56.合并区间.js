/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((i, i2) => {
    if (i[0] === i2[0]) {
      return i[1] - i2[1];
    }
    return i[0] - i2[0];
  });
  var result = [];
  var nums = intervals[0];
  for (var i = 1; i < intervals.length; i++) {
    var interval = intervals[i];
    if (nums[1] >= interval[0]) {
      nums[1] = Math.max(nums[1], interval[1]);
    } else {
      result.push(nums);
      nums = interval;
    }
  }
  result.push(nums);
  return result;
};
// @lc code=end
