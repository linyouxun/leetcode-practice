/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var sum = 0;
  var flat = 0;
  for (var i = 0; i < s.length; i++) {
    if (/ /.test(s[i]) && flat === 0) {
      continue;
    } else if (/-/.test(s[i]) && flat === 0) {
      flat = -1;
    } else if (/\+/.test(s[i]) && flat === 0) {
      flat = 1;
    } else if (/[0-9]/.test(s[i])) {
      if (flat === 0) {
        flat = 1;
      }
      sum = sum * 10 + +s[i];
    } else {
      break;
    }
  }
  if (sum * flat < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }
  if (sum * flat > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return sum * flat;
};
// @lc code=end
