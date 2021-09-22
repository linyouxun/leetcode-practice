/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (z > x + y) return false;
  const terms = { [x]: 1, [y]: 1 };
  let xsum = x;
  let ysum = y;
  let stop = x * y;
  while (xsum < stop || ysum < stop) {
    if (xsum < ysum) {
      terms[ysum - xsum] = 1;
      xsum += x;
    } else {
      terms[xsum - ysum] = 1;
      ysum += y;
    }
  }
  if (terms[z - x] || terms[z - y] || terms[z]) return true;
  return false;
};
// @lc code=end
