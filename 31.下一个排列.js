/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  var flat = true;
  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      var numi = nums[i];
      for (var j = i; j < nums.length - 1; j++) {
        for (var k = i + 1; k < nums.length - j + i + 1; k++) {
          if (nums[k - 1] > nums[k]) {
            var num = nums[k - 1];
            nums[k - 1] = nums[k];
            nums[k] = num;
          }
        }
      }
      //   console.log(nums, i);
      for (var j = nums.length - 1; j > i; j--) {
        if (nums[j - 1] <= numi && nums[j] > numi) {
          var num = nums[j - 1];
          nums[j - 1] = nums[j];
          nums[j] = num;
        }
      }
      //   var num = nums[i];
      //   nums[i] = nums[i + 1];
      //   nums[i + 1] = num;
      flat = false;
      break;
    }
  }
  if (flat) {
    nums.sort((i, i2) => i - i2);
  }
  return nums;
};
// @lc code=end
