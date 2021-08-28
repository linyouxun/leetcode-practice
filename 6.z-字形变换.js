/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
<<<<<<< HEAD
var convert = function(s, numRows) {

};
// @lc code=end

=======
var convert = function (s, numRows) {
  var result = [];
  if (numRows === 1) return s;
  for (var i = 0; i < numRows; i++) {
    var n = 0;
    if (i === 0 || numRows === i + 1) {
      while (true) {
        var num = s[(numRows - 1) * 2 * n + i];
        if (num === undefined) {
          break;
        }
        result.push(num);
        n++;
      }
    } else {
      while (true) {
        var num = s[(numRows - 1) * 2 * n + i];
        if (num === undefined) {
          break;
        }
        result.push(num);
        var num = s[(numRows - 1) * 2 * (n + 1) - i];
        if (num === undefined) {
          break;
        }
        result.push(num);
        n++;
      }
    }
  }
  return result.join("");
};
// @lc code=end
>>>>>>> 16, 8
