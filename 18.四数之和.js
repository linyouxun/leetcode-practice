/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var result = [];
  var len = nums.length;

  nums.sort((a, b) => a - b);
  for (var i = 0; i < len - 3; i++) {
    // if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (var j = i + 1; j < len - 2; j++) {
      // if (nums[i] + nums[j] > target) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      var k = j + 1,
        z = len - 1;
      while (k < z) {
        var sum = nums[i] + nums[j] + nums[k] + nums[z];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[z]]);
          do {
            k++;
          } while (nums[k] === nums[k - 1] && k < z);
          do {
            z--;
          } while (nums[z] === nums[z + 1] && k < z);
        }
        while (target - nums[i] - nums[j] > nums[k] + nums[z] && k < z) k++;
        while (target - nums[i] - nums[j] < nums[k] + nums[z] && k < z) z--;
      }
    }
  }

  return result;
};
// @lc code=end
