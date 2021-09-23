/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  //   nums.sort((i, i2) => i - i2);
  var map = { 0: -1, 1: -1, 2: -1 };
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    map[2]++;
    if (num < 2) {
      if (map[2] - 1 !== map[1]) {
        nums[map[2]] = 2;
      }
      map[1]++;
      nums[map[1]] = 1;
    }
    if (num < 1) {
      if (map[1] - 1 !== map[0]) {
        nums[map[1]] = 1;
      }
      map[0]++;
      nums[map[0]] = 0;
    }
  }
};
// @lc code=end
