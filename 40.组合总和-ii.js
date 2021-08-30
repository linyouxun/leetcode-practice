/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  var result = [];
  candidates.sort((i, i2) => i - i2);
  dfs(candidates, target, 0, [], result);
  return result;
};

function dfs(candidates, target, index, tmp, result) {
  if (target === 0) {
    result.push([...tmp]);
    return;
  }
  if (target < 0) {
    return;
  }
  for (var i = index; i < candidates.length; i++) {
    var num = candidates[i];
    tmp.push(num);
    dfs(candidates, target - num, i + 1, tmp, result);
    tmp.pop();
    while (num === candidates[i + 1]) i++;
  }
}
// @lc code=end
