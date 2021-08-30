/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var left = 0,
    right = nums.length - 1;
  var result = [-1, -1];
  while (left <= right) {
    var mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      var l = mid,
        r = mid;
      while (nums[l - 1] === target) l--;
      while (nums[r + 1] === target) r++;
      return [l, r];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
// @lc code=end
