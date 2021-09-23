/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  var chars = paragraph.replace(/[^a-zA-Z ]/g, " ").split(/ +/);
  var map = {};
  var maxStr = "";
  var max = 0;
  chars.forEach((char) => {
    var c = char.toLowerCase();
    if (!banned.includes(c)) {
      map[c] = map[c] || 0;
      map[c]++;
      if (map[c] > max) {
        maxStr = c;
        max = map[c];
      }
    }
  });
  return maxStr;
};
// @lc code=end
