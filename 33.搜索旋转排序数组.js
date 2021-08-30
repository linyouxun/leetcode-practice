/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return find(nums, 0, nums.length - 1, target);
};

function find(nums, left, right, target) {
  if (left <= right) {
    var mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] >= target) {
        return find(nums, left, mid - 1, target);
      } else {
        return find(nums, mid + 1, right, target);
      }
    } else {
      if (nums[right] >= target && nums[mid] <= target) {
        return find(nums, mid + 1, right, target);
      } else {
        return find(nums, left, mid - 1, target);
      }
    }
  }
  return -1;
}

// @lc code=end
