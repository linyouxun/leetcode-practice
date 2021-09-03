/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var m = matrix.length;
  var n = matrix[0].length;
  if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false;
  var i, j;
  for (i = 0, j = matrix.length - 1; i <= j; ) {
    var mid = ((i + j) / 2) | 0;
    if (matrix[mid][0] === target) {
      return true;
    } else if (matrix[mid][0] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  i = ((i + j) / 2) | 0;
  for (k = 0, z = matrix[i].length - 1; k <= z; ) {
    var mid = ((k + z) / 2) | 0;
    if (matrix[i][mid] === target) {
      return true;
    } else if (matrix[i][mid] > target) {
      z = mid - 1;
    } else {
      k = mid + 1;
    }
  }
  return false;
};
// @lc code=end
