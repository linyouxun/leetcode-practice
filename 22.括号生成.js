/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = [];
  bfs(n, 0, [], result);
  return result;
};

function bfs(left, right, tmp, result) {
  if (left === 0 && right === 0) {
    result.push(tmp.join(""));
    return;
  }
  if (left) {
    tmp.push("(");
    bfs(left - 1, right + 1, tmp, result);
    tmp.pop();
  }
  if (right) {
    tmp.push(")");
    bfs(left, right - 1, tmp, result);
    tmp.pop();
  }
}

// @lc code=end
