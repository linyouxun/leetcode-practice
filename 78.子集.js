/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var result = [[]];
  dfs(nums, 0, [], result);
  return result;
};
function dfs(nums, index, tmp, result) {
  if (nums.length <= index) {
    return;
  }
  dfs(nums, index + 1, tmp, result);
  var num = nums[index];
  tmp.push(num);
  result.push([...tmp]);
  dfs(nums, index + 1, tmp, result);
  tmp.pop();
}

// var subsets = function (nums) {
//   var result = [];
//   dfs(nums, 0, [], result);
//   return result;
// };
// function dfs(nums, index, tmp, result) {
//   if (index === nums.length) {
//     result.push([...tmp]);
//     return;
//   }
//   dfs(nums, index + 1, tmp, result);
//   tmp.push(nums[index]);
//   dfs(nums, index + 1, tmp, result);
//   tmp.pop();
// }
// @lc code=end
