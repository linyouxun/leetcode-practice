/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = 0;
  for (var i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  return candies.map((ele) => {
    if (ele + extraCandies >= max) {
      return true;
    }
    return false;
  });
};
// @lc code=end
