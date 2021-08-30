/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var result = [];
  candidates.sort((i, i2) => i2 - i);
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
    dfs(candidates, target - num, i, tmp, result);
    tmp.pop();
  }
}
// @lc code=end
