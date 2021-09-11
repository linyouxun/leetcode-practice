/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function (n, k) {
//   var nums = [];
//   for (var i = 1; i <= n; i++) {
//     nums.push(i);
//   }
//   var result = [];
//   dfs(nums, {}, [], result);
//   return result[k - 1];
// };

// function dfs(nums, map, tmp, result) {
//   if (nums.length === tmp.length) {
//     result.push(tmp.join(""));
//     return;
//   }
//   for (var i = 0; i < nums.length; i++) {
//     var num = nums[i];
//     if (!map[num]) {
//       tmp.push(num);
//       map[num] = true;

//       dfs(nums, map, tmp, result);

//       tmp.pop();
//       map[num] = false;
//     }
//   }
// }

var getPermutation = function (n, k) {
  var nums = [];
  for (var i = 1; i <= n; i++) {
    nums.push(i);
  }
  var str = "";
  var len = n;
  k--;
  while (str.length < n) {
    var c = jc(len - 1);
    var index = (k / c) | 0;
    str += nums[index];
    nums.splice(index, 1);
    k -= c * index;
    len--;
  }
  return str;
};
function jc(len) {
  var mul = 1;
  for (var i = 2; i <= len; i++) mul *= i;
  return mul;
}
// @lc code=end
