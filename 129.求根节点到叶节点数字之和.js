/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumNumbers = function (root, sum = 0) {
//   if (!root) return sum;
//   var num = Number(root.val) + sum * 10;
//   var sumII = 0;
//   if (root.left) {
//     sumII += sumNumbers(root.left, num);
//   }
//   if (root.right) {
//     sumII += sumNumbers(root.right, num);
//   }
//   return sumII ? sumII : num;
// };

var sumNumbers = function (root, sum = "") {
  if (!root) return 0;
  sum += root.val;
  if (!root.left && !root.right) return Number(sum);
  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
};
// @lc code=end
