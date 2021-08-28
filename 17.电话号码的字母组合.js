/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  var result = [];
  for (var i = 0; i < digits.length; i++) {
    const chars = map[digits[i]].split("");
    if (result.length === 0) {
      result = chars;
    } else {
      result = result
        .map((ele) => {
          return chars.map((key) => {
            return ele + key;
          });
        })
        .flat();
    }
  }
  return result;
};
// @lc code=end
