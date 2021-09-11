/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// "barfoothefoobarman", words = ["foo","bar"]
var findSubstring = function (s, words) {
  var strLen = words[0].length;
  var minLen = words.length * strLen;
  var result = [];
  var map = words.reduce((cur, item) => {
    var count = cur[item] || 0;
    return { ...cur, [item]: count + 1 };
  }, {});
  var res = {};
  for (var i = 0; i < s.length - strLen + 1; i++) {
    var str = s.slice(i, i + strLen);
    var m = { ...map };
    var z = i - strLen;
    if (m[str] > 0) {
      m[str]--;
      for (; z >= 0; z -= strLen) {
        var str2 = s.slice(z, z - strLen);
        if (m[str2] > 0) {
          m[str2]--;
        } else {
          break;
        }
      }
      for (var j = i + strLen; j < s.length; j += strLen) {
        var str2 = s.slice(j, j + strLen);
        if (m[str2] > 0) {
          m[str2]--;
        } else {
          break;
        }
      }
    }

    if (Object.values(m).filter(Boolean).length === 0) {
      res[z + strLen] = true;
    }
  }
  return Object.keys(res);
};
// @lc code=end
