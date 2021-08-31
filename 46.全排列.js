/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var result = [];
  dfs(nums, 0, [], result);
  return result;
};
function dfs(nums, count, tmp, result) {
  if (nums.length === count) {
    result.push([...tmp]);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (tmp.indexOf(num) === -1) {
      tmp.push(num);
      dfs(nums, count + 1, tmp, result);
      tmp.pop();
    }
  }
}
// @lc code=end
