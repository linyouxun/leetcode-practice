/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  //   return x == x.toString().split("").reverse().join("");
  var num = x.toString();
  var len = num.length;
  for (var i = 0; i <= len / 2; i++) {
    if (num[i] !== num[len - i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
