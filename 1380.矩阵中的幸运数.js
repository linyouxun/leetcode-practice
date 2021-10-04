/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  var res = [];
  for (var i = 0; i < matrix.length; i++) {
    var maxNum = matrix[i][0];
    var index = 0;
    for (var j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < maxNum) {
        maxNum = matrix[i][j];
        index = j;
      }
    }
    var flag = true;
    for (var z = 0; z < matrix.length; z++) {
      flag &= matrix[z][index] <= maxNum;
    }
    if (flag) {
      res.push(maxNum);
    }
  }
  return res;
};
// @lc code=end
