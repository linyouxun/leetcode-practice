/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// var search = function (nums, target) {
//   var left = 0;
//   var right = nums.length - 1;
//   while (left < right) {
//     var mid = ((left + right) / 2) | 0;
//     if (nums[mid] === target) {
//       return true;
//     } else {
//       if (nums[left] <= nums[mid]) {
//         if (nums[left] <= target && nums[mid] > target) {
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       } else {
//         if (nums[right] >= target && nums[mid] < target) {
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//     }
//   }
//   return false;
// };
var search = function (nums, target) {
  if (nums.length === 1 && nums[0] === target) return true;
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return true;
    } else {
      if (nums[left] < nums[mid]) {
        if (nums[left] <= target && nums[mid] > target) {
          right = mid;
        } else {
          left = mid + 1;
        }
      } else {
        if (nums[right] >= target && nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
    }
  }
  return false;
};
// @lc code=end
