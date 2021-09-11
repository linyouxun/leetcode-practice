/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//   var stack = [];
//   var dp = new Uint32Array(s.length + 1);
//   for (var i = 0; i < s.length; i++) {
//     var c = s[i];
//     if (stack.length === 0) {
//       stack.push(c);
//     } else {
//       var sc = stack[stack.length - 1];
//       if (sc === "(" && c === ")") {
//         dp[i + 1] = Math.max(2 + dp[i - 1], 2 + dp[i]);
//         stack.pop();
//       } else {
//         stack.push(c);
//       }
//     }
//   }
//   for (var i = dp.length - 2; i >= 0; i--) {
//     if (dp[i + 1] > 0 && dp[i + 1] <= dp[i]) {
//       dp[i] += dp[i + 1] - 1;
//     } else {
//       dp[i] = Math.max(dp[i + 1] - 1, dp[i], 0);
//     }
//   }
//   var count = 0;
//   var max = 0;
//   for (var i = 0; i < dp.length; i++) {
//     if (dp[i] > 0) {
//       count++;
//     } else {
//       max = Math.max(max, count);
//       count = 0;
//     }
//   }
//   return Math.max(max, count);
// };
var longestValidParentheses = function (s) {
  var stack = [];
  var stackNum = [-1];
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (stack.length === 0) {
      stack.push(c);
      stackNum.push(i);
    } else {
      var sc = stack[stack.length - 1];
      if (sc === "(" && c === ")") {
        stack.pop();
        stackNum.pop();
      } else {
        stack.push(c);
        stackNum.push(i);
      }
    }
  }
  stackNum.push(s.length);
  var count = 0;
  for (var i = 1; i < stackNum.length; i++) {
    count = Math.max(stackNum[i] - stackNum[i - 1] - 1, count);
  }
  return count;
};
// @lc code=end
