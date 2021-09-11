/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function (s) {
//   var map = {};
//   for (var i = 0; i < 26; i++) {
//     var c = String.fromCharCode(65 + i);
//     map[i + 1] = c;
//   }
//   var result = [];
//   dfs(s, 0, map, [], result);
//   return result.length;
// };

// function dfs(s, index, map, tmp, result) {
//   if (s.length <= index) {
//     result.push([...tmp]);
//     return;
//   }
//   var c = s.slice(index, index + 1);
//   if (map[c]) {
//     tmp.push(map[c]);
//     dfs(s, index + 1, map, tmp, result);
//     tmp.pop();
//   }
//   if (s.length >= index + 2) {
//     var c2 = s.slice(index, index + 2);
//     if (map[c2]) {
//       tmp.push(map[c2]);
//       dfs(s, index + 2, map, tmp, result);
//       tmp.pop();
//     }
//   }
// }

// var numDecodings = function (s) {
//   var map = {};
//   for (var i = 0; i < 26; i++) {
//     var c = String.fromCharCode(65 + i);
//     map[i + 1] = c;
//   }
//   var result = [];
//   var count = 0;
//   for (var i = 0; i < s.length; i++) {
//     var c = s.slice(i, i + 1);
//     var count = 0;
//     if (map[c]) {
//       count++;
//     }
//     if (s.length >= i + 2) {
//       var c2 = s.slice(i, i + 2);
//       if (map[c2]) {
//         count++;
//       }
//     }
//     result[i] = count;
//   }
//   return result.reduce((m, i) => {
//     return m * i;
//   }, 1);
// };

var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  var result = new Uint32Array(s.length + 1);
  result[0] = 1;
  result[1] = 1;
  for (var i = 2; i < s.length + 1; i++) {
    var c = Number(s.slice(i - 1, i));
    var count = 0;
    if (c > 0 && c < 10) {
      result[i] += result[i - 1];
    }
    var c2 = Number(s.slice(i - 2, i));
    if (c2 > 9 && c2 < 27) {
      result[i] += result[i - 2];
    }
  }
  return result[s.length];
};

// @lc code=end
