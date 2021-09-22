/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const version1List = version1.split(".");
  const version2List = version2.split(".");
  var index = 0;
  while (version1List.length > index && version2List.length > index) {
    var num1 = Number(version1List[index]);
    var num2 = Number(version2List[index]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
    index++;
  }
  var flat = 0;
  for (var i = index; i < version1List.length || i < version2List.length; i++) {
    flat += version1List[i] || 0;
    flat -= version2List[i] || 0;
  }
  if (flat > 0) return 1;
  if (flat < 0) return -1;
  return 0;
};
// @lc code=end
