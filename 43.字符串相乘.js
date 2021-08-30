/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  var len1 = num1.length;
  var len2 = num2.length;
  var result = new Array(len1 + len2);
  result.fill(0);
  for (var i = 0; i < len1; i++) {
    var carry = 0;
    var factor1 = num1[len1 - 1 - i];
    for (var j = 0; j < len2; j++) {
      var factor2 = num2[len2 - 1 - j];
      var mul = factor1 * factor2 + carry + result[len1 + len2 - 1 - (i + j)];
      result[len1 + len2 - 1 - (i + j)] = mul % 10;
      carry = (mul / 10) | 0;
    }
    if (carry) {
      result[len1 - 1 - i] += carry;
    }
  }
  var str = "";
  for (var i = 0; i < result.length; i++) {
    while (result[i] === 0 && str === "") i++;
    str += result[i];
  }
  return str;
};
// @lc code=end
