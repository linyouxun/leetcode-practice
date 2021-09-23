/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

const { join } = require("path/posix");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  for (var i = 0, j = 0; i < nums.length; ) {
    if (nums[i] === 0) {
      i++;
    } else {
      swap(i, j);
      j++;
      i++;
    }
  }
};
// @lc code=end
