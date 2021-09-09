/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var swap = function (i, j) {
    [nums[j]] = [nums[i]];
  };
  var count = 1;
  var j = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      count++;
      if (count < 3) {
        swap(i, j);
        j++;
      }
    } else {
      count = 1;
      swap(i, j);
      j++;
    }
  }
  return j;
};
// @lc code=end
