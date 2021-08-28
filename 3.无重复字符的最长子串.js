/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;
  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}
// var lengthOfLongestSubstring = function (s) {
//   var len = s.length;
//   if (len === 0) {
//     return 0;
//   }
//   var max = 0;
//   var map = {};
//   for (var i = 0; i < len; ) {
//     for (var j = i; j < len; j++) {
//       if (map[s[j]] !== undefined) {
//         break;
//       }
//       map[s[j]] = j;
//     }
//     var mapKeys = Object.keys(map);
//     i = map[s[j]] + 1;
//     max = Math.max(max, mapKeys.length);
//     map = {};
//     // console.log("mapKeys", mapKeys);
//   }
//   return max;
// };
// @lc code=end
