/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};
// var groupAnagrams = function (strs) {
//   var map = {};
//   for (var i = 0; i < strs.length; i++) {
//     var list = new Array(26);
//     list.fill(0);
//     for (var j = 0; j < strs[i].length; j++) {
//       list[strs[i][j].charCodeAt() - 97] += 1;
//     }
//     var s = list.join();
//     if (map[s]) {
//       map[s].push(strs[i]);
//     } else {
//       map[s] = [strs[i]];
//     }
//   }
//   return Object.values(map);
// };
// @lc code=end
