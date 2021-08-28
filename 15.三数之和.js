/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   var result = [];
//   var target = 0;
//   if (nums.length > 2) {
//     nums.sort((i, i2) => i - i2);
//     bfs(nums, 0, [], result);
//   }
//   return result;
// };

// function bfs(nums, index, tmp, result) {
//   if (tmp.length === 3) {
//     if (tmp[0] + tmp[1] + tmp[2] === 0) {
//       result.push([...tmp]);
//     }
//     return;
//   }
//   for (var i = index; i < nums.length; i++) {
//     tmp.push(nums[i]);
//     bfs(nums, i + 1, tmp, result);
//     var oldnum = tmp.pop();
//     if ((tmp[0] || 0) + (tmp[1] || 0) + (tmp[2] || 0) + oldnum > 0) {
//       break;
//     }
//     while (oldnum === nums[i + 1]) {
//       i++;
//     }
//   }
// }
// var threeSum = function (nums) {
//   var result = [];
//   var len = nums.length;
//   if (len > 2) {
//     nums.sort((i, i2) => i - i2);
//     var target = 0;
//     for (var i = 0; i < len - 2; i++) {
//       if (nums[i] > target) break;
//       if (i > 0 && nums[i] === nums[i - 1]) continue;
//       var j = i + 1,
//         k = len - 1;
//       while (j < k) {
//         if (nums[i] + nums[j] + nums[k] === target) {
//           result.push([nums[i], nums[j], nums[k]]);
//           do {
//             j++;
//           } while (nums[j] === nums[j - 1]);
//           do {
//             k--;
//           } while (nums[k] === nums[k + 1]);
//         } else if (target - nums[i] > nums[j] + nums[k]) {
//           j++;
//         } else if (target - nums[i] < nums[j] + nums[k]) {
//           k--;
//         }
//       }
//     }
//   }
//   return result;
// };
var threeSum = function (nums) {
  var result = [];
  var len = nums.length;
  if (len > 2) {
    nums.sort((i, i2) => i - i2);
    var target = 0;
    for (var i = 0; i < len - 2; i++) {
      if (nums[i] > target) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      var j = i + 1,
        k = len - 1;
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
          do {
            j++;
          } while (nums[j] === nums[j - 1]);
        }
        if (target - nums[i] > nums[j] + nums[k]) {
          while (target - nums[i] > nums[j] + nums[k] && j < k) j++;
        }
        if (target - nums[i] < nums[j] + nums[k]) {
          while (target - nums[i] < nums[j] + nums[k] && j < k) k--;
        }
      }
    }
  }
  return result;
};
// @lc code=end
