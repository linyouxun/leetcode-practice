/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.list = Array.from(nums);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.list[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  //   var sum = 0;
  //   for (var i = left; i <= right; i++) {
  //     sum += this.list[i] || 0;
  //   }
  //   return sum;

  var sum = 0;
  this.list.forEach((ele, index) => {
    if (index >= left && index <= right) {
      sum += this.list[index] || 0;
    }
  });
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
