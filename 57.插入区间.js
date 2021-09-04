/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  var result = [newInterval];
  for (var i = 0; i < intervals.length; i++) {
    var interval = intervals[i];
    if (newInterval[0] > interval[1]) {
      // 左边
      result = [
        ...result.slice(0, result.length - 1),
        interval,
        result[result.length - 1],
      ];
    } else if (newInterval[1] < interval[0]) {
      // 右边
      result = [...result, ...intervals.slice(i)];
      break;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }
  return result;
};
// @lc code=end
