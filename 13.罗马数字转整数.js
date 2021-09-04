/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  var sum = 0;
  for (var i = 0; i < s.length; ) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        sum += 4;
        i += 2;
      } else if (s[i + 1] === "X") {
        sum += 9;
        i += 2;
      }
      while (s[i++ + 1] === "I") {
        sum += 1;
      }
    }

    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        sum += 40;
        i += 2;
      } else if (s[i + 1] === "C") {
        sum += 90;
        i += 2;
      }
      while (s[i++ + 1] === "X") {
        sum += 10;
        i++;
      }
    }

    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        sum += 400;
        i += 2;
      } else if (s[i + 1] === "M") {
        sum += 900;
        i += 2;
      }
      while (s[i++ + 1] === "C") {
        sum += 100;
        i++;
      }
    }
    if (s[i++] === "M") {
      sum += 1000;
    }
  }
  return sum;
};
// @lc code=end
