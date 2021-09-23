/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  num = (4294967296 + num) % 4294967296;
  var str = "";
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  while (num > 0) {
    str = list[num % 16] + str;
    num = (num / 16) | 0;
  }
  return !str ? "0" : str;
};
// @lc code=end
