/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    map[num] = map[num] || { count: 0, key: num };
    map[num].count++;
  }
  var sortNums = Object.values(map).sort((i, i2) => {
    return i2.count - i.count;
  });
  return sortNums.splice(0, k).map((ele) => ele.key);
};
// @lc code=end
