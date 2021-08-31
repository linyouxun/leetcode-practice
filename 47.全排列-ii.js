/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var result = [];
  nums.sort((i, i2) => i - i2);
  var used = {};
  for (var i = 0; i < nums.length; i++) {
    used[nums[i]] = (used[nums[i]] || 0) + 1;
  }
  dfs(nums, [], used, result);
  return result;
};
function dfs(nums, tmp, used, result) {
  if (nums.length === tmp.length) {
    result.push([...tmp]);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (used[num] > 0) {
      used[num]--;
      tmp.push(num);
      dfs(nums, tmp, used, result);
      tmp.pop();
      used[num]++;
      while (num === nums[i + 1]) i++;
    }
  }
}
// @lc code=end
