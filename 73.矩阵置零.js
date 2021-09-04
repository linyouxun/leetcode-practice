/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var map = {};
  for (var i = 0; i < m; i++) {
    var flat = false;
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        map[j] = true;
        flat = true;
      }
    }
    if (flat) {
      for (var j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  Object.keys(map).map((key) => {
    for (var i = 0; i < m; i++) {
      matrix[i][key] = 0;
    }
  });
  return matrix;
};
// @lc code=end
