/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var map = {};
var countAndSay = function (n) {
  var s = "1";
  for (var j = 1; j <= n; j++) {
    map[j] = s;
    var newS = "";
    for (var i = 0; i < s.length; ) {
      var count = 1;
      while (s[i] === s[i + count]) {
        count++;
      }
      newS += count + s[i];
      i += count;
    }
    s = newS;
  }
  return map[n];
};
// @lc code=end
