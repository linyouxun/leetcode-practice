/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var paths = path.split(/\/+/g);
  var stack = [];
  for (var i = 0; i < paths.length; i++) {
    var p = paths[i];
    if (p === "." || p === "") {
      continue;
    } else if (p === "..") {
      stack.pop();
    } else {
      stack.push(p);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
