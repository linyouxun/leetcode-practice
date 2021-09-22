/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var nums = Array.from({ length: n }, (_, i) => i + 1);
  var result = [];
  dfs(nums, 0, [], result, k);
  return result;
};

function dfs(nums, index, tmp, result, k) {
  if (tmp.length === k) {
    result.push([...tmp]);
    return;
  }
  if (nums.length === index) {
    return;
  }
  dfs(nums, index + 1, tmp, result, k);
  if (tmp.length < k) {
    var num = nums[index];
    tmp.push(num);
    dfs(nums, index + 1, tmp, result, k);
    tmp.pop();
  }
}
// @lc code=end
