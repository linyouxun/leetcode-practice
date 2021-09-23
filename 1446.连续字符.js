/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  var max = 0;
  var c = "";
  var curMax = 1;
  for (var i = 0; i < s.length; i++) {
    if (c !== s[i]) {
      c = s[i];
      max = Math.max(max, curMax);
      curMax = 1;
    } else {
      curMax++;
    }
  }
  return Math.max(max, curMax);
};
// @lc code=end
