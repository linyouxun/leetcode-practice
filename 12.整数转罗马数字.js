/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 * 
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var result = [];
  num = getRoman(num, ["M", "", ""], 1000, result);
  num = getRoman(num, ["C", "D", "M"], 100, result);
  num = getRoman(num, ["X", "L", "C"], 10, result);
  num = getRoman(num, ["I", "V", "X"], 1, result);
  return result.join("");
};

function getRoman(num, units, rate, result) {
  var count = (num / rate) | 0;
  num -= count * rate;
  if (count === 9) {
    result.push(units[0], units[2]);
  } else if (count === 4) {
    result.push(units[0], units[1]);
  } else {
    result.push(units[1].repeat((count / 5) | 0));
    result.push(units[0].repeat(count % 5));
  }
  return num;
}

// @lc code=end
